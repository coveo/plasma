import { ITableState, DEFAULT_TABLE_DATA } from './TableReducers';
import { convertUndefinedAndNullToEmptyString } from '../../utils/FalsyValuesUtils';
import { TABLE_PREDICATE_DEFAULT_VALUE, TableSortingOrder, TableChildComponent } from './TableConstants';
import * as _ from 'underscore';
import { ITableOwnProps, ITableHeadingAttribute } from './Table';
import { turnOnLoading, turnOffLoading } from '../loading/LoadingActions';
import { getLoadingIds, getChildComponentId } from './TableUtils';
import { changeLastUpdated } from '../lastUpdated/LastUpdatedActions';
import { setIsInError, modifyState } from './TableActions';
import { addActionsToActionBar } from '../actions/ActionBarActions';
import { selectRow } from './TableRowActions';
import * as $ from 'jquery';
import { IReactVaporState } from '../../ReactVapor';

export const TableDataModifyerMethods = {
  commonDispatchPreStateModification: (tableOwnProps: ITableOwnProps, dispatch: any) => {
    dispatch(selectRow(undefined));
    dispatch(
      addActionsToActionBar(
        getChildComponentId(tableOwnProps.id, TableChildComponent.ACTION_BAR),
        [],
      ),
    );
    dispatch(turnOnLoading(getLoadingIds(tableOwnProps.id), tableOwnProps.id));
  },
  commonDispatchPostStateModification: (tableOwnProps: ITableOwnProps, dispatch: any) => {
    dispatch(turnOffLoading(getLoadingIds(tableOwnProps.id), tableOwnProps.id));
    dispatch(changeLastUpdated(getChildComponentId(tableOwnProps.id, TableChildComponent.LAST_UPDATED)));
  },
  default(tableOwnProps: ITableOwnProps): ((tableState: ITableState) => ITableState) {
    return (tableState: ITableState) => {
      const tableDataById = tableState.data.byId;

      let totalPages: number;
      let totalEntries: number;
      let nextDisplayedIds = [...tableState.data.allIds];

      // predicates default logic
      if (!_.isEmpty(tableState.predicates)) {
        _.pairs(tableState.predicates).forEach((keyValuePair: string[]) => {
          const attributeName = keyValuePair[0];
          const attributeValue = keyValuePair[1];

          if (attributeValue !== TABLE_PREDICATE_DEFAULT_VALUE) {
            nextDisplayedIds = nextDisplayedIds.filter((dataId: string) =>
              tableDataById[dataId][attributeName] === attributeValue);
          }
        });
      }

      // filter default logic
      if (tableState.filter) {
        nextDisplayedIds = nextDisplayedIds.filter((dataId: string) => {
          let shouldKeep = false;

          tableOwnProps.headingAttributes.forEach((headingAttribute: ITableHeadingAttribute) => {
            const { attributeName, attributeFormatter } = headingAttribute;
            shouldKeep =
              shouldKeep
              || attributeFormatter(tableDataById[dataId][attributeName])
                .toString()
                .toLowerCase()
                .indexOf(tableState.filter.toLowerCase()) > -1;
          });

          return shouldKeep;
        });
      }

      totalEntries = nextDisplayedIds.length;
      totalPages = Math.ceil(totalEntries / tableState.perPage);

      // pagination logic
      const startingIndex = tableState.page * tableState.perPage;
      const endingIndex = startingIndex + tableState.perPage;
      nextDisplayedIds = nextDisplayedIds.slice(startingIndex, endingIndex);

      // sort default logic
      const { sortState } = tableState;
      if (sortState && sortState.order !== TableSortingOrder.UNSORTED) {
        nextDisplayedIds = _.sortBy(
          nextDisplayedIds,
          (displayedId: string) => {
            const cleanAttributeValue = convertUndefinedAndNullToEmptyString(tableDataById[displayedId][sortState.attribute]);
            return cleanAttributeValue.toString().toLowerCase();
          },
        );

        if (sortState.order === TableSortingOrder.DESCENDING) {
          nextDisplayedIds.reverse();
        }
      }

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
  },
  thunkDefault(tableOwnProps: ITableOwnProps) {
    return (dispatch: any) => {
      TableDataModifyerMethods.commonDispatchPreStateModification(tableOwnProps, dispatch);
      dispatch(modifyState(tableOwnProps.id, TableDataModifyerMethods.default(tableOwnProps)));
      TableDataModifyerMethods.commonDispatchPostStateModification(tableOwnProps, dispatch);
    };
  },
  server(tableState: ITableState): ITableState {
    // todo
    return undefined;
  },
  thunkServer(tableOwnProps: ITableOwnProps) {
    return (dispatch: any, getState: () => IReactVaporState) => {
      TableDataModifyerMethods.commonDispatchPreStateModification(tableOwnProps, dispatch);
      $.get(tableOwnProps.serverMode.url(tableOwnProps, getState().tables[tableOwnProps.id]))
        .done(data => {
          dispatch(
            modifyState(
              tableOwnProps.id,
              (tableState: ITableState) => ({ ...tableState, data: tableOwnProps.serverMode.rawDataToTableData(data) }),
            )
          );
        })
        .fail(error => {
          dispatch(setIsInError(tableOwnProps.id, true));
          dispatch(modifyState(
            tableOwnProps.id,
            (tableState: ITableState) => ({ ...tableState, data: DEFAULT_TABLE_DATA }),
          ));
        })
        .always(() => {
          TableDataModifyerMethods.commonDispatchPostStateModification(tableOwnProps, dispatch);
        });
    };
  },
};
