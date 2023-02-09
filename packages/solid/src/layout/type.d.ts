import { JSX } from "solid-js";

export type LayoutProps<T = "div" | "section" | "main"> = {
  as: T;
  theme: "light" | "dark" | "compact";
} & JSX.IntrinsicElements[T];
