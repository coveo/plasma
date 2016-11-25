import { CommonActions } from './ReduxUtils';
import { IReactVaporState } from '../ReactVapor';
import { lastUpdatedCompositeReducer } from '../components/lastUpdated/LastUpdatedReducers';
import { filterBoxesReducer } from '../components/filterBox/FilterBoxReducers';
import { facetsReducer } from '../components/facets/FacetReducers';
import { paginationCompositeReducer } from '../components/navigation/pagination/NavigationPaginationReducers';
import { perPageCompositeReducer } from '../components/navigation/perPage/NavigationPerPageReducers';
import { loadingsReducer } from '../components/loading/LoadingReducers';
import { promptsReducer } from '../components/inlinePrompt/InlinePromptReducers';
import { actionBarsReducer } from '../components/actions/ActionBarReducers';
import * as Redux from 'redux';
import { dropdownsReducer } from '../components/dropdown/DropdownReducers';

export class TestUtils {
  static buildStore() {
    let reactVaporReducers = Redux.combineReducers({
      lastUpdatedComposite: lastUpdatedCompositeReducer,
      filters: filterBoxesReducer,
      facets: facetsReducer,
      paginationComposite: paginationCompositeReducer,
      perPageComposite: perPageCompositeReducer,
      loadings: loadingsReducer,
      prompts: promptsReducer,
      actionBars: actionBarsReducer,
      dropdowns: dropdownsReducer
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
