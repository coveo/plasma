import * as _ from 'underscore';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {changePage} from '../../navigation/pagination/NavigationPaginationActions';
import {changePerPage} from '../../navigation/perPage/NavigationPerPageActions';
import {ITableRowAddPayload, TableRowActions} from '../actions/TableRowActions';
import {ITableRowState, TableRowReducers} from '../reducers/TableRowReducers';

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
            const oldState: ITableRowState[] = undefined;
            const tableHeadersState: ITableRowState[] = TableRowReducers(oldState, genericAction);

            expect(tableHeadersState).toEqual([]);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: ITableRowState[] = [{id: 'a', tableId: 'b', selected: false}];
            const tableHeadersState: ITableRowState[] = TableRowReducers(oldState, genericAction);

            expect(tableHeadersState).toBe(oldState);
        });

        it('should return the old state with one more ITableRowState when the action is "TableRowActions.addTableRow"', () => {
            const expectedId = 'a';
            const expectedTableId = 'b';
            const expectedSelected = false;
            const action = TableRowActions.addTableRow(expectedId, expectedTableId);

            const oldState: ITableRowState[] = [];
            const tableHeadersState: ITableRowState[] = TableRowReducers(oldState, action);

            expect(tableHeadersState.length).toBe(oldState.length + 1);
            const headerState = _.findWhere(tableHeadersState, {id: action.payload.id});

            expect(headerState).toBeDefined();
            expect(headerState.id).toBe(expectedId);
            expect(headerState.tableId).toBe(expectedTableId);
            expect(headerState.selected).toBe(expectedSelected);
        });

        it('should return the old state without the ITableRowState when the action is "TableRowActions.removeTableRow"', () => {
            const oldState: ITableRowState[] = [
                {
                    id: 'some-table-header-1',
                    tableId: 'not-important',
                    selected: false,
                }, {
                    id: 'some-table-header-2',
                    tableId: 'not-important',
                    selected: true,
                }, {
                    id: 'some-table-header-3',
                    tableId: 'not-important',
                    selected: true,
                },
            ];
            const action = TableRowActions.removeTableRow(oldState[1].id);
            const tableHeadersState: ITableRowState[] = TableRowReducers(oldState, action);

            expect(tableHeadersState.length).toBe(oldState.length - 1);
            expect(_.findWhere(tableHeadersState, {id: action.payload.id})).toBeUndefined();
        });

        it('should set the selected on the table row when the action is "TableRowActions.selectRow"', () => {
            const oldState: ITableRowState[] = [
                {
                    id: 'some-table-header-1',
                    tableId: 'not-important',
                    selected: false,
                }, {
                    id: 'some-table-header-2',
                    tableId: 'not-important',
                    selected: true,
                },
            ];

            const action = TableRowActions.selectRow(oldState[0].id, false);
            const tableHeadersState: ITableRowState[] = TableRowReducers(oldState, action);

            expect(tableHeadersState.length).toBe(oldState.length);
            expect(_.findWhere(tableHeadersState, {id: oldState[0].id}).selected).toBe(true);
            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).selected).toBe(false);
        });

        it('should not deselect other rows of the same table row when the action is "TableRowActions.selectRow" and multi is true', () => {
            const oldState: ITableRowState[] = [
                {
                    id: 'some-table-header-1',
                    tableId: 'not-important',
                    selected: false,
                }, {
                    id: 'some-table-header-2',
                    tableId: 'not-important',
                    selected: true,
                },
            ];

            const action = TableRowActions.selectRow(oldState[0].id, true);
            const tableHeadersState: ITableRowState[] = TableRowReducers(oldState, action);

            expect(tableHeadersState.length).toBe(oldState.length);
            expect(_.findWhere(tableHeadersState, {id: oldState[0].id}).selected).toBe(true);
            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).selected).toBe(true);
        });

        it('should not modify the selected for the other tables when the action is "TableRowActions.selectRow"', () => {
            const oldState: ITableRowState[] = [
                {
                    id: 'some-table-header',
                    tableId: 'current-table',
                    selected: false,
                }, {
                    id: 'other-table-header',
                    tableId: 'other-table',
                    selected: true,
                },
            ];

            const action = TableRowActions.selectRow(oldState[0].id);
            const tableHeadersState: ITableRowState[] = TableRowReducers(oldState, action);
            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).selected).toBe(oldState[1].selected);
        });

        it('should not throw on select if the table row does not exists', () => {
            const oldState: ITableRowState[] = [];
            const action = TableRowActions.selectRow('To be or not to be');

            expect(() => TableRowReducers(oldState, action)).not.toThrow();
        });

        it('should deselect rows when the page changes', () => {
            const oldState: ITableRowState[] = [
                {
                    id: 'some-table-header',
                    tableId: 'current-table',
                    selected: true,
                }, {
                    id: 'other-table-header',
                    tableId: 'other-table',
                    selected: true,
                },
            ];
            const action = changePage(oldState[0].tableId, 2);
            const tableHeadersState: ITableRowState[] = TableRowReducers(oldState, action);
            expect(_.findWhere(tableHeadersState, {id: oldState[0].id}).selected).toBe(false);
            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).selected).toBe(oldState[1].selected);
        });

        it('should deselect rows when the perPage changes', () => {
            const oldState: ITableRowState[] = [
                {
                    id: 'some-table-header',
                    tableId: 'current-table',
                    selected: true,
                }, {
                    id: 'other-table-header',
                    tableId: 'other-table',
                    selected: true,
                },
            ];
            const action = changePerPage(oldState[0].tableId, 2);
            const tableHeadersState: ITableRowState[] = TableRowReducers(oldState, action);
            expect(_.findWhere(tableHeadersState, {id: oldState[0].id}).selected).toBe(false);
            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).selected).toBe(oldState[1].selected);
        });
    });
});
