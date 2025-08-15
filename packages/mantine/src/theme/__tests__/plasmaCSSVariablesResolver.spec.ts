import {createTheme, DEFAULT_THEME, mergeMantineTheme} from '@mantine/core';
import {PlasmaColors} from '../PlasmaColors';
import {plasmaCSSVariablesResolver} from '../plasmaCSSVariablesResolver';

describe('plasmaCSSVariablesResolver', () => {
    it('updates the error color', () => {
        const themeOverride = createTheme({colors: PlasmaColors});
        const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
        const variables = plasmaCSSVariablesResolver(theme);
        expect(variables.light['--mantine-color-error']).toBe('#d2271b');
        expect(variables.light['--mantine-color-default-border']).toBe('#dddfe3');
        expect(variables.light['--coveo-app-background']).toBe('#f9f9fa');
        expect(variables.light['--coveo-color-input-border']).toBe('#b9bdc7');
        expect(variables.light['--mantine-color-text']).toBe('#3b3e46');
        expect(variables.light['--mantine-color-dimmed']).toBe('#676d7a');
        expect(variables.light['--mantine-color-gray-filled']).toBe('#959cab');
        expect(variables.light['--mantine-color-gray-light']).toBe('rgba(59, 62, 70, 0.1)');
        expect(variables.light['--mantine-color-gray-light-hover']).toBe('rgba(59, 62, 70, 0.16)');
        expect(variables.light['--mantine-color-warning-filled']).toBe('#c89300');
    });
});
