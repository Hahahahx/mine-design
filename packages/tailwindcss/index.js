// tailwind.config.js

const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    plugin(({ addUtilities, addBase, theme }) => {
      addBase({
        body: {
          backgroundColor: theme("colors.bkg"),
          color: theme("colors.text"),
        },
      });

      addUtilities({
        ".io-size": {
          height: theme("io.height"),
          padding: theme("io.padding"),
        },
      });
    }),
    // require("./components"),
    require("tailwindcss-themer")(require("./theme")),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
