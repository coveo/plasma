import {useDebouncedValue} from '@mantine/hooks';
import {useState} from 'react';

export interface UseDebouncedSearchOptions<SearchValue extends string = string> {
    /**
     * The initial search value.
     *
     * Required when `SearchValue` is a narrower type than `string` (e.g., a union of string literals).
     * @default '' when `SearchValue` is `string`.
     */
    initialValue: SearchValue;
    /**
     * The debounce delay in milliseconds.
     *
     * @default 200
     */
    debounceMs?: number;
}

export interface UseDebouncedSearchReturn<SearchValue extends string = string> {
    /**
     * The current raw search value.
     */
    value: SearchValue;
    /**
     * The debounced search value.
     *
     * Use in your `queryKey` and `queryFn`.
     */
    debouncedValue: SearchValue;
    /**
     * Setter for the search value.
     */
    setValue: (value: SearchValue | ((prevValue: SearchValue) => SearchValue)) => void;
}

/**
 * Hook that manages a debounced search value.
 *
 * Useful for server-side filtering where you want the UI to update immediately
 * but only trigger API calls after the user stops typing.
 *
 * @typeParam SearchValue - The type of the search value. Defaults to `string`.
 *
 * @example
 * ```tsx
 * // Default usage — SearchValue is string, initialValue defaults to ''
 * const search = useDebouncedSearch();
 *
 * // With a specific string literal union — initialValue is required
 * const search = useDebouncedSearch<'name' | 'email'>({initialValue: 'name'});
 *
 * // With custom debounce delay
 * const search = useDebouncedSearch({debounceMs: 500});
 * ```
 */
export const useDebouncedSearch = <SearchValue extends string = string>(
    options?: Partial<UseDebouncedSearchOptions<SearchValue>>,
): UseDebouncedSearchReturn<SearchValue> => {
    const {initialValue = '' as SearchValue, debounceMs = 200} = options ?? {};
    const [value, setValue] = useState<SearchValue>(initialValue);
    const [debouncedValue] = useDebouncedValue(value, debounceMs);

    return {
        value,
        debouncedValue,
        setValue,
    };
};
