import {createSafeContext, type GetStylesApi} from '@mantine/core';
import type {CollectionFactory} from './Collection.js';

interface CollectionContextType {
    getStyles: GetStylesApi<CollectionFactory>;
}

export const [CollectionProvider, useCollectionContext] = createSafeContext<CollectionContextType>(
    'Collection component was not found in tree',
);
