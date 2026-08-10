# SpatialXquare

Application SpatialXquare servie par un Cloudflare Worker unique : le meme Worker expose le site vitrine statique et les routes API dynamiques.

## Architecture

```text
spatialXquare/
├── public/                  # fichiers publics servis par le Worker
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── demande-devis.html
│   ├── expertises/
│   └── icons_image/
├── src/
│   ├── index.js             # point d'entree du Worker
│   ├── auth.js              # inscription, connexion, sessions
│   ├── dashboard.js         # route protegee du tableau de bord
│   ├── requests.js          # reception des demandes de devis
│   └── server/
├── migrations/
│   └── 0001_init.sql        # schema initial D1
├── package.json
└── wrangler.jsonc
```

## Routes

- `GET /` : page d'accueil depuis `public/index.html`.
- `GET /expertises/geophysique-exploration-miniere/` : page Geophysique.
- `GET /expertises/energies-renouvelables-eau/` : page Energies renouvelables et eau.
- `GET /demande-devis.html` : formulaire de demande de devis.
- `GET /api/health` : verification API.
- `POST /api/requests` : reception des demandes de devis.
- `POST /api/auth/signup` : creation de compte.
- `POST /api/auth/login` : connexion.
- `POST /api/auth/logout` : deconnexion.
- `GET /api/auth/me` : utilisateur connecte.
- `GET /api/dashboard` : donnees dashboard, route protegee.

## Developpement local

Installer les dependances :

```bash
npm install
```

Lancer le Worker en local :

```bash
npm run dev
```

Puis ouvrir l'URL affichee par Wrangler.

## Base de donnees et sessions

Creer la base D1 :

```bash
npx wrangler d1 create spatialxquare-db
```

Creer le namespace KV pour les sessions :

```bash
npx wrangler kv namespace create SESSIONS
```

Reporter les identifiants retournes dans `wrangler.jsonc`, puis decommenter les sections `d1_databases` et `kv_namespaces`.

Appliquer la migration :

```bash
npm run db:migrate:local
npm run db:migrate:remote
```

Sans ces bindings, le site vitrine reste servi normalement. Les routes qui doivent persister des donnees repondent avec un message indiquant que la base n'est pas encore connectee.

## Deploiement Cloudflare

Configuration recommandee dans Cloudflare Workers avec integration Git :

```text
Build command: npm install
Deploy command: npx wrangler deploy
Root directory: /
```

Il ne faut plus utiliser `Output directory: .` ni `pages deploy .deploy` pour cette architecture. Les assets publics sont declares dans `wrangler.jsonc` :

```jsonc
"assets": {
  "directory": "./public",
  "binding": "ASSETS"
}
```

Le Worker sert les fichiers statiques avec `env.ASSETS.fetch(request)` et intercepte les routes `/api/*`.

## Workflow metier prevu

```text
Client
→ Demande REQ
→ Projet PROJ
→ Analyse technique
→ Devis DEV
→ Versions de devis
→ Projet accepte / refuse / termine
```

Le formulaire de devis envoie d'abord la demande vers `/api/requests`. Si l'API n'est pas disponible, il conserve un fallback e-mail vers `contact_devis@spatialxquare.com`.
