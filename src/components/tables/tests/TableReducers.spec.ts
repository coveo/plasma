import { IReduxAction } from '../../../utils/ReduxUtils';
import { ITableActionPayload, addTable, removeTable, setIsInError, modifyState } from '../TableActions';
import {
    tablesInitialState,
    tablesReducer,
    ITablesState,
    ITableState,
} from '../TableReducers';
import { DEFAULT_TABLE_DATA, TableChildComponent } from '../TableConstants';
import { turnOnLoading, turnOffLoading } from '../../loading/LoadingActions';
import { getTableChildComponentId } from '../TableUtils';
import { sortFromHeaderCell } from '../TableHeaderCellActions';

describe('TableReducers', () => {
    const genericAction: IReduxAction<ITableActionPayload> = {
        type: 'DO_SOMETHING',
        payload: {
            id: 'row1'
        }
    };

    it('should return the default state if the action is not defined and the state is undefined', () => {
        const oldState: ITablesState = undefined;
        const newState: ITablesState = tablesReducer(oldState, genericAction);

        expect(newState).toEqual(tablesInitialState);
    });

    it('should return the old state when the action is not defined', () => {
        expect(tablesReducer(tablesInitialState, genericAction)).toBe(tablesInitialState);
    });

    it('should return the old state with a new table in it on add table', () => {
        const tableId = 'super-table';
        expect(tablesInitialState[tableId]).toBeUndefined();
        const newState = tablesReducer(tablesInitialState, addTable(tableId, DEFAULT_TABLE_DATA, []));
        expect(newState[tableId]).toBeDefined();
    });

    it('should remove a table state from the tables state in it on remove table', () => {
        const tableId = 'super-table';
        let newState = tablesReducer(tablesInitialState, addTable(tableId, DEFAULT_TABLE_DATA, []));
        expect(newState[tableId]).toBeDefined();

        newState = tablesReducer(tablesInitialState, removeTable(tableId));
        expect(newState[tableId]).toBeUndefined();
    });

    describe('with a table state in the tables state', () => {
        const tableId = 'super-table';
        let oldState: ITablesState;

        beforeEach(() => {
            oldState = tablesReducer(tablesInitialState, addTable(tableId, DEFAULT_TABLE_DATA, []));
        });

        it('should toggle the inError state of the table with the id in the payload on setIsInError', () => {
            expect(oldState[tableId].isInError).toBe(false);
            let newState = tablesReducer(oldState, setIsInError(tableId, true));
            expect(newState[tableId].isInError).toBe(true);
            newState = tablesReducer(oldState, setIsInError(tableId, false));
            expect(newState[tableId].isInError).toBe(false);
        });

        it('should not toggle the inError state of the table if the id in the payload is not the table id on setIsInError', () => {
            expect(oldState[tableId].isInError).toBe(false);
            let newState = tablesReducer(oldState, setIsInError('other id', true));
            expect(newState[tableId].isInError).toBe(false);
            newState = tablesReducer(oldState, setIsInError('other id', false));
            expect(newState[tableId].isInError).toBe(false);
        });

        it('should toggle the isLoading state of the table with the id in the payload on loading actions', () => {
            expect(oldState[tableId].isLoading).toBe(false);
            let newState = tablesReducer(oldState, turnOnLoading([tableId]));
            expect(newState[tableId].isLoading).toBe(true);
            newState = tablesReducer(oldState, turnOffLoading([tableId]));
            expect(newState[tableId].isLoading).toBe(false);
        });

        it('should not toggle the isLoading state of the table if the id is not in the payload on loading actions', () => {
            expect(oldState[tableId].isLoading).toBe(false);
            let newState = tablesReducer(oldState, turnOnLoading(['other id']));
            expect(newState[tableId].isLoading).toBe(false);
            newState = tablesReducer(oldState, turnOffLoading(['other id']));
            expect(newState[tableId].isLoading).toBe(false);
        });

        it('should store the tableHeaderCellId received from a sort action if it is associated to the table', () => {
            const headerCellId = getTableChildComponentId(tableId, TableChildComponent.TABLE_HEADER_CELL);
            expect(oldState[tableId].tableHeaderCellId).toBeUndefined();
            const newState = tablesReducer(oldState, sortFromHeaderCell(headerCellId, 'someAttributeToSort', tableId));
            expect(newState[tableId].tableHeaderCellId).toBe(headerCellId);
        });

        it('should not store the tableHeaderCellId received from a sort action if it is unassociated to the table', () => {
            const headerCellId = 'unassociated to table';
            expect(oldState[tableId].tableHeaderCellId).toBeUndefined();
            const newState = tablesReducer(oldState, sortFromHeaderCell(headerCellId, 'someAttributeToSort', tableId));
            expect(newState[tableId].tableHeaderCellId).toBeUndefined();
        });

        it('should call and return the result of the function received from the payload on modify state', () => {
            // make a minor change to the state just to test that it works (using isLoading, but could have been anything)
            const tableDataModifier = (state: ITableState) => ({ ...state, isLoading: true });
            const newStateFromModifier = tableDataModifier(oldState[tableId]);

            expect(tablesReducer(oldState, modifyState(tableId, tableDataModifier, true))[tableId])
                .toEqual(newStateFromModifier);
        });

        it('should not call and return the result of the function received from the payload on modify state if the table id is not the same', () => {
            // make a minor change to the state just to test that it works (using isLoading, but could have been anything)
            const tableDataModifier = (state: ITableState) => ({ ...state, isLoading: true });

            expect(tablesReducer(oldState, modifyState('some other id', tableDataModifier, true))[tableId])
                .toEqual(oldState[tableId]);
        });
    });
});
