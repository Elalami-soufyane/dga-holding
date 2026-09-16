#!/usr/bin/env python3
"""
Vérification indépendante de l'encodeur QR de la plaque Venezia Ice
(venezia/assets/qr.js).

Le principe : on ne fait pas confiance à l'encodeur, on relit ce qu'il produit.
Pour chaque cas de test, le script
  1. fait générer la matrice par qr.js (Node),
  2. relit l'information de format (et vérifie son code BCH),
  3. démasque, extrait les mots de code dans l'ordre en zigzag,
  4. désentrelace les blocs et vérifie les syndromes Reed-Solomon,
  5. reconstitue le texte d'origine et le compare à l'entrée,
  6. compare tous les modules de fonction (détecteurs, synchronisation,
     alignement, format, version) à ceux de segno, implémentation de référence.

Prérequis :  pip install segno   ·   node (≥ 18)
Utilisation :  python3 venezia/tools/verifier-qr.py
"""

TABLE_ECB = r"""{"L": {"1": [[1, 26, 19]], "2": [[1, 44, 34]], "3": [[1, 70, 55]], "4": [[1, 100, 80]], "5": [[1, 134, 108]], "6": [[2, 86, 68]], "7": [[2, 98, 78]], "8": [[2, 121, 97]], "9": [[2, 146, 116]], "10": [[2, 86, 68], [2, 87, 69]], "11": [[4, 101, 81]], "12": [[2, 116, 92], [2, 117, 93]]}, "M": {"1": [[1, 26, 16]], "2": [[1, 44, 28]], "3": [[1, 70, 44]], "4": [[2, 50, 32]], "5": [[2, 67, 43]], "6": [[4, 43, 27]], "7": [[4, 49, 31]], "8": [[2, 60, 38], [2, 61, 39]], "9": [[3, 58, 36], [2, 59, 37]], "10": [[4, 69, 43], [1, 70, 44]], "11": [[1, 80, 50], [4, 81, 51]], "12": [[6, 58, 36], [2, 59, 37]]}, "Q": {"1": [[1, 26, 13]], "2": [[1, 44, 22]], "3": [[2, 35, 17]], "4": [[2, 50, 24]], "5": [[2, 33, 15], [2, 34, 16]], "6": [[4, 43, 19]], "7": [[2, 32, 14], [4, 33, 15]], "8": [[4, 40, 18], [2, 41, 19]], "9": [[4, 36, 16], [4, 37, 17]], "10": [[6, 43, 19], [2, 44, 20]], "11": [[4, 50, 22], [4, 51, 23]], "12": [[4, 46, 20], [6, 47, 21]]}, "H": {"1": [[1, 26, 9]], "2": [[1, 44, 16]], "3": [[2, 35, 13]], "4": [[4, 25, 9]], "5": [[2, 33, 11], [2, 34, 12]], "6": [[4, 43, 15]], "7": [[4, 39, 13], [1, 40, 14]], "8": [[4, 40, 14], [2, 41, 15]], "9": [[4, 36, 12], [4, 37, 13]], "10": [[6, 43, 15], [2, 44, 16]], "11": [[3, 36, 12], [8, 37, 13]], "12": [[7, 42, 14], [4, 43, 15]]}}"""

import json, os, subprocess, random, string, tempfile, segno
import segno.consts as c

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RUNNER = """const fs=require('fs'); const QR=require(process.argv[4]);
const cases=JSON.parse(fs.readFileSync(process.argv[2],'utf8'));
fs.writeFileSync(process.argv[3],JSON.stringify(cases.map(c=>{
  try{const q=QR.encode(c.text,{ecl:c.ecl});
    return {version:q.version,mask:q.mask,rows:q.modules.map(r=>r.map(v=>v?1:0).join(''))};}
  catch(e){return {error:String(e.message),rows:[]};}
})));
"""

EXP, LOG = c.GALIOS_EXP, c.GALIOS_LOG
def mul(a,b): return 0 if a==0 or b==0 else EXP[(LOG[a]+LOG[b])%255]

ALIGN={2:[6,18],3:[6,22],4:[6,26],5:[6,30],6:[6,34],7:[6,22,38],8:[6,24,42],
       9:[6,26,46],10:[6,28,50],11:[6,30,54],12:[6,32,58]}
ECB = json.loads(TABLE_ECB)

def function_map(version):
    """Carte des modules de fonction, ecrite depuis la specification."""
    size=17+4*version
    f=[[False]*size for _ in range(size)]
    for (r0,c0) in [(0,0),(0,size-7),(size-7,0)]:
        for dr in range(-1,8):
            for dc in range(-1,8):
                r,cc=r0+dr,c0+dc
                if 0<=r<size and 0<=cc<size: f[r][cc]=True
    for i in range(size): f[6][i]=True; f[i][6]=True
    for a in ALIGN.get(version,[]):
        for b in ALIGN.get(version,[]):
            if (a<=8 and b<=8) or (a<=8 and b>=size-9) or (a>=size-9 and b<=8): continue
            for dr in range(-2,3):
                for dc in range(-2,3): f[a+dr][b+dc]=True
    for i in range(9): f[8][i]=True; f[i][8]=True
    for i in range(8): f[8][size-1-i]=True; f[size-1-i][8]=True
    if version>=7:
        for i in range(6):
            for j in range(3): f[i][size-11+j]=True; f[size-11+j][i]=True
    return f

