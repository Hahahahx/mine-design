/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import dts from "vite-plugin-dts";
import UnoCSS from "unocss/vite";
import {
  presetMini,
  presetUno,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import path from "path";
import pkg from "./package.json";

export default defineConfig({
  plugins: [
    solidPlugin(),
    dts({
      tsConfigFilePath: "tsconfig.build.json",
      insertTypesEntry: true,
      noEmitOnError: true,
      skipDiagnostics: false,
      logDiagnostics: true,
    }),
    UnoCSS({
      rules: [["btn", {}]],
      shortcuts: [
        {
          logo: "i-logos-solidjs-icon w-6em h-6em transform transition-800 hover:rotate-360",
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
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "index.mjs" : "index.cjs"),
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies),
        ...Object.keys(pkg.devDependencies),
        "solid-js",
        "solid-js/web",
        "solid-js/store",
      ],
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    transformMode: { web: [/\.[jt]sx?$/] },
    setupFiles: ["node_modules/@testing-library/jest-dom/extend-expect.js"],
    // otherwise, solid would be loaded twice:
    deps: { registerNodeLoader: true },
    // if you have few tests, try commenting one
    // or both out to improve performance:
    threads: false,
    isolate: false,
  },
});
