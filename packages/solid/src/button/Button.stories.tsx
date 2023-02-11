import Button from "./Button";
import { ButtonProps } from "./type";

const Template = (args: ButtonProps) => <Button {...args} />;

export const Contained = () => <Template variant='contained'>Button</Template>;
export const Text = () => <Template variant='text'>Button</Template>;
export const Outline = () => <Template variant='outline'>Button</Template>;
export const Disable = () => <Template disabled>Button</Template>;

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      default: "contained",
      options: ["contained", "text", "outline"],
      control: { type: "select" },
    },
    propertyB: {
      options: ["Another Item One", "Another Item Two", "Another Item Three"],
    },
  },
};
