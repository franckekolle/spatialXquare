window.datamineTrainingData = {
  hero: {
    eyebrow: "Parcours logiciel minier",
    title: "Datamine Studio RM — Geological Data, Modeling & Resource Estimation",
    subtitle: "De la donnée géologique brute au modèle de ressources estimé, validé et documenté.",
    intro: "Ce parcours est centré sur la rigueur du Resource Modeling : import des données de sondages, QA/QC, modélisation explicite et implicite, block modelling, géostatistique, estimation, validation, automatisation et reporting technique.",
    statement: "Datamine Studio RM : contrôler → interpréter → modéliser → quantifier → estimer → valider.",
    image: "../../../icons_image/icon_formation/Datamine/datamine1.png"
  },
  media: {
    gateways: "../../../icons_image/icon_formation/Datamine/datamine2.png",
    path: "../../../icons_image/icon_formation/Datamine/datamine3.png",
    modules: "../../../icons_image/icon_formation/Datamine/datamine4.png",
    project: "../../../icons_image/icon_formation/Datamine/datamine5.png",
    estimation: "../../../icons_image/icon_formation/Datamine/datamine6.png",
    op: "../../../icons_image/icon_formation/Datamine/datamine7.png",
    bridges: "../../../icons_image/icon_formation/Datamine/datamine8.png",
    validation: "../../../icons_image/icon_formation/Datamine/datamine9.png",
    cta: "../../../icons_image/icon_formation/Datamine/datamine10.png"
  },
  nav: [
    ["Entrées", "#specialites"],
    ["Parcours", "#parcours"],
    ["Modules", "#modules"],
    ["Projet", "#projet"],
    ["Passerelles", "#passerelles"],
    ["Contact", "#contact"]
  ],
  gateways: [
    ["Datamine — Geological Data", "0 → 1 → 2", "Importer, contrôler et préparer les données géologiques avant toute interprétation."],
    ["Datamine — Geological Modeling", "0 → 1 → 2 → 3", "De la base de sondages au modèle géologique 3D explicite ou implicite."],
    ["Datamine — Resource Modeling", "0 → 1 → 2 → 3 → 4 → 5 → 6 → 7", "Du sondage au modèle de ressources estimé, validé et documenté."],
    ["Datamine Studio OP — Open Pit Design", "Studio fundamentals + block model → Studio OP", "Une spécialisation complémentaire reliée au block model, distincte de Studio RM."]
  ],
  path: [
    ["0", "Fondamentaux de la modélisation géologique & des ressources", "Socle commun"],
    ["1", "Studio RM — Fondamentaux & environnement Studio", "Initiation"],
    ["2", "Studio RM — Geological Data & Drillhole Management", "Initiation → Intermédiaire"],
    ["3", "Studio RM — Geological Modeling", "Intermédiaire"],
    ["4", "Studio RM — Block Modelling", "Intermédiaire +"],
    ["5", "Studio RM — Resource Estimation", "Avancé"],
    ["6", "Studio RM — Advanced Estimation & Geostatistics", "Avancé / Expert"],
    ["7", "Studio RM — Applications avancées & projet final", "Expert / Professional Project"],
    ["8", "Studio OP — Open Pit Design", "Spécialisation complémentaire"]
  ],
  modules: [
    {
      number: "0",
      title: "Fondamentaux de la modélisation géologique & des ressources",
      level: "Socle commun",
      objective: "Comprendre la relation entre sondages, domaines, wireframes, block model, estimation, validation et classification des ressources.",
      content: ["Sondages", "Collar", "Survey", "Lithology", "Assays", "Densité", "Compositage", "Domaines", "Wireframes", "Block models", "Variographie", "Validation", "Incertitudes"],
      project: "Lire le problème géologique et comprendre ce que Studio RM devra produire."
    },
    {
      number: "1",
      title: "Studio RM — Fondamentaux & environnement Studio",
      level: "Initiation",
      objective: "Maîtriser l’environnement Studio, organiser le workspace et préparer un premier projet géologique.",
      content: ["Interface", "Vues 2D/3D", "Fichiers", "Objets", "Commandes", "Filtres", "Attributs", "Coordonnées", "Import / export", "Plots", "Workspace"],
      project: "Créer le projet Studio RM, importer la topographie et structurer les premiers objets."
    },
    {
      number: "2",
      title: "Studio RM — Geological Data & Drillhole Management",
      level: "Initiation → Intermédiaire",
      objective: "Importer, désurveyer, contrôler et préparer les données géologiques avant la modélisation.",
      content: ["Collars", "Survey", "Lithology", "Assays", "Density", "CSV", "Bases externes", "Desurvey", "QA/QC", "FROM/TO", "Sections", "Plans"],
      project: "Transformer une base imparfaite en drillhole database contrôlée."
    },
    {
      number: "3",
      title: "Studio RM — Geological Modeling",
      level: "Intermédiaire",
      objective: "Transformer les observations de terrain et de forage en domaines, surfaces et volumes 3D utilisables pour l’estimation.",
      content: ["Sections", "Strings", "Contacts", "Wireframes", "Surfaces", "Solides", "Triangulations", "Modélisation implicite", "Failles", "Domaines"],
      project: "Construire le modèle lithologique et les principaux domaines minéralisés."
    },
    {
      number: "4",
      title: "Studio RM — Block Modelling",
      level: "Intermédiaire +",
      objective: "Construire un block model adapté à la géométrie du gisement, au niveau de détail des données et à la méthode d’estimation.",
      content: ["Origine", "Orientation", "Parent cells", "Subcells", "Attributs", "Codage", "Topographie", "Domaines", "Contraintes", "Statistiques"],
      project: "Créer le block model correspondant au modèle géologique."
    },
    {
      number: "5",
      title: "Studio RM — Resource Estimation",
      level: "Avancé",
      objective: "Passer des données échantillonnées au modèle de ressources par une chaîne d’estimation contrôlée et reproductible.",
      content: ["Statistiques", "Populations", "Compositage", "Variographie", "Anisotropie", "Nearest neighbour", "Inverse distance", "Ordinary kriging", "Search ellipsoid", "Swath plots"],
      project: "Produire un block model estimé et accompagné des contrôles de validation."
    },
    {
      number: "6",
      title: "Studio RM — Advanced Estimation & Geostatistics",
      level: "Avancé / Expert",
      objective: "Mettre en œuvre des stratégies d’estimation avancées et expliquer leurs hypothèses.",
      content: ["Scénarios", "Variographie avancée", "KNA", "Soft boundaries", "Outlier treatment", "Distance-based capping", "Simulation", "Incertitude", "Comparaison"],
      project: "Comparer plusieurs scénarios d’estimation et justifier les paramètres retenus."
    },
    {
      number: "7",
      title: "Studio RM — Applications avancées & projet final",
      level: "Expert / Professional Project",
      objective: "Construire de bout en bout un modèle de ressources documenté et prêt pour une revue technique.",
      content: ["Nouveaux sondages", "Mise à jour", "Automatisation", "Macros", "Batch operations", "Reporting", "Tonnages", "Teneurs", "Courbes", "Présentation"],
      project: "Présenter un Resource Model final, documenté et techniquement défendable."
    },
    {
      number: "8",
      title: "Datamine Studio OP — Open Pit Design",
      level: "Spécialisation complémentaire",
      objective: "Transformer un block model et des contraintes techniques en géométries opérationnelles de mine à ciel ouvert.",
      content: ["Block model", "Topographie", "Contraintes", "Paramètres géotechniques", "Benches", "Berms", "Pit walls", "Ramps", "Haul roads", "Pushbacks", "Volumes"],
      project: "Construire une géométrie open pit à partir du modèle de ressources."
    }
  ],
  project: {
    title: "Projet Ntem Gold — Démonstrateur pédagogique fictif",
    text: "Un dataset africain réaliste accompagne l’apprenant depuis les fichiers de sondages jusqu’au Resource Model final. Le participant importe, corrige, interprète, modélise, compose, analyse, estime, valide et présente.",
    steps: ["Raw geological data", "Drillhole database", "QA/QC", "Geological interpretation", "Wireframes / solids", "Domains", "Composites", "Block model", "Variography", "Estimation", "Validation", "Resource model", "Final technical presentation"]
  },
  bridges: [
    ["Supervisor", "Variographie avancée et optimisation des modèles spatiaux."],
    ["Isatis.neo", "Géostatistique avancée, incertitudes et analyses spécialisées."],
    ["Studio OP", "Open Pit Mine Design à partir du block model et des contraintes minières."]
  ],
  validation: ["Cours", "Démonstration", "Exercice", "Quiz", "Projet final", "Validation technique"],
  formats: ["Module indépendant", "Parcours complet", "Présentiel", "Live", "Hybride", "Entreprise sur données client"],
  completeOffer: ["8 modules Studio RM", "1 spécialisation Studio OP", "Dataset complet", "Projet fil rouge", "Block model", "Estimation", "Géostatistique", "Validation", "Reporting", "Attestation SpatialXquare"],
  cta: {
    title: "Construire votre parcours Datamine Studio RM",
    text: "Choisissez un module, une spécialisation ou le parcours complet Resource Modeling. Nous adaptons le programme au niveau des participants et aux livrables attendus.",
    buttons: ["Suivre le parcours complet", "Choisir un module", "Former mon équipe"]
  }
};
