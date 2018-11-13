import * as _ from 'underscore';
import {IStringListPayload, StringListActions} from '../../reusableState/customList/StringListActions';
import {IStringListState, stringListCompositeState} from '../../reusableState/customList/StringListReducers';
import {IReduxAction} from '../../utils/ReduxUtils';
import {IListBoxPayload, ListBoxActions} from '../listBox/ListBoxActions';

export type ISelectWithFilterCompositeState = {[id: string]: ISelectWithFilterState};

export interface ISelectWithFilterState extends IStringListState {}

export interface ISelectWithFilterPayload extends IStringListPayload, IListBoxPayload {}

export const selectWithFilterInitialState: ISelectWithFilterCompositeState = {};

export const selectWithFilterCompositeState = (
    state: ISelectWithFilterCompositeState = selectWithFilterInitialState,
    action: IReduxAction<ISelectWithFilterPayload>,
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
            return {
                ...state,
                [action.payload.id]: {
                    ...stateList,
                    list: action.payload.multi ? _.uniq([...stateList.list, action.payload.value]) : [action.payload.value],
                },
            };
        case ListBoxActions.unselect:
            return {
                ...state,
                [action.payload.id]: {
                    ...stateList,
                    list: [..._.without(stateList.list, action.payload.value)],
                },
            };
        case ListBoxActions.clear:
            return {
                ...state,
                [action.payload.id]: {
                    ...stateList,
                    list: [],
                },
            };
        default:
            return state;
    }
};
