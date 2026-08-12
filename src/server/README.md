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

## Formulaires dynamiques

Le formulaire principal reste `public/demande-devis.html`, mais il s'adapte selon les paramètres d'URL.

### Contact simple

```text
/demande-devis.html?type=contact
```

Champs attendus :

- e-mail ;
- téléphone / WhatsApp ;
- message.

### Demande de devis contextualisée

```text
/demande-devis.html?service=sig&offer=GIS%20%26%20Geospatial%20Academy
```

Paramètres utiles :

- `service` : `geophysique`, `sig`, `formation`, `geomodelisation`, `data`, `energie`, etc.
- `offer` : nom précis de l'offre, du parcours ou du module.
- `source` : page ou contexte d'origine.

Si `offer` n'est pas fourni, le formulaire essaie de l'inférer depuis la page d'origine (`document.referrer`).

## Envoi e-mail

L'API `/api/requests` peut envoyer une notification vers :

```text
contact_devis@spatialxquare.com
```

Pour activer l'envoi serveur, configurer ces variables dans Cloudflare :

```text
RESEND_API_KEY
MAIL_FROM
MAIL_TO=contact_devis@spatialxquare.com
```

`MAIL_FROM` doit être une adresse d'un domaine vérifié dans le service d'envoi choisi, par exemple :

```text
SpatialXquare <noreply@spatialxquare.com>
```

Dans ce projet, `MAIL_FROM` et `MAIL_TO` sont versionnés dans `wrangler.jsonc` parce que ce ne sont pas des secrets. La clé `RESEND_API_KEY` ne doit jamais être écrite dans le dépôt : elle doit rester un secret Cloudflare dans l'environnement de production.

Sans `RESEND_API_KEY` et `MAIL_FROM`, l'API peut recevoir et enregistrer la demande, mais elle ne peut pas envoyer d'e-mail automatiquement.

## Récupération des demandes

Trois niveaux sont possibles :

1. E-mail : chaque demande arrive à `contact_devis@spatialxquare.com` si l'envoi serveur est configuré.
2. Base D1 : les demandes sont stockées dans les tables `clients`, `contacts`, `projects` et `project_status_history` si le binding `DB` est configuré.
3. Dashboard API : `GET /api/dashboard` retourne les demandes récentes après authentification, si `DB` et `SESSIONS` sont configurés.
