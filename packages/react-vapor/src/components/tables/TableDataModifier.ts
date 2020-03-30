import moment from 'moment';
import * as _ from 'underscore';
import {contains} from 'underscore.string';
import {convertUndefinedAndNullToEmptyString} from '../../utils/FalsyValuesUtils';
import {IDispatch} from '../../utils/ReduxUtils';
import {addActionsToActionBar} from '../actions/ActionBarActions';
import {changeLastUpdated} from '../lastUpdated/LastUpdatedActions';
import {turnOffLoading, turnOnLoading} from '../loading/LoadingActions';
import {ITableHeadingAttribute, ITableOwnProps, ITableRowData} from './Table';
import {ITableStateModifier, modifyState} from './TableActions';
import {
    DEFAULT_TABLE_PER_PAGE,
    TableChildComponent,
    TableSortingOrder,
    TABLE_PREDICATE_DEFAULT_VALUE,
} from './TableConstants';
import {ITableCompositeState, ITableState} from './TableReducers';
import {unselectAllRows} from './TableRowActions';
import {getTableChildComponentId, getTableLoadingIds} from './TableUtils';

export const dispatchPreTableStateModification = (tableId: string, dispatch: IDispatch) => {
    dispatch(unselectAllRows(tableId));
    dispatch(addActionsToActionBar(getTableChildComponentId(tableId, TableChildComponent.ACTION_BAR), []));
    dispatch(turnOnLoading(getTableLoadingIds(tableId)));
};

export const dispatchPostTableStateModification = (tableId: string, dispatch: IDispatch) => {
    dispatch(turnOffLoading(getTableLoadingIds(tableId)));
    dispatch(changeLastUpdated(getTableChildComponentId(tableId, TableChildComponent.LAST_UPDATED)));
};

export const applyPredicatesOnDisplayedIds = (
    nextDisplayedIds: string[],
    tableDataById: ITableRowData,
    tableCompositeState: ITableCompositeState
): string[] => {
    if (!_.isEmpty(tableCompositeState.predicates)) {
        _.pairs(tableCompositeState.predicates).forEach((keyValuePair: string[]) => {
            const attributeName = keyValuePair[0];
            const attributeValue = keyValuePair[1];

            if (attributeValue !== TABLE_PREDICATE_DEFAULT_VALUE) {
                nextDisplayedIds = nextDisplayedIds.filter(
                    (dataId: string) => tableDataById[dataId][attributeName] === attributeValue
                );
            }
        });
    }

    return nextDisplayedIds;
};

export const applyFilterOnDisplayedIds = (
    nextDisplayedIds: string[],
    tableDataById: ITableRowData,
    tableCompositeState: ITableCompositeState,
    tableOwnProps: ITableOwnProps
): string[] => {
    if (tableCompositeState.filter) {
        const filterDefault = (dataId: string): boolean => {
            return tableOwnProps.headingAttributes.some((headingAttribute: ITableHeadingAttribute) => {
                const {attributeName, attributeFormatter, filterFormatter} = headingAttribute;
                const attributeValue = tableDataById[dataId][attributeName];
                let attributeValueToUse = filterFormatter
                    ? filterFormatter(attributeValue, tableDataById[dataId])
                    : attributeValue;
                attributeValueToUse =
                    !filterFormatter && attributeFormatter
                        ? attributeFormatter(attributeValue, attributeName, tableDataById[dataId])
                        : attributeValueToUse;
                return contains(
                    convertUndefinedAndNullToEmptyString(attributeValueToUse)
                        .toString()
                        .toLowerCase(),
                    tableCompositeState.filter.toLowerCase()
                );
            });
        };

        const filterMethod = tableOwnProps.filterMethod
            ? (dataId: string): boolean =>
                  tableOwnProps.filterMethod(tableDataById[dataId], tableOwnProps, tableCompositeState.filter)
            : filterDefault;

        nextDisplayedIds = nextDisplayedIds.filter(filterMethod);
    }

    return nextDisplayedIds;
};

export const applyDatePickerOnDisplayedIds = (
    nextDisplayedIds: string[],
    tableDataById: ITableRowData,
    tableCompositeState: ITableCompositeState,
    tableOwnProps: ITableOwnProps
): string[] => {
    const {from, to} = tableCompositeState;
    const {datePicker} = tableOwnProps;
    if (from && to && datePicker && datePicker.attributeName) {
        nextDisplayedIds = nextDisplayedIds.filter((dataId: string): boolean =>
            moment(tableDataById[dataId][datePicker.attributeName]).isBetween(from, to)
        );
    }

    return nextDisplayedIds;
};

