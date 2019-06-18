import * as _ from 'underscore';
import {IReduxAction} from '../../utils/ReduxUtils';
import {FlatSelectActions, IFlatSelectActionPayload} from './FlatSelectActions';

export interface IFlatSelectState {
    id: string;
    selectedOptionId?: string;
}

export const flatSelectInitialState: IFlatSelectState = {id: undefined, selectedOptionId: undefined};
export const flatSelectsInitialState: IFlatSelectState[] = [];

export const flatSelectReducer = (
    state: IFlatSelectState = flatSelectInitialState,
    action: IReduxAction<IFlatSelectActionPayload>
): IFlatSelectState => {
    switch (action.type) {
        case FlatSelectActions.select:
            return {
                id: state.id,
                selectedOptionId: action.payload.selectedOptionId,
            };
        case FlatSelectActions.add:
            return _.extend({}, action.payload);
        default:
            return state;
    }
};

export const flatSelectsReducer = (
    state: IFlatSelectState[] = flatSelectsInitialState,
    action: IReduxAction<IFlatSelectActionPayload>
): IFlatSelectState[] => {
    switch (action.type) {
        case FlatSelectActions.select:
            return state.map((flatSelect: IFlatSelectState) => {
                return flatSelect.id === action.payload.id ? flatSelectReducer(flatSelect, action) : flatSelect;
            });
        case FlatSelectActions.add:
            return [...state, flatSelectReducer(undefined, action)];
        case FlatSelectActions.remove:
            return _.reject(state, (flatSelect: IFlatSelectState) => {
                return action.payload.id === flatSelect.id;
            });
        default:
            return state;
    }
};
