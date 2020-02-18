import * as _ from 'underscore';

import {BasePayload, IReduxAction} from '../../../utils/ReduxUtils';
import {PaginationActions} from '../../navigation/pagination/NavigationPaginationActions';
import {PerPageActions} from '../../navigation/perPage/NavigationPerPageActions';
import {
    ITableRowAddPayload,
    ITableRowSelectPayload,
    ITableRowToggleCollapsiblePayload,
    TableHOCRowActionsType,
} from '../actions/TableHOCRowActions';
import {TableHOCUtils} from '../utils/TableHOCUtils';

export interface HOCTableRowState {
    id: string;
    tableId: string;
    selected: boolean;
    opened?: boolean;
}

const addTableRowReducer = (state: HOCTableRowState[], action: IReduxAction<ITableRowAddPayload>) => {
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

const removeTableRowReducer = (state: HOCTableRowState[], {payload}: IReduxAction<ITableRowAddPayload>) => {
    return _.reject(
        state,
        ({tableId, id}: HOCTableRowState) => (!payload.tableId || payload.tableId === tableId) && id === payload.id
    );
};

const selectTableRowReducer = (state: HOCTableRowState[], action: IReduxAction<ITableRowSelectPayload>) => {
    const current = _.findWhere(state, {id: action.payload.id});
    if (current) {
        return _.map(state, (row: HOCTableRowState) => {
            if (row.id === current.id) {
                return {
                    ...row,
                    selected: true,
                };
            }
            return row.tableId === current.tableId ? {...row, selected: row.selected && action.payload.isMulti} : row;
        });
    }
    return state;
};

const toggleCollasibleTableRowReducer = (
    state: HOCTableRowState[],
    action: IReduxAction<ITableRowToggleCollapsiblePayload>
) => {
    const current = _.findWhere(state, {id: action.payload.id});
    if (current) {
        return _.map(state, (row: HOCTableRowState) => {
            if (row.id === current.id) {
                return {
                    ...row,
                    opened: _.isBoolean(action.payload.opened) ? action.payload.opened : !current.opened,
                };
            }
            return row;
        });
    }
    return state;
};

const deselectTableRowReducer = (state: HOCTableRowState[], action: IReduxAction<ITableRowSelectPayload>) => {
    return _.map(state, (row: HOCTableRowState) => {
        return row.tableId === action.payload.id || TableHOCUtils.getPaginationId(row.tableId) === action.payload.id
            ? {...row, selected: false}
            : row;
    });
};

const TableRowActionReducers: {[key: string]: (...args: any[]) => any} = {
    [TableHOCRowActionsType.add]: addTableRowReducer,
    [TableHOCRowActionsType.remove]: removeTableRowReducer,
    [TableHOCRowActionsType.select]: selectTableRowReducer,
    [TableHOCRowActionsType.deselectAll]: deselectTableRowReducer,
    [TableHOCRowActionsType.toggleCollapsible]: toggleCollasibleTableRowReducer,
    [PerPageActions.change]: deselectTableRowReducer,
    [PaginationActions.changePage]: deselectTableRowReducer,
};

type ITableRowPayload = BasePayload | ITableRowAddPayload | ITableRowSelectPayload;
export const TableRowReducers = (state: HOCTableRowState[] = [], action: IReduxAction<ITableRowPayload>) => {
    if (!_.isUndefined(TableRowActionReducers[action.type])) {
        return TableRowActionReducers[action.type](state, action);
    }
    return state;
};
