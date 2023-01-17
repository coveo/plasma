import _ from 'underscore';

import {IReduxAction} from '../../../utils/index.js';
import {TableHOCActionsType, TableHOCSetEmptyStatePayload} from '../actions/TableHOCActions.js';

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
