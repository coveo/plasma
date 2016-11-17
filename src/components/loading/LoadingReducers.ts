import { IReduxAction, IReduxActionPayload } from '../../utils/ReduxUtils';
import { LoadingActions } from './LoadingActions';
import * as _ from 'underscore';

export interface ILoadingState {
  id: string;
  isOn: boolean;
}

export const loadingInitialState: ILoadingState = {
  id: undefined,
  isOn: false
};

export const loadingsInitialState: ILoadingState[] = [];

export const loadingReducer = (state: ILoadingState = loadingInitialState, action: IReduxAction<IReduxActionPayload>): ILoadingState => {
  switch (action.type) {
    case LoadingActions.add:
      return {
        id: action.payload.ids[0],
        isOn: true
      };
    case LoadingActions.turnOn:
      if (!_.contains(action.payload.ids, state.id)) {
        return state;
      }

      return {
        id: state.id,
        isOn: true
      };
    case LoadingActions.turnOff:
      if (!_.contains(action.payload.ids, state.id)) {
        return state;
      }

      return {
        id: state.id,
        isOn: false
      };
    default:
      return state;
  }
};

export const loadingsReducer = (state: ILoadingState[] = loadingsInitialState, action: IReduxAction<IReduxActionPayload>): ILoadingState[] => {
  switch (action.type) {
    case LoadingActions.add:
      return [
        ...state,
        loadingReducer(undefined, action)
      ];
    case LoadingActions.remove:
      return _.reject(state, (l) => {
        return l.id === action.payload.ids[0];
      });
    case LoadingActions.turnOn:
    case LoadingActions.turnOff:
      return state.map(l => loadingReducer(l, action));
    default:
      return state;
  }
};
