import './styles/reset.css';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';

import type {Preview} from '@storybook/react-vite';
import {useColorScheme} from './decorators/useColorScheme.js';
import {themes, withTheme} from './decorators/withTheme.js';

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
        backgrounds: {value: 'light'},
    },
    parameters: {
        backgrounds: {
            options: {
                dark: {name: 'Dark', value: 'var(--mantine-color-body)'},
                light: {name: 'Light', value: 'var(--mantine-color-body)'},
            },
        },
        docs: {
            codePanel: true,
        },
        controls: {
            disableSaveFromUI: true,
        },
    },
    decorators: [useColorScheme, withTheme],
};

export default preview;
