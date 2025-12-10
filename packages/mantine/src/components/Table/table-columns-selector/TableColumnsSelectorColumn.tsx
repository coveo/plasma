import {SettingsSize16Px} from '@coveord/plasma-react-icons';
import {Checkbox, Combobox, Tooltip, useCombobox} from '@mantine/core';
import {ColumnDef, flexRender, Header, Table} from '@tanstack/react-table';
import {ComponentType, ReactNode, SVGProps} from 'react';
import {ActionIcon} from '../../ActionIcon/ActionIcon';

export interface TableColumnsSelectorColumnOptions {
    /**
     * The icon to display in the button
     * @default SettingsSize16Px
     */
    icon?: ComponentType<SVGProps<SVGSVGElement>>;
    /**
     * The maximum number of columns that can be selected at the same time.
     * If defined a footer will render with the remaining number of columns that can be selected.
     */
    maxSelectableColumns?: number;
    /**
     * The content to display in the footer when maxSelectableColumns is defined.
     */
    footer?: ReactNode;
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

const defaultOptions: TableColumnsSelectorColumnOptions = {
    icon: SettingsSize16Px,
    limitReachedTooltip: 'You have reached the maximum display limit.',
    alwaysVisibleTooltip: 'This column is always visible.',
};

interface ColumnsSelectorHeaderProps {
    table: Table<unknown>;
    options: TableColumnsSelectorColumnOptions;
}

const ColumnsSelectorHeader = ({table, options}: ColumnsSelectorHeaderProps) => {
    const {
        icon: Icon = defaultOptions.icon,
        maxSelectableColumns,
        footer,
        limitReachedTooltip = defaultOptions.limitReachedTooltip,
        alwaysVisibleTooltip = defaultOptions.alwaysVisibleTooltip,
    } = options;

    const combobox = useCombobox({
        onDropdownClose: () => {
            combobox.resetSelectedOption();
        },
        onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
    });

    const allColumns = table.getAllLeafColumns();
    const filteredColumns = allColumns.filter((column) => !column.columnDef.meta?.controlColumn);
    const selectedColumnsCount = filteredColumns.filter((column) => column.getIsVisible()).length;

    if (filteredColumns.length <= 0) {
        return null;
    }

    const handleOptionClick = (columnId: string) => {
        const column = filteredColumns.find((col) => col.id === columnId);
        if (column) {
            const alwaysVisible = !column.getCanHide();
            const isDisabled =
                (maxSelectableColumns !== undefined &&
                    selectedColumnsCount >= maxSelectableColumns &&
                    !column.getIsVisible()) ||
                alwaysVisible;
            if (!isDisabled) {
                column.toggleVisibility();
            }
        }
    };

    const columnOptions = filteredColumns.map((column) => {
        const alwaysVisible = !column.getCanHide();
        const isDisabled =
            (maxSelectableColumns !== undefined &&
                selectedColumnsCount >= maxSelectableColumns &&
                !column.getIsVisible()) ||
            alwaysVisible;
        const isVisible = column.getIsVisible() || alwaysVisible;

        return (
            <Combobox.Option value={column.id} key={column.id} disabled={isDisabled} active={isVisible}>
                <Tooltip
                    label={alwaysVisible ? alwaysVisibleTooltip : limitReachedTooltip}
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
                <ActionIcon.Quaternary onClick={() => combobox.toggleDropdown()}>
                    <Icon height={16} width={16} />
                </ActionIcon.Quaternary>
            </Combobox.Target>
            <Combobox.Dropdown miw={270}>
                <Combobox.Options>{columnOptions}</Combobox.Options>
                {maxSelectableColumns && <Combobox.Footer>{footer}</Combobox.Footer>}
            </Combobox.Dropdown>
        </Combobox>
    );
};

/**
 * Creates a column that displays a column selector button in the header.
 * This column should be placed at the end of your columns array to appear on the right side of the table.
 * The column itself renders empty cells.
 *
 * @example
 * ```tsx
 * const columns = [
 *   columnHelper.accessor('name', { header: 'Name' }),
 *   columnHelper.accessor('age', { header: 'Age' }),
 *   TableColumnsSelectorColumn(),
 *   // or with options:
 *   TableColumnsSelectorColumn({ maxSelectableColumns: 5 }),
 * ];
 * ```
 */
export const TableColumnsSelectorColumn = (options: TableColumnsSelectorColumnOptions = {}): ColumnDef<unknown> => ({
    id: 'columnsSelector',
    enableSorting: false,
    enableHiding: false,
    meta: {
        controlColumn: true,
    },
    size: 0,
    minSize: 0,
    maxSize: 0,
    header: ({table}) => <ColumnsSelectorHeader table={table} options={{...defaultOptions, ...options}} />,
    cell: () => null,
});
