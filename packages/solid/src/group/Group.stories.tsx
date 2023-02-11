import Button from "../button";
import Group from "./Group";

const Template = (args: any) => <Group {...args} />;

export const Primary = () => (
  <Template>
    <Button>test</Button>
    <Button>22</Button>
  </Template>
);

export default {
  title: "Group",
  component: Group,
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
