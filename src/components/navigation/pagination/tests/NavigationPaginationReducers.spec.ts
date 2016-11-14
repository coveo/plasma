import {IPaginationActionPayload, PaginationActions} from '../NavigationPaginationActions';
import {IReduxAction} from '../../../../utils/ReduxUtils';
import {
  paginationComposite, paginationCompositeInitialState, pagination,
  paginationInitialState, IPaginationState
} from '../NavigationPaginationReducers';

describe('Reducers', () => {

  describe('NavigationPaginationReducers', () => {
    let genericAction: IReduxAction<IPaginationActionPayload> = {
      type: 'DO_SOMETHING',
      payload: {
        id: 'pagination',
        pageNb: 22
      }
    };

    it('should return the default state if the action is not defined and the state is undefined', () => {
      let oldState: IPaginationState[] = undefined;
      let paginationCompositeState = paginationComposite(oldState, genericAction);

      expect(paginationCompositeState).toBe(paginationCompositeInitialState);
    });

    it('should return the default state if the action is not defined and the state is undefined for a specific pagination', () => {
      let oldState: IPaginationState = undefined;
      let paginationState = pagination(oldState, genericAction);

      expect(paginationState).toBe(paginationInitialState);
    });

    it('should return the old state when the action is not defined', () => {
      let oldState: IPaginationState[] = [paginationInitialState];
      let paginationCompositeState: IPaginationState[] = paginationComposite(oldState, genericAction);

      expect(paginationCompositeState).toBe(oldState);
    });

    it('should return the old state when the action is not defined for a specific pagination', () => {
      let oldState: IPaginationState = {
        id: 'pagination',
        pageNb: 22
      };
      let pageNbState = pagination(oldState, genericAction);

      expect(pageNbState).toBe(oldState);
    });

    it('should return the old state with one more PaginationState when the action is "ADD_PAGINATION"', () => {
      let oldState: IPaginationState[] = paginationCompositeInitialState;
      let action: IReduxAction<IPaginationActionPayload> = {
        type: PaginationActions.add,
        payload: {
          id: 'pagination',
          pageNb: 1
        }
      };
      let paginationCompositeState: IPaginationState[] = paginationComposite(oldState, action);

      expect(paginationCompositeState.length).toBe(oldState.length + 1);
      expect(paginationCompositeState.filter(p => p.id === action.payload.id).length).toBe(1);

      oldState = paginationCompositeState;
      action.payload.id = 'pagination2';
      paginationCompositeState = paginationComposite(oldState, action);

      expect(paginationCompositeState.length).toBe(oldState.length + 1);
      expect(paginationCompositeState.filter(p => p.id === action.payload.id).length).toBe(1);
    });

    it('should return the old state without the PaginationState with the action id when the action is "REMOVE_PAGINATION"', () => {
      let oldState: IPaginationState[] = [
        {
          id: 'some-pagination',
          pageNb: 2
        }, {
          id: 'some-pagination2',
          pageNb: 5
        }, {
          id: 'some-pagination1',
          pageNb: 33
        }
      ];
      let action: IReduxAction<IPaginationActionPayload> = {
        type: PaginationActions.remove,
        payload: {
          id: 'some-pagination2'
        }
      };
      let paginationCompositeState: IPaginationState[] = paginationComposite(oldState, action);

      expect(paginationCompositeState.length).toBe(oldState.length - 1);
      expect(paginationCompositeState.filter(p => p.id === action.payload.id).length).toBe(0);

      oldState = paginationCompositeState;
      action.payload.id = 'some-pagination';
      paginationCompositeState = paginationComposite(oldState, action);

      expect(paginationCompositeState.length).toBe(oldState.length - 1);
      expect(paginationCompositeState.filter(p => p.id === action.payload.id).length).toBe(0);
    });

    it('should change the page number of the action id when action is "CHANGE_PAGE"', () => {
      let oldState: IPaginationState = {
        id: 'pagination',
        pageNb: 22
      };
      let newState: IPaginationState = {
        id: 'pagination',
        pageNb: 2
      };
      let action: IReduxAction<IPaginationActionPayload> = {
        type: PaginationActions.changePage,
        payload: newState
      };
      let paginationState = paginationComposite([oldState], action);

      expect(paginationState[0]).toEqual(jasmine.objectContaining(newState));
    });

    it('should set the page number at 0 for the action id if the action is "RESET_PAGING"', () => {
      let oldState: IPaginationState = {
        id: 'pagination',
        pageNb: 22
      };
      let newState: IPaginationState = {
        id: 'pagination',
        pageNb: 0
      };
      let action: IReduxAction<IPaginationActionPayload> = {
        type: PaginationActions.reset,
        payload: newState
      };
      let paginationState = paginationComposite([oldState], action);

      expect(paginationState[0]).toEqual(jasmine.objectContaining(newState));
    });
  });
});
