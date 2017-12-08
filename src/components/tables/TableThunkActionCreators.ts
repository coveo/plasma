import { ITableState, ITableCompositeState } from './TableReducers';
import { convertUndefinedAndNullToEmptyString } from '../../utils/FalsyValuesUtils';
import { TABLE_PREDICATE_DEFAULT_VALUE, TableSortingOrder, TableChildComponent } from './TableConstants';
import * as _ from 'underscore';
import { contains } from 'underscore.string';
import { ITableOwnProps, ITableHeadingAttribute } from './Table';
import { turnOnLoading, turnOffLoading } from '../loading/LoadingActions';
import { getTableLoadingIds, getTableChildComponentId } from './TableUtils';
import { changeLastUpdated } from '../lastUpdated/LastUpdatedActions';
import { modifyState } from './TableActions';
import { addActionsToActionBar } from '../actions/ActionBarActions';
import { unselectAllRows } from './TableRowActions';

export const dispatchPreTableStateModification = (tableOwnProps: ITableOwnProps, dispatch: any) => {
  dispatch(unselectAllRows(tableOwnProps.id));
  dispatch(
    addActionsToActionBar(
      getTableChildComponentId(tableOwnProps.id, TableChildComponent.ACTION_BAR),
      [],
    ),
  );
  dispatch(turnOnLoading(getTableLoadingIds(tableOwnProps.id), tableOwnProps.id));
};

export const dispatchPostTableStateModification = (tableOwnProps: ITableOwnProps, dispatch: any) => {
  dispatch(turnOffLoading(getTableLoadingIds(tableOwnProps.id)));
  dispatch(changeLastUpdated(getTableChildComponentId(tableOwnProps.id, TableChildComponent.LAST_UPDATED)));
};

export const defaultTableStateModifier = (
  tableOwnProps: ITableOwnProps,
  shouldResetPage: boolean,
  tableCompositeState: ITableCompositeState,
): ((tableState: ITableState) => ITableState) => {
  return (tableState: ITableState): ITableState => {
    const tableDataById = tableCompositeState.data && tableCompositeState.data.byId || {};

    let totalPages: number;
    let totalEntries: number;
    let nextDisplayedIds = tableCompositeState.data ? [...tableCompositeState.data.allIds] : [];

    // predicates default logic
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

    // filter default logic
    if (tableCompositeState.filter) {
      const filterDefault = (dataId: string): boolean => {
        return tableOwnProps.headingAttributes.some((headingAttribute: ITableHeadingAttribute) => {
          const { attributeName, attributeFormatter } = headingAttribute;
          const attributeValue = tableDataById[dataId][attributeName];
          const attributeValueToUse = attributeFormatter ? attributeFormatter(attributeValue) : attributeValue;
          return contains(attributeValueToUse.toString().toLowerCase(), tableCompositeState.filter.toLowerCase());
        });
      };

      const filterMethod = tableOwnProps.filterMethod
        ? (dataId: string): boolean => tableOwnProps.filterMethod(tableDataById[dataId], tableOwnProps)
        : filterDefault;

      nextDisplayedIds = nextDisplayedIds.filter(filterMethod);
    }

    totalEntries = nextDisplayedIds.length;
    totalPages = Math.ceil(totalEntries / tableCompositeState.perPage);

    // sort default logic
    const { sortState } = tableCompositeState;
    if (sortState && sortState.order !== TableSortingOrder.UNSORTED) {
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

    // pagination logic
    const startingIndex = tableCompositeState.page * tableCompositeState.perPage;
    const endingIndex = startingIndex + tableCompositeState.perPage;
    nextDisplayedIds = nextDisplayedIds.slice(startingIndex, endingIndex);

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

export const defaultTableStateModifierThunk = (tableOwnProps: ITableOwnProps, shouldResetPage: boolean, tableCompositeState: ITableCompositeState) => {
  return (dispatch: any) => {
    const tableStateModifier = defaultTableStateModifier(tableOwnProps, shouldResetPage, tableCompositeState);
    dispatch(modifyState(tableOwnProps.id, tableStateModifier, shouldResetPage));
    dispatchPostTableStateModification(tableOwnProps, dispatch);
  };
};
