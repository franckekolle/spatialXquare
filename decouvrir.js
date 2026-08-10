const data = window.discoverSpatialXquareData;

function paragraphList(paragraphs) {
  return paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
}

function DiscoverHero() {
  return `
    <section class="discover-institutional-hero">
      <img src="${data.hero.image}" alt="${data.hero.imageAlt}">
      <div class="discover-hero-shade"></div>
      <div class="container discover-institutional-content">
        <p class="section-kicker">${data.hero.eyebrow}</p>
        <h1>${data.hero.title}</h1>
        ${paragraphList(data.hero.paragraphs)}
        <a class="button button-primary" href="${data.hero.buttonHref}">${data.hero.buttonLabel}</a>
      </div>
    </section>
  `;
}

function InternalNavigation() {
  return `
    <nav class="discover-internal-nav" aria-label="Navigation Decouvrir SpatialXquare">
      <div class="container discover-internal-nav__inner">
        ${data.internalNav.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
      </div>
    </nav>
  `;
}

function ContentSplitSection(section) {
  const image = `
    <figure class="split-section__image">
      <img src="${section.image}" alt="${section.imageAlt}" loading="lazy">
    </figure>
  `;
  const text = `
    <div class="split-section__content">
      <p class="section-kicker">${section.eyebrow}</p>
      <h2>${section.title}</h2>
      ${paragraphList(section.paragraphs)}
      ${section.quote ? `<blockquote>${section.quote}</blockquote>` : ""}
      ${section.highlights ? `<div class="keyword-grid">${section.highlights.map((item) => `<span>${item}</span>`).join("")}</div>` : ""}
    </div>
  `;

  return `
    <section class="discover-section" id="${section.id}">
      <div class="discover-section__inner split-section ${section.imagePosition === "left" ? "image-left" : ""}">
        ${section.imagePosition === "left" ? image + text : text + image}
      </div>
    </section>
  `;
}

function ExpertiseCard(domain) {
  return `
    <article class="discover-domain-card">
      <img src="${domain.image}" alt="" loading="lazy">
      <div>
        <h3>${domain.title}</h3>
        <p>${domain.summary}</p>
        <ul>${domain.items.map((item) => `<li>${item}</li>`).join("")}</ul>
        ${domain.link ? `<a href="${domain.link}">Decouvrir ce domaine</a>` : ""}
      </div>
    </article>
  `;
}

function ExpertiseGrid() {
  return `
    <section class="discover-section discover-muted" id="domaines">
      <div class="discover-section__inner">
        <p class="section-kicker">Nos domaines d'intervention</p>
        <h2 class="discover-section-title">Des expertises reliees du terrain a la realisation</h2>
        <div class="discover-domain-grid">${data.domains.map(ExpertiseCard).join("")}</div>
      </div>
    </section>
  `;
}

function ValueProposition() {
  return `
    <section class="discover-section" id="valeur">
      <div class="discover-section__inner">
        <p class="section-kicker">Notre valeur ajoutee</p>
        <h2 class="discover-section-title">Une approche integree du terrain a la decision</h2>
        <div class="value-grid">${data.values.map((item) => `<article><h3>${item}</h3><p>Une contribution concrete pour reduire les incertitudes, accelerer les arbitrages et adapter les solutions aux contraintes locales.</p></article>`).join("")}</div>
      </div>
    </section>
  `;
}

function ActionGrid() {
  return `
    <section class="discover-section discover-muted" id="interventions">
      <div class="discover-section__inner">
        <p class="section-kicker">Pour quelles interventions ?</p>
        <h2 class="discover-section-title">Cinq familles d'actions pour accompagner les projets</h2>
        <div class="action-grid">${data.actions.map((item) => `<a href="#solutions">${item}</a>`).join("")}</div>
      </div>
    </section>
  `;
}

function AudienceSection() {
  return `
    <section class="discover-section" id="publics">
      <div class="discover-section__inner audience-layout">
        <div>
          <p class="section-kicker">Publics concernes</p>
          <h2 class="discover-section-title">Des services pour les acteurs publics, prives et communautaires</h2>
        </div>
        <div class="audience-tags">${data.audiences.map((item) => `<span>${item}</span>`).join("")}</div>
      </div>
    </section>
  `;
}

function SolutionsGrid() {
  return `
    <section class="discover-section discover-muted" id="solutions">
      <div class="discover-section__inner">
        <p class="section-kicker">Nos solutions</p>
        <h2 class="discover-section-title">Des offres directement actionnables</h2>
        <div class="solution-grid">${data.solutions.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p><a href="#cta">Decouvrir la solution</a></article>`).join("")}</div>
      </div>
    </section>
  `;
}

function ProjectCard(project) {
  return `
    <article class="discover-project-card">
      <img src="${project.image}" alt="" loading="lazy">
      <div><h3>${project.title}</h3><p>${project.summary}</p></div>
    </article>
  `;
}

function ProjectsSection() {
  return `
    <section class="discover-section" id="projets-decouvrir">
      <div class="discover-section__inner">
        <p class="section-kicker">Projets et realisations</p>
        <h2 class="discover-section-title">Trois exemples de missions integrees</h2>
        <div class="discover-project-grid">${data.projects.map(ProjectCard).join("")}</div>
      </div>
    </section>
  `;
}

function NewsSection() {
  return `
    <section class="discover-section discover-muted" id="publications">
      <div class="discover-section__inner">
        <p class="section-kicker">Actualites et publications</p>
        <h2 class="discover-section-title">Suivre nos travaux et retours terrain</h2>
        <div class="discover-news-grid">${data.news.map(([category, date, title, text]) => `<article><span>${category} · ${date}</span><h3>${title}</h3><p>${text}</p><a href="#cta">Lire la suite</a></article>`).join("")}</div>
      </div>
    </section>
  `;
}

function CallToAction() {
  return `
    <section class="discover-cta" id="cta">
      <div class="container">
        <h2>${data.cta.title}</h2>
        <p>${data.cta.text}</p>
        <div>${data.cta.buttons.map((button) => `<a class="button button-primary" href="mailto:contact_devis@spatialxquare.com">${button}</a>`).join("")}</div>
      </div>
    </section>
  `;
}

function renderDiscoverPage() {
  document.querySelector("#discover-root").innerHTML = [
    DiscoverHero(),
    InternalNavigation(),
    ...data.contentSections.map(ContentSplitSection),
    ExpertiseGrid(),
    ValueProposition(),
    ActionGrid(),
    AudienceSection(),
    SolutionsGrid(),
    ProjectsSection(),
    NewsSection(),
    CallToAction()
  ].join("");
}

function bindDiscoverVideos() {
  const pageVideos = document.querySelectorAll("video");

  pageVideos.forEach((video) => {
    video.addEventListener("play", () => {
      pageVideos.forEach((otherVideo) => {
        if (otherVideo !== video) otherVideo.pause();
      });
    });
  });
}

renderDiscoverPage();
bindDiscoverVideos();
