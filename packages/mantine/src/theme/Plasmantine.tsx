import '../styles/global.css';

import {
    Combobox,
    createTheme,
    MantineProvider,
    MantineProviderProps,
    mergeThemeOverrides,
    Popover,
} from '@mantine/core';
import {FunctionComponent} from 'react';
import {mergeCSSVariablesResolvers} from './mergeCSSVariablesResolvers.js';
import {plasmaCSSVariablesResolver} from './plasmaCSSVariablesResolver.js';
import {plasmaTheme} from './Theme.js';

const emptyTheme = {};
const testThemeOverride = createTheme({
    components: {
        Combobox: Combobox.extend({defaultProps: {middlewares: {inline: true}}}),
        Popover: Popover.extend({defaultProps: {middlewares: {inline: true}}}),
    },
});

export const Plasmantine: FunctionComponent<MantineProviderProps> = ({
    children,
    theme: externalTheme = emptyTheme,
    cssVariablesResolver: externalCSSVariablesResolver,
    env,
    ...others
}) => {
    const theme =
        env === 'test'
            ? mergeThemeOverrides(plasmaTheme, testThemeOverride, externalTheme, emptyTheme)
            : mergeThemeOverrides(plasmaTheme, externalTheme, emptyTheme);
    const cssVariablesResolver = mergeCSSVariablesResolvers(plasmaCSSVariablesResolver, externalCSSVariablesResolver);

    return (
        <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver} env={env} {...others}>
            {children}
        </MantineProvider>
    );
};
