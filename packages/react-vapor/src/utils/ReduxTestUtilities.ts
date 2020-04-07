import * as _ from 'underscore';
import {IDatePickerState} from '../components/datePicker/DatePickerReducers';
import {IListBoxState} from '../components/listBox/ListBoxReducers';
import {PaginationUtils} from '../components/pagination/PaginationUtils';
import {
    ITableHOCCompositeState,
    ITableHOCPredicateValue,
    TableHOCUtils,
} from '../components/table-hoc/utils/TableHOCUtils';
import {IReactVaporState} from '../ReactVapor';

const createTableHOCCompositeState = <T extends IReactVaporState>(
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
              ...(currentState.tableHOCHeader || {}),
          ]
        : [],
    flatSelect: state.perPage
        ? [
              {
                  id: PaginationUtils.getPaginationPerPageId(tableId),
                  selectedOptionId: state?.perPage?.toString(),
              },
              ...(currentState.flatSelect || {}),
          ]
        : [],
    filters: state.filter
        ? [
              {
                  id: tableId,
                  filterText: state.filter,
              },
              ...(currentState.filters || {}),
          ]
        : [],
    paginationComposite: state.pageNb
        ? [
              {
                  id: TableHOCUtils.getPaginationId(tableId),
                  pageNb: state.pageNb,
              },
              ...(currentState.paginationComposite || {}),
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
