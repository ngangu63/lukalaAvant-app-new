# Ressortissants de Lukala — Site officiel

Plateforme web officielle des **Ressortissants de Lukala** (République Démocratique
du Congo) : un espace de rencontre, de solidarité et de développement qui rassemble
les filles et les fils de Lukala, où qu'ils vivent dans le monde.

> *« Nos racines nous unissent. Notre avenir se construit ensemble. »*

L'application permet à la communauté de rester connectée : découvrir les membres et
les dirigeants, suivre les projets, consulter les documents officiels, rendre hommage
aux disparus, et partager la musique et les vidéos qui font vivre notre culture.

---

## 🌍 Guide de l'utilisateur

Le site est entièrement accessible depuis un navigateur web, sur ordinateur comme sur
téléphone. La navigation se fait par le menu en haut de la page.

| Rubrique | Contenu |
|----------|---------|
| **Accueil** | Message de bienvenue et présentation de la communauté. |
| **Membres** | Les dirigeants du collectif et l'annuaire de tous les membres. Une **barre de recherche** permet de retrouver une personne par son nom. |
| **Contact** | Formulaire et coordonnées pour joindre le collectif. |
| **Projects** | Les projets de la communauté, dont le projet pilote agricole et le projet en images. |
| **Documents** | Documents officiels : autorisation de fonctionnement, état des lieux de viabilité, règlement d'ordre intérieur, déclaration d'intention, acte notarié, projet de statuts, plans de la morgue, fiches et plan stratégique 2025–2029. |
| **Messages** | Annonces et messages adressés à la communauté. |
| **Nécrologie** | Hommage à nos morts (avec support audio). |
| **Sport** | Rubrique sportive de la communauté. |
| **World music / Chants spirituels / Noël** | Playlists musicales (lecture via YouTube). |
| **Lukala s'amuse** | Vidéos et enregistrements de la communauté (anniversaires, réunions, plantations, reportages…) lus directement dans le site. |

Certaines rubriques (par ex. la partie financière) peuvent être protégées par un
**mot de passe** communiqué aux membres autorisés.

---

## 🛠️ Informations techniques (pour les développeurs)

Application monopage (SPA) développée avec **Angular 17** et **Bootstrap 5**.

### Prérequis

- [Node.js](https://nodejs.org/) 22 ou supérieur
- npm

### Installation

```bash
npm install --legacy-peer-deps
```

### Lancer en local

```bash
npm start
# ou : npx ng serve
```

Le site est alors disponible sur `http://localhost:4200/`. Il se recharge
automatiquement à chaque modification du code source.

### Compiler pour la production

```bash
npx ng build --configuration production --base-href "/lukalaAvant-app-new/"
```

Les fichiers générés sont placés dans `dist/my-drop-down-app/browser`.

### Tests

```bash
npm test   # tests unitaires via Karma / Jasmine
```

### Structure du projet

```
src/app/
├── app.component.*        # Barre de navigation et disposition générale
├── app.routes.ts          # Déclaration des routes
├── home/                  # Page d'accueil
├── les-dirigeants/        # Dirigeants
├── others-members/        # Annuaire des membres
├── big-picture.service.ts # Source de données des membres
├── finance/, contact/, messages/, sport/, …   # Rubriques
├── youtube/               # Lecteur de titres YouTube
└── features/
    ├── media-player/      # Lecteur « Lukala s'amuse » (voir lukala-media.ts)
    ├── carousel/, image-mp4/, picture-table/   # Composants réutilisables
    └── lukala-samuse/
```

Le routage utilise le mode **hash** (`#/`), ce qui permet un hébergement statique
simple sans configuration serveur particulière.

#### Ajouter une vidéo ou un audio à « Lukala s'amuse »

1. Déposer le fichier dans `src/assets/mp3/`.
2. Ajouter une entrée dans [`src/app/features/media-player/lukala-media.ts`](src/app/features/media-player/lukala-media.ts) :

   ```ts
   {
     name: 'Titre affiché',
     link: ['/media', 'identifiant-unique'],
     source: 'assets/mp3/MonFichier.mp4',
     type: 'mp4',                 // ou 'mp3'
     placeholder: 'assets/images/miniature.jpg',
   }
   ```

   Ce fichier est la **source unique** : le menu déroulant et le lecteur se mettent à
   jour automatiquement.

---

## 🚀 Déploiement

Le site est publié sur **GitHub Pages**. Chaque `push` sur la branche `main` déclenche
automatiquement la compilation et la mise en ligne via le workflow
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

```bash
git add -A
git commit -m "Description du changement"
git push origin main   # déclenche le déploiement
```
