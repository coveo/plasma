import {IReduxAction} from '../../utils/ReduxUtils';

export const SearchBarActions = {
    add: 'ADD_SEARCH_BAR',
    remove: 'REMOVE_SEARCH_BAR',
    toggleSearching: 'TOGGLE_SEARCH_BAR_SEARCHING',
    toggleDisabled: 'TOGGLE_SEARCH_BAR_DISABLED',
    setValue: 'SET_SEARCH_BAR_TEXT',
};

export interface ISearchBarActionPayload {
    id: string;
    disabled?: boolean;
    searching?: boolean;
    value?: string;
}

export const addSearchBar = (id: string, disabled = false): IReduxAction<ISearchBarActionPayload> => ({
    type: SearchBarActions.add,
    payload: {id, disabled},
});

export const removeSearchBar = (id: string): IReduxAction<ISearchBarActionPayload> => ({
    type: SearchBarActions.remove,
    payload: {id},
});

export const toggleSearching = (id: string, searching: boolean) => ({
    type: SearchBarActions.toggleSearching,
    payload: {id, searching},
});

export const toggleSearchBarDisabled = (id: string, disabled: boolean) => ({
    type: SearchBarActions.toggleDisabled,
    payload: {id, disabled},
});

export const setSearchBarValue = (id: string, value = '') => ({
    type: SearchBarActions.setValue,
    payload: {id, value},
});

export const SearchBarReduxActions = {
    addSearchBar,
    removeSearchBar,
    toggleSearching,
    toggleSearchBarDisabled,
    setSearchBarValue,
};
