import * as _ from 'underscore';

import {IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction} from '../../utils/ReduxUtils';
import {FlippableAction, IFlippableChangeSidePayload, IFlippablePayload} from './FlippableActions';

export interface IFlippableState {
    id: string;
    flipped: boolean;
}

export const flippableInitialState: IFlippableState = {
    id: undefined,
    flipped: false,
};

export const flippablesInitialState: IFlippableState[] = [];

export const flippableReducer = (
    state: IFlippableState = flippableInitialState,
    action: IReduxAction<any>
): IFlippableState => {
    switch (action.type) {
        case FlippableAction.add:
            return addFlippable(state, action);
        case FlippableAction.changeSide:
            return changeSide(state, action);
        default:
            return state;
    }
};

export const flippablesReducer = (
    state: IFlippableState[] = flippablesInitialState,
    action: IReduxAction<IReduxActionsPayload>
): IFlippableState[] => {
    switch (action.type) {
        case FlippableAction.add:
            return [...state, flippableReducer(undefined, action)];
        case FlippableAction.remove:
            return _.reject(state, (flippable: IFlippableState) => {
                return action.payload.id === flippable.id;
            });
        case FlippableAction.changeSide:
            return state.map((flippable: IFlippableState) => flippableReducer(flippable, action));
        default:
            return state;
    }
};

const addFlippable = (state: IFlippableState, action: IReduxAction<IFlippablePayload>): IFlippableState => ({
    id: action.payload.id,
    flipped: state.flipped,
});

const changeSide = (state: IFlippableState, action: IReduxAction<IFlippableChangeSidePayload>): IFlippableState => {
    return state.id !== action.payload.id
        ? state
        : _.extend({}, state, {
              flipped: action.payload.flipped,
          });
};
