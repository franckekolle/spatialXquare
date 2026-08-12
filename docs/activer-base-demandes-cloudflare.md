# Activer la base des demandes SpatialXquare

Objectif : enregistrer tous les formulaires envoyés depuis le site dans Cloudflare D1 et les consulter depuis :

```text
https://spatialxquare.com/admin/
```

## 1. Créer la base D1

Depuis votre terminal connecté à Cloudflare :

```bash
npx wrangler d1 create spatialxquare-db
```

Cloudflare retournera un bloc avec un `database_id`.

## 2. Créer le stockage de sessions KV

```bash
npx wrangler kv namespace create SESSIONS
```

Cloudflare retournera un `id`.

## 3. Brancher D1 et KV dans `wrangler.jsonc`

Décommentez les blocs `d1_databases` et `kv_namespaces`, puis remplacez :

```text
REMPLACER_PAR_DATABASE_ID
REMPLACER_PAR_KV_NAMESPACE_ID
```

par les IDs Cloudflare réels.

## 4. Appliquer la migration SQL

```bash
npx wrangler d1 migrations apply spatialxquare-db --remote
```

Cette commande crée les tables :

```text
users
clients
contacts
projects
project_status_history
documents
quotes
quote_items
```

## 5. Déployer

```bash
git add -A
git commit -m "Ajouter le tableau de bord des demandes"
git push
```

Cloudflare redéploie ensuite le Worker.

## 6. Créer le compte administrateur

Une fois déployé, créer un compte admin avec une requête POST vers :

```text
https://spatialxquare.com/api/auth/signup
```

Corps JSON :

```json
{
  "email": "votre-email-admin",
  "password": "mot-de-passe-solide",
  "name": "Admin SpatialXquare"
}
```

## 7. Consulter les demandes

Ouvrir :

```text
https://spatialxquare.com/admin/
```

Connectez-vous avec l'e-mail et le mot de passe créés.

## 8. Tester

Envoyer un message depuis le bouton flottant `Contacter`, puis vérifier :

- réception e-mail via Resend ;
- apparition de la demande dans `/admin/`.
