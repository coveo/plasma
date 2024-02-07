import {Button, Checkbox, Divider, Grid, Popover, Stack, Text} from '@mantine/core';
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
    const idsToExclude = ['collapsible', 'select']; // Remplacez par les id que vous voulez exclure

    return (
        <Grid.Col span="content" order={TableComponentsOrder.EditColumnsVisibility} py="sm" className={classes.root}>
            <Popover width={200} position="bottom" shadow="md">
                <Popover.Target>
                    {/* mettre le count des colonnes visibles ou carrément le label en options? */}
                    <Button variant="outline">{`Edit columns`}</Button>
                </Popover.Target>
                <Popover.Dropdown>
                    <Stack>
                        {/* enlever les columns qui n'en sonnt pas vraiment  */}
                        {columns
                            .filter((column) => !idsToExclude.includes(column.id))
                            .map((column) => (
                                <Checkbox
                                    // disabled some box how?
                                    key={column.id}
                                    label={column.id}
                                    name={column.id}
                                    checked={column.getIsVisible()}
                                    onChange={column.getToggleVisibilityHandler()}
                                />
                            ))}
                    </Stack>
                    <Divider mb="xs" mt="sm" />
                    <Text>coucou chuis l'footer</Text>
                    {/* ajouter le tit footer pour recs - optionnal */}
                </Popover.Dropdown>
            </Popover>
        </Grid.Col>
    );
};
