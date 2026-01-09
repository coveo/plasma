import {ReactElement, ReactNode} from 'react';
import {CollectionColumnDef} from '../CollectionColumn.types.js';

/**
 * Props passed to layout Header and Body components
 */
export interface CollectionLayoutProps<T = unknown> {
    /** Array of column definitions */
    columns: CollectionColumnDef<T>[];

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
    gap?: string;
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
    Header: <TData>(props: CollectionLayoutProps<TData>) => ReactElement;

    /** Body component - renders rows/items */
    Body: <TData>(props: CollectionLayoutProps<TData>) => ReactElement;
}
