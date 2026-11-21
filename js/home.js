/* ==========================================================
   home.js — builds Selected Projects cards on the home page
   ========================================================== */

const cardList = document.getElementById("work-cards");

/** Zero-pad the project number: 1 -> "01". */
const pad = (n) => String(n).padStart(2, "0");

/** HTML for one selected project card. */
function cardTemplate(project) {
  return `
    <li class="project-card">
      <a class="project-card-link" href="projects.html#project-${project.id}">
        <img
          src="${project.thumbnail}"
          alt="${project.title}"
          width="800"
          height="500"
          loading="lazy"
        >

        <div class="project-card-content">
          <p class="project-category">
            ${pad(project.id)} ${project.category}
          </p>

          <h3>${project.title}</h3>

          <p>${project.summary}</p>
        </div>
      </a>
    </li>
  `;
}

if (cardList) {
  cardList.innerHTML = PROJECTS
    .filter((project) => project.selected)
    .map(cardTemplate)
    .join("");
}
