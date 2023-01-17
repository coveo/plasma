import * as _ from 'underscore';

import {IReduxAction} from '../../../utils/ReduxUtils.js';
import {
    ITableHeaderAddPayload,
    ITableHeaderBasePayload,
    ITableHeaderSortPayload,
    TableHeaderActionTypes,
} from '../actions/TableHeaderActions.js';

export interface ITableWithSortState {
    id: string;
    tableId: string;
    isAsc: boolean;
}

const addTableHeaderReducer = (state: ITableWithSortState[], action: IReduxAction<ITableHeaderAddPayload>) => [
    ...state,
    {
        id: action.payload.id,
        tableId: action.payload.tableId,
        isAsc: action.payload.isDefault === true ? true : undefined,
    },
];

const removeTableHeaderReducer = (state: ITableWithSortState[], action: IReduxAction<ITableHeaderBasePayload>) =>
    _.reject(state, (header: ITableWithSortState) => header.id === action.payload.id);

const sortTableHeaderReducer = (state: ITableWithSortState[], action: IReduxAction<ITableHeaderSortPayload>) => {
    const current = _.findWhere(state, {id: action.payload.id});
    if (current) {
        return _.map(state, (header: ITableWithSortState) => {
            if (header.id === current.id) {
                return {
                    ...header,
                    isAsc: _.isBoolean(action.payload.ascending) ? action.payload.ascending : !header.isAsc,
                };
            }
            return header.tableId === current.tableId ? {...header, isAsc: undefined} : header;
        });
    }
    return state;
};

const TableWithSortActionReducers: {[key: string]: (...args: any[]) => any} = {
    [TableHeaderActionTypes.add]: addTableHeaderReducer,
    [TableHeaderActionTypes.remove]: removeTableHeaderReducer,
    [TableHeaderActionTypes.sort]: sortTableHeaderReducer,
};

type ITableHeaderPayload = ITableHeaderAddPayload | ITableHeaderBasePayload;
export const TableWithSortReducers = (state: ITableWithSortState[] = [], action: IReduxAction<ITableHeaderPayload>) => {
    if (!_.isUndefined(TableWithSortActionReducers[action.type])) {
        return TableWithSortActionReducers[action.type](state, action);
    }
    return state;
};
