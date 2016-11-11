import { IReduxAction } from '../../../utils/ReduxUtils';

export interface IPerPageActionPayload {
  id: string;
  perPage?: number;
}

export const PerPageAction = {
  add: 'ADD_PER_PAGE',
  remove: 'REMOVE_PER_PAGE',
  change: 'CHANGE_PER_PAGE'
};

export const addPerPage = (id: string, perPage: number): IReduxAction<IPerPageActionPayload> => {
  return {
    type: PerPageAction.add,
    payload: {
      id,
      perPage
    }
  };
};

export const removePerPage = (id: string): IReduxAction<IPerPageActionPayload> => {
  return {
    type: PerPageAction.remove,
    payload: {
      id
    }
  };
};

export const changePerPage = (id: string, perPage: number): IReduxAction<IPerPageActionPayload> => {
  return {
    type: PerPageAction.change,
    payload: {
      id,
      perPage
    }
  };
};
