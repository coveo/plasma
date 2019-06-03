import * as _ from 'underscore';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {ITableWithPaginationBasePayload, ITableWithPaginationSetCountPayload, TableWithPaginationActionsType} from '../actions/TableWithPaginationActions';

export interface ITableWithPaginationState {
    id: string;
    count: number;
}

const addTableWithPaginationReducer = (state: ITableWithPaginationState[], action: IReduxAction<ITableWithPaginationBasePayload>) => {
    return [
        ...state,
        {
            id: action.payload.id,
            count: 0,
        },
    ];
};

const removeTableWithPaginationReducer = (state: ITableWithPaginationState[], action: IReduxAction<ITableWithPaginationBasePayload>) => {
    return _.reject(state, (header: ITableWithPaginationState) => header.id === action.payload.id);
};

const setTableWithPaginationCountReducer = (state: ITableWithPaginationState[], action: IReduxAction<ITableWithPaginationSetCountPayload>) => {
    const current = _.findWhere(state, {id: action.payload.id});
    if (current) {
        return _.map(state, (pagination: ITableWithPaginationState) => {
            return pagination.id === current.id
                ? {...pagination, count: action.payload.count}
                : pagination;
        });
    }
    return state;
};

const TableWithPaginationActionReducers: {[key: string]: (...args: any[]) => any} = {
    [TableWithPaginationActionsType.add]: addTableWithPaginationReducer,
    [TableWithPaginationActionsType.remove]: removeTableWithPaginationReducer,
    [TableWithPaginationActionsType.setCount]: setTableWithPaginationCountReducer,
};

type ITableHeaderPayload = ITableWithPaginationBasePayload | ITableWithPaginationSetCountPayload;
export const TableWithPaginationReducers = (state: ITableWithPaginationState[] = [], action: IReduxAction<ITableHeaderPayload>) => {
    if (!_.isUndefined(TableWithPaginationActionReducers[action.type])) {
        return TableWithPaginationActionReducers[action.type](state, action);
    }
    return state;
};
