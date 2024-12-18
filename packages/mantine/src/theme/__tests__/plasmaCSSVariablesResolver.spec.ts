import {MantineColorsTuple, MantineTheme} from '@mantine/core';
import {plasmaCSSVariablesResolver} from '../plasmaCSSVariablesResolver';

const red: MantineColorsTuple = [
    '#ffe8e8',
    '#ffcfcf',
    '#ff9b9c',
    '#ff6464',
    '#fe3837',
    '#fe1b19',
    '#ff0909',
    '#e40000',
    '#cb0000',
    '#b10000',
];

describe('plasmaCSSVariablesResolver', () => {
    it('updates the error color', () => {
        const variables = plasmaCSSVariablesResolver({colors: {red}} as MantineTheme);
        expect(variables.light['--mantine-color-error']).toBe(red[5]);
    });
});
