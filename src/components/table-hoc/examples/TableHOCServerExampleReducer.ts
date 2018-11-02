import * as $ from 'jquery';
import * as _ from 'underscore';
import {IDispatch, IReduxAction, IThunkAction} from '../../../utils/ReduxUtils';
import {IReactVaporTestState} from '../../../utils/TestUtils';
import {turnOffLoading} from '../../loading/LoadingActions';
import {TableWithPaginationActions} from '../actions/TablePaginationActions';
import {ITableHOCCompositeState, TableHOCUtils} from '../TableHOCUtils';
import {TableHOCServerExamples} from './TableHOCServerExamples';

export interface IExampleServerTableState {
    data: IExampleRowData[];
    isLoading: boolean;
}

export interface IExampleRowData {
    city: string;
    email: string;
    username: string;
}

interface ISetExampleDataPayload {
    data: any[];
}

interface ISetExampleIsLoadingPayload {
    isLoading: boolean;
}

export const TableHOCServerActionsType = {
    setData: 'TABLE_HOC_SET_DATA',
    setIsLoading: 'TABLE_HOC_SET_IS_LOADING',
    fetch: 'TABLE_HOC_FETCH_DATA',
};

const setData = (data: any[]): IReduxAction<ISetExampleDataPayload> => ({
    type: TableHOCServerActionsType.setData,
    payload: {data},
});

const setIsLoading = (isLoading: boolean): IReduxAction<ISetExampleIsLoadingPayload> => ({
    type: TableHOCServerActionsType.setIsLoading,
    payload: {isLoading},
});

const fetchData = (): IThunkAction => (dispatch: IDispatch, getState: () => IReactVaporTestState) => {
    const compositeState: ITableHOCCompositeState = TableHOCUtils.getCompositeState(TableHOCServerExamples.TABLE_ID, getState());
    const params: any = {
        _page: compositeState.pageNb + 1,
        _limit: compositeState.perPage,
        _sort: compositeState.sortKey,
        _order: compositeState.sortAscending ? 'asc' : 'desc',
        q: compositeState.filter || undefined,
    };
    _.each(compositeState.predicates, (predicate: {id: string, value: string}) => {
        params[predicate.id] = predicate.value;
    });
    dispatch(setIsLoading(true));
    $.get('https://jsonplaceholder.typicode.com/users', params)
        .done((response: any[], status, request) => {
            const count = request.getResponseHeader('x-total-count');
            const users = response.map((user: any) => ({
                city: user.address.city,
                username: user.username,
                email: user.email,
            }));
            dispatch(setData(users));
            dispatch(turnOffLoading([TableHOCServerExamples.TABLE_ID]));
            dispatch(TableWithPaginationActions.setCount(TableHOCServerExamples.TABLE_ID, count));
        });
};

export const TableHOCServerActions = {
    setData,
    setIsLoading,
    fetchData,
};

type IExamplePayload = ISetExampleDataPayload | ISetExampleIsLoadingPayload;
export const TableHOCServerExampleReducer = (state: IExampleServerTableState = {data: [], isLoading: true}, action: IReduxAction<IExamplePayload>) => {
    if (action.type === TableHOCServerActionsType.setData) {
        const payload = action.payload as ISetExampleDataPayload;
        return {
            ...state,
            data: [...payload.data],
            isLoading: false,
        };
    }

    if (action.type === TableHOCServerActionsType.setIsLoading) {
        const payload = action.payload as ISetExampleIsLoadingPayload;
        return {
            ...state,
            isLoading: payload.isLoading,
        };
    }
    return state;
};
