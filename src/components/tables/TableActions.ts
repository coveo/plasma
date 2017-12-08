import { ITablePredicate } from './Table';
import { ITableState, ITableData } from './TableReducers';
import { IReduxAction } from '../../utils/ReduxUtils';

export type ITableStateModifier = (state: ITableState) => ITableState;

export const TableActions = {
  add: 'ADD_TABLE',
  remove: 'REMOVE_TABLE',
  inError: 'IN_ERROR_TABLE',
  toggleLock: 'TOGGLE_LOCK_TABLE',
  modifyState: 'MODIFY_STATE_TABLE',
};

export interface ITableActionPayload {
  id: string;
  isInError?: boolean;
  initialTableData?: ITableData;
  initialPerPage?: number;
  headingAttributeIds?: string[];
  predicates?: ITablePredicate[];
  TableStateModifier?: ITableStateModifier;
  shouldResetPage?: boolean;
}

export const addTable = (id: string, initialTableData: ITableData, predicates: ITablePredicate[]): IReduxAction<ITableActionPayload> => ({
  type: TableActions.add,
  payload: { id, initialTableData, predicates: predicates || [] },
});

export const removeTable = (id: string): IReduxAction<ITableActionPayload> => ({
  type: TableActions.remove,
  payload: { id }
});

export const setIsInError = (id: string, isInError: boolean): IReduxAction<ITableActionPayload> => ({
  type: TableActions.inError,
  payload: { id, isInError }
});

export const modifyState = (
  id: string,
  TableStateModifier: ITableStateModifier,
  shouldResetPage: boolean,
): IReduxAction<ITableActionPayload> => ({
  type: TableActions.modifyState,
  payload: {
    id,
    TableStateModifier,
    shouldResetPage,
  },
});
