import type { Meta, StoryObj } from '@storybook/react'

import { Slide } from './Slide'

const meta = {
  title: 'Animation/SlideLikeCurtain',
  component: Slide,
  args: {
    timeOut: 2000,
  },
} satisfies Meta<typeof Slide>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
