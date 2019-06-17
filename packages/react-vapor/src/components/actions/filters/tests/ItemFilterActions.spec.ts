import {IReduxAction} from '../../../../utils/ReduxUtils';
import {
    addItemFilter,
    filterItems,
    IItemFilterActionPayload,
    IItemFilteringActionPayload,
    ItemFilterActions,
    removeItemFilter,
} from '../ItemFilterActions';

const ITEM_FILTER_ID: string = 'the-item-filter';

describe('Item filter', () => {
    describe('ItemFilterActions', () => {
        it('should create an action to add the item filter', () => {
            const expectedAction: IReduxAction<IItemFilterActionPayload> = {
                type: ItemFilterActions.add,
                payload: {
                    id: ITEM_FILTER_ID,
                },
            };

            expect(addItemFilter(ITEM_FILTER_ID)).toEqual(expectedAction);
        });

        it('should create an action to change the item filter', () => {
            const item: string = 'the item';
            const expectedAction: IReduxAction<IItemFilteringActionPayload> = {
                type: ItemFilterActions.filter,
                payload: {
                    id: ITEM_FILTER_ID,
                    item,
                },
            };

            expect(filterItems(ITEM_FILTER_ID, item)).toEqual(expectedAction);
        });

        it('should create an action to remove the item filter', () => {
            const expectedAction: IReduxAction<IItemFilterActionPayload> = {
                type: ItemFilterActions.remove,
                payload: {
                    id: ITEM_FILTER_ID,
                },
            };

            expect(removeItemFilter(ITEM_FILTER_ID)).toEqual(expectedAction);
        });
    });
});
