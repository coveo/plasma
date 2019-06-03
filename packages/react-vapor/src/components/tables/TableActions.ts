import {IReduxAction} from '../../utils/ReduxUtils';
import {IData, ITablePredicate} from './Table';
import {ITableData, ITableState} from './TableReducers';

export type ITableStateModifier = (state: ITableState) => ITableState;

export const TableActions = {
    add: 'ADD_TABLE',
    remove: 'REMOVE_TABLE',
    inError: 'IN_ERROR_TABLE',
    modifyState: 'MODIFY_STATE_TABLE',
    updateSelectedIds: 'UPDATE_SELECTED_IDS_TABLE',
    deleteTableDataEntry: 'DELETE_TABLE_DATA_ENTRY',
    addTableDataEntry: 'ADD_TABLE_DATA_ENTRY',
    updateTableDataEntry: 'UPDATE_TABLE_DATA_ENTRY',
};

export interface ITableActionPayload {
    id: string;
    isInError?: boolean;
    initialTableData?: ITableData;
    initialPerPage?: number;
    headingAttributeIds?: string[];
    predicates?: ITablePredicate[];
    tableStateModifier?: ITableStateModifier;
    shouldResetPage?: boolean;
    selectedIds?: string[];
    hasMultipleSelectedRow?: boolean;
    dataId?: string;
    data?: IData;
}

export const addTable = (id: string, initialTableData: ITableData, predicates: ITablePredicate[]): IReduxAction<ITableActionPayload> => ({
    type: TableActions.add,
    payload: {id, initialTableData, predicates: predicates || []},
});

export const removeTable = (id: string): IReduxAction<ITableActionPayload> => ({
    type: TableActions.remove,
    payload: {id},
});

export const setIsInError = (id: string, isInError: boolean): IReduxAction<ITableActionPayload> => ({
    type: TableActions.inError,
    payload: {id, isInError},
});

export const modifyState = (
    id: string,
    tableStateModifier: ITableStateModifier,
    shouldResetPage: boolean,
): IReduxAction<ITableActionPayload> => ({
    type: TableActions.modifyState,
    payload: {
        id,
        tableStateModifier,
        shouldResetPage,
    },
});

export const updateSelectedRows = (id: string, selectedIds: string[], hasMultipleSelectedRow: boolean): IReduxAction<ITableActionPayload> => ({
    type: TableActions.updateSelectedIds,
    payload: {
        id,
        selectedIds,
        hasMultipleSelectedRow,
    },
});

export const deleteTableDataEntry = (id: string, dataId: string): IReduxAction<ITableActionPayload> => ({
    type: TableActions.deleteTableDataEntry,
    payload: {id, dataId},
});

export const addTableDataEntry = (id: string, data: IData): IReduxAction<ITableActionPayload> => ({
    type: TableActions.addTableDataEntry,
    payload: {id, data},
});

export const updateTableDataEntry = (id: string, data: IData): IReduxAction<ITableActionPayload> => ({
    type: TableActions.updateTableDataEntry,
    payload: {id, data},
});
