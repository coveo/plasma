import * as $ from 'jquery';
import {IDispatch, IReduxAction, IThunkAction} from '../../../utils/ReduxUtils';
import {TableWithPaginationActions} from '../actions/TablePaginationActions';
import {TableHOCServerExamples} from './TableHOCServerExamples';

export interface IExampleServerTableState {
    data: IExampleRowData[];
}

export interface IExampleRowData {
    city: string;
    email: string;
    username: string;
}

interface ISetExampleDataPayload {
    data: any[];
}

export const TableHOCServerActionsType = {
    setData: 'TABLE_HOC_SET_DATA',
    fetch: 'TABLE_HOC_FETCH_DATA',
};

const setData = (data: any[]): IReduxAction<ISetExampleDataPayload> => ({
    type: TableHOCServerActionsType.setData,
    payload: {data},
});

const fetchData = (compositeState: any): IThunkAction => (dispatch: IDispatch) => {
    $.get('https://jsonplaceholder.typicode.com/users', {
        _page: compositeState.pageNb + 1,
        _limit: compositeState.perPage,
        _sort: compositeState.sortKey,
        _order: compositeState.sortAscending ? 'asc' : 'desc',
        q: compositeState.filter || undefined,
    })
        .done((response: any[], status, request) => {
            const count = request.getResponseHeader('x-total-count');
            const users = response.map((user: any) => ({
                city: user.address.city,
                username: user.username,
                email: user.email,
            }));
            dispatch(setData(users));
            dispatch(TableWithPaginationActions.setCount(TableHOCServerExamples.TABLE_ID, count));
        });
};

export const TableHOCServerActions = {
    setData,
    fetchData,
};

export const TableHOCServerExampleReducer = (state: IExampleServerTableState = {data: []}, action: IReduxAction<ISetExampleDataPayload>) => {
    if (action.type === TableHOCServerActionsType.setData) {
        return {
            ...state,
            data: [...action.payload.data],
        };
    }
    return state;
};
