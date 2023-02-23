import {Pagination} from '@mantine/core';
import {FunctionComponent} from 'react';

import {useTable} from './TableContext';

interface TablePaginationProps {
    /**
     * The total number of page. Use null only if your table is paginated client side
     */
    totalPages: number | null;
}

export const TablePagination: FunctionComponent<TablePaginationProps> = ({totalPages}) => {
    const {state, setState, containerRef, getPageCount} = useTable();
    const updatePage = (newPage: number) => {
        setState((prevState) => ({
            ...prevState,
            pagination: {...prevState.pagination, pageIndex: newPage - 1},
        }));
        containerRef.current.scrollIntoView({behavior: 'smooth'});
    };

    const total = totalPages === null ? getPageCount() : totalPages;

    return (
        <Pagination
            page={state.pagination.pageIndex + 1}
            onChange={updatePage}
            total={total}
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
