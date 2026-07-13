import './styles/reset.css';

import '@mantine/core/styles.layer.css';
import '@mantine/dates/styles.layer.css';
import '@mantine/notifications/styles.layer.css';

import type {Preview} from '@storybook/react-vite';
import {backgroundOptions, prefersDark} from './backgroundOptions.js';
import {useColorScheme} from './decorators/useColorScheme.js';
import {themes, withTheme} from './decorators/withTheme.js';
import {ThemedDocsContainer} from './ThemedDocsContainer.js';

const preview: Preview = {
    globalTypes: {
        primaryColor: {
            description: "Primary color applied to Mantine's theme",
            toolbar: {
                title: 'Primary Color',
                icon: 'paintbrush',
                items: themes,
                dynamicTitle: true,
            },
        },
    },
    initialGlobals: {
        primaryColor: 'teal',
        backgrounds: {value: prefersDark ? 'dark' : 'light'},
    },
    parameters: {
        backgrounds: {
            options: backgroundOptions,
        },
        docs: {
            codePanel: true,
            container: ThemedDocsContainer,
        },
        controls: {
            disableSaveFromUI: true,
        },
        options: {
            storySort: {
                order: [
                    '@content',
                    ['About', 'Audience', 'Voice', 'Writing Mechanics', 'Product Vocabulary'],
                    '@foundation',
                    '@components',
                    '*',
                ],
            },
        },
    },
    decorators: [useColorScheme, withTheme],
};

export default preview;
