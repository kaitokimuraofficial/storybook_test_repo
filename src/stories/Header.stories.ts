import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Header } from './Header'

const meta = {
  title: 'Example/Header',
  component: Header,
  tags: ['dev'],
  parameters: {
    layout: 'fullscreen',
  },
  loaders: [
    async () => ({
      currentUser: await (
        await fetch('https://jsonplaceholder.typicode.com/users/1')
      ).json(),
    }),
  ],
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
}

export const LoggedOut: Story = {}
