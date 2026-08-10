# Architecture dynamique SpatialXquare

Cette couche transforme le site en application Cloudflare Workers sans supprimer le site vitrine existant.

## Structure dynamique

- `src/index.js` : routage global du Worker.
- `src/auth.js` : comptes utilisateurs, hash des mots de passe, sessions KV.
- `src/dashboard.js` : donnees du tableau de bord, protegees par session.
- `src/requests.js` : reception et persistance optionnelle des demandes de devis.
- `migrations/0001_init.sql` : migration D1 officielle.
- `src/server/schema.sql` : copie de reference du schema courant.
- `public/demande-devis.html` + `public/devis.js` : formulaire client connecte a l'API.

## Services Cloudflare

```text
Worker
├── ASSETS   -> dossier public/
├── DB       -> Cloudflare D1
└── SESSIONS -> Cloudflare KV
```

Les bindings D1 et KV sont volontairement commentes dans `wrangler.jsonc` tant que les identifiants Cloudflare reels ne sont pas connus.

## Commandes utiles

```bash
npx wrangler d1 create spatialxquare-db
npx wrangler kv namespace create SESSIONS
npm run db:migrate:local
npm run db:migrate:remote
npm run dev
```

## Routes API

- `GET /api/health`
- `POST /api/requests`
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/me`
- `GET /api/dashboard`

## Workflow metier

```text
Client
→ Demande REQ
→ Projet PROJ
→ Analyse technique
→ Devis DEV
→ Versions de devis
→ Projet accepte / refuse / termine
```

Les champs specialises du formulaire restent stockes dans `custom_data`, ce qui permet d'ajouter progressivement de nouveaux services sans casser la structure principale.
