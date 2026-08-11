const planningData = window.planningTrainingData;

function PlanningTags(items) {
  return `<div class="surpac-tags planning-tags">${items.map((item) => `<span>${item}</span>`).join("")}</div>`;
}

function PlanningImage(src, label = "") {
  return `
    <figure class="surpac-image planning-image">
      <img src="${src}" alt="" loading="lazy">
      ${label ? `<figcaption>${label}</figcaption>` : ""}
    </figure>
  `;
}

function Hero() {
  const { hero } = planningData;
  return `
    <section class="expertise-hero planning-hero">
      <img src="${hero.image}" alt="">
      <div class="expertise-hero__overlay"></div>
      <div class="container expertise-hero__content surpac-hero__content">
        <p class="section-kicker">${hero.eyebrow}</p>
        <h1>${hero.title}</h1>
        <p class="geo-hero__subtitle">${hero.subtitle}</p>
        <p class="geo-hero__intro">${hero.intro}</p>
        <strong>${hero.statement}</strong>
        <div class="hero-actions">
          <a class="button button-primary" href="/demande-devis.html?service=formation">Complete Professional Path</a>
          <a class="button button-secondary" href="#specialites">Choisir un parcours</a>
        </div>
      </div>
    </section>
  `;
}

function InternalNav() {
  return `
    <nav class="expertise-internal-nav" aria-label="Navigation académie planification minière">
      <div class="container expertise-internal-nav__inner">
        ${planningData.nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      </div>
    </nav>
  `;
}

