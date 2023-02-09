const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = plugin.withOptions(function () {
  return function ({ theme, matchComponents, e }) {
    matchComponents(
      {
        btn: (v) => {
          return {
            backgroundColor: theme("colors.primary.DEFAULT"),
            borderColor: theme("colors.primary.500"),
          };
        },
      },
      {
        values: {
          default: 1,
          fill: 2,
        },
      },
    );
    // addComponents({
    //   ".btn-default": {
    //     backgroundColor: theme("colors.primary.DEFAULT"),
    //   },
    // });
  };
});
