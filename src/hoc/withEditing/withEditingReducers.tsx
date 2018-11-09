import * as _ from 'underscore';
import {IReduxActionsPayload} from '../../ReactVapor';
import {ComponentId} from '../../utils/ComponentUtils';
import {IReduxAction} from '../../utils/ReduxUtils';
import {WithEditingActions} from './withEditingActions';

export const dirtyComponentsInitialState: ComponentId[] = [];

export const withEditingReducer = (
    state: ComponentId[] = dirtyComponentsInitialState,
    action: IReduxAction<IReduxActionsPayload>,
): ComponentId[] => {
    switch (action.type) {
        case WithEditingActions.toggle:
            return action.payload.isDirty
                ? _.uniq([...state, action.payload.id])
                : _.reject(state, (id: ComponentId) => id === action.payload.id);
        default:
            return state;
    }
};
