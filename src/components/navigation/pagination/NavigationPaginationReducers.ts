import { IReduxAction } from '../../../utils/ReduxUtils';
import { IReduxActionPayload } from '../../../ReactVapor';
import { PaginationActions } from './NavigationPaginationActions';
import * as _ from 'underscore';

export interface IPaginationState {
  id: string;
  pageNb: number;
}

export const paginationInitialState: IPaginationState = {
  id: undefined,
  pageNb: 0
};

export const paginationCompositeInitialState: IPaginationState[] = [];

export const paginationReducer = (state: IPaginationState = paginationInitialState, action: IReduxAction<IReduxActionPayload>): IPaginationState => {
  switch (action.type) {
    case PaginationActions.add:
      return {
        id: action.payload.id,
        pageNb: state.pageNb
      };
    case PaginationActions.changePage:
    case PaginationActions.reset:
      if (state.id !== action.payload.id) {
        return state;
      }
      return {
        id: state.id,
        pageNb: action.payload.pageNb
      };
    default:
      return state;
  }
};


export const paginationCompositeReducer = (state: IPaginationState[] = paginationCompositeInitialState, action: IReduxAction<IReduxActionPayload>): IPaginationState[] => {
  switch (action.type) {
    case PaginationActions.add:
      return [
        ...state,
        paginationReducer(undefined, action)
      ];
    case PaginationActions.remove:
      return _.reject(state, (pagination: IPaginationState) => {
        return pagination.id === action.payload.id;
      });
    case PaginationActions.changePage:
    case PaginationActions.reset:
      return state.map(p => paginationReducer(p, action));
    default:
      return state;
  }
};
