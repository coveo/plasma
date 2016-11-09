import { IReduxAction } from '../../utils/ReduxUtils';
import { IFacet } from './Facet';

export const FacetActions = {
  addFacet: 'ADD_FACET',
  removeFacet: 'REMOVE_FACET',
  changeFacet: 'CHANGE_FACET',
  emptyFacet: 'EMPTY_FACET',
  toggleMoreFacetRows: 'TOGGLE_MORE_FACET_ROWS',
  closeMoreFacetRows: 'CLOSE_MORE_FACET_ROWS'
};

export interface IFacetActionPayload {
  facet: string;
  facetRow?: IFacet;
}

export const addFacet = (facet: string): IReduxAction<IFacetActionPayload> => {
  return {
    type: FacetActions.addFacet,
    payload: {
      facet
    }
  };
};

export const removeFacet = (facet: string): IReduxAction<IFacetActionPayload> => {
  return {
    type: FacetActions.removeFacet,
    payload: {
      facet
    }
  };
};

export const changeFacetsModel = (facet: string, facetRow: IFacet): IReduxAction<IFacetActionPayload> => {
  return {
    type: FacetActions.changeFacet,
    payload: {
      facet,
      facetRow
    }
  };
};

export const emptyFacet = (facet: string): IReduxAction<IFacetActionPayload> => {
  return {
    type: FacetActions.emptyFacet,
    payload: {
      facet
    }
  };
};

export const toggleMoreFacetRows = (facet: string): IReduxAction<IFacetActionPayload> => {
  return {
    type: FacetActions.toggleMoreFacetRows,
    payload: {
      facet
    }
  };
};

export const closeMoreFacetRows = (): IReduxAction<IFacetActionPayload> => {
  return {
    type: FacetActions.closeMoreFacetRows,
    payload: {
      facet: ''
    }
  };
};
