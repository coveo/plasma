import {MantineTheme} from '@mantine/core';
import {PlasmaColors} from '../PlasmaColors';
import {plasmaCSSVariablesResolver} from '../plasmaCSSVariablesResolver';

describe('plasmaCSSVariablesResolver', () => {
    it('updates the error color', () => {
        const variables = plasmaCSSVariablesResolver({colors: PlasmaColors} as unknown as MantineTheme);
        expect(variables.light['--mantine-color-error']).toBe('#d2271b');
        expect(variables.light['--mantine-color-default-border']).toBe('#dddfe3');
        expect(variables.light['--coveo-color-input-border']).toBe('#b9bdc7');
        expect(variables.light['--mantine-color-text']).toBe('#3b3e46');
        expect(variables.light['--mantine-color-dimmed']).toBe('#676d7a');
        expect(variables.light['--mantine-color-gray-filled']).toBe('#959cab');
        expect(variables.light['--mantine-color-gray-light']).toBe('#f9f9fa');
        expect(variables.light['--mantine-color-gray-light-hover']).toBe('#f1f2f4');
        expect(variables.light['--mantine-color-warning-filled']).toBe('#c89300');
    });
});
