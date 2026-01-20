import type {MantineSpacing} from '@mantine/core';
import {ReactElement, ReactNode} from 'react';
import {CollectionColumnDef} from '../CollectionColumn.types.js';

/**
 * Props passed to layout Header component
 */
export interface CollectionLayoutHeaderProps<T = unknown> {
    /** Array of column definitions */
    columns: Array<CollectionColumnDef<T>>;

    /** Whether drag and drop is enabled */
    draggable?: boolean;

    /** Whether items are removable */
    removable?: boolean;
}

/**
 * Props passed to layout Body component
 */
export interface CollectionLayoutBodyProps<T = unknown> {
    /** Array of column definitions */
    columns: Array<CollectionColumnDef<T>>;

    /** Items to render */
    items: T[];

    /** Callback to remove an item */
    onRemove?: (index: number) => void;

    /** Whether items are removable */
    removable?: boolean;

    /** Whether drag and drop is enabled */
    draggable?: boolean;

    /** Whether the collection is disabled */
    disabled?: boolean;

    /** Function to get unique ID for each item */
    getItemId?: (item: T, index: number) => string;

    /** Gap between items */
    gap?: MantineSpacing;
}

/**
 * Collection Layout interface
 * Follows the same pattern as Table's RowLayout
 */
export interface CollectionLayout {
    (props: {children: ReactNode}): ReactElement;

    /** Layout display name */
    displayName: string;

    /** Header component - renders column headers */
    Header: <TData>(props: CollectionLayoutHeaderProps<TData>) => ReactElement | null;

    /** Body component - renders rows/items */
    Body: <TData>(props: CollectionLayoutBodyProps<TData>) => ReactElement;
}
