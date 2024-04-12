import {MantineColorsTuple, MantineTheme} from '@mantine/core';
import {plasmaCSSVariablesResolver} from '../plasmaCSSVariablesResolver';

const gray: MantineColorsTuple = [
    '#f5f5f5',
    '#e7e7e7',
    '#cdcdcd',
    '#b2b2b2',
    '#9a9a9a',
    '#8b8b8b',
    '#848484',
    '#717171',
    '#656565',
    '#575757',
];

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

const blue: MantineColorsTuple = [
    '#eaeaff',
    '#cfd0ff',
    '#9c9cff',
    '#6464ff',
    '#3736fe',
    '#1b19fe',
    '#0909ff',
    '#0000e4',
    '#0000cc',
    '#0000b4',
];

describe('plasmaCSSVariablesResolver', () => {
    it('creates a --mantine-color-<name>-light variable for each color of the theme that equals to the first shade of that color palette', () => {
        const variables = plasmaCSSVariablesResolver({colors: {red, blue, gray}} as MantineTheme);
        expect(variables.light['--mantine-color-red-light']).toBe(red[0]);
        expect(variables.light['--mantine-color-blue-light']).toBe(blue[0]);
    });

    it('uses the second shade for --mantine-color-gray-light variable because our gray color is too light', () => {
        const variables = plasmaCSSVariablesResolver({colors: {red, blue, gray}} as MantineTheme);
        expect(variables.light['--mantine-color-gray-light']).toBe(gray[1]);
    });

    it('creates a --mantine-color-<name>-light-hover variable for each color of the theme that equals to the second shade of that color palette', () => {
        const variables = plasmaCSSVariablesResolver({colors: {red, blue, gray}} as MantineTheme);
        expect(variables.light['--mantine-color-red-light-hover']).toBe(red[1]);
        expect(variables.light['--mantine-color-blue-light-hover']).toBe(blue[1]);
    });

    it('uses the third shade for --mantine-color-gray-light-hover variable because our gray color is too light', () => {
        const variables = plasmaCSSVariablesResolver({colors: {red, blue, gray}} as MantineTheme);
        expect(variables.light['--mantine-color-gray-light-hover']).toBe(gray[2]);
    });
});
