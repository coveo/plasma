import {IReduxAction} from '../../utils/ReduxUtils';

export const SearchBarActions = {
    add: 'ADD_SEARCH_BAR',
    remove: 'REMOVE_SEARCH_BAR',
    toggleSearching: 'TOGGLE_SEARCH_BAR_SEARCHING',
};

export interface ISearchActionPayload {
    id: string;
    searching?: boolean;
}

export const addSearchBar = (id: string, searching = false): IReduxAction<ISearchActionPayload> => ({
    type: SearchBarActions.add,
    payload: {id, searching},
});

export const removeSearchBar = (id: string): IReduxAction<ISearchActionPayload> => ({
    type: SearchBarActions.remove,
    payload: {id},
});

export const toggleSearching = (id: string, searching: boolean) => ({
    type: SearchBarActions.toggleSearching,
    payload: {id, searching},
});
