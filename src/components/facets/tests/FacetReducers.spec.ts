import { IReduxAction } from '../../../utils/ReduxUtils';
import { IFacetActionPayload, FacetActions } from '../FacetActions';
import { IFacetState, facets, facetsInitialState, facet, facetInitialState } from '../FacetReducers';

describe('Reducers', () => {

  describe('facets', () => {
    let genericAction: IReduxAction<IFacetActionPayload> = {
      type: 'DO_SOMETHING',
      payload: {
        facet: 'a facet'
      }
    };

    it('should return the default state if the action is not defined and the state is undefined', () => {
      let oldState: IFacetState[] = undefined;
      let facetsState: IFacetState[] = facets(oldState, genericAction);

      expect(facetsState).toBe(facetsInitialState);
    });

    it('should return the default state if the action is not defined and the state is undefined for one facet', () => {
      let oldState: IFacetState = undefined;
      let facetState: IFacetState = facet(oldState, genericAction);

      expect(facetState).toBe(facetInitialState);
    });

    it('should return the old state when the action is not defined', () => {
      let oldState: IFacetState[] = [facetInitialState];
      let facetsState: IFacetState[] = facets(oldState, genericAction);

      expect(facetsState).toBe(oldState);
    });

    it('should return the old state when the action is not defined for one facet', () => {
      let oldState: IFacetState = facetInitialState;
      let facetState: IFacetState = facet(oldState, genericAction);

      expect(facetState).toBe(oldState);
    });

    it('should return the old state with one more FacetState when the action is "ADD_FACET"', () => {
      let oldState: IFacetState[] = facetsInitialState;
      let action: IReduxAction<IFacetActionPayload> = {
        type: FacetActions.addFacet,
        payload: {
          facet: 'some-facet'
        }
      };
      let facetsState: IFacetState[] = facets(oldState, action);

      expect(facetsState.length).toBe(oldState.length + 1);
      expect(facetsState.filter(f => f.facet === action.payload.facet).length).toBe(1);

      oldState = facetsState;
      action.payload.facet = 'some-facet2';
      facetsState = facets(oldState, action);

      expect(facetsState.length).toBe(oldState.length + 1);
      expect(facetsState.filter(f => f.facet === action.payload.facet).length).toBe(1);
    });

    it('should return the old state without the FacetState with the timer id when the action is "REMOVE_FACET"', () => {
      let oldState: IFacetState[] = [
        {
          facet: 'some-facet2',
          opened: false,
          selected: []
        }, {
          facet: 'some-facet1',
          opened: true,
          selected: []
        }, {
          facet: 'some-facet3',
          opened: false,
          selected: []
        }
      ];
      let action: IReduxAction<IFacetActionPayload> = {
        type: FacetActions.removeFacet,
        payload: {
          facet: 'some-facet1'
        }
      };
      let facetsState: IFacetState[] = facets(oldState, action);

      expect(facetsState.length).toBe(oldState.length - 1);
      expect(facetsState.filter(f => f.facet === action.payload.facet).length).toBe(0);

      oldState = facetsState;
      action.payload.facet = 'some-facet2';
      facetsState = facets(oldState, action);

      expect(facetsState.length).toBe(oldState.length - 1);
      expect(facetsState.filter(f => f.facet === action.payload.facet).length).toBe(0);
    });

    it('should toggle the open property value of a facet when the action is "TOGGLE_MORE_FACET_ROWS"', () => {
      let openValue = false;
      let oldState: IFacetState[] = [
        {
          facet: 'some-facet2',
          opened: openValue,
          selected: []
        }, {
          facet: 'some-facet1',
          opened: openValue,
          selected: []
        }, {
          facet: 'some-facet3',
          opened: openValue,
          selected: []
        }
      ];
      let action: IReduxAction<IFacetActionPayload> = {
        type: FacetActions.toggleMoreFacetRows,
        payload: {
          facet: 'some-facet1'
        }
      };
      let facetsState: IFacetState[] = facets(oldState, action);

      expect(facetsState.length).toBe(oldState.length);
      expect(facetsState.filter(f => f.facet === action.payload.facet)[0].opened).toBe(!openValue);
      expect(facetsState.filter(f => f.facet !== action.payload.facet)[0].opened).toBe(openValue);

      facetsState = facets(facetsState, action);

      expect(facetsState.filter(f => f.facet === action.payload.facet)[0].opened).toBe(openValue);
      expect(facetsState.filter(f => f.facet !== action.payload.facet)[0].opened).toBe(openValue);
    });

    it('should set opened property value to false for all facets when the action is "CLOSE_MORE_FACET_ROWS"', () => {
      let oldState: IFacetState[] = [
        {
          facet: 'some-facet2',
          opened: true,
          selected: []
        }, {
          facet: 'some-facet1',
          opened: false,
          selected: []
        }, {
          facet: 'some-facet3',
          opened: true,
          selected: []
        }
      ];
      let action: IReduxAction<IFacetActionPayload> = {
        type: FacetActions.closeMoreFacetRows,
        payload: {
          facet: 'all'
        }
      };
      let facetsState: IFacetState[] = facets(oldState, action);

      expect(facetsState.length).toBe(oldState.length);
      expect(facetsState.filter(f => f.opened).length).toBe(0);
      expect(facetsState.filter(f => !f.opened).length).toBe(oldState.length);
    });
  });
});
