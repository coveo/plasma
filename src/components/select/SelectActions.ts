import {IReduxAction} from '../../utils/ReduxUtils';

export const SelectActions = {
  add: 'ADD_SELECT',
  remove: 'REMOVE_SELECT',
  toggle: 'TOGGLE_SELECT',
  open: 'OPEN_SELECT',
  close: 'CLOSE_SELECT',
};

export interface ISelectPayload {
  id: string;
  open?: boolean;
}

export const addSelect = (id: string): IReduxAction<ISelectPayload> => ({
  type: SelectActions.add,
  payload: {id},
});

export const removeSelect = (id: string): IReduxAction<ISelectPayload> => ({
  type: SelectActions.remove,
  payload: {id},
});

export const openSelect = (id: string): IReduxAction<ISelectPayload> => ({
  type: SelectActions.open,
  payload: {id, open: true},
});

export const closeSelect = (id: string): IReduxAction<ISelectPayload> => ({
  type: SelectActions.close,
  payload: {id, open: false},
});

export const toggleSelect = (id: string): IReduxAction<ISelectPayload> => ({
  type: SelectActions.toggle,
  payload: {id},
});
