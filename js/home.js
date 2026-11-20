/* ==========================================================
   home.js — builds the "Selected Projects" cards on the home page
   from the shared PROJECTS data (only items with featured: true).
   ========================================================== */

const cardList = document.getElementById("work-cards");

/** Zero-pad the project number: 1 -> "01". */
const pad = (n) => String(n).padStart(2, "0");

/** HTML for one card. The whole card is a link to that project on the Projects page. */
function cardTemplate(project) {
  return `
    <li>
      <a class="card" href="projects.html#project-${project.id}">
        <div class="card-media">
          <img src="${project.cover.src}" alt="${project.cover.alt}"
               width="800" height="500" loading="lazy">
        </div>
        <div class="card-body">
          <p class="card-meta"><span>${pad(project.id)}</span> ${project.category}</p>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
        </div>
      </a>
    </li>`;
}

cardList.innerHTML = PROJECTS
  .filter((project) => project.featured)
  .map(cardTemplate)
  .join("");
