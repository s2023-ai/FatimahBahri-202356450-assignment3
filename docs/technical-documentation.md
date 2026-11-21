My Personal Portfolio
Technical Documentation
1. Project Overview
My Personal Portfolio is a responsive website designed to present my background, skills, and design projects. The website combines UI/UX design, web development, 3D modeling, and digital fabrication work in one organized platform.

The main goals are to:
- Present my design identity and experience.
- Display selected projects clearly.
- Provide project descriptions and visual previews.
- Offer contact information.
- Maintain a consistent and responsive design across all pages.
2. Website Structure
The website is divided into separate HTML, CSS, JavaScript, and asset files. Each file has a specific responsibility, which makes the project easier to manage and update.
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

3. HTML Files
The HTML files represent the main pages of the portfolio:
- index.html contains the Home page and the main introduction.
- about.html contains personal information, skills, and design interests.
- projects.html displays the portfolio projects.
- contact.html contains contact information and communication options.
Each page includes the shared header and footer components:
<site-header></site-header>

<main class="projects-page">
  <!-- Page content -->
</main>

<site-footer></site-footer>

The <site-header> and <site-footer> elements are custom reusable components. They allow the same navigation bar and footer to appear on every page without repeating the complete HTML code.
CSS Files
The CSS files are separated based on their function:
- base.css contains global styles, colors, typography, and CSS variables.
- components.css contains reusable elements such as the header, footer, buttons, and project cards.
- pages.css contains styles specific to each page.
For example, CSS variables are defined in base.css:
:root {
  --background-color: #f8f3e9;
  --text-color: #1e1b18;
  --accent-color: #f3c969;
}

These variables can then be reused throughout the website:
body {
  background-color: var(--background-color);
  color: var(--text-color);
}

This avoids repeating the same color values and makes it easier to update the visual identity.
JavaScript Files
JavaScript files control the interactive features of the website:
- main.js contains general website interactions.
- header.js generates the shared header and controls the theme switcher.
- footer.js generates the shared footer and its interactions.
- projects.js stores the project data and creates project cards dynamically.
Example of the project data:
const projects = [
  {
    title: "ZARA Website UI Analysis",
    category: "UI/UX",
    description: "An analysis of the ZARA website interface.",
    image: "assets/images/zara-cover.webp"
  }
];

The project information is stored as objects inside an array. This makes it possible to add new projects without manually creating a new card in the HTML file.

The project cards are then generated using JavaScript:
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

The forEach() method loops through every project, creates a new card, adds the project information, and inserts the card into the Projects page.
Assets Folder
The assets folder contains the visual resources used by the website:
- images/ stores project images and visual content.
- icons/ stores icons used in buttons and navigation.
- fonts/ stores any custom fonts used in the design.
Images are optimized and converted to WebP when possible to improve loading speed:
<img
  src="assets/images/project-cover.webp"
  alt="Project preview"
  loading="lazy"
>

The alt attribute improves accessibility, while loading="lazy" delays loading images until they are needed.
4. Reusable Components
The website uses reusable Web Components:
<site-header></site-header>
<site-footer></site-footer>

The header includes:
- Logo or portfolio name
- Navigation links
- Theme switcher
- Responsive layout
The footer includes:
- Personal quote
- Useful links
- Copyright information
- Visit timer
- Back to Top button
Using reusable components prevents code repetition and ensures that the header and footer remain consistent across all pages.
5. CSS Organization
The CSS files are divided according to their purpose:
- base.css: global styles, colors, typography, and CSS variables.
- components.css: header, footer, buttons, cards, and reusable elements.
- pages.css: styles for Home, About, Projects, and Contact pages.
- Responsive rules: layouts for tablets and mobile screens.
CSS variables are used to maintain a consistent visual identity:
:root {
  --background-color: #f8f3e9;
  --text-color: #1e1b18;
  --accent-color: #f3c969;
}

The layout uses Flexbox and CSS Grid to organize content and maintain alignment.
6. Projects Page
Project information is stored in projects.js as an array of objects.
const projects = [
  {
    title: "ZARA Website UI Analysis",
    category: "UI/UX",
    description: "An analysis of the ZARA website interface.",
    image: "assets/images/zara-cover.webp"
  }
];

JavaScript generates the project cards dynamically and inserts them into the Projects page. This makes it easier to add, remove, or update projects without changing the HTML structure manually.

The project grid is responsive:
- Three columns on desktop.
- Two columns on tablet.
- One column on mobile.
7. Recent Technical Improvements
Several improvements were made during the latest development stages:
- Corrected the About page class from .page to .about-page.
- Organized the page-specific CSS and removed repeated styles.
- Connected projects.js to the Projects page so project cards render correctly.
- Improved the header alignment.
- Removed unnecessary navigation arrows.
- Reduced the excessive spacing between the content and footer.
- Added shared header and footer components.
- Improved responsive behavior across different screen sizes.
8. Image Optimization
Project images are optimized to improve loading performance.

The website uses:
- WebP for compressed project images.
- Lazy loading for images below the first screen.
- object-fit: cover to maintain consistent image proportions.
- Different image sizes when necessary for cards and project details.
Example:
<img
  src="assets/images/project-cover.webp"
  alt="Project preview"
  loading="lazy"
/>

9. Theme Switching
The website supports light and dark modes by adding or removing the dark-mode class from the document.
document.documentElement.classList.toggle("dark-mode");

Different CSS variables are used for each theme, allowing the colors to change without rewriting every component style.
10. Testing
The website was tested using Chrome DevTools.

The testing process included:
- Checking navigation links.
- Testing the theme switcher.
- Verifying project card generation.
- Testing the Contact dialog.
- Checking the header and footer on all pages.
- Testing desktop, tablet, and mobile layouts.
- Checking for horizontal scrolling.
- Reviewing image loading and performance.
- Checking the console for JavaScript errors.
11. Conclusion
My Personal Portfolio uses a modular and responsive front-end structure. Reusable components, organized CSS files, dynamic project cards, optimized images, and responsive layouts make the website easier to maintain and improve. The latest updates focused on fixing layout issues, improving navigation, reducing repeated code, and enhancing the overall user experience.
