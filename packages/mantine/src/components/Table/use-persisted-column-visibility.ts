import {useCallback, useMemo} from 'react';
import {TableState} from './use-table';

type ColumnVisibility = TableState['columnVisibility'];

const buildStorageKey = (tableId: string) => `coveo-comhub-table-columns-${tableId}`;

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

export const usePersistedColumnVisibility = (
    defaultVisibleColumns: ColumnVisibility,
    maxSelectableColumns: number,
    tableId?: string,
) => {
    const storageKey = tableId ? buildStorageKey(tableId) : null;
    const validIds = useMemo(() => new Set(Object.keys(defaultVisibleColumns)), [defaultVisibleColumns]);

    const initialColumnVisibility = useMemo((): ColumnVisibility => {
        if (!storageKey) {
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
                // storage unavailable
            }
        }
        return capVisibleColumns(defaultVisibleColumns, maxSelectableColumns);
    }, [storageKey, validIds, defaultVisibleColumns, maxSelectableColumns]);

    const persistColumnVisibility = useCallback(
        (visibility: ColumnVisibility) => {
            if (!storageKey) {
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
