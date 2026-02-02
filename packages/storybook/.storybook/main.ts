import {fileURLToPath} from 'node:url';
import {dirname} from 'node:path';
import type {StorybookConfig} from '@storybook/react-vite';

const getAbsolutePath = (value: string): any => dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(ts|tsx)'],
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
