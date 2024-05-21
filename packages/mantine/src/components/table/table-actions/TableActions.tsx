import {Factory, useProps} from '@mantine/core';
import {ForwardedRef, ReactElement, ReactNode} from 'react';

import {CustomComponentThemeExtend, identity} from '../../../utils';
import {useTableContext} from '../TableContext';
import {TableActionsList} from './TableActionsList';

export type TableActionsStylesNames = 'actionsTarget' | 'actionsDropdown' | 'actionsTooltip';

export interface TableActionsProps<T> {
    /**
     * Function that return components for the selected row or selected rows when multi row selection is enabled
     *
     * @param datum the data of the selected row(s)
     * @example
     * <Table.Actions<MyType>>
     *     {(datum: MyType) => (
     *         <Table.ActionItem
     *             component={Link}
     *             to={`edit/${datum.id}`}
     *             leftIcon={<EditSize24Px />}
     *         >
     *             Edit
     *         </Table.ActionItem>
     *     )}
     * </Table.Actions>
     */
    children: ((datum: T) => ReactNode) | ((data: T[]) => ReactNode);
    /**
     * Label for the more menu
     * @default 'More' when variant is 'split', 'Actions' when variant is 'combined'
     */
    moreMenuLabel?: string;
}

type TableActionsFactory = Factory<{
    props: TableActionsProps<unknown>;
    ref: HTMLDivElement;
    stylesNames: TableActionsStylesNames;
    compound: true;
}>;

const defaultProps: Partial<TableActionsProps<unknown>> = {};

export const TableActions = <T,>(props: TableActionsProps<T> & {ref?: ForwardedRef<HTMLDivElement>}): ReactElement => {
    const {store} = useTableContext<T>();
    const {children, moreMenuLabel} = useProps('PlasmaTableActions', defaultProps, props);
    const selectedRows = store.getSelectedRows();

    if (selectedRows.length <= 0) {
        return null;
    }

    const actions = store.multiRowSelectionEnabled
        ? (children as (data: T[]) => ReactNode)(selectedRows)
        : (children as (datum: T) => ReactNode)(selectedRows[0]);

    return <TableActionsList actions={actions} variant="split" label={moreMenuLabel} />;
};

TableActions.extend = identity as CustomComponentThemeExtend<TableActionsFactory>;
