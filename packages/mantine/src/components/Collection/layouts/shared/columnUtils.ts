import {CSSProperties} from 'react';
import {CollectionColumnDef} from '../../CollectionColumn.types.js';

/**
 * Converts column size configuration to CSS styles.
 * Handles both numeric (px) and string (%, fr, etc.) size values.
 */
export const getColumnSizeStyles = (column: CollectionColumnDef<any>): CSSProperties => {
    const sizeToStyle = (size: number | string | undefined): string | undefined => {
        if (size === undefined) {
            return undefined;
        }
        return typeof size === 'number' ? `${size}px` : size;
    };

    return {
        width: column.size ? sizeToStyle(column.size) : 'auto',
        minWidth: sizeToStyle(column.minSize),
        maxWidth: sizeToStyle(column.maxSize),
    };
};
