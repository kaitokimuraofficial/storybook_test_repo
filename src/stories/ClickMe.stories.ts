import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/test'

import { ClickMe } from './ClickMe'

const meta = {
  component: ClickMe,
} satisfies Meta<typeof ClickMe>

export default meta
type Story = StoryObj<typeof ClickMe>

export const ExampleStory: Story = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    // Assigns canvas to the component root element
    const canvas = within(canvasElement)

    // Starts querying from the component's root element
    await userEvent.type(canvas.getByTestId('example-element'), 'something')
    await userEvent.click(canvas.getByRole('another-element'))
  },
}
