# Réunion de travail — Digitalisation du menu Venezia Ice

**Projet :** plaque QR + menu digital · **Établissement :** Venezia Ice (Larache)
**Entité :** Ste F Corner — Holding Benthami (DGA) · **Date :** 16 septembre 2026
**Version du document :** 1.0 — compte rendu de la session de cadrage et de conception

---

## 1. Cadre de la réunion

**Demande initiale (direction).** Créer un support digital pour le restaurant :
une plaque portant un QR code qui, une fois scanné, ouvre une page contenant le
menu du restaurant et les liens vers les réseaux sociaux.

**Pôles réunis.**

| Pôle | Périmètre dans ce projet |
|---|---|
| **Ingénierie du design** | Identité visuelle, lisibilité, ergonomie mobile, support imprimé |
| **Ingénierie du développement** | Architecture technique, hébergement, maintenance, sécurité, coût de possession |
| **Ingénierie des applications mobiles pour la restauration** | Parcours client en salle, usages métier du secteur, exploitation au quotidien par l'équipe |

**Décisionnaires à valider :** direction générale (DGA) et le responsable
d'exploitation F Corner. Les arbitrages ci-dessous sont proposés par les trois
pôles ; la ligne « Points à confirmer » (§ 11) liste ce qui reste à trancher.

---

## 2. Le terrain avant la technique

Les trois pôles partent des mêmes constats d'exploitation :

- **Clientèle mixte.** Larache reçoit des clients marocains, des MRE de passage,
  des visiteurs espagnols et des touristes. Un menu monolingue exclut une partie
  de la salle.
- **Réseau incertain.** En terrasse et en salle, la 4G est irrégulière. Une page
  lourde qui met 8 secondes à s'afficher est une page que le client abandonne.
- **Téléphones d'entrée et de milieu de gamme.** Le support doit fonctionner sur
  un Android à 1 200 MAD comme sur un iPhone récent.
- **Le menu bouge.** Prix, ruptures, parfums du jour, cartes de saison
  (Ramadan, été) : les changements sont hebdomadaires, parfois quotidiens.
- **Personne n'est informaticien dans l'équipe.** Toute solution qui exige un
  développeur pour changer un prix sera abandonnée en trois semaines.
- **Le support imprimé coûte cher et dure.** Une plaque réimprimée parce que
  l'adresse a changé, c'est de l'argent perdu et du désordre en salle.

---

## 3. Tour de table

### 3.1 Ingénierie du design

**Ce que doit réussir la plaque.** Elle n'a que deux secondes pour se faire
comprendre : le client assis voit un objet, comprend qu'il doit scanner, scanne.
D'où les partis pris proposés :

- **Une seule action visible.** Un QR au centre, grand, sur fond blanc, avec une
  zone de silence respectée. Pas de second QR (Wi-Fi, avis, Instagram) : deux QR
  côte à côte divisent le taux de scan.
- **Un appel à l'action en quatre langues**, l'arabe en taille supérieure car
  c'est la langue de la majorité des clients.
- **Identité « Venezia ».** Bleu lagune profond + or vénitien + crème : le bleu
  évoque Venise et l'eau, l'or apporte le côté premium qui justifie un ticket
  moyen plus élevé, le crème rappelle la glace. Cette palette fonctionne aussi
  bien en plaque murale sombre qu'en chevalet clair sur une table en bois.
- **Contraste et taille.** Textes en or sur lagune : contraste supérieur à 4,5:1.
  Aucun texte imprimé sous 2,6 mm de hauteur de caractère.
- **Le menu à l'écran doit être un menu, pas un PDF.** Un PDF oblige à zoomer et
  à faire glisser : c'est la première cause d'abandon. Donc du texte natif, des
  prix alignés à droite, des sections courtes, une recherche.

