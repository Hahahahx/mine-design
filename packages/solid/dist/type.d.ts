import { JSX } from "solid-js";

export type ButtonProps = {
  variant?: "default" | "fill" | "outline";
} & JSX.IntrinsicElements["button"];
