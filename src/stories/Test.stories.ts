import type { Meta, StoryObj } from '@storybook/react'

import { userEvent, within } from '@storybook/test'

import { Test } from './Test'

const meta: Meta<typeof Test> = {
  component: Test,
}

export default meta
type Story = StoryObj<typeof Test>

/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const FirstStory: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.type(canvas.getByTestId('an-element'), 'example-value')
  },
}

export const SecondStory: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.type(canvas.getByTestId('other-element'), 'another value')
  },
}

export const CombinedStories: Story = {
  play: async ({ context, canvasElement }) => {
    const canvas = within(canvasElement)

    // Runs the FirstStory and Second story play function before running this story's play function
    if (FirstStory.play) {
      await FirstStory.play(context)
    }
    if (SecondStory.play) {
      await SecondStory.play(context)
    }
    await userEvent.type(canvas.getByTestId('another-element'), 'random value')
  },
}
