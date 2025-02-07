import {act, renderHook} from '@test-utils';
import {useUrlSyncedState} from '../use-url-synced-state';

/**
 * Split a url into its parts.
 * Note that this method is purposefully different from the implementation,
 * and it splits to an object instead of an Array.
 *
 * @param href The url to extract the parts from.
 * @returns The separate parts, all are an empty string if not present.
 */
const extractParts = (href: string) =>
    /^(?<pathname>[^?#]*)(?<search>\?[^#]*|)(?<hash>#[^?]*|)(?<hashSearch>\?.*|)$/.exec(href).groups as {
        pathname: string;
        search: string;
        hash: string;
        hashSearch: string;
    };

describe.each(['/', '/#', '/#?', '/#hash?with-question=mark', '/sub/path', '/?leave=untouched#/', '/?dev#/sub/path/'])(
    'useUrlSyncedState with location %s',
    (location) => {
        const locationParts = extractParts(location);
        const isHashRoute = locationParts.hash.startsWith('#/');

        beforeEach(() => {
            window.history.replaceState(null, '', location);
        });

        afterEach(() => {
            window.history.replaceState(null, '', '/');
        });

        /**
         * Utility that will set the search to be a specific value, taking into account hash routes.
         *
         * @param search The search value to set.
         */
        const setSearch = (search: string) => {
            const parts = extractParts(location);
            if (isHashRoute) {
                parts.hashSearch = search;
            } else {
                parts.search = search;
            }
            window.history.replaceState(null, '', `${parts.pathname}${parts.search}${parts.hash}${parts.hashSearch}`);
        };

        /**
         * Utility expect that will automatically check either the hash route search or normal search,
         * and also validates the other part is left as-is, if necessary.
         *
         * @param expectedSearch The expected search
         */
        const expectSearch = (expectedSearch: string) => {
            expect(window.location.pathname).toBe(locationParts.pathname);
            if (isHashRoute) {
                expect(window.location.search).toBe(locationParts.search);
                expect(window.location.hash).toBe(`${locationParts.hash}${expectedSearch}`);
            } else {
                expect(window.location.search).toBe(expectedSearch);
                const hash = `${locationParts.hash}${locationParts.hashSearch}`;
                // "fun" quirk: if the hash is only #, location.hash is empty.
                expect(window.location.hash).toBe(hash === '#' ? '' : hash);
            }
        };

        it('serializes the state value as url parameter when the state changes', () => {
            const {result} = renderHook(() =>
                useUrlSyncedState({
                    initialState: '',
                    serializer: (state) => [['key', state]],
                    deserializer: (params) => params.get('key') ?? '',
                }),
            );
            act(() => result.current[1]('value'));
            expect(result.current[0]).toBe('value');
            expectSearch('?key=value');
        });

        it('allows to serialize the state value into multiple parameters', () => {
            const {result} = renderHook(() =>
                useUrlSyncedState({
                    initialState: new Date(),
                    serializer: (state) => {
                        const iso = state.toISOString();
                        return [
                            ['date', iso.substring(0, 10)],
                            ['time', iso.substring(11, 24)],
                        ];
                    },
                    deserializer: (params) =>
                        new Date(`${params.get('date') ?? '2025-01-01'}T${params.get('time') ?? '00:00:00.000Z'}`),
                }),
            );
            act(() => result.current[1](new Date(Date.UTC(2025, 0, 31, 12, 34, 56, 789))));
            expectSearch('?date=2025-01-31&time=12%3A34%3A56.789Z');
        });

        it('removes the parameter from the url if the state serializes to the same value as the initial state', () => {
            const {result} = renderHook(() =>
                useUrlSyncedState({
                    initialState: true,
                    serializer: (state) => [['key', state ? 'true' : 'false']],
                    deserializer: (params, initialState) =>
                        params.has('key') ? params.get('key') === 'true' : initialState,
                    sync: true,
                }),
            );
            act(() => result.current[1](false));
            expectSearch('?key=false');
            act(() => result.current[1](true));
            expectSearch('');
        });

        it('removes the parameter from the url if the state serializes to the empty string', () => {
            const {result} = renderHook(() =>
                useUrlSyncedState({
                    initialState: 'initial',
                    serializer: (state) => [['key', state]],
                    deserializer: (params) => params.get('key') ?? '',
                }),
            );
            act(() => result.current[1]('value'));
            expectSearch('?key=value');
            act(() => result.current[1](''));
            expectSearch('');
        });

        it('does not sync with the url if the sync parameter is set to false', () => {
            const {result} = renderHook(() =>
                useUrlSyncedState({
                    initialState: '',
                    serializer: (state) => [['key', state]],
                    deserializer: (params) => params.get('key') ?? '',
                    sync: false,
                }),
            );
            act(() => result.current[1]('value'));
            expect(result.current[0]).toBe('value');
            expectSearch('');
        });

        it('derives the initial state from the url on first render', () => {
            setSearch('?key=value');

            const {result} = renderHook(() =>
                useUrlSyncedState({
                    initialState: 'initial',
                    serializer: (state) => [['key', state]],
                    deserializer: (params) => params.get('key') ?? '',
                }),
            );
            expect(result.current[0]).toBe('value');
        });

        it('does not derive the initial state from the url on first render if sync option is false', () => {
            setSearch('?key=value');

            const {result} = renderHook(() =>
                useUrlSyncedState({
                    initialState: 'initial',
                    serializer: (state) => [['key', state]],
                    deserializer: (params) => params.get('key') ?? '',
                    sync: false,
                }),
            );
            expect(result.current[0]).toBe('initial');
        });

        it('does not serializes initial state for "always emit" value, if sync option is false', () => {
            const {result} = renderHook(() =>
                useUrlSyncedState({
                    initialState: 'initial',
                    serializer: (state) => [['key', state, true]],
                    deserializer: (params) => params.get('key') ?? '',
                    sync: false,
                }),
            );
            expect(result.current[0]).toBe('initial');
            expectSearch('');
        });

        it('serializes initial state for "always emit" value', () => {
            setSearch('?keep=as-is');

            const {result} = renderHook(() =>
                useUrlSyncedState({
                    initialState: 'initial',
                    serializer: (state) => [['key', state, true]],
                    deserializer: (params, initial) => params.get('key') ?? initial,
                }),
            );
            expect(result.current[0]).toBe('initial');
            expectSearch('?keep=as-is&key=initial');
        });

        it('deserializes initial state for "always emit" value, without changing it', () => {
            setSearch('?text=value');

            const {result} = renderHook(() =>
                useUrlSyncedState({
                    initialState: {text: 'initial', nr: 42},
                    serializer: (state) => [
                        ['text', state.text, true],
                        ['number', String(state.nr), true],
                    ],
                    deserializer: (params, initial) => ({
                        text: params.get('text') ?? initial.text,
                        nr: params.has('number') ? Number.parseInt(params.get('number'), 10) : initial.nr,
                    }),
                }),
            );
            expect(result.current[0]).toStrictEqual({text: 'value', nr: 42});
            expectSearch('?text=value&number=42');
        });
    },
);
