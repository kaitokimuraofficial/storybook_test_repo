import type { Meta, StoryObj } from '@storybook/react'

import { Slide } from './Slide'

const meta = {
  title: 'Animation/SlideAllCharacters',
  component: Slide,
  args: {
    delay: 0.06,
    label: 'TEXT ANIMATION',
    timeOut: 1500,
  },
} satisfies Meta<typeof Slide>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const MyName: Story = {
  args: {
    label: 'Kaito Kimura',
  },
}

export const SpeedUp: Story = {
  args: {
    timeOut: 1000,
  },
}
