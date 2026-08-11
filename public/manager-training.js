const managerData = window.managerTrainingData;

function ManagerTags(items) {
  return `<div class="surpac-tags manager-tags">${items.map((item) => `<span>${item}</span>`).join("")}</div>`;
}

function ManagerImage(src, label = "") {
  return `
    <figure class="surpac-image manager-image">
      <img src="${src}" alt="" loading="lazy">
      ${label ? `<figcaption>${label}</figcaption>` : ""}
    </figure>
  `;
}

function Hero() {
  const { hero } = managerData;
  return `
    <section class="expertise-hero manager-hero">
      <img src="${hero.image}" alt="">
      <div class="expertise-hero__overlay"></div>
      <div class="container expertise-hero__content surpac-hero__content">
        <p class="section-kicker">${hero.eyebrow}</p>
        <h1>${hero.title}</h1>
        <p class="geo-hero__subtitle">${hero.subtitle}</p>
        <p class="geo-hero__intro">${hero.intro}</p>
        <strong>${hero.statement}</strong>
        <div class="hero-actions">
          <a class="button button-primary" href="/demande-devis.html?service=formation">Demander ce parcours</a>
          <a class="button button-secondary" href="#modules">Voir les modules</a>
        </div>
      </div>
    </section>
  `;
}

function InternalNav() {
  return `
    <nav class="expertise-internal-nav" aria-label="Navigation Manager technique">
      <div class="container expertise-internal-nav__inner">
        ${managerData.nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      </div>
    </nav>
  `;
}

function GoalsSection() {
  return `
    <section class="expertise-section" id="objectifs">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Objectif manager</p>
          <h2>Comprendre ce que les outils produisent, ce qu’ils supposent et leurs limites</h2>
          <p>Le participant n’apprend pas à cliquer dans Surpac, Leapfrog, Whittle, QGIS, ioGAS ou Isatis.neo. Il apprend à lire les résultats, poser les bonnes questions et décider.</p>
        </div>
        ${ManagerImage(managerData.media.chain, "Chaîne décisionnelle technique")}
      </div>
      <div class="expertise-section__inner manager-card-grid">
        ${managerData.goals.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}
      </div>
    </section>
  `;
}

function ModulesSection() {
  return `
    <section class="expertise-section expertise-muted" id="modules">
      <div class="expertise-section__inner surpac-section-head">
        <p class="section-kicker">Modules 1 → 9</p>
        <h2>Lire, challenger et transformer les modèles en décision</h2>
      </div>
      <div class="expertise-section__inner manager-module-grid">
        ${managerData.modules.map(([number, title, text]) => `
          <article>
            <span>${number}</span>
            <h3>${title}</h3>
            <p>${text}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function ReviewSection() {
  return `
    <section class="expertise-section" id="review">
      <div class="expertise-section__inner surpac-split image-left">
        ${ManagerImage(managerData.media.review, "Technical review et analyse critique")}
        <div>
          <p class="section-kicker">Technical review</p>
          <h2>Apprendre à challenger une étude technique</h2>
          <p>Le manager reçoit un rapport fictif et identifie hypothèses non documentées, données insuffisantes, paramètres sensibles, incohérences, validations absentes et conclusions trop fortes.</p>
          ${ManagerTags(managerData.reviewQuestions)}
        </div>
      </div>
    </section>
  `;
}

function CommitteeSection() {
  const { project } = managerData;
  return `
    <section class="decision-band manager-project-band" id="comite">
      <div class="container surpac-project-layout">
        <div>
          <p class="section-kicker">Comité technique simulé</p>
          <h2>${project.title}</h2>
          <p>${project.text}</p>
          <p>L’évaluation finale répond à quatre questions : que sait-on réellement, qu’est-ce qui reste incertain, quel est le risque de décision, quelle action recommander ?</p>
        </div>
        <div class="surpac-project-flow manager-project-flow">
          ${project.steps.map((step) => `<span>${step}</span>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function LinksSection() {
  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Académies liées</p>
          <h2>Relier management technique, modèles et logiciels spécialisés</h2>
          <p>Ce parcours donne la lecture critique des productions issues des formations géologie, ressources, planification, géostatistique, SIG et Data Science.</p>
        </div>
        ${ManagerImage(managerData.media.committee, "Décision et comité technique")}
      </div>
      <div class="expertise-section__inner manager-link-grid">
        ${managerData.links.map(([title, href]) => `
          <a class="training-linked-card" href="${href}">
            <article>
              <h3>${title}</h3>
              <span class="training-card-link">Ouvrir</span>
            </article>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function CtaSection() {
  const { cta } = managerData;
  return `
    <section class="expertise-cta manager-cta" id="contact">
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

document.querySelector("#manager-training-root").innerHTML = [
  Hero(),
  InternalNav(),
  GoalsSection(),
  ModulesSection(),
  ReviewSection(),
  CommitteeSection(),
  LinksSection(),
  CtaSection()
].join("");
