import * as _ from 'underscore';
import {IItemBoxProps} from '../../components/itemBox/ItemBox';
import {IReduxAction} from '../../utils/ReduxUtils';
import {IStringListPayload, StringListActions} from './StringListActions';

export type IStringListCompositeState = {[id: string]: IStringListState};

export interface IStringListState {
    id: string;
    list: string[];
}

export const stringListInitialState: IStringListCompositeState = {};

export const convertStringListToItemsBox = (list: string[], itemsBoxParams: Partial<IItemBoxProps> = {}): IItemBoxProps[] => _.map(list, (value: string) => ({...itemsBoxParams, value}));
export const convertItemsBoxToStringList = (items: IItemBoxProps[]): string[] => _.pluck(items, 'value');

export const stringListCompositeReducer = (
    state: IStringListCompositeState = stringListInitialState,
    action: IReduxAction<IStringListPayload>,
): IStringListCompositeState => {

    if (!action.payload
        || (!state[action.payload.id] && action.type !== StringListActions.add)
        || (state[action.payload.id] && action.type === StringListActions.add)
    ) {
        return state;
    }

    switch (action.type) {
        case StringListActions.add:
            return {
                ...state,
                [action.payload.id]: {
                    id: action.payload.id,
                    list: action.payload.list,
                },
            };
        case StringListActions.remove:
            return _.omit(state, [action.payload.id]);
        case StringListActions.addValue:
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    list: action.payload.reset ? [action.payload.value] : _.uniq([...state[action.payload.id].list, action.payload.value]),
                },
            };
        case StringListActions.removeValue:
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    list: [..._.without(state[action.payload.id].list, action.payload.value)],
                },
            };
        case StringListActions.reorder:
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    list: action.payload.list,
                },
            };
        default:
            return state;
    }
};
