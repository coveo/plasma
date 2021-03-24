import {IReduxAction} from 'src/utils';
import _ from 'underscore';
import {TableHOCActionsType, TableHOCSetEmptyStatePayload} from '../actions/TableHOCActions';

export interface HOCTableState {
    id: string;
    emptyStateSet?: boolean;
}

const setIsEmptyStateReducer = (state: HOCTableState[], action: IReduxAction<TableHOCSetEmptyStatePayload>) => [
    ...state,
    {
        id: action.payload.id,
        emptyStateSet: action.payload.emptyStateSet,
    },
];

const TableHOCActionReducers: {[key: string]: (...args: any[]) => any} = {
    [TableHOCActionsType.setEmptyState]: setIsEmptyStateReducer,
};

export const TableHOCReducers = (state: HOCTableState[] = [], action: IReduxAction<TableHOCSetEmptyStatePayload>) => {
    if (!_.isUndefined(TableHOCActionReducers[action.type])) {
        return TableHOCActionReducers[action.type](state, action);
    }
    return state;
};
