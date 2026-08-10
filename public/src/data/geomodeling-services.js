window.geomodelingPageData = {
  hero: {
    eyebrow: "Modélisation géologique 3D",
    title: "Modélisation géologique 3D",
    subtitle: "De données dispersées à une représentation cohérente du sous-sol.",
    intro: "Nous intégrons les données géologiques, géophysiques, de forage et spatiales afin de construire des modèles 3D cohérents de la géométrie et de l’organisation du sous-sol. Ces modèles permettent de mieux comprendre les structures, quantifier les volumes, analyser les incertitudes et fournir une base solide aux décisions d’exploration et d’ingénierie.",
    statement: "Du terrain au modèle, du modèle à la décision.",
    image: "../../icons_image/ModelisationGeol/mod1.png"
  },
  nav: [
    ["Pourquoi", "#pourquoi"],
    ["Chaîne", "#chaine"],
    ["Données", "#donnees"],
    ["Construction", "#construction"],
    ["Quantification", "#quantification"],
    ["Incertitudes", "#incertitudes"],
    ["Démonstrateurs", "#demonstrateurs"],
    ["Contact", "#contact"]
  ],
  why: {
    title: "Pourquoi construire un modèle géologique 3D ?",
    text: "Les données géologiques sont généralement observées de manière discontinue : affleurements, sondages, profils géophysiques, cartes ou observations ponctuelles. La modélisation 3D permet de les intégrer dans un même référentiel afin de proposer une représentation cohérente de la continuité des structures entre les observations.",
    cards: [
      ["Comprendre la géométrie", "Représenter les couches, contacts, failles, intrusions, corps minéralisés et autres structures dans l’espace."],
      ["Intégrer les données", "Croiser les informations issues des forages, de la géologie, de la géophysique, du SIG et des observations terrain."],
      ["Quantifier", "Calculer des volumes, épaisseurs, surfaces, continuités et caractéristiques spatiales."],
      ["Réduire l’incertitude", "Tester différentes hypothèses géologiques et identifier les zones où de nouvelles données sont nécessaires."]
    ]
  },
  workflow: [
    ["Compilation des données", "Centralisation des données géologiques, sondages, géophysiques, topographiques et spatiales disponibles."],
    ["Contrôle qualité", "Vérification des coordonnées, lithologies, profondeurs, intervalles, doublons, valeurs manquantes et cohérence entre sources."],
    ["Interprétation géologique", "Identification et corrélation des unités, contacts, surfaces, failles, structures et domaines géologiques."],
    ["Construction géométrique", "Définition des contraintes spatiales nécessaires à la reconstruction des surfaces et volumes."],
    ["Modélisation 3D", "Construction d’une représentation volumétrique cohérente du sous-sol."],
    ["Estimation", "Estimation spatiale des variables d’intérêt lorsque les données et le contexte le permettent."],
    ["Analyse des incertitudes", "Évaluation de la sensibilité du modèle aux données, hypothèses et paramètres retenus."],
    ["Aide à la décision", "Utilisation du modèle pour cibler les investigations, comparer des scénarios ou orienter les travaux."]
  ],
  sources: [
    ["Forages", ["Collars", "Survey", "Lithologie", "Altération", "Minéralisation", "Analyses", "Densité", "RQD", "Structures"]],
    ["Géologie", ["Cartes géologiques", "Affleurements", "Contacts", "Failles", "Pendages", "Structures", "Logs géologiques"]],
    ["Géophysique", ["Résistivité", "Magnétisme", "Gravimétrie", "Sismique", "Électromagnétisme", "Inversions 2D / 3D"]],
    ["Données spatiales", ["MNT", "Topographie", "SIG", "Imagerie", "Cartographie", "Limites de projet"]]
  ],
  construction: {
    image: "../../icons_image/ModelisationGeol/mod2.png",
    cards: [
      ["Modélisation structurale 3D", "Failles, contacts, plis, discontinuités, intrusions, surfaces géologiques et orientation des structures."],
      ["Modélisation des unités géologiques", "Corrélation des lithologies, faciès, formations, altérations, domaines structuraux et zones minéralisées."],
      ["Modélisation explicite", "Construction directe de surfaces et volumes à partir de points, lignes, sections et interprétations géologiques."],
      ["Modélisation implicite", "Interpolation de champs numériques à partir des observations et orientations pour générer certaines surfaces géologiques."]
    ]
  },
  quantification: {
    image: "../../icons_image/ModelisationGeol/mod3.png",
    cards: [
      ["Block models & représentation volumétrique", "Discrétisation du volume d’étude en cellules auxquelles sont associés des attributs géologiques, statistiques ou économiques."],
      ["Estimation & distribution spatiale", "Analyse statistique, compositage, domaining, interpolation, estimation et validation lorsque les données le permettent."],
      ["Géostatistique & continuité spatiale", "Variogrammes, anisotropie, kriging, co-kriging, simulation conditionnelle et validation croisée."],
      ["Prudence réglementaire", "Les estimations destinées à des déclarations réglementaires doivent respecter les standards et responsabilités applicables au projet."]
    ]
  },
  uncertainty: {
    title: "Un modèle n’est pas une vérité unique",
    text: "Tout modèle géologique est une interprétation contrainte par la quantité, la qualité et la distribution des données disponibles. Notre approche vise à rendre ces incertitudes visibles plutôt qu’à les masquer.",
    flow: ["Densité des données", "Hypothèses géologiques", "Méthodes d’interpolation", "Paramètres du modèle", "Incertitude"],
    cards: [
      ["Simulations & scénarios", "Générer plusieurs réalisations possibles du sous-sol lorsque plusieurs géométries ou distributions sont compatibles avec les observations."],
      ["Analyse de risque", "Évaluer la variabilité possible du sous-sol et mesurer son impact sur les décisions."],
      ["Modèles évolutifs", "Intégrer de nouveaux sondages, observations ou résultats analytiques pour produire des versions successives du modèle."],
      ["Modélisation 4D", "Mobiliser la dimension temporelle lorsque les données disponibles et les objectifs du projet le justifient."]
    ]
  },
  advanced: {
    image: "../../icons_image/ModelisationGeol/mod4.png",
    cards: [
      ["IA & géologie augmentée", "Utiliser l’IA pour renforcer l’interprétation, détecter des relations complexes et proposer des zones d’intérêt sans remplacer le géologue."],
      ["Cartographie prédictive & ciblage", "Intégrer géologie, géophysique, géochimie, topographie et données spatiales pour hiérarchiser les secteurs favorables."],
      ["Géologue dans la boucle", "Automatisation ne signifie pas décision automatique : la cohérence géologique reste contrôlée par l’expertise humaine."],
      ["Validation terrain", "Confronter les hypothèses aux observations : nouveaux sondages, cartographie, échantillonnage ou investigations géophysiques."]
    ]
  },
  applications: [
    ["Exploration minière", "Comprendre la géométrie des formations et structures, identifier les extensions possibles et améliorer le ciblage des sondages."],
    ["Ressources", "Définir les domaines géologiques nécessaires aux estimations et représenter la distribution spatiale des variables."],
    ["Géotechnique", "Représenter les unités, structures et hétérogénéités pouvant influencer la conception des ouvrages."],
    ["Hydrogéologie", "Modéliser la géométrie des aquifères, formations, failles et structures contrôlant les écoulements."],
    ["Infrastructures", "Intégrer les informations issues des reconnaissances géologiques, géophysiques et géotechniques."]
  ],
  integration: {
    title: "Géologie + Géophysique + Forages",
    text: "La modélisation gagne en robustesse lorsque les observations ponctuelles des sondages peuvent être confrontées à l’information plus continue apportée par la géophysique.",
    flow: ["Forages", "Géologie", "Géophysique", "Contraintes géologiques", "Interprétation intégrée", "Modèle 3D"]
  },
  dataScience: ["Analyse de données de forage", "Classification", "Clustering", "Détection d’anomalies", "Analyse de tendances", "Cartographie prédictive", "Estimation", "Machine Learning"],
  visualization: ["Vue 3D interactive", "Sections", "Plans", "Surfaces", "Volumes", "Block models", "Isosurfaces", "Profils", "Animations", "Exports SIG"],
  demonstrators: [
    {
      badge: "Démonstrateur 01",
      domain: "Gisement aurifère",
      title: "Modélisation structurale et lithologique 3D",
      image: "../../icons_image/ModelisationGeol/mod5.png",
      problem: "Comprendre la relation entre veines minéralisées, structures et données de forage.",
      data: "Forages, lithologies, teneurs, failles et cartographie.",
      result: "Modèle 3D, domaines minéralisés, sections, zones d’extension et cibles de sondage."
    },
    {
      badge: "Démonstrateur 02",
      domain: "Fer",
      title: "Modèle géologique et block model",
      image: "../../icons_image/ModelisationGeol/mod6.png",
      problem: "Construire la géométrie d’un corps minéralisé et préparer le support d’une estimation spatiale.",
      data: "Surfaces, solides, lithologies, analyses, densités et contraintes géologiques.",
      result: "Block model, volumes, sections et support d’estimation."
    },
    {
      badge: "Démonstrateur 03",
      domain: "Hydrogéologie",
      title: "Modèle 3D d’un système aquifère",
      image: "../../icons_image/ModelisationGeol/mod2.png",
      problem: "Représenter les formations et structures susceptibles de contrôler la circulation des eaux.",
      data: "Forages, logs, géophysique électrique, topographie et niveaux d’eau.",
      result: "Modèle des principales unités, structures et zones d’intérêt hydrogéologique."
    },
    {
      badge: "Démonstrateur 04",
      domain: "IA & exploration",
      title: "Cartographie prédictive de prospectivité",
      image: "../../icons_image/ModelisationGeol/mod4.png",
      problem: "Prioriser les secteurs favorables à partir de données multi-sources.",
      data: "Géologie, géophysique, géochimie, structures, topographie et indices connus.",
      result: "Carte de probabilité, facteurs explicatifs, zones prioritaires et cibles."
    },
    {
      badge: "Démonstrateur 05",
      domain: "Mise à jour progressive",
      title: "Modèle géologique évolutif",
      image: "../../icons_image/ModelisationGeol/mod1.png",
      problem: "Actualiser la représentation du sous-sol à mesure que les campagnes produisent de nouvelles données.",
      data: "Campagne 1, nouveaux sondages, nouvelles données géophysiques et observations terrain.",
      result: "Modèle V1, V2 puis V3 avec historique des hypothèses et décisions associées."
    }
  ],
  deliverables: [
    ["Base de données contrôlée", "Données compilées, structurées et vérifiées."],
    ["Modèle structural", "Failles, contacts, surfaces et principales structures."],
    ["Modèle lithologique 3D", "Représentation volumétrique des unités géologiques."],
    ["Block model", "Modèle cellulaire enrichi des variables nécessaires au projet."],
    ["Sections & cartes", "Coupes, plans et représentations permettant d’interroger le modèle."],
    ["Modèles d’estimation", "Distribution spatiale des variables lorsque le projet le nécessite."],
    ["Incertitudes", "Indicateurs et scénarios permettant d’apprécier la confiance dans les résultats."],
    ["Visualisations 3D", "Supports interactifs facilitant la compréhension et la communication du modèle."],
    ["Rapport technique", "Méthodes, hypothèses, paramètres, interprétation et recommandations."]
  ],
  technologies: ["Python", "QGIS", "ArcGIS", "PyVista", "Gmsh", "ParaView", "GSLIB", "Solutions géostatistiques", "Bases de données", "Machine Learning", "Formats géoscientifiques 3D"],
  reasons: [
    ["Une approche intégrée", "Géologie, géophysique, données de forage, SIG et Data Science réunis dans un même workflow."],
    ["Une modélisation orientée géologie", "Les algorithmes doivent respecter les connaissances et contraintes géologiques du projet."],
    ["Des modèles explicables", "Les hypothèses, contraintes et incertitudes doivent pouvoir être comprises et remises en question."],
    ["Une chaîne numérique", "Du contrôle qualité des données jusqu’à la visualisation et à l’aide à la décision."],
    ["Des modèles évolutifs", "Les modèles peuvent être actualisés lorsque de nouvelles données deviennent disponibles."]
  ],
  audiences: ["Compagnies minières", "Explorateurs", "Bureaux d’études", "Carrières", "Hydrogéologues", "Géotechniciens", "Infrastructures", "Investisseurs", "Institutions"],
  cta: {
    title: "Vos données racontent-elles déjà toute l’histoire du sous-sol ?",
    text: "Nous pouvons intégrer vos données géologiques, géophysiques et de forage afin de construire un modèle 3D cohérent, tester les principales hypothèses et identifier les informations nécessaires pour réduire les incertitudes.",
    buttons: ["Discuter de mon modèle", "Demander une étude"]
  }
};
