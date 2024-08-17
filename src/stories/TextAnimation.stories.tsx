import type { Meta, StoryObj } from '@storybook/react'

import { TextAnimation } from './TextAnimation'

const meta = {
  title: 'Animation/TextAnimation',
  component: TextAnimation,
  tags: ['autodocs'],
  args: {
    timeOut: 1500,
    str: 'TEXT ANIMATION',
    gap: 0.06,
  },
} satisfies Meta<typeof TextAnimation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const MyName: Story = {
  args: {
    str: 'Kaito Kimura',
  },
}

export const SpeedUp: Story = {
  args: {
    timeOut: 1000,
  },
}
