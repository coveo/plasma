import * as _ from 'underscore';
import {IStringListPayload, StringListActions} from '../../reusableState/customList/StringListActions';
import {IStringListState, stringListCompositeState} from '../../reusableState/customList/StringListReducers';
import {IReduxAction} from '../../utils/ReduxUtils';
import {IListBoxPayload, ListBoxActions} from '../listBox/ListBoxActions';

export type ISelectWithFilterCompositeState = {[id: string]: ISelectWithFilterState};

export interface ISelectWithFilterState extends IStringListState {}

export const initialState: ISelectWithFilterCompositeState = {};

export const selectWithFilterCompositeState = (
    state: ISelectWithFilterCompositeState = initialState,
    action: IReduxAction<IStringListPayload | IListBoxPayload>,
): ISelectWithFilterCompositeState => {
    if (_.contains(StringListActions, action.type)) {
        return stringListCompositeState(state, action);
    }

    if (!action.payload || !state[action.payload.id]) {
        return state;
    }

    const stateList = {...state[action.payload.id]};
    switch (action.type) {
        case ListBoxActions.select:
            state[action.payload.id] = {
                ...stateList,
                list: _.uniq([...stateList.list, action.payload.value]),
            };
            return {
                ...state,
            };
        case ListBoxActions.unselect:
            state[action.payload.id] = {
                ...stateList,
                list: [..._.without(stateList.list, action.payload.value)],
            };
            return {
                ...state,
            };
        case ListBoxActions.clear:
            state[action.payload.id] = {
                ...stateList,
                list: [],
            };
            return {
                ...state,
            };
        default:
            return state;
    }
};
