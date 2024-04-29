/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      gothic: "Zen Kaku Gothic New",
    },
    extend: {
      colors: {
        primary: "#02AC66",
        js: "#F0DB4F",
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};
