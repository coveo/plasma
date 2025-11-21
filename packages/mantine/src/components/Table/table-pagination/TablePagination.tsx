import {Pagination} from '@mantine/core';
import {useDidUpdate} from '@mantine/hooks';
import {FunctionComponent} from 'react';

import {TablePaginationProps} from './TablePagination.types.js';
import {useTableContext} from '../TableContext.js';

export const TablePagination: FunctionComponent<TablePaginationProps> = ({onPageChange}) => {
    const {store, table, containerRef} = useTableContext();

    const updatePage = (newPage: number) => {
        onPageChange?.(newPage - 1);
        store.setPagination((prev) => ({...prev, pageIndex: newPage - 1}));
        containerRef.current.scrollIntoView({behavior: 'smooth'});
    };

    const total = table.getPageCount();

    useDidUpdate(() => {
        if (store.state.pagination.pageIndex + 1 > total && total > 0) {
            updatePage(total);
        }
    }, [store.state.pagination.pageIndex, total]);

    return (
        <Pagination
            value={store.state.pagination.pageIndex + 1}
            onChange={updatePage}
            total={total}
            boundaries={1}
            size="md"
            gap="xs"
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
