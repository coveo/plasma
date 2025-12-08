import {createTheme, Plasmantine} from '@coveord/plasma-mantine';
import type {Decorator} from '@storybook/react-vite';

type Theme = 'teal' | 'blue' | 'violet';

export const themes: Array<{value: Theme; title: string}> = [
    {value: 'teal', title: 'Administration Console'},
    {value: 'blue', title: 'Knowledge Hub'},
    {value: 'violet', title: 'Merchandizing Hub'},
];

export const withTheme: Decorator = (Story, context) => {
    const selectedColor = context.globals.primaryColor || 'teal';
    const selectedTheme = createTheme({primaryColor: selectedColor});

    return (
        <Plasmantine theme={selectedTheme}>
            <Story />
        </Plasmantine>
    );
};
