import {act, renderHook} from '@test-utils';
import {usePersistedColumnVisibility} from '../use-persisted-column-visibility.js';
import {useTable} from '../use-table.js';

const storageKey = (tableId: string) => `coveo-comhub-table-columns-${tableId}`;

describe('usePersistedColumnVisibility', () => {
    afterEach(() => {
        localStorage.clear();
    });

    describe('without tableId', () => {
        it('returns the default visibility as-is', () => {
            const defaults = {col1: true, col2: false};
            const {result} = renderHook(() => usePersistedColumnVisibility(defaults, Infinity));

            expect(result.current.initialColumnVisibility).toEqual({col1: true, col2: false});
        });

        it('does not persist to localStorage', () => {
            const defaults = {col1: true};
            const {result} = renderHook(() => usePersistedColumnVisibility(defaults, Infinity));

            act(() => {
                result.current.persistColumnVisibility({col1: false});
            });

            expect(localStorage.length).toBe(0);
        });
    });

    describe('with tableId', () => {
        const tableId = 'test-table';

        it('returns the default visibility when nothing is stored', () => {
            const defaults = {col1: true, col2: true, col3: false};
            const {result} = renderHook(() => usePersistedColumnVisibility(defaults, Infinity, tableId));

            expect(result.current.initialColumnVisibility).toEqual({col1: true, col2: true, col3: false});
        });

        it('merges stored visibility with defaults', () => {
            localStorage.setItem(storageKey(tableId), JSON.stringify({col2: false}));
            const defaults = {col1: true, col2: true, col3: false};

            const {result} = renderHook(() => usePersistedColumnVisibility(defaults, Infinity, tableId));

            expect(result.current.initialColumnVisibility).toEqual({col1: true, col2: false, col3: false});
        });

        it('ignores stored keys not present in defaults', () => {
            localStorage.setItem(storageKey(tableId), JSON.stringify({unknown: true, col1: false}));
            const defaults = {col1: true, col2: true};

            const {result} = renderHook(() => usePersistedColumnVisibility(defaults, Infinity, tableId));

            expect(result.current.initialColumnVisibility).toEqual({col1: false, col2: true});
        });

        it('ignores stored values that are not booleans', () => {
            localStorage.setItem(storageKey(tableId), JSON.stringify({col1: 'yes', col2: false}));
            const defaults = {col1: true, col2: true};

            const {result} = renderHook(() => usePersistedColumnVisibility(defaults, Infinity, tableId));

            expect(result.current.initialColumnVisibility).toEqual({col1: true, col2: false});
        });

        it('caps visible columns to maxSelectableColumns', () => {
            const defaults = {col1: true, col2: true, col3: true};
            const {result} = renderHook(() => usePersistedColumnVisibility(defaults, 2, tableId));

            const visibility = result.current.initialColumnVisibility;
            const visibleCount = Object.values(visibility).filter(Boolean).length;
            expect(visibleCount).toBe(2);
        });

        it('caps visible columns from storage to maxSelectableColumns', () => {
            localStorage.setItem(storageKey(tableId), JSON.stringify({col1: true, col2: true, col3: true}));
            const defaults = {col1: false, col2: false, col3: false};

            const {result} = renderHook(() => usePersistedColumnVisibility(defaults, 2, tableId));

            const visibility = result.current.initialColumnVisibility;
            const visibleCount = Object.values(visibility).filter(Boolean).length;
            expect(visibleCount).toBe(2);
        });

        it('persists visibility to localStorage', () => {
            const defaults = {col1: true, col2: true};
            const {result} = renderHook(() => usePersistedColumnVisibility(defaults, Infinity, tableId));

            act(() => {
                result.current.persistColumnVisibility({col1: false, col2: true});
            });

            expect(JSON.parse(localStorage.getItem(storageKey(tableId))!)).toEqual({col1: false, col2: true});
        });

        it('clears invalid stored data and falls back to defaults', () => {
            localStorage.setItem(storageKey(tableId), 'not-valid-json{{{');
            const defaults = {col1: true, col2: false};

            const {result} = renderHook(() => usePersistedColumnVisibility(defaults, Infinity, tableId));

            expect(result.current.initialColumnVisibility).toEqual({col1: true, col2: false});
            expect(localStorage.getItem(storageKey(tableId))).toBeNull();
        });

        it('falls back to defaults when stored value is an array', () => {
            localStorage.setItem(storageKey(tableId), JSON.stringify([true, false]));
            const defaults = {col1: true, col2: false};

            const {result} = renderHook(() => usePersistedColumnVisibility(defaults, Infinity, tableId));

            expect(result.current.initialColumnVisibility).toEqual({col1: true, col2: false});
        });
    });
});

describe('useTable column visibility persistence', () => {
    const tableId = 'integration-table';

    afterEach(() => {
        localStorage.clear();
    });

    it('initializes column visibility from localStorage when tableId is provided', () => {
        localStorage.setItem(storageKey(tableId), JSON.stringify({col1: false, col2: true}));

        const {result} = renderHook(() =>
            useTable({
                tableId,
                initialState: {columnVisibility: {col1: true, col2: false}},
            }),
        );

        expect(result.current.state.columnVisibility).toEqual({col1: false, col2: true});
    });

    it('uses default visibility when no tableId is provided', () => {
        localStorage.setItem(storageKey(tableId), JSON.stringify({col1: false}));

        const {result} = renderHook(() =>
            useTable({
                initialState: {columnVisibility: {col1: true, col2: true}},
            }),
        );

        expect(result.current.state.columnVisibility).toEqual({col1: true, col2: true});
    });

    it('persists to localStorage when setColumnVisibility is called', () => {
        const {result} = renderHook(() =>
            useTable({
                tableId,
                initialState: {columnVisibility: {col1: true, col2: true}},
            }),
        );

        act(() => {
            result.current.setColumnVisibility({col1: false, col2: true});
        });

        expect(result.current.state.columnVisibility).toEqual({col1: false, col2: true});
        expect(JSON.parse(localStorage.getItem(storageKey(tableId))!)).toEqual({col1: false, col2: true});
    });

    it('does not persist when no tableId is provided', () => {
        const {result} = renderHook(() =>
            useTable({
                initialState: {columnVisibility: {col1: true}},
            }),
        );

        act(() => {
            result.current.setColumnVisibility({col1: false});
        });

        expect(result.current.state.columnVisibility).toEqual({col1: false});
        expect(localStorage.length).toBe(0);
    });

    it('respects maxSelectableColumns on initial load from storage', () => {
        localStorage.setItem(storageKey(tableId), JSON.stringify({col1: true, col2: true, col3: true}));

        const {result} = renderHook(() =>
            useTable({
                tableId,
                maxSelectableColumns: 2,
                initialState: {columnVisibility: {col1: false, col2: false, col3: false}},
            }),
        );

        const visibleCount = Object.values(result.current.state.columnVisibility).filter(Boolean).length;
        expect(visibleCount).toBe(2);
    });

    it('persists when setColumnVisibility is called with an updater function', () => {
        const {result} = renderHook(() =>
            useTable({
                tableId,
                initialState: {columnVisibility: {col1: true, col2: false}},
            }),
        );

        act(() => {
            result.current.setColumnVisibility((prev) => ({...prev, col2: true}));
        });

        expect(result.current.state.columnVisibility).toEqual({col1: true, col2: true});
        expect(JSON.parse(localStorage.getItem(storageKey(tableId))!)).toEqual({col1: true, col2: true});
    });
});
