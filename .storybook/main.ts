import type { StorybookConfig } from '@storybook/nextjs';
const path = require('path');
const rootPath = path.resolve(__dirname, '../src/');

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },

  webpackFinal: async (config, { configType }) => {
    if (config.resolve !== undefined && config.resolve.alias !== undefined) {
      config.resolve.alias['@'] = rootPath;
    }
    return config;
  },
};
export default config;
