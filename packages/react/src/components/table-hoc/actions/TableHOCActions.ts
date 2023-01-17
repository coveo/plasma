import {BasePayload, IReduxAction} from '../../../utils/ReduxUtils.js';

export const TableHOCActionsType = {
    setEmptyState: 'SET_EMPTY_STATE',
};

export interface TableHOCSetEmptyStatePayload extends BasePayload {
    emptyStateSet?: boolean;
}

const setEmptyStateTable = (id: string, emptyStateSet: boolean): IReduxAction<TableHOCSetEmptyStatePayload> => ({
    type: TableHOCActionsType.setEmptyState,
    payload: {id, emptyStateSet},
});

export const TableHOCActions = {
    setEmptyState: setEmptyStateTable,
};
