import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-measure", // 追加
    "@storybook/addon-outline", // 追加
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {
    //👇 See the table below for the list of supported options
    defaultName: "Hitation",
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;
