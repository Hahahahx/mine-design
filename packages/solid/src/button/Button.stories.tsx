import Button from "./Button";
import { ButtonProps } from "./type";

const Template = (args: ButtonProps) => <Button {...args} />;

export const Primary = () => <Template>Button</Template>;

export const Disable = () => <Template disabled>Button</Template>;

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["default", "fill", "outline"],
      control: { type: "select" },
    },
    propertyB: {
      options: ["Another Item One", "Another Item Two", "Another Item Three"],
    },
  },
};
