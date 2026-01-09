import {Group, SegmentedControl, Text} from '@mantine/core';
import {FunctionComponent, useMemo} from 'react';

import {useTableContext} from '../TableContext.js';
import {TablePerPageProps} from './TablePerPage.types.js';

export const TablePerPage: FunctionComponent<TablePerPageProps> & {DEFAULT_SIZE: number} = ({
    label = 'Results per page',
    values = [25, 50, 100],
    onPerPageChange,
}) => {
    const {store, table} = useTableContext();
    const choices = useMemo(() => values.map((value) => value.toString()), [values]);

    const updatePerPage = (newPerPage: string) => {
        onPerPageChange?.(Number(newPerPage));
        store.setPagination({pageIndex: 0, pageSize: parseInt(newPerPage, 10)});
    };

    return table.getPageCount() > 0 ? (
        <Group gap="sm">
            <Text fw={500}>{label}</Text>
            <SegmentedControl
                value={store.state.pagination.pageSize.toString() ?? choices[1] ?? choices[0]}
                onChange={updatePerPage}
                data={choices}
                size="sm"
            />
        </Group>
    ) : null;
};

TablePerPage.displayName = 'Table.PerPage';
TablePerPage.DEFAULT_SIZE = 50;
