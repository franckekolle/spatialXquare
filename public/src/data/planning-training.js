window.planningTrainingData = {
  hero: {
    eyebrow: "Académie technique",
    title: "Planification & Optimisation Minière",
    subtitle: "De la valeur du gisement à l’exécution du plan.",
    intro: "Cette académie transforme un modèle de ressources en plan minier économiquement performant, techniquement réalisable et opérationnellement exécutable. La logique centrale suit les horizons stratégique, tactique, court terme, réconciliation et replanification.",
    statement: "Modèle → Valeur → Optimisation → Design → Schedule → Production → Réconciliation → Replanification.",
    image: "../../../icons_image/icon_formation/planing/planing1.png"
  },
  media: {
    gateways: "../../../icons_image/icon_formation/planing/planing2.png",
    path: "../../../icons_image/icon_formation/planing/planing3.png",
    modules: "../../../icons_image/icon_formation/planing/planing4.png",
    project: "../../../icons_image/icon_formation/planing/planing5.png",
    whittle: "../../../icons_image/icon_formation/planing/planing6.png",
    minesched: "../../../icons_image/icon_formation/planing/planing7.png",
    reconciliation: "../../../icons_image/icon_formation/planing/planing8.png",
    risk: "../../../icons_image/icon_formation/planing/planing9.png",
    cta: "../../../icons_image/icon_formation/planing/planing10.png"
  },
  nav: [
    ["Parcours", "#specialites"],
    ["Modules", "#modules"],
    ["Projet", "#projet"],
    ["Logiciels", "#logiciels"],
    ["Risques", "#risques"],
    ["Contact", "#contact"]
  ],
  gateways: [
    ["Strategic Mine Planning & Optimization", "0 → 1 → 2 → 3 → 4", "Déterminer quelle partie du gisement exploiter, quand l’exploiter et à quelle capacité pour maximiser sa valeur."],
    ["Tactical & Short-Term Mine Planning", "0 → 5 → 6 → 7 → 8", "Transformer une stratégie minière en calendrier de production exécutable et suivre sa réalisation."],
    ["Complete Mine Planning Professional Path", "0 → 9", "Du modèle de ressources au plan stratégique, puis du plan stratégique à l’exécution et à la réconciliation."]
  ],
  path: [
    ["0", "Mine Planning Fundamentals", "Fondamental"],
    ["1", "Mining Economics & Block Value", "Fondamental → Intermédiaire"],
    ["2", "GEOVIA Whittle — Pit Optimization", "Intermédiaire"],
    ["3", "GEOVIA Whittle — Strategic Mine Planning", "Avancé"],
    ["4", "Strategic Optimization — Scenarios & Hill of Value", "Avancé / Expert"],
    ["5", "Mine Design — Pit, Phases & Pushbacks", "Intermédiaire → Avancé"],
    ["6", "GEOVIA MineSched — Tactical Scheduling", "Intermédiaire → Avancé"],
    ["7", "GEOVIA MineSched — Short-Term Planning", "Avancé"],
    ["8", "Reconciliation & Replanning", "Avancé"],
    ["9", "Simulation, Risk & Advanced Optimization", "Expert"]
  ],
  modules: [
    {
      number: "0",
      title: "Fondamentaux de la planification minière",
      level: "Fondamental",
      objective: "Comprendre comment ressources, contraintes techniques, paramètres économiques et capacités opérationnelles deviennent un plan de mine.",
      content: ["Ressources vs réserves", "Block model", "Minerai / stérile", "Cut-off", "Dilution", "Ore loss", "Recovery", "Strip ratio", "CAPEX", "OPEX", "NPV", "Horizon stratégique / tactique / opérationnel"],
      project: "Analyser un block model simplifié et identifier les variables qui contrôlent la valeur."
    },
    {
      number: "1",
      title: "Économie minière & valorisation du block model",
      level: "Fondamental → Intermédiaire",
      objective: "Transformer les attributs géologiques d’un block model en variables économiques utilisables pour l’optimisation.",
      content: ["Tonnage", "Teneur", "Densité", "Recovery", "Mining cost", "Processing cost", "Selling cost", "Royalties", "Block value", "Break-even cut-off", "Sensibilités"],
      project: "Attribuer une valeur économique aux blocs et expliquer les différences entre blocs de même teneur."
    },
    {
      number: "2",
      title: "GEOVIA Whittle — Pit Optimization Fundamentals",
      level: "Intermédiaire",
      objective: "Déterminer les limites économiques potentielles d’une exploitation à ciel ouvert.",
      content: ["Block model", "Variables", "Unités", "Prix", "Coûts", "Recovery", "Discount rate", "Slope angles", "Pit shells", "Nested pits", "Revenue factors"],
      project: "Créer des fosses imbriquées et analyser leur valeur."
    },
    {
      number: "3",
      title: "GEOVIA Whittle — Strategic Mine Planning & Optimization",
      level: "Avancé",
      objective: "Déterminer la stratégie d’exploitation qui maximise la valeur du projet sous contraintes de capacité et de temps.",
      content: ["Sélection de fosse", "Pushbacks", "Production scale", "Mine life", "Cut-off optimisation", "Stockpiles", "Blending", "Strategic scheduling", "Cash-flow", "NPV"],
      project: "Construire un premier calendrier Life-of-Mine et comparer les options stratégiques."
    },
    {
      number: "4",
      title: "Analyse de scénarios & optimisation stratégique avancée",
      level: "Avancé / Expert",
      objective: "Comparer de nombreux scénarios pour identifier une stratégie robuste.",
      content: ["Commodity price", "Mining rate", "Plant capacity", "Costs", "Recovery", "Cut-off", "Slope angles", "Discount rate", "Hill of Value", "SIMO", "Sensitivity analysis"],
      project: "Produire une matrice de scénarios et une recommandation stratégique argumentée."
    },
    {
      number: "5",
      title: "Design minier & préparation à la planification",
      level: "Intermédiaire → Avancé",
      objective: "Transformer une enveloppe optimisée en géométrie exploitable.",
      content: ["Optimized pit shell", "Benches", "Berms", "Slopes", "Ramps", "Haul roads", "Minimum mining width", "Pushbacks", "Waste dumps", "Minable reserves"],
      project: "Construire des phases minières à partir d’une fosse optimisée."
    },
    {
      number: "6",
      title: "GEOVIA MineSched — Tactical Mine Planning",
      level: "Intermédiaire → Avancé",
      objective: "Transformer phases et réserves minières en calendrier de production réaliste.",
      content: ["Materials", "Ore", "Waste", "Low grade", "Stockpile", "Destinations", "Capacités", "Periods", "Production targets", "Grade targets", "Bench sequencing"],
      project: "Créer un schedule tactique à partir de phases, destinations et contraintes de capacité."
    },
    {
      number: "7",
      title: "GEOVIA MineSched — Short-Term & Operational Planning",
      level: "Avancé",
      objective: "Réduire l’écart entre le plan tactique et l’exécution réelle du terrain.",
      content: ["Annual", "Quarterly", "Monthly", "Weekly", "Daily", "Active benches", "Mining direction", "Equipment access", "Ore / waste balance", "Plant feed", "Haulage"],
      project: "Construire un plan mensuel puis hebdomadaire cohérent avec un plan annuel."
    },
    {
      number: "8",
      title: "Mine Planning Optimization — Réconciliation & Replanification",
      level: "Avancé",
      objective: "Comparer planifié et réalisé, identifier les écarts et réinjecter l’information dans la planification.",
      content: ["Plan vs actual", "Tonnes", "Teneur", "Ore loss", "Dilution", "Recovery", "Destinations", "Grade control", "Plant feed", "Reconciliation", "Replanning"],
      project: "Analyser les écarts et produire une séquence révisée."
    },
    {
      number: "9",
      title: "Simulation, risques & incertitudes",
      level: "Expert",
      objective: "Tester la robustesse d’un plan lorsque les hypothèses ne se réalisent pas exactement.",
      content: ["What-if", "Sensitivity analysis", "Monte Carlo", "Discrete event simulation", "Scenario analysis", "Prix", "Teneur", "Équipements", "Pluie", "Pannes", "Productivité"],
      project: "Comparer base plan et scénarios d’incertitude pour recommander un plan robuste."
    }
  ],
  project: {
    title: "Projet Mbalam Hills — Open Pit Copper-Gold",
    text: "Démonstrateur pédagogique fictif construit autour d’un resource block model, d’une topographie, de secteurs géotechniques, de coûts, de récupérations, de capacités mine/usine et de contraintes d’infrastructure.",
    steps: ["Resource model", "Economic model", "Pit optimization", "Pit shells", "Phases", "Strategic schedule", "Tactical schedule", "Short-term plan", "Actual production", "Reconciliation", "Replanning"]
  },
  softwareLogic: [
    ["GEOVIA Whittle", "Décision stratégique : quelle fosse, quelle valeur, quelle capacité, quelle séquence, quel cut-off et quel scénario."],
    ["GEOVIA MineSched", "Décision tactique et opérationnelle : combien produire, depuis quelle zone, à quelle période, vers quelle destination et avec quelles contraintes."],
    ["SpatialXquare Mine Planning", "La logique de décision vient avant l’outil : modèle, valeur, optimisation, design, schedule, production, réconciliation et replanification."]
  ],
  questions: ["Quoi exploiter ?", "Où commencer ?", "Quand exploiter ?", "À quel rythme ?", "Vers quelle destination ?", "Le plan a-t-il été réalisé ?", "Pourquoi les résultats diffèrent-ils ?", "Que faut-il modifier ?"],
  validation: ["Cours", "Démonstration", "Scénarios", "Projet fil rouge", "Analyse économique", "Schedule", "Réconciliation", "Attestation SpatialXquare"],
  formats: ["Module séparé", "Parcours stratégique", "Parcours tactique", "Complete Professional Path", "Présentiel", "Live", "Entreprise sur données client"],
  completeOffer: ["10 modules", "Whittle", "MineSched", "Block value", "Pit optimization", "Strategic schedule", "Mine design", "Short-term planning", "Reconciliation", "Risk analysis"],
  cta: {
    title: "Construire votre académie Planification & Optimisation Minière",
    text: "Choisissez un parcours stratégique, tactique ou complet. Nous adaptons le programme au niveau des participants, aux logiciels disponibles et aux décisions minières à produire.",
    buttons: ["Demander le parcours complet", "Choisir une spécialisation", "Former mon équipe"]
  }
};
