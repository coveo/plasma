import {createTheme, Plasmantine} from '@coveord/plasma-mantine';
import {Stories, Title} from '@storybook/addon-docs/blocks';
import type {Preview} from '@storybook/react-vite';
import {useColorScheme} from './decorators/useColorScheme.js';

import './styles/reset.css';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';

const preview: Preview = {
    globalTypes: {
        primaryColor: {
            description: "Primary color applied to Mantine's theme",
            toolbar: {
                title: 'Primary Color',
                icon: 'paintbrush',
                items: [
                    {value: 'teal', title: 'Administration Console'},
                    {value: 'blue', title: 'Knowledge Hub'},
                    {value: 'violet', title: 'Merchandizing Hub'},
                ],
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
            page: () => (
                <>
                    <Title />
                    <Stories title="Examples" />
                </>
            ),
        },
    },
    decorators: [
        useColorScheme,
        (Story, context) => {
            const theme = createTheme({
                primaryColor: context.globals.primaryColor ?? 'teal',
            });
            return (
                <Plasmantine theme={theme}>
                    <Story />
                </Plasmantine>
            );
        },
    ],
};

export default preview;
