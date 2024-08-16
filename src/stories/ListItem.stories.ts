import type { Meta, StoryObj } from "@storybook/react";
import { ListItem } from "./ListItem";

const meta: Meta<typeof ListItem> = {
  component: ListItem,
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Selected: Story = {
  args: {
    label: "Selected Item",
    isSelected: true,
  },
};

export const Unselected: Story = {
  args: {
    label: "Unselected Item",
    isSelected: false,
  },
};
