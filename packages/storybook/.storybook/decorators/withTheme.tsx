import {createTheme} from '@coveord/plasma-mantine/core';
import {Plasmantine} from '@coveord/plasma-mantine/plasmantine';
import {Notifications} from '@coveord/plasma-mantine/notifications';
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

    return (
        <Plasmantine theme={selectedTheme}>
            <Notifications />
            <Story />
        </Plasmantine>
    );
};
