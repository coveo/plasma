import {IReduxAction} from '../../../utils/ReduxUtils';

export const DropReducerActions = {
    add: 'DROP_ADD',
    remove: 'DROP_REMOVE',
    toggle: 'DROP_TOGGLE',
};

export interface IDropPayload {
    id: string;
    isOpen?: boolean;
}

const add = (id: string, isOpen: boolean = false): IReduxAction<IDropPayload> => ({
    type: DropReducerActions.add,
    payload: {
        id,
        isOpen,
    },
});

const remove = (id: string): IReduxAction<IDropPayload> => ({
    type: DropReducerActions.remove,
    payload: {
        id,
    },
});

const toggle = (id: string, isOpen?: boolean): IReduxAction<IDropPayload> => ({
    type: DropReducerActions.toggle,
    payload: {
        id,
        isOpen,
    },
});

export const DropActions = {
    add,
    remove,
    toggle,
};
