import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ margin: '6em' }}>
        <div style={{ margin: '3em', color: 'blue' }}>
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    label: {
      control: 'text',
      description: 'Overwritten description',
    },
    size: {
      control: {
        type: 'number',
        min: 0,
        max: 100,
        step: 10,
      },
    },
  },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
  parameters: {
    pageLayout: 'page-mobile',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
}
