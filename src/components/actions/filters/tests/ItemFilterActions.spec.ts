import { IReduxAction } from '../../../../utils/ReduxUtils';
import { IReduxActionsPayload } from '../../../../ReactVapor';
import { ItemFilterActions, addItemFilter, filterItems, removeItemFilter } from '../ItemFilterActions';

const ITEM_FILTER_ID: string = 'the-item-filter';

describe('Item filter', () => {

  describe('ItemFilterActions', () => {

    it('should create an action to add the item filter', () => {
      let expectedAction: IReduxAction<IReduxActionsPayload> = {
        type: ItemFilterActions.add,
        payload: {
          id: ITEM_FILTER_ID
        }
      };

      expect(addItemFilter(ITEM_FILTER_ID)).toEqual(expectedAction);
    });

    it('should create an action to change the item filter', () => {
      let item: string = 'the item';
      let expectedAction: IReduxAction<IReduxActionsPayload> = {
        type: ItemFilterActions.filter,
        payload: {
          id: ITEM_FILTER_ID,
          item
        }
      };

      expect(filterItems(ITEM_FILTER_ID, item)).toEqual(expectedAction);
    });

    it('should create an action to remove the item filter', () => {
      let expectedAction: IReduxAction<IReduxActionsPayload> = {
        type: ItemFilterActions.remove,
        payload: {
          id: ITEM_FILTER_ID
        }
      };

      expect(removeItemFilter(ITEM_FILTER_ID)).toEqual(expectedAction);
    });
  });
});
