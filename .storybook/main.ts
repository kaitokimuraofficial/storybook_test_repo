import type { StorybookConfig } from '@storybook/react-vite'

// https://storybook.js.org/docs/configure
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-measure',
    '@storybook/addon-onboarding',
    '@storybook/addon-outline',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // https://storybook.js.org/docs/writing-docs/autodocs
  docs: {
    defaultName: 'Documentation',
  },

  // https://storybook.js.org/docs/configure/integration/typescript
  typescript: {
    reactDocgen: 'react-docgen-typescript', // https://storybook.js.org/docs/api/main-config/main-config-typescript#reactdocgen
  },
}
export default config
