import { IReduxAction } from '../../utils/ReduxUtils';
import { IFilterActionPayload, FilterActions } from './FilterBoxActions';
import * as _ from 'underscore';

export interface IFilterState {
  id: string;
  filterText: string;
}

export const filterBoxInitialState: IFilterState = { id: undefined, filterText: undefined };
export const filtersInitialState: IFilterState[] = [];

export const filterBox = (state: IFilterState = filterBoxInitialState, action: IReduxAction<IFilterActionPayload>): IFilterState => {
  switch (action.type) {
    case FilterActions.filterThrough:
      if (state.id !== action.payload.id) {
        return state;
      }

      return {
        id: state.id,
        filterText: action.payload.filterText
      };
    case FilterActions.addFilter:
      return {
        id: action.payload.id,
        filterText: ''
      };
    default:
      return state;
  }
};

export const filters = (state: IFilterState[] = filtersInitialState, action: IReduxAction<IFilterActionPayload>): IFilterState[] => {
  switch (action.type) {
    case FilterActions.filterThrough:
      return state.map(f => filterBox(f, action));
    case FilterActions.addFilter:
      return [
        ...state,
        filterBox(undefined, action)
      ];
    case FilterActions.removeFilter:
      return _.reject(state, (f) => {
        return action.payload.id === f.id;
      });
    default:
      return state;
  }
};
