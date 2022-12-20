import {Group} from '@mantine/core';
import {ReactElement, ReactNode} from 'react';
import {useTable} from './useTable';

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
    const {getSelectedRows, multiRowSelectionEnabled} = useTable();
    const selectedRows = getSelectedRows();

    if (selectedRows.length <= 0) {
        return null;
    }

    return <Group spacing="xs">{children(multiRowSelectionEnabled ? selectedRows : selectedRows[0])}</Group>;
};
