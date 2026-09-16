# Venezia Ice — menu digital & plaque QR

Support digital du restaurant **Venezia Ice** (Larache) — entité **Ste F Corner**,
Holding Benthami.

Un client scanne la plaque posée sur la table ou collée en vitrine, et le menu
s'ouvre sur son téléphone en français, arabe, anglais ou espagnol, avec les liens
vers les réseaux sociaux, l'itinéraire et la commande WhatsApp.

Le compte rendu de la réunion de travail des trois pôles d'ingénierie (design,
développement, applications mobiles restauration) et les arbitrages retenus sont
dans **[REUNION-TECHNIQUE.md](REUNION-TECHNIQUE.md)**.

---

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html` | **Le menu digital.** Page unique, 4 langues, fonctionne hors-ligne |
| `plaque.html` | **Le studio de la plaque QR.** Aperçu, impression, export PNG 300 dpi et SVG |
| `assets/qr.js` | Encodeur QR autonome (ISO/IEC 18004), sans dépendance ni service externe |
| `assets/icon-*.png` | Icônes utilisées quand le menu est ajouté à l'écran d'accueil |
| `manifest.webmanifest` | Déclaration qui rend le menu installable comme une application |
| `sw.js` | Mise en cache : le menu reste consultable quand le réseau tombe |
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

Tout se passe dans `index.html`, dans les blocs commentés en haut du fichier.

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

**Coordonnées, horaires, réseaux sociaux** : bloc `CONFIG`, au-dessus du menu.

### Après chaque modification

1. Mettre à jour la date : `majLe: '2026-09-16'` dans `CONFIG`.
2. **Incrémenter le numéro de version dans `sw.js`** (`venezia-v1` → `venezia-v2`).
   Sans cela, les téléphones qui ont déjà ouvert le menu peuvent continuer à
   afficher l'ancienne version pendant un moment.
3. Enregistrer, pousser sur `main` : la mise en ligne est automatique en 1 à 2 minutes.

---

## 3. Imprimer la plaque

Ouvrir `plaque.html` (en ligne ou par double-clic sur le fichier), puis :

1. **Contenu** — coller l'adresse définitive du menu, le nom, les comptes réseaux
   et le téléphone.
2. **Format** :
   - *A5 (148 × 210 mm)* — plaque murale ou porte-menu de table ;
   - *Chevalet (100 × 150 mm)* — chevalet posé sur chaque table ;
   - *Affiche vitrine (200 × 280 mm)* — collée côté rue, QR lisible de loin ;
   - *A6 (105 × 148 mm)* — sticker ou flyer à emporter.
3. **Style** — « Lagune & or » (fond sombre) ou « Crème & lagune » (fond clair).
4. **Export** :
   - *Imprimer / PDF* — impression directe au bon format ;
   - *PNG 300 dpi* — à envoyer à l'imprimeur, convient à tous les tirages ;
   - *SVG vectoriel* — qualité infinie, pour un imprimeur qui travaille en vectoriel.

Le panneau de diagnostic indique la taille d'un module du QR et la distance de
lecture confortable, et alerte si le QR devient trop petit pour le format choisi.

**À dire à l'imprimeur :** prévoir 3 mm de fond perdu si la plaque est rognée,
ne pas rogner dans la zone blanche autour du QR, et ne jamais recadrer le QR.
Supports adaptés : PVC/dibond 3 mm pour le mural, plexiglas ou carton 400 g
plastifié pour les chevalets, vinyle adhésif transparent pour la vitrine.

**Avant de lancer le tirage en série :** imprimer une plaque et la scanner avec
au moins trois téléphones différents, dont un ancien Android.

---

## 4. Vérifier l'encodeur QR

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

## 5. Choix techniques en bref

- **Site statique** : hébergement gratuit, pas de serveur à administrer, pas
  d'abonnement, pas de faille applicative à corriger.
- **Aucune dépendance externe** hors les polices Google Fonts (le menu reste
  parfaitement lisible si elles ne se chargent pas).
- **Aucune donnée personnelle collectée** : pas de compte, pas de traceur, pas de
  bandeau cookies.
- **Hors-ligne** : une fois la page ouverte, elle reste consultable sans réseau et
  se met à jour en arrière-plan.
- **Accessibilité** : contrastes conformes, textes redimensionnables, prise en
  charge du mode sombre et du sens droite-à-gauche pour l'arabe.

---

## 6. À confirmer avant impression

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
