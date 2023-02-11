import { splitProps } from "solid-js";
import type { ButtonProps } from "./type";

export default function Button(props: ButtonProps) {
  const [local, others] = splitProps(props, ["variant", "class"]);

  let variant;

  switch (local.variant) {
    case "text":
      variant = "btn-text";
      break;
    case "outline":
      variant = "btn-outline";
      break;
    case "contained":
    default:
      variant = "btn-contained";
  }

  return (
    <button class={`${local.class ?? ""} ${variant}`} {...others}>
      {props.children}
    </button>
  );
}
