import {useForm as useMantineForm} from '@mantine/form';
import {GetInputProps} from '@mantine/form/lib/types';

export const useForm: typeof useMantineForm = (options) => {
    const form = useMantineForm(options);

    const getInputProps: GetInputProps<Record<string, unknown>> = (
        path,
        {type = 'input', withError = type === 'input', withFocus = true} = {}
    ) => {
        const originalPayload = form.getInputProps(path, {type, withError, withFocus});
        if (Array.isArray(originalPayload.value)) {
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
