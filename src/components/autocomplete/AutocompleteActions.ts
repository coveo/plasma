import {IReduxAction} from '../../utils/ReduxUtils';

export const AutocompleteActions = {
    add: 'ADD_AUTOCOMPLETE',
    remove: 'REMOVE_AUTOCOMPLETE',
    toggle: 'TOGGLE_AUTOCOMPLETE',
    setValue: 'SET_VALUE_AUTOCOMPLETE',
    setActive: 'SET_ACTIVE_AUTOCOMPLETE',
};

export interface IAutocompletePayload {
    id: string;
    open?: boolean;
    value?: string;
    diff?: number;
}

export const addAutocomplete = (id: string): IReduxAction<IAutocompletePayload> => ({
    type: AutocompleteActions.add,
    payload: {id},
});

export const removeAutocomplete = (id: string): IReduxAction<IAutocompletePayload> => ({
    type: AutocompleteActions.remove,
    payload: {id},
});

export const toggleAutocomplete = (id: string, open?: boolean): IReduxAction<IAutocompletePayload> => ({
    type: AutocompleteActions.toggle,
    payload: {id, open},
});

export const setAutocompleteValue = (id: string, value: string, open: boolean): IReduxAction<IAutocompletePayload> => ({
    type: AutocompleteActions.setValue,
    payload: {id, value, open},
});

export const setAutocompleteActive = (id: string, diff: number): IReduxAction<IAutocompletePayload> => ({
    type: AutocompleteActions.setActive,
    payload: {id, diff},
});
