import * as _ from 'underscore';

import {IReduxAction} from '../../../utils/ReduxUtils';
import {changePage} from '../../navigation/pagination/NavigationPaginationActions';
import {changePerPage} from '../../navigation/perPage/NavigationPerPageActions';
import {ITableRowAddPayload, TableHOCRowActions} from '../actions/TableHOCRowActions';
import {HOCTableRowState, TableRowReducers} from '../reducers/TableRowReducers';

describe('Table HOC', () => {
    describe('TableRowReducers', () => {
        const genericAction: IReduxAction<ITableRowAddPayload> = {
            type: 'DO_SOMETHING',
            payload: {
                id: 'some-table-row',
                tableId: 'hello',
            },
        };

        it('should return the default state if the action is not defined and the state is undefined', () => {
            const oldState: HOCTableRowState[] = undefined;
            const tableHeadersState: HOCTableRowState[] = TableRowReducers(oldState, genericAction);

            expect(tableHeadersState).toEqual([]);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: HOCTableRowState[] = [{id: 'a', tableId: 'b', selected: false}];
            const tableHeadersState: HOCTableRowState[] = TableRowReducers(oldState, genericAction);

            expect(tableHeadersState).toBe(oldState);
        });

        it('should return the state with all actions deselect ', () => {
            const oldState: HOCTableRowState[] = [
                {id: 'a', tableId: 'b', selected: true},
                {id: 'ab', tableId: 'b', selected: true},
            ];
            const action = TableHOCRowActions.deselectAll('b');

            const tableHeadersState: HOCTableRowState[] = TableRowReducers(oldState, action);

            const newState = _.map(oldState, (item: any) => ({...item, selected: false}));
            expect(tableHeadersState).toEqual(newState);
        });

        it('should return the old state with one more ITableRowState when the action is "TableHOCRowActions.addTableRow"', () => {
            const expectedId = 'a';
            const expectedTableId = 'b';
            const expectedSelected = false;
            const action = TableHOCRowActions.add(expectedId, expectedTableId);

            const oldState: HOCTableRowState[] = [];
            const tableHeadersState: HOCTableRowState[] = TableRowReducers(oldState, action);

            expect(tableHeadersState.length).toBe(oldState.length + 1);
            const headerState = _.findWhere(tableHeadersState, {id: action.payload.id});

            expect(headerState).toBeDefined();
            expect(headerState.id).toBe(expectedId);
            expect(headerState.tableId).toBe(expectedTableId);
            expect(headerState.selected).toBe(expectedSelected);
        });

        it('should remove all rows that match the action payload id when no tableId is specified', () => {
            const oldState: HOCTableRowState[] = [
                {
                    id: '🥑',
                    tableId: 'fruits',
                    selected: true,
                },
                {
                    id: '🥑',
                    tableId: 'organic',
                    selected: false,
                },
                {
                    id: '🥦',
                    tableId: 'organic',
                    selected: false,
                },
            ];
            const action = TableHOCRowActions.remove('🥑');
            const tableRowsState: HOCTableRowState[] = TableRowReducers(oldState, action);

            expect(tableRowsState.length).toBe(1);
            expect(_.findWhere(tableRowsState, {id: '🥑', tableId: 'fruits'})).toBeUndefined();
            expect(_.findWhere(tableRowsState, {id: '🥑', tableId: 'organic'})).toBeUndefined();
        });

        it('should remove a table row from the state only if the rowId and the tableId match the action payload', () => {
            const oldState: HOCTableRowState[] = [
                {
                    id: '🥑',
                    tableId: 'fruits',
                    selected: true,
                },
                {
                    id: '🥑',
                    tableId: 'organic',
                    selected: false,
                },
                {
                    id: '🥦',
                    tableId: 'organic',
                    selected: false,
                },
            ];
            const action = TableHOCRowActions.remove('🥑', 'fruits');
            const tableRowsState: HOCTableRowState[] = TableRowReducers(oldState, action);

            expect(tableRowsState.length).toBe(2);
            expect(_.findWhere(tableRowsState, {id: '🥑', tableId: 'fruits'})).toBeUndefined();
            expect(_.findWhere(tableRowsState, {id: '🥑', tableId: 'organic'})).toBeDefined();
        });

        it('should set the selected on the table row when the action is "TableHOCRowActions.selectRow"', () => {
            const oldState: HOCTableRowState[] = [
                {
                    id: 'some-table-header-1',
                    tableId: 'not-important',
                    selected: false,
                },
                {
                    id: 'some-table-header-2',
                    tableId: 'not-important',
                    selected: true,
                },
            ];

            const action = TableHOCRowActions.select(oldState[0].id, false);
            const tableHeadersState: HOCTableRowState[] = TableRowReducers(oldState, action);

            expect(tableHeadersState.length).toBe(oldState.length);
            expect(_.findWhere(tableHeadersState, {id: oldState[0].id}).selected).toBe(true);
            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).selected).toBe(false);
        });

        it('should set opened on the table row when the action is "TableHOCRowActions.toggleCollapsible"', () => {
            const oldState: HOCTableRowState[] = [
                {
                    id: 'some-table-header-1',
                    tableId: 'not-important',
                    selected: false,
                },
                {
                    id: 'some-table-header-2',
                    tableId: 'not-important',
                    selected: true,
                },
            ];

            const action = TableHOCRowActions.toggleCollapsible(oldState[0].id, true);
            const tableHeadersState: HOCTableRowState[] = TableRowReducers(oldState, action);

            expect(tableHeadersState.length).toBe(oldState.length);
            expect(_.findWhere(tableHeadersState, {id: oldState[0].id}).opened).toBe(true);
            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).opened).toBe(undefined);
        });

        it('should toggle opened the row when the action is "TableHOCRowActions.toggleCollapsible" and no opened payload is specified', () => {
            const oldState: HOCTableRowState[] = [
                {
                    id: 'some-table-header-1',
                    tableId: 'not-important',
                    selected: false,
                },
                {
                    id: 'some-table-header-2',
                    tableId: 'not-important',
                    selected: true,
                },
            ];

            const action = TableHOCRowActions.toggleCollapsible(oldState[0].id);
            const tableHeadersState: HOCTableRowState[] = TableRowReducers(oldState, action);

            expect(tableHeadersState.length).toBe(oldState.length);
            expect(_.findWhere(tableHeadersState, {id: oldState[0].id}).opened).toBe(true);
            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).opened).toBe(undefined);
        });

        it('should not collapse other rows of the same table row when the action is "TableHOCRowActions.toggleCollapsible"', () => {
            const oldState: HOCTableRowState[] = [
                {
                    id: 'some-table-header-1',
                    tableId: 'not-important',
                    selected: false,
                    opened: true,
                },
                {
                    id: 'some-table-header-2',
                    tableId: 'not-important',
                    selected: true,
                    opened: false,
                },
            ];

            const action = TableHOCRowActions.toggleCollapsible(oldState[1].id);
            const tableHeadersState: HOCTableRowState[] = TableRowReducers(oldState, action);

            expect(tableHeadersState.length).toBe(oldState.length);
            expect(_.findWhere(tableHeadersState, {id: oldState[0].id}).opened).toBe(true);
            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).opened).toBe(true);
        });

        it('should not deselect other rows of the same table row when the action is "TableHOCRowActions.selectRow" and multi is true', () => {
            const oldState: HOCTableRowState[] = [
                {
                    id: 'some-table-header-1',
                    tableId: 'not-important',
                    selected: false,
                },
                {
                    id: 'some-table-header-2',
                    tableId: 'not-important',
                    selected: true,
                },
            ];

            const action = TableHOCRowActions.select(oldState[0].id, true);
            const tableHeadersState: HOCTableRowState[] = TableRowReducers(oldState, action);

            expect(tableHeadersState.length).toBe(oldState.length);
            expect(_.findWhere(tableHeadersState, {id: oldState[0].id}).selected).toBe(true);
            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).selected).toBe(true);
        });

        it('should not collapse other rows of the same table row when the action is "TableHOCRowActions.toggleCollapsibel"', () => {
            const oldState: HOCTableRowState[] = [
                {
                    id: 'some-table-header-1',
                    tableId: 'current-table',
                    selected: false,
                    opened: false,
                },
                {
                    id: 'some-table-header-2',
                    tableId: 'other-table',
                    selected: true,
                    opened: true,
                },
            ];

            const action = TableHOCRowActions.toggleCollapsible(oldState[0].id);
            const tableHeadersState: HOCTableRowState[] = TableRowReducers(oldState, action);

            expect(tableHeadersState.length).toBe(oldState.length);
            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).opened).toBe(true);
        });

        it('should not modify the selected for the other tables when the action is "TableHOCRowActions.selectRow"', () => {
            const oldState: HOCTableRowState[] = [
                {
                    id: 'some-table-header',
                    tableId: 'current-table',
                    selected: false,
                },
                {
                    id: 'other-table-header',
                    tableId: 'other-table',
                    selected: true,
                },
            ];

            const action = TableHOCRowActions.select(oldState[0].id);
            const tableHeadersState: HOCTableRowState[] = TableRowReducers(oldState, action);
            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).selected).toBe(oldState[1].selected);
        });

        it('should not throw on toggleCollapsible if the table row does not exists', () => {
            const oldState: HOCTableRowState[] = [];
            const action = TableHOCRowActions.toggleCollapsible('To toggle or not to toggle');

            expect(() => TableRowReducers(oldState, action)).not.toThrow();
        });

        it('should not throw on select if the table row does not exists', () => {
            const oldState: HOCTableRowState[] = [];
            const action = TableHOCRowActions.select('To be or not to be');

            expect(() => TableRowReducers(oldState, action)).not.toThrow();
        });

        it('should deselect rows when the page changes', () => {
            const oldState: HOCTableRowState[] = [
                {
                    id: 'some-table-header',
                    tableId: 'current-table',
                    selected: true,
                },
                {
                    id: 'other-table-header',
                    tableId: 'other-table',
                    selected: true,
                },
            ];
            const action = changePage(oldState[0].tableId, 2);
            const tableHeadersState: HOCTableRowState[] = TableRowReducers(oldState, action);
            expect(_.findWhere(tableHeadersState, {id: oldState[0].id}).selected).toBe(false);
            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).selected).toBe(oldState[1].selected);
        });

        it('should deselect rows when the perPage changes', () => {
            const oldState: HOCTableRowState[] = [
                {
                    id: 'some-table-header',
                    tableId: 'current-table',
                    selected: true,
                },
                {
                    id: 'other-table-header',
                    tableId: 'other-table',
                    selected: true,
                },
            ];
            const action = changePerPage(oldState[0].tableId, 2);
            const tableHeadersState: HOCTableRowState[] = TableRowReducers(oldState, action);
            expect(_.findWhere(tableHeadersState, {id: oldState[0].id}).selected).toBe(false);
            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).selected).toBe(oldState[1].selected);
        });
    });
});
