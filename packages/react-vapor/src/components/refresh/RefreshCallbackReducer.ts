import {IReduxAction} from '../../utils/ReduxUtils';
import {IRefreshCallbackPayload, RefreshCallbackActionType} from './RefeshCallbackActions';

export type IRefreshStatus = 'start' | 'stop' | 'inProgress';

export interface IRefreshCallBackState {
    [id: string]: IRefreshStatus;
}

export const refreshCallbackInitialState: IRefreshCallBackState = {};

export const refreshCallBackReducer = (
    state: IRefreshCallBackState = refreshCallbackInitialState,
    action: IReduxAction<IRefreshCallbackPayload>
): IRefreshCallBackState => {
    switch (action.type) {
        case RefreshCallbackActionType.start:
            return {
                ...state,
                [action.payload.id]: 'start',
            };
        case RefreshCallbackActionType.stop:
            return {
                ...state,
                [action.payload.id]: 'stop',
            };
        case RefreshCallbackActionType.inProgress:
            return {
                ...state,
                [action.payload.id]: 'inProgress',
            };
        default:
            return state;
    }
};
