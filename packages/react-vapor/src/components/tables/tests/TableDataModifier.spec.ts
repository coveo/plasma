import moment from 'moment';
import * as _ from 'underscore';
import * as s from 'underscore.string';

import {addActionsToActionBar} from '../../actions/ActionBarActions';
import {changeLastUpdated} from '../../lastUpdated/LastUpdatedActions';
import {turnOffLoading, turnOnLoading} from '../../loading/LoadingActions';
import {IData, ITableProps} from '../Table';
import {TableActions} from '../TableActions';
import {TableChildComponent, TableSortingOrder} from '../TableConstants';
import {
    applyDatePickerOnDisplayedIds,
    applyFilterOnDisplayedIds,
    applyPaginationOnDisplayedIds,
    applyPredicatesOnDisplayedIds,
    applySortOnDisplayedIds,
    defaultTableStateModifier,
    defaultTableStateModifierThunk,
    dispatchPostTableStateModification,
    dispatchPreTableStateModification,
} from '../TableDataModifier';
import {unselectAllRows} from '../TableRowActions';
import {getTableChildComponentId, getTableLoadingIds} from '../TableUtils';
import {predictableData, SELECTION_BOXES, tableOwnPropsMock, tablePropsMockWithData} from './TableTestCommon';

describe('TableDataModifier', () => {
    describe('dispatchPreTableStateModification', () => {
        it('should dispatch three actions to unselectAllRows, remove actions, and turn on loading', () => {
            const dispatchSpy = jasmine.createSpy('dispatchSpy') as any;

            const actions = [
                unselectAllRows(tableOwnPropsMock.id),
                addActionsToActionBar(
                    getTableChildComponentId(tableOwnPropsMock.id, TableChildComponent.ACTION_BAR),
                    []
                ),
                turnOnLoading(getTableLoadingIds(tableOwnPropsMock.id)),
            ];

            dispatchPreTableStateModification(tableOwnPropsMock.id, dispatchSpy);

            actions.forEach((action) => {
                expect(dispatchSpy).toHaveBeenCalledWith(action);
            });
            expect(dispatchSpy.calls.count()).toBe(actions.length);
        });
    });

    describe('dispatchPostTableStateModification', () => {
        it('should dispatch two actions to turnOffLoading and update the last updated component', () => {
            const dispatchSpy = jasmine.createSpy('dispatchSpy') as any;

            const actions = [
                turnOffLoading(getTableLoadingIds(tableOwnPropsMock.id)),
                changeLastUpdated(getTableChildComponentId(tableOwnPropsMock.id, TableChildComponent.LAST_UPDATED)),
            ];

            dispatchPostTableStateModification(tableOwnPropsMock.id, dispatchSpy);

            actions.forEach((action) => {
                expect(dispatchSpy).toHaveBeenCalledWith(action);
            });
            expect(dispatchSpy.calls.count()).toBe(actions.length);
        });
    });

    describe('applyPredicatesOnDisplayedIds', () => {
        const {tableCompositeState} = tablePropsMockWithData;
        const {data} = tableCompositeState;
        const {displayedIds} = data;

        it('should return the same ids if the tableCompositeState has no predicates', () => {
            expect(applyPredicatesOnDisplayedIds([...displayedIds], tableCompositeState, data.byId)).toEqual(
                displayedIds
            );
        });

        it('should return the same ids if the tableCompositeState has no predicates', () => {
            expect(applyPredicatesOnDisplayedIds([...displayedIds], data.byId, tableCompositeState)).toEqual(
                displayedIds
            );
        });

        it('should keep only ids with the specified value of the specified attribute', () => {
            expect(
                applyPredicatesOnDisplayedIds([...displayedIds], data.byId, {
                    ...tableCompositeState,
                    predicates: {userName: predictableData.userName},
                })
            ).toEqual([predictableData.id]);

            expect(
                applyPredicatesOnDisplayedIds([...displayedIds], data.byId, {
                    ...tableCompositeState,
                    predicates: {email: predictableData.email},
                })
            ).toEqual([predictableData.id]);

            expect(
                applyPredicatesOnDisplayedIds([...displayedIds], data.byId, {
                    ...tableCompositeState,
                    predicates: {email: predictableData.email, userName: predictableData.userName},
                })
            ).toEqual([predictableData.id]);
        });
    });

    describe('applyFilterOnDisplayedIds', () => {
        const {tableCompositeState} = tablePropsMockWithData;
        const {data} = tableCompositeState;
        const {displayedIds} = data;

        it('should return the same ids if the tableCompositeState has no filter', () => {
            expect(
                applyFilterOnDisplayedIds([...displayedIds], tableCompositeState, data.byId, tablePropsMockWithData)
            ).toEqual(displayedIds);
        });

        it('should only return the ids containing the filter content if not empty', () => {
            expect(
                applyFilterOnDisplayedIds(
                    [...displayedIds],
                    data.byId,
                    {...tableCompositeState, filter: predictableData.password},
                    tablePropsMockWithData
                )
            ).toEqual([predictableData.id]);

            expect(
                applyFilterOnDisplayedIds(
                    [...displayedIds],
                    data.byId,
                    {...tableCompositeState, filter: 'no rows has this content in their heading attribute'},
                    tablePropsMockWithData
                )
            ).toEqual([]);
        });

        it('should not throw with a custom filter method on own props', () => {
            expect(
                applyFilterOnDisplayedIds(
                    [...displayedIds],
                    data.byId,
                    {...tableCompositeState, filter: predictableData.password},
                    {...tablePropsMockWithData, filterMethod: Boolean}
                )
            ).toEqual(displayedIds);
        });
    });

    describe('applySortOnDisplayedIds', () => {
        const {tableCompositeState} = tablePropsMockWithData;
        const {data} = tableCompositeState;
        const {displayedIds} = data;

        it('should return the same ids if the tableCompositeState has no sortState', () => {
            expect(
                applySortOnDisplayedIds(
                    [...displayedIds],
                    data.byId,
                    {...tableCompositeState, sortState: undefined},
                    tablePropsMockWithData
                )
            ).toEqual(displayedIds);
        });

        it('should return the same ids if the tableCompositeState has a sortState but is unsorted', () => {
            expect(
                applySortOnDisplayedIds(
                    [...displayedIds],
                    data.byId,
                    {...tableCompositeState, sortState: {order: TableSortingOrder.UNSORTED, attribute: 'userName'}},
                    tablePropsMockWithData
                )
            ).toEqual(displayedIds);
        });

        it('should return the same ids if the tableCompositeState has a sortState, could be sorted, but with no specified attribute', () => {
            expect(
                applySortOnDisplayedIds(
                    [...displayedIds],
                    data.byId,
                    {...tableCompositeState, sortState: {order: TableSortingOrder.ASCENDING, attribute: undefined}},
                    tablePropsMockWithData
                )
            ).toEqual(displayedIds);
        });

        it('should return the same ids but sorted ascending by the specified attribute if sorted ASCENDING', () => {
            const expectedOrderOfIds = _.sortBy(_.values(data.byId), (currentData) =>
                currentData.userName.toLowerCase()
            ).map((currentData) => currentData.id);
            expect(
                applySortOnDisplayedIds(
                    [...displayedIds],
                    data.byId,
                    {...tableCompositeState, sortState: {order: TableSortingOrder.ASCENDING, attribute: 'userName'}},
                    tablePropsMockWithData
                )
            ).toEqual(expectedOrderOfIds);
        });

        it('should return the same ids but sorted descending by the specified attribute if sorted DESCENDING', () => {
            const expectedOrderOfIds = _.sortBy(_.values(data.byId), (currentData) =>
                currentData.userName.toLowerCase()
            )
                .reverse()
                .map((currentData) => currentData.id);
            expect(
                applySortOnDisplayedIds(
                    [...displayedIds],
                    data.byId,
                    {...tableCompositeState, sortState: {order: TableSortingOrder.DESCENDING, attribute: 'userName'}},
                    tablePropsMockWithData
                )
            ).toEqual(expectedOrderOfIds);
        });

        describe('with custom sortByMethod', () => {
            let tablePropsWithSortBy: ITableProps;

            beforeEach(() => {
                tablePropsWithSortBy = {
                    ...tablePropsMockWithData,
                    headingAttributes: [
                        {
                            attributeName: 'userName',
                            titleFormatter: _.identity,
                            attributeFormatter: _.identity,
                            sortByMethod: (attributeValue: string) => s.reverse(attributeValue).toLowerCase(),
                        },
                    ],
                };
            });

            it('should return the same ids but sorted ascending with the custom sortByMethod by the specified attribute if sorted ASCENDING', () => {
                const expectedOrderOfIds = _.chain(data.byId)
                    .values()
                    .sortBy((currentData) => s.reverse(currentData.userName).toLowerCase())
                    .map((currentData) => currentData.id)
                    .value();

                const resultIds = applySortOnDisplayedIds(
                    [...displayedIds],
                    data.byId,
                    {...tableCompositeState, sortState: {order: TableSortingOrder.ASCENDING, attribute: 'userName'}},
                    tablePropsWithSortBy
                );

                expect(resultIds).toEqual(expectedOrderOfIds);
            });

            it('should return the same ids but sorted descending with the custom sortByMethod by the specified attribute if sorted DESCENDING', () => {
                const expectedOrderOfIds = _.chain(data.byId)
                    .values()
                    .sortBy((currentData) => s.reverse(currentData.userName).toLowerCase())
                    .map((currentData) => currentData.id)
                    .reverse()
                    .value();

                const resultIds = applySortOnDisplayedIds(
                    [...displayedIds],
                    data.byId,
                    {...tableCompositeState, sortState: {order: TableSortingOrder.DESCENDING, attribute: 'userName'}},
                    tablePropsWithSortBy
                );

                expect(resultIds).toEqual(expectedOrderOfIds);
            });
        });

        describe('with custom sortMethod', () => {
            let tableProps: ITableProps;
            const testColumnAttribute = 'userName';

            const cumtomSortFunction = (items: IData[], attribute: string, ascending: boolean): IData[] => {
                expect(attribute).toBe(testColumnAttribute);
                expect(ascending).toBe(true);
                return _.sortBy(items, attribute);
            };

            beforeEach(() => {
                tableProps = {
                    ...tablePropsMockWithData,
                    headingAttributes: [
                        {
                            attributeName: testColumnAttribute,
                            titleFormatter: _.identity,
                            attributeFormatter: _.identity,
                            sortMethod: cumtomSortFunction,
                        },
                    ],
                };
            });

            it('should return the same ids but sorted by the specified custom sortMethod function', () => {
                const expectedOrderOfIds = _.sortBy(_.values(data.byId), testColumnAttribute).map(
                    (currentData) => currentData.id
                );

                expect(
                    applySortOnDisplayedIds(
                        [...displayedIds],
                        data.byId,
                        {
                            ...tableCompositeState,
                            sortState: {order: TableSortingOrder.ASCENDING, attribute: testColumnAttribute},
                        },
                        tableProps
                    )
                ).toEqual(expectedOrderOfIds);
            });
        });
    });

    describe('applyPaginationOnDisplayedIds', () => {
        const {tableCompositeState} = tablePropsMockWithData;
        const {data} = tableCompositeState;
        const {displayedIds} = data;

        it('should return the same ids if the tableCompositeState has no perPage and page', () => {
            expect(applyPaginationOnDisplayedIds([...displayedIds], tableCompositeState)).toEqual(displayedIds);
        });

        it('should skip the first 5 ids if perPage is 5 and page is 1', () => {
            expect(
                applyPaginationOnDisplayedIds([...displayedIds], {...tableCompositeState, perPage: 5, page: 1})
            ).toEqual(displayedIds.slice(5 * 1, 5 * 1 + 5));
        });

        it('should keep the first 5 only if perPage is 5 and page is 0', () => {
            expect(
                applyPaginationOnDisplayedIds([...displayedIds], {...tableCompositeState, perPage: 5, page: 0})
            ).toEqual(displayedIds.slice(5 * 0, 5 * 0 + 5));
        });
    });

    describe('applyDatePickerOnDisplayedIds', () => {
        const {tableCompositeState} = tablePropsMockWithData;
        const {data} = tableCompositeState;
        const {displayedIds} = data;

        it('should return the same ids if the tableCompositeState has no from/to', () => {
            expect(
                applyDatePickerOnDisplayedIds([...displayedIds], tableCompositeState, data.byId, tablePropsMockWithData)
            ).toEqual(displayedIds);
        });

        it('should only return the ids containing the dates inside the from/to if datepicker is defined', () => {
            const from = moment()
                .add(1, 'day')
                .toDate();
            const to = moment()
                .add(3, 'day')
                .toDate();

            expect(
                applyDatePickerOnDisplayedIds(
                    [...displayedIds],
                    data.byId,
                    {...tableCompositeState, from, to},
                    {
                        ...tablePropsMockWithData,
                        datePicker: {datesSelectionBoxes: SELECTION_BOXES, attributeName: 'lastLogin'},
                    }
                )
            ).toEqual([predictableData.id]);
        });
    });

    describe('defaultTableStateModifier', () => {
        const {tableCompositeState} = tablePropsMockWithData;

        it('should not throw', () => {
            expect(() => defaultTableStateModifier(tablePropsMockWithData, tableCompositeState)).not.toThrow();
        });

        it('should not throw on calling the returned function', () => {
            expect(() =>
                defaultTableStateModifier(tablePropsMockWithData, tableCompositeState)(tableCompositeState)
            ).not.toThrow();
        });

        it('should return the proper data in the tableState', () => {
            const expectedData = {
                byId: {
                    ...tableCompositeState.data.byId,
                },
                allIds: [...tableCompositeState.data.allIds],
                displayedIds: [predictableData.id],
                totalEntries: 1,
                totalPages: 1,
            };

            const receivedState = defaultTableStateModifier(tablePropsMockWithData, {
                ...tableCompositeState,
                filter: predictableData.password,
            })(tableCompositeState);

            expect(receivedState.data).toEqual(expectedData);
        });
    });

    describe('defaultTableStateModifierThunk', () => {
        const {tableCompositeState} = tablePropsMockWithData;

        it('should not throw', () => {
            expect(() =>
                defaultTableStateModifierThunk(tablePropsMockWithData, true, tableCompositeState)
            ).not.toThrow();
        });

        it('should dispatch an action of type MODIFY_STATE_TABLE and turn off loading', () => {
            const dispatchSpy = jasmine.createSpy('dispatchSpy');
            defaultTableStateModifierThunk(tablePropsMockWithData, true, tableCompositeState)(dispatchSpy);
            expect(dispatchSpy).toHaveBeenCalledWith(jasmine.objectContaining({type: TableActions.modifyState}));
            expect(dispatchSpy).toHaveBeenCalledWith(turnOffLoading(getTableLoadingIds(tablePropsMockWithData.id)));
            expect(dispatchSpy.calls.count()).toBe(2);
        });
    });
});
