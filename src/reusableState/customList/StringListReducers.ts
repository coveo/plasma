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

export const stringListCompositeState = (
    state: IStringListCompositeState = stringListInitialState,
    action: IReduxAction<IStringListPayload>,
): IStringListCompositeState => {

    if (!action.payload || (!state[action.payload.id] && action.type !== StringListActions.add)) {
        return {...state};
    }

    const stateList: IStringListState = {...state[action.payload.id]};
    switch (action.type) {
        case StringListActions.add:
            return {
                ...state,
                [action.payload.id]: {
                    id: action.payload.id,
                    list: action.payload.list || [],
                },
            };
        case StringListActions.remove:
            return {
                ..._.omit(state, [action.payload.id]),
            };
        case StringListActions.addValue:
            return {
                ...state,
                [action.payload.id]: {
                    ...stateList,
                    list: action.payload.reset ? [action.payload.value] : _.uniq([...stateList.list, action.payload.value]),
                },
            };
        case StringListActions.removeValue:
            return {
                ...state,
                [action.payload.id]: {
                    ...stateList,
                    list: [..._.without(stateList.list, action.payload.value)],
                },
            };
        default:
            return {...state};
    }
};
