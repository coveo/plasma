import {Grid, Group} from '@mantine/core';
import {ReactElement, ReactNode} from 'react';

import {TableComponentsOrder} from '../Table.styles';
import {useTable} from '../TableContext';
import useStyles from './TableActions.styles';
import {TableActionsProps} from './TableActions.types';

export const TableActions = <T,>({
    children,
    classNames,
    styles,
    unstyled,
    ...others
}: TableActionsProps<T>): ReactElement => {
    const {classes} = useStyles(null, {name: 'TableActions', classNames, styles, unstyled});
    const {getSelectedRows, multiRowSelectionEnabled} = useTable<T>();
    const selectedRows = getSelectedRows();

    if (selectedRows.length <= 0) {
        return null;
    }

    return (
        <Grid.Col span="content" order={TableComponentsOrder.Actions} py="sm" className={classes.root} {...others}>
            <Group spacing="xs" className={classes.wrapper}>
                {multiRowSelectionEnabled
                    ? (children as (data: T[]) => ReactNode)(selectedRows)
                    : (children as (datum: T) => ReactNode)(selectedRows[0])}
            </Group>
        </Grid.Col>
    );
};
