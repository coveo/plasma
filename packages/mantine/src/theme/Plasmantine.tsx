import {MantineProvider} from '@mantine/core';
import {Notifications} from '@mantine/notifications';
import {FunctionComponent, PropsWithChildren} from 'react';

import {plasmaTheme} from './Theme';

export const Plasmantine: FunctionComponent<PropsWithChildren> = ({children}) => (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={plasmaTheme}>
        <Notifications position="top-center" />
        {children}
    </MantineProvider>
);
