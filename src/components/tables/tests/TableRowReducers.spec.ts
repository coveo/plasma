import {IReduxAction} from '../../../utils/ReduxUtils';
import {ITableRowActionPayload, setRowOpened, TableRowActions, unselectAllRows} from '../TableRowActions';
import {
    ITableRowState,
    tableRowInitialState,
    tableRowReducer,
    tableRowsInitialState,
    tableRowsReducer,
} from '../TableRowReducers';

describe('Tables', () => {

    describe('TableRowReducers', () => {
        const doesNotMatter = false;
        const genericAction: IReduxAction<ITableRowActionPayload> = {
            type: 'DO_SOMETHING',
            payload: {
                id: 'row1',
            },
        };

        it('should return the default state if the action is not defined and the state is undefined', () => {
            const collapsibleRowsState: ITableRowState[] = tableRowsReducer(undefined, genericAction);

            expect(collapsibleRowsState).toBe(tableRowsInitialState);
        });

        it('should return the default state if the action is not defined and the state is undefined for one row', () => {
            const collapsibleRowState: ITableRowState = tableRowReducer(undefined, genericAction);

            expect(collapsibleRowState).toBe(tableRowInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: ITableRowState[] = [tableRowInitialState];
            const collapsibleRowsState: ITableRowState[] = tableRowsReducer(oldState, genericAction);

            expect(collapsibleRowsState).toBe(oldState);
        });

        it('should return the old state when the action is not defined for one row', () => {
            const oldState: ITableRowState = tableRowInitialState;
            const collapsibleRowState: ITableRowState = tableRowReducer(oldState, genericAction);

            expect(collapsibleRowState).toBe(oldState);
        });

        it('should return the old state with one more CollapsibleRowState when the action is "ADD_ROW"', () => {
            let oldState: ITableRowState[] = tableRowsInitialState;
            const action: IReduxAction<ITableRowActionPayload> = {
                type: TableRowActions.add,
                payload: {
                    id: 'row1',
                },
            };
            let collapsibleRowsState: ITableRowState[] = tableRowsReducer(oldState, action);

            expect(collapsibleRowsState.length).toBe(oldState.length + 1);
            expect(collapsibleRowsState.filter((row) => row.id === action.payload.id).length).toBe(1);

            oldState = collapsibleRowsState;
            action.payload.id = 'row2';
            collapsibleRowsState = tableRowsReducer(oldState, action);

            expect(collapsibleRowsState.length).toBe(oldState.length + 1);
            expect(collapsibleRowsState.filter((row) => row.id === action.payload.id).length).toBe(1);
        });

        it('should return the old state without the CollapsibleRowState with the timer id when the action is "REMOVE_ROW"', () => {
            let oldState: ITableRowState[] = [
                {
                    id: 'row2',
                    opened: false,
                    selected: false,
                }, {
                    id: 'row1',
                    opened: true,
                    selected: false,
                }, {
                    id: 'row3',
                    opened: false,
                    selected: false,
                },
            ];
            const action: IReduxAction<ITableRowActionPayload> = {
                type: TableRowActions.remove,
                payload: {
                    id: 'row1',
                },
            };
            let collapsibleRowsState: ITableRowState[] = tableRowsReducer(oldState, action);

            expect(collapsibleRowsState.length).toBe(oldState.length - 1);
            expect(collapsibleRowsState.filter((row) => row.id === action.payload.id).length).toBe(0);

            oldState = collapsibleRowsState;
            action.payload.id = 'row2';
            collapsibleRowsState = tableRowsReducer(oldState, action);

            expect(collapsibleRowsState.length).toBe(oldState.length - 1);
            expect(collapsibleRowsState.filter((row) => row.id === action.payload.id).length).toBe(0);
        });

        describe('collapsible behaviors', () => {
            let oldState: ITableRowState[];
            let openValue: boolean;

            beforeEach(() => {
                openValue = false;
                oldState = [
                    {id: 'row2', opened: openValue, selected: doesNotMatter},
                    {id: 'row3', opened: openValue, selected: doesNotMatter},
                    {id: 'row1', opened: openValue, selected: doesNotMatter},
                ];
            });

            it('should set the opened property to the value specified in the paylaod when the action is "EXPAND_ROW"', () => {
                const setOpenedAction = setRowOpened('row1', true);
                const setCollapsedAction = setRowOpened('row1', false);
                let collapsibleRowsState: ITableRowState[] = tableRowsReducer(oldState, setOpenedAction);

                expect(collapsibleRowsState.length).toBe(oldState.length);
                expect(collapsibleRowsState.filter((row) => row.id === setOpenedAction.payload.id)[0].opened).toBe(true);
                expect(collapsibleRowsState.filter((row) => row.id !== setOpenedAction.payload.id)[0].opened).toBe(openValue);

                collapsibleRowsState = tableRowsReducer(collapsibleRowsState, setOpenedAction);

                expect(collapsibleRowsState.filter((row) => row.id === setOpenedAction.payload.id)[0].opened).toBe(true);
                expect(collapsibleRowsState.filter((row) => row.id !== setOpenedAction.payload.id)[0].opened).toBe(openValue);

                collapsibleRowsState = tableRowsReducer(collapsibleRowsState, setCollapsedAction);

                expect(collapsibleRowsState.filter((row) => row.id === setCollapsedAction.payload.id)[0].opened).toBe(false);
                expect(collapsibleRowsState.filter((row) => row.id !== setCollapsedAction.payload.id)[0].opened).toBe(openValue);
            });

            it('should toggle the opened property to true if the action is "TOGGLE_COLLAPSE_ROW"', () => {
                const action: IReduxAction<ITableRowActionPayload> = {
                    type: TableRowActions.toggleOpen,
                    payload: {id: 'row1'},
                };
                let collapsibleRowsState: ITableRowState[] = tableRowsReducer(oldState, action);

                expect(collapsibleRowsState.length).toBe(oldState.length);
                expect(collapsibleRowsState.filter((row) => row.id === action.payload.id)[0].opened).toBe(!openValue);
                expect(collapsibleRowsState.filter((row) => row.id !== action.payload.id)[0].opened).toBe(openValue);

                collapsibleRowsState = tableRowsReducer(collapsibleRowsState, action);

                expect(collapsibleRowsState.filter((row) => row.id === action.payload.id)[0].opened).toBe(openValue);
                expect(collapsibleRowsState.filter((row) => row.id !== action.payload.id)[0].opened).toBe(openValue);
            });

            it('should return the old state when the action does not target the specified tableId', () => {
                oldState = [
                    {
                        id: 'row2',
                        tableId: 'table3',
                        opened: false,
                        selected: false,
                    }, {
                        id: 'row1',
                        tableId: 'table3',
                        opened: true,
                        selected: false,
                    }, {
                        id: 'row3',
                        tableId: 'table3',
                        opened: false,
                        selected: false,
                    },
                ];
                const action: IReduxAction<ITableRowActionPayload> = {
                    type: TableRowActions.toggleOpen,
                    payload: {
                        id: 'row1',
                        tableId: 'table2',
                    },
                };
                const nexState: ITableRowState[] = tableRowsReducer(oldState, action);

                expect(nexState).toEqual(oldState);
            });
        });

        describe('selected behavior', () => {
            let oldState: ITableRowState[];
            const actionMaker = (rowId: string): IReduxAction<ITableRowActionPayload> => ({
                type: TableRowActions.select,
                payload: {id: rowId},
            });

            beforeEach(() => {
                oldState = [
                    {id: 'row2', opened: doesNotMatter, selected: false},
                    {id: 'row3', opened: doesNotMatter, selected: false},
                    {id: 'row1', opened: doesNotMatter, selected: false},
                ];
            });

            it('should select the row with the corresponding id and leave the rest unselected', () => {
                const action = actionMaker('row2');
                const rowsState = tableRowsReducer(oldState, action);

                expect(rowsState.filter((row) => row.id === action.payload.id)[0].selected).toBe(true);
                expect(rowsState.filter((row) => row.id !== action.payload.id).every((row) => !row.selected))
                    .toBe(true);
            });

            it('should preserve the same selected row if you perform the exact same toggle action twice', () => {
                const action = actionMaker('row2');
                const rowsState = tableRowsReducer(tableRowsReducer(oldState, action), action);

                expect(rowsState.filter((row) => row.id === action.payload.id)[0].selected).toBe(true);
                expect(rowsState.filter((row) => row.id !== action.payload.id).every((row) => !row.selected))
                    .toBe(true);
            });

            it('should select a new row on the second time the toggle action is performed with a new row id', () => {
                const action1 = actionMaker('row1');
                const action2 = actionMaker('row2');
                const rowsState = tableRowsReducer(tableRowsReducer(oldState, action1), action2);

                expect(rowsState.filter((row) => row.id === action2.payload.id)[0].selected).toBe(true);
                expect(rowsState.filter((row) => row.id !== action2.payload.id).every((row) => !row.selected))
                    .toBe(true);
            });

            it('should unselect all rows having a table id identical to the one received in the payload', () => {
                const tableId = 'tableId';
                const action = unselectAllRows(tableId);

                const currentStateWithTableId = oldState.map((rowState) => ({...rowState, tableId, selected: true}));

                expect(tableRowsReducer(currentStateWithTableId, action).every((row) => !row.selected)).toBe(true);
            });

            it('should leave all rows not having a table id identical to the one received in the payload', () => {
                const tableId = 'tableId';
                const action = unselectAllRows(tableId);

                const currentStateWithTableId = oldState.map((rowState) => ({...rowState, tableId: `different${tableId}`, selected: true}));

                expect(tableRowsReducer(currentStateWithTableId, action).every((row) => row.selected)).toBe(true);
            });

            it('should return the old state when the action does not target the specified tableId', () => {
                oldState = [
                    {
                        id: 'row2',
                        tableId: 'table3',
                        opened: false,
                        selected: false,
                    }, {
                        id: 'row1',
                        tableId: 'table3',
                        opened: true,
                        selected: false,
                    }, {
                        id: 'row3',
                        tableId: 'table3',
                        opened: false,
                        selected: false,
                    },
                ];
                const action: IReduxAction<ITableRowActionPayload> = {
                    type: TableRowActions.select,
                    payload: {
                        id: 'row1',
                        tableId: 'table2',
                    },
                };
                const nexState: ITableRowState[] = tableRowsReducer(oldState, action);

                expect(nexState).toEqual(oldState);
            });
        });
    });
});
