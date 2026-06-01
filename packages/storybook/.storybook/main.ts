import type {StorybookConfig} from '@storybook/react-vite';
import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const getAbsolutePath = (value: string): any => dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
    framework: {
        name: getAbsolutePath('@storybook/react-vite'),
        options: {},
    },
    addons: [getAbsolutePath('@storybook/addon-docs')],
    features: {
        interactions: false,
        actions: false,
    },
    staticDirs: ['../public'],
};

export default config;
