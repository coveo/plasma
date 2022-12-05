import {Tuple} from '@mantine/core';

import {PlasmaColors} from './theme/PlasmaColors';

export * from '@mantine/carousel';
export * from '@mantine/core';
export * from '@mantine/form';
export type {FormValidateInput} from '@mantine/form/lib/types';
export * from '@mantine/hooks';
export {createColumnHelper, type ColumnDef} from '@tanstack/table-core';
export * from './components';
// explicitly overriding mantine components
export {Header, Table, HeaderProps, Modal} from './components';
export * from './theme';

declare module '@mantine/core' {
    export interface MantineThemeColorsOverride {
        // eslint-disable-next-line @typescript-eslint/ban-types
        colors: Record<keyof typeof PlasmaColors | (string & {}), Tuple<string, 10>>;
    }
}
