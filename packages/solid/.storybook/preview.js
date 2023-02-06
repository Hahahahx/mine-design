import { themes } from "@storybook/theming";
import "uno.css";
import { render } from "solid-js/web";

let disposeStory;

// SolidJS decorators
export const decorators = [
  (Story) => {
    if (disposeStory) {
      disposeStory();
    }
    const root = document.getElementById("storybook-root");
    const solid = document.createElement("div");
    // solid.classList.add("dark");

    solid.setAttribute("id", "solid-root");
    root.appendChild(solid);
    disposeStory = render(Story, solid);
    return solid;
  },
];

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
  darkMode: {
    dark: { ...themes.dark, appBg: "#1c1c1c", appContentBg: "#151718" },
    light: { ...themes.normal, appBg: "#f9fafb", appContentBg: "#ffffff" },
    com: { ...themes.normal, appBg: "#f9fafb", appContentBg: "#ffffff" },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
