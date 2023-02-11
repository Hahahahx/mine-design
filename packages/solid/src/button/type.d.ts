import { JSX } from "solid-js";

export type ButtonProps = {
  variant?: "contained" | "text" | "outline";
} & JSX.IntrinsicElements["button"];
