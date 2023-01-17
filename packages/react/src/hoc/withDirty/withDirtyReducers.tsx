import * as _ from 'underscore';
import {IReduxActionsPayload} from '../../PlasmaState.js';
import {ComponentId} from '../../utils/ComponentUtils.js';
import {IReduxAction} from '../../utils/ReduxUtils.js';
import {WithDirtyActionTypes} from './withDirtyActions.js';

export const dirtyComponentsInitialState: ComponentId[] = [];

export const withDirtyReducer = (
    state: ComponentId[] = dirtyComponentsInitialState,
    action: IReduxAction<IReduxActionsPayload>
): ComponentId[] => {
    switch (action.type) {
        case WithDirtyActionTypes.toggle:
            return action.payload.isDirty
                ? _.uniq([...state, action.payload.id])
                : _.reject(state, (id: ComponentId) => id === action.payload.id);
        default:
            return state;
    }
};
