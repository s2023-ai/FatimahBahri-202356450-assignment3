/* ==========================================================
   contact.js — contact form with step-by-step validation
   Rules:
   1. Name: at least 2 characters
   2. Email: must look like name@domain.ext
   3. Message: between 10 and 500 characters
   4. "Send" stays disabled until all three rules pass
   5. Only after a successful (simulated) send, the dialog opens
   ========================================================== */

const form = document.getElementById("contact-form");
const submitBtn = document.getElementById("contact-submit");
const successDialog = document.getElementById("success-dialog");
const counter = document.getElementById("message-count");

const MESSAGE_MIN = 10;
const MESSAGE_MAX = 500;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Each field: its input, error box, and a rule that returns an error text ("" = valid). */
const fields = {
  name: {
    input: document.getElementById("contact-name"),
    error: document.getElementById("contact-name-error"),
    check: (v) => (v.length < 2 ? "Please enter your name (at least 2 characters)." : ""),
  },
  email: {
    input: document.getElementById("contact-email"),
    error: document.getElementById("contact-email-error"),
    check: (v) => {
      if (!v) return "Please enter your email address.";
      if (!EMAIL_PATTERN.test(v)) return "That email doesn’t look right. Try name@example.com.";
      return "";
    },
  },
  message: {
    input: document.getElementById("contact-message"),
    error: document.getElementById("contact-message-error"),
    check: (v) =>
      v.length < MESSAGE_MIN ? `Please write at least ${MESSAGE_MIN} characters.` : "",
  },
};

/** Fields the visitor has already left; errors only show for these. */
const touched = new Set();

/** Validate one field. Optionally show its error. Returns true if valid. */
function validateField(key, showError) {
  const { input, error, check } = fields[key];
  const message = check(input.value.trim());

  if (showError) {
    error.textContent = message;
    input.setAttribute("aria-invalid", message ? "true" : "false");
  }
  return message === "";
}

/** Enable "Send" only when every field is valid (without showing errors yet). */
function updateSubmitState() {
  submitBtn.disabled = !Object.keys(fields).every((key) => validateField(key, false));
}

// Live feedback: errors appear after the visitor leaves a field,
// then update as they type to fix it.
Object.entries(fields).forEach(([key, { input }]) => {
  input.addEventListener("blur", () => {
    touched.add(key);
    validateField(key, true);
  });

  input.addEventListener("input", () => {
    if (touched.has(key)) validateField(key, true);
    if (key === "message") counter.textContent = `${input.value.length}/${MESSAGE_MAX}`;
    updateSubmitState();
  });
});

/**
 * Simulated sending (the site has no backend). To send for real, replace this
 * with a fetch() to a form service such as Formspree.
 */
function sendMessage() {
  return new Promise((resolve) => setTimeout(resolve, 800));
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Step 1: validate everything and show all errors
  const results = Object.keys(fields).map((key) => {
    touched.add(key);
    return [key, validateField(key, true)];
  });
  const firstInvalid = results.find(([, ok]) => !ok);
  if (firstInvalid) {
    fields[firstInvalid[0]].input.focus();
    return;
  }

  // Step 2: "send", then confirm
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending…";
  await sendMessage();

  // Step 3: reset the form and open the confirmation dialog
  form.reset();
  touched.clear();
  Object.values(fields).forEach(({ input, error }) => {
    error.textContent = "";
    input.removeAttribute("aria-invalid");
  });
  counter.textContent = `0/${MESSAGE_MAX}`;
  fillSavedName();
  submitBtn.textContent = "Send";
  updateSubmitState();
  successDialog.showModal();
});

// Close the dialog with its button or by clicking the dark backdrop (Esc works by default)
successDialog.querySelector(".dialog-close").addEventListener("click", () => successDialog.close());
successDialog.addEventListener("click", (event) => {
  if (event.target === successDialog) successDialog.close();
});

/** If the visitor already told us their name in the header, pre-fill it. */
function fillSavedName() {
  const saved = State.get("visitorName");
  if (saved) fields.name.input.value = saved;
}

fillSavedName();
updateSubmitState();