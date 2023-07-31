import * as _ from 'underscore';
import {contains} from 'underscore.string';
import {IReduxActionsPayload} from '../../../PlasmaState';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {FilterActions} from '../../filterBox/FilterBoxActions';
import {ListBoxActions} from '../../listBox/ListBoxActions';
import {TableHOCUtils} from '../../table-hoc/utils/TableHOCUtils';
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

export const paginationReducer = (
    state: IPaginationState = paginationInitialState,
    action: IReduxAction<IReduxActionsPayload>,
): IPaginationState => {
    switch (action.type) {
        case PaginationActions.add:
            return {
                id: action.payload.id,
                pageNb: state.pageNb,
            };
        case PaginationActions.changePage:
        case PaginationActions.reset:
            return state.id === action.payload.id ? {id: state.id, pageNb: action.payload.pageNb} : state;
        case TableActions.modifyState:
            return contains(state.id, action.payload.id) && action.payload.shouldResetPage
                ? {...state, pageNb: 0}
                : state;
        case FilterActions.filterThrough:
            return contains(state.id, action.payload.id) ? {...state, pageNb: 0} : state;
        case ListBoxActions.select: {
            const tableId = TableHOCUtils.getTableIdFromPredicateId(action.payload.id);
            return tableId && contains(state.id, tableId) ? {...state, pageNb: 0} : state;
        }
        default:
            return state;
    }
};

export const paginationCompositeReducer = (
    state: IPaginationState[] = paginationCompositeInitialState,
    action: IReduxAction<IReduxActionsPayload>,
): IPaginationState[] => {
    switch (action.type) {
        case PaginationActions.add:
            return [...state, paginationReducer(undefined, action)];
        case PaginationActions.remove:
            return _.reject(state, (pagination: IPaginationState) => pagination.id === action.payload.id);
        case PaginationActions.changePage:
        case PaginationActions.reset:
        case FilterActions.filterThrough:
        case ListBoxActions.select:
        case TableActions.modifyState:
            return state.map((pagination: IPaginationState) => paginationReducer(pagination, action));
        default:
            return state;
    }
};
