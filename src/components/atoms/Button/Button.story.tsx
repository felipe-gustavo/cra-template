import { ComponentMeta, Story } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

type InputPropOverrides = {
  text: string;
};

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    text: {
      control: "text",
      defaultValue: "button text",
    },
    type: {
      control: "select",
      options: ["primary", "secondary"],
      defaultValue: "primary",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps & InputPropOverrides> = ({
  // eslint-disable-next-line react/prop-types
  text,
  ...args
}) => <Button {...args}>{text}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
};
