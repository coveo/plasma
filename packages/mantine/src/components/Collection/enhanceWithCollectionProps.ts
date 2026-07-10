import {useForm, type FormArrayElement} from '@mantine/form';
import {CollectionProps} from './Collection.js';

type UseFormInput<FormValues extends Record<string, any>, TransformedValues = FormValues> = NonNullable<
    Parameters<typeof useForm<FormValues, TransformedValues>>[0]
>;

type EnhanceGetInputPayload<FormValues extends Record<string, any>, TransformedValues = FormValues> = Parameters<
    NonNullable<UseFormInput<FormValues, TransformedValues>['enhanceGetInputProps']>
>[0];

export const enhanceWithCollectionProps = <FormValues extends Record<string, any>, TransformedValues = FormValues>(
    payload: EnhanceGetInputPayload<FormValues, TransformedValues>,
    field: (typeof payload)['field'],
    options?: {validateInputOnChange?: boolean},
): Pick<CollectionProps<unknown>, 'onReorderItem' | 'onInsertItem' | 'onRemoveItem'> => {
    if (payload.field === field) {
        const {validateInputOnChange = false} = options || {};
        return {
            onReorderItem: (reorderPayload: Record<'from' | 'to', number>) => {
                payload.form.reorderListItem(field, reorderPayload);
                if (validateInputOnChange) {
                    payload.form.validate();
                }
            },
            onRemoveItem: (index: number) => {
                payload.form.removeListItem(field, index);
                if (validateInputOnChange) {
                    payload.form.validate();
                }
            },
            onInsertItem: (valueToInsert: unknown, index: number) => {
                payload.form.insertListItem(
                    field,
                    valueToInsert as FormArrayElement<FormValues, (typeof payload)['field']>,
                    index,
                );
                if (validateInputOnChange) {
                    payload.form.validate();
                }
            },
        };
    }

    return {};
};
