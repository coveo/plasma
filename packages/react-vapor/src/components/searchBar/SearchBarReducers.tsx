import * as _ from 'underscore';
import {IReduxAction} from '../../utils/ReduxUtils';
import {ISearchBarActionPayload, SearchBarActions} from './SearchBarActions';

export interface ISearchBarState {
    id: string;
    searching: boolean;
    disabled: boolean;
    value: string;
}

export const searchBarDefaultState: ISearchBarState = {
    id: undefined,
    searching: false,
    disabled: false,
    value: '',
};

export const searchBarsInitialState: ISearchBarState[] = [];

export const searchBarsReducer = (
    state: ISearchBarState[] = searchBarsInitialState,
    action: IReduxAction<ISearchBarActionPayload>
): ISearchBarState[] => {
    switch (action.type) {
        case SearchBarActions.add:
            return [
                ...state,
                {
                    ...searchBarDefaultState,
                    id: action.payload.id,
                    disabled: action.payload.disabled,
                },
            ];
        case SearchBarActions.remove:
            return _.reject(state, (searchBar: ISearchBarState) => searchBar.id === action.payload.id);
        case SearchBarActions.toggleSearching:
        case SearchBarActions.toggleDisabled:
        case SearchBarActions.setValue:
            return state.map((searchBarState: ISearchBarState) =>
                searchBarState.id === action.payload.id ? {...searchBarState, ...action.payload} : searchBarState
            );
        default:
            return state;
    }
};
