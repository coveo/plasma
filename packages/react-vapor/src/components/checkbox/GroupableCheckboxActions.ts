import {IReduxAction} from '../../utils/ReduxUtils';

export interface IGroupableCheckboxActionPayload {
    id: string;
    checked?: boolean;
    isGroupable?: boolean;
    isParent?: boolean;
    parentId?: string;
    disabled?: boolean;
    disabledAll?: boolean;
}

export const GroupableCheckboxActions = {
    toggleGroup: 'TOGGLE_GROUP_CHECKBOX',
    addGroup: 'ADD_GROUP_CHECKBOX',
    removeGroup: 'REMOVE_GROUP_CHECKBOX',
    disabledGroup: 'DISABLED_GROUP_CHECKBOX',
    disabledAllGroup: 'DISABLED_ALL_GROUP_CHECKBOX',
};

export const toggleGroupedCheckbox = (
    id: string,
    parentId: string,
    isParent: boolean = false
): IReduxAction<IGroupableCheckboxActionPayload> => ({
    type: GroupableCheckboxActions.toggleGroup,
    payload: {
        id,
        parentId,
        isParent,
    },
});

export const addGroupedCheckbox = (
    id: string,
    checked: boolean,
    disabled: boolean,
    parentId: string,
    isParent: boolean = false
): IReduxAction<IGroupableCheckboxActionPayload> => ({
    type: GroupableCheckboxActions.addGroup,
    payload: {
        id,
        checked,
        disabled,
        parentId,
        isParent,
    },
});

export const removeGroupedCheckbox = (
    id: string,
    parentId: string,
    isParent: boolean = false
): IReduxAction<IGroupableCheckboxActionPayload> => ({
    type: GroupableCheckboxActions.removeGroup,
    payload: {
        id,
        parentId,
        isParent,
    },
});

export const toggleDisabledGroupedCheckbox = (
    id: string,
    parentId: string,
    isParent: boolean = false
): IReduxAction<IGroupableCheckboxActionPayload> => ({
    type: GroupableCheckboxActions.disabledGroup,
    payload: {
        id,
        parentId,
        isParent,
    },
});

export const toggleDisabledAllGroupedCheckbox = (
    id: string,
    parentId?: string,
    disabled?: boolean
): IReduxAction<IGroupableCheckboxActionPayload> => ({
    type: GroupableCheckboxActions.disabledAllGroup,
    payload: {
        id,
        parentId,
        disabled,
    },
});
