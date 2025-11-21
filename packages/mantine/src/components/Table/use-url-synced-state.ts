import {Dispatch, SetStateAction, useMemo, useState} from 'react';

/**
 * A search param entry defines the encoded value of a search parameter as `[key, value, alwaysEmit?]`.
 * The third entry is an optional boolean that defaults to `false`.
 * Setting `alwaysEmit` to `true` means any non-nullish value is always written to the search params,
 * even if it matches the initial value. It is also written on initialization.
 */
export type SearchParamEntry = [string, string | null | undefined, boolean?];

/** A URL split into an array of length 4, as [pathname, search, hash, hashSearch] */
type UrlParts = [string, string, string, string];

const slice = Function.prototype.call.bind(Array.prototype.slice) as <T>(
    from: ArrayLike<T>,
    start?: number,
    end?: number,
) => T[];

/**
 * Split a url into its parts.
 *
 * @param href The url to extract the parts from.
 * @returns The separate parts, all are an empty string if not present.
 */
const extractParts = (href: string) => slice(/^([^?#]*)(\?[^#]*|)(#[^?]*|)(\?.*|)$/.exec(href ?? ''), 1, 5) as UrlParts;

/**
 * The index of the search parameter to use, e.g. hashSearch for hash routes (hash starts with '#/').
 *
 * @param parts: The url parts, as returned by `extractParts`.
 * @returns The index of the search parameter to use (1 or 3).
 */
const searchIndex = (parts: UrlParts): 1 | 3 => (/^#\//.test(parts[2]) ? 3 : 1);

/**
 * Read the **current** search params from `window.location`, with support for detecting React's HashRouter.
 * Also returns a method that will yield the href (string) value, after any changes made on the params object.
 *
 * @returns The `URLSearchParams` instance, and a function that can be used to get an updated href.
 */
const getSearchParams = (): URLSearchParams => {
    const parts = extractParts(window.location.href);
    return new URLSearchParams(parts[searchIndex(parts)]);
};

/**
 * Apply the search params to the current location, using `replaceState` (no navigation history).
 * Note that only parameters in the `params` argument will be set, any other current params will be removed.
 *
 * @param params The parameters to apply.
 */
const applySearchParams = (params: URLSearchParams): void => {
    const currentHref = window.location.href;
    const parts = extractParts(currentHref);
    const search = params.size > 0 ? `?${params.toString()}` : '';
    const index = searchIndex(parts);
    if (parts[index] !== search) {
        parts[index] = search;
        window.history.replaceState(null, '', parts.join(''));
    }
};

export interface UseUrlSyncedStateOptions<T> {
    /**
     * The initial state to use, if there would be no search params to deserialize from.
     * These values are also treated as defaults, and if the current state matches the initialState,
     * no value will be written to the search params.
     */
    initialState: T | (() => T);
    /**
     * The serializer function is used to determine how the state is translated to url search parameters.
     * Called each time the state changes.
     * Note that the serializer should always return entries for keys it controls, also if the current value is "unset" (`null` or empty).
     * This ensures params get removed from the search when they are being unset.
     *
     * @param stateValue The new state value to serialize.
     * @returns An iterable of `[key, value]` to set as url search parameters.
     * @example (filterValue) => [['filter', filterValue]] // ?filter=filterValue
     */
    serializer: (stateValue: T) => Iterable<SearchParamEntry>;
    /**
     * The deserializer function is used to determine how the url parameters influence the initial state.
     * May return a partial state, values that are not deserialed are taken from the `initialState`.
     * Called only once when initializing the state.
     * @param params All the search parameters of the current url.
     * @param initialState The initialState, can be used to take defaults from.
     * @returns The initial state based on the current url.
     * @example (params) => params.get('filter') ?? '',
     */
    deserializer: (params: URLSearchParams, initialState: T) => T;
    /**
     * Whether the state should be synced with the url, defaults to `true`.
     * When set to `false`, the hook behaves just like a regular `useState` hook from react.
     */
    sync?: boolean;
}

const getInitialState = <T>(options: UseUrlSyncedStateOptions<T>): T =>
    options.initialState instanceof Function ? options.initialState() : options.initialState;

export const useUrlSyncedState = <T>(options: UseUrlSyncedStateOptions<T>) => {
    const sync = options.sync !== false;
    const [state, setState] = useState<T>(() => {
        const initialState = getInitialState(options);
        return sync ? options.deserializer(getSearchParams(), initialState) : initialState;
    });
    // Capture the initial state as a map (first render only!), to compare values and see if they should be set to the params.
    const initialStateSerialized = useMemo(() => {
        const stateMap = new Map<string, string>();
        let initialize: URLSearchParams | null = null;
        let needsApply = false;
        for (const [key, value, alwaysEmit] of options.serializer(getInitialState(options))) {
            stateMap.set(key, value);
            if (sync && alwaysEmit && value) {
                initialize ??= getSearchParams();
                if (!initialize.has(key)) {
                    needsApply = true;
                    initialize.set(key, value);
                }
            }
        }
        if (needsApply) {
            applySearchParams(initialize);
        }
        return stateMap;
    }, []);

    const enhancedSetState = useMemo<Dispatch<SetStateAction<T>>>(() => {
        if (!sync) {
            return setState;
        }
        return (updater: SetStateAction<T>) => {
            setState((old) => {
                const newValue = updater instanceof Function ? updater(old) : updater;

                const search = getSearchParams();
                for (const [key, value, alwaysEmit] of options.serializer(newValue)) {
                    if (value && (alwaysEmit || !Object.is(initialStateSerialized.get(key), value))) {
                        search.set(key, value);
                    } else {
                        search.delete(key);
                    }
                }
                applySearchParams(search);

                return newValue;
            });
        };
    }, [sync]);

    return [state, enhancedSetState] as const;
};
