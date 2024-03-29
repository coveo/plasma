import {Factory, Grid, GridColProps, Group, useProps} from '@mantine/core';
import {ForwardedRef, ReactElement, ReactNode} from 'react';

import {CustomComponentThemeExtend, identity} from '../../../utils';
import {TableComponentsOrder} from '../Table';
import {useTable, useTableStyles} from '../TableContext';

export type TableActionsStylesNames = 'actionsRoot' | 'actionsGroup';

export interface TableActionsProps<T> extends Omit<GridColProps, 'children'> {
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
     *             color="navy.8"
     *         >
     *             Edit
     *         </Button>
     *     )}
     * </Table.Actions>
     */
    children: ((datum: T) => ReactNode) | ((data: T[]) => ReactNode);
}

type TableActionsFactory = Factory<{
    props: TableActionsProps<unknown>;
    ref: HTMLDivElement;
    stylesNames: TableActionsStylesNames;
    compound: true;
}>;

const defaultProps: Partial<TableActionsProps<unknown>> = {};

export const TableActions = <T,>(props: TableActionsProps<T> & {ref?: ForwardedRef<HTMLDivElement>}): ReactElement => {
    const ctx = useTableStyles();
    const {getSelectedRows, multiRowSelectionEnabled} = useTable<T>();
    const {style, className, classNames, styles, children, ...others} = useProps(
        'PlasmaTableActions',
        defaultProps,
        props,
    );
    const selectedRows = getSelectedRows();

    if (selectedRows.length <= 0) {
        return null;
    }

    return (
        <Grid.Col span="content" order={TableComponentsOrder.Actions} {...ctx.getStyles('actionsRoot', {})} {...others}>
            <Group gap="xs" {...ctx.getStyles('actionsGroup', {})}>
                {multiRowSelectionEnabled
                    ? (children as (data: T[]) => ReactNode)(selectedRows)
                    : (children as (datum: T) => ReactNode)(selectedRows[0])}
            </Group>
        </Grid.Col>
    );
};

TableActions.extend = identity as CustomComponentThemeExtend<TableActionsFactory>;
