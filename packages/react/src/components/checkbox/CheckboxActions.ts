import {IReduxAction} from '../../utils/ReduxUtils.js';

export interface ICheckboxActionPayload {
    id: string;
    checked?: boolean;
    disabled?: boolean;
}

export const CheckboxActions = {
    toggle: 'TOGGLE_CHECKBOX',
    add: 'ADD_CHECKBOX',
    remove: 'REMOVE_CHECKBOX',
    disable: 'DISABLE_CHECKBOX',
};

export const toggleCheckbox = (id: string, checked?: boolean): IReduxAction<ICheckboxActionPayload> => ({
    type: CheckboxActions.toggle,
    payload: {
        id,
        checked,
    },
});

export const addCheckbox = (
    id: string,
    checked: boolean,
    disabled?: boolean
): IReduxAction<ICheckboxActionPayload> => ({
    type: CheckboxActions.add,
    payload: {
        id,
        checked,
        disabled,
    },
});

export const removeCheckbox = (id: string): IReduxAction<ICheckboxActionPayload> => ({
    type: CheckboxActions.remove,
    payload: {
        id,
    },
});

const disableCheckbox = (id: string, disabled: boolean): IReduxAction<ICheckboxActionPayload> => ({
    type: CheckboxActions.disable,
    payload: {
        id,
        disabled,
    },
});

export const CheckboxReduxActions = {
    toggleCheckbox,
    addCheckbox,
    removeCheckbox,
    disableCheckbox,
};
