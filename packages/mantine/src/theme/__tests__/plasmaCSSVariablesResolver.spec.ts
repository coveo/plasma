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

const gray: MantineColorsTuple = [
    '#f9f9fa',
    '#f1f2f4',
    '#dddfe3',
    '#b9bdc7',
    '#959cab',
    '#676d7a',
    '#3b3e46',
    '#26292f',
    '#191b1f',
    '#0e0f12',
];

describe('plasmaCSSVariablesResolver', () => {
    it('updates the error color', () => {
        const variables = plasmaCSSVariablesResolver({colors: {red, gray}} as MantineTheme);
        expect(variables.light['--mantine-color-error']).toBe(red[5]);
        expect(variables.light['--mantine-color-default-border']).toBe(gray[2]);
    });
});
