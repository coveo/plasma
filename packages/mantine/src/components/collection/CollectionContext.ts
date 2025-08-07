import {createSafeContext, type GetStylesApi} from '@mantine/core';
import type {CollectionFactory} from './Collection';

interface CollectionContextType<T> {
    getStyles: GetStylesApi<CollectionFactory<T>>;
}

export const [CollectionProvider, useCollectionContext] = createSafeContext<CollectionContextType<any>>(
    'Collection component was not found in tree',
);
