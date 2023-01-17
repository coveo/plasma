import {Pagination} from '@mantine/core';
import {TableState} from '@tanstack/react-table';
import {FunctionComponent} from 'react';
import {useTable} from './useTable.js';

interface TablePaginationProps {
    /**
     * The total number of page
     */
    totalPages: number;
}

export const TablePagination: FunctionComponent<TablePaginationProps> = ({totalPages}) => {
    const {state, setState, containerRef} = useTable();
    const updatePage = (newPage: number) => {
        setState((prevState: TableState) => ({
            ...prevState,
            pagination: {...prevState.pagination, pageIndex: newPage - 1},
        }));
        containerRef.current.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <Pagination
            page={state.pagination.pageIndex + 1}
            onChange={updatePage}
            total={totalPages}
            boundaries={0}
            size="md"
            getItemAriaLabel={(label) => {
                switch (label) {
                    case 'prev':
                        return 'previous page';
                    case 'next':
                        return 'next page';
                    default:
                        return `${label}`;
                }
            }}
        />
    );
};
