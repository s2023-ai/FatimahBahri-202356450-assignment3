/* ==========================================================
   state.js — one place to read/write saved data (localStorage)
   Keys used: theme, visitorName (later: filter, sort)
   ========================================================== */

const State = {
  PREFIX: "fb:",

  /** Read a saved value. Returns `fallback` if missing or storage is blocked. */
  get(key, fallback = null) {
    try {
      const raw = localStorage.getItem(this.PREFIX + key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch {
      return fallback;
    }
  },

  /** Save a value (silently ignored if storage is unavailable). */
  set(key, value) {
    try {
      localStorage.setItem(this.PREFIX + key, JSON.stringify(value));
    } catch {
      /* private mode or storage full: the app still works, just no memory */
    }
  },

  /** Delete a saved value. */
  remove(key) {
    try {
      localStorage.removeItem(this.PREFIX + key);
    } catch {
      /* ignore */
    }
  },
};