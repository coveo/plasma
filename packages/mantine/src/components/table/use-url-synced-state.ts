import {Dispatch, SetStateAction, useMemo, useState} from 'react';

/**
 * A search param entry defines the encoded value of a search parameter as `[key, value, alwaysEmit?]`.
 * The third entry is an optional boolean that defaults to `false`.
 * Setting `alwaysEmit` to `true` means any non-nullish value is always written to the search params,
 * even if it matches the initial value. It is also written on initialization.
 */
export type SearchParamEntry = [string, string | null | undefined, boolean?];

/**
 * Get the index of the ? in a URL that denotes the start of the "search".
 * Performs a nested search for '#/', to detect hash router urls and take the params of the hash in that case.
 *
 * @param url The URL to search.
 * @returns The location of the question mark, or `-1` if not found.
 */
const indexOfSearch = (url: string): number => url.indexOf('?', url.indexOf('#/') + 1);

/**
 * Read the **current** search params from `window.location`, with support for detecting React's HashRouter.
 * Also returns a method that will yield the href (string) value, after any changes made on the params object.
 *
 * @returns The `URLSearchParams` instance, and a function that can be used to get an updated href.
 */
const getSearchParams = (): URLSearchParams => {
    const href = window.location.href;
    const searchStart = indexOfSearch(href);
    return new URLSearchParams(searchStart < 0 ? undefined : href.substring(searchStart));
};

/**
 * Apply the search params to the current location, using `replaceState` (no navigation history).
 * Note that only parameters in the `params` argument will be set, any other current params will be removed.
 *
 * @param params The parameters to apply.
 */
const applySearchParams = (params: URLSearchParams): void => {
    const currentHref = window.location.href;
    const index = indexOfSearch(currentHref);
    let nextHref = index < 0 ? currentHref : currentHref.substring(0, index);
    if (params.size > 0) {
        nextHref = nextHref.concat('?', params.toString());
    }
    if (nextHref !== currentHref) {
        window.history.replaceState(null, '', nextHref);
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
        for (const [key, value, alwaysEmit] of options.serializer(getInitialState(options))) {
            stateMap.set(key, value);
            if (alwaysEmit && value) {
                initialize ??= getSearchParams();
                initialize.set(key, value);
            }
        }
        if (initialize) {
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
