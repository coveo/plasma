import * as _ from 'underscore';
import {IReduxAction} from '../../utils/ReduxUtils';
import {AutocompleteActions} from '../autocomplete/AutocompleteActions';
import {DropReducerActions} from '../drop/redux/DropActions';
import {IListBoxPayload, ListBoxActions} from './ListBoxActions';

export interface IListBoxState {
    id: string;
    selected: string[];
    active?: number;
}

export const listBoxInitialState: IListBoxState = {id: undefined, selected: []};
export const listBoxesInitialState: IListBoxState[] = [];

export const listBoxReducer = (
    state: IListBoxState = listBoxInitialState,
    action: IReduxAction<IListBoxPayload>
): IListBoxState => {
    if (state.id !== action.payload.id && action.type !== ListBoxActions.add) {
        return state;
    }

    const {payload} = action;
    switch (action.type) {
        case ListBoxActions.add:
            const selected = _.chain(action.payload.items)
                .where({selected: true})
                .pluck('value')
                .value();
            let selectedIndex = _.findIndex(action.payload.items, (e) => e.selected);
            selectedIndex = selectedIndex === -1 || action.payload.multi ? 0 : selectedIndex;
            return {
                id: action.payload.id,
                selected: selected,
                active: selectedIndex,
            };
        case ListBoxActions.select:
            return {
                ...state,
                selected: payload.multi ? _.uniq([...state.selected, payload.value]) : [payload.value],
                active: payload.multi ? null : typeof payload.index !== undefined ? payload.index : state.active,
            };
        case AutocompleteActions.setValue:
            return {
                ...state,
                selected: [payload.value],
            };
        case ListBoxActions.unselect:
            return {
                ...state,
                selected: _.without(state.selected, payload.value),
            };
        case ListBoxActions.reorder:
            return {
                ...state,
                selected: payload.values,
            };
        case ListBoxActions.setActive:
            let active = state.active + payload.diff;
            if (_.isUndefined(state.active)) {
                active = payload.diff === 1 ? 0 : -1;
            }

            return {...state, active};
        case ListBoxActions.clear:
            return {
                ...state,
                active: 0,
                selected: [],
            };
        case DropReducerActions.toggle:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export const listBoxesReducer = (
    state: IListBoxState[] = listBoxesInitialState,
    action: IReduxAction<IListBoxPayload>
): IListBoxState[] => {
    switch (action.type) {
        case ListBoxActions.add:
            return [...state, listBoxReducer(undefined, action)];
        case ListBoxActions.remove:
            return _.reject(state, (listBox: IListBoxState) => action.payload.id === listBox.id);
        case ListBoxActions.clear:
        case ListBoxActions.unselect:
        case ListBoxActions.select:
        case ListBoxActions.reorder:
        case ListBoxActions.setActive:
        case AutocompleteActions.setValue:
        case DropReducerActions.toggle:
            return state.map((listBox: IListBoxState) => listBoxReducer(listBox, action));
        default:
            return state;
    }
};
