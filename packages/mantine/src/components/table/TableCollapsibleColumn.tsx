import {ArrowHeadDownSize24Px, ArrowHeadUpSize24Px} from '@coveord/plasma-react-icons';
import {Button} from '@mantine/core';
import {ColumnDef} from '@tanstack/table-core';
import {MouseEvent as ReactMouseEvent} from 'react';

/**
 * Generic column to use when your table need collapsible rows
 */
export const TableCollapsibleColumn: ColumnDef<unknown> = {
    id: 'collapsible',
    header: '',
    enableSorting: false,
    cell: (info) => {
        const handler = info.row.getToggleExpandedHandler();
        const onClick = (e: ReactMouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            handler();
        };

        return info.row.getCanExpand() ? (
            <Button onClick={onClick} variant="subtle" size="xs">
                {info.row.getIsExpanded() ? <ArrowHeadUpSize24Px /> : <ArrowHeadDownSize24Px />}
            </Button>
        ) : null;
    },
};
