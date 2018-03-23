import * as _ from 'underscore';
import {IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction} from '../../utils/ReduxUtils';
import {SearchBarActions} from './SearchBarActions';

export interface ISearchBarState {
    id: string;
    searching: boolean;
}

export const searchBarsInitialState: ISearchBarState[] = [];

export const searchBarsReducer = (
    state: ISearchBarState[] = searchBarsInitialState,
    action: IReduxAction<IReduxActionsPayload>,
): ISearchBarState[] => {
    switch (action.type) {
        case SearchBarActions.add:
            return [
                ...state,
                {
                    id: action.payload.id,
                    searching: action.payload.searching,
                },
            ];
        case SearchBarActions.remove:
            return _.reject(state, (searchBar: ISearchBarState) => searchBar.id === action.payload.id);
        case SearchBarActions.toggleSearching:
            return state.map((searchBarState: ISearchBarState) => searchBarState.id === action.payload.id
                ? {...searchBarState, searching: action.payload.searching}
                : searchBarState,
            );
        default:
            return state;
    }
};
