import {IReduxAction} from '../../../utils/ReduxUtils';

export interface IPaginationActionPayload {
    id: string;
}

export interface IChangePaginationActionPayload extends IPaginationActionPayload {
    pageNb: number;
}

export const PaginationActions = {
    add: 'ADD_PAGINATION',
    remove: 'REMOVE_PAGINATION',
    changePage: 'CHANGE_PAGE',
    reset: 'RESET_PAGING',
};

export const addPagination = (id: string): IReduxAction<IPaginationActionPayload> => ({
    type: PaginationActions.add,
    payload: {
        id,
    },
});

export const removePagination = (id: string): IReduxAction<IPaginationActionPayload> => ({
    type: PaginationActions.remove,
    payload: {
        id,
    },
});

export const changePage = (id: string, pageNb: number): IReduxAction<IChangePaginationActionPayload> => ({
    type: PaginationActions.changePage,
    payload: {
        id,
        pageNb,
    },
});

export const resetPaging = (id: string): IReduxAction<IChangePaginationActionPayload> => ({
    type: PaginationActions.reset,
    payload: {
        id,
        pageNb: 0,
    },
});

export const PaginationReduxActions = {
    addPagination,
    removePagination,
    changePage,
    resetPaging,
};
