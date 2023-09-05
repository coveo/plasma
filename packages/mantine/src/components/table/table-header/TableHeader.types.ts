import {DefaultProps, Selectors} from '@mantine/core';
import {ReactNode} from 'react';
import useStyles from './TableHeader.styles';

type TableHeaderStylesNames = Selectors<typeof useStyles>;

export interface TableHeaderProps extends DefaultProps<TableHeaderStylesNames> {
    /* Children of header (ie: actions, datepicker, etc.) */
    children?: ReactNode;
}
