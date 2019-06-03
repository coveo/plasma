import * as _ from 'underscore';

import {IReduxAction} from '../../utils/ReduxUtils';
import {PopoverActions, PopoverPayload} from './PopoverActions';

export interface PopoverState {
    id: string;
    isOpen: boolean;
}

export const popoverInitialState: PopoverState = {
    id: undefined,
    isOpen: undefined,
};

export const popoversInitialState: PopoverState[] = [];

export const popoversReducer = (
    state: PopoverState[] = popoversInitialState,
    action: IReduxAction<PopoverPayload>,
): PopoverState[] => {
    switch (action.type) {
        case PopoverActions.add:
            return [
                ...state,
                action.payload as PopoverState,
            ];
        case PopoverActions.remove:
            return _.reject(state, (popover: PopoverState) => popover.id === action.payload.id);
        case PopoverActions.setIsOpen:
            return state.map((popover: PopoverState) => popover.id === action.payload.id
                ? action.payload as PopoverState
                : popover,
            );
        default:
            return state;
    }
};
