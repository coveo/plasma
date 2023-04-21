import {Grid, Group} from '@mantine/core';
import {ReactElement, ReactNode} from 'react';
import {TableComponentsOrder} from './Table.styles';

import {useTable} from './TableContext';

interface TableActionsProps<T> {
    /**
     * Function that return components for the selected row or selected rows when multi row selection is enabled
     *
     * @param datum the data of the selected row(s)
     * @example
     * <Table.Actions<MyType>>
     *     {(datum: MyType) => (
     *         <Button
     *             component={Link}
     *             to={`edit/${datum.id}`}
     *             leftIcon={<EditSize24Px />}
     *             variant="subtle"
     *             color="navyBlue.8"
     *         >
     *             Edit
     *         </Button>
     *     )}
     * </Table.Actions>
     */
    children: ((datum: T) => ReactNode) | ((data: T[]) => ReactNode);
}

export const TableActions = <T,>({children}: TableActionsProps<T>): ReactElement => {
    const {getSelectedRows, multiRowSelectionEnabled} = useTable<T>();
    const selectedRows = getSelectedRows();

    if (selectedRows.length <= 0) {
        return null;
    }

    return (
        <Grid.Col span="content" order={TableComponentsOrder.Actions} py="sm">
            <Group spacing="xs" style={{display: 'inline-flex'}}>
                {multiRowSelectionEnabled
                    ? (children as (data: T[]) => ReactNode)(selectedRows)
                    : (children as (datum: T) => ReactNode)(selectedRows[0])}
            </Group>
        </Grid.Col>
    );
};
