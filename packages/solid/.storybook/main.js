const { mergeConfig } = require("vite");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storybook-dark-mode",
  ],
  babel: async (options) => ({
    ...options,
    presets: ["@babel/preset-typescript", "solid"],
  }),
  viteFinal: async (config) => mergeConfig(config, {}),
  features: {
    storyStoreV7: true,
  },
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
