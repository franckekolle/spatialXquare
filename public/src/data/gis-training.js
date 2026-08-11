window.gisTrainingData = {
  hero: {
    eyebrow: "Académie technique",
    title: "GIS & Geospatial Academy",
    subtitle: "SIG, géomatique, cartographie, analyse spatiale, automatisation et solutions métier.",
    intro: "Cette académie forme des professionnels capables d’analyser et de cartographier des données spatiales, puis de concevoir leurs propres workflows, outils et solutions géomatiques adaptés à leur métier.",
    statement: "Collecter → Structurer → Cartographier → Analyser → Modéliser → Automatiser → Développer → Déployer.",
    image: "../../../icons_image/icon_formation/sig/sig1.png"
  },
  media: {
    gateways: "../../../icons_image/icon_formation/sig/sig2.png",
    path: "../../../icons_image/icon_formation/sig/sig3.png",
    modules: "../../../icons_image/icon_formation/sig/sig4.png",
    project: "../../../icons_image/icon_formation/sig/sig5.png",
    geoscience: "../../../icons_image/icon_formation/sig/sig6.png",
    automation: "../../../icons_image/icon_formation/sig/sig7.png",
    enterprise: "../../../icons_image/icon_formation/sig/sig8.png",
    innovation: "../../../icons_image/icon_formation/sig/sig9.png",
    cta: "../../../icons_image/icon_formation/sig/sig10.png"
  },
  nav: [
    ["Portes", "#specialites"],
    ["Modules", "#modules"],
    ["Projet", "#projet"],
    ["Solutions", "#solutions"],
    ["Profils", "#profils"],
    ["Contact", "#contact"]
  ],
  gateways: [
    ["GIS Fundamentals & Cartography", "0 → 1 → 2", "Comprendre, gérer et cartographier les données spatiales."],
    ["Spatial Analysis & Geomatics", "3 → 4", "Analyser le territoire, le relief et les phénomènes spatiaux."],
    ["GIS for Geosciences & Mining", "5 → 6", "Appliquer le SIG à la géologie, à l’exploration et aux ressources naturelles."],
    ["ArcGIS Pro & QGIS Professional", "7 → 10", "Maîtriser les environnements de travail, les geodatabases et les workflows professionnels."],
    ["GIS Automation & Solution Engineering", "11 → 14", "Automatiser, coder et construire des solutions géomatiques métier."]
  ],
  path: [
    ["0", "Fondamentaux SIG, géomatique & information géographique", "Fondamental"],
    ["1", "Cartographie numérique & sémiologie graphique", "Fondamental"],
    ["2", "Gestion et qualité des données géospatiales", "Fondamental → Intermédiaire"],
    ["3", "Analyse spatiale vectorielle", "Intermédiaire"],
    ["4", "Analyse raster, terrain & télédétection", "Intermédiaire"],
    ["5", "SIG pour les géosciences", "Intermédiaire"],
    ["6", "SIG pour l’exploration minière", "Intermédiaire → Avancé"],
    ["7", "ArcGIS Pro — Essential Geoscience Workflows", "Débutant → Intermédiaire"],
    ["8", "QGIS — Geoscience & Engineering Workflows", "Débutant → Intermédiaire"],
    ["9", "Cartographie thématique avancée & communication", "Intermédiaire → Avancé"],
    ["10", "Spatial Databases & Enterprise GIS", "Avancé"],
    ["11", "Automatisation SIG — ModelBuilder & QGIS Model Designer", "Avancé"],
    ["12", "Python spatial — ArcPy, PyQGIS & GeoData Science", "Avancé"],
    ["13", "Développement d’outils, plugins & applications SIG", "Avancé / Expert"],
    ["14", "GIS Solution Engineering — Projet professionnel final", "Projet professionnel"]
  ],
  modules: [
    {
      number: "0",
      title: "Fondamentaux SIG, géomatique & information géographique",
      level: "Fondamental",
      objective: "Comprendre ce qu’est réellement une information géographique avant d’utiliser un logiciel SIG.",
      content: ["SIG", "Coordonnées", "Projections", "Datum", "EPSG", "Échelle", "Géoréférencement", "Topologie", "Vecteur", "Raster", "MNT", "Métadonnées"],
      project: "Construire le référentiel spatial d’un territoire fictif africain à partir de données en systèmes de coordonnées différents."
    },
    {
      number: "1",
      title: "Cartographie numérique & sémiologie graphique",
      level: "Fondamental",
      objective: "Transformer une donnée géographique en carte lisible, exacte et adaptée au message.",
      content: ["Variables visuelles", "Couleurs", "Symboles", "Classes", "Choroplèthes", "Densités", "Heatmaps", "Isolignes", "Légende", "Échelle", "Sources"],
      project: "Produire trois cartes adaptées à un expert, un manager et un public non technique."
    },
    {
      number: "2",
      title: "Gestion & qualité des données géospatiales",
      level: "Fondamental → Intermédiaire",
      objective: "Construire des données propres, cohérentes et contrôlées avant analyse.",
      content: ["GeoPackage", "Shapefile", "GeoJSON", "CSV spatial", "Geodatabases", "Jointures", "Relations", "Reprojection", "Clipping", "Topologie", "QA/QC"],
      project: "Passer de RAW DATA à VALIDATED DATASET avec contrôle CRS, géométrie, attributs et topologie."
    },
    {
      number: "3",
      title: "Analyse spatiale vectorielle",
      level: "Intermédiaire",
      objective: "Répondre à des questions métier par la position, la distance, la proximité et les relations entre objets.",
      content: ["Buffer", "Intersection", "Union", "Clip", "Dissolve", "Spatial join", "Nearest neighbour", "Distance", "Overlay", "Spatial query", "Réseaux", "Multicritère"],
      project: "Choisir les opérations spatiales adaptées à une question territoriale ou géoscientifique."
    },
    {
      number: "4",
      title: "Analyse raster, terrain & télédétection",
      level: "Intermédiaire",
      objective: "Analyser les phénomènes continus, le relief et les données satellitaires.",
      content: ["DEM", "Slope", "Aspect", "Hillshade", "Contours", "Flow direction", "Watershed", "Raster calculator", "Zonal statistics", "Indices", "Classification"],
      project: "Construire un modèle raster combinant relief, hydrologie et indices satellitaires."
    },
    {
      number: "5",
      title: "SIG pour les géosciences",
      level: "Intermédiaire",
      objective: "Intégrer géologie, sondages, géophysique, géochimie, topographie et télédétection dans un environnement spatial cohérent.",
      content: ["Lithologies", "Contacts", "Failles", "Structures", "Collars", "Drillholes", "Géochimie", "Géophysique", "MNT", "Profils", "Sections"],
      project: "Construire une base SIG géoscientifique complète d’une zone d’exploration."
    },
    {
      number: "6",
      title: "SIG pour l’exploration minière",
      level: "Intermédiaire → Avancé",
      objective: "Intégrer plusieurs sources d’information pour hiérarchiser des cibles d’exploration.",
      content: ["Targeting", "Anomalies", "Structures", "Favorabilité lithologique", "Distance maps", "Weighted overlay", "Prospectivity model", "Random forest", "Predictive mapping"],
      project: "Produire une carte de prospectivité à partir de géologie, géochimie, géophysique et télédétection."
    },
    {
      number: "7",
      title: "ArcGIS Pro — Essential Geoscience Workflows",
      level: "Débutant → Intermédiaire",
      objective: "Utiliser ArcGIS Pro pour construire un projet géoscientifique professionnel.",
      content: ["Maps", "Scenes", "Geodatabases", "Symbology", "Labeling", "Layouts", "Geoprocessing", "ModelBuilder", "Raster analysis", "3D Analyst", "Spatial Analyst"],
      project: "Construire une Geoscience Project Geodatabase complète."
    },
    {
      number: "8",
      title: "QGIS — Geoscience & Engineering Workflows",
      level: "Débutant → Intermédiaire",
      objective: "Construire des workflows professionnels reproductibles avec un écosystème SIG open source.",
      content: ["QGIS", "GeoPackage", "Styles", "Expressions", "Joins", "Relations", "Processing", "GDAL", "GRASS", "SAGA", "Layouts", "Atlas", "3D", "Model Designer"],
      project: "Créer un workflow QGIS géoscientifique réutilisable et documenté."
    },
    {
      number: "9",
      title: "Cartographie thématique avancée & communication",
      level: "Intermédiaire → Avancé",
      objective: "Concevoir des cartes qui aident immédiatement un décideur à comprendre un phénomène spatial.",
      content: ["Cartographie scientifique", "Statistique", "Storytelling", "Atlas", "Templates", "Dashboards", "Cartes web", "Multivarié", "3D", "Temporel"],
      project: "Créer un pack cartographique expert, manager et communication."
    },
    {
      number: "10",
      title: "Spatial Databases & Enterprise GIS",
      level: "Avancé",
      objective: "Passer du fichier SIG local à un système d’information géographique partagé.",
      content: ["SQL", "PostgreSQL", "PostGIS", "Schemas", "Permissions", "Spatial indexes", "Requêtes spatiales", "Versionnement", "Backups", "Gouvernance"],
      project: "Centraliser des données terrain dans une architecture GIS desktop, web, scripts et dashboards."
    },
    {
      number: "11",
      title: "Automatisation SIG — ModelBuilder & QGIS Model Designer",
      level: "Avancé",
      objective: "Transformer une succession de manipulations manuelles en workflow reproductible.",
      content: ["Paramètres", "Variables", "Conditions", "Boucles", "Batch", "Models", "Validation", "Reprojection", "Analysis", "Classification", "Output map"],
      project: "Automatiser une chaîne complète depuis INPUT jusqu’à OUTPUT MAP."
    },
    {
      number: "12",
      title: "Python spatial — ArcPy, PyQGIS & GeoData Science",
      level: "Avancé",
      objective: "Passer de l’automatisation visuelle à la programmation des workflows spatiaux.",
      content: ["Python", "NumPy", "Pandas", "GeoPandas", "Raster processing", "Matplotlib", "Notebooks", "ArcPy", "PyQGIS", "Processing", "Geometry"],
      project: "Coder un pipeline spatial reproductible pour nettoyer, analyser, cartographier et exporter."
    },
    {
      number: "13",
      title: "Développement d’outils, plugins & applications SIG",
      level: "Avancé / Expert",
      objective: "Former à construire le SIG dont l’entreprise a besoin.",
      content: ["PyQGIS", "PyQt", "Widgets", "Processing algorithms", "QgsTask", "Packaging", "Script tools", "Python toolbox", "Web GIS", "Dashboards"],
      project: "Construire un outil métier ou un prototype d’application SIG."
    },
    {
      number: "14",
      title: "GIS Solution Engineering — Projet professionnel final",
      level: "Projet professionnel",
      objective: "À partir d’un problème réel, concevoir une solution géomatique complète et utilisable.",
      content: ["Diagnostic", "Data model", "Database", "Workflow", "Automation", "Interface", "Prototype", "Tests utilisateurs", "Déploiement", "Formation équipes"],
      project: "Déployer une solution SIG métier avec workflow, données, interface et support de décision."
    }
  ],
  project: {
    title: "Projet GeoCam Spatial Intelligence — Démonstrateur pédagogique fictif",
    text: "Une organisation fictive d’Afrique centrale dispose de données éparpillées : cartes géologiques, permis, sondages, géochimie, géophysique, routes, villages, hydrographie, MNT, satellites et zones protégées.",
    steps: ["Raw spatial data", "QA/QC", "Database", "Maps", "Spatial analysis", "Geoscience integration", "Predictive model", "Automation", "Application", "Decision support system"]
  },
  profiles: [
    ["GIS Technician", "0 → 1 → 2 → 3 → 7/8 → 9"],
    ["Geoscience GIS Analyst", "0 → 2 → 3 → 4 → 5 → 6 → 7/8"],
    ["GIS Data Analyst", "0 → 2 → 3 → 4 → 10 → 12"],
    ["GIS Automation Specialist", "0 → 3 → 8 → 10 → 11 → 12"],
    ["GIS Developer", "0 → 8 → 10 → 11 → 12 → 13 → 14"],
    ["GIS Manager", "0 → gouvernance → architecture → QA/QC → dashboards → stratégie SIG"]
  ],
  innovationLab: [
    ["Learn", "Formation structurée, progressive et adaptée au niveau des équipes."],
    ["Build", "Construction guidée d’un workflow ou prototype pendant la formation."],
    ["Deploy", "Industrialisation et déploiement de la solution dans l’organisation."]
  ],
  validation: ["Cours", "Démonstration", "Exercices", "Projet fil rouge", "Prototype", "Déploiement", "Attestation SpatialXquare"],
  formats: ["Module séparé", "Complete GIS & Geospatial Professional Path", "Corporate GIS Academy", "Présentiel", "Live", "Hybride", "Données client sous conditions"],
  completeOffer: ["15 modules", "QGIS", "ArcGIS Pro", "PostGIS", "ModelBuilder", "QGIS Model Designer", "Python", "Plugins", "Web GIS", "Projet final"],
  cta: {
    title: "Construire votre GIS & Geospatial Academy",
    text: "Choisissez un module, un profil métier ou le parcours complet. Votre problématique peut devenir le projet de formation et produire un workflow réellement utilisable.",
    buttons: ["Demander le parcours complet", "Choisir un profil", "Construire une solution SIG"]
  }
};
