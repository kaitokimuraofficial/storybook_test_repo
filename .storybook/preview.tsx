import type { Preview } from '@storybook/react'
import DocumentationTemplate from './DocumentationTemplate.mdx'
import React from 'react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#f10' },
      ],
    },
    docs: {
      page: DocumentationTemplate,
      toc: {
        headingSelector: 'h1, h2, h3',
      },
    },
  },
  tags: [
    'autodocs', // https://storybook.js.org/docs/writing-docs/autodocs
  ],
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story, { parameters }) => {
      // Optional parameter to center the component in the Canvas.
      // More info: https://storybook.js.org/docs/configure/story-layout
      const { pageLayout } = parameters
      switch (pageLayout) {
        case 'page':
          return (
            // Your page layout is probably a little more complex than this ;)
            <div className="page-layout">
              <Story />
            </div>
          )
        case 'page-mobile':
          return (
            <div
              className="page-mobile-layout"
              style={{ backgroundColor: '#9b3a4a', margin: '10em' }}
            >
              <Story />
            </div>
          )
        default:
          // In the default case, don't apply a layout
          return <Story />
      }
    },
  ],
}

export default preview
