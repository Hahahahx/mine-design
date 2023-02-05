import { splitProps } from "solid-js";
import type { ButtonProps } from "./type";

export default function Button(props: ButtonProps) {
  const [local, others] = splitProps(props, ["variant", "class"]);

  switch (local.variant ?? "default") {
    case "default":
      local.class += " btn-default";
      break;
    case "fill":
      local.class += " btn-fill";
      break;
    case "outline":
      local.class += " btn-outline";
      break;
  }

  return (
    <button class={local.class} {...others}>
      {props.children}
    </button>
  );
}
