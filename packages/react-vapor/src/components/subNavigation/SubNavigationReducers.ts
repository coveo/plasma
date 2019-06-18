import * as _ from 'underscore';
import {IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction} from '../../utils/ReduxUtils';
import {SubNavigationActions} from './SubNavigationActions';

export interface ISubNavigationState {
    id: string;
    selected: string;
}

export const subNavigationInitialState: ISubNavigationState = {id: undefined, selected: ''};
export const subNavigationsInitialState: ISubNavigationState[] = [];

export const subNavigationReducer = (
    state: ISubNavigationState = subNavigationInitialState,
    action: IReduxAction<IReduxActionsPayload>
): ISubNavigationState => {
    switch (action.type) {
        case SubNavigationActions.select:
            return state.id !== action.payload.id
                ? state
                : {
                      id: state.id,
                      selected: action.payload.selected,
                  };
        case SubNavigationActions.add:
            return {
                id: action.payload.id,
                selected: action.payload.selected,
            };
        default:
            return state;
    }
};

export const subNavigationsReducer = (
    state: ISubNavigationState[] = subNavigationsInitialState,
    action: IReduxAction<IReduxActionsPayload>
): ISubNavigationState[] => {
    switch (action.type) {
        case SubNavigationActions.select:
            return state.map((dropdown: ISubNavigationState) => subNavigationReducer(dropdown, action));
        case SubNavigationActions.add:
            return [...state, subNavigationReducer(undefined, action)];
        case SubNavigationActions.remove:
            return _.reject(state, (dropdown: ISubNavigationState) => action.payload.id === dropdown.id);
        default:
            return state;
    }
};
