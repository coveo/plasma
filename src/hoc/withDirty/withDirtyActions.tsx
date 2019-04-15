import {IReduxAction} from '../../utils/ReduxUtils';

export const WithDirtyActionTypes = {
    toggle: 'TOGGLE_DIRTY_COMPONENT',
};

export interface IWithEditingPayload {
    id: string;
    isDirty: boolean;
}

const toggle = (id: string, isDirty: boolean): IReduxAction<IWithEditingPayload> => ({
    type: WithDirtyActionTypes.toggle,
    payload: {id, isDirty},
});

export const WithDirtyActions = {
    toggle,
};
