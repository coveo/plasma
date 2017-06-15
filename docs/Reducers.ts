import { membersReducers, IMembersCompositeState } from './members-example/reducers/MembersReducers';
import { lastUpdatedCompositeReducer } from '../src/components/lastUpdated/LastUpdatedReducers';
import { filterBoxesReducer } from '../src/components/filterBox/FilterBoxReducers';
import { facetsReducer } from '../src/components/facets/FacetReducers';
import { perPageCompositeReducer } from '../src/components/navigation/perPage/NavigationPerPageReducers';
import { paginationCompositeReducer } from '../src/components/navigation/pagination/NavigationPaginationReducers';
import { loadingsReducer } from '../src/components/loading/LoadingReducers';
import { promptsReducer } from '../src/components/inlinePrompt/InlinePromptReducers';
import { actionBarsReducer } from '../src/components/actions/ActionBarReducers';
import { dropdownsReducer } from '../src/components/dropdown/DropdownReducers';
import { tableRowsReducer } from '../src/components/tables/TableRowReducers';
import { optionsCyclesReducer } from '../src/components/optionsCycle/OptionsCycleReducers';
import { datePickersReducer } from '../src/components/datePicker/DatePickerReducers';
import { modalsReducer } from '../src/components/modal/ModalReducers';
import { itemFiltersReducer } from '../src/components/actions/filters/ItemFilterReducers';
import { optionPickersReducer } from '../src/components/optionPicker/OptionPickerReducers';
import { subNavigationsReducer } from '../src/components/subNavigation/SubNavigationReducers';
import { IReactVaporState } from '../src/ReactVapor';
import * as Redux from 'redux';
import { tabGroupsReducer } from '../src/components/tab/TabReducers';

export interface IReactVaporExampleState extends IReactVaporState {
  membersCompositeState: IMembersCompositeState;
  lastAction: Redux.Action;
}

const lastAction = (state: IReactVaporExampleState = null, action: Redux.Action): Redux.Action => {
  return action;
};

export const Reducers: Redux.Reducer<IReactVaporExampleState> = Redux.combineReducers<IReactVaporExampleState>({
  membersCompositeState: membersReducers,
  lastUpdatedComposite: lastUpdatedCompositeReducer,
  filters: filterBoxesReducer,
  facets: facetsReducer,
  perPageComposite: perPageCompositeReducer,
  paginationComposite: paginationCompositeReducer,
  loadings: loadingsReducer,
  prompts: promptsReducer,
  actionBars: actionBarsReducer,
  dropdowns: dropdownsReducer,
  rows: tableRowsReducer,
  itemFilters: itemFiltersReducer,
  optionsCycles: optionsCyclesReducer,
  optionPickers: optionPickersReducer,
  datePickers: datePickersReducer,
  modals: modalsReducer,
  subNavigations: subNavigationsReducer,
  tabs: tabGroupsReducer,
  lastAction
});
