import {UseFormInput, type FormArrayElement} from '@mantine/form';
import {CollectionProps} from './Collection.js';

export const enhanceWithCollectionProps = <
    FormValues,
    TransformValues extends (values: FormValues) => unknown = (values: FormValues) => FormValues,
>(
    payload: Parameters<UseFormInput<FormValues, TransformValues>['enhanceGetInputProps']>[0],
    field: (typeof payload)['field'],
    options?: {validateInputOnChange?: boolean},
): Pick<CollectionProps<unknown>, 'onReorderItem' | 'onInsertItem' | 'onRemoveItem'> => {
    if (payload.field === field) {
        const {validateInputOnChange = false} = options || {};
        return {
            onReorderItem: (reorderPayload: Record<'from' | 'to', number>) => {
                payload.form.reorderListItem(field, reorderPayload);
                validateInputOnChange && payload.form.validate();
            },
            onRemoveItem: (index: number) => {
                payload.form.removeListItem(field, index);
                validateInputOnChange && payload.form.validate();
            },
            onInsertItem: (valueToInsert: FormArrayElement<FormValues, (typeof payload)['field']>, index: number) => {
                payload.form.insertListItem(field, valueToInsert, index);
                validateInputOnChange && payload.form.validate();
            },
        };
    }

    return {};
};
