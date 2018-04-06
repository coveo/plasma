import * as _ from 'underscore';
import {IReduxAction} from '../../utils/ReduxUtils';
import {AutocompleteActions} from '../autocomplete/AutocompleteActions';
import {IListBoxPayload, ListBoxActions} from './ListBoxActions';

export interface IListBoxState {
    id: string;
    selected: string[];
}

export const listBoxInitialState: IListBoxState = {id: undefined, selected: []};
export const listBoxesInitialState: IListBoxState[] = [];

export const listBoxReducer = (state: IListBoxState = listBoxInitialState, action: IReduxAction<IListBoxPayload>): IListBoxState => {
    if (state.id !== action.payload.id && action.type !== ListBoxActions.add) {
        return state;
    }

    switch (action.type) {
        case ListBoxActions.add:
            const selected = _.chain(action.payload.items)
                .where({selected: true})
                .pluck('value')
                .value();
            return {
                id: action.payload.id,
                selected: selected,
            };
        case ListBoxActions.select:
            return {
                ...state,
                selected: action.payload.multi
                    ? [...state.selected, action.payload.value]
                    : [action.payload.value],
            };
        case AutocompleteActions.setValue:
            return {
                ...state,
                selected: [action.payload.value],
            };
        case ListBoxActions.unselect:
            return {
                ...state,
                selected: _.without(state.selected, action.payload.value),
            };
        case ListBoxActions.clear:
            return {
                ...state,
                selected: [],
            };
        default:
            return state;
    }
};

export const listBoxesReducer = (
    state: IListBoxState[] = listBoxesInitialState,
    action: IReduxAction<IListBoxPayload>,
): IListBoxState[] => {
    switch (action.type) {
        case ListBoxActions.add:
            return [
                ...state,
                listBoxReducer(undefined, action),
            ];
        case ListBoxActions.remove:
            return _.reject(state, (listBox: IListBoxState) => action.payload.id === listBox.id);
        case ListBoxActions.clear:
        case ListBoxActions.unselect:
        case ListBoxActions.select:
        case AutocompleteActions.setValue:
            return state.map((listBox: IListBoxState) => listBoxReducer(listBox, action));
        default:
            return state;
    }
};
