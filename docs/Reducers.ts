import { collapsibleContainersReducer } from '../src/components/collapsibleContainer/CollapsibleContainerReducers';
import { IMembersCompositeState, membersReducers } from './members-example/reducers/MembersReducers';
import { actionBarsReducer } from '../src/components/actions/ActionBarReducers';
import { itemFiltersReducer } from '../src/components/actions/filters/ItemFilterReducers';
import { datePickersReducer } from '../src/components/datePicker/DatePickerReducers';
import { dropdownsReducer } from '../src/components/dropdown/DropdownReducers';
import { dropdownsSearchReducer } from '../src/components/dropdownSearch/DropdownSearchReducers';
import { facetsReducer } from '../src/components/facets/FacetReducers';
import { filterBoxesReducer } from '../src/components/filterBox/FilterBoxReducers';
import { promptsReducer } from '../src/components/inlinePrompt/InlinePromptReducers';
import { lastUpdatedCompositeReducer } from '../src/components/lastUpdated/LastUpdatedReducers';
import { loadingsReducer } from '../src/components/loading/LoadingReducers';
import { modalsReducer } from '../src/components/modal/ModalReducers';
import { paginationCompositeReducer } from '../src/components/navigation/pagination/NavigationPaginationReducers';
import { perPageCompositeReducer } from '../src/components/navigation/perPage/NavigationPerPageReducers';
import { optionPickersReducer } from '../src/components/optionPicker/OptionPickerReducers';
import { optionsCyclesReducer } from '../src/components/optionsCycle/OptionsCycleReducers';
import { subNavigationsReducer } from '../src/components/subNavigation/SubNavigationReducers';
import { tabGroupsReducer } from '../src/components/tab/TabReducers';
import { tableHeaderCellsReducer } from '../src/components/tables/TableHeaderCellReducers';
import { tableRowsReducer } from '../src/components/tables/TableRowReducers';
import { toastsContainerReducer } from '../src/components/toast/ToastReducers';
import { IReactVaporState } from '../src/ReactVapor';
import * as Redux from 'redux';
import { tablesReducer } from '../src/components/tables/TableReducers';
import { flatSelectsReducer } from '../src/components/flatSelect/FlatSelectReducers';
import { checkboxesReducer } from '../src/components/checkbox/CheckboxReducers';
import { inputsReducer } from '../src/components/input/InputReducers';

export interface IReactVaporExampleState extends IReactVaporState {
  membersCompositeState: IMembersCompositeState;
  lastAction: Redux.Action;
}

const lastAction = (state: IReactVaporExampleState = null, action: Redux.Action): Redux.Action => {
  return action;
};

export const Reducers: Redux.Reducer<IReactVaporExampleState> = Redux.combineReducers<IReactVaporExampleState>({
  tables: tablesReducer,
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
  dropdownSearch: dropdownsSearchReducer,
  flatSelect: flatSelectsReducer,
  rows: tableRowsReducer,
  itemFilters: itemFiltersReducer,
  optionsCycles: optionsCyclesReducer,
  optionPickers: optionPickersReducer,
  datePickers: datePickersReducer,
  modals: modalsReducer,
  subNavigations: subNavigationsReducer,
  tabs: tabGroupsReducer,
  toastContainers: toastsContainerReducer,
  lastAction,
  tableHeaderCells: tableHeaderCellsReducer,
  checkboxes: checkboxesReducer,
  collapsibleContainers: collapsibleContainersReducer,
  inputs: inputsReducer,
});
