/* ==========================================================
   <site-header> — navbar shared by every page
   Contains: logo, nav links, visitor greeting slot, theme toggle.
   Behaviour (theme + greeting) is wired up in main.js.
   ========================================================== */

class SiteHeader extends HTMLElement {
  connectedCallback() {
    // Which page are we on? Used to highlight the active link.
    const page = location.pathname.split("/").pop() || "index.html";

    const link = (href, label) =>
      `<li><a href="${href}"${page === href ? ' aria-current="page"' : ""}>${label}</a></li>`;

    this.innerHTML = `
      <nav class="navbar" aria-label="Main navigation">
        <a href="index.html" class="logo" aria-label="Fatimah Bahri, home">FB</a>

        <div class="nav-right">
          <div class="visitor" id="visitor"></div>

          <ul class="nav-links">
            ${link("about.html", "About")}
            ${link("projects.html", "My Works")}
            <li><a href="index.html#contact">Contact</a></li>
          </ul>

          <button class="theme-toggle" id="theme-toggle" type="button"
                  aria-label="Switch to dark mode"></button>
        </div>
      </nav>`;
  }
}

customElements.define("site-header", SiteHeader);
