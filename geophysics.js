const geophysicsData = window.geophysicsPageData;

function listItems(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function GeophysicsHero() {
  const { hero } = geophysicsData;

  return `
    <section class="expertise-hero">
      <img src="${hero.image}" alt="${hero.imageAlt}">
      <div class="expertise-hero__overlay"></div>
      <div class="container expertise-hero__content">
        <p class="section-kicker">${hero.eyebrow}</p>
        <h1>${hero.title}</h1>
        <div class="hero-actions">
          <a class="button button-primary" href="mailto:contact@spatialxquare.com">Presenter un projet</a>
          <a class="button button-secondary" href="#devis">Demander une etude</a>
        </div>
      </div>
    </section>
  `;
}

function InternalExpertiseNav() {
  return `
    <nav class="expertise-internal-nav" aria-label="Navigation geophysique">
      <div class="container expertise-internal-nav__inner">
        ${geophysicsData.nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      </div>
    </nav>
  `;
}

function ServiceOverview() {
  const { intro } = geophysicsData;

  return `
    <section class="expertise-section">
      <div class="expertise-section__inner overview-layout">
        <div>
          <p class="section-kicker">Introduction</p>
          <h2>${intro.title}</h2>
          ${intro.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </div>
        <div class="overview-grid">
          ${intro.highlights.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function ServiceSplitSection(service, index) {
  const image = `
    <figure class="service-split__image">
      <img src="${service.image}" alt="${service.imageAlt}" loading="lazy">
    </figure>
  `;
  const content = `
    <div class="service-split__content">
      <p class="section-kicker">${String(index + 1).padStart(2, "0")}</p>
      <h2>${service.title}</h2>
      <p>${service.introduction}</p>
      <details open>
        <summary>Prestations principales</summary>
        <ul>${listItems(service.services)}</ul>
      </details>
      ${service.applications ? `<details><summary>Applications</summary><ul>${listItems(service.applications)}</ul></details>` : ""}
      ${service.benefits ? `<details><summary>Resultats attendus</summary><ul>${listItems(service.benefits)}</ul></details>` : ""}
    </div>
  `;

  return `
    <section class="expertise-section ${index % 2 ? "expertise-muted" : ""}" id="${service.id}">
      <div class="expertise-section__inner service-split ${index % 2 ? "image-left" : ""}">
        ${index % 2 ? image + content : content + image}
      </div>
    </section>
  `;
}

function MethodsGrid() {
  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner">
        <p class="section-kicker">Methodes et technologies mobilisees</p>
        <h2>Des methodes adaptees au contexte geologique et aux objectifs du projet</h2>
        <div class="method-grid">
          ${geophysicsData.methods.map((method) => {
            const title = typeof method === "string" ? method : method.title;
            const text = typeof method === "string" ? "" : method.text;

            return `<article><span aria-hidden="true">+</span><h3>${title}</h3>${text ? `<p>${text}</p>` : ""}</article>`;
          }).join("")}
        </div>
      </div>
    </section>
  `;
}

function DeliverablesSection() {
  return `
    <section class="expertise-section">
      <div class="expertise-section__inner deliverables-layout">
        <div>
          <p class="section-kicker">Resultats</p>
          <h2>Des livrables exploitables pour decider et agir</h2>
          <p>Les resultats sont presentes sous forme de cartes, modeles, recommandations et supports d'aide a la decision adaptes aux equipes techniques et aux decideurs.</p>
        </div>
        <div class="deliverables-grid">
          ${geophysicsData.deliverables.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function ProjectCallToAction() {
  const { cta } = geophysicsData;

  return `
    <section class="expertise-cta" id="devis">
      <div class="container">
        <h2>${cta.title}</h2>
        <p>${cta.text}</p>
        <div>
          ${cta.buttons.map((button) => `<a class="button button-primary" href="mailto:contact@spatialxquare.com">${button}</a>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderGeophysicsPage() {
  document.querySelector("#geophysics-root").innerHTML = [
    GeophysicsHero(),
    InternalExpertiseNav(),
    ServiceOverview(),
    ...geophysicsData.services.map(ServiceSplitSection),
    MethodsGrid(),
    DeliverablesSection(),
    ProjectCallToAction()
  ].join("");
}

renderGeophysicsPage();
