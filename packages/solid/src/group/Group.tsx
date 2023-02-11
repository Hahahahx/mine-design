import { GroupProps } from "./type";

export default function Group(props: GroupProps) {
  return <div class='io-group group '>{props.children}</div>;
}
