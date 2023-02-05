import Layout from "./Layout";
import { LayoutProps } from "./type";

const Template = (args: LayoutProps) => <Layout {...args} />;

export const Primary = () => <Template as='main'>Button</Template>;

export default {
  title: "Layout",
  component: Layout,
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
