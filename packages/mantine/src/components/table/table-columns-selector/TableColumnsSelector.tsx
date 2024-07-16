import {
    BoxProps,
    Button,
    Checkbox,
    CompoundStylesApiProps,
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
import {flexRender, Header} from '@tanstack/react-table';
import {ReactNode} from 'react';
import {TableComponentsOrder} from '../Table';
import {useTableContext} from '../TableContext';

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

export type TableColumnsSelectorFactory = Factory<{
    props: TableColumnsSelectorProps;
    ref: HTMLDivElement;
    stylesNames: TableColumnsSelectorStylesNames;
    compound: true;
}>;

const defaultProps: Partial<TableColumnsSelectorProps> = {
    label: 'Edit columns',
    buttonVariant: 'outline',
    limitReachedTooltip: 'You have reached the maximum display limit.',
    alwaysVisibleTooltip: 'This column is always visible.',
    showVisibleCountLabel: false,
};

export const TableColumnsSelector = factory<TableColumnsSelectorFactory>((props, ref) => {
    const {getStyles} = useTableContext();
    const {
        label,
        buttonVariant,
        showVisibleCountLabel,
        maxSelectableColumns,
        footer,
        limitReachedTooltip,
        alwaysVisibleTooltip,
        classNames,
        className,
        styles,
        style,
        vars,
        ...others
    } = useProps('TableColumnsSelector', defaultProps, props);
    const {table} = useTableContext();

    const allColumns = table.getAllLeafColumns();

    const filteredColumns = allColumns.filter((column) => !column.columnDef.meta?.controlColumn);
    const selectedColumnsCount = filteredColumns.filter((column) => column.getIsVisible()).length;

    if (filteredColumns.length <= 0) {
        return null;
    }

    const stylesApiProps = {classNames, styles};

    return (
        <Grid.Col
            span="content"
            order={TableComponentsOrder.ColumnsSelector}
            {...getStyles('columnSelector', {className, style, ...stylesApiProps})}
            {...others}
        >
            <Popover withinPortal position="bottom" shadow="md">
                <Popover.Target>
                    <Button variant={buttonVariant}>
                        {label}
                        {showVisibleCountLabel ? ` (${selectedColumnsCount})` : ''}
                    </Button>
                </Popover.Target>
                <Popover.Dropdown miw={240}>
                    <ScrollArea.Autosize mah={154}>
                        <Stack {...getStyles('columnSelectorWrapper', stylesApiProps)}>
                            {filteredColumns.map((column) => {
                                const alwaysVisible = !column.getCanHide();
                                const isDisabled =
                                    (selectedColumnsCount >= maxSelectableColumns && !column.getIsVisible()) ||
                                    alwaysVisible;

                                return (
                                    <Tooltip
                                        label={alwaysVisible ? alwaysVisibleTooltip : limitReachedTooltip}
                                        disabled={!isDisabled}
                                        position="left"
                                        key={column.id}
                                    >
                                        <div>
                                            <Checkbox
                                                key={column.id}
                                                label={flexRender(column.columnDef.header, {
                                                    table,
                                                    column,
                                                    header: {column} as Header<unknown, unknown>,
                                                })}
                                                name={column.id}
                                                checked={column.getIsVisible() || alwaysVisible}
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
