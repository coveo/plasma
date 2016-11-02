import { LastUpdatedActions, ILastUpdatedPayload } from './LastUpdatedActions';
import * as _ from 'underscore';
import { IReduxAction } from '../../utils/ReduxUtils';

export interface ILastUpdatedState {
  id: string;
  time: Date;
}

export const lastUpdatedInitialState: ILastUpdatedState = { id: undefined, time: new Date() };
export const lastUpdatedCompositeInitialState: ILastUpdatedState[] = [];

export const lastUpdated = (state: ILastUpdatedState = lastUpdatedInitialState, action: IReduxAction<ILastUpdatedPayload>): ILastUpdatedState => {
  switch (action.type) {
    case LastUpdatedActions.addLastUpdated:
      return {
        id: action.payload.id,
        time: state.time
      };
    case LastUpdatedActions.changeLastUpdated:
      if (state.id !== action.payload.id) {
        return state;
      }
      return _.extend({}, state, {
        time: new Date()
      });
    default:
      return state;
  }
};

export const lastUpdatedComposite = (state: ILastUpdatedState[] = lastUpdatedCompositeInitialState, action: IReduxAction<ILastUpdatedPayload>): ILastUpdatedState[] => {
  switch (action.type) {
    case LastUpdatedActions.addLastUpdated:
      return [
        ...state,
        lastUpdated(undefined, action)
      ];
    case LastUpdatedActions.removeLastUpdated:
      return _.reject(state, (time) => {
        return action.payload.id === time.id;
      });
    case LastUpdatedActions.changeLastUpdated:
      return state.map(time =>
        lastUpdated(time, action)
      );
    default:
      return state;
  }
};
