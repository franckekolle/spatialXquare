# SpatialXquare

Premiere base statique du site institutionnel SpatialXquare, organisee autour d'un header fixe sombre, d'un grand Hero, de cartes d'expertises superposees, d'une section actualites, d'une presentation, de projets, de partenaires et d'un footer.

## Fichiers principaux

- `index.html` : points de montage HTML de la page.
- `styles.css` : design responsive desktop/mobile.
- `script.js` : composants, menu mobile, recherche, donnees des expertises et actualites.
- `decouvrir-spatialxquare.html` : page detaillee reliee au bouton "Decouvrir SpatialXquare".
- `src/data/discover-spatialxquare.js` : donnees editoriales de la page Decouvrir.
- `decouvrir.js` : rendu des sections et comportement video de la page Decouvrir.
- `expertises/geophysique-exploration-miniere/index.html` : page detaillee Geophysique et exploration miniere.
- `src/data/geophysics-services.js` : donnees de la page Geophysique.
- `geophysics.js` : rendu de la page Geophysique.
- `icons_image/` : images fournies pour le logo, le hero et les expertises.

## Lancer en local

Ouvrir directement `index.html` dans un navigateur.

Pour un apercu avec serveur local :

```powershell
python -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Hebergement IONOS

Cette version est compatible avec un hebergement web statique IONOS.

1. Se connecter a l'espace IONOS ou au FTP/SFTP.
2. Envoyer `index.html`, `styles.css`, `script.js` et le dossier `icons_image/` dans le dossier web public.
3. Verifier que le domaine pointe vers ce dossier.
4. Activer HTTPS dans IONOS si ce n'est pas deja fait.

Le formulaire utilise actuellement `mailto:`. Pour un envoi professionnel, il faudra ajouter une solution PHP securisee sur IONOS ou connecter un service d'e-mail.

## Prochaines etapes

- Remplacer les textes de demonstration par les textes institutionnels definitifs.
- Ajouter les vraies coordonnees, liens sociaux et adresse e-mail.
- Optimiser les images en `.webp` pour accelerer le chargement.
- Ajouter les pages internes detaillees : A propos, Expertises, Projets, Solutions logicielles, Equipements, Actualites et Contact.
- Remplacer les liens `#` des cartes par les futures pages correspondantes.
