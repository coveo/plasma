import * as _ from 'underscore';
import {IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction} from '../../utils/ReduxUtils';
import {DropReducerActions, IDropPayload} from '../drop/redux/DropActions';
import {ListBoxActions} from '../listBox/ListBoxActions';
import {FilterActions} from './FilterBoxActions';

export interface IFilterState {
    id: string;
    filterText: string;
}

export const filterBoxInitialState: IFilterState = {id: undefined, filterText: undefined};
export const filtersInitialState: IFilterState[] = [];

export const filterBoxReducer = (
    state: IFilterState = filterBoxInitialState,
    action: IReduxAction<IReduxActionsPayload>
): IFilterState => {
    if (state.id !== action.payload.id && action.type !== FilterActions.addFilter) {
        return state;
    }

    switch (action.type) {
        case FilterActions.filterThrough:
            return {
                id: state.id,
                filterText: action.payload.filterText,
            };
        case FilterActions.addFilter:
            return {
                id: action.payload.id,
                filterText: '',
            };
        case ListBoxActions.select:
            return {
                id: state.id,
                filterText: '',
            };
        case DropReducerActions.toggle:
            const cast = action.payload as IDropPayload;
            return cast.isOpen === true || _.isUndefined(cast.isOpen)
                ? state
                : {
                      id: state.id,
                      filterText: '',
                  };
        default:
            return state;
    }
};

export const filterBoxesReducer = (
    state: IFilterState[] = filtersInitialState,
    action: IReduxAction<IReduxActionsPayload>
): IFilterState[] => {
    switch (action.type) {
        case ListBoxActions.select:
        case DropReducerActions.toggle:
        case FilterActions.filterThrough:
            return state.map((filterBox) => filterBoxReducer(filterBox, action));
        case FilterActions.addFilter:
            return [...state, filterBoxReducer(undefined, action)];
        case FilterActions.removeFilter:
            return _.reject(state, (filterBox: IFilterState) => action.payload.id === filterBox.id);
        default:
            return state;
    }
};
