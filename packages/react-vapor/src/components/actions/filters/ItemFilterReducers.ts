import * as _ from 'underscore';
import {IReduxActionsPayload} from '../../../ReactVapor';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {ItemFilterActions} from './ItemFilterActions';

export interface IItemFilterState {
    id: string;
    item: string;
}

export const itemFilterOriginalState: IItemFilterState = {
    id: undefined,
    item: '',
};

export const itemFiltersOriginalState: IItemFilterState[] = [];

export const itemFilterReducer = (
    state: IItemFilterState = itemFilterOriginalState,
    action: IReduxAction<IReduxActionsPayload>
): IItemFilterState => {
    switch (action.type) {
        case ItemFilterActions.add:
            return {
                id: action.payload.id,
                item: state.item,
            };
        case ItemFilterActions.filter:
            if (state.id !== action.payload.id) {
                return state;
            }

            return {
                id: action.payload.id,
                item: action.payload.item,
            };
        default:
            return state;
    }
};

export const itemFiltersReducer = (
    state: IItemFilterState[] = itemFiltersOriginalState,
    action: IReduxAction<IReduxActionsPayload>
): IItemFilterState[] => {
    switch (action.type) {
        case ItemFilterActions.add:
            return [...state, itemFilterReducer(undefined, action)];
        case ItemFilterActions.filter:
            return state.map((itemFilter: IItemFilterState) => itemFilterReducer(itemFilter, action));
        case ItemFilterActions.remove:
            return _.reject(state, (itemFilter: IItemFilterState) => {
                return action.payload.id === itemFilter.id;
            });
        default:
            return state;
    }
};
