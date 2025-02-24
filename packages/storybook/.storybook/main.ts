import type {StorybookConfig} from '@storybook/react-vite';

import {join, dirname} from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
    return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(ts|tsx)'],
    addons: [getAbsolutePath('@storybook/addon-essentials'), getAbsolutePath('@storybook/addon-interactions')],
    typescript: {
        // Overrides the default Typescript configuration to allow multi-package components to be documented via Autodocs.
        reactDocgen: 'react-docgen-typescript',
        check: false,
    },
    framework: {
        name: getAbsolutePath('@storybook/react-vite'),
        options: {},
    },
    features: {},
};
export default config;
