import { themes } from "@storybook/theming";
import { createEffect } from "solid-js";
// import "uno.css";
import { render } from "solid-js/web";

let disposeStory;
export const DEFAULT_THEME = "light";

// SolidJS decorators
export const decorators = [
  (Story, context) => {
    const { theme } = context.globals;
    if (disposeStory) {
      disposeStory();
    }
    const root = document.getElementById("storybook-root");
    const solid = document.createElement("div");
    // solid.classList.add("dark");

    createEffect(() => {
      const htmlTag = document.documentElement;

      // Set the "data-mode" attribute on the iFrame html tag
      htmlTag.setAttribute("data-mode", theme || DEFAULT_THEME);
    });

    solid.setAttribute("id", "solid-root");
    root.appendChild(solid);
    disposeStory = render(Story, solid);
    return solid;
  },
];

// .storybook/preview.js
export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    toolbar: {
      icon: "paintbrush",
      // Array of plain string values or MenuItem shape
      items: [
        { value: "light", title: "Light", left: "🌞" },
        { value: "dark", title: "Dark", left: "🌛" },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

export const parameters = {
  // backgrounds: { disable: true },
  actions: { argTypesRegex: "^on[A-Z].*" },
  decorators,
  options: {
    storySort: {
      order: [
        "General",
        "Layout",
        "Data entry",
        "Data display",
        "Navigation",
        "Feedback",
        "Overlay",
      ],
    },
  },
  // darkMode: {
  //   dark: { ...themes.dark, appBg: "#1c1c1c", appContentBg: "#151718" },
  //   light: { ...themes.normal, appBg: "#f9fafb", appContentBg: "#ffffff" },
  //   com: { ...themes.normal, appBg: "#f9fafb", appContentBg: "#ffffff" },
  // },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
