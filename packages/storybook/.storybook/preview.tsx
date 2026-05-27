import './styles/reset.css';

import '@mantine/core/styles.layer.css';
import '@mantine/dates/styles.layer.css';
import '@mantine/notifications/styles.layer.css';

import {Plasmantine} from '@coveord/plasma-mantine';
import {DocsContainer, type DocsContainerProps} from '@storybook/addon-docs/blocks';
import type {Preview} from '@storybook/react-vite';
import {type PropsWithChildren} from 'react';
import {useColorScheme} from './decorators/useColorScheme.js';
import {themes, withTheme} from './decorators/withTheme.js';

const ThemedDocsContainer = ({children, ...props}: PropsWithChildren<DocsContainerProps>) => (
    <DocsContainer {...props}>
        <Plasmantine>{children}</Plasmantine>
    </DocsContainer>
);

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
                dark: {name: 'Dark', value: 'var(--coveo-app-background)'},
                light: {name: 'Light', value: 'var(--coveo-app-background)'},
            },
        },
        chromatic: {disableSnapshot: true},
        docs: {
            codePanel: true,
            container: ThemedDocsContainer,
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
