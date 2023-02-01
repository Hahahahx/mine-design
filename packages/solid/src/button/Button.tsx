import type { ButtonProps } from "./type";

export default function Button(props: ButtonProps) {
  return (
    <button class='m-10' {...props}>
      {props.children}
    </button>
  );
}
