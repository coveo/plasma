import {BasePayload, IReduxAction} from '../../utils/ReduxUtils';

export const RefreshCallbackActionType = {
    stop: 'STOP_REFRESH_CALLBACK',
    start: 'START_REFRESH_CALLBACK',
    inProgress: 'IN_PROGRESS_REFRESH_CALLBACK',
};

const start = (id: string): IReduxAction<BasePayload> => ({
    type: RefreshCallbackActionType.start,
    payload: {
        id,
    },
});

const stop = (id: string): IReduxAction<BasePayload> => ({
    type: RefreshCallbackActionType.stop,
    payload: {
        id,
    },
});

const inProgress = (id: string): IReduxAction<BasePayload> => ({
    type: RefreshCallbackActionType.inProgress,
    payload: {
        id,
    },
});

export const RefreshCallBackActions = {
    start,
    stop,
    inProgress,
};
