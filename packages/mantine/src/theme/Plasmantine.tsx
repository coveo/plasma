import {CSSVariablesResolver, MantineProvider} from '@mantine/core';
import {FunctionComponent, PropsWithChildren} from 'react';

import {plasmaTheme} from './Theme';

export const Plasmantine: FunctionComponent<PropsWithChildren<unknown> & {resolver?: CSSVariablesResolver}> = ({
    children,
    resolver,
}) => (
    <MantineProvider theme={plasmaTheme} cssVariablesResolver={resolver}>
        {children}
    </MantineProvider>
);
