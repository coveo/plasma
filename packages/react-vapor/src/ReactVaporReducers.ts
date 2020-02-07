import {ReducersMapObject} from 'redux';

import {actionBarsReducer} from './components/actions/ActionBarReducers';
import {itemFiltersReducer} from './components/actions/filters/ItemFilterReducers';
import {autocompletesReducer} from './components/autocomplete/AutocompleteReducers';
import {checkboxesReducer} from './components/checkbox/CheckboxReducers';
import {groupableCheckboxesReducer} from './components/checkbox/GroupableCheckboxReducers';
import {collapsiblesReducer} from './components/collapsible/CollapsibleReducers';
import {datePickersReducer} from './components/datePicker/DatePickerReducers';
import {dropReducer} from './components/drop/redux/DropReducers';
import {dropdownsReducer} from './components/dropdown/DropdownReducers';
import {dropdownsSearchReducer} from './components/dropdownSearch/DropdownSearchReducers';
import {facetsReducer} from './components/facets/FacetReducers';
import {filterBoxesReducer} from './components/filterBox/FilterBoxReducers';
import {flatSelectsReducer} from './components/flatSelect/FlatSelectReducers';
import {flippablesReducer} from './components/flippable/FlippableReducers';
import {promptsReducer} from './components/inlinePrompt/InlinePromptReducers';
import {inputsReducer} from './components/input/InputReducers';
import {lastUpdatedCompositeReducer} from './components/lastUpdated/LastUpdatedReducers';
import {listBoxesReducer} from './components/listBox/ListBoxReducers';
import {loadingsReducer} from './components/loading/LoadingReducers';
import {menuCompositeReducer} from './components/menu/MenuReducers';
import {modalsReducer, openModalsReducer} from './components/modal/ModalReducers';
import {paginationCompositeReducer} from './components/navigation/pagination/NavigationPaginationReducers';
import {perPageCompositeReducer} from './components/navigation/perPage/NavigationPerPageReducers';
import {numericInputReducer} from './components/numericInput/NumericInputReducers';
import {optionPickersReducer} from './components/optionPicker/OptionPickerReducers';
import {optionsCyclesReducer} from './components/optionsCycle/OptionsCycleReducers';
import {popoversReducer} from './components/popover/PopoverReducers';
import {radioSelectsReducer} from './components/radio/RadioSelectReducers';
import {refreshCallBackReducer} from './components/refresh/RefreshCallbackReducer';
import {searchBarsReducer} from './components/searchBar/SearchBarReducers';
import {selectWithFilterCompositeReducer} from './components/select/hoc/SelectWithFilterReducers';
import {selectCompositeReducer} from './components/select/SelectReducers';
import {SliderReducer} from './components/slider/SliderReducers';
import {subNavigationsReducer} from './components/subNavigation/SubNavigationReducers';
import {tabGroupsReducer} from './components/tab/TabReducers';
import {TableRowReducers} from './components/table-hoc/reducers/TableRowReducers';
import {TableWithPaginationReducers} from './components/table-hoc/reducers/TableWithPaginationReducers';
import {TableWithSortReducers} from './components/table-hoc/reducers/TableWithSortReducers';
import {tableHeaderCellsReducer} from './components/tables/TableHeaderCellReducers';
import {tablesReducer} from './components/tables/TableReducers';
import {tableRowsReducer} from './components/tables/TableRowReducers';
import {textAreasReducer} from './components/textarea/TextAreaReducers';
import {toastsContainerReducer} from './components/toast/ToastReducers';
import {validationReducer} from './components/validation/ValidationReducer';
import {withDirtyReducer} from './hoc/withDirty/withDirtyReducers';
import {IReactVaporState} from './ReactVapor';
import {stringListCompositeReducer} from './reusableState/customList/StringListReducers';
import {IReduxAction} from './utils/ReduxUtils';

const lastAction = (state: IReactVaporState = null, action: IReduxAction): IReduxAction => {
    return action;
};

export const ReactVaporReducers: ReducersMapObject = {
    actionBars: actionBarsReducer,
    autocompletes: autocompletesReducer,
    checkboxes: checkboxesReducer,
    collapsibles: collapsiblesReducer,
    datePickers: datePickersReducer,
    dirtyComponents: withDirtyReducer,
    drop: dropReducer,
    dropdowns: dropdownsReducer,
    dropdownSearch: dropdownsSearchReducer,
    facets: facetsReducer,
    filters: filterBoxesReducer,
    flatSelect: flatSelectsReducer,
    flippables: flippablesReducer,
    groupableCheckboxes: groupableCheckboxesReducer,
    inputs: inputsReducer,
    itemFilters: itemFiltersReducer,
    lastAction,
    lastUpdatedComposite: lastUpdatedCompositeReducer,
    listBoxes: listBoxesReducer,
    loadings: loadingsReducer,
    menus: menuCompositeReducer,
    modals: modalsReducer,
    multilineIds: stringListCompositeReducer,
    numericInputs: numericInputReducer,
    openModals: openModalsReducer,
    optionPickers: optionPickersReducer,
    optionsCycles: optionsCyclesReducer,
    paginationComposite: paginationCompositeReducer,
    perPageComposite: perPageCompositeReducer,
    popovers: popoversReducer,
    prompts: promptsReducer,
    radioSelects: radioSelectsReducer,
    refreshCallback: refreshCallBackReducer,
    rows: tableRowsReducer,
    searchBars: searchBarsReducer,
    selects: selectCompositeReducer,
    selectWithFilter: selectWithFilterCompositeReducer,
    sliders: SliderReducer,
    subNavigations: subNavigationsReducer,
    tableHeaderCells: tableHeaderCellsReducer,
    tableHOCHeader: TableWithSortReducers,
    tableHOCPagination: TableWithPaginationReducers,
    tableHOCRow: TableRowReducers,
    tables: tablesReducer,
    tabs: tabGroupsReducer,
    textAreas: textAreasReducer,
    toastContainers: toastsContainerReducer,
    validation: validationReducer,
};
