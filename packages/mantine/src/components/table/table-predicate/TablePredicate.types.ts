import {ComboboxData, GridColProps} from '@mantine/core';

export interface TablePredicateProps extends GridColProps {
    /**
     * Unique identifier for this predicate. Will be used to access the selected value in the table state
     */
    id: string;
    /**
     * The values to display in the predicate
     */
    data: ComboboxData;
    /**
     * Input label (not displayed for now)
     *
     * @default default to the predicate id
     */
    label?: string;
}
