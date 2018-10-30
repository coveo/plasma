import * as _ from 'underscore';
import {contains} from 'underscore.string';
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
            if (state.id !== action.payload.id) {
                return state;
            }
            return {
                id: state.id,
                pageNb: action.payload.pageNb,
            };
        case TableActions.modifyState:
            if (contains(state.id, action.payload.id) && action.payload.shouldResetPage) {
                return {...state, pageNb: 0};
            }
        case FilterActions.filterThrough:
            if (contains(state.id, action.payload.id)) {
                return {...state, pageNb: 0};
            }
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
