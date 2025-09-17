import {MantineProvider, MantineProviderProps, mergeThemeOverrides} from '@mantine/core';
import {FunctionComponent} from 'react';

import {plasmaCSSVariablesResolver} from './plasmaCSSVariablesResolver.js';
import {plasmaTheme} from './Theme.js';
import {mergeCSSVariablesResolvers} from './mergeCSSVariablesResolvers.js';
import '../styles/global.css';

export const Plasmantine: FunctionComponent<MantineProviderProps> = ({
    children,
    theme: externalTheme,
    cssVariablesResolver: externalCSSVariablesResolver,
    ...others
}) => {
    const theme = mergeThemeOverrides(plasmaTheme, externalTheme);
    const cssVariablesResolver = mergeCSSVariablesResolvers(plasmaCSSVariablesResolver, externalCSSVariablesResolver);

    return (
        <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver} {...others}>
            {children}
        </MantineProvider>
    );
};
