import { IReduxAction } from '../../utils/ReduxUtils';
import { IReduxActionPayload } from '../../ReactVapor';
import { FilterActions } from './FilterBoxActions';
import * as _ from 'underscore';

export interface IFilterState {
  id: string;
  filterText: string;
}

export const filterBoxInitialState: IFilterState = { id: undefined, filterText: undefined };
export const filtersInitialState: IFilterState[] = [];

export const filterBoxReducer = (state: IFilterState = filterBoxInitialState, action: IReduxAction<IReduxActionPayload>): IFilterState => {
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

export const filterBoxesReducer = (state: IFilterState[] = filtersInitialState, action: IReduxAction<IReduxActionPayload>): IFilterState[] => {
  switch (action.type) {
    case FilterActions.filterThrough:
      return state.map(filterBox => filterBoxReducer(filterBox, action));
    case FilterActions.addFilter:
      return [
        ...state,
        filterBoxReducer(undefined, action)
      ];
    case FilterActions.removeFilter:
      return _.reject(state, (filterBox: IFilterState) => {
        return action.payload.id === filterBox.id;
      });
    default:
      return state;
  }
};
