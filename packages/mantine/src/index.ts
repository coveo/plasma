import {Tuple} from '@mantine/core';

import {PlasmaColors} from './theme/PlasmaColors.js';

export * from '@mantine/carousel';
export * from '@mantine/core';
export * from '@mantine/form';
export type {FormValidateInput} from '@mantine/form/lib/types.js';
export * from '@mantine/hooks';
export {createColumnHelper, type ColumnDef} from '@tanstack/table-core';
export * from './components/index.js';
// explicitly overriding mantine components
export {Header, Table, type HeaderProps, Modal} from './components/index.js';
export * from './theme/index.js';

declare module '@mantine/core' {
    export interface MantineThemeColorsOverride {
        // eslint-disable-next-line @typescript-eslint/ban-types
        colors: Record<keyof typeof PlasmaColors | (string & {}), Tuple<string, 10>>;
    }
}
