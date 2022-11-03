import {ReactElement, ReactNode} from 'react';
import {useTable} from './useTable';

interface TableActionsProps<T> {
    /**
     * Function that return components for the selected row
     *
     * @param datum the data of the selected row
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
    children: (datum: T) => ReactNode;
}

export const TableActions = <T,>({children}: TableActionsProps<T>): ReactElement => {
    const {getSelectedRow} = useTable();
    const selectedRow = getSelectedRow();

    if (!selectedRow) {
        return null;
    }

    return <>{children(selectedRow)}</>;
};
