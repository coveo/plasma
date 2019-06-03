import * as _ from 'underscore';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {ITableWithPaginationBasePayload, TableWithPaginationActions} from '../actions/TableWithPaginationActions';
import {ITableWithPaginationState, TableWithPaginationReducers} from '../reducers/TableWithPaginationReducers';

describe('Table HOC', () => {
    describe('TableWithPaginationReducers', () => {
        const genericAction: IReduxAction<ITableWithPaginationBasePayload> = {
            type: 'DO_SOMETHING',
            payload: {
                id: 'some-table-header',
            },
        };

        it('should return the default state if the action is not defined and the state is undefined', () => {
            const oldState: ITableWithPaginationState[] = undefined;
            const tableHeadersState: ITableWithPaginationState[] = TableWithPaginationReducers(oldState, genericAction);

            expect(tableHeadersState).toEqual([]);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: ITableWithPaginationState[] = [{id: 'a', count: 0}];
            const tableHeadersState: ITableWithPaginationState[] = TableWithPaginationReducers(oldState, genericAction);

            expect(tableHeadersState).toBe(oldState);
        });

        it('should return the old state with one more ITableWithPaginationState when the action is "TableWithPaginationActions.add"', () => {
            const expectedId = 'a';
            const action = TableWithPaginationActions.add(expectedId);

            const oldState: ITableWithPaginationState[] = [];
            const tableHeadersState: ITableWithPaginationState[] = TableWithPaginationReducers(oldState, action);

            expect(tableHeadersState.length).toBe(oldState.length + 1);
            const headerState = _.findWhere(tableHeadersState, {id: action.payload.id});

            expect(headerState).toBeDefined();
            expect(headerState.id).toBe(expectedId);
        });

        it('should return the old state without the ITableWithPaginationState when the action is "TableWithPaginationActions.remove"', () => {
            const oldState: ITableWithPaginationState[] = [
                {
                    id: 'some-table-header-1',
                    count: 0,
                }, {
                    id: 'some-table-header-2',
                    count: 5,
                }, {
                    id: 'some-table-header-3',
                    count: 0,
                },
            ];
            const action = TableWithPaginationActions.remove(oldState[1].id);
            const tableHeadersState: ITableWithPaginationState[] = TableWithPaginationReducers(oldState, action);

            expect(tableHeadersState.length).toBe(oldState.length - 1);
            expect(_.findWhere(tableHeadersState, {id: action.payload.id})).toBeUndefined();
        });

        it('should set the sort on the table header when the action is "TableWithPaginationActions.setCount"', () => {
            const expectedCount = 404;
            const oldState: ITableWithPaginationState[] = [
                {
                    id: 'some-table-header-1',
                    count: 0,
                }, {
                    id: 'some-table-header-2',
                    count: 0,
                },
            ];

            const action = TableWithPaginationActions.setCount(oldState[0].id, expectedCount);
            const tableHeadersState: ITableWithPaginationState[] = TableWithPaginationReducers(oldState, action);

            expect(tableHeadersState.length).toBe(oldState.length);
            expect(_.findWhere(tableHeadersState, {id: oldState[0].id}).count).toBe(expectedCount);
            expect(_.findWhere(tableHeadersState, {id: oldState[1].id}).count).toBe(oldState[1].count);
        });

        it('should not throw when setting the count for an inexisting table', () => {
            const oldState: ITableWithPaginationState[] = [];
            const action = TableWithPaginationActions.setCount('how-can-this-be', 1);
            expect(() => TableWithPaginationReducers(oldState, action)).not.toThrow();
        });
    });
});
