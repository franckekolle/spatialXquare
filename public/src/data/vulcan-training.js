window.vulcanTrainingData = {
  hero: {
    eyebrow: "Parcours logiciel minier",
    title: "Maptek Vulcan — Géologie, Ressources & Mine Design",
    subtitle: "De la donnée géologique au modèle de ressources, puis du modèle à la géométrie minière.",
    intro: "Ce parcours présente Vulcan comme une chaîne technique complète : données de sondages, QA/QC, modélisation géologique, block modelling, estimation des ressources, validation, conception à ciel ouvert, conception souterraine et scénarios miniers.",
    statement: "Vulcan : données → géologie → ressources → design → scénarios miniers.",
    image: "../../../icons_image/icon_formation/vulcan/vulcan1.png"
  },
  media: {
    gateways: "../../../icons_image/icon_formation/vulcan/vulcan2.png",
    path: "../../../icons_image/icon_formation/vulcan/vulcan3.png",
    modules: "../../../icons_image/icon_formation/vulcan/vulcan4.png",
    project: "../../../icons_image/icon_formation/vulcan/vulcan5.png",
    resource: "../../../icons_image/icon_formation/vulcan/vulcan6.png",
    openPit: "../../../icons_image/icon_formation/vulcan/vulcan7.png",
    underground: "../../../icons_image/icon_formation/vulcan/vulcan8.png",
    scenarios: "../../../icons_image/icon_formation/vulcan/vulcan9.png",
    assessment: "../../../icons_image/icon_formation/vulcan/vulcan10.png",
    cta: "../../../icons_image/icon_formation/vulcan/vulcan11.png"
  },
  nav: [
    ["Spécialités", "#specialites"],
    ["Parcours", "#parcours"],
    ["Modules", "#modules"],
    ["Projet", "#projet"],
    ["Validation", "#validation"],
    ["Contact", "#contact"]
  ],
  gateways: [
    ["Geological Modeling", "0 → 1 → 2", "De la donnée de forage au modèle géologique 3D."],
    ["Resource Estimation", "0 → 1 → 2 → 3 → 4", "Du modèle géologique au modèle de ressources estimé et validé."],
    ["Mine Design", "0 → 3 → 5 / 6", "Du block model à la conception d’une mine à ciel ouvert ou souterraine."],
    ["Complete Professional Path", "0 → 7", "Géologie → Ressources → Design minier."]
  ],
  path: [
    ["0", "Fondamentaux & environnement 3D", "Fondamental"],
    ["1", "Données géologiques & sondages", "Initiation → Intermédiaire"],
    ["2", "Geological Modeling", "Intermédiaire"],
    ["3", "Block Modelling", "Intermédiaire +"],
    ["4", "Resource Estimation & Validation", "Avancé"],
    ["5", "Open Pit Mine Design", "Avancé"],
    ["6", "Underground Mine Design", "Avancé"],
    ["7", "Applications avancées & projet intégré", "Expert / Projet"]
  ],
  modules: [
    {
      number: "0",
      title: "Maptek Vulcan — Fondamentaux & environnement 3D",
      level: "Fondamental",
      objective: "Comprendre l’environnement Vulcan, organiser un projet et acquérir les bases nécessaires aux workflows géologiques et miniers.",
      content: ["Interface", "Projet", "Navigation 3D", "Coordonnées", "Layers", "Design databases", "Points", "Lignes", "Surfaces", "Triangulations", "Sections", "Import / export"],
      project: "Créer le projet, importer la topographie, organiser les fichiers et préparer l’environnement."
    },
    {
      number: "1",
      title: "Vulcan — Données géologiques & sondages",
      level: "Initiation → Intermédiaire",
      objective: "Importer, contrôler, organiser et visualiser les données nécessaires à la modélisation.",
      content: ["Collar", "Survey", "Lithology", "Assays", "Density", "Geology", "Structures", "QA/QC", "Drillholes", "Plans", "Sections"],
      project: "Produire une base de sondages validée pour le projet fictif."
    },
    {
      number: "2",
      title: "Maptek Vulcan — Geological Modeling",
      level: "Intermédiaire",
      objective: "Transformer observations de terrain et données de forage en représentation géologique tridimensionnelle cohérente.",
      content: ["Sections", "Contacts", "Lithologies", "Domaines", "Surfaces", "Solides", "Triangulations", "Failles", "Implicit modelling", "Volumes"],
      project: "Construire les principaux domaines géologiques et minéralisés du gisement."
    },
    {
      number: "3",
      title: "Vulcan — Block Modelling",
      level: "Intermédiaire +",
      objective: "Construire un modèle de blocs cohérent avec les domaines géologiques et les besoins du projet.",
      content: ["Origine", "Extension", "Orientation", "Taille de bloc", "Sous-blocs", "Variables", "Attributs", "Codage", "Contraintes", "Contrôle"],
      project: "Construire le block model associé au modèle géologique."
    },
    {
      number: "4",
      title: "Maptek Vulcan — Resource Estimation & Validation",
      level: "Avancé",
      objective: "Préparer les données, analyser leur continuité spatiale, réaliser les estimations et valider les résultats.",
      content: ["Statistiques", "Compositage", "Populations", "Variogrammes", "Anisotropie", "Nearest neighbour", "Inverse distance", "Kriging", "Swath plots", "Validation"],
      project: "Produire un resource model estimé et validé."
    },
    {
      number: "5",
      title: "Maptek Vulcan — Open Pit Mine Design",
      level: "Avancé — Ingénierie minière",
      objective: "Transformer les résultats géologiques et économiques en géométrie de mine à ciel ouvert exploitable.",
      content: ["Pit shells", "Crest", "Toe", "Benches", "Berms", "Rampes", "Pentes", "Accès", "Pushbacks", "Volumes"],
      project: "Construire un design de fosse avec rampes, bancs et contraintes géométriques."
    },
    {
      number: "6",
      title: "Maptek Vulcan — Underground Mine Design",
      level: "Avancé",
      objective: "Construire les principales géométries nécessaires à un projet minier souterrain.",
      content: ["Orebody", "Niveaux", "Drives", "Crosscuts", "Declines", "Ramps", "Accès", "Stopes", "Volumes", "Validation"],
      project: "Concevoir une variante souterraine pour une zone profonde du même gisement."
    },
    {
      number: "7",
      title: "Vulcan — Applications avancées & projet intégré",
      level: "Expert / Projet",
      objective: "Rassembler géologie, estimation et design minier dans un seul workflow professionnel.",
      content: ["Nouveaux sondages", "Mise à jour", "Scénarios", "Open pit / underground", "Workflows", "Automatisation", "Python", "Volumes", "Présentation"],
      project: "Comparer plusieurs scénarios et produire une recommandation technique."
    }
  ],
  project: {
    title: "Projet Minta Copper-Gold — Démonstrateur pédagogique fictif",
    text: "Le projet commence comme une campagne d’exploration et finit comme une première étude de conception minière. Les données incluent topographie, drillholes, lithologies, assays, densité, structures, paramètres géotechniques et hypothèses économiques.",
    steps: ["Données brutes", "QA/QC", "Modèle géologique", "Block model", "Resource estimation", "Validation", "Open pit design", "Underground design", "Scénarios", "Recommandations"]
  },
  validation: ["Cours", "Démonstration", "Exercice", "Quiz", "Projet", "Validation"],
  formats: ["Présentiel", "Live", "Hybride", "Entreprise sur données client"],
  completeOffer: ["8 modules", "3 spécialités", "Projet fil rouge", "Données pédagogiques", "Scénarios open pit / underground", "Évaluations", "Projet intégré", "Attestation SpatialXquare"],
  cta: {
    title: "Construire votre parcours Maptek Vulcan",
    text: "Choisissez une spécialité ou demandez le parcours complet. Nous adaptons le programme au niveau des participants, aux données disponibles et aux résultats que l’équipe doit produire.",
    buttons: ["Parcours complet Vulcan", "Choisir une spécialité", "Former mon équipe"]
  }
};
