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
} from "unocss";
import type { Theme } from "unocss/preset-uno";
import presetTheme from "unocss-preset-theme";
import colors from "tailwindcss/colors";

export default defineConfig<Theme>({
  rules: [],
  shortcuts: [
    {
      logo: "i-logos-solidjs-icon w-6em h-6em transform transition-800 hover:rotate-360",
    },
    {
      "btn-default":
        "bg-primary text-white rounded-md text-base px-4 font-medium ring-2 ring-secondary",
    },
  ],
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons(),
    presetTypography(),
    presetMini(),
    presetTheme<Theme>({
      theme: {
        // Configure dark themes
        dark: {
          colors: {
            primary: colors.blue[500],
            secondary: colors.blue[300],
            text: { main: colors.slate[100] },
            // textPrimary: colors.slate[900],
          },
        },
        // Configure compact themes
        compact: {},
      },
    }) as Preset<Theme>,
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  preflights: [
    {
      getCSS: ({ theme }: any) => `
        * { 
          padding: 0;
          margin: 0;
          color:${theme.colors?.text.main};
        }

        ul,button,input{
          outline:none;
          border:none;
        }
      `,
    },
  ],
  theme: {
    colors: {
      primary: colors.indigo[500],
      secondary: colors.indigo[300],
      text: { main: colors.slate[900] },
      // textPrimary: colors.slate[900],
    },
  },
});
