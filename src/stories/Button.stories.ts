import type { Meta, StoryObj } from "@storybook/react";

import Button from "components/@elements/Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    btnType: "default",
    btnSize: "md",
    children: "Button",
  },
};

export const Primary: Story = {
  args: {
    btnType: "primary",
    btnSize: "md",
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    btnType: "ghost",
    btnSize: "md",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    btnType: "default",
    btnSize: "lg",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    btnType: "default",
    btnSize: "sm",
    children: "Button",
  },
};
