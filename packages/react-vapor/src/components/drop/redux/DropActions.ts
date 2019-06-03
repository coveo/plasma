import {IReduxAction} from '../../../utils/ReduxUtils';

export const DefaultGroupIds = {
    default: 'default',
    tooltip: 'tooltip',
    dropdown: 'dropdown',
};

export const DropReducerActions = {
    toggle: 'DROP_TOGGLE',
};

export interface IDropPayload {
    id: string;
    isOpen?: boolean;
    groupId?: string;
}

const toggle = (id: string, groupId: string, isOpen?: boolean): IReduxAction<IDropPayload> => ({
    type: DropReducerActions.toggle,
    payload: {
        id,
        isOpen,
        groupId,
    },
});

export const DropActions = {
    toggle,
};
