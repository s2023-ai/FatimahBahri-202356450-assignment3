/* ==========================================================
   projects.js — Projects page
   Features:
   1. Filter by category (buttons) AND sort (dropdown), combined
   2. Choices are remembered (State -> localStorage)
   3. Opens a project directly from a link like projects.html#project-2
   4. Image lightbox with prev/next and keyboard arrows
   Needs: state.js and data/projects.js loaded first.
   ========================================================== */
 
const FILTERS = [
  { key: "all", label: "All" },
  { key: "product", label: "Product Design" },
  { key: "ux", label: "UX/UI" },
  { key: "3d", label: "3D & Game" },
];
 
/** Sorting rules. Dates are "YYYY-MM" strings, so text comparison works. */
const SORTERS = {
  featured: (a, b) => a.id - b.id,
  newest: (a, b) => b.date.localeCompare(a.date),
  oldest: (a, b) => a.date.localeCompare(b.date),
  az: (a, b) => a.title.localeCompare(b.title),
};
 
const listEl = document.getElementById("project-list");
const filterBar = document.getElementById("filters");
const sortSelect = document.getElementById("sort");
const countEl = document.getElementById("result-count");
 
const pad = (n) => String(n).padStart(2, "0");
 
/* ---------- State (restored from localStorage, with safe fallbacks) ---------- */
const view = {
  filter: State.get("filter", "all"),
  sort: State.get("sort", "featured"),
};
if (!FILTERS.some((f) => f.key === view.filter)) view.filter = "all";
if (!(view.sort in SORTERS)) view.sort = "featured";
 
/** Step 1: keep matching projects. Step 2: sort them. */
function getVisibleProjects() {
  return PROJECTS
    .filter((p) => view.filter === "all" || p.filter === view.filter)
    .sort(SORTERS[view.sort]);
}
 
/* ---------- Rendering ---------- */
function thumbTemplate(project, image, index) {
  return `
    <button class="thumb" type="button" data-project="${project.id}" data-index="${index}"
            aria-label="View larger: ${image.alt}">
      <img src="${image.src}" alt="${image.alt}" loading="lazy">
    </button>`;
}
 
function projectTemplate(p) {
  return `
    <article class="project" id="project-${p.id}">
      <header class="project-head">
        <span class="project-num">${pad(p.id)}</span>
        <h2 class="project-title">${p.title}</h2>
      </header>
      <div class="project-body">
        <div class="project-text">
          <h3>Concept</h3>
          <p>${p.concept}</p>
          <h3>Design process</h3>
          <p>${p.process.join(" → ")}</p>
          ${p.details ? `<p>${p.details}</p>` : ""}
          <h3>Tools</h3>
          <p>${p.tools.join(", ")}</p>
        </div>
        <div class="project-outcome">
          <h3>Final outcome</h3>
          <div class="outcome-images">
            ${p.images.map((img, i) => thumbTemplate(p, img, i)).join("")}
          </div>
        </div>
      </div>
    </article>`;
}
 
function render() {
  const visible = getVisibleProjects();
 
  listEl.innerHTML = visible.length
    ? visible.map(projectTemplate).join("")
    : `<p class="empty">No projects in this category yet.</p>`;
 
  countEl.textContent = `Showing ${visible.length} of ${PROJECTS.length} projects`;
 
  // Mark the active filter button
  filterBar.querySelectorAll(".chip").forEach((chip) => {
    chip.setAttribute("aria-pressed", String(chip.dataset.filter === view.filter));
  });
}
 
/* ---------- Controls ---------- */
filterBar.innerHTML = FILTERS
  .map((f) => `<button class="chip" type="button" data-filter="${f.key}">${f.label}</button>`)
  .join("");
 
filterBar.addEventListener("click", (event) => {
  const chip = event.target.closest(".chip");
  if (!chip) return;
  view.filter = chip.dataset.filter;
  State.set("filter", view.filter);
  render();
});
 
sortSelect.value = view.sort;
sortSelect.addEventListener("change", () => {
  view.sort = sortSelect.value;
  State.set("sort", view.sort);
  render();
});
 
/* ---------- Lightbox ---------- */
const lightbox = document.getElementById("lightbox");
const lbImage = document.getElementById("lightbox-image");
const lbCount = document.getElementById("lightbox-count");
const lbPrev = document.getElementById("lightbox-prev");
const lbNext = document.getElementById("lightbox-next");
 
const gallery = { images: [], index: 0 };
 
function showLightboxImage() {
  const { images, index } = gallery;
  lbImage.src = images[index].src;
  lbImage.alt = images[index].alt;
  lbCount.textContent = `${index + 1} / ${images.length}`;
 
  // Hide arrows when there is only one image
  const single = images.length < 2;
  lbPrev.hidden = single;
  lbNext.hidden = single;
}
 
/** Move forwards (+1) or backwards (-1), wrapping around at the ends. */
function stepLightbox(direction) {
  const total = gallery.images.length;
  gallery.index = (gallery.index + direction + total) % total;
  showLightboxImage();
}
 
listEl.addEventListener("click", (event) => {
  const thumb = event.target.closest(".thumb");
  if (!thumb) return;
 
  const project = PROJECTS.find((p) => p.id === Number(thumb.dataset.project));
  gallery.images = project.images;
  gallery.index = Number(thumb.dataset.index);
  showLightboxImage();
  lightbox.showModal();
});
 
lbPrev.addEventListener("click", () => stepLightbox(-1));
lbNext.addEventListener("click", () => stepLightbox(1));
lightbox.querySelector(".dialog-close").addEventListener("click", () => lightbox.close());
 
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close(); // click on the backdrop
});
 
lightbox.addEventListener("keydown", (event) => {
  if (gallery.images.length < 2) return;
  if (event.key === "ArrowLeft") stepLightbox(-1);
  if (event.key === "ArrowRight") stepLightbox(1);
});
 
/* ---------- Deep link: projects.html#project-3 ---------- */
function scrollToHashProject() {
  const match = location.hash.match(/^#project-(\d+)$/);
  if (!match) return;
 
  const project = PROJECTS.find((p) => p.id === Number(match[1]));
  if (!project) return;
 
  // If the saved filter hides this project, show everything so the link works
  if (!getVisibleProjects().includes(project)) {
    view.filter = "all";
    render();
  }
  document.getElementById(`project-${project.id}`)?.scrollIntoView();
}
 
render();
scrollToHashProject();