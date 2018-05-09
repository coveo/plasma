import { IReduxAction } from '../../utils/ReduxUtils';

export interface IGroupableCheckboxActionPayload {
  id: string;
  checked?: boolean;
  isParent?: boolean;
  parentId?: string;
}

export const GroupableCheckboxActions = {
  toggleGroup: 'TOGGLE_GROUP_CHECKBOX',
  addGroup: 'ADD_GROUP_CHECKBOX',
  removeGroup: 'REMOVE_GROUP_CHECKBOX',
};

export const toggleGroupedCheckbox = (id: string, parentId: string, isParent: boolean = false): IReduxAction<IGroupableCheckboxActionPayload> => ({
  type: GroupableCheckboxActions.toggleGroup,
  payload: {
    id,
    parentId,
    isParent,
  },
});

export const addGroupedCheckbox = (id: string, checked: boolean, parentId: string, isParent: boolean = false): IReduxAction<IGroupableCheckboxActionPayload> => ({
  type: GroupableCheckboxActions.addGroup,
  payload: {
    id,
    checked,
    parentId,
    isParent,
  },
});

export const removeGroupedCheckbox = (id: string, parentId: string): IReduxAction<IGroupableCheckboxActionPayload> => ({
  type: GroupableCheckboxActions.removeGroup,
  payload: {
    id,
    parentId,
  },
});
