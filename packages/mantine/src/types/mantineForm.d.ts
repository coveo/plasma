import {LooseKeys} from '@mantine/form/lib/types';

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
