import {DefaultProps, SelectItem, Selectors} from '@mantine/core';
import useStyles from './TablePredicate.styles';

type TablePredicateStylesNames = Selectors<typeof useStyles>;

export interface TablePredicateProps extends DefaultProps<TablePredicateStylesNames> {
    /**
     * Unique identifier for this predicate. Will be used to access the selected value in the table state
     */
    id: string;
    /**
     * The values to display in the predicate
     */
    data: SelectItem[];
    /**
     * Input label (not displayed for now)
     *
     * @default default to the predicate id
     */
    label?: string;
}
