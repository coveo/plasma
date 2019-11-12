import {BasePayload, IReduxAction} from '../../utils/ReduxUtils';

export const RefreshCallbackActionType = {
    stop: 'STOP_REFRESH_CALLBACK',
    start: 'START_REFRESH_CALLBACK',
    inProgress: 'IN_PROGRESS_REFRESH_CALLBACK',
};

export interface IRefreshCallbackPayload extends BasePayload {
    expanded?: boolean;
}

const start = (id: string): IReduxAction<IRefreshCallbackPayload> => ({
    type: RefreshCallbackActionType.start,
    payload: {
        id,
    },
});

const stop = (id: string): IReduxAction<IRefreshCallbackPayload> => ({
    type: RefreshCallbackActionType.stop,
    payload: {
        id,
    },
});

const inProgress = (id: string): IReduxAction<IRefreshCallbackPayload> => ({
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
