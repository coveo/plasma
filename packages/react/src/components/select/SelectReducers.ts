import * as _ from 'underscore';
import {IReduxAction} from '../../utils/ReduxUtils';
import {ISelectPayload, SelectActions} from './SelectActions';

export interface ISelectState {
    id: string;
}

export const selectInitialState: ISelectState = {id: undefined};
export const selectCompositeInitialState: ISelectState[] = [];

export const selectReducer = (
    state: ISelectState = selectInitialState,
    action: IReduxAction<ISelectPayload>,
): ISelectState => {
    if (state.id !== action.payload.id && action.type !== SelectActions.add) {
        return state;
    }

    switch (action.type) {
        case SelectActions.add:
            return {id: action.payload.id};
        default:
            return state;
    }
};

export const selectCompositeReducer = (
    state: ISelectState[] = selectCompositeInitialState,
    action: IReduxAction<ISelectPayload>,
): ISelectState[] => {
    switch (action.type) {
        case SelectActions.add:
            const index = state.findIndex((element) => element.id === action.payload.id);
            // do not add to the state if it is already present
            if (index === -1) {
                return [...state, selectReducer(undefined, action)];
            }
            return state;
        case SelectActions.remove:
            return _.reject(state, (listBox: ISelectState) => action.payload.id === listBox.id);
        default:
            return state;
    }
};
