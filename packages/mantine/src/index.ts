import {MantineColorsTuple} from '@mantine/core';

import {noop} from '@mantine/core';
import {LooseKeys} from '@mantine/form/lib/types';
import {PlasmaColors} from './theme/PlasmaColors';

export * from '@mantine/carousel';
export * from '@mantine/core';
export {Pagination} from '@mantine/core';
export * from '@mantine/form';
export type {FormValidateInput} from '@mantine/form/lib/types';
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
    Table,
    type ActionIconProps,
    type ButtonProps,
    type CopyToClipboardProps,
    type HeaderProps,
    type InitialTableState,
    type MenuItemProps,
    type TableProps,
    type TableState,
} from './components';
export {createFormContext, useForm} from './form';

export * from './theme';

declare module '@mantine/core' {
    export interface MantineThemeColorsOverride {
        // eslint-disable-next-line @typescript-eslint/ban-types
        colors: Record<keyof typeof PlasmaColors | (string & {}), MantineColorsTuple>;
    }
}

declare module '@mantine/form' {
    export type GetInputPropsType = 'input' | 'checkbox' | 'collection';
    export interface GetInputPropsOptions {
        type?: GetInputPropsType;
        withError?: boolean;
        withFocus?: boolean;
        [key: string]: any;
    }
    export interface GetInputPropsReturnType {
        onChange: any;
        value?: any;
        checked?: any;
        error?: any;
        onFocus?: any;
        onBlur?: any;
        onReorderItem?: any;
        onRemoveItem?: any;
        onInsertItem?: any;
    }

    export type GetInputProps<Values> = <Field extends LooseKeys<Values>>(
        path: Field,
        options?: GetInputPropsOptions,
    ) => GetInputPropsReturnType;
}
