import * as _ from 'underscore';
import {IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction} from '../../utils/ReduxUtils';
import {LastUpdatedActions} from './LastUpdatedActions';

export interface ILastUpdatedState {
    id: string;
    time: Date;
}

export const lastUpdatedInitialState: ILastUpdatedState = {id: undefined, time: new Date()};
export const lastUpdatedCompositeInitialState: ILastUpdatedState[] = [];

export const lastUpdatedReducer = (
    state: ILastUpdatedState = lastUpdatedInitialState,
    action: IReduxAction<IReduxActionsPayload>
): ILastUpdatedState => {
    switch (action.type) {
        case LastUpdatedActions.addLastUpdated:
            return {
                id: action.payload.id,
                time: state.time,
            };
        case LastUpdatedActions.changeLastUpdated:
            if (state.id !== action.payload.id) {
                return state;
            }
            return _.extend({}, state, {
                time: new Date(),
            });
        default:
            return state;
    }
};

export const lastUpdatedCompositeReducer = (
    state: ILastUpdatedState[] = lastUpdatedCompositeInitialState,
    action: IReduxAction<IReduxActionsPayload>
): ILastUpdatedState[] => {
    switch (action.type) {
        case LastUpdatedActions.addLastUpdated:
            return [...state, lastUpdatedReducer(undefined, action)];
        case LastUpdatedActions.removeLastUpdated:
            return _.reject(state, (lastUpdated: ILastUpdatedState) => {
                return action.payload.id === lastUpdated.id;
            });
        case LastUpdatedActions.changeLastUpdated:
            return state.map((lastUpdated: ILastUpdatedState) => lastUpdatedReducer(lastUpdated, action));
        default:
            return state;
    }
};
