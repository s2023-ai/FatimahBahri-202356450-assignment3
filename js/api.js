/* ==========================================================
   api.js — Random design inspiration quotes
   ========================================================== */

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
];

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const quoteButton = document.getElementById("quote-refresh");

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * DESIGN_QUOTES.length);
  return DESIGN_QUOTES[randomIndex];
}

function showQuote(quote) {
  quoteText.textContent = `“${quote.text}”`;
  quoteAuthor.textContent = `— ${quote.author}`;
}

function loadQuote() {
  if (!quoteText || !quoteAuthor || !quoteButton) {
    return;
  }

  showQuote(getRandomQuote());
}

if (quoteText && quoteAuthor && quoteButton) {
  quoteButton.addEventListener("click", loadQuote);

  // Load a quote when the page is first loaded  
  loadQuote();
}