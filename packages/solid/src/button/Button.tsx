import { splitProps } from "solid-js";
import type { ButtonProps } from "./type";

export default function Button(props: ButtonProps) {
  const [local, others] = splitProps(props, ["variant", "class"]);

  const variant = local.variant ?? "default";

  return (
    <button class={` btn-default leading-none`} {...others}>
      {props.children}
    </button>
  );
}
