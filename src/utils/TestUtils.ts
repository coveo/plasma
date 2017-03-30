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
import { dropdownsReducer } from '../components/dropdown/DropdownReducers';
import { tableRowsReducer } from '../components/tables/TableRowReducers';
import { optionsCyclesReducer } from '../components/optionsCycle/OptionsCycleReducers';
import { optionPickersReducer } from '../components/optionPicker/OptionPickerReducers';
import { datePickersReducer } from '../components/datePicker/DatePickerReducers';
import { itemFiltersReducer } from '../components/actions/filters/ItemFilterReducers';
import { subNavigationsReducer } from '../components/subNavigation/SubNavigationReducers';
import { tabsReducer } from '../components/tab/TabReducers';
import * as Redux from 'redux';

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
      dropdowns: dropdownsReducer,
      rows: tableRowsReducer,
      optionsCycles: optionsCyclesReducer,
      optionPickers: optionPickersReducer,
      datePickers: datePickersReducer,
      itemFilters: itemFiltersReducer,
      subNavigations: subNavigationsReducer,
      tabs: tabsReducer
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
