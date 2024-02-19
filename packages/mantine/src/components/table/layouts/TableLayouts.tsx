import {Table} from '@tanstack/table-core';
import {ReactNode} from 'react';
import {RowLayout} from './row-layout/RowLayout';

export interface TableLayoutProps<T = unknown> {
    table: Table<T>;
    loading?: boolean;
    /**
     * Action passed when user double-clicks on a row
     */
    doubleClickAction?: (datum: T) => void;
    /**
     * Function that generates the expandable content of a row
     * Return null for rows that don't need to be expandable
     *
     * @param datum the row for which the children should be generated.
     */
    getExpandChildren?: (datum: T) => ReactNode;
    /**
     * Whether clicking on a selected row will deselect the row or not.
     */
    keepSelection?: boolean;
}

export const TableLayouts = {
    Rows: RowLayout,
};
