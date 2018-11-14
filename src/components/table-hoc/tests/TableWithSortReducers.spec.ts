import * as _ from 'underscore';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {ITableHeaderBasePayload, TableHeaderActions} from '../actions/TableHeaderActions';
import {ITableWithSortState, TableWithSortReducers} from '../reducers/TableWithSortReducers';

describe('Table HOC', () => {
    describe('TableWithSortReducers', () => {
        const genericAction: IReduxAction<ITableHeaderBasePayload> = {
            type: 'DO_SOMETHING',
            payload: {
                id: 'some-table-header',
            },
        };

        it('should return the default state if the action is not defined and the state is undefined', () => {
            const oldState: ITableWithSortState[] = undefined;
            const tableHeadersState: ITableWithSortState[] = TableWithSortReducers(oldState, genericAction);

            expect(tableHeadersState).toEqual([]);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: ITableWithSortState[] = [{id: 'a', tableId: 'b', isAsc: undefined}];
            const tableHeadersState: ITableWithSortState[] = TableWithSortReducers(oldState, genericAction);

            expect(tableHeadersState).toBe(oldState);
        });

        it('should return the old state with one more ITableWithSortState when the action is "TableHeaderActions.addTableHeader"', () => {
            const expectedId = 'a';
            const expectedTableId = 'b';
            const expectedIsAsc = true;
            const action = TableHeaderActions.addTableHeader(expectedId, expectedTableId, true);

            const oldState: ITableWithSortState[] = [];
            const tableHeadersState: ITableWithSortState[] = TableWithSortReducers(oldState, action);

            expect(tableHeadersState.length).toBe(oldState.length + 1);
            const headerState = _.findWhere(tableHeadersState, {id: action.payload.id});

            expect(headerState).toBeDefined();
            expect(headerState.id).toBe(expectedId);
            expect(headerState.tableId).toBe(expectedTableId);
            expect(headerState.isAsc).toBe(expectedIsAsc);
        });

        it('should not set the isAsc if the isDefault is set to false when the action is "TableHeaderActions.addTableHeader"', () => {
            const expectedIsAsc: boolean = undefined;
            const action = TableHeaderActions.addTableHeader('a', 'b', false);

            const oldState: ITableWithSortState[] = [];
            const tableHeadersState: ITableWithSortState[] = TableWithSortReducers(oldState, action);

            const headerState = _.findWhere(tableHeadersState, {id: action.payload.id});

            expect(headerState).toBeDefined();
            expect(headerState.isAsc).toBe(expectedIsAsc);
        });

        it('should return the old state without the ITableWithSortState when the action is "TableHeaderActions.removeTableHeader"', () => {
            const oldState: ITableWithSortState[] = [
                {
                    id: 'some-table-header-1',
                    tableId: 'not-important',
                    isAsc: undefined,
                }, {
                    id: 'some-table-header-2',
                    tableId: 'not-important',
                    isAsc: undefined,
                }, {
                    id: 'some-table-header-3',
                    tableId: 'not-important',
                    isAsc: undefined,
                },
            ];
            const action = TableHeaderActions.removeTableHeader(oldState[1].id);
            const tableHeadersState: ITableWithSortState[] = TableWithSortReducers(oldState, action);

            expect(tableHeadersState.length).toBe(oldState.length - 1);
            expect(_.findWhere(tableHeadersState, {id: action.payload.id})).toBeUndefined();
        });

        it('should set the sort on the table header when the action is "TableHeaderActions.sortTable"', () => {
            const oldState: ITableWithSortState[] = [
                {
                    id: 'some-table-header-1',
                    tableId: 'not-important',
                    isAsc: undefined,
                }, {
                    id: 'some-table-header-2',
                    tableId: 'not-important',
                    isAsc: true,
                },
            ];

            const action = TableHeaderActions.sortTable(oldState[0].id);
            const tableHeadersState: ITableWithSortState[] = TableWithSortReducers(oldState, action);

            expect(tableHeadersState.length).toBe(oldState.length);
            expect(_.findWhere(tableHeadersState, {id: oldState[0].id}).isAsc).toBe(true);
            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).isAsc).toBe(undefined);
        });

        it('should not modify the isAsc for the other tables when the action is "TableHeaderActions.sortTable"', () => {
            const oldState: ITableWithSortState[] = [
                {
                    id: 'some-table-header',
                    tableId: 'current-table',
                    isAsc: undefined,
                }, {
                    id: 'other-table-header',
                    tableId: 'other-table',
                    isAsc: true,
                },
            ];

            const action = TableHeaderActions.sortTable(oldState[0].id);
            const tableHeadersState: ITableWithSortState[] = TableWithSortReducers(oldState, action);
            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).isAsc).toBe(oldState[1].isAsc);
        });

        it('should not throw on sort if the table header does not exists', () => {
            const oldState: ITableWithSortState[] = [];
            const action = TableHeaderActions.sortTable('To be or not to be');

            expect(() => TableWithSortReducers(oldState, action)).not.toThrow();
        });
    });
});
