import {Dispatch, SetStateAction, useMemo, useState} from 'react';

/**
 * A search param entry defines the key (index 0) and value (index 1) of a search parameter.
 */
export type SearchParamEntry = [string, string | null | undefined];

/**
 * Iterates over the `SearchParamEntry` values, and applies them to `target`, optionally filtering values.
 *
 * @param target The target to write values to, can be a Map (for the initial values) or `URLSearchParams`.
 * @param entries The entries to apply (as returned by the serializer).
 * @param filter Optional filter that allows to treat non-empty values as empty (e.g. to not set default values).
 */
const applyValues = (
    target: Map<string, string> | URLSearchParams,
    entries: Iterable<SearchParamEntry>,
    filter: (entry: Readonly<SearchParamEntry>) => boolean,
): void => {
    for (const entry of entries) {
        if (entry[1] && filter(entry)) {
            target.set(entry[0], entry[1]);
        } else {
            target.delete(entry[0]);
        }
    }
};

/**
 * Read the **current** search params from `window.location`, with support for detecting React's HashRouter.
 * Also returns a method that will yield the href (string) value, after any changes made on the params object.
 *
 * @returns The `URLSearchParams` instance, and a function that can be used to get an updated href.
 */
const getSearchParams = (): [URLSearchParams, () => string] => {
    const href = window.location.href;
    // Search for '#/' to detect hash router urls
    const searchStart = href.indexOf('?', href.indexOf('#/') + 1);
    const params = new URLSearchParams(searchStart < 0 ? '' : href.substring(searchStart));
    return [
        params,
        () => {
            let result = searchStart < 0 ? href : href.substring(0, searchStart);
            if (params.size > 0) {
                result = result.concat('?', params.toString());
            }
            return result;
        },
    ];
};

export interface UseUrlSyncedStateOptions<T> {
    /**
     * The initial state to use, if there would be no search params to deserialize from.
     * These values are also treated as defaults, and if the current state matches the initialState,
     * no value will be written to the search params.
     */
    initialState: T extends object ? Readonly<T> : T;
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
     * @returns The initial state based on the current url.
     * @example (params) => params.get('filter') ?? '',
     */
    deserializer: (params: URLSearchParams) => T;
    /**
     * Whether the state should be synced with the url, defaults to `true`.
     * When set to `false`, the hook behaves just like a regular `useState` hook from react.
     */
    sync?: boolean;
}

export const useUrlSyncedState = <T>(options: UseUrlSyncedStateOptions<T>) => {
    const sync = options.sync !== false;
    const initialState = useMemo(
        () => (sync ? options.deserializer(getSearchParams()[0]) : options.initialState),
        [options.initialState, options.sync],
    );
    const [state, setState] = useState<T>(initialState);
    // Capture the initial state as a map, to compare values and not set them if they match.
    const initialStateSerialized = useMemo(() => {
        const v = new Map<string, string>();
        applyValues(v, options.serializer(options.initialState), (_) => true);
        return v;
    }, [initialState, options.serializer]);
    const enhancedSetState = useMemo<Dispatch<SetStateAction<T>>>(
        () =>
            sync
                ? (updater: SetStateAction<T>) => {
                      setState((old) => {
                          const [search, getUrl] = getSearchParams();
                          const newValue = updater instanceof Function ? updater(old) : updater;
                          applyValues(
                              search,
                              options.serializer(newValue),
                              ([key, value]) => initialStateSerialized.get(key) !== value,
                          );
                          window.history.replaceState(null, '', getUrl());
                          return newValue;
                      });
                  }
                : setState,
        [sync],
    );

    return [state, enhancedSetState] as const;
};
