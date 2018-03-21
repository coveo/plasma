import {IReduxAction} from '../../utils/ReduxUtils';

export const FlippableAction = {
    add: 'ADD_FLIPPABLE',
    remove: 'REMOVE_FLIPPABLE',
    changeSide: 'CHANGE_FLIPPABLE_SIDE',
};

export interface IFlippablePayload {
    id: string;
}

export interface IFlippableChangeSidePayload extends IFlippablePayload {
    flipped: boolean;
}

export const addFlippable = (id: string): IReduxAction<IFlippablePayload> => ({
    type: FlippableAction.add,
    payload: {
        id,
    },
});

export const removeFlippable = (id: string): IReduxAction<IFlippablePayload> => ({
    type: FlippableAction.remove,
    payload: {
        id,
    },
});

export const changeFlippableSide = (id: string, flipped: boolean): IReduxAction<IFlippableChangeSidePayload> => ({
    type: FlippableAction.changeSide,
    payload: {
        id,
        flipped,
    },
});
