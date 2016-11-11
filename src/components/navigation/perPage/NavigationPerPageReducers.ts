import { IReduxAction } from '../../../utils/ReduxUtils';
import { IPerPageActionPayload, PerPageAction } from './NavigationPerPageActions';
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

export const perPage = (state: IPerPageState = perPageInitialState, action: IReduxAction<IPerPageActionPayload>): IPerPageState => {
  switch (action.type) {
    case PerPageAction.add:
      return {
        id: action.payload.id,
        perPage: action.payload.perPage
      };
    case PerPageAction.change:
      return {
        id: state.id,
        perPage: action.payload.perPage
      };
    default:
      return state;
  }
};

export const perPageComposite = (state: IPerPageState[] = perPageCompositeInitialState, action: IReduxAction<IPerPageActionPayload>): IPerPageState[] => {
  switch (action.type) {
    case PerPageAction.add:
      return [
        ...state,
        perPage(undefined, action)
      ];
    case PerPageAction.remove:
      return _.reject(state, (p) => {
        return p.id === action.payload.id;
      });
    case PerPageAction.change:
      return state.map(p => perPage(p, action));
    default:
      return state;
  }
};
