window.cadTrainingData = {
  hero: {
    eyebrow: "Académie technique",
    title: "Engineering & CAD Academy",
    subtitle: "CAO, conception mécanique, dessin technique, modélisation 3D et ingénierie numérique.",
    intro: "Cette académie transforme une idée, un besoin technique ou un croquis en conception numérique précise, vérifiable et exploitable. Elle relie AutoCAD pour le dessin technique et SOLIDWORKS pour la conception mécanique paramétrique.",
    statement: "Imaginer → Dessiner → Modéliser → Assembler → Vérifier → Documenter → Automatiser.",
    image: "../../../icons_image/icon_formation/cad/cad1.png"
  },
  media: {
    gateways: "../../../icons_image/icon_formation/cad/cad2.png",
    path: "../../../icons_image/icon_formation/cad/cad3.png",
    modules: "../../../icons_image/icon_formation/cad/cad4.png",
    project: "../../../icons_image/icon_formation/cad/cad5.png",
    autocad: "../../../icons_image/icon_formation/cad/cad6.png",
    solidworks: "../../../icons_image/icon_formation/cad/cad7.png",
    automation: "../../../icons_image/icon_formation/cad/cad8.png",
    lab: "../../../icons_image/icon_formation/cad/cad9.png",
    cta: "../../../icons_image/icon_formation/cad/cad10.png"
  },
  nav: [
    ["Parcours", "#specialites"],
    ["Modules", "#modules"],
    ["Projet", "#projet"],
    ["Logiciels", "#logiciels"],
    ["Métiers", "#metiers"],
    ["Contact", "#contact"]
  ],
  gateways: [
    ["AutoCAD — Professional Design & Drafting", "0 → 1 → 2 → 3 → 4", "Du dessin technique aux plans professionnels 2D/3D."],
    ["SOLIDWORKS — Mechanical Design Professional", "0 → 5 → 6 → 7 → 8 → 9 → 10", "De l’esquisse au produit mécanique conçu, assemblé, vérifié et documenté."],
    ["Complete Engineering & CAD Path", "0 → 13", "Du besoin d’ingénierie à une solution de conception numérique complète."]
  ],
  path: [
    ["0", "Fondamentaux du dessin technique & de la CAO", "Fondamental"],
    ["1", "AutoCAD — Fundamentals & Technical Drafting", "Débutant"],
    ["2", "AutoCAD — Advanced 2D Design", "Intermédiaire"],
    ["3", "AutoCAD — 3D Modeling & Engineering Design", "Intermédiaire → Avancé"],
    ["4", "AutoCAD — Standards, Layouts & Professional Documentation", "Intermédiaire"],
    ["5", "SOLIDWORKS — Design Essentials", "Débutant"],
    ["6", "SOLIDWORKS — Part Design", "Intermédiaire"],
    ["7", "SOLIDWORKS — Assemblies & Mechanisms", "Intermédiaire"],
    ["8", "SOLIDWORKS — Drawings & Manufacturing Documentation", "Intermédiaire"],
    ["9", "SOLIDWORKS — Advanced Parametric Design", "Avancé"],
    ["10", "SOLIDWORKS — Simulation & Engineering Validation", "Avancé"],
    ["11", "CAD Automation & Design Productivity", "Avancé"],
    ["12", "Engineering Design Project", "Projet appliqué"],
    ["13", "CAD Solution Engineering — Projet final", "Projet professionnel"]
  ],
  modules: [
    {
      number: "0",
      title: "Fondamentaux du dessin technique & de la CAO",
      level: "Fondamental",
      objective: "Comprendre les principes de représentation technique avant d’utiliser AutoCAD ou SOLIDWORKS.",
      content: ["Dessin industriel", "Vues", "Projections", "Coupes", "Sections", "Échelles", "Unités", "Cotation", "Tolérances", "Symboles", "Contraintes", "Lecture de plans"],
      project: "Reproduire puis interpréter un ensemble de plans techniques simples."
    },
    {
      number: "1",
      title: "AutoCAD — Fundamentals & Technical Drafting",
      level: "Débutant",
      objective: "Maîtriser les fonctions essentielles d’AutoCAD pour créer des dessins propres et précis.",
      content: ["Interface", "Coordonnées", "Unités", "Lignes", "Polylignes", "Arcs", "Snaps", "Ortho", "Trim", "Extend", "Offset", "Layers", "Properties"],
      project: "Construire un plan technique complet à partir d’un croquis coté."
    },
    {
      number: "2",
      title: "AutoCAD — Advanced 2D Design",
      level: "Intermédiaire",
      objective: "Gagner en vitesse, précision et standardisation dans les dessins professionnels.",
      content: ["Blocs", "Blocs dynamiques", "Attributs", "Xrefs", "Hachures", "Tables", "Annotations", "Styles", "Dimensions avancées", "Templates", "Layer states", "Standards"],
      project: "Transformer un dessin de base en plan standardisé prêt pour revue."
    },
    {
      number: "3",
      title: "AutoCAD — 3D Modeling & Engineering Design",
      level: "Intermédiaire → Avancé",
      objective: "Passer du plan 2D à la représentation 3D d’un ouvrage ou d’un composant.",
      content: ["UCS", "Solides", "Surfaces", "Extrude", "Revolve", "Sweep", "Loft", "Boolean operations", "Sections", "Visual styles", "Materials", "Vues 3D"],
      project: "Modéliser un élément technique simple à partir de plans 2D."
    },
    {
      number: "4",
      title: "AutoCAD — Professional Documentation",
      level: "Intermédiaire",
      objective: "Produire des plans destinés à être communiqués, imprimés et utilisés sur un projet.",
      content: ["Model space", "Paper space", "Viewports", "Layouts", "Cartouches", "Échelles", "Plot styles", "PDF", "DWG", "Révisions", "Contrôle qualité"],
      project: "Préparer un dossier de plans avec cartouche, échelles, annotations et exports."
    },
    {
      number: "5",
      title: "SOLIDWORKS — Design Essentials",
      level: "Débutant",
      objective: "Comprendre la conception paramétrique et construire ses premières pièces mécaniques.",
      content: ["Interface", "Sketches", "Dimensions", "Relations", "Fully defined sketches", "Extrusions", "Cuts", "Revolves", "Fillets", "Patterns", "Design intent"],
      project: "Concevoir plusieurs pièces qui alimentent le projet fil rouge."
    },
    {
      number: "6",
      title: "SOLIDWORKS — Part Design",
      level: "Intermédiaire",
      objective: "Concevoir des pièces complexes avec un historique de conception robuste.",
      content: ["Advanced sketches", "Multibody parts", "Sweeps", "Lofts", "Shells", "Ribs", "Patterns", "Equations", "Configurations", "Design tables", "Feature management"],
      project: "Créer un modèle qui reste stable lorsque les dimensions changent."
    },
    {
      number: "7",
      title: "SOLIDWORKS — Assemblies & Mechanisms",
      level: "Intermédiaire",
      objective: "Construire et analyser des ensembles mécaniques composés de plusieurs pièces.",
      content: ["Assemblies", "Mates", "Subassemblies", "Interference detection", "Collision", "Exploded views", "Configurations", "Motion", "Mechanisms", "BOM"],
      project: "Assembler les composants du projet et valider les mouvements principaux."
    },
    {
      number: "8",
      title: "SOLIDWORKS — Drawings & Manufacturing Documentation",
      level: "Intermédiaire",
      objective: "Transformer un modèle 3D en documentation technique exploitable pour fabrication.",
      content: ["Drawing views", "Section views", "Detail views", "Dimensions", "Tolerances", "Annotations", "BOM", "Balloons", "Title blocks", "PDF / DXF"],
      project: "Créer le dossier de fabrication complet du modèle 3D."
    },
    {
      number: "9",
      title: "SOLIDWORKS — Advanced Parametric Design",
      level: "Avancé",
      objective: "Concevoir des familles de produits et des modèles adaptables à plusieurs configurations.",
      content: ["Equations", "Global variables", "Configurations", "Design tables", "Derived configurations", "Advanced references", "Top-down design", "Master models", "Parametric families"],
      project: "Produire plusieurs configurations à partir d’un même modèle paramétrique."
    },
    {
      number: "10",
      title: "SOLIDWORKS — Simulation & Engineering Validation",
      level: "Avancé",
      objective: "Vérifier qu’une conception est mécaniquement cohérente avant fabrication.",
      content: ["FEA", "Matériaux", "Loads", "Fixtures", "Mesh", "Displacement", "Stress", "Factor of safety", "Convergence", "Interprétation"],
      project: "Analyser une pièce critique et corriger la conception selon les résultats."
    },
    {
      number: "11",
      title: "CAD Automation & Design Productivity",
      level: "Avancé",
      objective: "Réduire les tâches répétitives et standardiser les productions techniques.",
      content: ["Scripts", "Templates", "Dynamic blocks", "Data extraction", "AutoLISP selon besoin", "Configurations", "Design tables", "Macros", "API", "BOM", "Exports"],
      project: "Automatiser la génération d’un dessin, d’une nomenclature ou d’une configuration."
    },
    {
      number: "12",
      title: "Engineering Design Project",
      level: "Projet appliqué",
      objective: "Réaliser un équipement complet de bout en bout.",
      content: ["Cahier des charges", "Châssis", "Supports", "Réservoir", "Piping simplifié", "Pompe", "Supports panneaux", "Assemblage", "Plans", "BOM"],
      project: "Concevoir une station autonome de pompage solaire liée aux activités énergie et eau."
    },
    {
      number: "13",
      title: "CAD Solution Engineering — Projet final",
      level: "Projet professionnel",
      objective: "Transformer une problématique d’entreprise en système de conception numérique reproductible.",
      content: ["Diagnostic", "Standards CAD", "Templates", "Parametric models", "Bibliothèques", "Nomenclatures", "Automation", "Documentation", "Workflow"],
      project: "Livrer standards, templates, bibliothèque de composants et workflow documenté."
    }
  ],
  project: {
    title: "Station autonome de pompage solaire — Démonstrateur pédagogique",
    text: "Le projet fil rouge relie dessin technique, AutoCAD 2D/3D, SOLIDWORKS pièces, assemblages, simulation, corrections, mises en plan, nomenclatures et dossier technique.",
    steps: ["Besoin technique", "Croquis", "Cahier des charges", "AutoCAD 2D", "Premiers plans", "SOLIDWORKS parts", "Assembly", "Simulation", "Corrections", "Drawings", "BOM", "Dossier technique"]
  },
  softwareLogic: [
    ["AutoCAD", "Dessin technique, plans, conception 2D/3D, documentation, standards, cartouches et exports DWG/PDF."],
    ["SOLIDWORKS", "Conception mécanique paramétrique, pièces, assemblages, mises en plan, configurations et simulation."],
    ["Engineering Design Lab", "Learn · Design · Validate · Automate : apprendre, construire, vérifier et industrialiser le workflow CAD."]
  ],
  profiles: [
    ["Dessinateur / projeteur", "0 → 1 → 2 → 4"],
    ["Technicien mécanique", "0 → 5 → 6 → 7 → 8"],
    ["Ingénieur conception", "0 → 5 → 6 → 7 → 9 → 10"],
    ["CAD Automation Specialist", "0 → 2 → 5 → 9 → 11 → 13"],
    ["Bureau d’études", "Standards → templates → nomenclatures → bibliothèques → automatisation → documentation"]
  ],
  validation: ["Cours", "Démonstration", "Exercices", "Projet fil rouge", "Dossier technique", "Préparation certification", "Attestation SpatialXquare"],
  formats: ["Module séparé", "AutoCAD path", "SOLIDWORKS path", "Complete Engineering & CAD Path", "Présentiel", "Live", "Entreprise sur cas client"],
  completeOffer: ["14 modules", "AutoCAD", "SOLIDWORKS", "Dessin technique", "Modélisation 3D", "Assemblages", "Simulation", "Documentation", "Automation", "Projet final"],
  cta: {
    title: "Construire votre Engineering & CAD Academy",
    text: "Choisissez le parcours AutoCAD, SOLIDWORKS ou le chemin complet. SpatialXquare peut aussi adapter la formation aux standards, templates et cas réels de votre bureau d’études.",
    buttons: ["Demander le parcours complet", "Choisir un module", "Former mon équipe"]
  }
};
