/* ==========================================================
   api.js — Random design inspiration quotes
   ========================================================== */

   const QUOTE_URL =
  "https://dummyjson.com/quotes/random";

/* Design quotes from https://www.designbetter.co/design-quotes 
  const DESIGN_QUOTES = [
  {
    text: "Design is intelligence made visible.",
    author: "Alina Wheeler"
  },
  {
    text: "Good design is as little design as possible.",
    author: "Dieter Rams"
  },
  {
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs"
  },
  {
    text: "Design creates culture. Culture shapes values. Values determine the future.",
    author: "Robert L. Peters"
  },
  {
    text: "Everything is designed. Few things are designed well.",
    author: "Brian Reed"
  },
  {
    text: "Design is thinking made visual.",
    author: "Saul Bass"
  },
  {
    text: "The details are not the details. They make the design.",
    author: "Charles Eames"
  },
  {
    text: "Design is a solution to a problem.",
    author: "John Maeda"
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci"
  },
  {
    text: "Design is the intermediary between information and understanding.",
    author: "Hans Hofmann"
  }
];*/

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const quoteButton = document.getElementById("quote-refresh");

/* ----------------------------------------------------------
   Fetches a quote from an external API.
   Includes timeout, HTTP error checking, and data validation.
   ---------------------------------------------------------- */
async function fetchQuote() {
  const controller = new AbortController();

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, 8000);

  try {
    const response = await fetch(QUOTE_URL, {
      signal: controller.signal
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.quote || !data.author) {
      throw new Error("Invalid quote data");
    }

    return {
      text: data.quote,
      author: data.author
    };
  } finally {
    clearTimeout(timeoutId);
  }
}

/* ----------------------------------------------------------
   Displays the quote safely using textContent.
   ---------------------------------------------------------- */
function showQuote(quote) {
  quoteText.textContent = `“${quote.text}”`;
  quoteAuthor.textContent = `— ${quote.author}`;
}

/* ----------------------------------------------------------
   Loads the quote when the page opens or when the visitor
   clicks the New Quote button.
   ---------------------------------------------------------- */
async function loadQuote() {
  if (!quoteText || !quoteAuthor || !quoteButton) {
    return;
  }

  quoteButton.disabled = true;
  quoteText.textContent = "Loading inspiration…";
  quoteAuthor.textContent = "";

  try {
    const quote = await fetchQuote();

    showQuote(quote);
  } catch (error) {
    console.error("Quote request failed:", error);

    if (error.name === "AbortError") {
      quoteText.textContent =
        "The request took too long. Please try again.";
    } else {
      quoteText.textContent =
        "Could not load inspiration right now. Please try again.";
    }

    quoteAuthor.textContent = "";
  } finally {
    quoteButton.disabled = false;
  }
}

/* ----------------------------------------------------------
   Connects the button to the API request and loads the first
   quote automatically.
   ---------------------------------------------------------- */
if (quoteText && quoteAuthor && quoteButton) {
  quoteButton.addEventListener("click", loadQuote);
  loadQuote();
}