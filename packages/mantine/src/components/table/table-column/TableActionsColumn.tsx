import {MoreSize16Px} from '@coveord/plasma-react-icons';
import {useProps} from '@mantine/core';
import {CellContext, ColumnDef} from '@tanstack/table-core';
import {FunctionComponent} from 'react';
import {TableActionsList, TableActionsListProps} from '../table-actions/TableActionsList';
import {useTableContext} from '../TableContext';

/**
 * Generic column to use when your table needs actions on rows
 */
export const TableActionsColumn: ColumnDef<unknown> = {
    id: 'actions',
    enableSorting: false,
    enableHiding: false,
    meta: {
        controlColumn: true,
    },
    header: '',
    size: 84, // 16px padding left + 28px ActionIcon + 40px padding right
    cell: (info) => <ActionsMenu info={info} />,
};

interface TableActionsColumnProps extends Omit<TableActionsListProps, 'actions'> {
    info: CellContext<unknown, unknown>;
}

const defaultProps: Partial<TableActionsColumnProps> = {
    label: 'Actions',
    icon: <MoreSize16Px height={16} />,
};

const ActionsMenu: FunctionComponent<TableActionsColumnProps> = (props) => {
    const {actions} = useTableContext();

    const {info, ...others} = useProps('PlasmaTableActionsColumn', defaultProps, props);

    const actionsElements = actions.props.children(info.row.original);
    return <TableActionsList actions={actionsElements} variant="combined" {...others} />;
};
