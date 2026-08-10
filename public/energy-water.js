const energyWaterData = window.energyWaterPageData;

function EnergyCards(items) {
  return items.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("");
}

function EnergyFlow(items) {
  return `
    <div class="geo-flow energy-flow">
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

function EnergyHero() {
  const { hero } = energyWaterData;

  return `
    <section class="expertise-hero geo-hero energy-hero">
      <img src="${hero.image}" alt="">
      <div class="expertise-hero__overlay"></div>
      <div class="container expertise-hero__content geo-hero__content">
        <p class="section-kicker">${hero.eyebrow}</p>
        <h1>${hero.title}</h1>
        <p class="geo-hero__subtitle">${hero.subtitle}</p>
        <p class="geo-hero__intro">${hero.intro}</p>
        <strong>${hero.statement}</strong>
        <div class="hero-actions">
          <a class="button button-primary" href="/demande-devis.html?service=energie">Étudier mon projet</a>
          <a class="button button-secondary" href="#solaire">Découvrir nos solutions</a>
        </div>
      </div>
    </section>
  `;
}

function InternalNav() {
  return `
    <nav class="expertise-internal-nav" aria-label="Navigation énergie et eau">
      <div class="container expertise-internal-nav__inner">
        ${energyWaterData.nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      </div>
    </nav>
  `;
}

function WhySection() {
  const { why } = energyWaterData;

  return `
    <section class="expertise-section" id="pourquoi">
      <div class="expertise-section__inner overview-layout">
        <div>
          <p class="section-kicker">Pourquoi intégrer énergie et eau ?</p>
          <h2>${why.title}</h2>
          <p>${why.text}</p>
        </div>
        <div class="overview-grid">${EnergyCards(why.cards)}</div>
      </div>
    </section>
  `;
}

function WorkflowSection() {
  return `
    <section class="expertise-section expertise-muted" id="chaine">
      <div class="expertise-section__inner">
        <p class="section-kicker">De l’étude à l’exploitation</p>
        <h2>Une chaîne complète, de l’étude à l’exploitation</h2>
        ${EnergyFlow(energyWaterData.workflow)}
      </div>
    </section>
  `;
}

function DomainSection(domain, id, muted = false) {
  return `
    <section class="expertise-section ${muted ? "expertise-muted" : ""}" id="${id}">
      <div class="expertise-section__inner service-split">
        <div class="service-split__content">
          <p class="section-kicker">${domain.title}</p>
          <h2>${domain.subtitle}</h2>
          <p>${domain.text}</p>
        </div>
        <figure class="service-split__image">
          <img src="${domain.image}" alt="" loading="lazy">
        </figure>
      </div>
      <div class="expertise-section__inner energy-card-grid">
        ${EnergyCards(domain.sections)}
      </div>
    </section>
  `;
}

function IntegrationSection() {
  return `
    <section class="decision-band" id="integration">
      <div class="container">
        <h2>Quand l’énergie et l’eau fonctionnent ensemble</h2>
        <p>L’intégration des systèmes évite de concevoir séparément l’énergie, le pompage, le stockage et la distribution alors que leurs performances sont directement liées.</p>
        <div class="energy-integration-grid">
          ${energyWaterData.integration.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function MonitoringSection() {
  return `
    <section class="expertise-section">
      <div class="expertise-section__inner">
        <p class="section-kicker">Suivi & performance</p>
        <h2>Suivre les installations lorsque les équipements le permettent</h2>
        <div class="overview-grid">${EnergyCards(energyWaterData.monitoring)}</div>
      </div>
    </section>
  `;
}

function DeliverablesSection() {
  return `
    <section class="expertise-section expertise-muted" id="livrables">
      <div class="expertise-section__inner deliverables-layout">
        <div>
          <p class="section-kicker">De l’étude au système opérationnel</p>
          <h2>Ce que nous livrons</h2>
          <p>Chaque projet doit aboutir à une solution compréhensible, exploitable et maintenable par les utilisateurs.</p>
        </div>
        <div class="deliverables-grid">${EnergyCards(energyWaterData.deliverables)}</div>
      </div>
    </section>
  `;
}

function ReasonsSection() {
  return `
    <section class="expertise-section">
      <div class="expertise-section__inner">
        <p class="section-kicker">Pourquoi SpatialXquare ?</p>
        <h2>De la ressource à l’usage</h2>
        <div class="overview-grid">${EnergyCards(energyWaterData.reasons)}</div>
      </div>
    </section>
  `;
}

function AudiencesSection() {
  return `
    <section class="audience-strip">
      <div class="container">
        ${energyWaterData.audiences.map((item) => `<span>${item}</span>`).join("")}
      </div>
    </section>
  `;
}

function CtaSection() {
  const { cta } = energyWaterData;

  return `
    <section class="expertise-cta" id="devis">
      <div class="container">
        <h2>${cta.title}</h2>
        <p>${cta.text}</p>
        <div>
          <a class="button button-primary" href="/demande-devis.html?service=energie">${cta.buttons[0]}</a>
          <a class="button button-primary" href="/demande-devis.html?service=energie">${cta.buttons[1]}</a>
        </div>
      </div>
    </section>
  `;
}

document.querySelector("#energy-water-root").innerHTML = [
  EnergyHero(),
  InternalNav(),
  WhySection(),
  WorkflowSection(),
  DomainSection(energyWaterData.solar, "solaire"),
  DomainSection(energyWaterData.water, "eau", true),
  IntegrationSection(),
  MonitoringSection(),
  DeliverablesSection(),
  ReasonsSection(),
  AudiencesSection(),
  CtaSection()
].join("");
