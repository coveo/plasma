import {act, renderHook} from '@test-utils';
import {useUrlSyncedState} from '../use-url-synced-state';

describe('useUrlSyncedState', () => {
    afterEach(() => {
        window.history.replaceState(null, '', '/');
    });

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
        expect(window.location.search).toBe('?key=value');
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
        expect(window.location.search).toBe('?date=2025-01-31&time=12%3A34%3A56.789Z');
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
        expect(window.location.search).toBe('?key=false');
        act(() => result.current[1](true));
        expect(window.location.search).toBe('');
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
        expect(window.location.search).toBe('?key=value');
        act(() => result.current[1](''));
        expect(window.location.search).toBe('');
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
        expect(window.location.search).toBe('');
    });

    it('derives the initial state from the url on first render', () => {
        window.history.replaceState(null, '', '?key=value');

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
        window.history.replaceState(null, '', '?key=value');

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

    describe('with hash router urls', () => {
        it('reads values from the hash parameters', () => {
            window.history.replaceState(null, '', '?key=unexpected#/hash/route?key=value');

            const {result} = renderHook(() =>
                useUrlSyncedState({
                    initialState: 'initial',
                    serializer: (state) => [['key', state]],
                    deserializer: (params) => params.get('key') ?? '',
                }),
            );
            expect(result.current[0]).toBe('value');
        });

        it('serializes the state values to the hash route parameters', () => {
            window.history.replaceState(null, '', '?a=untouched#/hash/route');

            const {result} = renderHook(() =>
                useUrlSyncedState({
                    initialState: {a: null, b: null},
                    serializer: (state) => [
                        ['a', state.a],
                        ['b', state.b],
                    ],
                    deserializer: (params) => ({a: params.get('a') ?? '', b: params.get('b')}),
                }),
            );
            act(() => result.current[1]({a: 'test', b: 'state'}));
            expect(result.current[0]).toStrictEqual({a: 'test', b: 'state'});
            expect(window.location.search).toBe('?a=untouched');
            expect(window.location.hash).toBe('#/hash/route?a=test&b=state');
        });

        it('removes the state values from the hash route parameters', () => {
            window.history.replaceState(null, '', '?a=untouched&b=part-of-search#/hash/route?a=1&b=2');

            const {result} = renderHook(() =>
                useUrlSyncedState<{a: number | null; b: number}>({
                    initialState: {a: 13, b: 37},
                    serializer: (state) => [
                        ['a', state.a?.toString()],
                        ['b', state.b?.toString()],
                    ],
                    deserializer: (params) => ({
                        a: Number.parseInt(params.get('a') ?? '0', 10),
                        b: Number.parseInt(params.get('b') ?? '0', 10),
                    }),
                }),
            );
            act(() => result.current[1]({a: null, b: 37}));
            expect(result.current[0]).toStrictEqual({a: null, b: 37});
            expect(window.location.search).toBe('?a=untouched&b=part-of-search');
            expect(window.location.hash).toBe('#/hash/route');
        });
    });
});
