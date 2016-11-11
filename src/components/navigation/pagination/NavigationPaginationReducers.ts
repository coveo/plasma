import { IReduxAction } from '../../../utils/ReduxUtils';
import { IPaginationActionPayload, PaginationActions } from './NavigationPaginationActions';
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

export const pagination = (state: IPaginationState = paginationInitialState, action: IReduxAction<IPaginationActionPayload>): IPaginationState => {
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


export const paginationComposite = (state: IPaginationState[] = paginationCompositeInitialState, action: IReduxAction<IPaginationActionPayload>): IPaginationState[] => {
  switch (action.type) {
    case PaginationActions.add:
      return [
        ...state,
        pagination(undefined, action)
      ];
    case PaginationActions.remove:
      return _.reject(state, (p) => {
        return p.id === action.payload.id;
      });
    case PaginationActions.changePage:
    case PaginationActions.reset:
      return state.map(p => pagination(p, action));
    default:
      return state;
  }
};
