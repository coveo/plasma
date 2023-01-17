import {FunctionComponent} from 'react';
import {TableHOCUtils} from '../table-hoc/utils/TableHOCUtils.js';
import {PaginationPagesNumber} from './PaginationPagesNumber.js';
import {PaginationPerPage} from './PaginationPerPage.js';

export interface ITablePaginationProps {
    id: string;
    totalPages: number;
    perPageNumbers: number[];
    defaultPerPageSelected: number;
    totalEntries: number;
    disabled?: boolean;
}

/**
 * @deprecated Use Mantine instead
 */
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
            totalPages={totalPages}
            disabled={disabled}
            hidden={!totalPages || totalPages === 1}
        />
    </div>
);
