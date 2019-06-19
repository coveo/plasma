import * as _ from 'underscore';
import {IReduxAction} from '../../utils/ReduxUtils';
import {ListBoxActions} from '../listBox/ListBoxActions';
import {AutocompleteActions, IAutocompletePayload} from './AutocompleteActions';

export interface IAutocompleteState {
    id: string;
    open: boolean;
    value: string;
    active: number;
}

export const autocompleteInitialState: IAutocompleteState = {id: undefined, open: false, value: '', active: undefined};
export const autocompleteCompositeInitialState: IAutocompleteState[] = [];

export const autocompleteReducer = (
    state: IAutocompleteState = autocompleteInitialState,
    action: IReduxAction<IAutocompletePayload>
): IAutocompleteState => {
    if (state.id !== action.payload.id && action.type !== AutocompleteActions.add) {
        return state;
    }

    switch (action.type) {
        case AutocompleteActions.add:
            return {
                ...state,
                id: action.payload.id,
            };
        case AutocompleteActions.toggle:
            const open = !_.isUndefined(action.payload.open) ? action.payload.open : !state.open;
            // if open was sent in the dispatch use the value. Otherwise toggle the property
            return {...state, open, active: undefined};
        case AutocompleteActions.setValue:
            return {...state, open: action.payload.open, value: action.payload.value};
        case AutocompleteActions.setActive:
            let active = state.active + action.payload.diff;
            if (_.isUndefined(state.active)) {
                active = action.payload.diff === 1 ? 0 : -1;
            }

            return {...state, open: true, active};
        case ListBoxActions.select:
            // when the user selects a value in the list, close the autocomplete
            return {...state, open: false, value: action.payload.value};
        default:
            return state;
    }
};

export const autocompletesReducer = (
    state: IAutocompleteState[] = autocompleteCompositeInitialState,
    action: IReduxAction<IAutocompletePayload>
): IAutocompleteState[] => {
    switch (action.type) {
        case AutocompleteActions.add:
            return [...state, autocompleteReducer(undefined, action)];
        case AutocompleteActions.remove:
            return _.reject(state, (listBox: IAutocompleteState) => action.payload.id === listBox.id);
        case ListBoxActions.select:
        case AutocompleteActions.toggle:
        case AutocompleteActions.setValue:
        case AutocompleteActions.setActive:
            return state.map((select: IAutocompleteState) => autocompleteReducer(select, action));
        default:
            return state;
    }
};
