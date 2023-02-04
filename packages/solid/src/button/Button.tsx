import { splitProps } from "solid-js";
import type { ButtonProps } from "./type";

export default function Button(props: ButtonProps) {
  const [local, others] = splitProps(props, ["variant", "class"]);

  local.class = `btn-${local.variant ?? "default"} ${local.class ?? ""}`;

  return (
    <button class={local.class} {...others}>
      {props.children}
    </button>
  );
}
