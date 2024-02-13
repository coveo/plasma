import {UseFormInput} from '@mantine/form';
import {CollectionProps} from './Collection';

export const enhanceWithCollectionProps = <FormValues>(
    payload: Parameters<UseFormInput<FormValues>['enhanceGetInputProps']>[0],
    field: (typeof payload)['field'],
): Pick<CollectionProps<unknown>, 'onReorderItem' | 'onInsertItem' | 'onRemoveItem'> => {
    if (payload.field === field) {
        return {
            onReorderItem: (reorderPayload: Record<'from' | 'to', number>) =>
                payload.form.reorderListItem(field, reorderPayload),
            onRemoveItem: (index: number) => payload.form.removeListItem(field, index),
            onInsertItem: (valueToInsert: unknown, index: number) =>
                payload.form.insertListItem(field, valueToInsert, index),
        };
    }

    return {};
};
