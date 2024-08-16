import type { StorybookConfig } from '@storybook/react-vite'

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

  docs: {
    //👇 See the table below for the list of supported options
    defaultName: 'Hitation',
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
}
export default config
