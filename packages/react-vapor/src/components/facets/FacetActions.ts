import {IReduxAction} from '../../utils/ReduxUtils';
import {IFacet} from './Facet';

export const FacetActions = {
    addFacet: 'ADD_FACET',
    removeFacet: 'REMOVE_FACET',
    changeFacet: 'CHANGE_FACET',
    emptyFacet: 'EMPTY_FACET',
    emptyAllFacets: 'EMPTY_ALL_FACET',
    toggleMoreFacetRows: 'TOGGLE_MORE_FACET_ROWS',
    closeMoreFacetRows: 'CLOSE_MORE_FACET_ROWS',
};

export interface IFacetActionPayload {
    facet: string;
}

export interface IChangeFacetActionPayload extends IFacetActionPayload {
    facetRow: IFacet;
}

export const addFacet = (facet: string): IReduxAction<IFacetActionPayload> => ({
    type: FacetActions.addFacet,
    payload: {
        facet,
    },
});

export const removeFacet = (facet: string): IReduxAction<IFacetActionPayload> => ({
    type: FacetActions.removeFacet,
    payload: {
        facet,
    },
});

export const changeFacet = (facet: string, facetRow: IFacet): IReduxAction<IChangeFacetActionPayload> => ({
    type: FacetActions.changeFacet,
    payload: {
        facet,
        facetRow,
    },
});

export const emptyFacet = (facet: string): IReduxAction<IFacetActionPayload> => ({
    type: FacetActions.emptyFacet,
    payload: {
        facet,
    },
});

export const emptyAllFacets = (): IReduxAction<IFacetActionPayload> => ({type: FacetActions.emptyAllFacets});

export const toggleMoreFacetRows = (facet: string): IReduxAction<IFacetActionPayload> => ({
    type: FacetActions.toggleMoreFacetRows,
    payload: {
        facet,
    },
});

export const closeMoreFacetRows = (): IReduxAction<IFacetActionPayload> => ({
    type: FacetActions.closeMoreFacetRows,
    payload: {
        facet: '',
    },
});
