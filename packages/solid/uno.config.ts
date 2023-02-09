import { defineConfig } from "unocss/vite";
import {
  presetMini,
  presetUno,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
  presetTypography,
  Preset,
  presetTagify,
} from "unocss";
import type { Theme } from "unocss/preset-uno";
import presetTheme from "unocss-preset-theme";
import colors from "tailwindcss/colors";

export default defineConfig<Theme>({
  rules: [
    // [
    //   "light",
    //   () => ({
    //     /* For rgb(255 115 179 / <alpha-value>) */
    //     "--color-primary": "255 115 179",
    //     /* For hsl(198deg 93% 60% / <alpha-value>) */
    //     "--color-primary": "198deg 93% 60%",
    //   }),
    // ],
  ],
  shortcuts: [
    {
      logo: "i-logos-solidjs-icon w-6em h-6em transform transition-800 hover:rotate-360",
    },
    {
      btnDefault:
        "bg-primary-100 text-white rounded-md text-base px-4 font-medium ring-2 ring-secondary-100",
    },
    // {
    //   layout: "bg-default text-word",
    // },
  ],
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons(),
    presetTypography(),
    presetMini(),
    presetTagify(),
    // presetTheme<Theme>({
    //   theme: {
    //     light: {
    //       colors: {
    //         primary: colors.indigo[500],
    //         secondary: colors.indigo[300],
    //         default: colors.white,
    //         word: colors.slate[900],
    //       },
    //     },
    //     // Configure dark themes
    //     dark: {
    //       colors: {
    //         primary: colors.blue[500],
    //         secondary: colors.blue[300],
    //         default: colors.black,
    //         word: colors.slate[100],
    //       },
    //     },
    //     // Configure compact themes
    //     compact: {},
    //   },
    // }) as Preset<Theme>,

    // {
    //   name: "theme",
    //   extendTheme(ori) {
    //     console.log(ori);
    //   },
    // },
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  preflights: [
    {
      getCSS: ({ theme }: any) => `
        * { 
          padding: 0;
          margin: 0;
        }

        :root {
          /* For rgb(255 115 179 / <alpha-value>) */
          --color-primary: 255 115 179;

          /* For hsl(198deg 93% 60% / <alpha-value>) */
          --color-secondary: 198deg 93% 60%;

          /* For rgba(255, 115, 179, <alpha-value>) */
          // --color-primary: 255, 115, 179;
        }


        ul,button,input{
          outline:none;
          border:none;
        }

        body{
          @apply layout;
        }
      `,
    },
  ],
  theme: {
    colors: {
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      // primary: colors.indigo[500],
      // secondary: colors.indigo[300],
      // default: colors.white,
      // word: colors.slate[900],
    },
  },
});
