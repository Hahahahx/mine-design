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
        bkg: {
          primary: "white",
          secondary: slate[100],
        },
      },
      io: {
        height: "26px",
        padding: "0 16px 0 16px",
      },
      borderRadius: {
        DEFAULT: defaultTheme.borderRadius.md,
      },
      paper: {
        padding: "12px",
        blur: defaultTheme.blur[0],
        opacity: 1,
      },
    },
  },
  themes: [
    {
      name: "light",
      extend: {
        colors: {
          text: slate[900],
          bkg: {
            primary: "white",
            secondary: slate[100],
          },
        },
      },
    },
    {
      name: "dark",
      extend: {
        colors: {
          text: slate[50],
          bkg: {
            primary: "black",
            secondary: slate[900],
          },
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
      name: "io-smaller",
      extend: {
        io: {
          height: "18px",
          padding: "0 12px 0 12px",
        },
      },
    },
    {
      name: "io-small",
      extend: {
        io: {
          height: "22px",
          padding: "0 14px 0 14px",
        },
      },
    },
    {
      name: "io-normal",
      extend: {
        io: {
          height: "26px",
          padding: "0 16px 0 16px",
        },
      },
    },
    {
      name: "io-large",
      extend: {
        io: {
          height: "30px",
          padding: "0 18px 0 18px",
        },
      },
    },
    {
      name: "io-larger",
      extend: {
        io: {
          height: "34px",
          padding: "0 20px 0 20px",
        },
      },
    },
    {
      name: "component-blur",
      extend: {
        paper: {
          blur: defaultTheme.blur.md,
          opacity: 0.5,
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
