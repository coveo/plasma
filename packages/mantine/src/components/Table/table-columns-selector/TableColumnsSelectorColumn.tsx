import {SettingsSize16Px} from '@coveord/plasma-react-icons';
import {Checkbox, Combobox, Text, Tooltip, useCombobox} from '@mantine/core';
import {flexRender, Header, Table} from '@tanstack/react-table';
import {ActionIcon} from '../../ActionIcon/ActionIcon';

export interface TableColumnsSelectorColumnOptions {
    /**
     * The maximum number of columns that can be selected at the same time.
     * If defined a footer will render with the remaining number of columns that can be selected.
     * Must be a positive integer (greater than 0).
     */
    maxSelectableColumns?: number;
}

export interface ColumnsSelectorHeaderProps {
    table: Table<unknown>;
    options?: TableColumnsSelectorColumnOptions;
}

export const ColumnsSelectorHeader = ({table, options = {}}: ColumnsSelectorHeaderProps) => {
    const {maxSelectableColumns} = options;

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
                    label={
                        alwaysVisible ? 'This column is always visible.' : 'You have reached the maximum display limit.'
                    }
                    disabled={!isDisabled}
                    position="left"
                >
                    <div>
                        <Checkbox
                            checked={isVisible}
                            label={flexRender(column.columnDef.header, {
                                table,
                                column,
                                header: {column} as Header<unknown, unknown>,
                            })}
                            disabled={isDisabled}
                        />
                    </div>
                </Tooltip>
            </Combobox.Option>
        );
    });

    return (
        <Combobox store={combobox} position="bottom-end" shadow="md" onOptionSubmit={handleOptionClick}>
            <Combobox.Target>
                <ActionIcon.Tertiary onClick={() => combobox.toggleDropdown()}>
                    <SettingsSize16Px height={16} />
                </ActionIcon.Tertiary>
            </Combobox.Target>
            <Combobox.Dropdown miw={270}>
                <Combobox.Options>{columnOptions}</Combobox.Options>
                {effectiveMaxColumns && (
                    <Combobox.Footer>
                        <Text size="sm" c="dimmed">
                            You can display up to {effectiveMaxColumns} columns
                        </Text>
                    </Combobox.Footer>
                )}
            </Combobox.Dropdown>
        </Combobox>
    );
};
