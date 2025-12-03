import {createTheme, Plasmantine} from '@coveord/plasma-mantine';
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
                    {value: 'teal', title: 'Teal'},
                    {value: 'blue', title: 'Blue'},
                    {value: 'violet', title: 'Violet'},
                ],
                dynamicTitle: true,
            },
        },
        colorScheme: {
            description: "Color scheme applied to Mantine's theme",
            toolbar: {
                title: 'Color Scheme',
                items: [
                    {value: 'light', title: 'Light', icon: 'sun'},
                    {value: 'dark', title: 'Dark', icon: 'moon'},
                ],
                dynamicTitle: true,
            },
        },
    },
    initialGlobals: {
        primaryColor: 'teal',
        colorScheme: 'light',
    },
    decorators: [
        useColorScheme,
        (Story, context) => {
            const theme = createTheme({
                primaryColor: context.globals.primaryColor || 'teal',
            });
            return (
                <Plasmantine theme={theme}>
                    <link rel="stylesheet" href="https://use.typekit.net/wqe4zqp.css" />
                    <Story />
                </Plasmantine>
            );
        },
    ],
};

export default preview;
