/* ==========================================================
   api.js — "inspiration" quote in the footer
   API: https://dummyjson.com/quotes/random (free, no key)
   Handles: loading state, timeout, HTTP errors, bad data,
   and shows a friendly message if anything fails.
   ========================================================== */

const QUOTE_URL = "https://dummyjson.com/quotes/random";
const QUOTE_TIMEOUT_MS = 8000;
const QUOTE_CACHE_KEY = "fb:quote";

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const quoteButton = document.getElementById("quote-refresh");

/** Fetch one random quote. Throws on timeout, HTTP error, or unexpected data. */
async function fetchQuote() {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), QUOTE_TIMEOUT_MS);

  try {
    const response = await fetch(QUOTE_URL, { signal: controller.signal });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    if (!data.quote) throw new Error("Unexpected response format");

    return { text: data.quote, author: data.author || "Unknown" };
  } finally {
    clearTimeout(timeoutId); // always stop the timer
  }
}

/** Write a quote into the footer (textContent keeps it safe from HTML injection). */
function showQuote(quote) {
  quoteText.textContent = `“${quote.text}”`;
  quoteAuthor.textContent = `— ${quote.author}`;
}

/** Quote saved earlier in this browser tab, so every page shows the same one. */
function readCachedQuote() {
  try {
    return JSON.parse(sessionStorage.getItem(QUOTE_CACHE_KEY));
  } catch {
    return null;
  }
}

function cacheQuote(quote) {
  try {
    sessionStorage.setItem(QUOTE_CACHE_KEY, JSON.stringify(quote));
  } catch {
    /* storage blocked: not important */
  }
}

/**
 * Show a quote. Uses the cached one unless `forceNew` is true
 * (when the visitor presses "New quote").
 */
async function loadQuote(forceNew = false) {
  const cached = forceNew ? null : readCachedQuote();
  if (cached) {
    showQuote(cached);
    return;
  }

  quoteButton.disabled = true;
  quoteText.textContent = "Loading inspiration…";
  quoteAuthor.textContent = "";

  try {
    const quote = await fetchQuote();
    showQuote(quote);
    cacheQuote(quote);
  } catch (error) {
    console.error("Quote request failed:", error);
    quoteText.textContent =
      "Couldn’t load a quote right now. Check your connection and press “New quote” to try again.";
  } finally {
    quoteButton.disabled = false;
  }
}

if (quoteText && quoteButton) {
  quoteButton.addEventListener("click", () => loadQuote(true));
  loadQuote();
}