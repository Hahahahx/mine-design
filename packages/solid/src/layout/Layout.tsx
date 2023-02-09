import { splitProps } from "solid-js";
import { LayoutProps } from "./type";

export default function Layout(props: LayoutProps) {
  const [local, others] = splitProps(props, ["as"]);

  others.class += ` ${props.theme ?? "light"} layout`;

  switch (local.as) {
    case "section":
      return <section {...others} />;
    case "main":
      return <main {...others} />;
    case "div":
    default:
      return <div {...others} />;
  }
}
