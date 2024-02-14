import {Button, Checkbox, Divider, Grid, Popover, ScrollArea, Stack, Tooltip} from '@mantine/core';
import {FunctionComponent} from 'react';

import {TableComponentsOrder} from '../Table.styles';
import {useTable} from '../TableContext';
import useStyles from './TableColumnsSelector.styles';
import {TableColumnsSelectorProps} from './TableColumnsSelector.types';

const COLUMNS_IDS_TO_EXCLUDE = ['collapsible', 'select'];

export const TableColumnsSelector: FunctionComponent<TableColumnsSelectorProps> = ({
    classNames,
    styles,
    unstyled,
    label = 'Edit columns',
    buttonVariant = 'outline',
    showVisibleCountLabel = false,
    nonHideableColumns = [],
    maxSelectableColumns,
    footer,
    tooltip = 'You have reached the maximum display limit.',
    columnNames,
}) => {
    const {classes} = useStyles(null, {name: 'TableColumnsSelector', classNames, styles, unstyled});
    const {getAllColumns} = useTable();

    const columnsToExclude = [...nonHideableColumns, ...COLUMNS_IDS_TO_EXCLUDE];

    const filteredColumns = getAllColumns().filter((column) => !columnsToExclude.includes(column.id));

    const selectedColumnsCount = filteredColumns.filter((column) => column.getIsVisible()).length;

    if (filteredColumns.length <= 0) {
        return null;
    }

    return (
        <Grid.Col span="content" order={TableComponentsOrder.ColumnsSelector} py="sm" className={classes.root}>
            <Popover withinPortal position="bottom" shadow="md">
                <Popover.Target>
                    <Button variant={buttonVariant}>{`${label}${
                        showVisibleCountLabel ? ` (${selectedColumnsCount})` : ''
                    }`}</Button>
                </Popover.Target>
                <Popover.Dropdown miw={240}>
                    <ScrollArea.Autosize mah={154}>
                        <Stack>
                            {filteredColumns.map((column) => {
                                const isDisabled =
                                    selectedColumnsCount >= maxSelectableColumns && !column.getIsVisible();
                                const checkbox = (
                                    <Checkbox
                                        key={column.id}
                                        label={columnNames?.[column.id] || column.id}
                                        name={column.id}
                                        checked={column.getIsVisible()}
                                        disabled={isDisabled}
                                        onChange={column.getToggleVisibilityHandler()}
                                    />
                                );

                                return isDisabled ? (
                                    <Tooltip label={tooltip} position="left">
                                        <div>{checkbox}</div>
                                    </Tooltip>
                                ) : (
                                    checkbox
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
};
