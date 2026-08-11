window.leapfrogTrainingData = {
  hero: {
    eyebrow: "Parcours logiciel géologique",
    title: "Leapfrog Geo — Modélisation géologique 3D & Exploration",
    subtitle: "De la donnée de sondage au modèle géologique dynamique, puis du modèle à l’interprétation et au ciblage.",
    intro: "Ce parcours accompagne les géologues, ingénieurs et équipes d’exploration dans la maîtrise progressive de Leapfrog Geo : import et contrôle des données, topographie, modélisation géologique implicite, structures, modèles numériques, sections, planification de sondages et sorties de présentation.",
    statement: "Leapfrog : intégrer → interpréter → modéliser → actualiser → cibler.",
    image: "../../../icons_image/icon_formation/leapfrog/leapfrog1.png"
  },
  media: {
    path: "../../../icons_image/icon_formation/leapfrog/leapfrog2.png",
    modules: "../../../icons_image/icon_formation/leapfrog/leapfrog3.png",
    project: "../../../icons_image/icon_formation/leapfrog/leapfrog4.png",
    structures: "../../../icons_image/icon_formation/leapfrog/leapfrog5.png",
    exploration: "../../../icons_image/icon_formation/leapfrog/leapfrog6.png",
    assessment: "../../../icons_image/icon_formation/leapfrog/leapfrog7.png",
    modulePage: "../../../icons_image/icon_formation/leapfrog/leapfrog8.png",
    premium: "../../../icons_image/icon_formation/leapfrog/leapfrog9.png"
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
    ["0", "Fondamentaux de la modélisation géologique 3D", "Fondamental"],
    ["1", "Leapfrog Geo — Fondamentaux & prise en main", "Initiation"],
    ["2", "Données de sondages & QA/QC", "Initiation → Intermédiaire"],
    ["3", "Modélisation géologique implicite 3D", "Intermédiaire"],
    ["4", "Structures, veines & modèles avancés", "Intermédiaire +"],
    ["5", "Exploration, modèles numériques & ciblage", "Avancé"],
    ["6", "Applications avancées & projet final", "Avancé / Expert"]
  ],
  modules: [
    {
      number: "0",
      title: "Fondamentaux de la modélisation géologique 3D",
      level: "Fondamental — Socle géologique",
      objective: "Comprendre comment des observations ponctuelles, données structurales, cartes et sondages deviennent des surfaces et volumes géologiques cohérents.",
      content: ["Sondages", "Lithologies", "Contacts", "Surfaces", "Volumes", "Failles", "Structures", "Veines", "Modélisation implicite", "Incertitude"],
      project: "Interpréter un petit gisement fictif à partir d’une carte, de sondages, de structures et d’une topographie.",
      result: "L’apprenant comprend ce que Leapfrog cherche réellement à reconstruire."
    },
    {
      number: "1",
      title: "Leapfrog Geo — Fondamentaux & prise en main",
      level: "Initiation",
      objective: "Créer, organiser et explorer un premier projet Leapfrog Geo.",
      content: ["Interface", "Arborescence", "Navigation 3D", "Import", "Filtres", "Légendes", "Scènes", "Vues", "Organisation", "Bonnes pratiques"],
      project: "Créer le projet, importer la topographie et visualiser les premières données.",
      result: "Projet Leapfrog structuré avec ses premières données visualisées."
    },
    {
      number: "2",
      title: "Leapfrog Geo — Données de sondages & QA/QC",
      level: "Initiation → Intermédiaire",
      objective: "Transformer des données de sondages brutes en une base fiable pour la modélisation.",
      content: ["Collars", "Surveys", "Lithologies", "Assays", "Structures", "Import CSV", "Validation", "FROM/TO", "Regroupement", "Interval selection"],
      project: "Importer, valider, corriger et regrouper les données du projet fil rouge.",
      result: "Base de sondages propre, organisée et exploitable."
    },
    {
      number: "3",
      title: "Leapfrog Geo — Modélisation géologique implicite 3D",
      level: "Intermédiaire",
      objective: "Construire un modèle géologique 3D dynamique à partir des données disponibles.",
      content: ["Topographie", "Geological Model", "Limites", "Chronologie", "Contacts", "Surfaces", "Lithologies", "Volumes", "GIS", "Mise à jour dynamique"],
      project: "Construire le premier modèle lithologique complet du gisement.",
      result: "Topographie, modèle géologique, unités, surfaces, volumes et scènes 3D."
    },
    {
      number: "4",
      title: "Leapfrog Geo — Structures, veines & modèles avancés",
      level: "Intermédiaire +",
      objective: "Intégrer la géologie structurale et les géométries complexes dans le modèle.",
      content: ["Failles", "Orientations", "Structural data", "Veines", "Points de contrôle", "Épaisseurs", "Dykes", "Lentilles", "Intrusions", "Volumes"],
      project: "Ajouter failles, domaine minéralisé et géométries complexes au modèle initial.",
      result: "Modèle 3D contraint par les structures et interprétations géologiques."
    },
    {
      number: "5",
      title: "Leapfrog Geo — Exploration, modèles numériques & ciblage",
      level: "Avancé",
      objective: "Analyser les variables numériques, interpréter les extensions et préparer des investigations complémentaires.",
      content: ["Numeric Models", "Teneurs", "Densité", "Queries", "Classification", "Cibles", "Extensions", "Drillhole planning", "Scénarios", "Programme de sondages"],
      project: "Construire les modèles numériques et proposer des cibles de forage.",
      result: "Programme de sondages proposé à partir du modèle 3D."
    },
    {
      number: "6",
      title: "Leapfrog Geo — Applications avancées & projet final",
      level: "Avancé / Expert",
      objective: "Actualiser, analyser et présenter un projet géologique complet comme dans un environnement professionnel.",
      content: ["Intégration multi-source", "Nouvelles données", "Recalcul", "Sections", "Layouts", "Scenes", "Images", "Movies", "Présentation", "Collaboration"],
      project: "Ajouter de nouvelles données, mettre à jour le modèle et présenter le résultat final.",
      result: "Projet final défendable avec sections, vues 3D, sorties de présentation et limites d’interprétation."
    }
  ],
  project: {
    title: "Projet Mbalam North — Démonstrateur pédagogique fictif",
    text: "Un projet africain fictif sert de fil rouge : topographie, carte géologique, collars, surveys, lithologies, assays, structures, surfaces et données SIG apparaissent progressivement pendant la formation.",
    steps: ["Données brutes", "QA/QC", "Topographie", "Interprétation", "Modèle géologique 3D", "Structures", "Numeric models", "Cibles", "Sondages planifiés", "Modèle actualisé", "Présentation finale"]
  },
  positioning: [
    ["Débutant", "Suivre les modules 0 → 1 → 2."],
    ["Déjà utilisateur", "Passer un test de positionnement puis entrer au module 2 ou 3."],
    ["Géologue expérimenté en 3D", "Entrer aux modules 3 → 4 → 5."],
    ["Utilisateur confirmé", "Entrer aux modules 5 → 6."]
  ],
  moduleSheet: ["Titre", "Niveau", "Durée", "Format", "Langue", "Ce que vous saurez faire", "Public", "Prérequis", "Programme", "Workflow", "Projet pratique", "Données fournies", "Évaluation", "Livrables", "Module précédent", "Module suivant"],
  completeOffer: ["7 modules", "Projet fil rouge", "Datasets", "Exercices pratiques", "Modèles géologiques", "Sections", "Drillhole planning", "Évaluation", "Projet final", "Supports", "Accompagnement"],
  cta: {
    title: "Construire votre parcours Leapfrog Geo",
    text: "Choisissez un module ciblé ou demandez le parcours complet. Nous adaptons le programme au niveau des participants, aux données disponibles et aux livrables attendus.",
    buttons: ["Suivre le parcours complet", "Choisir un module", "Demander une évaluation"]
  }
};
