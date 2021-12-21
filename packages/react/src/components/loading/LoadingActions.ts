import {IReduxAction} from '../../utils/ReduxUtils';

export const LoadingActions = {
    add: 'ADD_LOADING',
    remove: 'REMOVE_LOADING',
    turnOn: 'TURN_ON_LOADING',
    turnOff: 'TURN_OFF_LOADING',
};

export interface ILoadingActionPayload {
    ids: string[];
}

export const addLoading = (id: string): IReduxAction<ILoadingActionPayload> => ({
    type: LoadingActions.add,
    payload: {
        ids: [id],
    },
});

export const removeLoading = (id: string): IReduxAction<ILoadingActionPayload> => ({
    type: LoadingActions.remove,
    payload: {
        ids: [id],
    },
});

export const turnOnLoading = (ids: string[]): IReduxAction<ILoadingActionPayload> => ({
    type: LoadingActions.turnOn,
    payload: {
        ids,
    },
});

export const turnOffLoading = (ids: string[]): IReduxAction<ILoadingActionPayload> => ({
    type: LoadingActions.turnOff,
    payload: {
        ids,
    },
});
