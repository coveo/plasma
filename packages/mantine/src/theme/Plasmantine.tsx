import {MantineProvider} from '@mantine/core';
import {FunctionComponent, ReactNode} from 'react';

import {resolver} from './CSSVariablesResolver';
import {plasmaTheme} from './Theme';

export const Plasmantine: FunctionComponent<{children?: ReactNode}> = ({children}) => (
    <MantineProvider theme={plasmaTheme} cssVariablesResolver={resolver}>
        {children}
    </MantineProvider>
);
