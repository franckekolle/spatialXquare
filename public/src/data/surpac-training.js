window.surpacTrainingData = {
  hero: {
    eyebrow: "Parcours logiciel minier",
    title: "GEOVIA Surpac — Parcours Géologie, Modélisation 3D & Ressources",
    subtitle: "De la compréhension des données géologiques à la construction, l’estimation et la validation d’un modèle de ressources complet.",
    intro: "Ce parcours accompagne progressivement les géologues, ingénieurs ressources et professionnels des géosciences dans la maîtrise de GEOVIA Surpac. Il combine fondamentaux de la modélisation géologique, gestion et contrôle des données, interprétation 3D, block modelling, estimation des ressources et applications avancées.",
    statement: "Deux façons de se former : choisir un module à la carte ou suivre le parcours complet 0 → 5.",
    image: "../../../icons_image/icon_formation/surpac/surpac1.png"
  },
  media: {
    path: "../../../icons_image/icon_formation/surpac/surpac2.png",
    project: "../../../icons_image/icon_formation/surpac/surpac3.png",
    modules: "../../../icons_image/icon_formation/surpac/surpac4.png",
    estimation: "../../../icons_image/icon_formation/surpac/surpac5.png",
    final: "../../../icons_image/icon_formation/surpac/surpac6.png",
    assessment: "../../../icons_image/icon_formation/surpac/surpac7.png",
    modulePage: "../../../icons_image/icon_formation/surpac/surpac8.png",
    premium: "../../../icons_image/icon_formation/surpac/surpac9.png",
    cta: "../../../icons_image/icon_formation/surpac/surpac10.png"
  },
  nav: [
    ["Parcours", "#parcours"],
    ["Modules", "#modules"],
    ["Projet fil rouge", "#projet"],
    ["Positionnement", "#positionnement"],
    ["Fiche module", "#fiche"],
    ["Contact", "#contact"]
  ],
  path: [
    ["0", "Fondamentaux de la modélisation géologique", "Fondamental"],
    ["1", "Surpac — Géologie & ressources", "Initiation"],
    ["2", "Fondamentaux & gestion des données", "Initiation → Intermédiaire"],
    ["3", "Modélisation géologique 3D", "Intermédiaire"],
    ["4", "Block Modelling & Estimation", "Avancé"],
    ["5", "Applications avancées", "Avancé / Expert"],
    ["Projet final", "Rapport & présentation", "Projet"]
  ],
  modules: [
    {
      number: "0",
      title: "Modélisation géologique & géomodélisation 3D",
      level: "Fondamental — Socle commun",
      objective: "Comprendre les principes géologiques, géométriques et numériques nécessaires à la construction d’un modèle 3D cohérent avant de les appliquer dans Surpac.",
      content: ["Données de sondages", "Contacts géologiques", "Sections et corrélations", "Surfaces", "Failles", "Solides", "Domaines géologiques", "Incertitude", "Validation géologique"],
      project: "Comprendre la géométrie d’un gisement et construire les premières interprétations du futur modèle numérique.",
      result: "Le participant comprend ce qu’il cherche à construire dans Surpac et pourquoi."
    },
    {
      number: "1",
      title: "GEOVIA Surpac — Géologie & ressources",
      level: "Initiation Surpac",
      objective: "Prendre en main l’environnement GEOVIA Surpac et comprendre son organisation dans un workflow de géologie et de ressources.",
      content: ["Interface", "Organisation de projet", "Coordonnées", "Navigation 2D/3D", "Strings", "Points", "Segments", "DTM", "Sections", "Import / export"],
      project: "Créer le projet, organiser les dossiers, importer la topographie et préparer l’environnement de travail.",
      result: "Projet Surpac structuré et prêt pour les étapes suivantes."
    },
    {
      number: "2",
      title: "GEOVIA Surpac — Fondamentaux & gestion des données",
      level: "Initiation → Intermédiaire",
      objective: "Construire, contrôler et exploiter correctement une base de données de sondages avant toute modélisation.",
      content: ["Collar", "Survey", "Lithology", "Assay", "Density", "Import CSV", "QA/QC", "Drillholes 3D", "Logs", "Sections"],
      project: "Importer, contrôler, corriger et valider une base de sondages volontairement imparfaite.",
      result: "Base de sondages contrôlée et prête pour l’interprétation géologique."
    },
    {
      number: "3",
      title: "GEOVIA Surpac — Modélisation géologique 3D",
      level: "Intermédiaire",
      objective: "Transformer les observations issues des sondages en surfaces et volumes géologiques cohérents.",
      content: ["Sections", "Interprétation", "Strings géologiques", "Contacts", "Surfaces", "Triangulations", "Solides", "Volumes", "Failles", "Validation"],
      project: "Construire le modèle lithologique et les principales enveloppes géologiques du gisement.",
      result: "Modèle géologique 3D, solides, surfaces, sections interprétées et vues 3D."
    },
    {
      number: "4",
      title: "GEOVIA Surpac — Block Modelling & Estimation",
      level: "Avancé",
      objective: "Construire un block model cohérent avec le modèle géologique et réaliser une estimation spatiale contrôlée et validée.",
      content: ["Statistiques", "Compositage", "Outliers", "Block model", "Attributs", "Variographie", "Nearest neighbour", "Inverse distance", "Kriging", "Validation"],
      project: "Passer du modèle géologique aux composites, au block model, à l’estimation et à la validation.",
      result: "Block model estimé, contrôlé et documenté."
    },
    {
      number: "5",
      title: "GEOVIA Surpac — Applications avancées",
      level: "Avancé / Expert",
      objective: "Mettre en œuvre Surpac sur une problématique complète proche d’un projet professionnel réel.",
      content: ["Mise à jour de modèles", "Nouveaux sondages", "Domaines multiples", "Automatisation", "Templates", "Scénarios", "Sensibilité", "Communication", "Documentation"],
      project: "Mettre à jour, analyser, documenter et défendre les choix techniques du modèle final.",
      result: "Workflow complet et défendable, prêt pour présentation technique."
    }
  ],
  project: {
    title: "Projet Kamba Gold — Démonstrateur pédagogique",
    text: "L’apprenant travaille sur un projet minier fictif réaliste situé dans un contexte géologique africain : campagnes de sondages, lithologies, analyses, densités, topographie et interprétations structurales.",
    steps: ["Données brutes", "Base contrôlée", "Interprétation", "Modèle géologique 3D", "Block model", "Estimation", "Validation", "Modèle final", "Rapport & présentation"]
  },
  positioning: [
    ["Débutant", "Commencer au module 0."],
    ["Notions de Surpac", "Entrer au module 1 ou 2."],
    ["Base de données maîtrisée", "Entrer au module 3."],
    ["Modélisation 3D maîtrisée", "Entrer au module 4."],
    ["Utilisateur expérimenté", "Entrer au module 5."]
  ],
  moduleSheet: ["Nom de la formation", "Logiciel", "Niveau", "Durée", "Format", "Langue", "Public", "Prérequis", "Objectifs", "Compétences acquises", "Programme", "Projet pratique", "Données fournies", "Évaluation", "Livrables", "Formateur", "CTA"],
  completeOffer: ["6 modules", "Projet fil rouge", "Exercices", "Datasets", "Évaluations intermédiaires", "Projet final", "Accompagnement formateur", "Supports", "Attestation de parcours"],
  cta: {
    title: "Construire votre parcours GEOVIA Surpac",
    text: "Choisissez un module précis ou demandez le parcours complet 0 → 5. Nous adaptons le niveau, la durée et les données au profil des participants.",
    buttons: ["Suivre le parcours complet", "Choisir un module", "Demander une évaluation"]
  }
};
