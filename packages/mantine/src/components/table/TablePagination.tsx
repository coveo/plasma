import {Pagination} from '@mantine/core';
import {FunctionComponent} from 'react';

import {useTable} from './TableContext';

interface TablePaginationProps {
    /**
     * The total number of page. Use null only if your table is paginated client side
     */
    totalPages: number | null;
    /**
     * The callback if the current page is changed.
     *
     * @param pageIndex The index of the updated page.
     */
    onPageChange?: (pageIndex: number) => void;
}

export const TablePagination: FunctionComponent<TablePaginationProps> = ({totalPages, onPageChange}) => {
    const {state, setState, containerRef, getPageCount} = useTable();
    const updatePage = (newPage: number) => {
        onPageChange?.(newPage - 1);
        setState((prevState) => ({
            ...prevState,
            pagination: {...prevState.pagination, pageIndex: newPage - 1},
        }));
        containerRef.current.scrollIntoView({behavior: 'smooth'});
    };

    const total = totalPages === null ? getPageCount() : totalPages;

    return (
        <Pagination
            value={state.pagination.pageIndex + 1}
            onChange={updatePage}
            total={total}
            boundaries={0}
            size="md"
            spacing="xs"
            getControlProps={(control) => {
                switch (control) {
                    case 'previous':
                        return {
                            component: 'button',
                            'aria-label': 'previous page',
                        };
                    case 'next':
                        return {component: 'button', 'aria-label': 'next page'};
                    default:
                        return {};
                }
            }}
        />
    );
};
