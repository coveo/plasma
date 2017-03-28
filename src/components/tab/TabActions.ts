import { IReduxAction } from '../../Index';

export interface ITabActionPayload {
  id: string;
}

export const TabAction = {
  selectTab: 'SELECT_TAB',
  addTab: 'ADD_TAB',
  removeTab: 'REMOVE_TAB'
};

export const selectTab = (id: string): IReduxAction<ITabActionPayload> => ({
  type: TabAction.selectTab,
  payload: {
    id
  }
});

export const addTab = (id: string): IReduxAction<ITabActionPayload> => ({
  type: TabAction.addTab,
  payload: {
    id
  }
});

export const removeTab = (id: string): IReduxAction<ITabActionPayload> => ({
  type: TabAction.removeTab,
  payload: {
    id
  }
});
