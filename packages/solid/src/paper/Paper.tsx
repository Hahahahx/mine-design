import { PaperProps } from "./type";

export default function Paper(props: PaperProps) {
  return <div class='paper-blur paper '>{props.children}</div>;
}
