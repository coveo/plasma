import {ArrowHeadDownSize24Px, ArrowHeadUpSize24Px} from '@coveord/plasma-react-icons';
import {ActionIcon} from '@mantine/core';
import {ColumnDef} from '@tanstack/table-core';
import {MouseEvent as ReactMouseEvent} from 'react';

/**
 * Generic column to use when your table needs collapsible rows
 */
export const TableCollapsibleColumn: ColumnDef<unknown> = {
    id: 'collapsible',
    enableSorting: false,
    header: '',
    size: 62,
    cell: (info) => {
        const handler = info.row.getToggleExpandedHandler();
        const onClick = (e: ReactMouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            handler();
        };

        return info.row.getCanExpand() ? (
            <ActionIcon onClick={onClick} variant="subtle" radius="sm">
                {info.row.getIsExpanded() ? <ArrowHeadUpSize24Px /> : <ArrowHeadDownSize24Px />}
            </ActionIcon>
        ) : null;
    },
};
