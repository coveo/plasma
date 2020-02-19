import {IReactVaporState} from '../../ReactVapor';
import {BasePayload, IReduxAction} from '../../utils/ReduxUtils';
import {RefreshCallbackActionType} from './RefeshCallbackActions';

export enum RefreshStatus {
    started = 'started',
    stopped = 'stopped',
    inProgress = 'inProgress',
}

export interface IRefreshCallbackReducerState {
    [id: string]: RefreshStatus;
}

export const refreshCallbackInitialState: IRefreshCallbackReducerState = {};

export const refreshCallBackReducer = (
    state: IRefreshCallbackReducerState = refreshCallbackInitialState,
    action: IReduxAction<BasePayload>
): IRefreshCallbackReducerState => {
    switch (action.type) {
        case RefreshCallbackActionType.start:
            return {
                ...state,
                [action.payload.id]: RefreshStatus.started,
            };
        case RefreshCallbackActionType.stop:
            return {
                ...state,
                [action.payload.id]: RefreshStatus.stopped,
            };
        case RefreshCallbackActionType.inProgress:
            return {
                ...state,
                [action.payload.id]: RefreshStatus.inProgress,
            };
        default:
            return state;
    }
};

const getRefreshStatus = (state: IReactVaporState, {id}: {id: string}): string => state.refreshCallback?.[id];

export const RefreshStatusSelectors = {
    getRefreshStatus,
};