export const applySortOnDisplayedIds = (
    nextDisplayedIds: string[],
    tableDataById: ITableRowData,
    tableCompositeState: ITableCompositeState,
    tableOwnProps: ITableOwnProps
): string[] => {
    const {sortState} = tableCompositeState;
    if (sortState && sortState.order !== TableSortingOrder.UNSORTED && !_.isUndefined(sortState.attribute)) {
        const headingAttributeToSort = _.findWhere(tableOwnProps.headingAttributes, {
            attributeName: sortState.attribute,
        });
        const hasCustomSortByMethod = headingAttributeToSort && headingAttributeToSort.sortByMethod;
        const hasCustomSortMethod = headingAttributeToSort && headingAttributeToSort.sortMethod;

        if (hasCustomSortMethod) {
            nextDisplayedIds = _.pluck(
                headingAttributeToSort.sortMethod(
                    _.map(nextDisplayedIds, (displayedId: string) => tableDataById[displayedId]),
                    sortState.attribute,
                    sortState.order === TableSortingOrder.ASCENDING
                ),
                'id'
            );
        } else if (hasCustomSortByMethod) {
            nextDisplayedIds = _.sortBy(nextDisplayedIds, (displayedId: string): string => {
                const cleanAttributeValue = convertUndefinedAndNullToEmptyString(
                    tableDataById[displayedId][sortState.attribute]
                );
                return headingAttributeToSort.sortByMethod(cleanAttributeValue, tableDataById[displayedId]);
            });
        } else {
            const defaultSortByMethod = (displayedId: string) => {
                const cleanAttributeValue = convertUndefinedAndNullToEmptyString(
                    tableDataById[displayedId][sortState.attribute]
                );
                return cleanAttributeValue.toString().toLowerCase();
            };

            nextDisplayedIds = _.sortBy(nextDisplayedIds, defaultSortByMethod);
        }

        if (!hasCustomSortMethod && sortState.order === TableSortingOrder.DESCENDING) {
            nextDisplayedIds.reverse();
        }
    }

    return nextDisplayedIds;
};

export const applyPaginationOnDisplayedIds = (
    nextDisplayedIds: string[],
    tableCompositeState: ITableCompositeState
): string[] => {
    const startingIndex = (tableCompositeState.page || 0) * (tableCompositeState.perPage || DEFAULT_TABLE_PER_PAGE);
    const endingIndex = startingIndex + (tableCompositeState.perPage || DEFAULT_TABLE_PER_PAGE);
    nextDisplayedIds = nextDisplayedIds.slice(startingIndex, endingIndex);
    return nextDisplayedIds;
};

export const defaultTableStateModifier = (
    tableOwnProps: ITableOwnProps,
    tableCompositeState: ITableCompositeState
): ITableStateModifier => {
    return (tableState: ITableState): ITableState => {
        const tableDataById = (tableCompositeState.data && tableCompositeState.data.byId) || {};
        let nextDisplayedIds = [...((tableCompositeState.data && tableCompositeState.data.allIds) || [])];

        nextDisplayedIds = applyPredicatesOnDisplayedIds(nextDisplayedIds, tableDataById, tableCompositeState);
        nextDisplayedIds = applyFilterOnDisplayedIds(
            nextDisplayedIds,
            tableDataById,
            tableCompositeState,
            tableOwnProps
        );
        nextDisplayedIds = applyDatePickerOnDisplayedIds(
            nextDisplayedIds,
            tableDataById,
            tableCompositeState,
            tableOwnProps
        );

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
    tableCompositeState: ITableCompositeState
) => {
    return (dispatch: IDispatch) => {
        const tableStateModifier = defaultTableStateModifier(tableOwnProps, tableCompositeState);
        dispatch(modifyState(tableOwnProps.id, tableStateModifier, shouldResetPage));
        dispatch(turnOffLoading(getTableLoadingIds(tableOwnProps.id)));
    };
};

export const TableDataModifier = {
    dispatchPreTableStateModification,
    dispatchPostTableStateModification,
    applyPredicatesOnDisplayedIds,
    applyFilterOnDisplayedIds,
    applyDatePickerOnDisplayedIds,
    defaultTableStateModifier,
    defaultTableStateModifierThunk,
};
