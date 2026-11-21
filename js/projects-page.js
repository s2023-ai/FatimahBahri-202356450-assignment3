/* ==========================================================
   projects-page.js — renders the My Works page
   Uses PROJECTS from projects.js
   ========================================================== */

const projectList = document.getElementById("project-list");
const filtersBox = document.getElementById("filters");
const sortSelect = document.getElementById("sort");
const resultCount = document.getElementById("result-count");

let activeFilter = "all";
let currentSort = "featured";

/* ---------- Project card ---------- */

function projectTemplate(project) {
  return `
    <article class="project-row" id="project-${project.id}">
      <div class="project-info">
        <p class="project-number">
          ${String(project.id).padStart(2, "0")}
        </p>

        <h2>${project.title}</h2>

        <p class="project-category">
          ${project.category}
        </p>

        <h3>Concept</h3>
        <p>${project.concept}</p>

        <h3>Design process</h3>
        <p>${project.process.join(" → ")}</p>

        ${project.details ? `
          <p class="project-details">
            ${project.details}
          </p>
        ` : ""}

        <h3>Tools</h3>
        <p>${project.tools.join(", ")}</p>

        <p class="project-date">
          ${project.date}
        </p>
      </div>

      <div class="project-gallery">
        <p class="gallery-label">Final outcome</p>

        <div class="project-images">
          ${project.images.map((image) => `
            <button
              class="project-image-button"
              type="button"
              data-image="${image.src}"
              data-alt="${image.alt}"
            >
              <img
                src="${image.src}"
                alt="${image.alt}"
                loading="lazy"
              >
            </button>
          `).join("")}
        </div>
      </div>
    </article>
  `;
}

/* ---------- Filters ---------- */

function renderFilters() {
  const filterLabels = {
    all: "All",
    product: "Product Design",
    ux: "UX/UI",
    "3d": "3D and Games"
  };

  filtersBox.innerHTML = Object.entries(filterLabels)
    .map(([value, label]) => `
      <button
        class="filter-btn ${value === activeFilter ? "is-active" : ""}"
        type="button"
        data-filter="${value}">
        ${label}
      </button>
    `)
    .join("");

  filtersBox.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      renderFilters();
      renderProjects();
    });
  });
}

/* ---------- Sort projects ---------- */

function getVisibleProjects() {
  let visibleProjects =
    activeFilter === "all"
      ? [...PROJECTS]
      : PROJECTS.filter((project) => {
          return project.filter === activeFilter;
        });

  if (currentSort === "newest") {
    visibleProjects.sort((a, b) => {
      return b.date.localeCompare(a.date);
    });
  }

  if (currentSort === "oldest") {
    visibleProjects.sort((a, b) => {
      return a.date.localeCompare(b.date);
    });
  }

  if (currentSort === "az") {
    visibleProjects.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  }

  if (currentSort === "featured") {
    visibleProjects.sort((a, b) => {
      return Number(b.featured) - Number(a.featured);
    });
  }

  return visibleProjects;
}

/* ---------- Render projects ---------- */

function renderProjects() {
  const visibleProjects = getVisibleProjects();

  projectList.innerHTML = visibleProjects
    .map(projectTemplate)
    .join("");

  resultCount.textContent =
    `${visibleProjects.length} project${visibleProjects.length === 1 ? "" : "s"}`;

  addImageInteractions();
}

/* ---------- Sorting event ---------- */

sortSelect.addEventListener("change", () => {
  currentSort = sortSelect.value;
  renderProjects();
});

/* ---------- Image viewer ---------- */

function addImageInteractions() {
  const imageButtons =
    document.querySelectorAll(".project-image-button");

  const imageModal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const modalClose = document.getElementById("modal-close");

  if (!imageModal || !modalImage || !modalClose) {
    return;
  }

  imageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modalImage.src = button.dataset.image;
      modalImage.alt = button.dataset.alt;
      imageModal.showModal();
    });
  });

  modalClose.onclick = () => {
    imageModal.close();
  };

  imageModal.onclick = (event) => {
    if (event.target === imageModal) {
      imageModal.close();
    }
  };
}

/* ---------- Start page ---------- */

if (projectList && filtersBox && sortSelect && resultCount) {
  renderFilters();
  renderProjects();
}