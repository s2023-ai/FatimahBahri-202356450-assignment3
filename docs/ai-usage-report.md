AI Usage Report
Student Information
Name
Fatimah Bahri
Student ID
[202356450]
Course
SWE 363

Date
21 November 2026
1. Introduction
This report documents my use of generative AI during the development of My Personal Portfolio website. The report explains which tools were used, why they were used, what parts of the project were affected, and how I reviewed and modified the generated suggestions.
I used AI as a collaboration and learning tool. I did not generate the complete website from one prompt. I first created the visual design, page structure, and interactions in Figma. After that, I used ChatGPT to help me understand the technical implementation, organize the code, solve development problems, and document the project.
The final design decisions, content, visual identity, interaction choices, testing, and code modifications were reviewed and controlled by me.
2. Tools Used and Use Cases
2.1 Figma
Figma was used as the main interface design and prototyping tool. I designed the website interface manually before implementing it in code.
The work completed in Figma included:
Designing the Home page layout.
Designing the About page structure.
Designing the Projects page and project cards.
Designing the Contact section.
Creating the navigation bar and footer layout.
Choosing the visual direction, colors, typography, spacing, and border styles.
Planning the interaction between the pages.
Creating prototype links and transitions.
Reviewing the layout before starting the coding stage.
Figma helped me define the visual requirements before writing the code. It also provided screenshots and page structures that I later used to explain the desired result to ChatGPT.
Figma was used for design and prototyping. I did not use Figma AI to generate the complete interface.
2.2 ChatGPT
ChatGPT was used as a technical support and learning assistant after the Figma design was prepared. I shared screenshots, code sections, page structures, and specific problems with ChatGPT to receive explanations and possible solutions.
ChatGPT was used for the following tasks:
Website structure
Suggesting a suitable organization for HTML, CSS, JavaScript, and asset files.
Explaining how to separate global styles from component-specific and page-specific styles.
Explaining how to structure the Home, About, Projects, and Contact pages.
Suggesting semantic HTML elements such as header, nav, main, section, article, and footer.
Reusable components
Explaining how to create reusable site-header and site-footer components.
Helping avoid repeating the same header and footer markup on every page.
Explaining how a shared component can be loaded and displayed on different HTML pages.
Suggesting how to keep global components separate from page-specific content.
CSS and layout
Explaining CSS variables for colors, spacing, and typography.
Helping organize styles into base.css, components.css, and pages.css.
Explaining the use of CSS Grid and Flexbox.
Helping fix the spacing between the main content and footer.
Helping improve the alignment of the header.
Explaining responsive layouts using media queries.
Removing unnecessary navigation arrows that did not have a functional purpose.
JavaScript functionality
Explaining how to store project information in a JavaScript array.
Explaining how to generate project cards dynamically.
Suggesting project filtering by category.
Suggesting project sorting by date or title.
Explaining how to implement a light and dark theme switcher.
Explaining how to validate the contact form.
Explaining how to display user-friendly error messages.
External API integration
Explaining how to connect the website to an external API using fetch().
Explaining asynchronous JavaScript using async and await.
Explaining how to check the response status before displaying the data.
Explaining how to handle API failures using try...catch.
Suggesting a user-friendly message when the API is not available.
Image optimization
Explaining the difference between PNG, JPG, and WebP.
Suggesting WebP for optimized project images.
Explaining appropriate image sizes for project cards and project detail sections.
Explaining the use of loading="lazy" for images below the first viewport.
Explaining how to use object-fit and aspect-ratio to keep project cards consistent.
Documentation
Helping write the project README file.
Explaining the purpose of the main files and folders.
Organizing the technical documentation.
Preparing this AI Usage Report.
3. How AI Was Used During the Workflow
The AI-supported workflow followed several stages.
Stage 1: Visual design and planning
I started by designing the interface and interactions in Figma. I decided the layout of each page, the navigation structure, the project card appearance, the visual hierarchy, and the main interaction flow.
At this stage, the design decisions were made by me. The purpose of Figma was to create a clear visual reference before implementation.
Stage 2: Sharing the design requirements
After preparing the Figma design, I shared screenshots and descriptions of the layout with ChatGPT. I explained what each section should contain and described the visual problems I encountered during implementation.
The screenshots were used as references for discussing:
Header position and alignment.
Footer spacing.
Project card layout.
Page title placement.
Navigation behavior.
Responsive layout requirements.
Stage 3: Technical implementation
ChatGPT suggested code structures and explained how to implement specific features. I reviewed the suggestions and adapted them to the existing project instead of copying them without checking.
For example, the project card data was separated from the HTML layout so that cards could be generated dynamically using JavaScript. The suggested code was adjusted according to my actual file names, class names, image paths, and design requirements.
Stage 4: Debugging and refinement
When the website did not match the Figma design, I shared the problem and relevant code with ChatGPT. The suggestions helped identify possible causes such as:
Incorrect page class names.
Extra margins or padding.
Incorrect minimum heights.
CSS selectors that did not match the HTML.
Project data that was not being rendered.
Unnecessary pseudo-elements in the navigation.
I then changed the code, opened the website in the browser, and compared the result with the Figma design.
Stage 5: Advanced functionality
The assignment required more complex web application features. ChatGPT helped me understand the logic required for:
External API requests.
Project filtering.
Project sorting.
Contact form validation.
Error messages.
I reviewed the logic and ensured that the implementation matched the project requirements.
Stage 6: Documentation
ChatGPT helped organize the technical explanation of the project. I reviewed the generated documentation and changed it so that it described the actual project structure and features rather than presenting generic information.
4. Benefits of Using AI
4.1 Improved understanding of technical concepts
ChatGPT helped me understand concepts that were difficult to connect to my own project, including:
The difference between global and page-specific CSS.
The purpose of reusable components.
How JavaScript arrays can be used to store project data.
How forEach() can generate repeated interface elements.
How filter() and sort() can create dynamic project lists.
How asynchronous API requests work.
How error handling protects the user experience.
4.2 Faster debugging
When a visual or functional issue appeared, ChatGPT helped me identify possible causes more quickly. Instead of changing random CSS values, I learned to inspect the HTML structure, class names, selectors, spacing rules, and layout behavior.
4.3 Better code organization
AI suggestions encouraged me to separate the code into reusable and maintainable sections. This resulted in a clearer structure for:
Global styles.
Reusable components.
Page-specific styles.
Project data.
General JavaScript interactions.
4.4 Support with advanced requirements
The project required more than static pages. ChatGPT helped me understand how to extend the portfolio with an external API, filtering, sorting, validation, and error handling.
4.5 Improved documentation
ChatGPT helped me explain the technical decisions in a structured way. This made it easier to document what each file does and how the main features work.
5. Challenges and Limitations
5.1 Suggestions did not always match my project
Some suggestions used different file names, class names, or folder structures from the ones already used in my project. I had to compare the suggestions with my actual code and modify them before implementation.
5.2 AI does not automatically know the complete project
ChatGPT could not see the complete project structure unless I shared the relevant code, screenshots, or file names. When the provided context was incomplete, the suggested solution could be too general or could refer to an element that did not exist in my project.
5.3 Visual issues required browser testing
AI could suggest possible reasons for a layout problem, but it could not fully verify the final appearance without the browser result. For example, footer spacing and header alignment depended on the interaction between several CSS rules. I had to apply the changes and inspect the website myself.
5.4 Generated code required explanation
Some code suggestions could work technically but were not useful if I did not understand them. I therefore asked for explanations of functions and methods such as forEach(), filter(), sort(), fetch(), and preventDefault() before using them.
5.5 The first solution was not always the best solution
In some cases, the first suggestion solved part of the problem but created another layout issue. I had to test different options, compare the results, and choose the solution that best matched my design.
5.6 Maintaining originality
AI can provide common design and coding patterns. I had to ensure that the final visual direction remained based on my own Figma design, content, project choices, and personal portfolio identity.
6. Learning Outcomes
Through this project, I learned how to:
Plan a website visually before coding it.
Translate a Figma design into HTML and CSS.
Use semantic HTML to create a clearer page structure.
Organize a front-end project into separate files and folders.
Use reusable components for the header and footer.
Use CSS variables to control colors and maintain consistency.
Build responsive layouts using Grid, Flexbox, and media queries.
Generate project cards dynamically with JavaScript.
Filter and sort project data using JavaScript methods.
Connect a website to an external API.
Handle asynchronous operations using async and await.
Handle errors using try...catch and status checks.
Validate form inputs before submission.
Optimize images and improve page loading performance.
Use browser developer tools to inspect and debug problems.
Explain and document the technical decisions made in the project.
I also learned how to use AI more effectively by writing specific prompts. Providing screenshots, file names, code sections, and clear descriptions produced more useful suggestions than asking general questions.
7. Responsible Use and Modifications
I used AI within the permitted collaboration scope. I did not ask ChatGPT to generate the complete project from a few prompts, and I did not submit code that I could not explain.
The visual design, interactions, project content, layout decisions, and overall direction were created by me in Figma. ChatGPT supported the technical implementation and problem-solving process.
Before using any AI-generated suggestion, I reviewed it and considered whether it matched my project. I modified the suggestions to match:
My actual file structure.
My existing class names.
My selected colors and typography.
My project content.
My image paths.
My responsive layout.
The assignment requirements.
I verified the final work by:
Opening the website in the browser.
Comparing the result with the Figma design.
Testing navigation links.
Testing the header and footer on different pages.
Testing the theme switcher.
Testing project card rendering.
Testing project filtering and sorting.
Testing contact form validation.
Testing API error messages.
Testing the website at desktop, tablet, and mobile widths.
Checking the browser console for errors.
