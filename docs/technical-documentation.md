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
- External API integration for displaying portfolio-related data.
- Project filtering by category.
- Project sorting by date or title.
- Contact form validation with user-friendly error messages.
JavaScript Logic
Theme Switching
The theme switcher changes the appearance of the website by adding or removing a class from the root HTML element.
themeButton.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");
});
The classList.toggle() method adds the class if it does not exist and removes it if it already exists. The CSS file then applies the dark theme variables.
Project Filtering
Projects can be filtered according to their category:
const filteredProjects = projects.filter((project) => {
  return selectedCategory === "All" ||
         project.category === selectedCategory;
});
The filter() method creates a new array containing only the projects that match the selected category. Selecting All displays every project.
Project Sorting
The project list can also be sorted by date or title:
const sortedProjects = [...filteredProjects].sort((a, b) => {
  return new Date(b.date) - new Date(a.date);
});
The spread operator creates a copy of the filtered array before sorting it. This prevents the original project data from being changed.
External API Integration
The website connects to an external API to retrieve meaningful portfolio-related information. The request is handled asynchronously using fetch() and async/await.
async function loadApiData() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("The API request failed");
    }

    const data = await response.json();
    displayApiData(data);
  } catch (error) {
    showMessage("The information is currently unavailable.");
    console.error(error);
  }
}
The try...catch structure handles errors safely. If the API is unavailable, the user sees a clear message instead of an empty section or a broken page.
Contact Form Validation
The contact form validates the user input before submitting it.
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !email) {
    showError("Please complete all required fields.");
    return;
  }

  if (!email.includes("@")) {
    showError("Please enter a valid email address.");
    return;
  }

  showSuccess("Your message has been submitted successfully.");
});
The preventDefault() method stops the form from refreshing the page. The trim() method removes unnecessary spaces, while the conditions check that the required fields contain valid information.
Responsive Layout
CSS Grid and Flexbox are used to create a responsive layout. The project cards change from three columns on large screens to two columns on tablets and one column on mobile devices.
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
Media queries apply different styles according to the screen width. This prevents content from becoming crowded and improves the mobile user experience.
Error Handling
The website includes error handling for the main interactive functions. Errors are handled when:
- The external API does not respond.
- The API returns an unsuccessful status.
- A project image cannot be loaded.
- Required contact fields are empty.
- The email format is invalid.
The user receives a clear message explaining what happened and what action can be taken.
Accessibility and Performance
The website follows basic accessibility and performance practices:
- Descriptive alt text is used for meaningful images.
- Buttons are used for actions instead of clickable div elements.
- Keyboard focus styles are provided for interactive elements.
- WebP images are used to reduce file size.
- Lazy loading is applied to images below the first screen.
- CSS variables maintain consistent colors and improve maintainability.
- Reusable components reduce duplicated code.
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

