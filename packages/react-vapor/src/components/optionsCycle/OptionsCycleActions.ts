import {IReduxAction} from '../../utils/ReduxUtils';

export const OptionsCycleActions = {
    add: 'ADD_OPTIONS_CYCLE',
    remove: 'REMOVE_OPTIONS_CYCLE',
    change: 'CHANGE_OPTIONS_CYCLE',
};

export interface IOptionsCyclePayload {
    id: string;
}

export interface IChangeOptionsCyclePayload extends IOptionsCyclePayload {
    currentOption: number;
}

export const addOptionsCycle = (id: string, currentOption: number = 0): IReduxAction<IChangeOptionsCyclePayload> => ({
    type: OptionsCycleActions.add,
    payload: {
        id,
        currentOption,
    },
});

export const removeOptionsCycle = (id: string): IReduxAction<IOptionsCyclePayload> => ({
    type: OptionsCycleActions.remove,
    payload: {
        id,
    },
});

export const changeOptionsCycle = (id: string, currentOption: number): IReduxAction<IChangeOptionsCyclePayload> => ({
    type: OptionsCycleActions.change,
    payload: {
        id,
        currentOption,
    },
});
