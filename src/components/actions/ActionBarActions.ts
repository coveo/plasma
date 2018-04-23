import {IReduxAction} from '../../utils/ReduxUtils';
import {IActionOptions} from './Action';

export interface IActionBarPayload {
    id: string;
    yPosition?: number;
}

export interface IChangeActionBarActionsPayload extends IActionBarPayload {
    actions: IActionOptions[];
}

export const ActionBarActions = {
    add: 'ADD_ACTION_BAR',
    remove: 'REMOVE_ACTION_BAR',
    addActions: 'ADD_ACTIONS',
    setYPosition: 'SET_TABLE_Y_POSITION',
};

export const addActionBar = (id: string): IReduxAction<IActionBarPayload> => ({
    type: ActionBarActions.add,
    payload: {
        id,
    },
});

export const removeActionBar = (id: string): IReduxAction<IActionBarPayload> => ({
    type: ActionBarActions.remove,
    payload: {
        id,
    },
});

export const addActionsToActionBar = (id: string, actions: IActionOptions[]): IReduxAction<IChangeActionBarActionsPayload> => ({
    type: ActionBarActions.addActions,
    payload: {
        id,
        actions,
    },
});

export const setYPosition = (id: string, yPosition: number): IReduxAction<IActionBarPayload> => ({
    type: ActionBarActions.setYPosition,
    payload: {
        id,
        yPosition,
    },
});
