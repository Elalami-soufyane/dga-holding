# Venezia Ice — menu digital & plaque QR

Support digital du restaurant **Venezia Ice** (Larache) — entité **Ste F Corner**,
Holding Benthami.

Un client scanne le chevalet posé sur la table (ou approche son téléphone de la
puce NFC) et le menu s'ouvre en français, arabe, anglais ou espagnol. Depuis la
vitrine ou la bio Instagram, le même dispositif ouvre une page de liens :
menu, réseaux sociaux, avis, itinéraire et commande WhatsApp.

Le compte rendu de la réunion de travail des trois pôles d'ingénierie (design,
développement, applications mobiles restauration) et les arbitrages retenus sont
dans **[REUNION-TECHNIQUE.md](REUNION-TECHNIQUE.md)**.

---

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html` | **Le menu digital.** 4 langues, recherche, fonctionne hors-ligne. Contient les produits et les prix |
| `liens.html` | **La page de liens.** Menu, réseaux, avis, itinéraire — pour la vitrine et la bio Instagram |
| `avis.html` | **Avis et réclamation.** 4–5 ★ → avis Google · 1–3 ★ → message privé au responsable |
| `plaque.html` | **Le studio des supports QR.** Aperçu, impression, export PNG 300 dpi et SVG |
| `assets/venezia.js` | **Coordonnées, liens, horaires** (bloc `CONFIG`) et textes de l'interface |
| `assets/venezia.css` | Identité visuelle commune aux trois pages |
| `assets/qr.js` | Encodeur QR autonome (ISO/IEC 18004), sans dépendance ni service externe |
| `assets/icon-*.png` | Icônes utilisées quand le menu est ajouté à l'écran d'accueil |
| `manifest.webmanifest` | Rend le menu installable comme une application |
| `sw.js` | Mise en cache : les pages restent consultables quand le réseau tombe |
| `tools/verifier-qr.py` | Vérification automatique de l'encodeur QR (140 cas) |

---

## 1. Mettre le menu en ligne

Sur GitHub : **Settings → Pages → Build and deployment → Deploy from a branch**,
puis branche `main`, dossier `/ (root)`. Le menu est alors accessible à :

```
https://elalami-soufyane.github.io/dga-holding/venezia/
```

**Cette adresse est celle qui sera imprimée sur les plaques : il faut la figer
avant impression.** Pour pouvoir changer d'hébergeur un jour sans réimprimer,
réserver un nom de domaine (par exemple `venezia-ice.ma`) et le faire pointer sur
GitHub Pages — le QR contiendra alors le domaine propre.

---

## 2. Modifier le menu (prix, produits, horaires)

Deux fichiers, deux rôles :

- **`index.html`** → les produits et les prix (bloc `MENU`) ;
- **`assets/venezia.js`** → le téléphone, le WhatsApp, l'adresse, les horaires et
  les liens des réseaux (bloc `CONFIG`), utilisés par les trois pages.

**Changer un prix** — chercher le produit, modifier la valeur `p` :

```js
{n:{fr:'Cornet 2 boules',ar:'كورنيه كرتان',en:'2-scoop cone',es:'Cucurucho 2 bolas'},p:18,t:['star']},
```

**Signaler une rupture** sans supprimer la ligne — ajouter `off:true` :

```js
{n:{fr:'Milkshake Oreo', …},p:35,off:true},
```

**Badges disponibles** dans `t` : `'star'` (best-seller), `'new'` (nouveauté),
`'veg'` (végétarien).

**Coordonnées, horaires, réseaux sociaux** : bloc `CONFIG` dans
`assets/venezia.js`. Retirer une ligne de `reseaux` fait disparaître le bouton
correspondant des trois pages.

### Après chaque modification

1. Mettre à jour la date : `majLe: '2026-09-16'` dans `CONFIG`.
2. **Incrémenter le numéro de version dans `sw.js`** (`venezia-v1` → `venezia-v2`).
   Sans cela, les téléphones qui ont déjà ouvert le menu peuvent continuer à
   afficher l'ancienne version pendant un moment.
3. Enregistrer, pousser sur `main` : la mise en ligne est automatique en 1 à 2 minutes.

---

## 3. Quel QR pour quel support

| Support | Le QR ouvre | Pourquoi |
|---|---|---|
| Chevalet **sur les tables** | le **menu** (`/venezia/`) | Le client lit la carte sans un tap de plus |
| **Vitrine**, flyer, bio Instagram | la **page de liens** (`/venezia/liens.html`) | Depuis la rue, on cherche d'abord les horaires, l'itinéraire et les avis |

Le choix se fait dans le studio, section « Où mène le QR ».

---

## 4. Imprimer les supports

Ouvrir `plaque.html` (en ligne ou par double-clic sur le fichier), puis :

1. **Où mène le QR** — adresse du site et page ouverte au scan (voir § 3).
2. **Contenu** — nom, comptes réseaux, téléphone.
3. **Format** :
   - *Chevalet de table (60 × 100 mm)* — le format posé sur chaque table ;
   - *Chevalet large (100 × 150 mm)* — comptoir, présentoir d'entrée ;
   - *Plaque murale A5 (148 × 210 mm)* — mur, caisse ;
   - *Affiche vitrine (200 × 280 mm)* — côté rue, QR lisible à plus d'un mètre ;
   - *A6 (105 × 148 mm)* — sticker ou flyer à emporter.
4. **Style** — « Lagune & or » (fond sombre) ou « Crème & lagune » (fond clair).
5. **Bandeau « Tap or Scan »** — à cocher si une puce NFC est collée au dos
   (voir § 5).
6. **Export** :
   - *Imprimer / PDF* — impression directe au bon format ;
   - *PNG 300 dpi* — à envoyer à l'imprimeur, convient à tous les tirages ;
   - *SVG vectoriel* — qualité infinie, pour un imprimeur qui travaille en vectoriel.

Le panneau de diagnostic indique la taille d'un module du QR et la distance de
lecture confortable, et alerte si le QR devient trop petit pour le format choisi.

**À dire à l'imprimeur :** prévoir 3 mm de fond perdu si la plaque est rognée,
ne pas rogner dans la zone blanche autour du QR, et ne jamais recadrer le QR.
Supports adaptés : PVC/dibond 3 mm pour le mural, plexiglas ou carton 400 g
plastifié pour les chevalets, vinyle adhésif transparent pour la vitrine.

**Avant de lancer le tirage en série :** imprimer un support et le scanner avec
au moins trois téléphones différents, dont un ancien Android.

---

## 5. Ajouter le NFC (optionnel)

Le NFC évite au client d'ouvrir son appareil photo : il approche son téléphone
du chevalet et le menu s'ouvre. C'est un complément, jamais un remplacement —
beaucoup de téléphones n'ont pas le NFC actif, d'où le QR à côté.

1. Acheter des **étiquettes NFC NTAG213 ou NTAG215** autocollantes (quelques
   dirhams pièce, par lot de 10 ou 50).
2. Avec une application d'écriture NFC sur un téléphone Android, écrire un
   enregistrement de type **URL** contenant l'adresse du menu, puis
   **verrouiller l'étiquette** pour qu'elle ne soit pas réécrite par un client.
3. Coller l'étiquette au dos du chevalet, et cocher « Bandeau Tap or Scan »
   dans le studio avant d'imprimer.

---

## 6. Vérifier l'encodeur QR

Le QR n'est pas produit par un service en ligne : il est calculé par
`assets/qr.js`, ce qui garantit qu'aucun tiers ne s'intercale entre la plaque et
le menu. Pour vérifier que l'encodeur reste conforme après une modification :

```bash
pip install segno          # implémentation de référence, utilisée comme témoin
python3 venezia/tools/verifier-qr.py
```

Le script génère 140 QR, les **décode entièrement** (lecture de l'information de
format et de son code BCH, démasquage, extraction en zigzag, désentrelacement des
blocs, contrôle des syndromes Reed-Solomon, relecture du texte) et compare tous
les modules de fonction à la référence. Résultat attendu : `140/140 QR valides`.

---

## 7. Choix techniques en bref

- **Site statique** : hébergement gratuit, pas de serveur à administrer, pas
  d'abonnement, pas de faille applicative à corriger.
- **Aucune dépendance externe** hors les polices Google Fonts (le menu reste
  parfaitement lisible si elles ne se chargent pas).
- **Aucune donnée personnelle collectée** : pas de compte, pas de traceur, pas de
  bandeau cookies.
- **Hors-ligne** : une fois la page ouverte, elle reste consultable sans réseau et
  se met à jour en arrière-plan.
- **Aucune dépendance à Linktree ou équivalent** : la page de liens est la
  nôtre — pas de publicité pour un tiers, pas de bandeau cookies, pas
  d'abonnement, et le lien imprimé ne peut pas être coupé par un prestataire.
- **Accessibilité** : contrastes conformes, textes redimensionnables, prise en
  charge du mode sombre et du sens droite-à-gauche pour l'arabe.

---

## 8. À confirmer avant impression

Les données suivantes sont des valeurs de travail, à remplacer par les vraies
(elles sont signalées par `À CONFIRMER` dans `index.html`) :

- téléphone et numéro WhatsApp ;
- adresse postale exacte et lien Google Maps ;
- comptes Instagram, Facebook, TikTok, et présence sur Glovo ;
- identifiant de la fiche Google pour le lien « laisser un avis » ;
- intitulés et prix de la carte ;
- horaires, y compris ceux du Ramadan.

Les photos de l'établissement et des plaques existantes n'ayant pas été
transmises, l'identité visuelle proposée (bleu lagune, or vénitien, crème) est à
recaler sur l'enseigne réelle dès réception du logo.
