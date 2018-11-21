import * as _ from 'underscore';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {PaginationActions} from '../../navigation/pagination/NavigationPaginationActions';
import {PerPageActions} from '../../navigation/perPage/NavigationPerPageActions';
import {ITableRowAddPayload, ITableRowRemovePayload, ITableRowSelectPayload, TableRowActionsType} from '../actions/TableRowActions';
import {TableHOCUtils} from '../TableHOCUtils';

export interface ITableRowState {
    id: string;
    tableId: string;
    selected: boolean;
}

const addTableRowReducer = (state: ITableRowState[], action: IReduxAction<ITableRowAddPayload>) => {
    return [
        ...state,
        {
            id: action.payload.id,
            tableId: action.payload.tableId,
            selected: false,
        },
    ];
};

const removeTableRowReducer = (state: ITableRowState[], action: IReduxAction<ITableRowRemovePayload>) => {
    return _.reject(state, (header: ITableRowState) => header.id === action.payload.id);
};

const selectTableRowReducer = (state: ITableRowState[], action: IReduxAction<ITableRowSelectPayload>) => {
    const current = _.findWhere(state, {id: action.payload.id});
    if (current) {
        return _.map(state, (header: ITableRowState) => {
            if (header.id === current.id) {
                return {
                    ...header,
                    selected: true,
                };
            }
            return header.tableId === current.tableId
                ? {...header, selected: header.selected && action.payload.isMulti}
                : header;
        });
    }
    return state;
};

const deselectTableRowReducer = (state: ITableRowState[], action: IReduxAction<ITableRowSelectPayload>) => {
    return _.map(state, (row: ITableRowState) => {
        return row.tableId === action.payload.id || TableHOCUtils.getPaginationId(row.tableId) === action.payload.id
            ? {...row, selected: false}
            : row;
    });
};

const TableRowActionReducers: {[key: string]: (...args: any[]) => any} = {
    [TableRowActionsType.add]: addTableRowReducer,
    [TableRowActionsType.remove]: removeTableRowReducer,
    [TableRowActionsType.select]: selectTableRowReducer,
    [PerPageActions.change]: deselectTableRowReducer,
    [PaginationActions.changePage]: deselectTableRowReducer,
};

type ITableRowPayload = ITableRowAddPayload | ITableRowRemovePayload | ITableRowSelectPayload;
export const TableRowReducers = (state: ITableRowState[] = [], action: IReduxAction<ITableRowPayload>) => {
    if (!_.isUndefined(TableRowActionReducers[action.type])) {
        return TableRowActionReducers[action.type](state, action);
    }
    return state;
};
