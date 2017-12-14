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
import { tableHeaderCellsReducer } from '../components/tables/TableHeaderCellReducers';
import { optionsCyclesReducer } from '../components/optionsCycle/OptionsCycleReducers';
import { optionPickersReducer } from '../components/optionPicker/OptionPickerReducers';
import { datePickersReducer } from '../components/datePicker/DatePickerReducers';
import { itemFiltersReducer } from '../components/actions/filters/ItemFilterReducers';
import { modalsReducer } from '../components/modal/ModalReducers';
import { subNavigationsReducer } from '../components/subNavigation/SubNavigationReducers';
import { tabGroupsReducer } from '../components/tab/TabReducers';
import * as Redux from 'redux';
import { dropdownsSearchReducer } from '../components/dropdownSearch/DropdownSearchReducers';
import { toastsContainerReducer } from '../components/toast/ToastReducers';
import { ISvgProps } from '../components/svg/Svg';
import { ITooltipProps } from '../components/tooltip/Tooltip';
import { flatSelectsReducer } from '../components/flatSelect/FlatSelectReducers';

export interface IReactVaporTestState extends IReactVaporState {
  lastAction?: Redux.Action;
}

export class TestUtils {
  static buildStore() {
    const lastActionReducer = (state: IReactVaporTestState = null, action: Redux.Action): Redux.Action => {
      return action;
    };

    const reactVaporReducers = Redux.combineReducers({
      lastAction: lastActionReducer,
      lastUpdatedComposite: lastUpdatedCompositeReducer,
      filters: filterBoxesReducer,
      facets: facetsReducer,
      paginationComposite: paginationCompositeReducer,
      perPageComposite: perPageCompositeReducer,
      loadings: loadingsReducer,
      prompts: promptsReducer,
      actionBars: actionBarsReducer,
      dropdowns: dropdownsReducer,
      dropdownSearch: dropdownsSearchReducer,
      flatSelect: flatSelectsReducer,
      rows: tableRowsReducer,
      tableHeaderCells: tableHeaderCellsReducer,
      optionsCycles: optionsCyclesReducer,
      optionPickers: optionPickersReducer,
      datePickers: datePickersReducer,
      itemFilters: itemFiltersReducer,
      modals: modalsReducer,
      subNavigations: subNavigationsReducer,
      tabs: tabGroupsReducer,
      toastContainers: toastsContainerReducer,
    });

    const reactVapor = (state: IReactVaporTestState, action: Redux.Action) => {
      state = action.type === CommonActions.clearState ? undefined : state;
      return reactVaporReducers(state, action as any);
    };

    return Redux.createStore(reactVapor);
  }

  static randomDate() {
    return new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
  }
}

export const defaultSvgProps: ISvgProps = {
  svgName: 'domain-google',
  svgClass: 'icon mod-2x',
};

export const defaultTooltipProps: ITooltipProps = {
  title: 'default tooltip description',
  placement: 'bottom',
  container: 'body',
};
