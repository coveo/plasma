import {CrossSize16Px} from '@coveord/plasma-react-icons';
import {Grid, Tooltip} from '@mantine/core';
import {FunctionComponent} from 'react';

import {Button} from '../../button';
import {TableLayoutControl} from '../layouts/TableLayoutControl';
import {TableComponentsOrder} from '../Table.styles';
import {useTable} from '../TableContext';
import useStyles from './TableHeader.styles';
import {TableHeaderProps} from './TableHeader.types';

export const TableHeader: FunctionComponent<TableHeaderProps> = ({
    classNames,
    styles,
    unstyled,
    children,
    ...others
}) => {
    const {getSelectedRows, multiRowSelectionEnabled, clearSelection, disableRowSelection} = useTable();
    const {classes} = useStyles(null, {name: 'TableHeader', classNames, styles, unstyled});
    const selectedRows = getSelectedRows();

    return (
        <Grid
            justify="flex-start"
            align="center"
            gutter="sm"
            p={0}
            pl="md"
            pr="lg"
            m={0}
            className={classes.root}
            {...others}
        >
            {multiRowSelectionEnabled && selectedRows.length > 0 ? (
                <Grid.Col
                    span="auto"
                    py="sm"
                    className={classes.multiSelectInfo}
                    order={TableComponentsOrder.MultiSelectInfo}
                >
                    <Tooltip label="Unselect all">
                        <Button
                            onClick={clearSelection}
                            variant="subtle"
                            disabled={disableRowSelection}
                            leftIcon={<CrossSize16Px height={16} />}
                        >
                            {selectedRows.length} selected
                        </Button>
                    </Tooltip>
                </Grid.Col>
            ) : null}
            {children}
            <TableLayoutControl />
        </Grid>
    );
};
