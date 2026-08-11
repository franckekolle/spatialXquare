const iogasData = window.iogasTrainingData;

function IogasTags(items) {
  return `<div class="surpac-tags iogas-tags">${items.map((item) => `<span>${item}</span>`).join("")}</div>`;
}

function IogasImage(src, label = "") {
  return `
    <figure class="surpac-image iogas-image">
      <img src="${src}" alt="" loading="lazy">
      ${label ? `<figcaption>${label}</figcaption>` : ""}
    </figure>
  `;
}

function Hero() {
  const { hero } = iogasData;
  return `
    <section class="expertise-hero iogas-hero">
      <img src="${hero.image}" alt="">
      <div class="expertise-hero__overlay"></div>
      <div class="container expertise-hero__content surpac-hero__content">
        <p class="section-kicker">${hero.eyebrow}</p>
        <h1>${hero.title}</h1>
        <p class="geo-hero__subtitle">${hero.subtitle}</p>
        <p class="geo-hero__intro">${hero.intro}</p>
        <strong>${hero.statement}</strong>
        <div class="hero-actions">
          <a class="button button-primary" href="/demande-devis.html?service=formation">Complete ioGAS Bootcamp</a>
          <a class="button button-secondary" href="#bootcamps">Voir les bootcamps</a>
        </div>
      </div>
    </section>
  `;
}

function InternalNav() {
  return `
    <nav class="expertise-internal-nav" aria-label="Navigation bootcamps ioGAS">
      <div class="container expertise-internal-nav__inner">
        ${iogasData.nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      </div>
    </nav>
  `;
}

function GatewaysSection() {
  return `
    <section class="expertise-section" id="specialites">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Quatre portes commerciales</p>
          <h2>From Assays to Exploration Targets</h2>
          <p>La formation vend une méthode d’analyse géochimique appliquée à l’exploration, pas seulement l’apprentissage des boutons du logiciel.</p>
        </div>
        ${IogasImage(iogasData.media.gateways, "ioGAS fundamentals, interpretation, targeting et data science")}
      </div>
      <div class="expertise-section__inner iogas-gateway-grid">
        ${iogasData.gateways.map(([title, path, text]) => `
          <article>
            <span>${path}</span>
            <h3>${title}</h3>
            <p>${text}</p>
            <a href="/demande-devis.html?service=formation">Choisir cette porte</a>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function ModulesSection() {
  return `
    <section class="expertise-section expertise-muted" id="bootcamps">
      <div class="expertise-section__inner surpac-split image-left">
        ${IogasImage(iogasData.media.modules, "Bootcamps ioGAS et interprétation géochimique")}
        <div>
          <p class="section-kicker">Bootcamps 0 → 14</p>
          <h2>Contrôler, explorer, interpréter et cibler</h2>
          <p>Chaque bootcamp peut être suivi seul, ou assemblé dans un parcours complet de cinq jours à plusieurs semaines selon le niveau demandé.</p>
        </div>
      </div>
      <div class="expertise-section__inner iogas-module-grid">
        ${iogasData.modules.map(([number, title, level, text]) => `
          <article>
            <span>${number}</span>
            <strong>${level}</strong>
            <h3>${title}</h3>
            <p>${text}</p>
            <a class="training-card-link" href="/demande-devis.html?service=formation">En savoir plus</a>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function ProjectSection() {
  const { project } = iogasData;
  return `
    <section class="decision-band iogas-project-band" id="projet">
      <div class="container surpac-project-layout">
        <div>
          <p class="section-kicker">Projet fil rouge</p>
          <h2>De la donnée laboratoire à la carte de cibles</h2>
          <p><strong>${project.title}</strong></p>
          <p>${project.text}</p>
        </div>
        <div class="surpac-project-flow iogas-project-flow">
          ${project.steps.map((step) => `<span>${step}</span>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function InterpretationSection() {
  return `
    <section class="expertise-section">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Interprétation géochimique</p>
          <h2>Les signatures comptent plus que les valeurs isolées</h2>
          <p>Une anomalie statistique n’est pas automatiquement une cible géologique. Le parcours relie distributions, associations multiéléments, lithologies, altérations, structures et continuité spatiale.</p>
          ${IogasTags(["PCA", "Mahalanobis", "Discriminant analysis", "Pathfinders", "Alteration", "Lithogeochemistry", "Anomalies", "Targets"])}
        </div>
        ${IogasImage(iogasData.media.multivariate, "Analyse multivariée et signatures géochimiques")}
      </div>
    </section>
  `;
}

function MappingSection() {
  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner surpac-split image-left">
        ${IogasImage(iogasData.media.mapping, "Spatial geochemistry et targeting")}
        <div>
          <p class="section-kicker">Spatial Geochemistry</p>
          <h2>Passer des graphiques aux cartes de décision</h2>
          <p>Les bootcamps avancés combinent données ioGAS, géologie, structures, géophysique, sondages et SIG pour produire une carte d’anomalies et une carte de cibles hiérarchisées.</p>
          ${IogasTags(iogasData.deliverables)}
        </div>
      </div>
    </section>
  `;
}

function BridgesSection() {
  return `
    <section class="expertise-section" id="passerelles">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Passerelles</p>
          <h2>ioGAS connecté à la modélisation, au SIG et à la Data Science</h2>
          <p>Le parcours ioGAS peut prolonger les formations géologie d’exploration, SIG, Leapfrog Geo et bootcamps Data Science.</p>
        </div>
        ${IogasImage(iogasData.media.leapfrog, "Passerelle ioGAS, Leapfrog Geo et interprétation 3D")}
      </div>
      <div class="expertise-section__inner iogas-bridge-grid">
        ${iogasData.bridges.map(([title, href, text]) => `
          <a class="training-linked-card" href="${href}">
            <article>
              <h3>${title}</h3>
              <p>${text}</p>
              <span class="training-card-link">Ouvrir</span>
            </article>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function CorporateSection() {
  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner surpac-split image-left">
        ${IogasImage(iogasData.media.corporate, "Corporate Geochemical Data Workflow")}
        <div>
          <p class="section-kicker">Corporate workflow</p>
          <h2>Standardiser les données et les templates d’interprétation</h2>
          <p>Pour les entreprises, le bootcamp peut construire un workflow réutilisable : résultats laboratoire, standardisation, QA/QC, template ioGAS, interprétation, cartes et rapport.</p>
          ${IogasTags(["Lab results", "Standardisation", "QA/QC", "ioGAS template", "EDA", "Interpretation", "Maps", "Report"])}
        </div>
      </div>
    </section>
  `;
}

function CtaSection() {
  const { cta } = iogasData;
  return `
    <section class="expertise-cta iogas-cta" id="contact">
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

document.querySelector("#iogas-training-root").innerHTML = [
  Hero(),
  InternalNav(),
  GatewaysSection(),
  ModulesSection(),
  ProjectSection(),
  InterpretationSection(),
  MappingSection(),
  BridgesSection(),
  CorporateSection(),
  CtaSection()
].join("");
