import {Grid, Group} from '@mantine/core';
import {ReactElement, ReactNode} from 'react';

import {TableComponentsOrder} from '../Table';
import {useTable} from '../TableContext';
import TableActionsClasses from './TableActions.module.css';
import {TableActionsProps} from './TableActions.types';

export const TableActions = <T,>({children, ...others}: TableActionsProps<T>): ReactElement => {
    const {getSelectedRows, multiRowSelectionEnabled} = useTable<T>();
    const selectedRows = getSelectedRows();

    if (selectedRows.length <= 0) {
        return null;
    }

    return (
        <Grid.Col
            span="content"
            order={TableComponentsOrder.Actions}
            py="sm"
            classNames={{col: TableActionsClasses.col}}
            {...others}
        >
            <Group gap="xs" className={TableActionsClasses.wrapper}>
                {multiRowSelectionEnabled
                    ? (children as (data: T[]) => ReactNode)(selectedRows)
                    : (children as (datum: T) => ReactNode)(selectedRows[0])}
            </Group>
        </Grid.Col>
    );
};
