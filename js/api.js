/* ==========================================================
   api.js — Design inspiration quote in the footer

   API: Quotable
   Searches for quotes related to design and creativity.

   Handles:
   - Loading state
   - Timeout
   - HTTP errors
   - Invalid API response
   - Session caching
   - Friendly error message
   ========================================================== */

const QUOTE_URL =
  "https://api.quotable.io/search/quotes?query=design&limit=20";

const QUOTE_TIMEOUT_MS = 8000;
const QUOTE_CACHE_KEY = "fb:design-quote";

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const quoteButton = document.getElementById("quote-refresh");

/**
 * Fetch design-related quotes from the API.
 */
async function fetchQuote() {
  const controller = new AbortController();

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, QUOTE_TIMEOUT_MS);

  try {
    const response = await fetch(QUOTE_URL, {
      signal: controller.signal
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      throw new Error("No design quotes found");
    }

    // Select a random quote from the returned results
    const randomQuote =
      data.results[Math.floor(Math.random() * data.results.length)];

    if (!randomQuote.content) {
      throw new Error("Unexpected response format");
    }

    return {
      text: randomQuote.content,
      author: randomQuote.author || "Unknown"
    };
  } finally {
    // Always stop the timeout
    clearTimeout(timeoutId);
  }
}

/**
 * Display the quote safely in the footer.
 * textContent prevents HTML injection.
 */
function showQuote(quote) {
  quoteText.textContent = `“${quote.text}”`;
  quoteAuthor.textContent = `— ${quote.author}`;
}

/**
 * Read the previously saved quote from this browser session.
 */
function readCachedQuote() {
  try {
    const cachedQuote = sessionStorage.getItem(QUOTE_CACHE_KEY);

    if (!cachedQuote) {
      return null;
    }

    return JSON.parse(cachedQuote);
  } catch (error) {
    console.warn("Could not read cached quote:", error);
    return null;
  }
}

/**
 * Save the current quote in sessionStorage.
 */
function cacheQuote(quote) {
  try {
    sessionStorage.setItem(
      QUOTE_CACHE_KEY,
      JSON.stringify(quote)
    );
  } catch (error) {
    console.warn("Could not save quote:", error);
  }
}

/**
 * Display a quote.
 *
 * If forceNew is false, the cached quote will be displayed.
 * If forceNew is true, a new quote will be requested.
 */
async function loadQuote(forceNew = false) {
  const cachedQuote = forceNew ? null : readCachedQuote();

  if (cachedQuote) {
    showQuote(cachedQuote);
    return;
  }

  quoteButton.disabled = true;
  quoteText.textContent = "Loading design inspiration…";
  quoteAuthor.textContent = "";

  try {
    const quote = await fetchQuote();

    showQuote(quote);
    cacheQuote(quote);
  } catch (error) {
    console.error("Quote request failed:", error);

    if (error.name === "AbortError") {
      quoteText.textContent =
        "The quote request took too long. Please try again.";
    } else {
      quoteText.textContent =
        "Couldn’t load design inspiration right now. Please try again.";
    }

    quoteAuthor.textContent = "";
  } finally {
    quoteButton.disabled = false;
  }
}

/**
 * Start the quote feature only if the required elements exist.
 */
if (quoteText && quoteAuthor && quoteButton) {
  quoteButton.addEventListener("click", () => {
    loadQuote(true);
  });

  loadQuote();
}