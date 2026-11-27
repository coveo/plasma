import {Group, SegmentedControl, Text} from '@mantine/core';
import {FunctionComponent, useId, useMemo} from 'react';

import {useTableContext} from '../TableContext.js';
import {TablePerPageProps} from './TablePerPage.types.js';

export const TablePerPage: FunctionComponent<TablePerPageProps> & {DEFAULT_SIZE: number} = ({
    label = 'Results per page',
    values = [25, 50, 100],
    onPerPageChange,
}) => {
    const {store, table, getStyles} = useTableContext();
    const labelId = useId();
    const choices = useMemo(() => values.map((value) => value.toString()), [values]);

    const updatePerPage = (newPerPage: string) => {
        onPerPageChange?.(Number(newPerPage));
        store.setPagination({page: 0, perPage: parseInt(newPerPage, 10)});
    };

    const totalRows = table.getRowCount();
    const smallestPageSize = Math.min(...values);

    if (totalRows <= smallestPageSize) {
        return null;
    }

    return (
        <Group gap="xs" {...getStyles('perPage')}>
            <Text id={labelId} size="xs" {...getStyles('perPageLabel')}>
                {label}
            </Text>
            <SegmentedControl
                aria-labelledby={labelId}
                value={store.state.pagination.perPage.toString() ?? choices[1] ?? choices[0]}
                onChange={updatePerPage}
                data={choices}
            />
        </Group>
    );
};

TablePerPage.displayName = 'Table.PerPage';
TablePerPage.DEFAULT_SIZE = 50;
