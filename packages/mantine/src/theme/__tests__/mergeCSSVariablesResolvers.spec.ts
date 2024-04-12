import {DEFAULT_THEME} from '@mantine/core';
import {mergeCSSVariablesResolvers} from '../mergeCSSVariablesResolvers';

describe('mergeCSSVariablesResolvers', () => {
    it('resolves to empty variables if no resolvers are given as argument', () => {
        const resolver = mergeCSSVariablesResolvers();
        expect(resolver(DEFAULT_THEME)).toEqual({variables: {}, dark: {}, light: {}});
    });

    it('does not crash on falsy values, it strips them out', () => {
        const resolver1 = () => ({
            variables: {'--mantine-variable-x': '#000'},
            dark: {'--mantine-variable-x': '#fff'},
            light: {'--mantine-variable-x': '#000'},
        });
        const resolver = mergeCSSVariablesResolvers(resolver1, undefined);
        expect(resolver(DEFAULT_THEME)).toEqual({
            variables: {'--mantine-variable-x': '#000'},
            dark: {'--mantine-variable-x': '#fff'},
            light: {'--mantine-variable-x': '#000'},
        });
    });

    it('merges the result of the right most resolver with the previous result (right most resolver overrides the others)', () => {
        const resolver1 = () => ({
            variables: {'--mantine-variable-x': '#000'},
            dark: {'--mantine-variable-x': '#fff'},
            light: {'--mantine-variable-x': '#000'},
        });
        const resolver2 = () => ({
            variables: {'--mantine-variable-y': '#000'},
            dark: {'--mantine-variable-y': '#fff'},
            light: {'--mantine-variable-y': '#000'},
        });
        const resolver3 = () => ({
            variables: {},
            dark: {'--mantine-variable-x': '#ccc'},
            light: {'--mantine-variable-y': '#aaa'},
        });
        const resolver = mergeCSSVariablesResolvers(resolver1, resolver2, resolver3);

        expect(resolver(DEFAULT_THEME)).toEqual({
            variables: {'--mantine-variable-x': '#000', '--mantine-variable-y': '#000'},
            dark: {'--mantine-variable-x': '#ccc', '--mantine-variable-y': '#fff'},
            light: {'--mantine-variable-x': '#000', '--mantine-variable-y': '#aaa'},
        });
    });
});
