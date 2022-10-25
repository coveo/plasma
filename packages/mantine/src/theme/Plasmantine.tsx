import {MantineProvider} from '@mantine/core';
import {FunctionComponent} from 'react';

import {plasmaTheme} from './Theme';

export const Plasmantine: FunctionComponent = ({children}) => (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={plasmaTheme}>
        {children}
    </MantineProvider>
);
