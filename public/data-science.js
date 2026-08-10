const dataScienceData = window.dataSciencePageData;

function DataCards(items) {
  return items.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("");
}

function TagList(items) {
  return `<div class="data-tag-list">${items.map((item) => `<span>${item}</span>`).join("")}</div>`;
}

function DataFlow(items, className = "") {
  return `
    <div class="geo-flow data-flow ${className}">
      ${items.map(([title, text], index) => `
        <article class="geo-flow__item">
          <span>${index + 1}</span>
          <h3>${title}</h3>
          <p>${text}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function DataHero() {
  const { hero } = dataScienceData;

  return `
    <section class="expertise-hero geo-hero data-hero">
      <img src="${hero.image}" alt="">
      <div class="expertise-hero__overlay"></div>
      <div class="container expertise-hero__content geo-hero__content">
        <p class="section-kicker">${hero.eyebrow}</p>
        <h1>${hero.title}</h1>
        <p class="geo-hero__subtitle">${hero.subtitle}</p>
        <p class="geo-hero__intro">${hero.intro}</p>
        <strong>${hero.statement}</strong>
        <div class="hero-actions">
          <a class="button button-primary" href="/demande-devis.html?service=data">Discuter d’un projet Data</a>
          <a class="button button-secondary" href="#demonstrateurs">Découvrir nos cas d’usage</a>
        </div>
      </div>
    </section>
  `;
}

function InternalNav() {
  return `
    <nav class="expertise-internal-nav" aria-label="Navigation Data Science">
      <div class="container expertise-internal-nav__inner">
        ${dataScienceData.nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      </div>
    </nav>
  `;
}

function WhySection() {
  const { why } = dataScienceData;

  return `
    <section class="expertise-section" id="pourquoi">
      <div class="expertise-section__inner overview-layout">
        <div>
          <p class="section-kicker">Pourquoi la Data Science ?</p>
          <h2>${why.title}</h2>
          <p>${why.text}</p>
        </div>
        <div class="overview-grid">${DataCards(why.cards)}</div>
      </div>
    </section>
  `;
}

function WorkflowSection() {
  return `
    <section class="expertise-section expertise-muted" id="chaine">
      <div class="expertise-section__inner">
        <p class="section-kicker">Collecter → Nettoyer → Comprendre → Modéliser → Prédire → Automatiser → Décider</p>
        <h2>Une chaîne complète, orientée décision</h2>
        ${DataFlow(dataScienceData.workflow)}
      </div>
    </section>
  `;
}

function QualitySection() {
  const { quality } = dataScienceData;

  return `
    <section class="expertise-section" id="qualite">
      <div class="expertise-section__inner service-split">
        <div class="service-split__content">
          <p class="section-kicker">${quality.title}</p>
          <h2>${quality.subtitle}</h2>
          <p>${quality.text}</p>
          ${TagList(quality.items)}
        </div>
        <figure class="service-split__image">
          <img src="${quality.image}" alt="" loading="lazy">
        </figure>
      </div>
    </section>
  `;
}

function MachineLearningSection() {
  const { machineLearning } = dataScienceData;

  return `
    <section class="expertise-section expertise-muted" id="ml">
      <div class="expertise-section__inner service-split image-left">
        <figure class="service-split__image">
          <img src="${machineLearning.image}" alt="" loading="lazy">
        </figure>
        <div class="service-split__content">
          <p class="section-kicker">${machineLearning.title}</p>
          <h2>Anticiper une valeur, une classe ou un niveau de risque</h2>
          <p>${machineLearning.text}</p>
        </div>
      </div>
      <div class="expertise-section__inner energy-card-grid">
        ${DataCards(machineLearning.cards)}
      </div>
    </section>
  `;
}

function ScoringSection() {
  const { scoring, segmentation } = dataScienceData;

  return `
    <section class="decision-band data-decision-band" id="scoring">
      <div class="container data-decision-layout">
        <div>
          <p class="section-kicker">Scoring & aide à la décision</p>
          <h2>${scoring.title}</h2>
          <p>${scoring.text}</p>
          ${TagList(scoring.examples)}
        </div>
        <div class="data-score-flow">
          ${scoring.flow.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </div>
    </section>
    <section class="expertise-section">
      <div class="expertise-section__inner overview-layout">
        <div>
          <p class="section-kicker">Segmentation & compréhension des populations</p>
          <h2>${segmentation.title}</h2>
          <p>${segmentation.text}</p>
          <p><strong>${segmentation.result}</strong></p>
        </div>
        ${TagList(segmentation.applications)}
      </div>
    </section>
  `;
}

function GeospatialSection() {
  const { geospatial } = dataScienceData;

  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner service-split">
        <div class="service-split__content">
          <p class="section-kicker">${geospatial.title}</p>
          <h2>SIG + statistiques + Machine Learning → cartographie prédictive</h2>
          <p>${geospatial.text}</p>
          ${TagList(geospatial.applications)}
        </div>
        <figure class="service-split__image">
          <img src="${geospatial.image}" alt="" loading="lazy">
        </figure>
      </div>
    </section>
  `;
}

function SoftwareSection() {
  const { software } = dataScienceData;

  return `
    <section class="expertise-section" id="logiciels">
      <div class="expertise-section__inner service-split">
        <div class="service-split__content">
          <p class="section-kicker">${software.title}</p>
          <h2>${software.subtitle}</h2>
          <p>${software.text}</p>
        </div>
        <figure class="service-split__image">
          <img src="${software.image}" alt="" loading="lazy">
        </figure>
      </div>
      <div class="expertise-section__inner energy-card-grid">
        ${DataCards(software.cards)}
      </div>
      <div class="expertise-section__inner data-workflow-block">
        <h2>Workflow logiciel</h2>
        ${DataFlow(software.workflow, "geo-flow--compact")}
      </div>
    </section>
  `;
}

function IntelligenceSection() {
  const { intelligence, explainability, monitoring, technologies } = dataScienceData;

  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner overview-layout">
        <div>
          <p class="section-kicker">${intelligence.title}</p>
          <h2>L’IA appliquée aux décisions utiles</h2>
          <p>${intelligence.text}</p>
          <p><strong>${intelligence.statement}</strong></p>
        </div>
        ${TagList(intelligence.applications)}
      </div>
      <div class="expertise-section__inner data-two-column">
        ${explainability.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}
      </div>
      <div class="expertise-section__inner data-compact-tags">
        <h2>Monitoring des modèles</h2>
        ${TagList(monitoring)}
        <h2>Technologies mobilisées selon les projets</h2>
        ${TagList(technologies)}
      </div>
    </section>
  `;
}

function DemonstratorCard(item) {
  return `
    <article class="data-demo-card">
      <img src="${item.image}" alt="" loading="lazy">
      <div>
        <span class="data-demo-badge">${item.badge}</span>
        <p class="section-kicker">${item.domain}</p>
        <h3>${item.title}</h3>
        <dl>
          <dt>Problème</dt>
          <dd>${item.problem}</dd>
          <dt>Données</dt>
          <dd>${item.data}</dd>
          <dt>Méthode</dt>
          <dd>${item.method}</dd>
          <dt>Résultat</dt>
          <dd>${item.result}</dd>
        </dl>
        <a href="/demande-devis.html?service=data">Voir le cas d’usage</a>
      </div>
    </article>
  `;
}

function DemonstratorsSection() {
  return `
    <section class="expertise-section" id="demonstrateurs">
      <div class="expertise-section__inner">
        <p class="section-kicker">Projets & démonstrateurs</p>
        <h2>Des cas d’usage concrets, sans les présenter comme références clients</h2>
        <p class="data-section-intro">Ces cartes illustrent des logiques possibles de projet. Elles sont indiquées comme démonstrateurs ou cas d’usage, et non comme des références clients réelles.</p>
        <div class="data-demo-grid">
          ${dataScienceData.demonstrators.map(DemonstratorCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function DeliverablesSection() {
  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner deliverables-layout">
        <div>
          <p class="section-kicker">Des analyses aux outils opérationnels</p>
          <h2>Ce que nous livrons</h2>
          <p>Chaque livraison doit pouvoir être comprise, vérifiée et réutilisée par les équipes concernées.</p>
        </div>
        <div class="deliverables-grid">${DataCards(dataScienceData.deliverables)}</div>
      </div>
    </section>
  `;
}

function ReasonsSection() {
  return `
    <section class="expertise-section">
      <div class="expertise-section__inner">
        <p class="section-kicker">Pourquoi SpatialXquare ?</p>
        <h2>Transformer les données en modèles, puis les modèles en outils opérationnels</h2>
        <div class="overview-grid">${DataCards(dataScienceData.reasons)}</div>
      </div>
    </section>
  `;
}

function AudiencesSection() {
  return `
    <section class="audience-strip">
      <div class="container">
        ${dataScienceData.audiences.map((item) => `<span>${item}</span>`).join("")}
      </div>
    </section>
  `;
}

function CtaSection() {
  const { cta } = dataScienceData;

  return `
    <section class="expertise-cta" id="contact">
      <div class="container">
        <h2>${cta.title}</h2>
        <p>${cta.text}</p>
        <div>
          <a class="button button-primary" href="/demande-devis.html?service=data">${cta.buttons[0]}</a>
          <a class="button button-primary" href="/demande-devis.html?service=data">${cta.buttons[1]}</a>
        </div>
      </div>
    </section>
  `;
}

document.querySelector("#data-science-root").innerHTML = [
  DataHero(),
  InternalNav(),
  WhySection(),
  WorkflowSection(),
  QualitySection(),
  MachineLearningSection(),
  ScoringSection(),
  GeospatialSection(),
  SoftwareSection(),
  IntelligenceSection(),
  DemonstratorsSection(),
  DeliverablesSection(),
  ReasonsSection(),
  AudiencesSection(),
  CtaSection()
].join("");
