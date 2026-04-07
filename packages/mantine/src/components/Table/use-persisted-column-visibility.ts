import {useCallback, useMemo} from 'react';
import {getLocalStorageItem, setLocalStorageItem} from '../../utils/local-storage.js';
import type {TableState} from './use-table.js';

type ColumnVisibility = TableState['columnVisibility'];

const buildStorageKey = (tableId: string) => `plasma-table-columns-${tableId}`;

const capVisibleColumns = (visibility: ColumnVisibility, max: number): ColumnVisibility => {
    let visibleCount = 0;
    const result: ColumnVisibility = {};
    for (const [key, isVisible] of Object.entries(visibility)) {
        const shouldShow = isVisible && visibleCount < max;
        result[key] = shouldShow;
        if (shouldShow) {
            visibleCount++;
        }
    }
    return result;
};

const sanitizeFromStorage = (raw: unknown, validColumnIds: Set<string>): ColumnVisibility => {
    const result: ColumnVisibility = {};

    if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) {
        return result;
    }

    for (const [key, value] of Object.entries(raw as Record<string, unknown>)) {
        if (validColumnIds.has(key) && typeof value === 'boolean') {
            result[key] = value;
        }
    }
    return result;
};

/**
 * Hook that persists column visibility preferences to localStorage.
 *
 * @param defaultVisibleColumns - The default visibility map. Its keys define the set of valid column IDs.
 * Must be a stable reference (e.g. via `useRef`) to avoid re-reading localStorage on every render.
 * @param maxSelectableColumns - Maximum number of columns that can be visible at the same time.
 * @param tableId - Unique identifier for the table. When omitted, no persistence occurs.
 */
export const usePersistedColumnVisibility = (
    defaultVisibleColumns: ColumnVisibility,
    maxSelectableColumns: number,
    tableId?: string,
) => {
    const storageKey = tableId ? buildStorageKey(tableId) : null;
    const validIds = useMemo(() => new Set(Object.keys(defaultVisibleColumns)), [defaultVisibleColumns]);
    const hasValidIds = validIds.size > 0;

    const initialColumnVisibility = useMemo((): ColumnVisibility => {
        if (!storageKey || !hasValidIds) {
            return defaultVisibleColumns;
        }
        const stored = getLocalStorageItem<unknown>(storageKey, {removeOnError: true});
        if (stored !== null) {
            const sanitized = sanitizeFromStorage(stored, validIds);
            if (Object.keys(sanitized).length > 0) {
                return capVisibleColumns({...defaultVisibleColumns, ...sanitized}, maxSelectableColumns);
            }
        }
        return capVisibleColumns(defaultVisibleColumns, maxSelectableColumns);
    }, [storageKey, validIds, defaultVisibleColumns, maxSelectableColumns]);

    const persistColumnVisibility = useCallback(
        (visibility: ColumnVisibility) => {
            if (!storageKey || !hasValidIds) {
                return;
            }
            setLocalStorageItem(storageKey, visibility);
        },
        [storageKey, hasValidIds],
    );

    return {initialColumnVisibility, persistColumnVisibility};
};
