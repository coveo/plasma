import * as _ from 'underscore';
import {IReduxActionsPayload} from '../../ReactVapor';
import {ComponentId} from '../../utils/ComponentUtils';
import {IReduxAction} from '../../utils/ReduxUtils';
import {WithDirtyActionTypes} from './withDirtyActions';

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
