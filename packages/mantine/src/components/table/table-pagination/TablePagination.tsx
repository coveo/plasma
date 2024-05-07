import {Pagination} from '@mantine/core';
import {useDidUpdate} from '@mantine/hooks';
import {FunctionComponent} from 'react';

import {TablePaginationProps} from './TablePagination.types';
import {useTableContext} from '../TableContext';

export const TablePagination: FunctionComponent<TablePaginationProps> = ({onPageChange}) => {
    const {store, table, containerRef} = useTableContext();

    const updatePage = (newPage: number) => {
        onPageChange?.(newPage - 1);
        store.setPagination((prev) => ({...prev, pageIndex: newPage - 1}));
        containerRef.current.scrollIntoView({behavior: 'smooth'});
    };

    const total =
        store.state.totalEntries == null
            ? table.getPageCount()
            : Math.ceil(store.state.totalEntries / store.state.pagination.pageSize);

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
            boundaries={0}
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
