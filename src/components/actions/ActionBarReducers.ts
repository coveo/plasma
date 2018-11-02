import * as _ from 'underscore';
import * as s from 'underscore.string';
import {IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction} from '../../utils/ReduxUtils';
import {ListBoxActions} from '../listBox/ListBoxActions';
import {LoadingActions} from '../loading/LoadingActions';
import {PaginationActions} from '../navigation/pagination/NavigationPaginationActions';
import {PerPageActions} from '../navigation/perPage/NavigationPerPageActions';
import {TableHOCUtils} from '../table-hoc/TableHOCUtils';
import {IActionOptions} from './Action';
import {ActionBarActions} from './ActionBarActions';

export interface IActionBarState {
    id: string;
    actions: IActionOptions[];
    tableYPosition: number;
    isLoading?: boolean;
}

export const actionBarInitialState: IActionBarState = {
    id: undefined,
    actions: [],
    tableYPosition: undefined,
};
export const actionBarsInitialState: IActionBarState[] = [];

export const actionBarReducer = (state: IActionBarState = actionBarInitialState, action: IReduxAction<IReduxActionsPayload>): IActionBarState => {
    switch (action.type) {
        case ActionBarActions.addActions:
            return state.id !== action.payload.id
                ? state
                : {...state, actions: action.payload.actions};
        case ActionBarActions.add:
            return {
                ...state,
                id: action.payload.id,
                isLoading: false,
            };
        case PerPageActions.change:
        case PaginationActions.changePage:
        case ListBoxActions.select:
            return state.id === action.payload.id
                || TableHOCUtils.getPaginationId(state.id) === action.payload.id
                || s.contains(action.payload.id, state.id)
                ? {...state, actions: []}
                : state;
        case LoadingActions.turnOn:
            return _.contains(action.payload.ids, state.id)
                ? {...state, isLoading: true}
                : state;
        case LoadingActions.turnOff:
            return _.contains(action.payload.ids, state.id)
                ? {...state, isLoading: false}
                : state;
        default:
            return state;
    }
};

export const actionBarsReducer = (state: IActionBarState[] = actionBarsInitialState, action: IReduxAction<IReduxActionsPayload>): IActionBarState[] => {
    switch (action.type) {
        case ActionBarActions.addActions:
        case PaginationActions.changePage:
        case PerPageActions.change:
        case ListBoxActions.select:
        case LoadingActions.turnOn:
        case LoadingActions.turnOff:
            return state.map((bar) =>
                actionBarReducer(bar, action),
            );
        case ActionBarActions.add:
            return [
                ...state,
                actionBarReducer(undefined, action),
            ];
        case ActionBarActions.remove:
            return _.reject(state, (bar) => {
                return action.payload.id === bar.id;
            });
        default:
            return state;
    }
};
