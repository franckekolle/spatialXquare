window.micromineTrainingData = {
  hero: {
    eyebrow: "Parcours logiciel minier",
    title: "Micromine — Exploration, Geological Modeling & Resource Modeling",
    subtitle: "De la donnée d’exploration au modèle géologique, puis du modèle à l’évaluation des ressources.",
    intro: "Ce parcours SpatialXquare organise Micromine Origin & Beyond autour d’une progression claire : initiation, exploration, wireframing explicite, modélisation implicite, resource modelling, géostatistique, kriging, stratigraphic modelling et projet final.",
    statement: "Micromine : explorer. interpréter. modéliser. estimer. décider.",
    image: "../../../icons_image/icon_formation/micromine/micromine1.png"
  },
  media: {
    gateways: "../../../icons_image/icon_formation/micromine/micromine2.png",
    path: "../../../icons_image/icon_formation/micromine/micromine3.png",
    modules: "../../../icons_image/icon_formation/micromine/micromine4.png",
    project: "../../../icons_image/icon_formation/micromine/micromine5.png",
    wireframes: "../../../icons_image/icon_formation/micromine/micromine6.png",
    stratigraphic: "../../../icons_image/icon_formation/micromine/micromine7.png",
    resource: "../../../icons_image/icon_formation/micromine/micromine9.png",
    validation: "../../../icons_image/icon_formation/micromine/micromine10.png",
    cta: "../../../icons_image/icon_formation/micromine/micromine11.png"
  },
  nav: [
    ["Spécialités", "#specialites"],
    ["Parcours", "#parcours"],
    ["Modules", "#modules"],
    ["Projet", "#projet"],
    ["Stratigraphie", "#stratigraphie"],
    ["Contact", "#contact"]
  ],
  gateways: [
    ["Micromine — Exploration", "0 → 1 → 2", "Organiser, contrôler et interpréter les données d’exploration."],
    ["Micromine — Geological Modeling", "0 → 1 → 2 → 3 → 4", "De l’interprétation aux modèles géologiques explicites et implicites."],
    ["Micromine — Resource Modeling", "0 → 1 → 2 → 3/4 → 5 → 6 → 8", "Du modèle géologique au modèle de ressources estimé et validé."],
    ["Micromine — Stratigraphic Modeling", "0 → 1 → 2 → 7", "Modélisation spécialisée des couches et gisements stratiformes."]
  ],
  path: [
    ["0", "Fondamentaux des données d’exploration et de la modélisation 3D", "Socle commun"],
    ["1", "Micromine Origin & Beyond — Introduction & Fundamentals", "Débutant"],
    ["2", "Micromine Origin — Exploration", "Intermédiaire"],
    ["3", "Micromine Origin & Beyond — Explicit Wireframing", "Intermédiaire"],
    ["4", "Micromine Origin — Implicit Modelling", "Avancé"],
    ["5", "Micromine Origin — Resource Modelling", "Avancé"],
    ["6", "Micromine Origin — Geostatistics & Kriging", "Expert / Ressources"],
    ["7", "Micromine Origin — Stratigraphic Modelling", "Expert / Spécialisation"],
    ["8", "Micromine — Applications avancées & projet final", "Projet professionnel"]
  ],
  modules: [
    {
      number: "0",
      title: "Fondamentaux de l’exploration & de la modélisation 3D",
      level: "Socle commun",
      objective: "Comprendre les données, objets géologiques et méthodes utilisées dans les workflows Micromine.",
      content: ["Forages", "Collar", "Survey", "Lithologie", "Assays", "Structures", "Topographie", "SIG", "Surfaces", "Wireframes", "Block models", "Géostatistique", "Validation"],
      project: "Lire un projet d’exploration fictif et comprendre les objets à manipuler dans Micromine."
    },
    {
      number: "1",
      title: "Micromine Origin & Beyond — Introduction & Fundamentals",
      level: "Débutant",
      objective: "Être autonome dans l’environnement Micromine et organiser un premier projet.",
      content: ["Interface", "Projets", "Navigation", "Affichage 2D/3D", "Vizex", "Coordonnées", "Import / export", "Layers", "Filtres", "Styles", "Plots"],
      project: "Créer le projet, importer la topographie, configurer les vues et organiser le workspace."
    },
    {
      number: "2",
      title: "Micromine Origin — Exploration",
      level: "Intermédiaire",
      objective: "Organiser, analyser et visualiser les données issues d’une campagne d’exploration.",
      content: ["Collars", "Surveys", "Lithologies", "Assays", "Structures", "Density", "QA/QC", "Sections", "Plans", "SIG", "Anomalies", "Cibles"],
      project: "Importer et contrôler une campagne de forage, puis produire cartes, sections et interprétations."
    },
    {
      number: "3",
      title: "Micromine Origin & Beyond — Explicit Wireframing",
      level: "Intermédiaire",
      objective: "Construire manuellement des surfaces et volumes géologiques à partir de l’interprétation.",
      content: ["Digitalisation", "Sections", "Contours", "Contacts", "Strings", "Surfaces", "Triangulation", "Wireframes", "Solides", "Validation géométrique"],
      project: "Construire explicitement les premières enveloppes minéralisées du gisement."
    },
    {
      number: "4",
      title: "Micromine Origin — Implicit Modelling",
      level: "Avancé",
      objective: "Reconstruire des géométries géologiques complexes avec la modélisation implicite, sans perdre le contrôle géologique.",
      content: ["Interpolation implicite", "Contacts", "Points de contrôle", "Orientations", "Contraintes", "Tendances", "Surfaces implicites", "Failles", "Domaines"],
      project: "Construire une seconde version implicite du modèle et la comparer au wireframe explicite."
    },
    {
      number: "5",
      title: "Micromine Origin — Resource Modelling",
      level: "Avancé",
      objective: "Transformer le modèle géologique en modèle de ressources structuré et adapté aux étapes d’estimation.",
      content: ["Domaines", "Compositing", "Variables", "Densité", "Block model", "Extents", "Parent blocks", "Sub-blocking", "Attributs", "Domain coding"],
      project: "Construire le block model et y transférer les domaines géologiques et minéralisés."
    },
    {
      number: "6",
      title: "Micromine Origin — Geostatistics & Kriging",
      level: "Expert / Ressources",
      objective: "Comprendre la continuité spatiale et réaliser une estimation géostatistique cohérente.",
      content: ["Statistiques", "Populations", "Outliers", "Compositage", "Variogrammes", "Anisotropie", "Kriging", "Ellipsoïde", "Passes", "Validation"],
      project: "Estimer la variable principale du block model et valider spatialement les résultats."
    },
    {
      number: "7",
      title: "Micromine Origin — Stratigraphic Modelling",
      level: "Expert / Spécialisation",
      objective: "Construire des modèles stratigraphiques et des modèles de couches adaptés aux gisements tabulaires.",
      content: ["Stratigraphie", "Toit / mur", "Seams", "Horizons", "Épaisseur", "Corrélations", "Surfaces structurales", "Seam model", "Seam block model", "Volumes"],
      project: "Construire un mini-projet spécialisé sur un gisement stratiforme."
    },
    {
      number: "8",
      title: "Micromine — Applications avancées & projet final",
      level: "Projet professionnel",
      objective: "Intégrer exploration, modélisation explicite, modélisation implicite, resource modelling, kriging et reporting.",
      content: ["Nouveaux sondages", "QA/QC", "Mise à jour", "Comparaisons", "Paramètres de blocs", "Kriging", "Validation", "Sections", "Statistiques", "Présentation"],
      project: "Reconstruire le workflow complet et présenter un Resource Model final."
    }
  ],
  project: {
    title: "Projet Lomié Exploration — Démonstrateur pédagogique fictif",
    text: "Projet d’exploration polymétallique en Afrique centrale, avec plusieurs générations de données. La formation suit la chaîne complète depuis les données d’exploration jusqu’au Resource Model.",
    steps: ["Exploration data", "QA/QC", "Drillholes", "Interpretation", "Explicit wireframes", "Implicit model", "Geological domains", "Block model", "Geostatistics", "Kriging", "Validation", "Resource model"]
  },
  stratigraphic: {
    title: "Branche Stratigraphic Modeling",
    text: "Cette spécialisation possède son propre mini-projet, car les gisements tabulaires demandent une logique différente : corrélations, surfaces toit/mur, seams, épaisseurs et seam block model.",
    tags: ["Charbon", "Bauxite stratiforme", "Phosphates", "Horizons sédimentaires", "Seams", "Roof / floor", "Seam block model", "Volumes"]
  },
  validation: ["Module indépendant", "Parcours complet", "Exercices", "Quiz", "Projet final", "Attestation SpatialXquare"],
  formats: ["Présentiel", "Live", "Hybride", "Formation entreprise", "Données SpatialXquare", "Données client sous conditions"],
  completeOffer: ["Modules 0 à 8", "Projet fil rouge", "Datasets", "Wireframing", "Implicit modelling", "Block modelling", "Kriging", "Stratigraphic branch", "Validation", "Projet final"],
  cta: {
    title: "Construire votre parcours Micromine",
    text: "Choisissez une spécialisation ou le Complete Exploration & Resource Path. Le programme peut être adapté aux équipes d’exploration, aux services géologiques, aux bureaux d’études et aux universités.",
    buttons: ["Suivre le parcours complet", "Choisir une spécialisation", "Former mon équipe"]
  }
};
