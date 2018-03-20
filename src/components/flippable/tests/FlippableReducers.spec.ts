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

    const FLIPPED_FLIPPABLE: IFlippableState = {
        id: 'flippy-the-flippable',
        flipped: true,
    };

    const ANOTHER_FLIPPED_FLIPPABLE: IFlippableState = {
        id: 'flippo-the-floppable',
        flipped: true,
    };

    const UNFLIPPED_FLIPPABLE: IFlippableState = {
        id: 'flippy-the-unflippable',
        flipped: false,
    };

    const ANOTHER_UNFLIPPED_FLIPPABLE: IFlippableState = {
        id: 'flippo-the-unfloppable',
        flipped: false,
    };

    const SOME_FLIPPABLES: IFlippableState[] = [
        FLIPPED_FLIPPABLE,
        UNFLIPPED_FLIPPABLE,
        ANOTHER_FLIPPED_FLIPPABLE,
        ANOTHER_UNFLIPPED_FLIPPABLE,
    ];

    const GENERIC_ACTION: IReduxAction<IFlippablePayload> = {
        type: 'DO_SOMETHING',
        payload: {
            id: UNFLIPPED_FLIPPABLE.id,
        },
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
            const newFlippables: IFlippableState[] = flippablesReducer(SOME_FLIPPABLES, GENERIC_ACTION);

            expect(newFlippables).toBe(SOME_FLIPPABLES);
        });

        it('should return the old state with one more IFlippableState when the action is "ADD_FLIPPABLE', () => {
            const action = buildAction(FlippableActions.add, {id: 'new-flippable'});
            const newFlippables: IFlippableState[] = flippablesReducer(SOME_FLIPPABLES, action);

            expect(newFlippables.length).toBe(SOME_FLIPPABLES.length + 1);
            expect(newFlippables.filter(filterById(action.payload.id)).length).toBe(1);
            expect(newFlippables.filter(filterById(action.payload.id))[0].id).toBe(action.payload.id);
        });

        it('should return the old state with the specified flippable removed when the action is "REMOVE_FLIPPABLE"', () => {
            const action = buildAction(FlippableActions.remove, {id: FLIPPED_FLIPPABLE.id});
            const newFlippables: IFlippableState[] = flippablesReducer(SOME_FLIPPABLES, action);

            expect(newFlippables.length).toBe(SOME_FLIPPABLES.length - 1);
            expect(newFlippables.filter(filterById(action.payload.id)).length).toBe(0);
        });

        it('should return the old state with when the action is "REMOVE_FLIPPABLE" and the flipable id ' +
            `doesn't exist`, () => {
                const action = buildAction(FlippableActions.remove, {id: 'some-random-flippable'});
                const newFlippables: IFlippableState[] = flippablesReducer(SOME_FLIPPABLES, action);

                expect(newFlippables.length).toBe(SOME_FLIPPABLES.length);
                expect(newFlippables.filter(filterById(action.payload.id)).length).toBe(0);
            });

        it('should set the flipped state prop to true when the action is "FLIP" and the flippable id ' +
            'match the action payload id', () => {
                const action = buildAction(FlippableActions.flip, {id: UNFLIPPED_FLIPPABLE.id});
                const newFlippables: IFlippableState[] = flippablesReducer(SOME_FLIPPABLES, action);

                expect(newFlippables.length).toBe(SOME_FLIPPABLES.length);
                expect(newFlippables.filter(filterById(action.payload.id))[0].flipped).toBe(true);
                expect(newFlippables.filter(filterById(ANOTHER_UNFLIPPED_FLIPPABLE.id))[0].flipped).toBe(false);
            });

        it('should set the flipped state to false when the action is "UNFLIP" and the flippable id ' +
            'match the action payload id', () => {
                const action = buildAction(FlippableActions.unflip, {id: FLIPPED_FLIPPABLE.id});
                const newFlippables: IFlippableState[] = flippablesReducer(SOME_FLIPPABLES, action);

                expect(newFlippables.length).toBe(SOME_FLIPPABLES.length);
                expect(newFlippables.filter(filterById(action.payload.id))[0].flipped).toBe(false);
                expect(newFlippables.filter(filterById(ANOTHER_FLIPPED_FLIPPABLE.id))[0].flipped).toBe(true);
            });
    });

    describe('flippableReducer', () => {
        it('should return the default state if the action is not defined and the state is undefined', () => {
            const flippableState: IFlippableState = flippableReducer(undefined, GENERIC_ACTION);

            expect(flippableState).toBe(flippableInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const newFlippable: IFlippableState = flippableReducer(UNFLIPPED_FLIPPABLE, GENERIC_ACTION);

            expect(newFlippable).toBe(UNFLIPPED_FLIPPABLE);
        });

        it('should return a new flipapble with the specified id when the action is "ADD_FLIPPABLE"', () => {
            const action = buildAction(FlippableActions.add, {id: 'new-flippable'});
            const newFlippable = flippableReducer(UNFLIPPED_FLIPPABLE, action);

            expect(newFlippable.id).toBe(action.payload.id);
            expect(newFlippable.flipped).toBe(false);
        });

        it('should return the old state when the action is "FLIP" and the id does not match', () => {
            const action = buildAction(FlippableActions.flip, {id: ANOTHER_UNFLIPPED_FLIPPABLE.id});
            const newFlippable = flippableReducer(UNFLIPPED_FLIPPABLE, action);

            expect(newFlippable).toBe(UNFLIPPED_FLIPPABLE);
        });

        it('should return the old state when the action is "UNFLIP" and the id does not match', () => {
            const action = buildAction(FlippableActions.unflip, {id: ANOTHER_FLIPPED_FLIPPABLE.id});
            const newFlippable = flippableReducer(FLIPPED_FLIPPABLE, action);

            expect(newFlippable).toBe(FLIPPED_FLIPPABLE);
        });

        it('should return a new state with flipped set to true when the action is "FLIP"', () => {
            const action = buildAction(FlippableActions.flip, {id: UNFLIPPED_FLIPPABLE.id});
            const newFlippable = flippableReducer(UNFLIPPED_FLIPPABLE, action);

            expect(newFlippable).not.toBe(UNFLIPPED_FLIPPABLE);
            expect(newFlippable.flipped).toBe(true);
        });

        it('should return a new state with flipped set to true when the action is "UNFLIP"', () => {
            const action = buildAction(FlippableActions.unflip, {id: FLIPPED_FLIPPABLE.id});
            const newFlippable = flippableReducer(FLIPPED_FLIPPABLE, action);

            expect(newFlippable).not.toBe(FLIPPED_FLIPPABLE);
            expect(newFlippable.flipped).toBe(false);
        });
    });
});
