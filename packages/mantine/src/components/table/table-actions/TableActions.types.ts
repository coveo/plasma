import {DefaultProps, Selectors} from '@mantine/core';
import {ReactNode} from 'react';
import useStyles from './TableActions.styles';

type TableActionsStylesNames = Selectors<typeof useStyles>;

export interface TableActionsProps<T> extends DefaultProps<TableActionsStylesNames> {
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
