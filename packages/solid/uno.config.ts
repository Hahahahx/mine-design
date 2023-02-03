import { defineConfig } from "unocss/vite";
import {
  presetMini,
  presetUno,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  rules: [],
  shortcuts: [
    {
      logo: "i-logos-solidjs-icon w-6em h-6em transform transition-800 hover:rotate-360",
    },
    {
      btn: "bg-rose",
    },
  ],
  presets: [
    presetMini(),
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      primary: "var(--primary-color)",
    },
    backgroundColors: {
      primary: "var(--primary-bg)",
    },
    textColors: {
      primary: "var(--primary-text)",
    },
  },
});
