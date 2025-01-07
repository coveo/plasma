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
                sync: true,
            }),
        );
        act(() => result.current[1]('value'));
        expect(result.current[0]).toBe('value');
        expect(window.location.search).toBe('?key=value');
    });

    it('allows to serialize the state value into multiple parameters', () => {
        const {result} = renderHook(() =>
            useUrlSyncedState({
                initialState: {key1: '', key2: ''},
                serializer: (state) => [
                    ['key1', state.key1],
                    ['key2', state.key2],
                ],
                deserializer: (params) => ({
                    key1: params.get('key1') ?? '',
                    key2: params.get('key2') ?? '',
                }),
                sync: true,
            }),
        );
        act(() => result.current[1]({key1: 'value1', key2: 'value2'}));
        expect(window.location.search).toBe('?key1=value1&key2=value2');
    });

    it('removes the parameter from the url if the state serializes to the same value as the initial state', () => {
        const {result} = renderHook(() =>
            useUrlSyncedState({
                initialState: 'initial',
                serializer: (state) => [['key', state]],
                deserializer: (params) => params.get('key') ?? '',
                sync: true,
            }),
        );
        act(() => result.current[1]('value'));
        expect(window.location.search).toBe('?key=value');
        act(() => result.current[1]('initial'));
        expect(window.location.search).toBe('');
    });

    it('removes the parameter from the url if the state serializes to the empty string', () => {
        const {result} = renderHook(() =>
            useUrlSyncedState({
                initialState: 'initial',
                serializer: (state) => [['key', state]],
                deserializer: (params) => params.get('key') ?? '',
                sync: true,
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
                sync: true,
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

    it('uses the custom url sync functions provided in the sync parameter', () => {
        const setSearchParamSpy = vi.fn();
        const {result} = renderHook(() =>
            useUrlSyncedState({
                initialState: 'initial',
                serializer: (state) => [['key', state]],
                deserializer: (params) => params.get('key') ?? '',
                sync: {
                    getSearchParams: () => new URLSearchParams('?key=value'),
                    setSearchParam: setSearchParamSpy,
                },
            }),
        );
        expect(result.current[0]).toBe('value');
        act(() => result.current[1]('new'));
        expect(setSearchParamSpy).toHaveBeenCalledWith('key', 'new', 'initial');
    });
});
