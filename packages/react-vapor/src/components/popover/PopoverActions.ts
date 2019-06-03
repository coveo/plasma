import {BasePayload, IReduxAction} from '../../utils/ReduxUtils';

export const PopoverActions = {
    add: 'ADD_POPOVER',
    remove: 'REMOVE_POPOVER',
    setIsOpen: 'SET_POPOVER_ISOPEN',
};

export interface PopoverPayload extends BasePayload {
    isOpen?: boolean;
}

export const addPopover = (id: string, isOpen: boolean): IReduxAction<PopoverPayload> => ({
    type: PopoverActions.add,
    payload: {id, isOpen},
});

export const removePopover = (id: string): IReduxAction<PopoverPayload> => ({
    type: PopoverActions.remove,
    payload: {id},
});

export const setPopoverIsOpen = (id: string, isOpen: boolean): IReduxAction<PopoverPayload> => ({
    type: PopoverActions.setIsOpen,
    payload: {id, isOpen},
});
