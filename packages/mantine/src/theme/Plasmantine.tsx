import '../styles/global.css';

import {MantineProvider, MantineProviderProps, mergeThemeOverrides} from '@mantine/core';
import {FunctionComponent} from 'react';
import {mergeCSSVariablesResolvers} from './mergeCSSVariablesResolvers.js';
import {plasmaCSSVariablesResolver} from './plasmaCSSVariablesResolver.js';
import {plasmaTheme} from './Theme.js';

const emptyTheme = {};

export const Plasmantine: FunctionComponent<MantineProviderProps> = ({
    children,
    theme: externalTheme,
    cssVariablesResolver: externalCSSVariablesResolver,
    ...others
}) => {
    const theme = mergeThemeOverrides(plasmaTheme, externalTheme ?? emptyTheme);
    const cssVariablesResolver = mergeCSSVariablesResolvers(plasmaCSSVariablesResolver, externalCSSVariablesResolver);

    return (
        <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver} {...others}>
            {children}
        </MantineProvider>
    );
};
