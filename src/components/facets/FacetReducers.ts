import { FacetActions } from './FacetActions';
import { IReduxAction, IReduxActionPayload } from '../../utils/ReduxUtils';
import { IFacet } from './Facet';
import * as _ from 'underscore';

export interface IFacetState {
  facet: string;
  opened: boolean;
  selected: IFacet[];
}

export const facetInitialState: IFacetState = { facet: undefined, opened: false, selected: [] };
export const facetsInitialState: IFacetState[] = [];

export const facetReducer = (state: IFacetState = facetInitialState,
  action: (IReduxAction<IReduxActionPayload>)): IFacetState => {
  switch (action.type) {
    case FacetActions.toggleMoreFacetRows:
      if (state.facet !== action.payload.facet) {
        return state;
      }

      return {
        facet: state.facet,
        opened: !state.opened,
        selected: state.selected
      };
    case FacetActions.closeMoreFacetRows:
      return {
        facet: state.facet,
        opened: false,
        selected: state.selected
      };
    case FacetActions.addFacet:
      return {
        facet: action.payload.facet,
        opened: false,
        selected: []
      };
    case FacetActions.changeFacet:
      if (state.facet !== action.payload.facet) {
        return state;
      }

      let selected = state.selected;
      if (_.some(state.selected, (facetRow: IFacet) => { return facetRow.name === action.payload.facetRow.name; })) {
        selected = _.reject(state.selected, (facetRow: IFacet) => {
          return facetRow.name === action.payload.facetRow.name;
        });
      } else {
        selected = [
          action.payload.facetRow,
          ...state.selected
        ];
      }
      return {
        facet: state.facet,
        opened: state.opened,
        selected: selected
      };
    case FacetActions.emptyFacet:
      if (state.facet !== action.payload.facet) {
        return state;
      }

      return {
        facet: state.facet,
        opened: state.opened,
        selected: []
      };
    default:
      return state;
  }
};

export const facetsReducer = (state: IFacetState[] = facetsInitialState,
  action: IReduxAction<IReduxActionPayload>): IFacetState[] => {
  switch (action.type) {
    case FacetActions.changeFacet:
    case FacetActions.emptyFacet:
    case FacetActions.toggleMoreFacetRows:
    case FacetActions.closeMoreFacetRows:
      return state.map(facet => facetReducer(facet, action));
    case FacetActions.addFacet:
      return [
        ...state,
        facetReducer(undefined, action)
      ];
    case FacetActions.removeFacet:
      return _.reject(state, (facet: IFacetState) => {
        return action.payload.facet === facet.facet;
      });
    default:
      return state;
  }
};
