import {createSafeContext, type GetStylesApi} from '@mantine/core';
import type {CollectionFactory} from './Collection.js';
import type {CollectionColumnDef} from './CollectionColumn.types.js';

interface CollectionContextType {
    getStyles: GetStylesApi<CollectionFactory>;
    /**
     * The accessible label of the remove item buttons
     */
    removeLabel: string;
    /**
     * Column definitions for the collection (only present when using column-based layout)
     */
    columns?: Array<CollectionColumnDef<unknown>>;
}

export const [CollectionProvider, useCollectionContext] = createSafeContext<CollectionContextType>(
    'Collection component was not found in tree',
);
