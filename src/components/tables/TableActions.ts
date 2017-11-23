import { IData } from './Table';
import { ITableState } from './TableReducers';
import { IReduxAction } from '../../utils/ReduxUtils';

export enum MODIFY_SATE_TABLE { MODIFY_SATE_TABLE = 'MODIFY_STATE_TABLE' };

export type ITableStateModifyer = (state: ITableState, newTableData?: any) => ITableState;

export const TableActions = {
  add: 'ADD_TABLE',
  remove: 'REMOVE_TABLE',
  inError: 'IN_ERROR_TABLE',
  modifyState: MODIFY_SATE_TABLE.MODIFY_SATE_TABLE,
};

export interface ITableActionPayload {
  id: string;
  isInError?: boolean;
  newTableData?: any;
  tableStateModifyer?: ITableStateModifyer;
}

export const addTable = (id: string): IReduxAction<ITableActionPayload> => ({
  type: TableActions.add,
  payload: { id }
});

export const removeTable = (id: string): IReduxAction<ITableActionPayload> => ({
  type: TableActions.remove,
  payload: { id }
});

export const setIsInError = (id: string, isInError: boolean): IReduxAction<ITableActionPayload> => ({
  type: TableActions.remove,
  payload: { id, isInError }
});

export const modifyState = (
  id: string,
  tableStateModifyer: ITableStateModifyer,
  newTableData?: IData,
): IReduxAction<ITableActionPayload> => ({
  type: MODIFY_SATE_TABLE.MODIFY_SATE_TABLE,
  payload: {
    id,
    tableStateModifyer,
    newTableData,
  },
});

export interface IModifyStateActionPayload {
  id: string;
  tableStateModifyer: ITableStateModifyer;
  newTableData?: IData;
}

export interface ITableModifyStateAction {
  type: MODIFY_SATE_TABLE;
  payload: IModifyStateActionPayload;
}

export type ITableModifyStateActionThunk = (dispatch: (action: ITableModifyStateAction) => void) => void;

export type IModifyStateWrapper = (
  id: string,
  tableStateModifyer: ITableStateModifyer,
  newTableData?: IData,
) => ITableModifyStateAction | ITableModifyStateActionThunk;


