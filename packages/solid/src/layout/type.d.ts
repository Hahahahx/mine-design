import { JSX } from "solid-js";

export type LayoutProps<T = "div" | "section" | "main"> = {
  as: T;
} & JSX.IntrinsicElements[T];
