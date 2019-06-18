import * as _ from 'underscore';
import {IReduxAction} from '../../../../utils/ReduxUtils';
import {IItemFilterActionPayload, IItemFilteringActionPayload, ItemFilterActions} from '../ItemFilterActions';
import {
    IItemFilterState,
    itemFilterOriginalState,
    itemFilterReducer,
    itemFiltersOriginalState,
    itemFiltersReducer,
} from '../ItemFilterReducers';

describe('Item filters', () => {
    const genericAction: IReduxAction<IItemFilterActionPayload> = {
        type: 'DO_SOMETHING',
        payload: {
            id: 'some-filter',
        },
    };

    describe('itemFiltersReducer', () => {
        it('should return the default state if the action is not defined and the state is undefined', () => {
            const oldState: IItemFilterState[] = undefined;
            const itemFilterState: IItemFilterState[] = itemFiltersReducer(oldState, genericAction);

            expect(itemFilterState).toBe(itemFiltersOriginalState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: IItemFilterState[] = [{id: 'some-filter', item: ''}];
            const itemFilterState: IItemFilterState[] = itemFiltersReducer(oldState, genericAction);

            expect(itemFilterState).toBe(oldState);
        });

        it('should return the old state with one more ItemFilterState when the action is "ADD_ITEM_FILTER"', () => {
            let oldState: IItemFilterState[] = itemFiltersOriginalState;
            const action: IReduxAction<IItemFilterActionPayload> = {
                type: ItemFilterActions.add,
                payload: {
                    id: 'some-filter',
                },
            };
            let itemFilterState: IItemFilterState[] = itemFiltersReducer(oldState, action);

            expect(itemFilterState.length).toBe(oldState.length + 1);
            expect(itemFilterState.filter((itemFilter) => itemFilter.id === action.payload.id).length).toBe(1);

            oldState = itemFilterState;
            action.payload.id = 'some-filter2';
            itemFilterState = itemFiltersReducer(oldState, action);

            expect(itemFilterState.length).toBe(oldState.length + 1);
            expect(itemFilterState.filter((itemFilter) => itemFilter.id === action.payload.id).length).toBe(1);
        });

        it('should return the old state without the ItemFilterState when the action is "REMOVE_ITEM_FILTER', () => {
            let oldState: IItemFilterState[] = [
                {
                    id: 'some-filter2',
                    item: '',
                },
                {
                    id: 'some-filter',
                    item: '',
                },
                {
                    id: 'some-filter3',
                    item: '',
                },
            ];
            const action: IReduxAction<IItemFilterActionPayload> = {
                type: ItemFilterActions.remove,
                payload: {
                    id: 'some-filter',
                },
            };
            let itemFilterState: IItemFilterState[] = itemFiltersReducer(oldState, action);

            expect(itemFilterState.length).toBe(oldState.length - 1);
            expect(itemFilterState.filter((itemFilter) => itemFilter.id === action.payload.id).length).toBe(0);

            oldState = itemFilterState;
            action.payload.id = 'some-filter2';
            itemFilterState = itemFiltersReducer(oldState, action);

            expect(itemFilterState.length).toBe(oldState.length - 1);
            expect(itemFilterState.filter((itemFilter) => itemFilter.id === action.payload.id).length).toBe(0);
        });

        it('should return the old state when the action is "REMOVE_ITEM_FILTER" and the filter id does not exist', () => {
            const oldState: IItemFilterState[] = [
                {
                    id: 'some-filter2',
                    item: '',
                },
                {
                    id: 'some-filter',
                    item: '',
                },
                {
                    id: 'some-filter3',
                    item: '',
                },
            ];
            const action: IReduxAction<IItemFilterActionPayload> = {
                type: ItemFilterActions.remove,
                payload: {
                    id: 'some-filter4',
                },
            };
            const itemFilterState: IItemFilterState[] = itemFiltersReducer(oldState, action);

            expect(itemFilterState.length).toBe(oldState.length);
            expect(itemFilterState.filter((itemFilter) => itemFilter.id === action.payload.id).length).toBe(0);
        });

        it('should return the state with the new item for the filter with the action id when the action is "FILTER_ITEMS"', () => {
            const oldState: IItemFilterState[] = [
                {
                    id: 'some-filter2',
                    item: '',
                },
                {
                    id: 'some-filter',
                    item: '',
                },
                {
                    id: 'some-filter3',
                    item: '',
                },
            ];
            const action: IReduxAction<IItemFilteringActionPayload> = {
                type: ItemFilterActions.filter,
                payload: {
                    id: 'some-filter',
                    item: 'new item',
                },
            };
            const itemFilterState: IItemFilterState[] = itemFiltersReducer(oldState, action);
            expect(_.findWhere(itemFilterState, {id: action.payload.id}).item).toBe(action.payload.item);
            expect(itemFilterState.filter((itemFilter) => itemFilter.id !== action.payload.id).length).toBe(2);
        });

        it('should not change the original state', () => {
            const expectedState = itemFiltersOriginalState.slice(0);
            const action: IReduxAction<IItemFilterActionPayload> = {
                type: ItemFilterActions.add,
                payload: {
                    id: 'some-filter',
                },
            };
            itemFiltersReducer(itemFiltersOriginalState, action);

            expect(expectedState).toEqual(itemFiltersOriginalState);
        });
    });

    describe('itemFilterReducer', () => {
        it('should return the default state if the action is not defined and the state is undefined', () => {
            const oldState: IItemFilterState = undefined;
            const itemFilterState: IItemFilterState = itemFilterReducer(oldState, genericAction);

            expect(itemFilterState).toBe(itemFilterOriginalState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: IItemFilterState = {id: 'some-filter', item: ''};
            const itemFilterState: IItemFilterState = itemFilterReducer(oldState, genericAction);

            expect(itemFilterState).toBe(oldState);
        });

        it('should return a new item filter with the specified id and an empty item when the action is "ADD_ITEM_FILTER"', () => {
            const oldState: IItemFilterState = itemFilterOriginalState;
            const action: IReduxAction<IItemFilterActionPayload> = {
                type: ItemFilterActions.add,
                payload: {
                    id: 'some-filter',
                },
            };
            const itemFilterState: IItemFilterState = itemFilterReducer(oldState, action);

            expect(itemFilterState.id).toBe(action.payload.id);
            expect(itemFilterState.item).toBe('');
        });

        it('should return the original state if the action is "FILTER_ITEMS" and the id is not the one specified in the action', () => {
            const oldState: IItemFilterState = {
                id: 'some-filter2',
                item: '',
            };
            const action: IReduxAction<IItemFilteringActionPayload> = {
                type: ItemFilterActions.filter,
                payload: {
                    id: 'some-filter',
                    item: 'new item',
                },
            };
            const itemFilterState: IItemFilterState = itemFilterReducer(oldState, action);

            expect(itemFilterState.item).toBe(oldState.item);
        });

        it('should return the item filter with a new item when the action is "FILTER_ITEMS" and the id is the one specified', () => {
            const oldState: IItemFilterState = {
                id: 'some-filter',
                item: '',
            };
            const action: IReduxAction<IItemFilteringActionPayload> = {
                type: ItemFilterActions.filter,
                payload: {
                    id: 'some-filter',
                    item: 'new item',
                },
            };
            const itemFilterState: IItemFilterState = itemFilterReducer(oldState, action);

            expect(itemFilterState.item).toBe(action.payload.item);
        });
    });
});
