import {MantineThemeOverride, useMantineTheme} from '@mantine/core';
import {render} from '@testing-library/react';
import {describe, expect, it} from 'vitest';

import {plasmaTheme} from '../Theme.js';
import {Plasmantine} from '../Plasmantine.js';

describe('Plasmantine', () => {
    it('does not include inline middlewares in the base theme', () => {
        const components = (plasmaTheme as MantineThemeOverride).components;
        expect(components?.Combobox?.defaultProps?.middlewares).toBeUndefined();
        expect(components?.Popover?.defaultProps?.middlewares).toBeUndefined();
    });

    it('injects inline middlewares when env="test"', () => {
        let theme: ReturnType<typeof useMantineTheme> | undefined;
        const Spy = () => {
            theme = useMantineTheme();
            return null;
        };

        render(
            <Plasmantine withCssVariables={false} env="test">
                <Spy />
            </Plasmantine>,
        );

        expect(theme!.components?.Combobox?.defaultProps?.middlewares).toEqual({inline: true});
        expect(theme!.components?.Popover?.defaultProps?.middlewares).toEqual({inline: true});
    });

    it('does not inject inline middlewares without env="test"', () => {
        let theme: ReturnType<typeof useMantineTheme> | undefined;
        const Spy = () => {
            theme = useMantineTheme();
            return null;
        };

        render(
            <Plasmantine withCssVariables={false}>
                <Spy />
            </Plasmantine>,
        );

        expect(theme!.components?.Combobox?.defaultProps?.middlewares).toBeUndefined();
        expect(theme!.components?.Popover?.defaultProps?.middlewares).toBeUndefined();
    });
});
