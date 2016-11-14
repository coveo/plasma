import { lastUpdatedComposite } from '../components/lastUpdated/LastUpdatedReducers';
import { filters } from '../components/filterBox/FilterBoxReducers';
import { facets } from '../components/facets/FacetReducers';
import { paginationComposite } from '../components/navigation/pagination/NavigationPaginationReducers';
import { perPageComposite } from '../components/navigation/perPage/NavigationPerPageReducers';
import { CommonActions, IReactVaporState } from './ReduxUtils';
import * as Redux from 'redux';
import { loadings } from '../components/loading/LoadingReducers';

export class TestUtils {
  static buildStore() {
    let reactVaporReducers = Redux.combineReducers({
      lastUpdatedComposite,
      filters,
      facets,
      paginationComposite,
      perPageComposite,
      loadings
    });

    let reactVapor = (state: IReactVaporState, action: Redux.Action) => {
      state = action.type === CommonActions.clearState ? undefined : state;
      return reactVaporReducers(state, action as any);
    };

    return Redux.createStore(reactVapor);
  }

  static randomDate() {
    return new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
  }
}
