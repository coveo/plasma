import {MantineColorsTuple, noop} from '@mantine/core';
import {type RowData} from '@tanstack/table-core';
import {type PlasmaColors} from './theme/PlasmaColors';

export * from '@mantine/carousel';
export * from '@mantine/core';
export {Pagination} from '@mantine/core';
export * from '@mantine/form';
export * from '@mantine/hooks';
export * from '@mantine/notifications';
export {type NotificationsProps} from '@mantine/notifications';
export * from '@tanstack/table-core';
export * from './components';
export {noop};

// explicitly overriding mantine components
export {
    ActionIcon,
    BrowserPreview,
    Button,
    CopyToClipboard,
    Header,
    Menu,
    Modal,
    PasswordInput,
    Select,
    Table,
    type ActionIconProps,
    type ButtonProps,
    type CopyToClipboardProps,
    type HeaderProps,
    type MenuItemProps,
    type ModalFactory,
    type TableProps,
    type TableState,
} from './components';

export * from './theme';

declare module '@mantine/core' {
    export interface MantineThemeColorsOverride {
        colors: Record<keyof typeof PlasmaColors | (string & {}), MantineColorsTuple>;
    }
}

declare module '@tanstack/react-table' {
    interface ColumnMeta<TData extends RowData, TValue> {
        /**
         * Whether the column is a control column.
         * Control columns are columns that are not part of the data but are used to control the table.
         * For example, a column that contains checkboxes to select rows.
         */
        controlColumn: boolean;
    }
}
