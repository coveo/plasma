import _ from 'underscore';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {TableHOCActions, TableHOCSetEmptyStatePayload} from '../actions/TableHOCActions';
import {HOCTableState, TableHOCReducers} from '../reducers/TableHOCReducers';

describe('TableHOCReducers', () => {
    const fakeAction: IReduxAction<TableHOCSetEmptyStatePayload> = {
        type: 'FAKE',
        payload: {
            id: 'fake-table',
            emptyStateSet: false,
        },
    };

    it('should return the default state if the action is not defined', () => {
        const oldState: HOCTableState[] = undefined;
        const tablesHOCState: HOCTableState[] = TableHOCReducers(oldState, fakeAction);

        expect(tablesHOCState).toEqual([]);
    });

    it('should return the old state when the action is not defined', () => {
        const oldState: HOCTableState[] = [{id: 'a-table', emptyStateSet: true}];
        const tablesHOCState: HOCTableState = TableHOCReducers(oldState, fakeAction);

        expect(tablesHOCState).toBe(oldState);
    });

    it('should set an empty state to a table when the action is TableHOCActions.setEmptyState', () => {
        const oldState: HOCTableState[] = undefined;
        const action = TableHOCActions.setEmptyState('a-table', true);
        const tablesHOCState: HOCTableState[] = TableHOCReducers(oldState, action);

        expect(tablesHOCState.length).toBe(1);
        expect(_.findWhere(tablesHOCState, {id: 'a-table'}).emptyStateSet).toBe(true);
    });
});
