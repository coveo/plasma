import { lastUpdatedCompositeReducer } from '../components/lastUpdated/LastUpdatedReducers';
import { CommonActions, IReactVaporState } from './ReduxUtils';
import { filterBoxesReducer } from '../components/filterBox/FilterBoxReducers';
import { facetsReducer } from '../components/facets/FacetReducers';
import { paginationCompositeReducer } from '../components/navigation/pagination/NavigationPaginationReducers';
import { perPageCompositeReducer } from '../components/navigation/perPage/NavigationPerPageReducers';
import { loadingsReducer } from '../components/loading/LoadingReducers';
import * as Redux from 'redux';

export class TestUtils {
  static buildStore() {
    let reactVaporReducers = Redux.combineReducers({
      lastUpdatedComposite: lastUpdatedCompositeReducer,
      filters: filterBoxesReducer,
      facets: facetsReducer,
      paginationComposite: paginationCompositeReducer,
      perPageComposite: perPageCompositeReducer,
      loadings: loadingsReducer
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
