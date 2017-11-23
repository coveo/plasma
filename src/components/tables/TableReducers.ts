import { ITableData } from './Table';
import { TableActions } from './TableActions';
import { IReduxActionsPayload } from '../../ReactVapor';
import { IReduxAction } from '../../utils/ReduxUtils';
import { FilterActions } from '../filterBox/FilterBoxActions';
import * as _ from 'underscore';

export interface ITablesState {
  [id: string]: ITableState;
}

export interface ITableState {
  id: string;
  tableData: ITableData;
  isInError: boolean;
  page: number;
  perPage: number;
  filter: string;
  selectedRowId: string;
}

// export interface ITableState {
//   id: string;
//   tableData: ITableData;
//   isInError: boolean;
//   filters: {
//     [id: string]: ITableChildReference;
//   };
//   predicates: {
//     [id: string]: ITableChildReference;
//   };
//   sort: {
//     [id: string]: ITableChildReference;
//   };
//   selectedRow: {
//     [id: string]: ITableChildReference;
//   };
//   perPage: ITableChildReference;
//   page: ITableChildReference;
// }
