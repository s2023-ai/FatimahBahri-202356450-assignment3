/* ==========================================================
   main.js — behaviour shared by every page
   1. Theme toggle (light/dark, remembered)
   2. Visitor greeting (name remembered)
   Must load AFTER state.js and the components.
   ========================================================== */

/* ---------- 1. Theme ---------- */
const themeBtn = document.getElementById("theme-toggle");

/** Apply a theme to the page, update the button, and save the choice. */
function applyTheme(theme, save = true) {
  document.documentElement.dataset.theme = theme;
  if (save) State.set("theme", theme);

  const isDark = theme === "dark";
  themeBtn.textContent = isDark ? "☀️" : "🌙";
  themeBtn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}

// The inline script in <head> already set data-theme before first paint;
// here we only sync the button with it.
applyTheme(document.documentElement.dataset.theme || "light", false);

themeBtn.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
});

/* ---------- 2. Visitor greeting ---------- */
const visitorBox = document.getElementById("visitor");
const MAX_NAME_LENGTH = 20;

/** Show "Hello, name · change" when a name is saved, otherwise the input form. */
function renderVisitor() {
  const name = State.get("visitorName");
  visitorBox.replaceChildren(); // clear previous content

  if (name) {
    const hello = document.createElement("span");
    hello.textContent = `Hello, ${name}`; // textContent = safe against HTML injection

    const change = document.createElement("button");
    change.type = "button";
    change.className = "link-btn";
    change.textContent = "change";
    change.addEventListener("click", () => {
      State.remove("visitorName");
      renderVisitor();
      visitorBox.querySelector("input").focus();
    });

    visitorBox.append(hello, change);
    return;
  }

  const form = document.createElement("form");
  form.className = "visitor";
  form.innerHTML = `
    <label class="visually-hidden" for="visitor-name">Your name</label>
    <input id="visitor-name" type="text" maxlength="${MAX_NAME_LENGTH}"
           placeholder="Your name" autocomplete="given-name">
    <button class="btn" type="submit">Save</button>`;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = form.querySelector("input").value.trim();
    if (!value) return; // ignore empty names
    State.set("visitorName", value);
    renderVisitor();
  });

  visitorBox.append(form);
}

renderVisitor();
/* ---------- 3. Back to top ---------- */

const backToTopButton = document.getElementById("back-to-top");

if (backToTopButton) {
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}