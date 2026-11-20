/* ==========================================================
   <site-footer> — footer shared by every page
   Contains: inspiration quote (filled by api.js), visit timer
   (filled by main.js), links, copyright, back-to-top button.
   ========================================================== */

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();

    this.innerHTML = `
      <footer class="footer">
        <div class="footer-inner">
          <div class="footer-quote">
            <blockquote id="quote-text" aria-live="polite">Loading inspiration…</blockquote>
            <p class="quote-author" id="quote-author"></p>
            <button class="link-btn" id="quote-refresh" type="button">New quote</button>
          </div>

          <div class="footer-meta">
            <p>You’ve been here for <strong id="visit-timer">00:00</strong></p>
            <ul class="footer-links">
              <!-- TODO: replace with your real email and add Behance / LinkedIn links -->
              <li><a href="mailto:your-email@example.com">Email</a></li>
            </ul>
            <button class="btn" id="back-to-top" type="button">Back to Top ↑</button>
          </div>
        </div>
        <p class="footer-copy">© ${year} Fatimah Bahri. All designs are my own.</p>
      </footer>`;
  }
}

customElements.define("site-footer", SiteFooter);