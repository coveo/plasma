import {ReactNode} from 'react';
import {CollectionColumnDef, CollectionHeaderContext} from '../../CollectionColumn.types.js';

/**
 * Renders a column header by invoking the header function with context if needed.
 * Handles both static headers (strings/nodes) and dynamic header functions.
 */
export const renderColumnHeader = (header: CollectionColumnDef<unknown>['header'], index: number): ReactNode => {
    if (typeof header === 'function') {
        const context: CollectionHeaderContext = {index};
        return header(context);
    }
    return header;
};
