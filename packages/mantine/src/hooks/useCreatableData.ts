import {ComboboxItem, type SelectProps} from '@mantine/core';
import {ReactNode, useCallback, useMemo, useState} from 'react';

/**
 * Internal prefix used to identify the "create" option in the data array.
 * This allows `renderOption` to detect it and render it differently.
 */
const CREATE_OPTION_PREFIX = '__creatable__:';

export interface UseCreatableDataOptions {
    /**
     * The base list of options. Can be strings or `ComboboxItem[]`.
     *
     * When using with `useInfiniteComboboxData`, pass `infinite.data` here.
     */
    data: Array<string | ComboboxItem>;
    /**
     * Customize the label shown for the "create" option.
     * Used as the visible text in the dropdown and as fallback if `renderCreateOption` is not provided.
     *
     * @default (search) => `+ Create "${search}"`
     *
     * @example
     * ```tsx
     * getCreateLabel: (search) => Locales.format('SearchHubSelect.createValue', {value: search})
     * ```
     */
    getCreateLabel?: (search: string) => string;
    /**
     * Custom render function for the "create" option in the dropdown.
     * When provided, overrides the default text rendering of the create option.
     * The `renderOption` returned by the hook will use this for the create option.
     *
     * @example
     * ```tsx
     * renderCreateOption: (search) => (
     *     <Group gap="xs">
     *         <IconPlus size={14} />
     *         <Text>Create <strong>{search}</strong></Text>
     *     </Group>
     * )
     * ```
     */
    renderCreateOption?: (search: string) => ReactNode;
    /**
     * The current search value.
     *
     * When using with `useInfiniteComboboxData`, pass `infinite.searchValue` here
     * and set `onSearchChange` to `infinite.onSearchChange`.
     *
     * When not provided, the hook manages its own search state internally.
     */
    searchValue?: string;
    /**
     * Callback when the search value changes.
     *
     * When using with `useInfiniteComboboxData`, pass `infinite.onSearchChange` here.
     */
    onSearchChange?: (value: string) => void;
}

export interface UseCreatableDataReturn {
    /**
     * The data array with the "create" option appended when no exact match exists.
     * Pass to the `data` prop of `Select`, `MultiSelect`, or `Autocomplete`.
     */
    data: Array<string | ComboboxItem>;
    /**
     * The current search value. Pass to `searchValue` prop.
     */
    searchValue: string;
    /**
     * Callback when the search value changes. Pass to `onSearchChange` prop.
     */
    onSearchChange: (value: string) => void;
    /**
     * Call this in your `onChange` handler to persist newly created values
     * so they appear as regular options on subsequent opens.
     *
     * @example
     * ```tsx
     * onChange={(val) => {
     *     creatable.persistCreatedValues(val);
     *     setValue(val);
     * }}
     * ```
     */
    persistCreatedValues: (values: string | string[] | null) => void;
    /**
     * A `renderOption` function to spread on `Select` or `MultiSelect`.
     * Handles rendering the "create" option with `renderCreateOption` if provided,
     * otherwise renders the default label text.
     *
     * Only returned when `renderCreateOption` is provided.
     *
     * @example
     * ```tsx
     * <Select
     *     {...creatable}
     *     searchable
     *     value={value}
     *     onChange={...}
     * />
     * ```
     */
    renderOption?: SelectProps['renderOption'];
}

/**
 * Default label generator for the "create" option when `getCreateLabel` is not provided.
 *
 * @param search
 */
const defaultGetCreateLabel = (search: string) => `+ Create "${search}"`;
/**
 * Normalizes an item to its value string for easier comparison and deduplication.
 *
 * @param {string | ComboboxItem} item
 */
const normalizeValue = (item: string | ComboboxItem): string => (typeof item === 'string' ? item : item.value);
/**
 * Normalizes an item to its label string for sorting and rendering.
 *
 * @param {string | ComboboxItem} item
 */
const normalizeLabel = (item: string | ComboboxItem): string =>
    typeof item === 'string' ? item : (item.label ?? item.value);
/**
 * Checks if a ComboboxItem is the special "create" option injected by the hook.
 */
const isCreateOption = (option: ComboboxItem): boolean => option.value.startsWith(CREATE_OPTION_PREFIX);

/**
 * Extracts the original search value from a create option's value.
 * Use this to get the clean value when handling `onChange`.
 */
export const getCreateOptionValue = (value: string): string =>
    value.startsWith(CREATE_OPTION_PREFIX) ? value.slice(CREATE_OPTION_PREFIX.length) : value;

