import * as _ from 'underscore';
import {IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction} from '../../utils/ReduxUtils';
import {SearchBarActions} from './SearchBarActions';

export interface ISearchBarState {
    id: string;
    searching: boolean;
}

export const searchBarInitialState: ISearchBarState = {
    id: undefined,
    searching: false,
};

export const searchBarsInitialState: ISearchBarState[] = [];

export const searchBarReducer = (
    state: ISearchBarState = searchBarInitialState,
    action: IReduxAction<IReduxActionsPayload>,
): ISearchBarState => {
    switch (action.type) {
        case SearchBarActions.add:
            return {
                id: action.payload.id,
                searching: action.payload.searching,
            };
        case SearchBarActions.toggleSearching:
            return state.id === action.payload.id
                ? {...state, searching: action.payload.searching}
                : state;
        default:
            return state;
    }
};

export const searchBarsReducer = (
    state: ISearchBarState[] = searchBarsInitialState,
    action: IReduxAction<IReduxActionsPayload>,
): ISearchBarState[] => {
    switch (action.type) {
        case SearchBarActions.add:
            return [
                ...state,
                searchBarReducer(undefined, action),
            ];
        case SearchBarActions.remove:
            return _.reject(state, (searchBar: ISearchBarState) => searchBar.id === action.payload.id);
        case SearchBarActions.toggleSearching:
            return state.map((searchBar: ISearchBarState) => searchBarReducer(searchBar, action));
        default:
            return state;
    }
};
