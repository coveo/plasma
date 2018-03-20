import {IReduxAction} from '../../utils/ReduxUtils';

export const FlippableAction = {
    add: 'ADD_FLIPPABLE_CARD',
    remove: 'REMOVE_FLIPPABLE_CARD',
    flip: 'FLIP',
    unflip: 'UNFLIP',
};

export interface IFlippablePayload {
    id: string;
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

export const flip = (id: string): IReduxAction<IFlippablePayload> => ({
    type: FlippableAction.flip,
    payload: {
        id,
    },
});

export const unflip = (id: string): IReduxAction<IFlippablePayload> => ({
    type: FlippableAction.unflip,
    payload: {
        id,
    },
});