**Point de vigilance.** Aucune photo de l'établissement, de l'enseigne ou des
plaques existantes n'a été transmise avec la demande. La charte proposée est donc
une **proposition** cohérente avec le nom « Venezia Ice » ; elle sera recalée sur
les couleurs réelles de l'enseigne dès réception des photos ou du logo vectoriel.

### 3.2 Ingénierie du développement

**Ce qu'il ne faut pas faire.**

- *Un menu chez un prestataire SaaS* (abonnement mensuel, publicité sur la page,
  données du restaurant chez un tiers, page qui disparaît si l'abonnement
  s'arrête — et le QR imprimé devient un lien mort).
- *Un QR généré sur un site gratuit en ligne.* La moitié de ces services créent
  un **lien de redirection chez eux** : le jour où ils ferment ou passent
  payants, toutes les plaques imprimées sont bonnes à jeter.
- *Un WordPress.* Il faut un serveur, des mises à jour de sécurité tous les mois,
  et un menu de 50 lignes n'a pas besoin d'une base de données.

**Ce qui est proposé.**

- **Un site statique**, hébergé sur GitHub Pages : hébergement gratuit,
  certificat HTTPS automatique, disponibilité élevée, aucun serveur à
  administrer, aucune faille applicative à corriger.
- **Le menu dans un seul fichier**, en tête du code, avec des commentaires en
  français : changer un prix, c'est modifier un nombre. La procédure tient en
  cinq lignes (voir `README.md`).
- **Un encodeur QR écrit en interne** (`assets/qr.js`) : le QR pointe directement
  vers l'adresse du menu, sans intermédiaire. Conformité ISO/IEC 18004 vérifiée
  automatiquement — 140 cas de test sont décodés intégralement et comparés à une
  implémentation de référence (`tools/verifier-qr.py`).
- **Rien à installer côté client, zéro donnée personnelle collectée** : pas de
  compte, pas de traceur, pas de bandeau cookies, et une conformité simple à la
  loi 09-08 (CNDP).

**Coût de possession.** Hébergement : 0 MAD/an. Nom de domaine `.ma` : de l'ordre
de 100 à 150 MAD/an (optionnel mais recommandé, voir D6). Maintenance : celle du
contenu uniquement.

### 3.3 Ingénierie des applications mobiles pour la restauration

**Le parcours réel en salle.** Le client s'assoit, scanne, lit, commande **auprès
du serveur**. Le point de bascule qui fait échouer 80 % des menus QR est ailleurs :
la page met trop de temps, ou elle est illisible, ou le client ne trouve pas le
plat dont le serveur vient de lui parler.

- **Objectif de performance : contenu utile affiché en moins de 2 secondes en
  4G.** Ce qui exclut les images lourdes de plats en page d'accueil.
- **Fonctionnement hors-ligne.** Sur ce type d'établissement, le réseau tombe.
  La page doit rester consultable : une fois chargée, elle est conservée sur le
  téléphone et se met à jour en arrière-plan à la visite suivante.
- **« Installable ».** Le client fidèle peut ajouter le menu à son écran d'accueil
  comme une application — sans passer par un store, sans téléchargement de 40 Mo.
- **Ne pas mettre de panier en v1.** Dans un glacier de centre-ville, la commande
  passe par le serveur ou par WhatsApp. Un panier en ligne ouvre immédiatement
  trois chantiers (encaissement, gestion des stocks, litiges de livraison) qui ne
  se traitent pas en une semaine, et pour lesquels Glovo est déjà en place.
- **Ce qui rapporte vraiment, mesuré sur ce type d'établissement :**
  1. le **statut ouvert / fermé** en temps réel, qui évite les déplacements pour rien ;
  2. le bouton **WhatsApp** pour les commandes à emporter ;
  3. le bouton **itinéraire** ;
  4. les **badges « best-seller »** sur les produits à forte marge — c'est le
     levier direct sur le ticket moyen, qui est suivi dans le module F Corner de
     l'ERP du groupe ;
  5. la **demande d'avis Google**, qui alimente la visibilité locale.

**Lien avec l'existant.** Le module F Corner de l'application du holding suit
déjà recettes, tickets, ticket moyen et food cost. Le menu digital est la source
naturelle d'un indicateur supplémentaire (nombre de scans, produits les plus
consultés) — prévu en v2, pas en v1, pour ne pas retarder la mise en service.

