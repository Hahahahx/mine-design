import Layout from "./Layout";
import { LayoutProps } from "./type";

const Template = (args: LayoutProps) => <Layout {...args} />;

export const Primary = () => (
  <Template as='main' class=' w-screen h-screen' theme='light'>
    light
    <Template as='section' class='w-[500px] h-[500px]' theme='dark'>
      dark
      <Template as='div' class='w-[200px] h-[200px]' theme='light'>
        light
      </Template>
      <Template as='div' class='w-[200px] h-[200px]' theme='compact'>
        light
      </Template>
    </Template>
  </Template>
);

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
