import {DefaultProps, Selectors} from '@mantine/core';
import useStyles from './TableFilter.styles';

type TableFilterStylesNames = Selectors<typeof useStyles>;

export interface TableFilterProps extends DefaultProps<TableFilterStylesNames> {
    /**
     * The placeholder for the filter input
     *
     * @default "Search by any field"
     */
    placeholder?: string;
}
