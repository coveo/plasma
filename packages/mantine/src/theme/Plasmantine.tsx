import '../styles/global.css';

import {MantineProvider, MantineProviderProps, mergeThemeOverrides} from '@mantine/core';
import {FunctionComponent} from 'react';
import {mergeCSSVariablesResolvers} from './mergeCSSVariablesResolvers.js';
import {plasmaCSSVariablesResolver} from './plasmaCSSVariablesResolver.js';
import {plasmaTheme} from './Theme.js';

export const Plasmantine: FunctionComponent<MantineProviderProps> = ({
    children,
    theme: externalTheme,
    cssVariablesResolver: externalCSSVariablesResolver,
    ...others
}) => {
    const theme = externalTheme ? mergeThemeOverrides(plasmaTheme, externalTheme) : plasmaTheme;
    const cssVariablesResolver = externalCSSVariablesResolver
        ? mergeCSSVariablesResolvers(plasmaCSSVariablesResolver, externalCSSVariablesResolver)
        : plasmaCSSVariablesResolver;

    return (
        <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver} {...others}>
            {children}
        </MantineProvider>
    );
};
