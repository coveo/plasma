import * as _ from 'underscore';
import {IReduxActionsDefaultPayload} from '../../ReactVapor';
import {IReduxAction} from '../../utils/ReduxUtils';

export const FilterActions = {
    addFilter: 'ADD_FILTER',
    removeFilter: 'REMOVE_FILTER',
    filterThrough: 'FILTER',
};

export const defaultMatchFilter = (filterValue: string, item: any, propertiesName: string[]) => {
    if (filterValue === '') {
        return true;
    }

    if (filterValue && item) {
        const regex = new RegExp(filterValue, 'gi');
        return _.some(propertiesName, (property: string) => item[property] ? regex.test(item[property]) : false);
    }

    return false;
};

export type MatchFilter = (filterValue: string, item: any, propertiesName: string[]) => boolean;

export interface IFilterActionPayload extends IReduxActionsDefaultPayload {
    matchFilter?: MatchFilter;
    filterText?: string;
}

export const addFilter = (id: string, matchFilter: MatchFilter = defaultMatchFilter): IReduxAction<IFilterActionPayload> => ({
    type: FilterActions.addFilter,
    payload: {
        id,
        matchFilter,
    },
});

export const removeFilter = (id: string): IReduxAction<IFilterActionPayload> => ({
    type: FilterActions.removeFilter,
    payload: {
        id,
    },
});

export const filterThrough = (id: string, filterText: string): IReduxAction<IFilterActionPayload> => ({
    type: FilterActions.filterThrough,
    payload: {
        id,
        filterText,
    },
});
