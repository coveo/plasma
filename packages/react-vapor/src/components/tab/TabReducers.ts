import * as _ from 'underscore';
import {IReduxAction} from '../../utils/ReduxUtils';
import {ITabActionPayload, TabAction} from './TabActions';

export const DEFAULT_GROUP_ID: string = 'default';

export interface ITabState {
    id: string;
    isSelected: boolean;
}

export interface ITabGroupState {
    id: string;
    tabs: ITabState[];
}

export const tabInitialState: ITabState = {id: undefined, isSelected: false};
export const tabsInitialState: ITabState[] = [];
export const tabGroupInitialState: ITabGroupState = {id: undefined, tabs: []};
export const tabGroupsInitialState: ITabGroupState[] = [];

export const tabReducer = (state: ITabState = tabInitialState, action: IReduxAction<ITabActionPayload>): ITabState => {
    switch (action.type) {
        case TabAction.addTab:
            return {
                id: action.payload.id,
                isSelected: state.isSelected,
            };
        case TabAction.selectTab:
            return {
                id: state.id,
                isSelected: state.id === action.payload.id,
            };
        default:
            return state;
    }
};

export const tabsReducer = (
    state: ITabState[] = tabsInitialState,
    action: IReduxAction<ITabActionPayload>
): ITabState[] => {
    switch (action.type) {
        case TabAction.addTab:
            let isSelected = false;
            if (state.length === 0) {
                isSelected = true;
            }
            return [...state, tabReducer({id: undefined, isSelected}, action)];
        case TabAction.removeTab:
            return _.reject(state, (tab: ITabState) => {
                return action.payload.id === tab.id;
            });
        case TabAction.selectTab:
            return state.map((tab: ITabState) => tabReducer(tab, action));
        default:
            return state;
    }
};

export const tabGroupReducer = (
    state: ITabGroupState = tabGroupInitialState,
    action: IReduxAction<ITabActionPayload>
): ITabGroupState => {
    switch (action.type) {
        case TabAction.addTab:
        case TabAction.removeTab:
        case TabAction.selectTab:
            const groupId = action.payload.groupId ? action.payload.groupId : DEFAULT_GROUP_ID;
            if (state.id === groupId) {
                return {
                    id: groupId,
                    tabs: tabsReducer(state.tabs, action),
                };
            }
            return state;
        default:
            return state;
    }
};

const findGroup = (state: ITabGroupState[], id: string) => {
    return _.find(state, (group: ITabGroupState) => group.id === id);
};

export const tabGroupsReducer = (
    state: ITabGroupState[] = tabGroupsInitialState,
    action: IReduxAction<ITabActionPayload>
): ITabGroupState[] => {
    switch (action.type) {
        case TabAction.addTab:
            const addgroupId = action.payload.groupId ? action.payload.groupId : DEFAULT_GROUP_ID;
            const addgroup = findGroup(state, addgroupId);
            if (addgroup) {
                return state.map((tabGroup: ITabGroupState) => tabGroupReducer(tabGroup, action));
            }
            return [...state, tabGroupReducer({id: addgroupId, tabs: []}, action)];
        case TabAction.removeTab:
            const groupId = action.payload.groupId ? action.payload.groupId : DEFAULT_GROUP_ID;
            const group = findGroup(state, groupId);
            if (group) {
                const groups = state.map((tabGroup: ITabGroupState) => tabGroupReducer(tabGroup, action));
                return _.reject(groups, (tabGroup: ITabGroupState) => tabGroup.tabs.length === 0);
            }
            return state;
        case TabAction.selectTab:
            return state.map((tabGroup: ITabGroupState) => tabGroupReducer(tabGroup, action));
        default:
            return state;
    }
};
