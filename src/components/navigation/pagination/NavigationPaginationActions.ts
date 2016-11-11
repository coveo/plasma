import { IReduxAction } from '../../../utils/ReduxUtils';

export interface IPaginationActionPayload {
  id: string;
  pageNb?: number;
}

export const PaginationActions = {
  add: 'ADD_PAGINATION',
  remove: 'REMOVE_PAGINATION',
  changePage: 'CHANGE_PAGE',
  reset: 'RESET_PAGING'
};

export const addPagination = (id: string): IReduxAction<IPaginationActionPayload> => {
  return {
    type: PaginationActions.add,
    payload: {
      id
    }
  };
};

export const removePagination = (id: string): IReduxAction<IPaginationActionPayload> => {
  return {
    type: PaginationActions.remove,
    payload: {
      id
    }
  };
};

export const changePage = (id: string, pageNb: number): IReduxAction<IPaginationActionPayload> => {
  return {
    type: PaginationActions.changePage,
    payload: {
      id,
      pageNb
    }
  };
};

export const resetPaging = (id: string): IReduxAction<IPaginationActionPayload> => {
  return {
    type: PaginationActions.reset,
    payload: {
      pageNb: 0,
      id
    }
  };
};
