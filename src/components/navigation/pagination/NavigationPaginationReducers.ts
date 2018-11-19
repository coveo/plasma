import * as _ from 'underscore';
import * as s from 'underscore.string';
import {IReduxActionsPayload} from '../../../ReactVapor';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {FilterActions} from '../../filterBox/FilterBoxActions';
import {TableActions} from '../../tables/TableActions';
import {PaginationActions} from './NavigationPaginationActions';

export interface IPaginationState {
    id: string;
    pageNb: number;
}

export const paginationInitialState: IPaginationState = {
    id: undefined,
    pageNb: 0,
};

export const paginationCompositeInitialState: IPaginationState[] = [];

export const paginationReducer = (state: IPaginationState = paginationInitialState, action: IReduxAction<IReduxActionsPayload>): IPaginationState => {
    switch (action.type) {
        case PaginationActions.add:
            return {
                id: action.payload.id,
                pageNb: state.pageNb,
            };
        case PaginationActions.changePage:
        case PaginationActions.reset:
            return state.id === action.payload.id
                ? {id: state.id, pageNb: action.payload.pageNb}
                : state;
        case TableActions.modifyState:
            return s.contains(state.id, action.payload.id) && action.payload.shouldResetPage
                ? {...state, pageNb: 0}
                : state;
        case FilterActions.filterThrough:
            return s.contains(state.id, action.payload.id)
                ? {...state, pageNb: 0}
                : state;
        default:
            return state;
    }
};

export const paginationCompositeReducer = (state: IPaginationState[] = paginationCompositeInitialState, action: IReduxAction<IReduxActionsPayload>): IPaginationState[] => {
    switch (action.type) {
        case PaginationActions.add:
            return [
                ...state,
                paginationReducer(undefined, action),
            ];
        case PaginationActions.remove:
            return _.reject(state, (pagination: IPaginationState) => {
                return pagination.id === action.payload.id;
            });
        case PaginationActions.changePage:
        case PaginationActions.reset:
        case FilterActions.filterThrough:
        case TableActions.modifyState:
            return state.map((pagination: IPaginationState) => paginationReducer(pagination, action));
        default:
            return state;
    }
};
