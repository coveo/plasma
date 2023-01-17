import {ReducersMapObject} from 'redux';

import {actionBarsReducer} from './components/actions/ActionBarReducers.js';
import {itemFiltersReducer} from './components/actions/filters/ItemFilterReducers.js';
import {autocompletesReducer} from './components/autocomplete/AutocompleteReducers.js';
import {checkboxesReducer} from './components/checkbox/CheckboxReducers.js';
import {groupableCheckboxesReducer} from './components/checkbox/GroupableCheckboxReducers.js';
import {collapsiblesReducer} from './components/collapsible/CollapsibleReducers.js';
import {datePickersReducer} from './components/datePicker/DatePickerReducers.js';
import {dropReducer} from './components/drop/redux/DropReducers.js';
import {dropdownsReducer} from './components/dropdown/DropdownReducers.js';
import {dropdownsSearchReducer} from './components/dropdownSearch/DropdownSearchReducers.js';
import {codeEditorsReducer} from './components/editor/CodeEditorReducers.js';
import {jsonEditorsReducer} from './components/editor/JSONEditorReducers.js';
import {facetsReducer} from './components/facets/FacetReducers.js';
import {filepickersReducer} from './components/filepicker/FilepickerReducers.js';
import {filterBoxesReducer} from './components/filterBox/FilterBoxReducers.js';
import {flatSelectsReducer} from './components/flatSelect/FlatSelectReducers.js';
import {flippablesReducer} from './components/flippable/FlippableReducers.js';
import {promptsReducer} from './components/inlinePrompt/InlinePromptReducers.js';
import {inputsReducer} from './components/input/InputReducers.js';
import {lastUpdatedCompositeReducer} from './components/lastUpdated/LastUpdatedReducers.js';
import {listBoxesReducer} from './components/listBox/ListBoxReducers.js';
import {loadingsReducer} from './components/loading/LoadingReducers.js';
import {menuCompositeReducer} from './components/menu/MenuReducers.js';
import {modalsReducer, openModalsReducer} from './components/modal/ModalReducers.js';
import {paginationCompositeReducer} from './components/navigation/pagination/NavigationPaginationReducers.js';
import {perPageCompositeReducer} from './components/navigation/perPage/NavigationPerPageReducers.js';
import {numericInputReducer} from './components/numericInput/NumericInputReducers.js';
import {optionPickersReducer} from './components/optionPicker/OptionPickerReducers.js';
import {optionsCyclesReducer} from './components/optionsCycle/OptionsCycleReducers.js';
import {popoversReducer} from './components/popover/PopoverReducers.js';
import {radioSelectsReducer} from './components/radio/RadioSelectReducers.js';
import {refreshCallBackReducer} from './components/refresh/RefreshCallbackReducer.js';
import {searchBarsReducer} from './components/searchBar/SearchBarReducers.js';
import {selectWithFilterCompositeReducer} from './components/select/hoc/SelectWithFilterReducers.js';
import {selectCompositeReducer} from './components/select/SelectReducers.js';
import {SliderReducer} from './components/slider/SliderReducers.js';
import {subNavigationsReducer} from './components/subNavigation/SubNavigationReducers.js';
import {tabGroupsReducer} from './components/tab/TabReducers.js';
import {TableHOCReducers} from './components/table-hoc/reducers/TableHOCReducers.js';
import {TableRowReducers} from './components/table-hoc/reducers/TableRowReducers.js';
import {TableWithPaginationReducers} from './components/table-hoc/reducers/TableWithPaginationReducers.js';
import {TableWithSortReducers} from './components/table-hoc/reducers/TableWithSortReducers.js';
import {tableHeaderCellsReducer} from './components/tables/TableHeaderCellReducers.js';
import {tablesReducer} from './components/tables/TableReducers.js';
import {tableRowsReducer} from './components/tables/TableRowReducers.js';
import {textAreasReducer} from './components/textarea/TextAreaReducers.js';
import {toastsContainerReducer} from './components/toast/ToastReducers.js';
import {validationReducer} from './components/validation/ValidationReducer.js';
import {withDirtyReducer} from './hoc/withDirty/withDirtyReducers.js';
import {PlasmaState} from './PlasmaState.js';
import {stringListCompositeReducer} from './reusableState/customList/StringListReducers.js';
import {IReduxAction} from './utils/ReduxUtils.js';

const lastAction = (state: IReduxAction = null, action: IReduxAction) => action;

export const PlasmaReducers: ReducersMapObject<PlasmaState> = {
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
    filepickers: filepickersReducer,
    filters: filterBoxesReducer,
    flatSelect: flatSelectsReducer,
    flippables: flippablesReducer,
    groupableCheckboxes: groupableCheckboxesReducer,
    inputs: inputsReducer,
    itemFilters: itemFiltersReducer,
    codeEditors: codeEditorsReducer,
    jsonEditors: jsonEditorsReducer,
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
    tablesHOC: TableHOCReducers,
    tables: tablesReducer,
    tabs: tabGroupsReducer,
    textAreas: textAreasReducer,
    toastContainers: toastsContainerReducer,
    validation: validationReducer,
};
