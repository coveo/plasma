import { IReduxAction } from '../../../utils/ReduxUtils';
import { IReduxActionPayload } from '../../../ReactVapor';
import { PerPageActions } from './NavigationPerPageActions';
import * as _ from 'underscore';

export interface IPerPageState {
  id: string;
  perPage: number;
}

export const perPageInitialState: IPerPageState = {
  id: undefined,
  perPage: 10
};

export const perPageCompositeInitialState: IPerPageState[] = [];

export const perPageReducer = (state: IPerPageState = perPageInitialState, action: IReduxAction<IReduxActionPayload>): IPerPageState => {
  switch (action.type) {
    case PerPageActions.add:
      return {
        id: action.payload.id,
        perPage: action.payload.perPage
      };
    case PerPageActions.change:
      return {
        id: state.id,
        perPage: action.payload.perPage
      };
    default:
      return state;
  }
};

export const perPageCompositeReducer = (state: IPerPageState[] = perPageCompositeInitialState, action: IReduxAction<IReduxActionPayload>): IPerPageState[] => {
  switch (action.type) {
    case PerPageActions.add:
      return [
        ...state,
        perPageReducer(undefined, action)
      ];
    case PerPageActions.remove:
      return _.reject(state, (perPage: IPerPageState) => {
        return perPage.id === action.payload.id;
      });
    case PerPageActions.change:
      return state.map(p => perPageReducer(p, action));
    default:
      return state;
  }
};
