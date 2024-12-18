import {useMemo, useState} from 'react';

const setSearchParam = (key: string, value: string, initial: string) => {
    const url = new URL(window.location.href);
    if (value === '' || value === initial) {
        url.searchParams.delete(key);
    } else {
        url.searchParams.set(key, value);
    }
    window.history.replaceState(null, '', url.toString());
};

const getSearchParams = (): URLSearchParams => {
    const url = new URL(window.location.href);
    return url.searchParams;
};

export interface UseUrlSyncedStateOptions<T> {
    /**
     * The initial state
     */
    initialState: T;
    /**
     * The serializer function is used to determine how the state is translated to url search parameters.
     * Called each time the state changes.
     * @param stateValue The new state value to serialize.
     * @returns A list of [key, value] to set as url search parameters.
     * @example (filterValue) => [['filter', filterValue]] // ?filter=filterValue
     */
    serializer: (stateValue: T) => Array<[string, string]>;
    /**
     * The deserializer function is used to determine how the url parameters influence the initial state.
     * Called only once when initializing the state.
     * @param params All the search parameters of the current url.
     * @returns The initial state based on the current url.
     * @example (params) => params.get('filter') ?? '',
     */
    deserializer: (params: URLSearchParams) => T;
    /**
     * Whether the state should be synced with the url.
     * When set to false, the hook behaves just like a regular useState hook from react.
     */
    sync?: boolean;
}

export const useUrlSyncedState = <T>({initialState, serializer, deserializer, sync}: UseUrlSyncedStateOptions<T>) => {
    const [state, setState] = useState<T>(sync ? deserializer(getSearchParams()) : initialState);
    const enhancedSetState = useMemo(() => {
        if (sync) {
            const initialSerialized = serializer(initialState).reduce(
                (acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                },
                {} as Record<string, string>,
            );
            return (updater: T | ((old: T) => T)) => {
                setState((old) => {
                    const newValue = updater instanceof Function ? updater(old) : updater;
                    serializer(newValue).forEach(([key, value]) => setSearchParam(key, value, initialSerialized[key]));
                    return newValue;
                });
            };
        }

        return setState;
    }, [sync]);

    return [state, enhancedSetState] as const;
};
