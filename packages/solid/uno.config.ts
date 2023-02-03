import { defineConfig } from "unocss/vite";
import {
  presetMini,
  presetUno,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
  presetTypography,
} from "unocss";
import type { Theme } from "unocss/preset-uno";
import presetTheme from "unocss-preset-theme";

function withOpacity(variableName: string) {
  return ({ opacityValue }: any) => {
    if (opacityValue) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default defineConfig<Theme>({
  rules: [],
  shortcuts: [
    {
      logo: "i-logos-solidjs-icon w-6em h-6em transform transition-800 hover:rotate-360",
    },
    {
      btn: "bg-primary",
    },
  ],
  presets: [
    presetTypography(),
    presetMini(),
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetTheme<Theme>({
      theme: {
        // Configure dark themes
        dark: {},
        // Configure compact themes
        compact: {},
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {},
});
