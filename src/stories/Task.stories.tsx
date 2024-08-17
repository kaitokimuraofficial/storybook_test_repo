import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Task } from './Task'

const meta: Meta<typeof Task> = {
  component: Task,
  title: 'Task',
  excludeStories: /.*Data$/,
  args: {
    task: {
      id: 1,
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
    onArchiveTask: fn(),
    onPinTask: fn(),
  },
}

export default meta
type Story = StoryObj<typeof Task>

export const Inbox: Story = {
  args: {
    task: {
      id: 1,
      title: 'Inbox Task',
      state: 'TASK_INBOX',
    },
  },
}

export const Pinned: Story = {
  args: {
    task: {
      id: 2,
      title: 'Pinned Task',
      state: 'TASK_PINNED',
    },
  },
}

export const Archived: Story = {
  args: {
    task: {
      id: 1,
      title: 'Archived Task',
      state: 'TASK_ARCHIVED',
    },
  },
}
