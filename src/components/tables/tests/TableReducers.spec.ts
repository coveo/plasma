import {IReduxAction} from '../../../utils/ReduxUtils';
import {turnOffLoading, turnOnLoading} from '../../loading/LoadingActions';
import {
    addTable,
    addTableDataEntry,
    deleteTableDataEntry,
    ITableActionPayload,
    modifyState,
    removeTable,
    setIsInError,
    TableActions,
    updateTableDataEntry,
} from '../TableActions';
import {DEFAULT_TABLE_DATA, TableChildComponent} from '../TableConstants';
import {sortFromHeaderCell} from '../TableHeaderCellActions';
import {
    ITablesState,
    ITableState,
    tableReducer,
    tablesInitialState,
    tablesReducer,
} from '../TableReducers';
import {getTableChildComponentId} from '../TableUtils';
import {IData} from './../Table';

describe('TableReducers', () => {
    const tableId = 'super-table';

    const getEmptyOldState = () => ({
        id: 'table1',
        data: {},
    });

    const genericAction: IReduxAction<ITableActionPayload> = {
        type: 'DO_SOMETHING',
        payload: {
            id: 'row1',
        },
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
        expect(tablesInitialState[tableId]).toBeUndefined();
        const newState = tablesReducer(tablesInitialState, addTable(tableId, DEFAULT_TABLE_DATA, []));
        expect(newState[tableId]).toBeDefined();
    });

    it('should remove a table state from the tables state in it on remove table', () => {
        let newState = tablesReducer(tablesInitialState, addTable(tableId, DEFAULT_TABLE_DATA, []));
        expect(newState[tableId]).toBeDefined();

        newState = tablesReducer(tablesInitialState, removeTable(tableId));
        expect(newState[tableId]).toBeUndefined();
    });

    describe('with a table state in the tables state', () => {
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
            const tableDataModifier = (state: ITableState) => ({...state, isLoading: true});
            const newStateFromModifier = tableDataModifier(oldState[tableId]);

            expect(tablesReducer(oldState, modifyState(tableId, tableDataModifier, true))[tableId])
                .toEqual(newStateFromModifier);
        });

        it('should not call and return the result of the function received from the payload on modify state if the table id is not the same', () => {
            // make a minor change to the state just to test that it works (using isLoading, but could have been anything)
            const tableDataModifier = (state: ITableState) => ({...state, isLoading: true});

            expect(tablesReducer(oldState, modifyState('some other id', tableDataModifier, true))[tableId])
                .toEqual(oldState[tableId]);
        });
    });

    describe('ModifyState action', () => {

        const getModifyStateAction = () => ({
            type: TableActions.modifyState,
            payload: {
                id: 'row1',
                tableStateModifier: (state: ITableState) => state,
            },
        });

        const getOldState = (selectedIds = ['id1', 'id2']) => ({
            id: 'table1',
            data: {
                selectedIds,
                displayedIds: ['id2', 'id3'],
            },
        });

        it('should not throw if the selectedIds array is not defined', () => {
            expect(() => {
                const oldState = getOldState([]);
                tableReducer(oldState as ITableState, getModifyStateAction());
            }).not.toThrow();
        });

        it('should remove selected ids from the list if the displayedIds do not contain the id', () => {
            const oldState = getOldState();
            const newState: ITableState = tableReducer(oldState as ITableState, getModifyStateAction());

            expect(newState.data.selectedIds.length).toBe(1);
            expect(newState.data.selectedIds[0]).toBe('id2');
        });

        it('should return a selectedIds empty if the displayedIds is empty and the selectedIds undefined', () => {
            const oldState = getEmptyOldState();
            const newState: ITableState = tableReducer(oldState as ITableState, getModifyStateAction());

            expect(newState.data.selectedIds.length).toBe(0);
        });
    });

    describe('UpdateSelectedIds action', () => {
        const getUpdateSelectedIdsAction = (hasMultipleSelectedRow: boolean = false) => ({
            type: TableActions.updateSelectedIds,
            payload: {
                id: 'table1',
                selectedIds: ['id3', 'id4'],
                hasMultipleSelectedRow,
            },
        });

        const getOldState = (selectedIds = ['id1', 'id2']) => ({
            id: 'table1',
            data: {
                selectedIds,
                displayedIds: ['id2', 'id3'],
            },
        });

        it('should return only the first selected ids if hasMultipleSelectedRow is false', () => {
            const oldState = getOldState();
            const newState: ITableState = tableReducer(oldState as ITableState, getUpdateSelectedIdsAction());

            expect(newState.data.selectedIds.length).toBe(1);
            expect(newState.data.selectedIds[0]).toBe('id3');
        });

        it('should combine all selected ids if hasMultipleSelectedRow is true', () => {
            const oldState = getOldState();
            const newState: ITableState = tableReducer(oldState as ITableState, getUpdateSelectedIdsAction(true));

            expect(newState.data.selectedIds.length).toBe(4);
        });

        it('should not add a duplicate id if hasMultipleSelectedRow is true', () => {
            const oldState = getOldState(['id1', 'id3']);
            const newState: ITableState = tableReducer(oldState as ITableState, getUpdateSelectedIdsAction(true));

            expect(newState.data.selectedIds.length).toBe(3);
        });
    });

    describe('single table data entry actions', () => {
        const getOldState = () => ({
            id: 'table1',
            data: {
                selectedIds: ['id2', 'id3'],
                displayedIds: ['id2', 'id3'],
                allIds: ['id2', 'id3'],
                byId: {
                    id2: {id: 'id2'},
                    id3: {id: 'id3'},
                },
            },
        });

        let oldState: any;
        beforeEach(() => {
            oldState = getOldState();
        });

        describe('deleteTableDataEntry', () => {
            it('should remove the specified data if present in the table', () => {
                const newState = tableReducer(oldState, deleteTableDataEntry(oldState.id, 'id2'));

                expect(newState.data.byId['id2']).toBeUndefined();
                expect(newState.data.allIds.length).toBe(1);
                expect(newState.data.allIds[0]).toBe('id3');
                expect(newState.data.displayedIds.length).toBe(1);
                expect(newState.data.displayedIds[0]).toBe('id3');
            });

            it('should keep the old state if the id specified is not in the table', () => {
                const newState = tableReducer(oldState, deleteTableDataEntry(oldState.id, 'idontexistid'));

                expect(newState).toEqual(oldState);
            });
        });

        describe('addTableDataEntry', () => {
            it('should add the specified data in the table', () => {
                const newData: IData = {id: 'newDataId'};
                const newState = tableReducer(oldState, addTableDataEntry(oldState.id, newData));

                expect(newState.data.byId[newData.id]).toEqual(newData);
                expect(newState.data.allIds).toContain(newData.id);
                expect(newState.data.displayedIds).toContain(newData.id);
            });
        });

        describe('updateTableDataEntry', () => {
            it('should update the specified data in the table', () => {
                const existingDataUpdated: IData = {id: 'id2', someNewProp: 'hello there!'};
                const newState = tableReducer(oldState, updateTableDataEntry(oldState.id, existingDataUpdated));

                expect(newState.data.byId[existingDataUpdated.id]).toEqual(existingDataUpdated);
                expect(newState.data.allIds.length).toBe(oldState.data.allIds.length);
                expect(newState.data.displayedIds.length).toBe(oldState.data.displayedIds.length);
            });

            it('should do nothing if the data is not already in the table', () => {
                const nonExistingDataUpdated: IData = {id: 'nonexistingid', someNewProp: 'hello there!'};
                const newState = tableReducer(oldState, updateTableDataEntry(oldState.id, nonExistingDataUpdated));

                expect(newState.data.byId[nonExistingDataUpdated.id]).toBeUndefined();
                expect(newState).toEqual(oldState);
            });
        });
    });
});
