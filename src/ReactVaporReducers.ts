import {ReducersMapObject} from 'redux';
import {membersReducers} from '../docs/members-example/reducers/MembersReducers';
import {actionBarsReducer} from './components/actions/ActionBarReducers';
import {itemFiltersReducer} from './components/actions/filters/ItemFilterReducers';
import {autocompletesReducer} from './components/autocomplete/AutocompleteReducers';
import {checkboxesReducer} from './components/checkbox/CheckboxReducers';
import {groupableCheckboxesReducer} from './components/checkbox/GroupableCheckboxReducers';
import {collapsiblesReducer} from './components/collapsible/CollapsibleReducers';
import {datePickersReducer} from './components/datePicker/DatePickerReducers';
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
import {searchBarsReducer} from './components/searchBar/SearchBarReducers';
import {selectCompositeReducer} from './components/select/SelectReducers';
import {selectWithFilterCompositeReducer} from './components/select/SelectWithFilterReducers';
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
import {withEditingReducer} from './hoc/withEditing/withEditingReducers';
import {IReactVaporState} from './ReactVapor';
import {stringListCompositeReducer} from './reusableState/customList/StringListReducers';
import {IReduxAction} from './utils/ReduxUtils';

const lastAction = (state: IReactVaporState = null, action: IReduxAction): IReduxAction => {
    return action;
};

export const ReactVaporReducers: ReducersMapObject = {
    autocompletes: autocompletesReducer,
    tables: tablesReducer,
    tableHOCHeader: TableWithSortReducers,
    tableHOCPagination: TableWithPaginationReducers,
    tableHOCRow: TableRowReducers,
    membersCompositeState: membersReducers,
    lastUpdatedComposite: lastUpdatedCompositeReducer,
    filters: filterBoxesReducer,
    facets: facetsReducer,
    perPageComposite: perPageCompositeReducer,
    paginationComposite: paginationCompositeReducer,
    loadings: loadingsReducer,
    listBoxes: listBoxesReducer,
    selects: selectCompositeReducer,
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
    numericInputs: numericInputReducer,
    openModals: openModalsReducer,
    subNavigations: subNavigationsReducer,
    tabs: tabGroupsReducer,
    toastContainers: toastsContainerReducer,
    tableHeaderCells: tableHeaderCellsReducer,
    checkboxes: checkboxesReducer,
    collapsibles: collapsiblesReducer,
    inputs: inputsReducer,
    searchBars: searchBarsReducer,
    flippables: flippablesReducer,
    groupableCheckboxes: groupableCheckboxesReducer,
    textAreas: textAreasReducer,
    menus: menuCompositeReducer,
    radioSelects: radioSelectsReducer,
    popovers: popoversReducer,
    selectWithFilter: selectWithFilterCompositeReducer,
    dirtyComponents: withEditingReducer,
    multilineIds: stringListCompositeReducer,
    lastAction,
};
