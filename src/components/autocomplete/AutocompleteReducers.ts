import * as _ from 'underscore';
import {IReduxAction} from '../../utils/ReduxUtils';
import {ListBoxActions} from '../listBox/ListBoxActions';
import {AutocompleteActions, IAutocompletePayload} from './AutocompleteActions';

export interface IAutocompleteState {
    id: string;
    open: boolean;
    value: string;
}

export const selectInitialState: IAutocompleteState = {id: undefined, open: false, value: ''};
export const selectCompositeInitialState: IAutocompleteState[] = [];

export const autocompleteReducer = (state: IAutocompleteState = selectInitialState, action: IReduxAction<IAutocompletePayload>): IAutocompleteState => {
    if (state.id !== action.payload.id && action.type !== AutocompleteActions.add) {
        return state;
    }

    switch (action.type) {
        case AutocompleteActions.add:
            return {
                id: action.payload.id,
                open: state.open,
                value: state.value,
            };
        case AutocompleteActions.toggle:
            // if open was sent in the dispatch use the value. Otherwise toggle the property
            return {...state, open: !_.isUndefined(action.payload.open) ? action.payload.open : !state.open};
        case AutocompleteActions.setValue:
            return {...state, open: true, value: action.payload.value};
        case ListBoxActions.select:
            // when the user selects a value in the list, close the autocomplete
            return {...state, open: false, value: action.payload.value};
        default:
            return state;
    }
};

export const autocompletesReducer = (
    state: IAutocompleteState[] = selectCompositeInitialState,
    action: IReduxAction<IAutocompletePayload>,
): IAutocompleteState[] => {
    switch (action.type) {
        case AutocompleteActions.add:
            return [
                ...state,
                autocompleteReducer(undefined, action),
            ];
        case AutocompleteActions.remove:
            return _.reject(state, (listBox: IAutocompleteState) => action.payload.id === listBox.id);
        case ListBoxActions.select:
        case AutocompleteActions.toggle:
        case AutocompleteActions.setValue:
            return state.map((select: IAutocompleteState) => autocompleteReducer(select, action));
        default:
            return state;
    }
};
