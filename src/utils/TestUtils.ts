import { lastUpdatedComposite } from '../components/lastUpdated/LastUpdatedReducers';
import { combineReducers, createStore } from 'redux';
import { CommonActions, IReactVaporState } from './ReduxUtils';
import * as Redux from 'redux';

export class TestUtils {
  static buildStore() {
    let reactVaporReducers = combineReducers({
      lastUpdatedComposite
    });

    let reactVapor = (state: IReactVaporState, action: Redux.Action) => {
      state = action.type === CommonActions.clearState ? undefined : state;
      return reactVaporReducers(state, action as any);
    };

    return createStore(reactVapor);
  }

  static randomDate() {
    return new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
  }
}
