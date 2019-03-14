import {IReduxAction} from '../../../utils/ReduxUtils';

export const DropReducerActions = {
    toggle: 'DROP_TOGGLE',
};

export interface IDropPayload {
    id: string;
    isOpen?: boolean;
}

const toggle = (id: string, isOpen?: boolean): IReduxAction<IDropPayload> => ({
    type: DropReducerActions.toggle,
    payload: {
        id,
        isOpen,
    },
});

export const DropActions = {
    toggle,
};
