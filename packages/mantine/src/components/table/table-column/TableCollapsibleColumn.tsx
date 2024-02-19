import {ArrowHeadDownSize24Px, ArrowHeadUpSize24Px} from '@coveord/plasma-react-icons';
import {Factory, factory, useProps} from '@mantine/core';
import {CellContext, ColumnDef} from '@tanstack/table-core';
import {MouseEvent as ReactMouseEvent, ReactNode} from 'react';
import {ActionIcon, ActionIconProps} from '../../action-icon';
import {useTableStyles} from '../TableContext';

export type TableCollapsibleColumnStylesNames = 'collapsibleIcon';

const sharedProps: ColumnDef<unknown> = {
    id: 'collapsible',
    enableSorting: false,
    header: '',
    size: 62,
};

/**
 * Generic column to use when your table needs collapsible rows
 */
export const TableCollapsibleColumn: ColumnDef<unknown> = {
    ...sharedProps,
    cell: (info) => <CollapsibleIcon info={info} />,
};

/**
 * Generic column to use when your table needs an accordion (collapsible rows, but only one open at the time)
 */
export const TableAccordionColumn: ColumnDef<unknown> = {
    ...sharedProps,
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

interface CollapsibleIconProps extends ActionIconProps {
    info: CellContext<unknown, unknown>;
    onToggle?: (e: ReactMouseEvent<HTMLButtonElement>) => void;
    iconExpanded?: ReactNode;
    iconCollapsed?: ReactNode;
}

type TableCollapsibleColumnFactory = Factory<{
    props: CollapsibleIconProps;
    ref: HTMLButtonElement;
    stylesNames: TableCollapsibleColumnStylesNames;
    compound: true;
}>;

const defaultProps: Partial<CollapsibleIconProps> = {
    iconExpanded: <ArrowHeadUpSize24Px height={24} />,
    iconCollapsed: <ArrowHeadDownSize24Px height={24} />,
};

const CollapsibleIcon = factory<TableCollapsibleColumnFactory>((props, ref) => {
    const ctx = useTableStyles();
    const {info, onToggle, iconExpanded, iconCollapsed, classNames, className, style, styles, ...others} = useProps(
        'PlasmaTableCollapsibleColumn',
        defaultProps,
        props,
    );
    const handler = info.row.getToggleExpandedHandler();
    const onClick = (e: ReactMouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onToggle?.(e);
        handler();
    };
    return info.row.getCanExpand() ? (
        <ActionIcon
            ref={ref}
            onClick={onClick}
            variant="subtle"
            radius="sm"
            {...ctx.getStyles('collapsibleIcon', {className, classNames, styles, style})}
            {...others}
        >
            {info.row.getIsExpanded() ? iconExpanded : iconCollapsed}
        </ActionIcon>
    ) : null;
});
