import { IReduxAction } from '../../utils/ReduxUtils';

export const FilterActions = {
  addFilter: 'ADD_FILTER',
  removeFilter: 'REMOVE_FILTER',
  filterThrough: 'FILTER'
};

export interface IFilterActionPayload {
  id: string;
  filterText?: string;
}

export const addFilter = (id: string): IReduxAction<IFilterActionPayload> => {
  return {
    type: FilterActions.addFilter,
    payload: {
      id
    }
  };
};

export const removeFilter = (id: string): IReduxAction<IFilterActionPayload> => {
  return {
    type: FilterActions.removeFilter,
    payload: {
      id
    }
  };
};

export const filterThrough = (id: string, filterText: string): IReduxAction<IFilterActionPayload> => {
  return {
    type: FilterActions.filterThrough,
    payload: {
      id,
      filterText
    }
  };
};
