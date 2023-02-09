// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("@mine-design/tailwindcss")],
  // Toggle dark-mode based on data-mode="dark"
  darkMode: ["class"],
  theme: {
    extend: {},
  },
  plugins: [],
};
