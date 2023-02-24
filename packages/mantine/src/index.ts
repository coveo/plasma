import {Tuple} from '@mantine/core';

import {PlasmaColors} from './theme/PlasmaColors';

export * from '@mantine/carousel';
export * from '@mantine/core';
export type {FormValidateInput} from '@mantine/form/lib/types';
export * from '@mantine/hooks';
export * from '@tanstack/table-core';
export * from './components';
export * from '@mantine/form';
export {Pagination} from '@mantine/core';
// explicitly overriding mantine components
export {
    Header,
    Table,
    type TableProps,
    type TableState,
    type InitialTableState,
    type HeaderProps,
    Modal,
    Button,
    type ButtonProps,
    Menu,
    type MenuItemProps,
} from './components';
export {useForm, createFormContext} from './form';

export * from './theme';

declare module '@mantine/core' {
    export interface MantineThemeColorsOverride {
        // eslint-disable-next-line @typescript-eslint/ban-types
        colors: Record<keyof typeof PlasmaColors | (string & {}), Tuple<string, 10>>;
    }
}
