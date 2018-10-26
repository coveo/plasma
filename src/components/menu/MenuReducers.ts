import * as _ from 'underscore';
import {IReduxAction} from '../../utils/ReduxUtils';
import {IMenuPayload, MenuActions} from './MenuActions';

export interface IMenusState {[id: string]: IMenuState;}

export interface IMenuState {
    id: string;
    open: boolean;
}

export const menuInitialState: IMenuState = {id: undefined, open: false};
export const menuCompositeInitialState: IMenusState = {};

export const menuReducer = (state: IMenuState = menuInitialState, action: IReduxAction<IMenuPayload>): IMenuState => {
    if (state.id !== action.payload.id && action.type !== MenuActions.add) {
        return state;
    }

    switch (action.type) {
        case MenuActions.add:
            return {
                id: action.payload.id,
                open: state.open,
            };
        case MenuActions.toggle:
            return {...state, open: !_.isUndefined(action.payload.open) ? action.payload.open : !state.open};
        default:
            return state;
    }
};

export const menuCompositeReducer = (
    state: IMenusState = menuCompositeInitialState,
    action: IReduxAction<IMenuPayload>,
): IMenusState => {
    switch (action.type) {
        case MenuActions.add:
            return {
                ...state,
                [action.payload.id]: menuReducer(undefined, action),
            };
        case MenuActions.remove:
            return _.omit(state, action.payload.id);
        case MenuActions.toggle:
            return {...state, [action.payload.id]: menuReducer(state[action.payload.id], action)};
        default:
            return state;
    }
};
