import { ITableState, ITableCompositeState } from './TableReducers';
import { convertUndefinedAndNullToEmptyString } from '../../utils/FalsyValuesUtils';
import { TABLE_PREDICATE_DEFAULT_VALUE, TableSortingOrder, TableChildComponent, DEFAULT_TABLE_PER_PAGE } from './TableConstants';
import * as _ from 'underscore';
import { contains } from 'underscore.string';
import { ITableOwnProps, ITableHeadingAttribute, ITableRowData } from './Table';
import { turnOnLoading, turnOffLoading } from '../loading/LoadingActions';
import { getTableLoadingIds, getTableChildComponentId } from './TableUtils';
import { changeLastUpdated } from '../lastUpdated/LastUpdatedActions';
import { modifyState, ITableStateModifier } from './TableActions';
import { addActionsToActionBar } from '../actions/ActionBarActions';
import { unselectAllRows } from './TableRowActions';
import { IDispatch } from '../../utils/ReduxUtils';

export const dispatchPreTableStateModification = (tableOwnProps: ITableOwnProps, dispatch: IDispatch) => {
  dispatch(unselectAllRows(tableOwnProps.id));
  dispatch(
    addActionsToActionBar(
      getTableChildComponentId(tableOwnProps.id, TableChildComponent.ACTION_BAR),
      [],
    ),
  );
  dispatch(turnOnLoading(getTableLoadingIds(tableOwnProps.id)));
};

export const dispatchPostTableStateModification = (tableOwnProps: ITableOwnProps, dispatch: IDispatch) => {
  dispatch(turnOffLoading(getTableLoadingIds(tableOwnProps.id)));
  dispatch(changeLastUpdated(getTableChildComponentId(tableOwnProps.id, TableChildComponent.LAST_UPDATED)));
};

export const applyPredicatesOnDisplayedIds = (
  nextDisplayedIds: string[],
  tableDataById: ITableRowData,
  tableCompositeState: ITableCompositeState,
): string[] => {
  if (!_.isEmpty(tableCompositeState.predicates)) {
    _.pairs(tableCompositeState.predicates).forEach((keyValuePair: string[]) => {
      const attributeName = keyValuePair[0];
      const attributeValue = keyValuePair[1];

      if (attributeValue !== TABLE_PREDICATE_DEFAULT_VALUE) {
        nextDisplayedIds = nextDisplayedIds.filter((dataId: string) =>
          tableDataById[dataId][attributeName] === attributeValue);
      }
    });
  }

  return nextDisplayedIds;
};

export const applyFilterOnDisplayedIds = (
  nextDisplayedIds: string[],
  tableDataById: ITableRowData,
  tableCompositeState: ITableCompositeState,
  tableOwnProps: ITableOwnProps,
): string[] => {
  if (tableCompositeState.filter) {
    const filterDefault = (dataId: string): boolean => {
      return tableOwnProps.headingAttributes.some((headingAttribute: ITableHeadingAttribute) => {
        const { attributeName, attributeFormatter, filterFormatter } = headingAttribute;
        const attributeValue = tableDataById[dataId][attributeName];
        let attributeValueToUse = filterFormatter
          ? filterFormatter(attributeValue)
          : attributeValue;
        attributeValueToUse = !filterFormatter && attributeFormatter
          ? attributeFormatter(attributeValue)
          : attributeValueToUse;
        return contains(attributeValueToUse.toString().toLowerCase(), tableCompositeState.filter.toLowerCase());
      });
    };

    const filterMethod = tableOwnProps.filterMethod
      ? (dataId: string): boolean => tableOwnProps.filterMethod(tableDataById[dataId], tableOwnProps)
      : filterDefault;

    nextDisplayedIds = nextDisplayedIds.filter(filterMethod);
  }

  return nextDisplayedIds;
};

export const applySortOnDisplayedIds = (
  nextDisplayedIds: string[],
  tableDataById: ITableRowData,
  tableCompositeState: ITableCompositeState,
  tableOwnProps: ITableOwnProps,
): string[] => {
  const { sortState } = tableCompositeState;
  if (sortState && sortState.order !== TableSortingOrder.UNSORTED && !_.isUndefined(sortState.attribute)) {
    const defaultSortBy = (displayedId: string) => {
      const cleanAttributeValue = convertUndefinedAndNullToEmptyString(tableDataById[displayedId][sortState.attribute]);
      return cleanAttributeValue.toString().toLowerCase();
    };
    const headingAttributeToSort = _.findWhere(tableOwnProps.headingAttributes, { attributeName: sortState.attribute });
    const sortByMethod = headingAttributeToSort && headingAttributeToSort.sortByMethod || defaultSortBy;

    nextDisplayedIds = _.sortBy(nextDisplayedIds, sortByMethod);

    if (sortState.order === TableSortingOrder.DESCENDING) {
      nextDisplayedIds.reverse();
    }
  }

  return nextDisplayedIds;
};

export const applyPaginationOnDisplayedIds = (
  nextDisplayedIds: string[],
  tableCompositeState: ITableCompositeState,
): string[] => {
  const startingIndex = (tableCompositeState.page || 0) * (tableCompositeState.perPage || DEFAULT_TABLE_PER_PAGE);
  const endingIndex = startingIndex + (tableCompositeState.perPage || DEFAULT_TABLE_PER_PAGE);
  nextDisplayedIds = nextDisplayedIds.slice(startingIndex, endingIndex);
  return nextDisplayedIds;
};

export const defaultTableStateModifier = (
  tableOwnProps: ITableOwnProps,
  tableCompositeState: ITableCompositeState,
): ITableStateModifier => {
  return (tableState: ITableState): ITableState => {
    const tableDataById = tableCompositeState.data && tableCompositeState.data.byId || {};
    let nextDisplayedIds = [...(tableCompositeState.data && tableCompositeState.data.allIds || [])];

    nextDisplayedIds = applyPredicatesOnDisplayedIds(nextDisplayedIds, tableDataById, tableCompositeState);
    nextDisplayedIds = applyFilterOnDisplayedIds(nextDisplayedIds, tableDataById, tableCompositeState, tableOwnProps);

    const totalEntries = nextDisplayedIds.length;
    const totalPages = Math.ceil(totalEntries / (tableCompositeState.perPage || DEFAULT_TABLE_PER_PAGE));

    nextDisplayedIds = applySortOnDisplayedIds(nextDisplayedIds, tableDataById, tableCompositeState, tableOwnProps);
    nextDisplayedIds = applyPaginationOnDisplayedIds(nextDisplayedIds, tableCompositeState);

    return {
      ...tableState,
      data: {
        ...tableState.data,
        displayedIds: nextDisplayedIds,
        totalEntries,
        totalPages,
      },
    };
  };
};

export const defaultTableStateModifierThunk = (
  tableOwnProps: ITableOwnProps,
  shouldResetPage: boolean,
  tableCompositeState: ITableCompositeState,
) => {
  return (dispatch: IDispatch) => {
    const tableStateModifier = defaultTableStateModifier(tableOwnProps, tableCompositeState);
    dispatch(modifyState(tableOwnProps.id, tableStateModifier, shouldResetPage));
    dispatch(turnOffLoading(getTableLoadingIds(tableOwnProps.id)));
  };
};
