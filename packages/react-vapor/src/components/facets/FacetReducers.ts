import * as _ from 'underscore';
import {IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction} from '../../utils/ReduxUtils';
import {IFacet} from './Facet';
import {FacetActions} from './FacetActions';

export interface IFacetState {
    facet: string;
    opened: boolean;
    selected: IFacet[];
}

export const facetInitialState: IFacetState = {facet: undefined, opened: false, selected: []};
export const facetsInitialState: IFacetState[] = [];

const toggleMore = (state: IFacetState, action: IReduxAction<IReduxActionsPayload>): IFacetState => {
    if (state.facet !== action.payload.facet) {
        return state;
    }

    return {
        facet: state.facet,
        opened: !state.opened,
        selected: state.selected,
    };
};

const closeMore = (state: IFacetState): IFacetState => {
    return {
        facet: state.facet,
        opened: false,
        selected: state.selected,
    };
};

const addFacet = (state: IFacetState, action: IReduxAction<IReduxActionsPayload>): IFacetState => {
    return {
        facet: action.payload.facet,
        opened: false,
        selected: [],
    };
};

const changeFacet = (state: IFacetState, action: IReduxAction<IReduxActionsPayload>): IFacetState => {
    if (state.facet !== action.payload.facet) {
        return state;
    }

    let selected = state.selected;
    if (_.some(state.selected, (facetRow: IFacet) => facetRow.name === action.payload.facetRow.name)) {
        const selectedIndex: number = _.findIndex(state.selected, {name: action.payload.facetRow.name});
        if (!selected[selectedIndex].exclude && action.payload.facetRow.exclude) {
            selected[selectedIndex] = {
                name: action.payload.facetRow.name,
                formattedName: action.payload.facetRow.formattedName,
                exclude: true,
            };
        } else {
            selected = _.reject(state.selected, (facetRow: IFacet, index: number) => index === selectedIndex);
        }
    } else {
        selected = [
            {
                name: action.payload.facetRow.name,
                formattedName: action.payload.facetRow.formattedName,
                exclude: action.payload.facetRow.exclude,
            },
            ...state.selected,
        ];
    }
    return {
        facet: state.facet,
        opened: state.opened,
        selected,
    };
};

const emptyFacet = (state: IFacetState, action: IReduxAction<IReduxActionsPayload>): IFacetState => {
    if (state.facet !== action.payload.facet) {
        return state;
    }

    return {
        facet: state.facet,
        opened: state.opened,
        selected: [],
    };
};

export const facetReducer = (
    state: IFacetState = facetInitialState,
    action: IReduxAction<IReduxActionsPayload>
): IFacetState => {
    switch (action.type) {
        case FacetActions.toggleMoreFacetRows:
            return toggleMore(state, action);
        case FacetActions.closeMoreFacetRows:
            return closeMore(state);
        case FacetActions.addFacet:
            return addFacet(state, action);
        case FacetActions.changeFacet:
            return changeFacet(state, action);
        case FacetActions.emptyFacet:
            return emptyFacet(state, action);
        case FacetActions.emptyAllFacets:
            return {...state, selected: []};
        default:
            return state;
    }
};

export const facetsReducer = (
    state: IFacetState[] = facetsInitialState,
    action: IReduxAction<IReduxActionsPayload>
): IFacetState[] => {
    switch (action.type) {
        case FacetActions.changeFacet:
        case FacetActions.emptyFacet:
        case FacetActions.emptyAllFacets:
        case FacetActions.toggleMoreFacetRows:
        case FacetActions.closeMoreFacetRows:
            return state.map((facet: IFacetState) => facetReducer(facet, action));
        case FacetActions.addFacet:
            return [...state, facetReducer(undefined, action)];
        case FacetActions.removeFacet:
            return _.reject(state, (facet: IFacetState) => {
                return action.payload.facet === facet.facet;
            });
        default:
            return state;
    }
};
