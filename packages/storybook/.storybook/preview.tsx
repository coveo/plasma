import './styles/reset.css';

import '@mantine/core/styles.layer.css';
import '@mantine/dates/styles.layer.css';
import '@mantine/notifications/styles.layer.css';

import {Plasmantine} from '@coveord/plasma-mantine';
import {DocsContainer, type DocsContainerProps} from '@storybook/addon-docs/blocks';
import type {Preview} from '@storybook/react-vite';
import {themes as storybookThemes} from 'storybook/theming';
import {type PropsWithChildren} from 'react';
import {useColorScheme} from './decorators/useColorScheme.js';
import {themes, withTheme} from './decorators/withTheme.js';

const ThemedDocsContainer = ({children, ...props}: PropsWithChildren<DocsContainerProps>) => (
    <DocsContainer {...props}>
        <Plasmantine>{children}</Plasmantine>
    </DocsContainer>
);

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

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
            options: {
                dark: {name: 'Dark', value: 'var(--coveo-app-background)'},
                light: {name: 'Light', value: 'var(--coveo-app-background)'},
            },
        },
        chromatic: {disableSnapshot: true},
        docs: {
            codePanel: true,
            container: ThemedDocsContainer,
            theme: storybookThemes.normal,
        },
        controls: {
            disableSaveFromUI: true,
        },
        options: {
            storySort: {
                order: ['@foundation', '@components', '*'],
            },
        },
    },
    decorators: [useColorScheme, withTheme],
};

export default preview;
