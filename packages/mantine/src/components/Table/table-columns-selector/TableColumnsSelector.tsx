import {IconSettings} from '@coveord/plasma-react-icons';
import {Checkbox, Combobox, Group, ScrollArea, Text, Tooltip, useCombobox} from '@mantine/core';
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

export const TableColumnsSelectorHeader = ({table, options}: TableColumnsSelectorHeaderProps) => {
    const {maxSelectableColumns, footer, limitReachedTooltip, alwaysVisibleTooltip} = {
        ...DEFAULT_OPTIONS,
        ...options,
    };

    const combobox = useCombobox({
        onDropdownClose: () => {
            combobox.resetSelectedOption();
        },
        onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
    });

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

    const handleOptionClick = (columnId: string) => {
        const column = filteredColumns.find((col) => col.id === columnId);
        if (column) {
            const {isDisabled} = getColumnState(column);
            if (!isDisabled) {
                column.toggleVisibility();
            }
        }
    };

    const columnOptions = filteredColumns.map((column) => {
        const {alwaysVisible, isDisabled, isVisible} = getColumnState(column);

        return (
            <Combobox.Option value={column.id} key={column.id} disabled={isDisabled} active={isVisible}>
                <Tooltip
                    label={alwaysVisible ? alwaysVisibleTooltip : limitReachedTooltip}
                    disabled={!isDisabled}
                    position="left"
                >
                    <Group gap="xs" wrap="nowrap">
                        <Checkbox.Indicator checked={isVisible} disabled={isDisabled} />
                        <Text size="sm">
                            {flexRender(column.columnDef.header, {
                                table,
                                column,
                                header: {column} as Header<unknown, unknown>,
                            })}
                        </Text>
                    </Group>
                </Tooltip>
            </Combobox.Option>
        );
    });

    return (
        <Combobox
            store={combobox}
            position="bottom-end"
            shadow="md"
            onOptionSubmit={handleOptionClick}
            middlewares={{flip: false, shift: true}}
        >
            <Combobox.Target>
                <ActionIcon.Tertiary onClick={() => combobox.toggleDropdown()} aria-label="settings">
                    <IconSettings height={16} />
                </ActionIcon.Tertiary>
            </Combobox.Target>
            <Combobox.Dropdown miw={270}>
                <Combobox.Options>
                    <ScrollArea.Autosize mah={200} type="always">
                        {columnOptions}
                    </ScrollArea.Autosize>
                </Combobox.Options>
                {effectiveMaxColumns && (
                    <Combobox.Footer>
                        <Text size="sm" c="dimmed">
                            {typeof footer === 'function' ? footer(effectiveMaxColumns) : footer}
                        </Text>
                    </Combobox.Footer>
                )}
            </Combobox.Dropdown>
        </Combobox>
    );
};
