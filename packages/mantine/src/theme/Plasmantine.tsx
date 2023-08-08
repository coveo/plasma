import {MantineProvider} from '@mantine/core';
import {FunctionComponent, PropsWithChildren} from 'react';

import {plasmaTheme} from './Theme';

export const Plasmantine: FunctionComponent<PropsWithChildren<unknown>> = ({children}) => (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={plasmaTheme}>
        {children}
    </MantineProvider>
);
