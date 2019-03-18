import {IReduxAction} from '../../../utils/ReduxUtils';

export const DefaultGroups = {
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
    group?: string;
}

const toggle = (id: string, group: string, isOpen?: boolean): IReduxAction<IDropPayload> => ({
    type: DropReducerActions.toggle,
    payload: {
        id,
        isOpen,
        group,
    },
});

export const DropActions = {
    toggle,
};
