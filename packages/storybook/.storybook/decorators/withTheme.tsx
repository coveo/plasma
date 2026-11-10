import {createTheme} from '@coveord/plasma-mantine/core';
import {Notifications} from '@coveord/plasma-mantine/notifications';
import {Plasmantine} from '@coveord/plasma-mantine/plasmantine';
import type {Decorator} from '@storybook/react-vite';

type Theme = 'teal' | 'blue' | 'violet';

export const themes: Array<{value: Theme; title: string}> = [
    {value: 'teal', title: 'Administration Console'},
    {value: 'blue', title: 'Knowledge Hub'},
    {value: 'violet', title: 'Merchandising Hub'},
];

export const withTheme: Decorator = (Story, context) => {
    const selectedColor = context.globals.primaryColor || 'teal';
    const selectedTheme = createTheme({primaryColor: selectedColor});

    // Plasma does not support dark mode, so the scheme is stated here rather than followed
    // from a global. See `backgroundOptions.ts`.
    return (
        <Plasmantine theme={selectedTheme} defaultColorScheme="light">
            <Notifications position="top-center" />
            <Story />
        </Plasmantine>
    );
};
