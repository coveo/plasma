import {
    BoxProps,
    Button,
    Checkbox,
    Divider,
    factory,
    Factory,
    Grid,
    Popover,
    ScrollArea,
    Stack,
    Tooltip,
    useProps,
} from '@mantine/core';
import {CompoundStylesApiProps} from '@mantine/core/lib/core/styles-api/styles-api.types';
import {ReactNode} from 'react';

import {TableComponentsOrder} from '../Table';
import {useTable, useTableStyles} from '../TableContext';

export type TableColumnsSelectorStylesNames = 'columnSelector' | 'columnSelectorWrapper';

export interface TableColumnsSelectorProps extends BoxProps, CompoundStylesApiProps<TableColumnsSelectorFactory> {
    /**
     * The label of the button
     * @default 'Edit columns'
     */
    label?: ReactNode;
    /**
     * The style variant of the button
     * @default 'outline'
     */
    buttonVariant?: string;
    /**
     * An array of column ids that the user cannot hide. This is useful for columns that are required for the table to function properly.
     * @default []
     */
    nonHideableColumns?: string[];
    /**
     * Whether the count of visible columns is shown in the button label.
     * @default false
     */
    showVisibleCountLabel?: boolean;
    /**
     * The maximum number of columns that can be selected at the same time.
     * If defined a footer will render with the remaining number of columns that can be selected.
     */
    maxSelectableColumns?: number;
    /**
     * A dictionary of column ids and names to use for the checkbox labels.
     */
    columnNames: Record<string, string>;
    /**
     * The content to display in the footer when maxSelectableColumns is defined.
     */
    footer?: ReactNode;
    /**
     * The tooltip to display when the user hovers over a disabled checkbox.
     * @default 'You have reached the maximum display limit.'
     */
    limitReachedTooltip?: string;
}

export type TableColumnsSelectorFactory = Factory<{
    props: TableColumnsSelectorProps;
    ref: HTMLDivElement;
    stylesNames: TableColumnsSelectorStylesNames;
    compound: true;
}>;

const COLUMNS_IDS_TO_EXCLUDE = ['collapsible', 'select'];

const defaultProps: Partial<TableColumnsSelectorProps> = {
    label: 'Edit columns',
    buttonVariant: 'outline',
    limitReachedTooltip: 'You have reached the maximum display limit.',
    showVisibleCountLabel: false,
};

export const TableColumnsSelector = factory<TableColumnsSelectorFactory>((props, ref) => {
    const ctx = useTableStyles();
    const {
        label,
        buttonVariant,
        showVisibleCountLabel,
        nonHideableColumns = [],
        maxSelectableColumns,
        footer,
        limitReachedTooltip,
        columnNames,
        classNames,
        className,
        styles,
        style,
        vars,
        ...others
    } = useProps('TableColumnsSelector', defaultProps, props);
    const {getAllColumns} = useTable();

    const columnsToExclude = [...nonHideableColumns, ...COLUMNS_IDS_TO_EXCLUDE];

    const filteredColumns = getAllColumns().filter((column) => !columnsToExclude.includes(column.id));

    const selectedColumnsCount = filteredColumns.filter((column) => column.getIsVisible()).length;

    if (filteredColumns.length <= 0) {
        return null;
    }

    const stylesApiProps = {classNames, styles};

    return (
        <Grid.Col
            span="content"
            order={TableComponentsOrder.ColumnsSelector}
            {...ctx.getStyles('columnSelector', {className, style, ...stylesApiProps})}
            {...others}
        >
            <Popover withinPortal position="bottom" shadow="md">
                <Popover.Target>
                    <Button variant={buttonVariant}>{`${label}${
                        showVisibleCountLabel ? ` (${selectedColumnsCount})` : ''
                    }`}</Button>
                </Popover.Target>
                <Popover.Dropdown miw={240}>
                    <ScrollArea.Autosize mah={154}>
                        <Stack {...ctx.getStyles('columnSelectorWrapper', stylesApiProps)}>
                            {filteredColumns.map((column) => {
                                const isDisabled =
                                    selectedColumnsCount >= maxSelectableColumns && !column.getIsVisible();
                                return (
                                    <Tooltip label={limitReachedTooltip} disabled={!isDisabled} position="left">
                                        <div>
                                            <Checkbox
                                                key={column.id}
                                                label={columnNames?.[column.id] || column.id}
                                                name={column.id}
                                                checked={column.getIsVisible()}
                                                disabled={isDisabled}
                                                onChange={column.getToggleVisibilityHandler()}
                                            />
                                        </div>
                                    </Tooltip>
                                );
                            })}
                        </Stack>
                    </ScrollArea.Autosize>
                    {maxSelectableColumns && (
                        <>
                            <Divider mb="xs" mt="sm" />
                            {footer}
                        </>
                    )}
                </Popover.Dropdown>
            </Popover>
        </Grid.Col>
    );
});
