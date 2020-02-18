import {FunctionComponent} from 'react';
import * as React from 'react';
import {TableHOCUtils} from '../table-hoc/utils/TableHOCUtils';
import {PaginationPagesNumber} from './PaginationPagesNumber';
import {PaginationPerPage} from './PaginationPerPage';

export interface ITablePaginationProps {
    id: string;
    totalPages: number;
    perPageNumbers: number[];
    defaultPerPageSelected: number;
    totalEntries: number;
    disabled?: boolean;
}

export const TablePagination: FunctionComponent<ITablePaginationProps> = ({
    id,
    disabled = false,
    totalPages,
    perPageNumbers,
    defaultPerPageSelected,
    totalEntries,
}) => (
    <div className="pagination-container">
        <PaginationPerPage
            id={id}
            perPage={perPageNumbers}
            disabled={disabled}
            defaultPerPageSelected={defaultPerPageSelected}
            hidden={perPageNumbers.length && totalEntries < perPageNumbers[0] && !disabled}
        />
        <div className="flex-auto" />
        <PaginationPagesNumber
            id={TableHOCUtils.getPaginationId(id)}
            totalPages={totalPages || 1}
            disabled={disabled}
            hidden={totalPages === 1}
        />
    </div>
);

export const TablePaginationDefaultValue = {
    PerPage: [10, 20, 30],
    perPageLabel: 'Results per page',
};
