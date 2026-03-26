import {createTheme, DEFAULT_THEME, mergeMantineTheme} from '@mantine/core';
import {PlasmaColors} from '../PlasmaColors.js';
import {plasmaCSSVariablesResolver} from '../plasmaCSSVariablesResolver.js';

describe('plasmaCSSVariablesResolver', () => {
    it('updates the error color', () => {
        const themeOverride = createTheme({colors: PlasmaColors, primaryShade: 5});
        const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
        const variables = plasmaCSSVariablesResolver(theme);
        expect(variables.light['--mantine-color-error']).toBe('#d2271b');
        expect(variables.light['--mantine-color-default-border']).toBe('#dddfe3');
        expect(variables.light['--coveo-app-background']).toBe('#f9f9fa');
        expect(variables.light['--coveo-color-input-border']).toBe('#b9bdc7');
        expect(variables.light['--mantine-color-dimmed']).toBe('#676d7a');
        expect(variables.light['--mantine-color-gray-light']).toBe('rgba(103, 109, 122, 0.1)'); // gray-5 10%
        expect(variables.light['--mantine-color-gray-light-hover']).toBe('rgba(103, 109, 122, 0.16)'); // gray-5 16%
    });
});
