import {Group, SegmentedControl, Text} from '@mantine/core';
import {FunctionComponent} from 'react';

import {useTable} from './TableContext';

interface TablePerPageProps {
    /**
     * The label displayed before the control
     *
     * @default Results per page
     */
    label?: string;
    /**
     * The per page choices to display
     *
     * @default [25, 50, 100]
     */
    values?: number[];
    /**
     * The callback if the entries per page is changed.
     *
     * @param perPage the new number of entries per page
     */
    onPerPageChange?: (perPage: number) => void;
}

export const TablePerPage: FunctionComponent<TablePerPageProps> & {DEFAULT_SIZE: number} = ({
    label = 'Results per page',
    values = [25, 50, 100],
    onPerPageChange,
}) => {
    const {state, setState} = useTable();

    const updatePerPage = (newPerPage: string) => {
        onPerPageChange?.(Number(newPerPage));
        setState((prevState) => ({
            ...prevState,
            pagination: {pageIndex: 0, pageSize: parseInt(newPerPage, 10)},
        }));
    };

    return (
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
    );
};

TablePerPage.DEFAULT_SIZE = 50;
