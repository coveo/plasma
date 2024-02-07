import {Button, Checkbox, Grid, Popover, Stack} from '@mantine/core';
import {FunctionComponent} from 'react';

import {TableComponentsOrder} from '../Table.styles';
import {useTable} from '../TableContext';
import useStyles from './TableEditColumnsVisibility.styles';
import {TableEditColumnsVisibilityProps} from './TableEditColumnsVisibility.types';

export const TableEditColumnsVisibility: FunctionComponent<TableEditColumnsVisibilityProps> = ({
    classNames,
    styles,
    unstyled,
}) => {
    const {classes} = useStyles(null, {name: 'TableEditColumnsVisibility', classNames, styles, unstyled});
    const {getAllColumns} = useTable();

    const columns = getAllColumns();

    if (columns.length <= 0) {
        return null;
    }

    return (
        // change the order, add edit columns?
        <Grid.Col span="content" order={TableComponentsOrder.Actions} py="sm" className={classes.root}>
            <Popover width={200} position="bottom" withArrow shadow="md">
                <Popover.Target>
                    <Button variant="filled">Edit columns</Button>
                </Popover.Target>
                <Popover.Dropdown>
                    <Stack>
                        {columns.map((column) => (
                            <Checkbox
                                key={column.id}
                                label={column.id}
                                name={column.id}
                                checked={column.getIsVisible()}
                                onChange={column.getToggleVisibilityHandler()}
                            />
                        ))}
                    </Stack>
                </Popover.Dropdown>
            </Popover>
        </Grid.Col>
    );
};
