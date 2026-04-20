import {act, renderHook, waitFor} from '@test-utils';
import {useDebouncedSearch} from '../useDebouncedSearch.js';

describe('useDebouncedSearch', () => {
    it('initializes with empty value and debouncedValue', () => {
        const {result} = renderHook(() => useDebouncedSearch());

        expect(result.current.value).toBe('');
        expect(result.current.debouncedValue).toBe('');
    });

    it('updates value immediately on setValue', () => {
        const {result} = renderHook(() => useDebouncedSearch());

        act(() => {
            result.current.setValue('hello');
        });

        expect(result.current.value).toBe('hello');
    });

    it('debounces the debouncedValue', async () => {
        const {result} = renderHook(() => useDebouncedSearch({debounceMs: 100}));

        act(() => {
            result.current.setValue('test');
        });

        // Immediate: value updated, debouncedValue not yet
        expect(result.current.value).toBe('test');
        expect(result.current.debouncedValue).toBe('');

        // After debounce delay
        await waitFor(() => {
            expect(result.current.debouncedValue).toBe('test');
        });
    });

    it('accepts a custom debounce delay', async () => {
        const {result} = renderHook(() => useDebouncedSearch({debounceMs: 50}));

        act(() => {
            result.current.setValue('fast');
        });

        await waitFor(() => {
            expect(result.current.debouncedValue).toBe('fast');
        });
    });

    it('accepts a custom initial value', () => {
        const {result} = renderHook(() => useDebouncedSearch({initialValue: 'initial'}));

        expect(result.current.value).toBe('initial');
        expect(result.current.debouncedValue).toBe('initial');
    });

    it('supports a narrower string type', () => {
        const {result} = renderHook(() => useDebouncedSearch<'name' | 'email'>({initialValue: 'name'}));

        expect(result.current.value).toBe('name');
        expect(result.current.debouncedValue).toBe('name');

        act(() => {
            result.current.setValue('email');
        });

        expect(result.current.value).toBe('email');
    });
});
