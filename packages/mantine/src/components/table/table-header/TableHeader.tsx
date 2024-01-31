import {CrossSize16Px} from '@coveord/plasma-react-icons';
import {Grid, Tooltip} from '@mantine/core';
import clsx from 'clsx';
import {FunctionComponent} from 'react';

import {Button} from '../../button';
import {TableLayoutControl} from '../layouts/TableLayoutControl';
import {TableComponentsOrder} from '../Table';
import {useTable} from '../TableContext';
import TableHeaderClasses from './TableHeader.module.css';
import {TableHeaderProps} from './TableHeader.types';

export const TableHeader: FunctionComponent<TableHeaderProps> = ({children, ...others}) => {
    const {getSelectedRows, multiRowSelectionEnabled, clearSelection, disableRowSelection} = useTable();
    const selectedRows = getSelectedRows();

    return (
        <Grid
            justify="flex-start"
            align="center"
            gutter="10px 0"
            classNames={{root: TableHeaderClasses.root, inner: TableHeaderClasses.inner}}
            {...others}
        >
            {multiRowSelectionEnabled && selectedRows.length > 0 ? (
                <Grid.Col
                    span="auto"
                    classNames={{col: clsx(TableHeaderClasses.multiSelectInfo, TableHeaderClasses.col)}}
                    order={TableComponentsOrder.MultiSelectInfo}
                >
                    <Tooltip label="Unselect all">
                        <Button
                            onClick={clearSelection}
                            variant="subtle"
                            disabled={disableRowSelection}
                            leftSection={<CrossSize16Px height={16} />}
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
