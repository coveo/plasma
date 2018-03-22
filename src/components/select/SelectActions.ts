import {IReduxAction} from '../../utils/ReduxUtils';

export const SelectActions = {
    add: 'ADD_SELECT',
    remove: 'REMOVE_SELECT',
    toggle: 'TOGGLE_SELECT',
};

export interface ISelectPayload {
    id: string;
    open?: boolean;
}

export const addSelect = (id: string): IReduxAction<ISelectPayload> => ({
    type: SelectActions.add,
    payload: {id},
});

export const removeSelect = (id: string): IReduxAction<ISelectPayload> => ({
    type: SelectActions.remove,
    payload: {id},
});

export const toggleSelect = (id: string, open?: boolean): IReduxAction<ISelectPayload> => ({
    type: SelectActions.toggle,
    payload: {id, open},
});
