import * as Redux from 'redux';

export const lastUpdatedActions = {
  addLastUpdated: 'ADD_LAST_UPDATED',
  removeLastUpdated: 'REMOVE_LAST_UPDATED',
  changeLastUpdated: 'CHANGE_LAST_UPDATED'
};

export interface ILastUpdatedAction extends Redux.Action {
  id: string;
}

export const addLastUpdated = (id: string): ILastUpdatedAction => {
  return {
    type: lastUpdatedActions.addLastUpdated,
    id
  };
};

export const removeLastUpdated = (id: string): ILastUpdatedAction => {
  return {
    type: lastUpdatedActions.removeLastUpdated,
    id
  };
};

export const changeLastUpdated = (id: string): ILastUpdatedAction => {
  return {
    type: lastUpdatedActions.changeLastUpdated,
    id
  };
};
