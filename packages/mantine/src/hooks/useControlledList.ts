import {useUncontrolled} from '@mantine/hooks';

interface UseControlledList<T> {
    /** Initial value for uncontrolled state */
    defaultValue?: T[];
    /** Value for controlled state */
    value?: T[];
    /** Controlled state onChange handler */
    onChange?: (values: T[]) => void;
}

interface ListHandlers<T> {
    /** Appends the item at the end of the list */
    append: (item: T) => void;
    /** Removes the item at the index from the list */
    remove: (index: number) => void;
    /** Moves the item at the "from" position to another position within the list  */
    reorder: ({from, to}: {from: number; to: number}) => void;
}

/**
 * Manage a list of items in a controlled fashion, to be used with inputs
 */
export const useControlledList = <T>({defaultValue, value, onChange}: UseControlledList<T>): [T[], ListHandlers<T>] => {
    const [values, handleChange] = useUncontrolled({
        value,
        defaultValue,
        finalValue: [],
        onChange,
    });

    const remove = (index: number) => {
        const newValues = values.filter((_, i) => i !== index);
        handleChange?.(newValues);
    };

    const append = (item: T) => {
        const newValues = [...values, item];
        handleChange?.(newValues);
    };

    const reorder = ({from, to}: {from: number; to: number}) => {
        const newValues = [...values];
        const item = values[from];

        newValues.splice(from, 1);
        newValues.splice(to, 0, item);

        handleChange?.(newValues);
    };

    return [values, {remove, append, reorder}];
};
