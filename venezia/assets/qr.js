/* ═══════════════════════════════════════════════════════════════════════
   QR.js — Encodeur QR autonome (mode byte / UTF-8, versions 1 à 12)
   Venezia Ice · F Corner — aucune dépendance, aucun CDN, 100% hors-ligne.
   Sortie : matrice de modules (booléens) → exploitable en SVG vectoriel.
   Conforme ISO/IEC 18004. Vérifié module par module contre une
   implémentation de référence (voir venezia/README.md).
   ═══════════════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';

  // ── Blocs de correction d'erreur : [nb blocs, codewords totaux, codewords data]
  var ECB = {
    L: {
      1: [[1, 26, 19]], 2: [[1, 44, 34]], 3: [[1, 70, 55]], 4: [[1, 100, 80]],
      5: [[1, 134, 108]], 6: [[2, 86, 68]], 7: [[2, 98, 78]], 8: [[2, 121, 97]],
      9: [[2, 146, 116]], 10: [[2, 86, 68], [2, 87, 69]],
      11: [[4, 101, 81]], 12: [[2, 116, 92], [2, 117, 93]]
    },
    M: {
      1: [[1, 26, 16]], 2: [[1, 44, 28]], 3: [[1, 70, 44]], 4: [[2, 50, 32]],
      5: [[2, 67, 43]], 6: [[4, 43, 27]], 7: [[4, 49, 31]], 8: [[2, 60, 38], [2, 61, 39]],
      9: [[3, 58, 36], [2, 59, 37]], 10: [[4, 69, 43], [1, 70, 44]],
      11: [[1, 80, 50], [4, 81, 51]], 12: [[6, 58, 36], [2, 59, 37]]
    },
    Q: {
      1: [[1, 26, 13]], 2: [[1, 44, 22]], 3: [[2, 35, 17]], 4: [[2, 50, 24]],
      5: [[2, 33, 15], [2, 34, 16]], 6: [[4, 43, 19]], 7: [[2, 32, 14], [4, 33, 15]],
      8: [[4, 40, 18], [2, 41, 19]], 9: [[4, 36, 16], [4, 37, 17]],
      10: [[6, 43, 19], [2, 44, 20]], 11: [[4, 50, 22], [4, 51, 23]],
      12: [[4, 46, 20], [6, 47, 21]]
    },
    H: {
      1: [[1, 26, 9]], 2: [[1, 44, 16]], 3: [[2, 35, 13]], 4: [[4, 25, 9]],
      5: [[2, 33, 11], [2, 34, 12]], 6: [[4, 43, 15]], 7: [[4, 39, 13], [1, 40, 14]],
      8: [[4, 40, 14], [2, 41, 15]], 9: [[4, 36, 12], [4, 37, 13]],
      10: [[6, 43, 15], [2, 44, 16]], 11: [[3, 36, 12], [8, 37, 13]],
      12: [[7, 42, 14], [4, 43, 15]]
    }
  };

  // Positions des motifs d'alignement (versions 2 → 12)
  var ALIGN = {
    2: [6, 18], 3: [6, 22], 4: [6, 26], 5: [6, 30], 6: [6, 34],
    7: [6, 22, 38], 8: [6, 24, 42], 9: [6, 26, 46], 10: [6, 28, 50],
    11: [6, 30, 54], 12: [6, 32, 58]
  };

  // Information de version (BCH 18,6) — versions 7 à 12
  var VERSION_INFO = { 7: 0x07C94, 8: 0x085BC, 9: 0x09A99, 10: 0x0A4D3, 11: 0x0BBF6, 12: 0x0C762 };

  // Bits de niveau de correction dans l'information de format
  var ECL_BITS = { L: 1, M: 0, Q: 3, H: 2 };

  // Bits restants (remainder bits) par version
  function remainderBits(v) { return (v >= 2 && v <= 6) ? 7 : 0; }

  // ── Galois Field GF(256), polynôme primitif 0x11D ──────────────────────
  var EXP = new Uint8Array(512), LOG = new Uint8Array(256);
  (function () {
    var x = 1;
    for (var i = 0; i < 255; i++) {
      EXP[i] = x; LOG[x] = i;
      x <<= 1; if (x & 0x100) x ^= 0x11D;
    }
    for (var j = 255; j < 512; j++) EXP[j] = EXP[j - 255];
  })();

  function gfMul(a, b) { return (a === 0 || b === 0) ? 0 : EXP[LOG[a] + LOG[b]]; }

  var GEN_CACHE = {};
  function generatorPoly(n) {
    if (GEN_CACHE[n]) return GEN_CACHE[n];
    var poly = [1];
    for (var i = 0; i < n; i++) {
      var next = new Array(poly.length + 1).fill(0);
      for (var j = 0; j < poly.length; j++) {
        next[j] ^= gfMul(poly[j], 1);
        next[j + 1] ^= gfMul(poly[j], EXP[i]);
      }
      poly = next;
    }
    return (GEN_CACHE[n] = poly);
  }

  function ecCodewords(data, ecLen) {
    var gen = generatorPoly(ecLen);
    var res = new Array(data.length + ecLen).fill(0);
    for (var i = 0; i < data.length; i++) res[i] = data[i];
    for (var i = 0; i < data.length; i++) {
      var coef = res[i];
      if (coef === 0) continue;
      for (var j = 0; j < gen.length; j++) res[i + j] ^= gfMul(gen[j], coef);
    }
    return res.slice(data.length);
  }

  // ── Encodage des données ───────────────────────────────────────────────
  function utf8Bytes(str) {
    var out = [], i, c;
    for (i = 0; i < str.length; i++) {
      c = str.charCodeAt(i);
      if (c < 0x80) out.push(c);
      else if (c < 0x800) { out.push(0xC0 | (c >> 6), 0x80 | (c & 0x3F)); }
      else if (c >= 0xD800 && c <= 0xDBFF && i + 1 < str.length) {
        var c2 = str.charCodeAt(++i);
        var cp = 0x10000 + ((c - 0xD800) << 10) + (c2 - 0xDC00);
        out.push(0xF0 | (cp >> 18), 0x80 | ((cp >> 12) & 0x3F), 0x80 | ((cp >> 6) & 0x3F), 0x80 | (cp & 0x3F));
      } else { out.push(0xE0 | (c >> 12), 0x80 | ((c >> 6) & 0x3F), 0x80 | (c & 0x3F)); }
    }
    return out;
  }

  function dataCapacity(version, ecl) {
    return ECB[ecl][version].reduce(function (s, g) { return s + g[0] * g[2]; }, 0);
  }

  function pickVersion(byteLen, ecl, minV, maxV) {
    for (var v = minV; v <= maxV; v++) {
      var cci = v < 10 ? 8 : 16;
      var needBits = 4 + cci + byteLen * 8;
      if (needBits <= dataCapacity(v, ecl) * 8) return v;
    }
    return null;
  }

  function buildCodewords(bytes, version, ecl) {
    var bits = [];
    function push(val, len) { for (var i = len - 1; i >= 0; i--) bits.push((val >> i) & 1); }
    push(4, 4);                                   // mode byte
    push(bytes.length, version < 10 ? 8 : 16);    // indicateur de longueur
    for (var i = 0; i < bytes.length; i++) push(bytes[i], 8);

    var totalData = dataCapacity(version, ecl), capBits = totalData * 8;
    for (var t = 0; t < 4 && bits.length < capBits; t++) bits.push(0);  // terminateur
    while (bits.length % 8 !== 0) bits.push(0);

    var cw = [];
    for (var b = 0; b < bits.length; b += 8) {
      var byte = 0;
      for (var k = 0; k < 8; k++) byte = (byte << 1) | bits[b + k];
      cw.push(byte);
    }
    var pads = [0xEC, 0x11], p = 0;
    while (cw.length < totalData) cw.push(pads[p++ % 2]);

    // Découpage en blocs + calcul EC + entrelacement
    var blocks = [], ecBlocks = [], offset = 0, maxData = 0, ecLen = 0;
    ECB[ecl][version].forEach(function (g) {
      for (var n = 0; n < g[0]; n++) {
        var d = cw.slice(offset, offset + g[2]);
        offset += g[2];
        blocks.push(d);
        ecLen = g[1] - g[2];
        ecBlocks.push(ecCodewords(d, ecLen));
        if (d.length > maxData) maxData = d.length;
      }
    });

    var out = [];
    for (var i = 0; i < maxData; i++)
      for (var j = 0; j < blocks.length; j++)
        if (i < blocks[j].length) out.push(blocks[j][i]);
    for (var i = 0; i < ecLen; i++)
      for (var j = 0; j < ecBlocks.length; j++)
        out.push(ecBlocks[j][i]);
    return out;
  }

  // ── Construction de la matrice ─────────────────────────────────────────
  function newMatrix(size, fill) {
    var m = new Array(size);
    for (var i = 0; i < size; i++) m[i] = new Array(size).fill(fill);
    return m;
  }

  function placeFunctionPatterns(m, reserved, version) {
    var size = m.length;

    function finder(r, c) {
      for (var dr = -1; dr <= 7; dr++) for (var dc = -1; dc <= 7; dc++) {
        var rr = r + dr, cc = c + dc;
        if (rr < 0 || cc < 0 || rr >= size || cc >= size) continue;
        var inRing = (dr >= 0 && dr <= 6 && dc >= 0 && dc <= 6);
        var dark = inRing && ((dr === 0 || dr === 6 || dc === 0 || dc === 6) ||
          (dr >= 2 && dr <= 4 && dc >= 2 && dc <= 4));
        m[rr][cc] = dark; reserved[rr][cc] = true;
      }
    }
    finder(0, 0); finder(0, size - 7); finder(size - 7, 0);

    for (var i = 8; i < size - 8; i++) {           // timing patterns
      var dark = (i % 2 === 0);
      m[6][i] = dark; reserved[6][i] = true;
      m[i][6] = dark; reserved[i][6] = true;
    }

    var pos = ALIGN[version] || [];
    for (var a = 0; a < pos.length; a++) for (var b = 0; b < pos.length; b++) {
      var r = pos[a], c = pos[b];
      if ((r <= 8 && c <= 8) || (r <= 8 && c >= size - 9) || (r >= size - 9 && c <= 8)) continue;
      for (var dr = -2; dr <= 2; dr++) for (var dc = -2; dc <= 2; dc++) {
        var ad = Math.max(Math.abs(dr), Math.abs(dc));
        m[r + dr][c + dc] = (ad !== 1);
        reserved[r + dr][c + dc] = true;
      }
    }

    for (var i = 0; i <= 8; i++) {                 // zones réservées format
      if (i !== 6) { reserved[8][i] = true; reserved[i][8] = true; }
    }
    for (var i = 0; i < 8; i++) { reserved[8][size - 1 - i] = true; reserved[size - 1 - i][8] = true; }
    m[size - 8][8] = true; reserved[size - 8][8] = true;   // module noir fixe

    if (version >= 7) {
      for (var i = 0; i < 6; i++) for (var j = 0; j < 3; j++) {
        reserved[i][size - 11 + j] = true;
        reserved[size - 11 + j][i] = true;
      }
    }
  }

  function placeData(m, reserved, cw, version) {
    var size = m.length, bitIdx = 0, total = cw.length * 8;
    function bitAt(i) { return i < total ? ((cw[i >> 3] >> (7 - (i & 7))) & 1) === 1 : false; }
    var up = true;
    for (var col = size - 1; col > 0; col -= 2) {
      if (col === 6) col--;                       // on saute la colonne de timing
      for (var n = 0; n < size; n++) {
        var row = up ? size - 1 - n : n;
        for (var k = 0; k < 2; k++) {
          var c = col - k;
          if (reserved[row][c]) continue;
          m[row][c] = bitAt(bitIdx++);
        }
      }
      up = !up;
    }
  }

  function maskFn(id, r, c) {
    switch (id) {
      case 0: return (r + c) % 2 === 0;
      case 1: return r % 2 === 0;
      case 2: return c % 3 === 0;
      case 3: return (r + c) % 3 === 0;
      case 4: return (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0;
      case 5: return ((r * c) % 2) + ((r * c) % 3) === 0;
      case 6: return (((r * c) % 2) + ((r * c) % 3)) % 2 === 0;
      case 7: return (((r + c) % 2) + ((r * c) % 3)) % 2 === 0;
    }
    return false;
  }

  function bchFormat(data) {
    var rem = data;
    for (var i = 0; i < 10; i++) rem = ((rem << 1) ^ (((rem >>> 9) & 1) * 0x537)) & 0x7FF;
    return ((data << 10) | (rem & 0x3FF)) ^ 0x5412;
  }

  // Information de format : deux copies, autour des trois détecteurs de position
  function applyFormat(m, ecl, mask) {
    var size = m.length, bitsVal = bchFormat((ECL_BITS[ecl] << 3) | mask);
    function bit(i) { return ((bitsVal >> i) & 1) === 1; }
    for (var i = 0; i <= 5; i++) m[i][8] = bit(i);          // copie 1 — colonne 8
    m[7][8] = bit(6); m[8][8] = bit(7); m[8][7] = bit(8);
    for (var i = 9; i <= 14; i++) m[8][14 - i] = bit(i);
    for (var i = 0; i <= 7; i++) m[8][size - 1 - i] = bit(i);  // copie 2 — ligne 8
    for (var i = 8; i <= 14; i++) m[size - 15 + i][8] = bit(i); // copie 2 — colonne 8
    m[size - 8][8] = true;                                  // module noir fixe
  }

  function applyVersionInfo(m, version) {
    if (version < 7) return;
    var size = m.length, v = VERSION_INFO[version];
    for (var i = 0; i < 18; i++) {
      var bit = ((v >> i) & 1) === 1;
      var r = Math.floor(i / 3), c = size - 11 + (i % 3);
      m[r][c] = bit; m[c][r] = bit;
    }
  }

  function penalty(m) {
    var size = m.length, score = 0, i, j, run, prev, dark = 0;

    function lineScore(get) {
      var s = 0;
      for (i = 0; i < size; i++) {
        run = 1; prev = get(i, 0);
        for (j = 1; j < size; j++) {
          var cur = get(i, j);
          if (cur === prev) { run++; }
          else { if (run >= 5) s += 3 + (run - 5); run = 1; prev = cur; }
        }
        if (run >= 5) s += 3 + (run - 5);
      }
      return s;
    }
    score += lineScore(function (a, b) { return m[a][b]; });
    score += lineScore(function (a, b) { return m[b][a]; });

    for (i = 0; i < size - 1; i++) for (j = 0; j < size - 1; j++) {
      var v = m[i][j];
      if (v === m[i][j + 1] && v === m[i + 1][j] && v === m[i + 1][j + 1]) score += 3;
    }

    var pat1 = [true, false, true, true, true, false, true, false, false, false, false];
    var pat2 = [false, false, false, false, true, false, true, true, true, false, true];
    function match(get, i, j, pat) {
      for (var k = 0; k < 11; k++) if (get(i, j + k) !== pat[k]) return false;
      return true;
    }
    for (i = 0; i < size; i++) for (j = 0; j <= size - 11; j++) {
      if (match(function (a, b) { return m[a][b]; }, i, j, pat1)) score += 40;
      if (match(function (a, b) { return m[a][b]; }, i, j, pat2)) score += 40;
      if (match(function (a, b) { return m[b][a]; }, i, j, pat1)) score += 40;
      if (match(function (a, b) { return m[b][a]; }, i, j, pat2)) score += 40;
    }

    for (i = 0; i < size; i++) for (j = 0; j < size; j++) if (m[i][j]) dark++;
    var pct = dark * 100 / (size * size);
    score += Math.floor(Math.abs(pct - 50) / 5) * 10;
    return score;
  }

  /**
   * Encode un texte en QR code.
   * @param {string} text  contenu (URL, texte…)
   * @param {object} [opt] {ecl:'L'|'M'|'Q'|'H', minVersion, maxVersion, mask}
   * @returns {{size:number, version:number, ecl:string, mask:number, modules:boolean[][]}}
   */
  function encode(text, opt) {
    opt = opt || {};
    var ecl = opt.ecl || 'H';
    if (!ECB[ecl]) throw new Error('Niveau de correction inconnu : ' + ecl);
    var bytes = utf8Bytes(String(text));
    var version = pickVersion(bytes.length, ecl, opt.minVersion || 1, opt.maxVersion || 12);
    if (!version) throw new Error('Contenu trop long pour un QR version ≤ 12 en niveau ' + ecl);

    var cw = buildCodewords(bytes, version, ecl);
    var size = 17 + 4 * version;
    var base = newMatrix(size, false), reserved = newMatrix(size, false);
    placeFunctionPatterns(base, reserved, version);
    applyVersionInfo(base, version);
    placeData(base, reserved, cw, version);

    var best = null;
    var masks = (opt.mask === undefined || opt.mask === null) ? [0, 1, 2, 3, 4, 5, 6, 7] : [opt.mask];
    for (var mi = 0; mi < masks.length; mi++) {
      var mask = masks[mi];
      var m = base.map(function (row) { return row.slice(); });
      for (var r = 0; r < size; r++) for (var c = 0; c < size; c++)
        if (!reserved[r][c] && maskFn(mask, r, c)) m[r][c] = !m[r][c];
      applyFormat(m, ecl, mask);
      var p = penalty(m);
      if (!best || p < best.penalty) best = { penalty: p, modules: m, mask: mask };
    }
    return { size: size, version: version, ecl: ecl, mask: best.mask, modules: best.modules };
  }

  /**
   * Construit le chemin SVG (attribut d) des modules sombres.
   * @param {object} qr résultat de encode()
   * @param {number} cell taille d'un module dans l'unité SVG
   * @param {number} pad  quiet zone en nombre de modules (4 recommandé)
   */
  function toPath(qr, cell, pad) {
    cell = cell || 1; pad = (pad === undefined) ? 4 : pad;
    var d = '';
    for (var r = 0; r < qr.size; r++) {
      var c = 0;
      while (c < qr.size) {
        if (!qr.modules[r][c]) { c++; continue; }
        var start = c;
        while (c < qr.size && qr.modules[r][c]) c++;
        d += 'M' + ((start + pad) * cell) + ' ' + ((r + pad) * cell) +
             'h' + ((c - start) * cell) + 'v' + cell + 'h' + (-(c - start) * cell) + 'z';
      }
    }
    return d;
  }

  global.QR = { encode: encode, toPath: toPath, capacity: dataCapacity };
})(typeof window !== 'undefined' ? window : globalThis);

if (typeof module !== 'undefined' && module.exports) module.exports = (typeof window !== 'undefined' ? window : globalThis).QR;
