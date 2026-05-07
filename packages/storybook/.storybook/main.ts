import type {StorybookConfig} from '@storybook/react-vite';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const getAbsolutePath = (value: string): any => dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
const configDir = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
    framework: {
        name: getAbsolutePath('@storybook/react-vite'),
        options: {},
    },
    addons: [
        getAbsolutePath('@storybook/addon-docs'),
        getAbsolutePath('@storybook/addon-mcp'),
        join(configDir, 'mcp-manifest-addon'),
    ],
    features: {
        interactions: false,
        actions: false,
    },
    staticDirs: ['../public'],
    typescript: {
        reactDocgen: 'react-docgen-typescript',
    },
};

export default config;
