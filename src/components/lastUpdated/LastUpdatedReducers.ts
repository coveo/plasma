import { LastUpdatedActions, ILastUpdatedAction } from './LastUpdatedActions';
import * as _ from 'underscore';

export interface ILastUpdatedState {
  id: string;
  time: Date;
}

export const lastUpdatedInitialState: ILastUpdatedState = { id: undefined, time: new Date() };
export const lastUpdatedCompositeInitialState: ILastUpdatedState[] = [];

export const lastUpdated = (state: ILastUpdatedState = lastUpdatedInitialState, action: ILastUpdatedAction): ILastUpdatedState => {
  switch (action.type) {
    case LastUpdatedActions.addLastUpdated:
      return {
        id: action.id,
        time: state.time
      };
    case LastUpdatedActions.changeLastUpdated:
      if (state.id !== action.id) {
        return state;
      }
      return _.extend({}, state, {
        time: new Date()
      });
    default:
      return state;
  }
};

export const lastUpdatedComposite = (state: ILastUpdatedState[] = lastUpdatedCompositeInitialState, action: ILastUpdatedAction): ILastUpdatedState[] => {
  switch (action.type) {
    case LastUpdatedActions.addLastUpdated:
      return [
        ...state,
        lastUpdated(undefined, action)
      ];
    case LastUpdatedActions.removeLastUpdated:
      return _.reject(state, (time) => {
        return action.id === time.id;
      });
    case LastUpdatedActions.changeLastUpdated:
      return state.map(time =>
        lastUpdated(time, action)
      );
    default:
      return state;
  }
};
