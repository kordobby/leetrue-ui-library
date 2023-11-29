import type { Meta, StoryObj } from "@storybook/react";
import { InputSample } from "./Input";

const meta = {
  title: "Example/Input",
  component: InputSample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof InputSample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const LabeledInput: Story = {
  args: {
    label: "label",
  },
};

export const SmallInput: Story = {
  args: {
    inputSize: "sm",
  },
};

export const LargeInput: Story = {
  args: {
    inputSize: "lg",
  },
};

export const ErrorInput: Story = {
  args: {
    error: true,
    bottomText: "잘못된 형식입니다.",
  },
};
