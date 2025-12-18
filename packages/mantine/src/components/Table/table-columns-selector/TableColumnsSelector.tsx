import {IconSettings} from '@coveord/plasma-react-icons';
import {Checkbox, Divider, Popover, ScrollArea, Stack, Text, Tooltip} from '@mantine/core';
import {flexRender, Header, Table} from '@tanstack/react-table';
import {ActionIcon} from '../../ActionIcon/ActionIcon';

export interface TableColumnsSelectorOptions {
    /**
     * The maximum number of columns that can be selected at the same time.
     * If defined a footer will render with the remaining number of columns that can be selected.
     * Must be a positive integer (greater than 0).
     */
    maxSelectableColumns?: number;
    /**
     * The content to display in the footer when maxSelectableColumns is defined.
     * Can be a string or a function that receives the maxSelectableColumns value.
     * @default (max) => `You can display up to ${max} columns.`
     */
    footer?: string | ((maxSelectableColumns: number) => string);
    /**
     * The tooltip to display when the user hovers over a disabled checkbox because of the limit.
     * @default 'You have reached the maximum display limit.'
     */
    limitReachedTooltip?: string;
    /**
     * The tooltip to display when the user hovers over a disabled checkbox because a column cannot be hidden.
     * @default 'This column is always visible.'
     */
    alwaysVisibleTooltip?: string;
}

export interface TableColumnsSelectorHeaderProps {
    table: Table<unknown>;
    options?: TableColumnsSelectorOptions;
}

const DEFAULT_OPTIONS: Omit<TableColumnsSelectorOptions, 'footer'> & {
    footer: (maxSelectableColumns: number) => string;
} = {
    footer: (max) => `You can display up to ${max} columns.`,
    limitReachedTooltip: 'You have reached the maximum display limit.',
    alwaysVisibleTooltip: 'This column is always visible.',
};

export const TableColumnsSelector = ({table, options}: TableColumnsSelectorHeaderProps) => {
    const {maxSelectableColumns, footer, limitReachedTooltip, alwaysVisibleTooltip} = {
        ...DEFAULT_OPTIONS,
        ...options,
    };

    const allColumns = table.getAllLeafColumns();
    const filteredColumns = allColumns.filter((column) => !column.columnDef.meta?.controlColumn);
    const selectedColumnsCount = filteredColumns.filter((column) => column.getIsVisible()).length;

    // Validate maxSelectableColumns - must be a positive integer to be effective
    const effectiveMaxColumns =
        maxSelectableColumns !== undefined && maxSelectableColumns > 0 ? maxSelectableColumns : undefined;

    if (filteredColumns.length <= 0) {
        return null;
    }

    const getColumnState = (column: (typeof filteredColumns)[number]) => {
        const alwaysVisible = !column.getCanHide();
        const isDisabled =
            (effectiveMaxColumns !== undefined &&
                selectedColumnsCount >= effectiveMaxColumns &&
                !column.getIsVisible()) ||
            alwaysVisible;
        const isVisible = column.getIsVisible() || alwaysVisible;
        return {alwaysVisible, isDisabled, isVisible};
    };

    const columnOptions = filteredColumns.map((column) => {
        const {alwaysVisible, isDisabled, isVisible} = getColumnState(column);

        return (
            <Tooltip
                label={alwaysVisible ? alwaysVisibleTooltip : limitReachedTooltip}
                disabled={!isDisabled}
                position="left"
                key={column.id}
            >
                <div>
                    <Checkbox
                        label={flexRender(column.columnDef.header, {
                            table,
                            column,
                            header: {column} as Header<unknown, unknown>,
                        })}
                        name={column.id}
                        checked={isVisible}
                        disabled={isDisabled}
                        onChange={column.getToggleVisibilityHandler()}
                    />
                </div>
            </Tooltip>
        );
    });

    return (
        <Popover position="bottom-end" shadow="md">
            <Popover.Target>
                <ActionIcon.Tertiary aria-label="settings">
                    <IconSettings height={16} />
                </ActionIcon.Tertiary>
            </Popover.Target>
            <Popover.Dropdown miw={270} pb="xs">
                <ScrollArea.Autosize mah={200} type="auto">
                    <Stack gap="xs">{columnOptions}</Stack>
                </ScrollArea.Autosize>
                {effectiveMaxColumns && (
                    <>
                        <Divider my="xs" mx="-sm" />
                        <Text size="sm" c="dimmed">
                            {typeof footer === 'function' ? footer(effectiveMaxColumns) : footer}
                        </Text>
                    </>
                )}
            </Popover.Dropdown>
        </Popover>
    );
};
