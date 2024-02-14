import {Button, Checkbox, Divider, Grid, Popover, ScrollArea, Stack} from '@mantine/core';
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
    nonHideableColumns,
    maxSelectableColumns,
    allColumnsSelectedFooterLabel = 'All available columns selected',
    maxSelectedColumnsFooterLabel = 'Maximum columns selected',
    columnNames,
}) => {
    const {classes} = useStyles(null, {name: 'TableColumnsSelector', classNames, styles, unstyled});
    const {getAllColumns} = useTable();

    const filteredColumns = getAllColumns().filter((column) => !COLUMNS_IDS_TO_EXCLUDE.includes(column.id));

    const selectedColumnsCount = filteredColumns.filter((column) => column.getIsVisible()).length;
    const adjustedMaxSelectableColumns = maxSelectableColumns
        ? Math.min(maxSelectableColumns, filteredColumns.length)
        : filteredColumns.length;

    const remainingColumnsCount = adjustedMaxSelectableColumns
        ? adjustedMaxSelectableColumns - selectedColumnsCount
        : filteredColumns.filter((column) => !column.getIsVisible() && !nonHideableColumns?.includes(column.id)).length;

    let footerText;
    if (selectedColumnsCount === filteredColumns.length) {
        footerText = allColumnsSelectedFooterLabel;
    } else if (adjustedMaxSelectableColumns && selectedColumnsCount >= adjustedMaxSelectableColumns) {
        footerText = maxSelectedColumnsFooterLabel;
    } else {
        footerText = `You can choose ${remainingColumnsCount} more`;
    }

    if (filteredColumns.length <= 0) {
        return null;
    }

    return (
        <Grid.Col span="content" order={TableComponentsOrder.ColumnsSelector} py="sm" className={classes.root}>
            <Popover position="bottom" shadow="md">
                <Popover.Target>
                    <Button variant={buttonVariant}>{`${label}${
                        showVisibleCountLabel ? ` (${selectedColumnsCount})` : ''
                    }`}</Button>
                </Popover.Target>
                <Popover.Dropdown miw={240}>
                    <ScrollArea.Autosize mah={154}>
                        <Stack>
                            {filteredColumns
                                .sort((a, b) =>
                                    // sort to render nonHideableColumns first
                                    nonHideableColumns?.includes(a.id) && !nonHideableColumns?.includes(b.id) ? -1 : 1,
                                )
                                .map((column) => (
                                    <Checkbox
                                        key={column.id}
                                        label={columnNames?.[column.id] || column.id}
                                        name={column.id}
                                        checked={nonHideableColumns?.includes(column.id) ? true : column.getIsVisible()}
                                        disabled={
                                            nonHideableColumns?.includes(column.id) ||
                                            (selectedColumnsCount >= adjustedMaxSelectableColumns &&
                                                !column.getIsVisible())
                                        }
                                        onChange={column.getToggleVisibilityHandler()}
                                    />
                                ))}
                        </Stack>
                    </ScrollArea.Autosize>
                    {maxSelectableColumns && (
                        <>
                            <Divider mb="xs" mt="sm" />
                            {footerText}
                        </>
                    )}
                </Popover.Dropdown>
            </Popover>
        </Grid.Col>
    );
};