---

## 4. Arbitrages retenus

| # | Décision | Motif |
|---|---|---|
| **D1** | Page **web** pour le client final, pas d'application à télécharger | Le client scanne et lit en 2 s ; aucune installation ne survivrait au passage en caisse |
| **D2** | **Site statique** sur GitHub Pages, pas de SaaS ni de WordPress | 0 MAD/an, aucune administration, aucune dépendance à un prestataire |
| **D3** | Menu **éditable dans un seul bloc** de configuration | Un non-développeur doit pouvoir changer un prix en 2 minutes |
| **D4** | **4 langues** dès la v1 : FR / AR / EN / ES, avec sens d'écriture droite-à-gauche pour l'arabe | Composition réelle de la clientèle de Larache |
| **D5** | **QR généré en interne**, vectoriel, sans service tiers | Pas de lien de redirection appartenant à un tiers ; qualité d'impression parfaite |
| **D6** | **Adresse imprimée stable**, à figer avant impression — idéalement un nom de domaine propre | Une plaque se change moins souvent qu'une URL ; le domaine permet de déménager le site sans réimprimer |
| **D7** | **WhatsApp** comme canal de commande en v1 | Déjà utilisé par l'équipe ; un panier en ligne ouvrirait trois chantiers annexes |
| **D8** | Correction d'erreur **Q** par défaut, **H** pour la vitrine ; module ≥ 0,4 mm | Un QR sali ou partiellement masqué reste lisible ; règle de lecture : distance ≈ 10 × la largeur du QR |
| **D9** | **Fonctionnement hors-ligne** et menu installable sur l'écran d'accueil | Réseau irrégulier en salle |
| **D10** | **Aucune donnée personnelle collectée** | Conformité simple, pas de bandeau cookies, confiance du client |
| **D11** | **Un seul QR** par support | Deux QR côte à côte divisent le taux de scan |
| **D12** | Mesure d'audience et remontée vers l'ERP **reportées en v2** | Ne pas retarder la mise en service ; le socle technique est déjà en place (Firebase du groupe) |

---

## 5. Livré à l'issue de la réunion (v1)

| Élément | Fichier | État |
|---|---|---|
| Menu digital 4 langues, hors-ligne, installable | `venezia/index.html` | Livré, testé sur mobile |
| Studio de la plaque QR (aperçu, impression, PNG 300 dpi, SVG vectoriel) | `venezia/plaque.html` | Livré, 4 formats × 2 styles |
| Encodeur QR autonome | `venezia/assets/qr.js` | Livré, conformité vérifiée |
| Vérification automatique du QR | `venezia/tools/verifier-qr.py` | 140/140 cas valides |
| Icônes, manifeste, mode hors-ligne | `venezia/assets/`, `manifest.webmanifest`, `sw.js` | Livrés |
| Mode d'emploi exploitation | `venezia/README.md` | Livré |

**Formats de plaque disponibles :** A5 mural (148 × 210), chevalet de table
(100 × 150), affiche vitrine (200 × 280), sticker A6 (105 × 148).

---

## 6. Volontairement hors périmètre v1

Commande et paiement en ligne · photos de plats · compte client et fidélité ·
réservation de table · appel du serveur depuis la table · traduction automatique ·
back-office de gestion du menu. Chacun est un chantier en soi ; ils figurent au
backlog.

---

## 7. Backlog

**v2 — après 4 à 6 semaines d'exploitation**

1. Compteur de scans et produits les plus consultés, remontés dans le module
   F Corner de l'ERP (le projet Firebase du groupe est déjà en place).
