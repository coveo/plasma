import {useForm as useMantineForm} from '@mantine/form';
import {LooseKeys, UseFormInput, _TransformValues} from '@mantine/form/lib/types';

type InputTypes = 'input' | 'checkbox' | 'collection';

type GetInputProps<Values> = <Field extends LooseKeys<Values>>(
    path: Field,
    options?: {type?: InputTypes; withError?: boolean; withFocus?: boolean},
) => {
    value: any;
    onChange: any;
    checked?: any;
    error?: any;
    onFocus?: any;
    onBlur?: any;
    onReorderItem?: any;
    onRemoveItem?: any;
    onInsertItem?: any;
};

export const useForm = <
    Values = Record<string, unknown>,
    TransformValues extends _TransformValues<Values> = (values: Values) => Values,
>(
    options: UseFormInput<Values, TransformValues> = {},
) => {
    const form = useMantineForm(options);

    const getInputProps: GetInputProps<Record<string, unknown>> = (
        path,
        {type = 'input', withError = type === 'input', withFocus = true} = {},
    ) => {
        const originalPayload = form.getInputProps(path, {
            type: type === 'collection' ? 'input' : type,
            withError,
            withFocus,
        });
        if (type === 'collection') {
            return {
                ...originalPayload,
                onReorderItem: (payload: Record<'from' | 'to', number>) => form.reorderListItem(path, payload),
                onRemoveItem: (index: number) => form.removeListItem(path, index),
                onInsertItem: (valueToInsert: unknown, index: number) =>
                    form.insertListItem(path, valueToInsert, index),
            };
        }

        return originalPayload;
    };

    return {...form, getInputProps};
};
