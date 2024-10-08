import type { Meta, StoryObj } from '@storybook/react'

import { List } from './List'
import { ListItem } from './ListItem'
import { Selected, Unselected } from './ListItem.stories'

const meta: Meta<typeof List> = {
  component: List,
}

export default meta
type Story = StoryObj<typeof List>

export const ManyItems: Story = {
  render: (args) => (
    <List {...args}>
      <ListItem {...Selected.args} />
      <ListItem {...Unselected.args} />
      <ListItem {...Unselected.args} />
    </List>
  ),
}
