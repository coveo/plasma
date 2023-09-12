import {DefaultProps, Selectors} from '@mantine/core';
import useStyles from './TableLastUpdated.styles';

type TableLastUpdatedStylesNames = Selectors<typeof useStyles>;

export interface TableLastUpdatedProps extends DefaultProps<TableLastUpdatedStylesNames> {
    /**
     * Label to contextualize the date
     *
     * @default "Last update:"
     */
    label?: string;
}