MASKS=[lambda r,c:(r+c)%2==0, lambda r,c:r%2==0, lambda r,c:c%3==0,
       lambda r,c:(r+c)%3==0, lambda r,c:(r//2+c//3)%2==0,
       lambda r,c:((r*c)%2)+((r*c)%3)==0, lambda r,c:(((r*c)%2)+((r*c)%3))%2==0,
       lambda r,c:(((r+c)%2)+((r*c)%3))%2==0]

def read_format(m):
    size=len(m)
    bits=[m[i][8] for i in range(6)]+[m[7][8],m[8][8],m[8][7]]+[m[8][14-i] for i in range(9,15)]
    val=0
    for i,b in enumerate(bits): val |= (1 if b else 0)<<i
    val ^= 0x5412
    ecl_bits=(val>>13)&3; mask=(val>>10)&7
    ecl={1:'L',0:'M',3:'Q',2:'H'}[ecl_bits]
    # verification BCH : le reste doit etre nul
    rem=val
    for i in range(14,9,-1):
        if (rem>>i)&1: rem ^= 0x537<<(i-10)
    return ecl, mask, rem&0x3FF

def syndromes_zero(block, nsyn):
    """Verifie que le bloc (data+ec) est un mot de code Reed-Solomon valide."""
    n=len(block)
    for k in range(0, nsyn):   # racines alpha^0 .. alpha^(n-1)
        s=0
        for i,co in enumerate(block):
            s ^= mul(co, EXP[((n-1-i)*k)%255]) if co else 0
        if s: return False
    return True

def decode(matrix):
    size=len(matrix); version=(size-17)//4
    ecl, mask, bchrem = read_format(matrix)
    assert bchrem==0, 'BCH format invalide'
    f=function_map(version)
    mf=MASKS[mask]
    bits=[]
    up=True; col=size-1
    while col>0:
        if col==6: col-=1
        rows=range(size-1,-1,-1) if up else range(size)
        for r in rows:
            for cc in (col,col-1):
                if f[r][cc]: continue
                v=matrix[r][cc]
                if mf(r,cc): v=not v
                bits.append(1 if v else 0)
        up=not up; col-=2
    cw=[int(''.join(map(str,bits[i:i+8])),2) for i in range(0,len(bits)//8*8,8)]
    groups=ECB[ecl][str(version)]
    blocks=[]; ec_len=None; total_blocks=0
    for nb,tot,dat in groups:
        for _ in range(nb): blocks.append({'dat':dat,'tot':tot}); ec_len=tot-dat
    total_blocks=len(blocks)
    maxd=max(b['dat'] for b in blocks)
    data=[[] for _ in blocks]; idx=0
    for i in range(maxd):
        for j,b in enumerate(blocks):
            if i<b['dat']: data[j].append(cw[idx]); idx+=1
    ecs=[[] for _ in blocks]
    for i in range(ec_len):
        for j in range(total_blocks): ecs[j].append(cw[idx]); idx+=1
    for d,e in zip(data,ecs):
        if not syndromes_zero(d+e, ec_len): return None, 'syndromes RS non nuls'
    stream=''.join(f'{b:08b}' for blk in data for b in blk)
    mode=stream[:4]
    assert mode=='0100', 'mode inattendu '+mode
    ccl=8 if version<10 else 16
    n=int(stream[4:4+ccl],2)
    p=4+ccl
    out=bytes(int(stream[p+8*i:p+8*i+8],2) for i in range(n))
    return out.decode('utf-8'), ecl

def main():
    random.seed(3)
    alph=string.ascii_letters+string.digits+'/:.-_?&= #%'
    cases=[{'text':t,'ecl':e} for t in [
        'HELLO','https://elalami-soufyane.github.io/dga-holding/venezia/',
        'https://wa.me/212600000000?text=Bonjour','Venezia Ice · Larache — menu ☕🍦',
        'A'*100] for e in 'LMQH']
    # longueurs tirées au hasard, dans la capacité d'un QR version ≤ 12
    maxi = {'L':150,'M':150,'Q':120,'H':100}
    for _ in range(120):
        ecl = random.choice('LMQH')
        cases.append({'text':''.join(random.choice(alph) for _ in range(random.randint(1, maxi[ecl]))),
                      'ecl':ecl})
    tmp = tempfile.mkdtemp(prefix='verif-qr-')
    runner = os.path.join(tmp,'runner.js'); entree = os.path.join(tmp,'cas.json'); sortie = os.path.join(tmp,'res.json')
    open(runner,'w').write(RUNNER)
    json.dump(cases, open(entree,'w'))
    subprocess.check_call(['node', runner, entree, sortie, os.path.join(RACINE,'assets','qr.js')])
    res=json.load(open(sortie))
    ok=0; fails=[]
    for cse,r in zip(cases,res):
        if 'error' in r: fails.append(('erreur '+r['error'], cse['text'][:20])); continue
        m=[[ch=='1' for ch in row] for row in r['rows']]
        try:
            text, ecl = decode(m)
        except AssertionError as ex:
            fails.append((str(ex), cse['text'][:20])); continue
        if text!=cse['text'] or ecl!=cse['ecl']:
            fails.append(('contenu relu different', cse['text'][:20])); continue
        # comparaison des modules de fonction avec segno (meme version/masque)
        q=segno.make(cse['text'], error=cse['ecl'], mode='byte', version=r['version'],
                     mask=r['mask'], boost_error=False)
        ref=[[bool(v&1) for v in row] for row in q.matrix]
        f=function_map(r['version'])
        bad=[(i,j) for i in range(len(m)) for j in range(len(m)) if f[i][j] and ref[i][j]!=m[i][j]]
        if bad: fails.append((f'motifs de fonction differents en {bad[:3]}', cse['text'][:20])); continue
        ok+=1
    print(f'{ok}/{len(cases)} QR valides — decodage complet + modules de fonction '
          f'identiques a la reference segno')
    for f_ in fails[:5]:
        print('  ECHEC:', f_)
    raise SystemExit(0 if not fails else 1)

main()
