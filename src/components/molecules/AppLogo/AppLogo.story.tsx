import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AppLogo } from "./AppLogo";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Logo",
  component: AppLogo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    spin: { control: "boolean" },
  },
} as ComponentMeta<typeof AppLogo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppLogo> = (args) => (
  <AppLogo {...args} />
);

export const LogoSpin = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LogoSpin.args = {
  spin: true,
};

export const LogoStatic = Template.bind({});
LogoStatic.args = {
  spin: false,
};
