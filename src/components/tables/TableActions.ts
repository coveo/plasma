import { IData } from './Table';
import { ITableState, ITableData } from './TableReducers';
import { IReduxAction } from '../../utils/ReduxUtils';

export enum MODIFY_SATE_TABLE { MODIFY_SATE_TABLE = 'MODIFY_STATE_TABLE' };

export type ITableStateModifyer = (state: ITableState) => ITableState;

export const TableActions = {
  add: 'ADD_TABLE',
  remove: 'REMOVE_TABLE',
  inError: 'IN_ERROR_TABLE',
  toggleLock: 'TOGGLE_LOCK_TABLE',
  modifyState: MODIFY_SATE_TABLE.MODIFY_SATE_TABLE,
};

export interface ITableActionPayload {
  id: string;
  isInError?: boolean;
  isLocked?: boolean;
  newTableData?: any;
  initialTableData?: ITableData;
  initialPerPage?: number;
  headingAttributeIds?: string[];
  tableStateModifyer?: ITableStateModifyer;
}

export const addTable = (
  id: string,
  initialTableData: ITableData,
  initialPerPage: number,
): IReduxAction<ITableActionPayload> => ({
  type: TableActions.add,
  payload: { id, initialTableData, initialPerPage },
});

export const removeTable = (
  id: string,
): IReduxAction<ITableActionPayload> => ({
  type: TableActions.remove,
  payload: { id }
});

export const setIsInError = (
  id: string,
  isInError: boolean,
): IReduxAction<ITableActionPayload> => ({
  type: TableActions.inError,
  payload: { id, isInError }
});

export const toggleLock = (
  id: string,
  isLocked: boolean,
): IReduxAction<ITableActionPayload> => ({
  type: TableActions.inError,
  payload: { id, isLocked }
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
