import * as _ from 'underscore';
import {IReduxActionsPayload} from '../../ReactVapor';
import {ComponentID} from '../../utils/ComponentUtils';
import {IReduxAction} from '../../utils/ReduxUtils';
import {WithEditingActions} from './withEditingActions';

export const dirtyComponentsInitialState: ComponentID[] = [];

export const withEditingReducer = (
    state: ComponentID[] = dirtyComponentsInitialState,
    action: IReduxAction<IReduxActionsPayload>,
): ComponentID[] => {
    switch (action.type) {
        case WithEditingActions.toggle:
            return action.payload.isDirty
                ? _.uniq([...state, action.payload.id])
                : _.reject(state, (id: ComponentID) => id === action.payload.id);
        default:
            return state;
    }
};