2. QR par table (`?t=12`) : identifie la table, prépare l'appel serveur.
3. Signalement des ruptures en un clic depuis un téléphone de l'équipe.
4. Photos des 10 produits phares, compressées et chargées à la demande.
5. Carte saisonnière (Ramadan, été) activable à une date.

**v3 — selon les résultats de la v2**

Commande à emporter avec créneau de retrait · programme de fidélité
(10 glaces = 1 offerte) · intégration directe des ventes Glovo dans le suivi
d'activité · version « écran » du menu pour un téléviseur au comptoir.

---

## 8. Risques et parades

| Risque | Parade retenue |
|---|---|
| L'adresse du menu change après impression des plaques | Figer l'adresse avant impression (D6) ; à défaut, conserver l'ancienne adresse et la faire rediriger |
| Menu qui se périme (prix obsolètes) | Procédure de mise à jour en 5 lignes dans le `README`, et date de mise à jour affichée en bas de page |
| Le client garde une ancienne version en cache | Numéro de version à incrémenter dans `sw.js` à chaque changement de menu — documenté |
| QR illisible à l'impression | Diagnostic intégré au studio : taille de module, distance de lecture, alerte si le module descend sous 0,4 mm |
| Plaque volée ou abîmée en terrasse | Prévoir un stock de chevalets A6 plastifiés, réimprimables à coût faible |
| Dépendance à une personne pour les mises à jour | Deux personnes formées côté exploitation, procédure écrite |

---

## 9. Plan d'action

| # | Action | Responsable | Échéance |
|---|---|---|---|
| 1 | Transmettre logo, photos de l'enseigne et couleurs réelles | Exploitation F Corner | J+3 |
| 2 | Valider la carte : intitulés, prix, ruptures fréquentes | Exploitation F Corner | J+3 |
| 3 | Confirmer téléphone, WhatsApp, adresse exacte, horaires, comptes réseaux | Exploitation F Corner | J+3 |
| 4 | Publier le site et figer l'adresse définitive | Développement | J+5 |
| 5 | Réserver le nom de domaine (optionnel, recommandé) | Direction | J+7 |
| 6 | Générer les fichiers d'impression et consulter deux imprimeurs | Design | J+7 |
| 7 | Poser les supports : 1 plaque murale, 1 affiche vitrine, 1 chevalet par table | Exploitation F Corner | J+14 |
| 8 | Former deux personnes à la mise à jour du menu | Développement | J+14 |
| 9 | Premier bilan chiffré, décision sur la v2 | Les trois pôles + direction | J+45 |

---

## 10. Indicateurs de suivi

| Indicateur | Cible à 45 jours | Source |
|---|---|---|
| Part des tables qui scannent | ≥ 30 % des tickets | Comptage manuel en v1, automatique en v2 |
| Temps d'affichage du menu en 4G | < 2 s | Mesure terrain |
| Ticket moyen F Corner | +5 % vs mois précédent | Module F Corner de l'ERP |
| Avis Google déposés par mois | +10 avis | Fiche Google Business |
| Abonnés Instagram | +15 % | Compte Instagram |
| Coût d'exploitation du dispositif | 0 MAD/mois hors impression | — |

---

## 11. Points à confirmer avant impression

1. **Photos non reçues.** Les photos mentionnées dans la demande ne sont pas
   parvenues ; le design est une proposition et sera recalé sur l'enseigne réelle.
2. **Prix et intitulés** : la carte intégrée est une base de travail réaliste
   pour un glacier-snack de Larache — chaque ligne est à valider.
3. **Téléphone, numéro WhatsApp, adresse postale exacte.**
4. **Comptes réseaux réels** (Instagram, Facebook, TikTok) et présence sur Glovo.
5. **Identifiant de la fiche Google** pour le lien « laisser un avis ».
6. **Horaires**, y compris l'horaire spécifique du Ramadan.
7. **Adresse définitive du menu** (GitHub Pages ou nom de domaine propre) :
   c'est la seule décision irréversible une fois les plaques imprimées.
