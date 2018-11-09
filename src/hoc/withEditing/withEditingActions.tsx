import {IReduxAction} from '../../utils/ReduxUtils';

export const WithEditingActions = {
    toggle: 'TOGGLE_DIRTY_COMPONENT',
};

export interface IWithEditingPayload {
    id: string;
    isDirty: boolean;
}

export const toggleDirtyComponent = (id: string, isDirty: boolean): IReduxAction<IWithEditingPayload> => ({
    type: WithEditingActions.toggle,
    payload: {id, isDirty},
});
