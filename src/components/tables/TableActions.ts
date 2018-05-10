import {IReduxAction} from '../../utils/ReduxUtils';
import {ITablePredicate} from './Table';
import {ITableData, ITableState} from './TableReducers';

export type ITableStateModifier = (state: ITableState) => ITableState;

export const TableActions = {
    add: 'ADD_TABLE',
    remove: 'REMOVE_TABLE',
    inError: 'IN_ERROR_TABLE',
    modifyState: 'MODIFY_STATE_TABLE',
    updateSelectedIds: 'UPDATE_SELECTED_IDS_TABLE',
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
