import * as _ from 'underscore';

import {IReduxAction} from '../../../Index';
import {FlippableActions, IFlippablePayload} from '../FlippableActions';
import {
    flippableInitialState,
    flippableReducer,
    flippablesInitialState,
    flippablesReducer,
    IFlippableState,
} from '../FlippableReducers';

describe('Flippable', () => {
    const GENERIC_ACTION: IReduxAction<IFlippablePayload> = {
        type: 'DO_SOMETHING',
        payload: {
            id: 'some-flippable',
        },
    };

    const BASE_FLIPPABLE_STATE: IFlippableState = {
        id: 'some-flippable',
        flipped: false,
    };

    const buildAction = (type: string, payload: IFlippablePayload): IReduxAction<IFlippablePayload> => ({
        type: type,
        payload: payload,
    });

    describe('flippablesReducer', () => {
        const filterById = (actionId: string) => {
            return (flippable: IFlippableState) => flippable.id === actionId;
        };

        it('should return the default state if the action is undefined and the state is undefined', () => {
            const flippablesState: IFlippableState[] = flippablesReducer(undefined, GENERIC_ACTION);

            expect(flippablesState).toBe(flippablesInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldFlippables: IFlippableState[] = [_.extend({}, BASE_FLIPPABLE_STATE)];
            const newFlippables: IFlippableState[] = flippablesReducer(oldFlippables, GENERIC_ACTION);

            expect(newFlippables).toBe(oldFlippables);
        });

        it('should return the old state with one more IFlippableState when the action is "ADD_FLIPPABLE', () => {
            const oldFlippables: IFlippableState[] = flippablesInitialState;
            const action: IReduxAction<IFlippablePayload> = {
                type: FlippableActions.add,
                payload: {
                    id: 'my-flippable-poney',
                },
            };
            const newFlippables: IFlippableState[] = flippablesReducer(oldFlippables, action);

            expect(newFlippables.length).toBe(oldFlippables.length + 1);
            expect(newFlippables.filter(filterById(action.payload.id)).length).toBe(1);
        });

        it('should return the old state with the specified flippable removed when the action is "REMOVE_FLIPPABLE"', () => {
            const oldFlippables: IFlippableState[] = [
                _.extend({}, BASE_FLIPPABLE_STATE),
                _.extend({}, BASE_FLIPPABLE_STATE, {id: 'flipping-cool'}),
                _.extend({}, BASE_FLIPPABLE_STATE, {id: 'bob-the-flippable'}),
            ];
            const action: IReduxAction<IFlippablePayload> = {
                type: FlippableActions.remove,
                payload: {
                    id: 'flipping-cool',
                },
            };
            const newFlippables: IFlippableState[] = flippablesReducer(oldFlippables, action);

            expect(newFlippables.length).toBe(oldFlippables.length - 1);
            expect(newFlippables.filter(filterById(action.payload.id)).length).toBe(0);
        });

        it('should return the old state with when the action is "REMOVE_FLIPPABLE" and the flipable id ' +
            `doesn't exist`, () => {
                const oldFlippables: IFlippableState[] = [
                    _.extend({}, BASE_FLIPPABLE_STATE),
                    _.extend({}, BASE_FLIPPABLE_STATE, {id: 'flipping-cool'}),
                    _.extend({}, BASE_FLIPPABLE_STATE, {id: 'bob-the-flippable'}),
                ];
                const action: IReduxAction<IFlippablePayload> = {
                    type: FlippableActions.remove,
                    payload: {
                        id: 'some-random-flippable',
                    },
                };
                const newFlippables: IFlippableState[] = flippablesReducer(oldFlippables, action);

                expect(newFlippables.length).toBe(oldFlippables.length);
                expect(newFlippables.filter(filterById(action.payload.id)).length).toBe(0);
            });

        it('should set the flipped state prop to true when the action is "FLIP" and the flippable id ' +
            'is the action payload id', () => {
                const oldFlippables: IFlippableState[] = [
                    _.extend({}, BASE_FLIPPABLE_STATE),
                    _.extend({}, BASE_FLIPPABLE_STATE, {id: 'flipping-cool'}),
                    _.extend({}, BASE_FLIPPABLE_STATE, {id: 'bob-the-flippable'}),
                ];
                const action: IReduxAction<IFlippablePayload> = {
                    type: FlippableActions.flip,
                    payload: {
                        id: 'flipping-cool',
                    },
                };
                const newFlippables: IFlippableState[] = flippablesReducer(oldFlippables, action);

                expect(newFlippables.length).toBe(oldFlippables.length);
                expect(newFlippables.filter(filterById(action.payload.id))[0].flipped).toBe(true);
                expect(newFlippables.filter(filterById(BASE_FLIPPABLE_STATE.id))[0].flipped).toBe(false);
            });

        it('should set the flipped state to false when the action is "UNFLIP" and the flippable id ' +
            'is the action payload id', () => {
                const oldFlippables: IFlippableState[] = [
                    _.extend({}, BASE_FLIPPABLE_STATE, {flipped: true}),
                    _.extend({}, BASE_FLIPPABLE_STATE, {id: 'flipping-cool', flipped: true}),
                    _.extend({}, BASE_FLIPPABLE_STATE, {id: 'bob-the-flippable'}),
                ];
                const action: IReduxAction<IFlippablePayload> = {
                    type: FlippableActions.unflip,
                    payload: {
                        id: 'flipping-cool',
                    },
                };
                const newFlippables: IFlippableState[] = flippablesReducer(oldFlippables, action);

                expect(newFlippables.length).toBe(oldFlippables.length);
                expect(newFlippables.filter(filterById(action.payload.id))[0].flipped).toBe(false);
                expect(newFlippables.filter(filterById(BASE_FLIPPABLE_STATE.id))[0].flipped).toBe(true);
            });
    });

    describe('flippableReducer', () => {
        it('should return the default state if the action is not defined and the state is undefined', () => {
            const flippableState: IFlippableState = flippableReducer(undefined, GENERIC_ACTION);

            expect(flippableState).toBe(flippableInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const newFlippable: IFlippableState = flippableReducer(BASE_FLIPPABLE_STATE, GENERIC_ACTION);

            expect(newFlippable).toBe(BASE_FLIPPABLE_STATE);
        });

        it('should return a new flipapble with the specified id when the action is "ADD_FLIPPABLE"', () => {
            const action = buildAction(FlippableActions.add, {
                id: 'flippy-the-flippable',
            });
            const newFlippable = flippableReducer(BASE_FLIPPABLE_STATE, action);

            expect(newFlippable.id).toBe(action.payload.id);
            expect(newFlippable.flipped).toBe(false);
        });

        it('should return the old state when the action is "FLIP" and the id does not match', () => {
            const action = buildAction(FlippableActions.flip, {
                id: 'flippy-the-flippable',
            });
            const newFlippable = flippableReducer(BASE_FLIPPABLE_STATE, action);

            expect(newFlippable).toBe(BASE_FLIPPABLE_STATE);
        });

        it('should return the old state when the action is "UNFLIP" and the id does not match', () => {
            const action = buildAction(FlippableActions.unflip, {
                id: 'flippy-the-flippable',
            });
            const newFlippable = flippableReducer(BASE_FLIPPABLE_STATE, action);

            expect(newFlippable).toBe(BASE_FLIPPABLE_STATE);
        });

        it('should return a new state with flipped set to true when the action is "FLIP"', () => {
            const action = buildAction(FlippableActions.flip, {
                id: BASE_FLIPPABLE_STATE.id,
            });
            const newFlippable = flippableReducer(BASE_FLIPPABLE_STATE, action);

            expect(newFlippable).not.toBe(BASE_FLIPPABLE_STATE);
            expect(newFlippable.flipped).toBe(true);
        });

        it('should return a new state with flipped set to true when the action is "UNFLIP"', () => {
            const oldFlippable: IFlippableState = {
                id: 'flippy-the-flippable',
                flipped: true,
            };
            const action = buildAction(FlippableActions.unflip, {
                id: oldFlippable.id,
            });
            const newFlippable = flippableReducer(BASE_FLIPPABLE_STATE, action);

            expect(newFlippable).not.toBe(oldFlippable);
            expect(newFlippable.flipped).toBe(false);
        });
    });
});
