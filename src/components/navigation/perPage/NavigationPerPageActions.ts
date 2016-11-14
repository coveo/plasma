import { IReduxAction } from '../../../utils/ReduxUtils';

export interface IPerPageActionPayload {
  id: string;
  perPage?: number;
}

export const PerPageActions = {
  add: 'ADD_PER_PAGE',
  remove: 'REMOVE_PER_PAGE',
  change: 'CHANGE_PER_PAGE'
};

export const addPerPage = (id: string, perPage: number): IReduxAction<IPerPageActionPayload> => ({
  type: PerPageActions.add,
  payload: {
    id,
    perPage
  }
});

export const removePerPage = (id: string): IReduxAction<IPerPageActionPayload> => ({
  type: PerPageActions.remove,
  payload: {
    id
  }
});

export const changePerPage = (id: string, perPage: number): IReduxAction<IPerPageActionPayload> => ({
  type: PerPageActions.change,
  payload: {
    id,
    perPage
  }
});
