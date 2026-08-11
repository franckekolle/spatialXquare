window.geodataBootcampsData = {
  hero: {
    eyebrow: "Bootcamps métier",
    title: "Bootcamps Données Géoscientifiques, Data Science & IA",
    subtitle: "Pour les gestionnaires de données, géologues, analystes SIG et équipes d’exploration.",
    intro: "Ces bootcamps transforment des données géologiques dispersées en bases propres, workflows reproductibles, cartes prédictives, modèles d’aide à la décision et livrables exploitables.",
    statement: "Collecter → contrôler → structurer → analyser → prédire → cartographier → automatiser → décider.",
    image: "../../../icons_image/data_science/data_science_1.png"
  },
  media: {
    data: "../../../icons_image/data_science/data_science_2.png",
    ai: "../../../icons_image/data_science/data_science_3.png",
    mapping: "../../../icons_image/icon_formation/sig/sig6.png",
    geostat: "../../../icons_image/icon_formation/geostat/geostat8.png",
    automation: "../../../icons_image/data_science/data_science_6.png",
    decision: "../../../icons_image/data_science/data_science_7.png"
  },
  nav: [
    ["Bootcamps", "#bootcamps"],
    ["Parcours", "#parcours"],
    ["Projet", "#projet"],
    ["Liens", "#liens"],
    ["Contact", "#contact"]
  ],
  bootcamps: [
    {
      title: "Bootcamp traitement des données géologiques",
      duration: "5 jours",
      text: "Nettoyer, contrôler, structurer et documenter les données de forage, lithologie, assays, densité, structures, géochimie et géophysique.",
      tags: ["QA/QC", "Collar", "Survey", "Lithology", "Assays", "Density", "Standards", "Data dictionary", "Validation"]
    },
    {
      title: "Bootcamp Data Science & IA pour géosciences",
      duration: "7 à 10 jours",
      text: "Utiliser Python, pandas, statistiques, Machine Learning et visualisation pour comprendre les données géoscientifiques et produire des modèles utiles.",
      tags: ["Python", "Pandas", "EDA", "ML", "Classification", "Regression", "Validation", "Dashboards"]
    },
    {
      title: "Bootcamp filtrage & cartographie prédictive par Machine Learning",
      duration: "5 à 8 jours",
      text: "Construire des cartes de prospectivité à partir de géologie, structures, géochimie, géophysique, télédétection et variables spatiales.",
      tags: ["Prospectivity mapping", "Random forest", "SOM", "Fuzzy logic", "Spatial features", "Targets", "QGIS"]
    },
    {
      title: "Bootcamp SIG, bases spatiales & géodonnées",
      duration: "5 jours",
      text: "Mettre en place des bases SIG propres, des modèles de données, des jointures, des contrôles topologiques et des produits cartographiques fiables.",
      tags: ["QGIS", "ArcGIS Pro", "GeoPackage", "PostGIS", "CRS", "Topology", "Spatial joins", "Maps"]
    },
    {
      title: "Bootcamp géostatistique appliquée aux données de ressources",
      duration: "5 à 10 jours",
      text: "Relier statistiques, domaining, compositing, variographie, kriging, validation et incertitude pour préparer les données à l’estimation.",
      tags: ["Compositing", "Domaining", "Variography", "Kriging", "Validation", "Uncertainty", "Supervisor", "Isatis.neo"]
    },
    {
      title: "Bootcamp Python & automatisation des workflows géoscientifiques",
      duration: "5 jours",
      text: "Automatiser import, QA/QC, traitements spatiaux, graphiques, exports, rapports et tableaux de bord techniques.",
      tags: ["Python", "GeoPandas", "Notebooks", "Pipelines", "Batch", "Reports", "Automation", "Reproducibility"]
    }
  ],
  path: [
    ["1", "Geological Data Manager", "Données géologiques, QA/QC, standards, dictionnaires, bases et traçabilité."],
    ["2", "Geoscience Data Analyst", "Statistiques, visualisation, préparation, analyse exploratoire et interprétation."],
    ["3", "Predictive Mapping Analyst", "SIG, Machine Learning spatial, cartes de prospectivité et ciblage."],
    ["4", "Geoscience AI & Automation Specialist", "Python, automatisation, pipelines, reporting et solutions reproductibles."]
  ],
  project: {
    title: "Projet Nkié Geodata Lab — Démonstrateur pédagogique fictif",
    text: "Un dataset géoscientifique africain incomplet est transformé progressivement en base validée, analyses exploratoires, variables spatiales, modèle prédictif, carte de prospectivité et rapport technique.",
    steps: ["Raw data", "QA/QC", "Data model", "EDA", "Spatial layers", "Feature engineering", "Machine Learning", "Predictive map", "Validation", "Decision report"]
  },
  links: [
    ["GIS & Geospatial Academy", "/expertises/formations-operationnelles/gis-geospatial-academy/"],
    ["Géostatistique & Data Science", "/expertises/formations-operationnelles/geostatistique-data-science/"],
    ["Data Science & solutions logicielles", "/expertises/data-science-solutions-logicielles/"],
    ["Modélisation géologique 3D", "/expertises/modelisation-geologique-3d/"]
  ],
  cta: {
    title: "Construire un bootcamp pour vos gestionnaires de données",
    text: "Le programme peut partir de vos propres données, de vos difficultés QA/QC, de vos besoins de cartographie prédictive ou de vos workflows répétitifs à automatiser.",
    buttons: ["Demander un bootcamp", "Former mon équipe", "Adapter à mes données"]
  }
};
