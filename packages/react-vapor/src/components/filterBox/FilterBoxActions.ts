import {IReduxAction} from '../../utils/ReduxUtils';

export const FilterActions = {
    addFilter: 'ADD_FILTER',
    removeFilter: 'REMOVE_FILTER',
    filterThrough: 'FILTER',
};

export interface IFilterActionPayload {
    id: string;
}

export interface IChangeFilterActionPayload extends IFilterActionPayload {
    filterText: string;
}

export const addFilter = (id: string): IReduxAction<IFilterActionPayload> => ({
    type: FilterActions.addFilter,
    payload: {
        id,
    },
});

export const removeFilter = (id: string): IReduxAction<IFilterActionPayload> => ({
    type: FilterActions.removeFilter,
    payload: {
        id,
    },
});

export const filterThrough = (id: string, filterText: string): IReduxAction<IChangeFilterActionPayload> => ({
    type: FilterActions.filterThrough,
    payload: {
        id,
        filterText,
    },
});

export const FilterBoxActions = {
    addFilter,
    removeFilter,
    filterThrough,
};
