import * as _ from 'underscore';
import {IDatePickerState} from '../../components/datePicker/DatePickerReducers.js';
import {IListBoxState} from '../../components/listBox/ListBoxReducers.js';
import {PaginationUtils} from '../../components/pagination/PaginationUtils.js';
import {
    ITableHOCCompositeState,
    ITableHOCPredicateValue,
    TableHOCUtils,
} from '../../components/table-hoc/utils/TableHOCUtils.js';
import {PlasmaState} from '../../PlasmaState.js';

const createTableHOCCompositeState = <T extends PlasmaState>(
    tableId: string,
    state: ITableHOCCompositeState,
    currentState = {} as T
) => ({
    tableHOCHeader: state.sortKey
        ? [
              {
                  id: state.sortKey,
                  tableId,
                  isAsc: state.sortAscending,
              },
              {...(currentState.tableHOCHeader || {})},
          ]
        : [],
    flatSelect: state.perPage
        ? [
              {
                  id: PaginationUtils.getPaginationPerPageId(tableId),
                  selectedOptionId: state?.perPage?.toString(),
              },
              {...(currentState.flatSelect || {})},
          ]
        : [],
    filters: state.filter
        ? [
              {
                  id: tableId,
                  filterText: state.filter,
              },
              {...(currentState.filters || {})},
          ]
        : [],
    paginationComposite: state.pageNb
        ? [
              {
                  id: TableHOCUtils.getPaginationId(tableId),
                  pageNb: state.pageNb,
              },
              {...(currentState.paginationComposite || {})},
          ]
        : [],
    listBoxes: state.predicates?.length
        ? _.chain(state.predicates)
              .map(
                  (predicate: ITableHOCPredicateValue): IListBoxState => ({
                      id: TableHOCUtils.getPredicateId(tableId, predicate.id),
                      selected: [predicate.value],
                      active: 1,
                  })
              )
              .concat(currentState.listBoxes || [])
              .value()
        : [],
    datePickers: state.dateLimits?.length
        ? [
              {
                  id: TableHOCUtils.getDatePickerId(tableId),
                  appliedLowerLimit: state.dateLimits?.[0] as Date,
                  appliedUpperLimit: state.dateLimits?.[1] as Date,
              } as IDatePickerState,
          ].concat(currentState.datePickers || [])
        : [],
});

const getStateWithType = <T>(state: Partial<T>): T => state as T;

export const ReduxTestUtilities = {
    getStateWithType,
    createTableHOCCompositeState,
};
