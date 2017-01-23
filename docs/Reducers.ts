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
import {itemFiltersReducer} from '../src/components/actions/filters/ItemFilterReducers';
import { IReactVaporState } from '../src/ReactVapor';
import * as Redux from 'redux';

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
  lastAction
});
