import {ArrowHeadDownSize24Px, ArrowHeadUpSize24Px} from '@coveord/plasma-react-icons';
import {ActionIcon} from '@mantine/core';
import {CellContext, ColumnDef} from '@tanstack/table-core';
import {FunctionComponent, MouseEvent as ReactMouseEvent} from 'react';

const defaultProps: ColumnDef<unknown> = {
    id: 'collapsible',
    enableSorting: false,
    header: '',
    size: 62,
};

/**
 * Generic column to use when your table needs collapsible rows
 */
export const TableCollapsibleColumn: ColumnDef<unknown> = {
    ...defaultProps,
    cell: (info) => <CollapsibleIcon info={info} />,
};

/**
 * Generic column to use when your table needs an accordion (collapsible rows, but only one open at the time)
 */
export const TableAccordionColumn: ColumnDef<unknown> = {
    ...defaultProps,
    cell: (info) => {
        const onToggle = () => {
            // close all other rows when the current row not is expanded
            if (!info.row.getIsExpanded()) {
                info.table.toggleAllRowsExpanded(false);
            }
        };

        return <CollapsibleIcon onToggle={onToggle} info={info} />;
    },
};

const CollapsibleIcon: FunctionComponent<{
    info: CellContext<unknown, unknown>;
    onToggle?: (e: ReactMouseEvent<HTMLButtonElement>) => void;
}> = ({info, onToggle}) => {
    const handler = info.row.getToggleExpandedHandler();
    const onClick = (e: ReactMouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onToggle?.(e);
        handler();
    };
    return info.row.getCanExpand() ? (
        <ActionIcon onClick={onClick} variant="subtle" radius="sm">
            {info.row.getIsExpanded() ? <ArrowHeadUpSize24Px /> : <ArrowHeadDownSize24Px />}
        </ActionIcon>
    ) : null;
};
