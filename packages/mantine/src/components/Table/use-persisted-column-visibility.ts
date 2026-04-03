import {useCallback, useMemo} from 'react';
import {TableState} from './use-table';

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
 *   The reference should be stable across renders to avoid unnecessary recomputations.
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

    const initialColumnVisibility = useMemo((): ColumnVisibility => {
        if (!storageKey || validIds.size === 0) {
            return defaultVisibleColumns;
        }
        try {
            const stored = localStorage.getItem(storageKey);
            if (stored) {
                const sanitized = sanitizeFromStorage(JSON.parse(stored), validIds);
                return capVisibleColumns({...defaultVisibleColumns, ...sanitized}, maxSelectableColumns);
            }
        } catch {
            try {
                localStorage.removeItem(storageKey);
            } catch {
                console.warn(
                    `Unable to access localStorage to clean up invalid column visibility data for "${storageKey}".`,
                );
            }
        }
        return capVisibleColumns(defaultVisibleColumns, maxSelectableColumns);
    }, [storageKey, validIds, defaultVisibleColumns, maxSelectableColumns]);

    const persistColumnVisibility = useCallback(
        (visibility: ColumnVisibility) => {
            if (!storageKey || validIds.size === 0) {
                return;
            }
            try {
                localStorage.setItem(storageKey, JSON.stringify(visibility));
            } catch {
                // storage unavailable
            }
        },
        [storageKey],
    );

    return {initialColumnVisibility, persistColumnVisibility};
};
