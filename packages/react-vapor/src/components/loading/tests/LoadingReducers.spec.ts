import * as _ from 'underscore';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {ILoadingActionPayload, LoadingActions} from '../LoadingActions';
import {
    ILoadingState,
    loadingInitialState,
    loadingReducer,
    loadingsInitialState,
    loadingsReducer,
} from '../LoadingReducers';

describe('Reducers', () => {
    describe('LoadingReducers', () => {
        const genericAction: IReduxAction<ILoadingActionPayload> = {
            type: 'DO_SOMETHING',
            payload: {
                ids: [],
            },
        };

        it('should return the default state if the action is not defined and the state is undefined ', () => {
            const loadingState: ILoadingState[] = loadingsReducer(undefined, genericAction);

            expect(loadingState).toBe(loadingsInitialState);
        });

        it('should return the default state if the action is not defined and the state is undefined for one loading state', () => {
            const loadingState: ILoadingState = loadingReducer(undefined, genericAction);

            expect(loadingState).toBe(loadingInitialState);
        });

        it('should return the old state when the action is not defined for the loading state', () => {
            const oldState: ILoadingState[] = [
                {
                    id: 'some-loading',
                    isOn: false,
                },
            ];
            const loadingState: ILoadingState[] = loadingsReducer(oldState, genericAction);

            expect(loadingState).toBe(oldState);
        });

        it('should return the old state when the action is not defined for one loading state', () => {
            const oldState: ILoadingState = {
                id: 'some-loading',
                isOn: false,
            };
            const loadingState: ILoadingState = loadingReducer(oldState, genericAction);

            expect(loadingState).toBe(oldState);
        });

        it('should return the old state with one more LoadingState when the action is "ADD_LOADING"', () => {
            let oldState: ILoadingState[] = loadingsInitialState;
            const action: IReduxAction<ILoadingActionPayload> = {
                type: LoadingActions.add,
                payload: {
                    ids: ['some-new-loading'],
                },
            };
            let loadingsState: ILoadingState[] = loadingsReducer(oldState, action);

            expect(loadingsState.length).toBe(oldState.length + 1);
            expect(loadingsState.filter((l) => l.id === action.payload.ids[0]).length).toBe(1);

            oldState = loadingsState;
            action.payload.ids = ['other-loading'];
            loadingsState = loadingsReducer(oldState, action);

            expect(loadingsState.length).toBe(oldState.length + 1);
            expect(loadingsState.filter((l) => l.id === action.payload.ids[0]).length).toBe(1);
        });

        it('should return the old state without the LoadingState with the action id when the action is "REMOVE_LOADING"', () => {
            let oldState: ILoadingState[] = [
                {
                    id: 'some-loading',
                    isOn: true,
                },
                {
                    id: 'some-loading2',
                    isOn: false,
                },
                {
                    id: 'some-loading1',
                    isOn: true,
                },
            ];
            const action: IReduxAction<ILoadingActionPayload> = {
                type: LoadingActions.remove,
                payload: {
                    ids: ['some-loading2'],
                },
            };
            let loadingsState: ILoadingState[] = loadingsReducer(oldState, action);

            expect(loadingsState.length).toBe(oldState.length - 1);
            expect(loadingsState.filter((l) => l.id === action.payload.ids[0]).length).toBe(0);

            oldState = loadingsState;
            action.payload.ids = ['some-loading'];
            loadingsState = loadingsReducer(oldState, action);

            expect(loadingsState.length).toBe(oldState.length - 1);
            expect(loadingsState.filter((p) => p.id === action.payload.ids[0]).length).toBe(0);
        });

        it('should set isOn to true when the action is "TURN_ON_LOADING" for the action id', () => {
            const oldState = [
                {
                    id: 'some-loading',
                    isOn: false,
                },
                {
                    id: 'some-loading2',
                    isOn: false,
                },
                {
                    id: 'some-loading1',
                    isOn: false,
                },
            ];
            const action: IReduxAction<ILoadingActionPayload> = {
                type: LoadingActions.turnOn,
                payload: {
                    ids: ['some-loading', 'some-loading2'],
                },
            };
            const loadingState = loadingsReducer(oldState, action);

            expect(_.findWhere(loadingState, {id: 'some-loading'}).isOn).toBe(true);
            expect(_.findWhere(loadingState, {id: 'some-loading2'}).isOn).toBe(true);
            expect(_.findWhere(loadingState, {id: 'some-loading1'}).isOn).toBe(false);
        });

        it('should set isOn to false when the action is "TURN_OFF_LOADING" for the action id', () => {
            const oldState = [
                {
                    id: 'some-loading',
                    isOn: true,
                },
                {
                    id: 'some-loading2',
                    isOn: true,
                },
                {
                    id: 'some-loading1',
                    isOn: true,
                },
            ];
            const action: IReduxAction<ILoadingActionPayload> = {
                type: LoadingActions.turnOff,
                payload: {
                    ids: ['some-loading', 'some-loading2'],
                },
            };
            const loadingState = loadingsReducer(oldState, action);

            expect(_.findWhere(loadingState, {id: 'some-loading'}).isOn).toBe(false);
            expect(_.findWhere(loadingState, {id: 'some-loading2'}).isOn).toBe(false);
            expect(_.findWhere(loadingState, {id: 'some-loading1'}).isOn).toBe(true);
        });
    });
});