function GatewaysSection() {
  return `
    <section class="expertise-section" id="specialites">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Trois parcours commerciaux</p>
          <h2>Stratégique, tactique ou parcours professionnel complet</h2>
          <p>L’académie est organisée par horizon de décision, pas seulement par logiciel. Whittle intervient sur l’optimisation stratégique ; MineSched intervient sur la planification tactique et court terme.</p>
        </div>
        ${PlanningImage(planningData.media.gateways, "Strategic, tactical et complete mine planning")}
      </div>
      <div class="expertise-section__inner planning-gateway-grid">
        ${planningData.gateways.map(([title, path, text]) => `
          <article>
            <span>${path}</span>
            <h3>${title}</h3>
            <p>${text}</p>
            <a href="/demande-devis.html?service=formation">Choisir ce parcours</a>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function PathSection() {
  return `
    <section class="expertise-section expertise-muted" id="parcours">
      <div class="expertise-section__inner surpac-split image-left">
        ${PlanningImage(planningData.media.path, "Progression Mine Planning & Optimization")}
        <div>
          <p class="section-kicker">Chaîne de décision</p>
          <h2>Ressources → valeur → optimisation → design → schedule → production</h2>
          <p>Le parcours complet couvre le passage du modèle de ressources vers la stratégie Life-of-Mine, puis le schedule tactique, le court terme, la réconciliation et la replanification.</p>
        </div>
      </div>
      <div class="expertise-section__inner surpac-path planning-path">
        ${planningData.path.map(([number, title, level]) => `
          <article>
            <span>${number}</span>
            <h3>${title}</h3>
            <p>${level}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function ModuleCard(module) {
  return `
    <article class="surpac-module-card planning-module-card" id="module-${module.number}">
      <div class="surpac-module-card__top">
        <span>Module ${module.number}</span>
        <strong>${module.level}</strong>
      </div>
      <h3>${module.title}</h3>
      <p>${module.objective}</p>
      ${PlanningTags(module.content)}
      <div class="surpac-module-card__project">
        <strong>Projet pratique</strong>
        <p>${module.project}</p>
      </div>
      <div class="surpac-module-card__actions">
        <a href="/demande-devis.html?service=formation">Choisir ce module</a>
        <a href="#projet">Voir le projet Mbalam Hills</a>
      </div>
    </article>
  `;
}

function ModulesSection() {
  return `
    <section class="expertise-section" id="modules">
      <div class="expertise-section__inner surpac-section-head">
        <p class="section-kicker">Modules de l’académie</p>
        <h2>Dix modules pour passer du modèle de ressources au plan exécutable</h2>
        <p>La formation insiste sur la logique de décision avant l’outil : les paramètres économiques, les contraintes opérationnelles et les horizons de planification structurent le parcours.</p>
      </div>
      <div class="expertise-section__inner surpac-module-layout">
        ${PlanningImage(planningData.media.modules, "Modules planification et optimisation minière")}
        <div class="surpac-module-grid">
          ${planningData.modules.map(ModuleCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function ProjectSection() {
  const { project } = planningData;
  return `
    <section class="decision-band planning-project-band" id="projet">
      <div class="container surpac-project-layout">
        <div>
          <p class="section-kicker">Projet fil rouge</p>
          <h2>Du resource model à la replanification</h2>
          <p><strong>${project.title}</strong></p>
          <p>${project.text}</p>
        </div>
        <div class="surpac-project-flow planning-project-flow">
          ${project.steps.map((step) => `<span>${step}</span>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function SoftwareSection() {
  return `
    <section class="expertise-section expertise-muted" id="logiciels">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Whittle vs MineSched</p>
          <h2>Clarifier le rôle de chaque outil dans la chaîne de décision</h2>
          <p>Whittle aide à décider quoi exploiter et avec quelle stratégie. MineSched transforme cette stratégie en production planifiée, contrôlable et ajustable.</p>
        </div>
        ${PlanningImage(planningData.media.whittle, "Whittle pour optimisation stratégique")}
      </div>
      <div class="expertise-section__inner planning-software-grid">
        ${planningData.softwareLogic.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}
      </div>
    </section>
  `;
}

function ExecutionSection() {
  return `
    <section class="expertise-section">
      <div class="expertise-section__inner surpac-split image-left">
        ${PlanningImage(planningData.media.minesched, "MineSched pour scheduling tactique et court terme")}
        <div>
          <p class="section-kicker">Tactique & court terme</p>
          <h2>Transformer les phases en calendrier de production réaliste</h2>
          <p>L’utilisateur apprend à connecter design, pushbacks, destinations, capacités, contraintes de qualité et périodes de planification.</p>
          ${PlanningTags(["Annual", "Quarterly", "Monthly", "Weekly", "Daily", "Destinations", "Capacities", "Plant feed", "Ore / waste", "Haulage"])}
        </div>
      </div>
    </section>
  `;
}

function ReconciliationSection() {
  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Réconciliation</p>
          <h2>Un plan minier est un modèle décisionnel vivant</h2>
          <p>Le parcours ne s’arrête pas au schedule. Il apprend à comparer planifié/réalisé, identifier dilution, pertes, écarts de teneur et réviser la planification.</p>
          ${PlanningTags(["Plan vs actual", "Grade control", "Ore loss", "Dilution", "Plant feed", "Production", "Reconciliation", "Replanning"])}
        </div>
        ${PlanningImage(planningData.media.reconciliation, "Réconciliation et replanification")}
      </div>
    </section>
  `;
}

function RiskSection() {
  return `
    <section class="expertise-section" id="risques">
      <div class="expertise-section__inner surpac-split image-left">
        ${PlanningImage(planningData.media.risk, "Simulation, risques et incertitudes")}
        <div>
          <p class="section-kicker">Simulation & risque</p>
          <h2>Tester la robustesse du plan sous incertitude</h2>
          <p>Le module avancé compare les scénarios de prix, coûts, récupération, productivité, pluie, disponibilité équipements et capacité usine.</p>
          ${PlanningTags(planningData.questions)}
          ${PlanningTags(planningData.validation)}
          ${PlanningTags(planningData.formats)}
        </div>
      </div>
    </section>
  `;
}

function PremiumSection() {
  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner surpac-section-head">
        <p class="section-kicker">Complete Mine Planning Professional Path</p>
        <h2>Du modèle de ressources au plan stratégique, tactique et opérationnel</h2>
        <p>Le parcours complet prépare les équipes à répondre aux questions essentielles : quoi exploiter, où commencer, quand produire, à quel rythme, vers quelle destination, et comment réviser le plan.</p>
        ${PlanningTags(planningData.completeOffer)}
      </div>
    </section>
  `;
}

function CtaSection() {
  const { cta } = planningData;
  return `
    <section class="expertise-cta planning-cta" id="contact">
      <div class="container">
        <h2>${cta.title}</h2>
        <p>${cta.text}</p>
        <div>
          ${cta.buttons.map((button) => `<a class="button button-primary" href="/demande-devis.html?service=formation">${button}</a>`).join("")}
        </div>
      </div>
    </section>
  `;
}

document.querySelector("#planning-training-root").innerHTML = [
  Hero(),
  InternalNav(),
  GatewaysSection(),
  PathSection(),
  ModulesSection(),
  ProjectSection(),
  SoftwareSection(),
  ExecutionSection(),
  ReconciliationSection(),
  RiskSection(),
  PremiumSection(),
  CtaSection()
].join("");
