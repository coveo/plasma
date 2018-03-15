import * as _ from 'underscore';

import { IReduxActionsPayload } from '../../ReactVapor';
import { IReduxAction } from '../../utils/ReduxUtils';
import { FlippableActions, IFlippablePayload } from './FlippableActions';

export interface IFlippableState {
    id: string;
    flipped: boolean;
}

export const flippableInitialState: IFlippableState = {
    id: undefined,
    flipped: false,
};

export const flippablesInitialState: IFlippableState[] = [];

export const flippableReducer = (state: IFlippableState = flippableInitialState,
                                 action: IReduxAction<any>): IFlippableState => {
    switch (action.type) {
        case FlippableActions.add:
        return addFlippable(state, action);
        case FlippableActions.flip:
            return flipCard(state, action);
        case FlippableActions.unflip:
            return unflipCard(state, action);
        default:
            return state;
    }
};

export const flippablesReducer = (state: IFlippableState[] = flippablesInitialState,
                                  action: IReduxAction<IReduxActionsPayload>): IFlippableState[] => {
    switch (action.type) {
        case FlippableActions.add:
            return [
                ...state,
                flippableReducer(undefined, action),
            ];
        case FlippableActions.remove:
            return _.reject(state, (flippable: IFlippableState) => {
                return action.payload.id === flippable.id;
            });
        case FlippableActions.flip:
        case FlippableActions.unflip:
            return state.map((flippable: IFlippableState) =>
                flippableReducer(flippable, action),
            );
        default:
            return state;
    }
};

const addFlippable = (state: IFlippableState, action: IReduxAction<IFlippablePayload>): IFlippableState => ({
    id: action.payload.id,
    flipped: state.flipped,
});

const flipCard = (state: IFlippableState, action: IReduxAction<IFlippablePayload>): IFlippableState => {
    return state.id !== action.payload.id ? state : _.extend({}, state, {
        flipped: true,
    });
};

const unflipCard = (state: IFlippableState, action: IReduxAction<IFlippablePayload>): IFlippableState => {
    return state.id !== action.payload.id ? state : _.extend({}, state, {
        flipped: false,
    });
};
