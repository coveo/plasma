import {useForm as useMantineForm} from '@mantine/form';
import {_TransformValues, UseFormInput, GetInputProps} from '@mantine/form/lib/types';

export const useForm = <
    Values = Record<string, unknown>,
    TransformValues extends _TransformValues<Values> = (values: Values) => Values
>(
    options: UseFormInput<Values, TransformValues> = {}
) => {
    const form = useMantineForm(options);

    const getInputProps: GetInputProps<Values> = (
        path,
        {type = 'input', withError = type === 'input', withFocus = true} = {}
    ) => {
        const originalPayload = form.getInputProps(path, {type, withError, withFocus});
        if (Array.isArray(originalPayload.value)) {
            return {
                ...originalPayload,
                reorderListItem: (payload: Record<'from' | 'to', number>) => form.reorderListItem(path, payload),
                removeListItem: (index: number) => form.removeListItem(path, index),
                insertListItem: (valueToInsert: unknown, index: number) =>
                    form.insertListItem(path, valueToInsert, index),
            };
        }

        return originalPayload;
    };

    return {...form, getInputProps};
};
