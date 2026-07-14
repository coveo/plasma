import {Pagination} from '@mantine/core';
import {useDidUpdate} from '@mantine/hooks';
import {FunctionComponent} from 'react';

import {useTableContext} from '../TableContext.js';
import {TablePaginationProps} from './TablePagination.types.js';

export const TablePagination: FunctionComponent<TablePaginationProps> = ({onPageChange}) => {
    const {store, table, containerRef} = useTableContext();

    const updatePage = (newPage: number) => {
        onPageChange?.(newPage - 1);
        store.setPagination((prev) => ({...prev, page: newPage - 1}));
        containerRef.current?.scrollIntoView({behavior: 'smooth'});
    };

    const total = table.getPageCount();

    useDidUpdate(() => {
        if (store.state.pagination.page + 1 > total && total > 0) {
            updatePage(total);
        }
    }, [store.state.pagination.page, total]);

    if (total <= 1) {
        return null;
    }

    return (
        <Pagination
            value={store.state.pagination.page + 1}
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

TablePagination.displayName = 'Table.Pagination';
