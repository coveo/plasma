import {
  applyPredicatesOnDisplayedIds,
  applyFilterOnDisplayedIds,
  applySortOnDisplayedIds,
  applyPaginationOnDisplayedIds,
  dispatchPreTableStateModification,
  dispatchPostTableStateModification,
  defaultTableStateModifier,
  defaultTableStateModifierThunk,
} from '../TableDataModifier';
import { turnOnLoading, turnOffLoading } from '../../loading/LoadingActions';
import { addActionsToActionBar } from '../../actions/ActionBarActions';
import { unselectAllRows } from '../TableRowActions';
import { tableOwnPropsMock, tablePropsMockWithData, predictableData } from './TableTestCommon';
import { getTableChildComponentId, getTableLoadingIds } from '../TableUtils';
import { TableChildComponent, TableSortingOrder } from '../TableConstants';
import { changeLastUpdated } from '../../lastUpdated/LastUpdatedActions';
import * as _ from 'underscore';
import { TableActions } from '../TableActions';

describe('TableDataModifier', () => {
  describe('dispatchPreTableStateModification', () => {
    it('should dispatch three actions to unselectAllRows, remove actions, and turn on loading', () => {
      const dispatchSpy = jasmine.createSpy('dispatchSpy') as any;

      const actions = [
        unselectAllRows(tableOwnPropsMock.id),
        addActionsToActionBar(getTableChildComponentId(tableOwnPropsMock.id, TableChildComponent.ACTION_BAR), []),
        turnOnLoading(getTableLoadingIds(tableOwnPropsMock.id)),
      ];

      dispatchPreTableStateModification(tableOwnPropsMock, dispatchSpy);

      actions.forEach(action => {
        expect(dispatchSpy).toHaveBeenCalledWith(action);
      });
      expect(dispatchSpy.calls.count()).toBe(actions.length);
    });
  });

  describe('dispatchPostTableStateModification', () => {
    it('should dispatch two actions to turnOffLoading and update the last updated component', () => {
      const dispatchSpy = jasmine.createSpy('dispatchSpy') as any;

      const actions = [
        turnOffLoading(getTableLoadingIds(tableOwnPropsMock.id)),
        changeLastUpdated(getTableChildComponentId(tableOwnPropsMock.id, TableChildComponent.LAST_UPDATED)),
      ];

      dispatchPostTableStateModification(tableOwnPropsMock, dispatchSpy);

      actions.forEach(action => {
        expect(dispatchSpy).toHaveBeenCalledWith(action);
      });
      expect(dispatchSpy.calls.count()).toBe(actions.length);
    });
  });

  describe('applyPredicatesOnDisplayedIds', () => {
    const { tableCompositeState } = tablePropsMockWithData;
    const { data } = tableCompositeState;
    const { displayedIds } = data;

    it('should return the same ids if the tableCompositeState has no predicates', () => {
      expect(applyPredicatesOnDisplayedIds([...displayedIds], tableCompositeState, data.byId))
        .toEqual(displayedIds);
    });

    it('should return the same ids if the tableCompositeState has no predicates', () => {
      expect(applyPredicatesOnDisplayedIds([...displayedIds], data.byId, tableCompositeState))
        .toEqual(displayedIds);
    });

    it('should keep only ids with the specified value of the specified attribute', () => {
      expect(applyPredicatesOnDisplayedIds(
        [...displayedIds],
        data.byId,
        { ...tableCompositeState, predicates: { 'userName': predictableData.userName } },
      )).toEqual([predictableData.id]);

      expect(applyPredicatesOnDisplayedIds(
        [...displayedIds],
        data.byId,
        { ...tableCompositeState, predicates: { 'email': predictableData.email } },
      )).toEqual([predictableData.id]);

      expect(applyPredicatesOnDisplayedIds(
        [...displayedIds],
        data.byId,
        { ...tableCompositeState, predicates: { 'email': predictableData.email, 'userName': predictableData.userName } },
      )).toEqual([predictableData.id]);
    });
  });

  describe('applyFilterOnDisplayedIds', () => {
    const { tableCompositeState } = tablePropsMockWithData;
    const { data } = tableCompositeState;
    const { displayedIds } = data;

    it('should return the same ids if the tableCompositeState has no filter', () => {
      expect(applyFilterOnDisplayedIds([...displayedIds], tableCompositeState, data.byId, tablePropsMockWithData))
        .toEqual(displayedIds);
    });

    it('should only return the ids containing the filter content if not empty', () => {
      expect(applyFilterOnDisplayedIds(
        [...displayedIds],
        data.byId,
        { ...tableCompositeState, filter: predictableData.password },
        tablePropsMockWithData,
      )).toEqual([predictableData.id]);

      expect(applyFilterOnDisplayedIds(
        [...displayedIds],
        data.byId,
        { ...tableCompositeState, filter: 'no rows has this content in their heading attribute' },
        tablePropsMockWithData,
      )).toEqual([]);
    });

    it('should not throw with a custom filter method on own props', () => {
      expect(applyFilterOnDisplayedIds(
        [...displayedIds],
        data.byId,
        { ...tableCompositeState, filter: predictableData.password },
        { ...tablePropsMockWithData, filterMethod: Boolean },
      )).toEqual(displayedIds);
    });
  });

  describe('applySortOnDisplayedIds', () => {
    const { tableCompositeState } = tablePropsMockWithData;
    const { data } = tableCompositeState;
    const { displayedIds } = data;

    it('should return the same ids if the tableCompositeState has no sortState', () => {
      expect(applySortOnDisplayedIds([...displayedIds], data.byId, { ...tableCompositeState, sortState: undefined }, tablePropsMockWithData))
        .toEqual(displayedIds);
    });

    it('should return the same ids if the tableCompositeState has a sortState but is unsorted', () => {
      expect(applySortOnDisplayedIds(
        [...displayedIds],
        data.byId,
        { ...tableCompositeState, sortState: { order: TableSortingOrder.UNSORTED, attribute: 'userName' } },
        tablePropsMockWithData,
      )).toEqual(displayedIds);
    });

    it('should return the same ids if the tableCompositeState has a sortState, could be sorted, but with no specified attribute', () => {
      expect(applySortOnDisplayedIds(
        [...displayedIds],
        data.byId,
        { ...tableCompositeState, sortState: { order: TableSortingOrder.ASCENDING, attribute: undefined } },
        tablePropsMockWithData,
      )).toEqual(displayedIds);
    });

    it('should return the same ids but sorted ascending by the specified attribute if sorted ASCENDING', () => {
      const expectedOrderOfIds = _.sortBy(_.values(data.byId), data => data.userName.toLowerCase()).map(data => data.id);
      expect(applySortOnDisplayedIds(
        [...displayedIds],
        data.byId,
        { ...tableCompositeState, sortState: { order: TableSortingOrder.ASCENDING, attribute: 'userName' } },
        tablePropsMockWithData,
      )).toEqual(expectedOrderOfIds);
    });

    it('should return the same ids but sorted descending by the specified attribute if sorted DESCENDING', () => {
      const expectedOrderOfIds = _.sortBy(_.values(data.byId), data => data.userName.toLowerCase())
        .reverse()
        .map(data => data.id);
      expect(applySortOnDisplayedIds(
        [...displayedIds],
        data.byId,
        { ...tableCompositeState, sortState: { order: TableSortingOrder.DESCENDING, attribute: 'userName' } },
        tablePropsMockWithData,
      )).toEqual(expectedOrderOfIds);
    });
  });

  describe('applyPaginationOnDisplayedIds', () => {
    const { tableCompositeState } = tablePropsMockWithData;
    const { data } = tableCompositeState;
    const { displayedIds } = data;

    it('should return the same ids if the tableCompositeState has no perPage and page', () => {
      expect(applyPaginationOnDisplayedIds([...displayedIds], tableCompositeState))
        .toEqual(displayedIds);
    });

    it('should skip the first 5 ids if perPage is 5 and page is 1', () => {
      expect(applyPaginationOnDisplayedIds([...displayedIds], { ...tableCompositeState, perPage: 5, page: 1 }))
        .toEqual(displayedIds.slice(5 * 1, 5 * 1 + 5));
    });

    it('should keep the first 5 only if perPage is 5 and page is 0', () => {
      expect(applyPaginationOnDisplayedIds([...displayedIds], { ...tableCompositeState, perPage: 5, page: 0 }))
        .toEqual(displayedIds.slice(5 * 0, 5 * 0 + 5));
    });
  });

  describe('defaultTableStateModifier', () => {
    const { tableCompositeState } = tablePropsMockWithData;

    it('should not throw', () => {
      expect(() => defaultTableStateModifier(tablePropsMockWithData, tableCompositeState)).not.toThrow();
    });

    it('should not throw on calling the returned function', () => {
      expect(() => defaultTableStateModifier(tablePropsMockWithData, tableCompositeState)(tableCompositeState))
        .not.toThrow();
    });

    it('should return the proper data in the tableState', () => {
      const expectedData = {
        byId: {
          ...tableCompositeState.data.byId,
        },
        allIds: [...tableCompositeState.data.allIds],
        displayedIds: [predictableData.id],
        totalEntries: 1,
        totalPages: 1,
      };

      const receivedState = defaultTableStateModifier(tablePropsMockWithData, { ...tableCompositeState, filter: predictableData.password })(tableCompositeState);

      expect(receivedState.data).toEqual(expectedData);
    });
  });

  describe('defaultTableStateModifierThunk', () => {
    const { tableCompositeState } = tablePropsMockWithData;

    it('should not throw', () => {
      expect(() => defaultTableStateModifierThunk(tablePropsMockWithData, true, tableCompositeState)).not.toThrow();
    });

    it('should dispatch an action of type MODIFY_STATE_TABLE', () => {
      const dispatchSpy = jasmine.createSpy('dispatchSpy');
      defaultTableStateModifierThunk(tablePropsMockWithData, true, tableCompositeState)(dispatchSpy);
      expect(dispatchSpy).toHaveBeenCalledWith(jasmine.objectContaining({ type: TableActions.modifyState }));
    });
  });
});
