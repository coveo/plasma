import {Tuple} from '@mantine/core';

import {PlasmaColors} from './theme/PlasmaColors';

export {type ColumnDef, createColumnHelper} from '@tanstack/table-core';

export * from '@mantine/core';
export * from '@mantine/form';
export type {FormValidateInput} from '@mantine/form/lib/types';
export * from '@mantine/hooks';

export * from './components';
export * from './theme';

// explicitly overriding mantine components
export {Header, Table, Modal} from './components';

declare module '@mantine/core' {
    export interface MantineThemeColorsOverride {
        // eslint-disable-next-line @typescript-eslint/ban-types
        colors: Record<keyof typeof PlasmaColors | (string & {}), Tuple<string, 10>>;
    }
}
