import {Group, SegmentedControl, Text} from '@mantine/core';
import {FunctionComponent} from 'react';

import {useTable} from '../TableContext';
import {TablePerPageProps} from './TablePerPage.types';

export const TablePerPage: FunctionComponent<TablePerPageProps> & {DEFAULT_SIZE: number} = ({
    label = 'Results per page',
    values = [25, 50, 100],
    onPerPageChange,
}) => {
    const {state, setState, getPageCount} = useTable();

    const updatePerPage = (newPerPage: string) => {
        onPerPageChange?.(Number(newPerPage));
        setState((prevState) => ({
            ...prevState,
            pagination: {pageIndex: 0, pageSize: parseInt(newPerPage, 10)},
        }));
    };

    return getPageCount() > 0 ? (
        <Group spacing="sm">
            <Text fw={500}>{label}</Text>
            <SegmentedControl
                value={state.pagination.pageSize.toString() ?? values?.[1].toString()}
                onChange={updatePerPage}
                data={values.map((value) => value.toString())}
                color="action"
                size="sm"
            />
        </Group>
    ) : null;
};

TablePerPage.DEFAULT_SIZE = 50;
