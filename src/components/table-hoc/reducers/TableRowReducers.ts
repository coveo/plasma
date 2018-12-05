import * as _ from 'underscore';

import {BasePayload, IReduxAction} from '../../../utils/ReduxUtils';
import {PaginationActions} from '../../navigation/pagination/NavigationPaginationActions';
import {PerPageActions} from '../../navigation/perPage/NavigationPerPageActions';
import {
    ITableRowAddPayload,
    ITableRowSelectPayload,
    ITableRowToggleCollapsiblePayload,
    TableRowActionsType,
} from '../actions/TableRowActions';
import {TableHOCUtils} from '../TableHOCUtils';

export interface ITableRowState {
    id: string;
    tableId: string;
    selected: boolean;
    opened?: boolean;
}

const addTableRowReducer = (state: ITableRowState[], action: IReduxAction<ITableRowAddPayload>) => {
    return [
        ...state,
        {
            id: action.payload.id,
            tableId: action.payload.tableId,
            selected: false,
            opened: false,
        },
    ];
};

const removeTableRowReducer = (state: ITableRowState[], action: IReduxAction<BasePayload>) => {
    return _.reject(state, (header: ITableRowState) => header.id === action.payload.id);
};

const selectTableRowReducer = (state: ITableRowState[], action: IReduxAction<ITableRowSelectPayload>) => {
    const current = _.findWhere(state, {id: action.payload.id});
    if (current) {
        return _.map(state, (row: ITableRowState) => {
            if (row.id === current.id) {
                return {
                    ...row,
                    selected: true,
                };
            }
            return row.tableId === current.tableId
                ? {...row, selected: row.selected && action.payload.isMulti}
                : row;
        });
    }
    return state;
};

const toggleCollasibleTableRowReducer = (state: ITableRowState[], action: IReduxAction<ITableRowToggleCollapsiblePayload>) => {
    const current = _.findWhere(state, {id: action.payload.id});
    if (current) {
        return _.map(state, (row: ITableRowState) => {
            if (row.id === current.id) {
                return {
                    ...row,
                    opened: _.isBoolean(action.payload.opened) ? action.payload.opened : !current.opened,
                };
            }
            return row.tableId === current.tableId
                ? {...row, opened: false}
                : row;
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
    [TableRowActionsType.toggleCollapsible]: toggleCollasibleTableRowReducer,
    [PerPageActions.change]: deselectTableRowReducer,
    [PaginationActions.changePage]: deselectTableRowReducer,
};

type ITableRowPayload = BasePayload | ITableRowAddPayload | ITableRowSelectPayload;
export const TableRowReducers = (state: ITableRowState[] = [], action: IReduxAction<ITableRowPayload>) => {
    if (!_.isUndefined(TableRowActionReducers[action.type])) {
        return TableRowActionReducers[action.type](state, action);
    }
    return state;
};
