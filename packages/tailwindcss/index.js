// tailwind.config.js

const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    plugin(({ addUtilities, addBase, theme }) => {
      addBase({
        body: {
          backgroundColor: theme("colors.bkg.primary"),
          color: theme("colors.text"),
        },
      });

      addUtilities({
        ".io-size": {
          height: theme("io.height"),
          padding: theme("io.padding"),
        },
        ".paper-blur": {
          "--tw-bg-opacity": theme("paper.opacity"),
          backdropFilter: theme("paper.blur"),
          padding: theme("paper.padding"),
        },
      });
    }),
    // require("./components"),
    require("tailwindcss-themer")(require("./theme")),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
