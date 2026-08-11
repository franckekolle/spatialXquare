window.geostatTrainingData = {
  hero: {
    eyebrow: "Académie technique",
    title: "Géostatistique & Data Science pour les géosciences",
    subtitle: "Comprendre la variabilité spatiale, construire des modèles fiables, quantifier l’incertitude et transformer les données géoscientifiques en décisions.",
    intro: "Cette académie ne se limite pas à Supervisor ou Isatis.neo. Elle construit un socle statistique, puis progresse vers variographie, kriging, validation, simulations, classification, géostatistique multivariée, Machine Learning spatial et automatisation Python.",
    statement: "Comprendre → explorer → modéliser → estimer → simuler → quantifier → prédire → décider.",
    image: "../../../icons_image/icon_formation/geostat/geostat1.png"
  },
  media: {
    gateways: "../../../icons_image/icon_formation/geostat/geostat2.png",
    path: "../../../icons_image/icon_formation/geostat/geostat3.png",
    modules: "../../../icons_image/icon_formation/geostat/geostat4.png",
    project: "../../../icons_image/icon_formation/geostat/geostat5.png",
    supervisor: "../../../icons_image/icon_formation/geostat/geostat6.png",
    isatis: "../../../icons_image/icon_formation/geostat/geostat7.png",
    dataScience: "../../../icons_image/icon_formation/geostat/geostat8.png",
    validation: "../../../icons_image/icon_formation/geostat/geostat9.png",
    cta: "../../../icons_image/icon_formation/geostat/geostat10.png"
  },
  nav: [
    ["Portes", "#specialites"],
    ["Parcours", "#parcours"],
    ["Modules", "#modules"],
    ["Projet", "#projet"],
    ["Logiciels", "#logiciels"],
    ["Contact", "#contact"]
  ],
  gateways: [
    ["Applied Geostatistics", "0 → 1 → 2 → 3 → 5", "Statistiques, variographie, kriging et validation des estimations."],
    ["Supervisor — Resource Estimation Optimisation", "1 → 2 → 4 → 5", "Variography, KNA, conditional bias, estimation parameters et validation."],
    ["Isatis.neo — Advanced Geostatistics & Uncertainty", "0 → 3 → 6 → 7 → 8 → 9 → 10", "Estimation avancée, simulation, géostatistique non linéaire, incertitude et risque."],
    ["Geoscience Data Science", "0 → 1 → 11 → 12 → 13 → 14 → 15", "Données géoscientifiques, Machine Learning spatial, modèles hybrides, Python et workflows reproductibles."]
  ],
  path: [
    ["0", "Fondamentaux statistiques pour les géosciences", "Fondamental"],
    ["1", "Analyse exploratoire & préparation des données", "Fondamental → Intermédiaire"],
    ["2", "Géostatistique spatiale & variographie", "Intermédiaire"],
    ["3", "Kriging & estimation spatiale", "Intermédiaire → Avancé"],
    ["4", "Supervisor — Variography, KNA & Estimation Optimisation", "Avancé"],
    ["5", "Validation des modèles & qualité des estimations", "Avancé"],
    ["6", "Isatis.neo — Advanced Geostatistics", "Avancé"],
    ["7", "Simulations conditionnelles & incertitudes", "Avancé / Expert"],
    ["8", "Recoverable Resources & Nonlinear Geostatistics", "Expert"],
    ["9", "Classification des ressources & risque", "Expert"],
    ["10", "Multivariate Geostatistics & Co-Kriging", "Avancé / Expert"],
    ["11", "Data Science for Geosciences", "Intermédiaire → Avancé"],
    ["12", "Spatial Machine Learning", "Avancé"],
    ["13", "Hybrid Geostatistics + Machine Learning", "Avancé"],
    ["14", "Python & automatisation des workflows géostatistiques", "Avancé"],
    ["15", "Geological Data Management", "Fondamental → Avancé"],
    ["16", "Projet final — Geological Data to Decision", "Projet professionnel"]
  ],
  modules: [
    {
      number: "0",
      title: "Fondamentaux statistiques pour les géosciences",
      level: "Fondamental",
      objective: "Construire les bases statistiques nécessaires avant d’aborder variographie, kriging ou simulation.",
      content: ["Variables", "Échantillons", "Moyenne", "Variance", "Covariance", "Corrélation", "Distributions", "Quantiles", "Probabilités", "Stationnarité", "Biais d’échantillonnage"],
      project: "Décrire statistiquement les teneurs, anomalies et distributions d’un jeu de forages."
    },
    {
      number: "1",
      title: "Analyse exploratoire & préparation des données",
      level: "Fondamental → Intermédiaire",
      objective: "Comprendre la structure des données avant toute interpolation.",
      content: ["QA/QC", "Valeurs manquantes", "Doublons", "Outliers", "Capping", "Transformations", "Domaining", "Compositing", "Declustering", "Visualisation 2D/3D"],
      project: "Passer de RAW DATA à DATA READY par une préparation statistiquement et géologiquement cohérente."
    },
    {
      number: "2",
      title: "Géostatistique spatiale & variographie",
      level: "Intermédiaire",
      objective: "Comprendre et modéliser la continuité spatiale des variables géologiques.",
      content: ["Distance", "Voisinage", "Covariance spatiale", "Semivariance", "Variogramme", "Portée", "Palier", "Effet pépite", "Anisotropie", "Variogram maps", "Modèles imbriqués"],
      project: "Construire un modèle variographique 3D pour une variable de teneur."
    },
    {
      number: "3",
      title: "Kriging & estimation spatiale",
      level: "Intermédiaire → Avancé",
      objective: "Transformer des observations ponctuelles en estimation spatiale en comprenant les hypothèses utilisées.",
      content: ["Voisinage", "Poids", "Système de kriging", "Variance de kriging", "Support ponctuel / bloc", "Kriging simple", "Kriging ordinaire", "Kriging universel", "Dérive", "Domaines"],
      project: "Produire une estimation par domaine à partir de données, variogramme et stratégie de recherche."
    },
    {
      number: "4",
      title: "Supervisor — Variography, KNA & Estimation Optimisation",
      level: "Avancé",
      objective: "Optimiser les paramètres géostatistiques nécessaires à une estimation robuste.",
      content: ["Composites", "Variograms", "Variogram fans", "Anisotropie", "Fitting interactif", "KNA", "Block size", "Search radius", "Sectors", "Kriging Efficiency", "Slope of Regression"],
      project: "Construire des paramètres variographiques et voisinages optimisés pour l’estimation."
    },
    {
      number: "5",
      title: "Validation des modèles & qualité des estimations",
      level: "Avancé",
      objective: "Déterminer si une estimation est cohérente, contrôlable et utilisable pour une décision.",
      content: ["Statistiques globales", "Samples / blocks", "Histogrammes", "QQ plots", "Probability plots", "Grade-tonnage curves", "Swath plots", "Sections", "Validation locale"],
      project: "Accepter ou réviser un modèle après contrôles globaux, spatiaux et locaux."
    },
    {
      number: "6",
      title: "Isatis.neo — Advanced Geostatistics",
      level: "Avancé",
      objective: "Construire des modèles spatiaux complexes et traiter explicitement l’incertitude.",
      content: ["EDA", "Variographie", "Transformations", "Kriging", "Universal kriging", "Cokriging", "External drift", "Modèles multivariés", "Change of support", "Validation"],
      project: "Comparer plusieurs stratégies avancées d’estimation sur le même dataset."
    },
    {
      number: "7",
      title: "Simulations conditionnelles & incertitudes",
      level: "Avancé / Expert",
      objective: "Représenter le sous-sol par plusieurs réalisations compatibles avec les données.",
      content: ["Champ aléatoire", "Simulation conditionnelle", "SGS", "Turning Bands", "Direct Block Simulation", "Plurigaussian", "Percentiles", "Probability maps", "Risk"],
      project: "Générer des réalisations et produire des cartes de probabilité et d’incertitude."
    },
    {
      number: "8",
      title: "Recoverable Resources & Nonlinear Geostatistics",
      level: "Expert",
      objective: "Estimer des ressources récupérables en tenant compte du changement de support et de la sélectivité.",
      content: ["Change of support", "SMU", "Uniform Conditioning", "Cut-offs", "Grade-tonnage curves", "Multiple Indicator Kriging", "Conditional Expectation", "Sélectivité"],
      project: "Comparer kriging lissé, ressources récupérables et scénarios de cut-off."
    },
    {
      number: "9",
      title: "Classification des ressources & risque",
      level: "Expert",
      objective: "Transformer les résultats géostatistiques en indicateurs quantitatifs de confiance.",
      content: ["Confiance", "Spacing", "Continuity", "Kriging variance", "Kriging Efficiency", "Slope of Regression", "Conditional variance", "CV", "Probability criteria"],
      project: "Proposer une classification argumentée sans promettre un statut réglementaire."
    },
    {
      number: "10",
      title: "Multivariate Geostatistics & Co-Kriging",
      level: "Avancé / Expert",
      objective: "Utiliser plusieurs variables corrélées lorsque le contexte géologique le justifie.",
      content: ["Covariance croisée", "Cross-variograms", "LMC", "Cokriging", "Collocated cokriging", "External drift", "Variables auxiliaires", "Validation multivariée"],
      project: "Intégrer une variable secondaire, géophysique ou géochimique, dans un modèle spatial."
    },
    {
      number: "11",
      title: "Data Science for Geosciences",
      level: "Intermédiaire → Avancé",
      objective: "Utiliser Machine Learning et statistiques comme complément à la géostatistique.",
      content: ["Pandas", "DataFrames", "Pipelines", "Corrélations", "PCA", "Clustering", "Anomaly detection", "Random forest", "Gradient boosting", "Validation"],
      project: "Construire un modèle prédictif pour lithologies, faciès, anomalies ou propriétés géologiques."
    },
    {
      number: "12",
      title: "Spatial Machine Learning",
      level: "Avancé",
      objective: "Éviter les modèles statistiquement flatteurs mais spatialement incohérents.",
      content: ["Spatial autocorrelation", "Spatial split", "Leakage", "Block cross-validation", "Spatial features", "Distances", "Neighbourhood variables", "Geological constraints"],
      project: "Comparer validation aléatoire et validation spatiale pour mesurer le risque de surapprentissage."
    },
    {
      number: "13",
      title: "Hybrid Geostatistics + Machine Learning",
      level: "Avancé",
      objective: "Combiner structure spatiale et capacité prédictive du Machine Learning.",
      content: ["Residual kriging", "Regression kriging", "ML residuals", "Covariates", "Variogram of residuals", "Probabilités géologiques", "Spatial correction", "Modèles hybrides"],
      project: "Construire un workflow ML + correction spatiale sur données géoscientifiques."
    },
    {
      number: "14",
      title: "Python & automatisation des workflows géostatistiques",
      level: "Avancé",
      objective: "Transformer les analyses ponctuelles en pipelines reproductibles.",
      content: ["Python", "NumPy", "Pandas", "Matplotlib", "SciPy", "scikit-learn", "Isatis.py", "Batch validation", "Reporting", "Scénarios"],
      project: "Automatiser import, QA/QC, EDA, estimation, validation, export et rapport."
    },
    {
      number: "15",
      title: "Geological Data Management",
      level: "Fondamental → Avancé",
      objective: "Construire des données propres, documentées et exploitables avant modélisation.",
      content: ["Formats", "Metadata", "Schemas", "SQL", "Validation", "Versioning", "Provenance", "Traceability", "Reproducibility", "Data quality"],
      project: "Documenter et fiabiliser la chaîne de données avant variographie et estimation."
    },
    {
      number: "16",
      title: "Projet final — Geological Data to Decision",
      level: "Projet professionnel",
      objective: "Relier données, géostatistique, incertitude, Machine Learning et décision technique.",
      content: ["QA/QC", "EDA", "Domains", "Compositing", "Variography", "Kriging", "KNA", "Simulation", "Classification", "ML", "Décision"],
      project: "Présenter une recommandation basée sur modèles, incertitude et limites des données."
    }
  ],
  project: {
    title: "Projet Batouri Gold — Geostatistics & Data Science Lab",
    text: "Un démonstrateur pédagogique fictif construit autour de forages, lithologies, assays, densité, structures, géophysique, topographie et géochimie. Le dataset évolue pendant tout le parcours.",
    steps: ["Raw geoscience data", "QA/QC", "EDA", "Domains", "Compositing", "Variography", "Kriging", "KNA", "Validation", "Simulation", "Uncertainty", "Classification", "ML / Data Science", "Decision"]
  },
  softwareLogic: [
    ["Supervisor", "Optimiser et contrôler l’estimation des ressources : EDA, variography, KNA, estimation parameters, conditional bias et validation."],
    ["Isatis.neo", "Construire des modèles géostatistiques avancés : kriging, co-kriging, non-linéaire, simulation, incertitude et risque."],
    ["Python & Data Science", "Automatiser, prédire et comparer les scénarios avec des workflows reproductibles et des validations spatiales."]
  ],
  validation: ["Cours", "Démonstration", "Exercice", "Projet", "Validation", "Rapport technique", "Attestation SpatialXquare"],
  formats: ["Module séparé", "Complete Professional Path", "Présentiel", "Live", "Hybride", "Entreprise sur données client"],
  completeOffer: ["17 modules", "Socle statistique", "Variographie", "Kriging", "Supervisor", "Isatis.neo", "Simulations", "Incertitudes", "Classification", "Data Science", "Python", "Projet final"],
  cta: {
    title: "Construire votre académie Géostatistique & Data Science",
    text: "Sélectionnez un module, une spécialisation Supervisor ou Isatis.neo, ou le parcours complet From Samples to Spatial Intelligence.",
    buttons: ["Demander le parcours complet", "Choisir un module", "Former mon équipe"]
  }
};
