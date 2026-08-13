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
request_replies
```

La migration `0002_admin_console.sql` ajoute aussi :

```text
users.role
users.active
```

## 5. Déployer

```bash
git add -A
git commit -m "Ajouter le tableau de bord des demandes"
git push
```

Cloudflare redéploie ensuite le Worker.

## 6. Créer le compte administrateur

Une fois déployé, ouvrir :

```text
https://spatialxquare.com/admin/
```

Cliquer sur `Créer le compte admin`, puis créer le premier compte.

## 7. Autoriser plusieurs administrateurs

Le premier compte devient automatiquement `super_admin`.

Depuis l'interface admin, le super admin peut ensuite créer d'autres comptes dans le bloc `Administrateurs`.

L'inscription publique reste possible uniquement si vous ajoutez un secret Cloudflare :

```text
ADMIN_SIGNUP_CODE
```

Les nouveaux administrateurs devront saisir ce code dans `/admin/`.

## 8. Consulter, répondre et supprimer les demandes

Ouvrir :

```text
https://spatialxquare.com/admin/
```

Connectez-vous avec l'e-mail et le mot de passe créés.

Fonctions disponibles :

- recherche dans les demandes ;
- filtre par statut ;
- filtre par service ;
- tri ;
- pagination ;
- bouton `Voir` pour ouvrir le détail d'une demande ;
- réponse directe par e-mail via Resend ;
- archivage de chaque réponse dans D1 ;
- suppression définitive d'une demande.

## 9. Tester

Envoyer un message depuis le bouton flottant `Contacter`, puis vérifier :

- réception e-mail via Resend ;
- apparition de la demande dans `/admin/`.
