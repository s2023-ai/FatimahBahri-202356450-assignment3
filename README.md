My Personal Portfolio
Project Overview
My Personal Portfolio is a responsive website that presents my background, skills, and design projects. It combines UI/UX design, web development, 3D modeling, and digital fabrication work in one organized platform.
Website Structure
My Personal Portfolio/
│
├── index.html
├── about.html
├── projects.html
├── contact.html
│
├── css/
│   ├── base.css
│   ├── components.css
│   └── pages.css
│
├── js/
│   ├── main.js
│   ├── header.js
│   ├── footer.js
│   └── projects.js
│
└── assets/
    ├── images/
    ├── icons/
    └── fonts/
HTML Files
- index.html: Home page and introduction.
- about.html: Personal information, skills, and interests.
- projects.html: Project cards and project information.
- contact.html: Contact information and communication options.
Each page uses shared components:
<site-header></site-header>

<main class="projects-page">
  <!-- Page content -->
</main>

<site-footer></site-footer>
site-header and site-footer are reusable custom elements. They reduce duplicated HTML and keep the navigation and footer consistent across all pages.
CSS Files
- base.css: Global styles, typography, colors, and CSS variables.
- components.css: Reusable elements such as the header, footer, buttons, and cards.
- pages.css: Styles specific to the Home, About, Projects, and Contact pages.
Example of the design variables:
:root {
  --background-color: #f8f3e9;
  --text-color: #1e1b18;
  --accent-color: #f3c969;
}
The variables are reused throughout the website:
body {
  background-color: var(--background-color);
  color: var(--text-color);
}
This makes the design easier to update and keeps the colors consistent.
JavaScript Files
- main.js: General website interactions.
- header.js: Header component and theme switcher.
- footer.js: Footer component and footer interactions.
- projects.js: Project data and dynamic project card generation.
Project information is stored in an array:
const projects = [
  {
    title: "ZARA Website UI Analysis",
    category: "UI/UX",
    description: "An analysis of the ZARA website interface.",
    image: "assets/images/zara-cover.webp"
  }
];
The cards are generated dynamically:
projects.forEach((project) => {
  const card = document.createElement("article");

  card.className = "project-card";
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h2>${project.title}</h2>
    <p>${project.description}</p>
  `;

  projectsGrid.appendChild(card);
});
The forEach() method loops through every project, creates a card, adds its content, and displays it inside the Projects page.
Assets Folder
- images/: Project images and visual content.
- icons/: Icons used in the interface.
- fonts/: Custom fonts used in the design.
Images are optimized using WebP when possible:
<img
  src="assets/images/project-cover.webp"
  alt="Project preview"
  loading="lazy"
>
The alt attribute improves accessibility, while loading="lazy" improves performance by loading images only when needed.
Main Features
- Responsive layout for desktop, tablet, and mobile screens.
- Reusable header and footer components.
- Dynamic project cards.
- Light and dark theme switching.
- Optimized project images.
- Contact section and interactive elements.
- Consistent typography, colors, and spacing.
Testing
The website was tested using Chrome DevTools by checking:
- Navigation links.
- Theme switching.
- Project card generation.
- Header and footer alignment.
- Contact interactions.
- Responsive layouts.
- Image loading.
- Horizontal scrolling.
- Console errors.
Conclusion
My Personal Portfolio uses a modular front-end structure that separates content, styling, reusable components, project data, and assets. This structure makes the website easier to maintain, update, and expand with new projects in the future.