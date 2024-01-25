import {useForm as useMantineForm, UseFormInput, GetInputProps} from '@mantine/form';
import {_TransformValues} from '@mantine/form/lib/types';

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
