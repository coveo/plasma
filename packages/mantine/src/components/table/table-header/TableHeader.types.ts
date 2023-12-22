import {GridProps} from '@mantine/core';
import {ReactNode} from 'react';
export interface TableHeaderProps extends GridProps {
    /* Children of header (ie: actions, datepicker, etc.) */
    children?: ReactNode;
}
