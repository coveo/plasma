import * as _ from 'underscore';
import {IReduxAction} from '../../../../utils/ReduxUtils';
import {filterThrough} from '../../../filterBox/FilterBoxActions';
import {modifyState} from '../../../tables/TableActions';
import {
    IChangePaginationActionPayload,
    IPaginationActionPayload,
    PaginationActions,
} from '../NavigationPaginationActions';
import {
    IPaginationState,
    paginationCompositeInitialState,
    paginationCompositeReducer,
    paginationInitialState,
    paginationReducer,
} from '../NavigationPaginationReducers';

describe('Reducers', () => {

    describe('NavigationPaginationReducers', () => {
        const genericAction: IReduxAction<IChangePaginationActionPayload> = {
            type: 'DO_SOMETHING',
            payload: {
                id: 'pagination',
                pageNb: 22,
            },
        };

        it('should return the default state if the action is not defined and the state is undefined', () => {
            const paginationCompositeState = paginationCompositeReducer(undefined, genericAction);

            expect(paginationCompositeState).toBe(paginationCompositeInitialState);
        });

        it('should return the default state if the action is not defined and the state is undefined for a specific pagination', () => {
            const paginationState = paginationReducer(undefined, genericAction);

            expect(paginationState).toBe(paginationInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: IPaginationState[] = [paginationInitialState];
            const paginationCompositeState: IPaginationState[] = paginationCompositeReducer(oldState, genericAction);

            expect(paginationCompositeState).toBe(oldState);
        });

        it('should return the old state when the action is not defined for a specific pagination', () => {
            const oldState: IPaginationState = {
                id: 'pagination',
                pageNb: 22,
            };
            const pageNbState = paginationReducer(oldState, genericAction);

            expect(pageNbState).toBe(oldState);
        });

        it('should return the old state with one more PaginationState when the action is "ADD_PAGINATION"', () => {
            let oldState: IPaginationState[] = paginationCompositeInitialState;
            const action: IReduxAction<IChangePaginationActionPayload> = {
                type: PaginationActions.add,
                payload: {
                    id: 'pagination',
                    pageNb: 1,
                },
            };
            let paginationCompositeState: IPaginationState[] = paginationCompositeReducer(oldState, action);

            expect(paginationCompositeState.length).toBe(oldState.length + 1);
            expect(paginationCompositeState.filter((p) => p.id === action.payload.id).length).toBe(1);

            oldState = paginationCompositeState;
            action.payload.id = 'pagination2';
            paginationCompositeState = paginationCompositeReducer(oldState, action);

            expect(paginationCompositeState.length).toBe(oldState.length + 1);
            expect(paginationCompositeState.filter((p) => p.id === action.payload.id).length).toBe(1);
        });

        it('should return the old state without the PaginationState with the action id when the action is "REMOVE_PAGINATION"', () => {
            let oldState: IPaginationState[] = [
                {
                    id: 'some-pagination',
                    pageNb: 2,
                }, {
                    id: 'some-pagination2',
                    pageNb: 5,
                }, {
                    id: 'some-pagination1',
                    pageNb: 33,
                },
            ];
            const action: IReduxAction<IPaginationActionPayload> = {
                type: PaginationActions.remove,
                payload: {
                    id: 'some-pagination2',
                },
            };
            let paginationCompositeState: IPaginationState[] = paginationCompositeReducer(oldState, action);

            expect(paginationCompositeState.length).toBe(oldState.length - 1);
            expect(paginationCompositeState.filter((p) => p.id === action.payload.id).length).toBe(0);

            oldState = paginationCompositeState;
            action.payload.id = 'some-pagination';
            paginationCompositeState = paginationCompositeReducer(oldState, action);

            expect(paginationCompositeState.length).toBe(oldState.length - 1);
            expect(paginationCompositeState.filter((p) => p.id === action.payload.id).length).toBe(0);
        });

        it('should change the page number of the action id when action is "CHANGE_PAGE"', () => {
            const oldState: IPaginationState = {
                id: 'pagination',
                pageNb: 22,
            };
            const newState: IPaginationState = {
                id: 'pagination',
                pageNb: 2,
            };
            const action: IReduxAction<IPaginationActionPayload> = {
                type: PaginationActions.changePage,
                payload: newState,
            };
            const paginationState = paginationCompositeReducer([oldState], action);

            expect(paginationState[0]).toEqual(jasmine.objectContaining(newState));
        });

        it('should set the page number at 0 for the action id if the action is "RESET_PAGING"', () => {
            const oldState: IPaginationState = {
                id: 'pagination',
                pageNb: 22,
            };
            const newState: IPaginationState = {
                id: 'pagination',
                pageNb: 0,
            };
            const action: IReduxAction<IPaginationActionPayload> = {
                type: PaginationActions.reset,
                payload: newState,
            };
            const paginationState = paginationCompositeReducer([oldState], action);

            expect(paginationState[0]).toEqual(jasmine.objectContaining(newState));
        });

        it('should set the page number at 0 for the table state modification action if the table id is in the pagination id and shouldResetPage is true', () => {
            const tableId = 'table';
            const shouldResetPage = true;
            const oldState: IPaginationState = {
                id: `pagination${tableId}`,
                pageNb: 22,
            };

            expect(paginationCompositeReducer([oldState], modifyState(tableId, _.identity, shouldResetPage))[0].pageNb).toBe(0);
        });

        it('should not reset the page for the table state modification action if the table id is in the pagination id and shouldResetPage is false', () => {
            const tableId = 'table';
            const shouldResetPage = false;
            const oldState: IPaginationState = {
                id: `pagination${tableId}`,
                pageNb: 22,
            };

            expect(paginationCompositeReducer([oldState], modifyState(tableId, _.identity, shouldResetPage))[0].pageNb).toBe(oldState.pageNb);
        });

        it('should not reset the page for the table state modification action if the table id is not in the pagination id regardless of shouldResetPage', () => {
            const tableId = 'table';
            const shouldResetPage = true;
            const oldState: IPaginationState = {
                id: 'pagination',
                pageNb: 22,
            };

            expect(paginationCompositeReducer([oldState], modifyState(tableId, _.identity, shouldResetPage))[0].pageNb).toBe(oldState.pageNb);
        });

        it('should set the page number at 0 for the filterThrough action if the filter id is in the pagination id', () => {
            const filterId = 'some-filter-id';
            const oldState: IPaginationState = {
                id: `pagination-${filterId}`,
                pageNb: 22,
            };

            const action = filterThrough(filterId, 'new filter value');
            expect(paginationCompositeReducer([oldState], action)[0].pageNb).toBe(0);
        });

        it('should not set the page number at 0 for the filterThrough action if the filter id is not in the pagination id', () => {
            const filterId = 'some-filter-id';
            const oldState: IPaginationState = {
                id: `pagination-different-filter-id`,
                pageNb: 22,
            };

            const action = filterThrough(filterId, 'new filter value');
            expect(paginationCompositeReducer([oldState], action)[0].pageNb).toBe(oldState.pageNb);
        });
    });
});
