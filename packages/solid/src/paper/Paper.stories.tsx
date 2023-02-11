import Button from "../button";
import Paper from "./Paper";

const Template = (args: any) => <Paper {...args} />;

export const Primary = () => (
  <Template>
    <Button>test</Button>
    <Button>22</Button>
  </Template>
);

export default {
  title: "Paper",
  component: Paper,
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
