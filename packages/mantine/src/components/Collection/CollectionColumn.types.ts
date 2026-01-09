import {ReactNode} from 'react';

/**
 * Context provided to header render functions
 */
export interface CollectionHeaderContext {
    /** Column index */
    index: number;
}

/**
 * Context provided to cell render functions
 */
// eslint-disable-next-line unused-imports/no-unused-vars
export interface CollectionCellContext<T = unknown> {
    /** Whether the item can be removed */
    removable?: boolean;
    /** Whether the collection is draggable */
    draggable?: boolean;
    /** Whether the collection is disabled */
    disabled?: boolean;
    /** Callback to remove the item */
    onRemove?: () => void;
}

/**
 * Column definition for Collection component
 */
export interface CollectionColumnDef<T = unknown> {
    /**
     * Column header content
     * Can be a ReactNode or a function that receives header context
     */
    header?: ReactNode | ((context: CollectionHeaderContext) => ReactNode);

    /**
     * Cell render function
     * @param item The current item's data
     * @param index The current item's index
     * @param context Additional context for rendering
     */
    cell: (item: T, index: number, context: CollectionCellContext<T>) => ReactNode;

    /**
     * Column sizing - can be number (pixels) or string ('200px', '50%', etc)
     * @default 'auto'
     */
    size?: string | number;

    /**
     * Minimum column size
     */
    minSize?: string | number;

    /**
     * Maximum column size
     */
    maxSize?: string | number;

    /**
     * Unique identifier for the column
     * Auto-generated if not provided
     */
    id?: string;
}
