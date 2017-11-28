import { IReduxAction } from '../../utils/ReduxUtils';

export const LoadingActions = {
  add: 'ADD_LOADING',
  remove: 'REMOVE_LOADING',
  turnOn: 'TURN_ON_LOADING',
  turnOff: 'TURN_OFF_LOADING'
};

export interface ILoadingActionPayload {
  ids: string[];
  id?: string;
}

export const addLoading = (id: string): IReduxAction<ILoadingActionPayload> => ({
  type: LoadingActions.add,
  payload: {
    ids: [id]
  }
});

export const removeLoading = (id: string): IReduxAction<ILoadingActionPayload> => ({
  type: LoadingActions.remove,
  payload: {
    ids: [id]
  }
});

// the second id is the id from which the action was triggered from
export const turnOnLoading = (ids: string[], id?: string): IReduxAction<ILoadingActionPayload> => ({
  type: LoadingActions.turnOn,
  payload: {
    ids,
    id,
  }
});

// the second id is the id from which the action was triggered from
export const turnOffLoading = (ids: string[], id?: string): IReduxAction<ILoadingActionPayload> => ({
  type: LoadingActions.turnOff,
  payload: {
    ids,
    id,
  }
});
