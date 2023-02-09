const colors = require("tailwindcss/colors");
const { indigo, slate } = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  defaultTheme: {
    extend: {
      colors: {
        primary: {
          dark: indigo[700],
          darker: indigo[800],
          light: indigo[500],
          lighter: indigo[400],
          DEFAULT: indigo[600],
          ...indigo,
        },
        text: slate[900],
        bkg: "white",
      },
      io: {
        height: "24px",
        padding: "0 10px 0 10px",
      },
      borderRadius: {
        DEFAULT: defaultTheme.borderRadius.md,
      },
    },
  },
  themes: [
    {
      name: "light",
      extend: {
        colors: {
          text: slate[900],
          bkg: "white",
        },
      },
    },
    {
      name: "dark",
      extend: {
        colors: {
          text: slate[50],
          bkg: "black",
        },
      },
    },
    {
      name: "compact",
      extend: {
        borderRadius: {
          DEFAULT: defaultTheme.borderRadius.sm,
        },
      },
    },
    {
      name: "io-small",
      extend: {
        io: {
          height: "20px",
          padding: "0 8px 0 8px",
        },
      },
    },
    {
      name: "io-normal",
      extend: {
        io: {
          height: "24px",
          padding: "0 10px 0 10px",
        },
      },
    },
    {
      name: "io-large",
      extend: {
        io: {
          height: "32px",
          padding: "0 12px 0 12px",
        },
      },
    },

    ...Object.keys(colors)
      .filter((k) => typeof colors[k] === "object")
      .map((key) => ({
        name: key,
        extend: {
          colors: {
            primary: {
              dark: colors[key][700],
              darker: colors[key][800],
              light: colors[key][500],
              lighter: colors[key][400],
              DEFAULT: colors[key][500],
              ...colors[key],
            },
          },
        },
      })),
  ],
};
