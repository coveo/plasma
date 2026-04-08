import {afterEach, describe, expect, it, vi} from 'vitest';
import {getStorageItem, removeStorageItem, setStorageItem} from '../local-storage';

const STORAGE_KEY = 'plasma';

const seed = (value: unknown) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
};

const raw = () => JSON.parse(localStorage.getItem(STORAGE_KEY)!);

describe('Plasma versioned localStorage', () => {
    afterEach(() => {
        localStorage.clear();
    });

    describe('getStorageItem', () => {
        it('returns null when storage is empty', () => {
            expect(getStorageItem(['table', 't1', 'columnVisibility'])).toBeNull();
        });

        it('reads a deeply nested value', () => {
            seed({'storage-version': 1, storage: {table: {t1: {columnVisibility: {col1: true}}}}});

            expect(getStorageItem(['table', 't1', 'columnVisibility'])).toEqual({col1: true});
        });

        it('returns null for a non-existent path', () => {
            seed({'storage-version': 1, storage: {table: {}}});

            expect(getStorageItem(['table', 'missing', 'columnVisibility'])).toBeNull();
        });

        it('returns null when storage version does not match', () => {
            seed({'storage-version': 999, storage: {table: {t1: {columnVisibility: {col1: true}}}}});

            expect(getStorageItem(['table', 't1', 'columnVisibility'])).toBeNull();
        });

        it('clears corrupted JSON and returns null', () => {
            localStorage.setItem(STORAGE_KEY, 'not-valid-json{{{');

            expect(getStorageItem(['any'])).toBeNull();
            expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
        });

        it('clears storage when root value is not an object', () => {
            localStorage.setItem(STORAGE_KEY, JSON.stringify([1, 2, 3]));

            expect(getStorageItem(['any'])).toBeNull();
            expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
        });
    });

    describe('setStorageItem', () => {
        it('creates the versioned structure when storage is empty', () => {
            setStorageItem(['table', 't1', 'columnVisibility'], {col1: true});

            expect(raw()).toEqual({
                'storage-version': 1,
                storage: {table: {t1: {columnVisibility: {col1: true}}}},
            });
        });

        it('merges into existing storage without overwriting siblings', () => {
            seed({
                'storage-version': 1,
                storage: {table: {t1: {columnVisibility: {col1: true}}}},
            });

            setStorageItem(['table', 't2', 'columnVisibility'], {col2: false});

            const data = raw();
            expect(data.storage.table.t1).toEqual({columnVisibility: {col1: true}});
            expect(data.storage.table.t2).toEqual({columnVisibility: {col2: false}});
        });

        it('overwrites an existing value at the same path', () => {
            seed({'storage-version': 1, storage: {table: {t1: {columnVisibility: {col1: true}}}}});

            setStorageItem(['table', 't1', 'columnVisibility'], {col1: false, col2: true});

            expect(raw().storage.table.t1.columnVisibility).toEqual({col1: false, col2: true});
        });

        it('resets storage when version does not match', () => {
            seed({'storage-version': 999, storage: {old: 'data'}});

            setStorageItem(['table', 't1', 'theme'], 'dark');

            const data = raw();
            expect(data['storage-version']).toBe(1);
            expect(data.storage.old).toBeUndefined();
            expect(data.storage.table.t1.theme).toBe('dark');
        });

        it('creates intermediate objects along the path', () => {
            setStorageItem(['a', 'b', 'c', 'd'], 42);

            expect(raw().storage.a.b.c.d).toBe(42);
        });

        it('warns when localStorage is full', () => {
            const warnSpy = vi.spyOn(console, 'warn').mockReturnValue(undefined);
            vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
                throw new DOMException('quota exceeded');
            });

            setStorageItem(['table', 't1', 'col'], {});

            expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('Unable to write'));
            warnSpy.mockRestore();
            vi.restoreAllMocks();
        });
    });

    describe('removeStorageItem', () => {
        it('removes a nested key without affecting siblings', () => {
            seed({
                'storage-version': 1,
                storage: {table: {t1: {columnVisibility: {col1: true}, theme: 'dark'}}},
            });

            removeStorageItem(['table', 't1', 'columnVisibility']);

            const data = raw();
            expect(data.storage.table.t1.columnVisibility).toBeUndefined();
            expect(data.storage.table.t1.theme).toBe('dark');
        });

        it('does nothing when storage is empty', () => {
            removeStorageItem(['table', 't1', 'columnVisibility']);

            expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
        });

        it('does nothing when the path does not exist', () => {
            seed({'storage-version': 1, storage: {table: {}}});

            removeStorageItem(['table', 'missing', 'columnVisibility']);

            expect(raw().storage.table).toEqual({});
        });
    });

    describe('prototype pollution protection', () => {
        it.each(['__proto__', 'constructor', 'prototype'])('getStorageItem rejects path containing "%s"', (key) => {
            seed({'storage-version': 1, storage: {[key]: {nested: 'value'}}});

            expect(getStorageItem([key, 'nested'])).toBeNull();
        });

        it.each(['__proto__', 'constructor', 'prototype'])('setStorageItem rejects path containing "%s"', (key) => {
            setStorageItem([key, 'polluted'], true);

            expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
            expect(Object.prototype).not.toHaveProperty('polluted');
        });

        it.each(['__proto__', 'constructor', 'prototype'])('removeStorageItem rejects path containing "%s"', (key) => {
            seed({'storage-version': 1, storage: {safe: 'data'}});

            removeStorageItem([key]);

            expect(raw().storage.safe).toBe('data');
        });
    });
});
