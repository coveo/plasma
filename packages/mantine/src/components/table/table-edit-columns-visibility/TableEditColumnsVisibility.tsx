import {Button, Checkbox, Divider, Grid, Popover, Stack} from '@mantine/core';
import {FunctionComponent} from 'react';

import {TableComponentsOrder} from '../Table.styles';
import {useTable} from '../TableContext';
import useStyles from './TableEditColumnsVisibility.styles';
import {TableEditColumnsVisibilityProps} from './TableEditColumnsVisibility.types';

const COLUMNS_IDS_TO_EXCLUDE = ['collapsible', 'select'];

export const TableEditColumnsVisibility: FunctionComponent<TableEditColumnsVisibilityProps> = ({
    classNames,
    styles,
    unstyled,
    label = 'Edit columns',
    showVisibleCountLabel = false,
    nonHideableColumns,
    maxSelectableColumns,
}) => {
    const {classes} = useStyles(null, {name: 'TableEditColumnsVisibility', classNames, styles, unstyled});
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
        footerText = 'All available columns selected';
    } else if (adjustedMaxSelectableColumns && selectedColumnsCount >= adjustedMaxSelectableColumns) {
        footerText = 'Maximum columns selected';
    } else {
        footerText = `you can choose ${remainingColumnsCount} more`;
    }

    if (filteredColumns.length <= 0) {
        return null;
    }

    return (
        <Grid.Col span="content" order={TableComponentsOrder.EditColumnsVisibility} py="sm" className={classes.root}>
            <Popover width={200} position="bottom" shadow="md">
                <Popover.Target>
                    <Button variant="outline">{`${label}${
                        showVisibleCountLabel ? ` (${selectedColumnsCount})` : ''
                    }`}</Button>
                </Popover.Target>
                <Popover.Dropdown>
                    <Stack>
                        {filteredColumns
                            .sort((a, b) =>
                                // sort to render nonHideableColumns first
                                nonHideableColumns?.includes(a.id) && !nonHideableColumns?.includes(b.id) ? -1 : 1,
                            )
                            .map((column) => (
                                <Checkbox
                                    key={column.id}
                                    label={column.id}
                                    name={column.id}
                                    checked={nonHideableColumns?.includes(column.id) ? true : column.getIsVisible()}
                                    disabled={
                                        nonHideableColumns?.includes(column.id) ||
                                        (selectedColumnsCount >= adjustedMaxSelectableColumns && !column.getIsVisible())
                                    }
                                    onChange={column.getToggleVisibilityHandler()}
                                />
                            ))}
                    </Stack>
                    {maxSelectableColumns && (
                        <>
                            <Divider mb="xs" mt="sm" />
                            <div>{footerText}</div>
                        </>
                    )}
                </Popover.Dropdown>
            </Popover>
        </Grid.Col>
    );
};