/**
 * Hook that adds creatable behavior to `Select`, `MultiSelect`, or `Autocomplete`
 * without using the low-level `Combobox` component.
 *
 * It works by dynamically appending a "create" option to `data` when the search
 * value doesn't exactly match any existing option. Created values are persisted
 * internally so they appear as regular options afterward.
 *
 * @example
 * ```tsx
 * // Simple Select creatable
 * const creatable = useCreatableData({
 *     data: ['React', 'Angular', 'Vue'],
 *     getCreateLabel: (search) => `+ Add "${search}"`,
 * });
 *
 * <Select
 *     {...creatable}
 *     searchable
 *     value={value}
 *     onChange={(val) => {
 *         creatable.persistCreatedValues(val);
 *         setValue(val);
 *     }}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // MultiSelect creatable
 * const creatable = useCreatableData({data: existingTags});
 *
 * <MultiSelect
 *     {...creatable}
 *     searchable
 *     value={values}
 *     onChange={(vals) => {
 *         creatable.persistCreatedValues(vals);
 *         setValues(vals);
 *     }}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Combined with useInfiniteComboboxData for infinite scroll + creatable
 * const search = useDebouncedSearch();
 * const query = useInfiniteQuery({...});
 * const comboboxProps = useInfiniteComboboxData({query, search, ...});
 *
 * const creatable = useCreatableData({
 *     data: comboboxProps.data,
 *     searchValue: comboboxProps.searchValue,
 *     onSearchChange: comboboxProps.onSearchChange,
 *     getCreateLabel: (search) => `+ Create "${search}"`,
 * });
 *
 * <Select
 *     filter={comboboxProps.filter}
 *     scrollAreaProps={comboboxProps.scrollAreaProps}
 *     {...creatable}
 *     searchable
 *     value={value}
 *     onChange={(val) => {
 *         creatable.persistCreatedValues(val);
 *         setValue(val);
 *     }}
 * />
 * ```
 */
export const useCreatableData = ({
    data: externalData,
    getCreateLabel = defaultGetCreateLabel,
    renderCreateOption,
    searchValue: controlledSearchValue,
    onSearchChange: controlledOnSearchChange,
}: UseCreatableDataOptions): UseCreatableDataReturn => {
    // Internal search state, used when not controlled externally (e.g., without useInfiniteComboboxData)
    const [internalSearch, setInternalSearch] = useState('');
    const searchValue = controlledSearchValue ?? internalSearch;
    const onSearchChange = controlledOnSearchChange ?? setInternalSearch;

    // Track values created by the user so they persist as regular options
    const [createdValues, setCreatedValues] = useState<string[]>([]);

    const data = useMemo<Array<string | ComboboxItem>>(() => {
        const trimmed = searchValue.trim();
        const lowerSearch = trimmed.toLowerCase();

        // Merge created values into the base data (avoid duplicates)
        const existingValues = new Set(externalData.map(normalizeValue));
        const newCreatedItems: Array<string | ComboboxItem> = createdValues
            .filter((val) => !existingValues.has(val))
            // Filter created values by search so they don't all appear when searching
            .filter((val) => trimmed.length === 0 || val.toLowerCase().includes(lowerSearch));

        // Sort created items into the list alphabetically by label
        const merged = [...externalData, ...newCreatedItems].sort((a, b) => {
            const labelA = normalizeLabel(a).toLowerCase();
            const labelB = normalizeLabel(b).toLowerCase();
            return labelA.localeCompare(labelB);
        });

        // Append the "create" option if search doesn't exactly match
        if (trimmed.length > 0) {
            const allValues = new Set(merged.map(normalizeValue));
            const hasExactMatch = Array.from(allValues).some((val) => val.toLowerCase() === lowerSearch);
            if (!hasExactMatch) {
                return [
                    ...merged,
                    {
                        value: `${CREATE_OPTION_PREFIX}${trimmed}`,
                        label: getCreateLabel(trimmed),
                    },
                ];
            }
        }

        return merged;
    }, [externalData, createdValues, searchValue, getCreateLabel]);

    const persistCreatedValues = useCallback(
        (values: string | string[] | null) => {
            if (values === null) {
                return;
            }
            const valArray = Array.isArray(values) ? values : [values];
            // Strip the internal prefix before persisting
            const cleanValues = valArray.map(getCreateOptionValue);
            const existingValues = new Set([...externalData.map(normalizeValue), ...createdValues]);
            const newValues = cleanValues.filter((val) => val && !existingValues.has(val));

            if (newValues.length > 0) {
                setCreatedValues((prev) => [...prev, ...newValues]);
            }
        },
        [externalData, createdValues],
    );

    // Build renderOption only when renderCreateOption is provided
    const renderOption: SelectProps['renderOption'] | undefined = useMemo(() => {
        if (!renderCreateOption) {
            return undefined;
        }
        return ({option}: {option: ComboboxItem}) => {
            if (isCreateOption(option)) {
                return renderCreateOption(getCreateOptionValue(option.value));
            }
            return option.label;
        };
    }, [renderCreateOption]);

    return {
        data,
        searchValue,
        onSearchChange,
        persistCreatedValues,
        ...(renderOption ? {renderOption} : {}),
    };
};
