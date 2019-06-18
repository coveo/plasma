import {IReduxAction} from '../../../utils/ReduxUtils';
import {addFlippable, changeFlippableSide, IFlippablePayload, removeFlippable} from '../FlippableActions';
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

        it('should return the old state with one more IFlippableState when the action is addFlippable', () => {
            const action = addFlippable('new-flippable');
            const newFlippables: IFlippableState[] = flippablesReducer(SOME_FLIPPABLES, action);

            expect(newFlippables.length).toBe(SOME_FLIPPABLES.length + 1);
            expect(newFlippables.filter(filterById(action.payload.id)).length).toBe(1);
            expect(newFlippables.filter(filterById(action.payload.id))[0].id).toBe(action.payload.id);
        });

        it('should return the old state with the specified flippable removed when the action is removeFlippable', () => {
            const action = removeFlippable(FLIPPED_FLIPPABLE.id);
            const newFlippables: IFlippableState[] = flippablesReducer(SOME_FLIPPABLES, action);

            expect(newFlippables.length).toBe(SOME_FLIPPABLES.length - 1);
            expect(newFlippables.filter(filterById(action.payload.id)).length).toBe(0);
        });

        it(
            'should return the old state with when the action is removeFlippable and the flipable id ' +
                `doesn't exist in the state`,
            () => {
                const action = removeFlippable('some-random-flippable');
                const newFlippables: IFlippableState[] = flippablesReducer(SOME_FLIPPABLES, action);

                expect(newFlippables.length).toBe(SOME_FLIPPABLES.length);
                expect(newFlippables.filter(filterById(action.payload.id)).length).toBe(0);
            }
        );

        it(
            'should set the flipped state prop to true when the action is changeFlippableSide, the flippable id ' +
                'match the action payload id and flipped payload is set to true',
            () => {
                const action = changeFlippableSide(UNFLIPPED_FLIPPABLE.id, true);
                const newFlippables: IFlippableState[] = flippablesReducer(SOME_FLIPPABLES, action);

                expect(newFlippables.length).toBe(SOME_FLIPPABLES.length);
                expect(newFlippables.filter(filterById(action.payload.id))[0].flipped).toBe(true);
                expect(newFlippables.filter(filterById(ANOTHER_UNFLIPPED_FLIPPABLE.id))[0].flipped).toBe(false);
            }
        );

        it(
            'should set the flipped state to false when the action is changeFlippableSide, the flippable id ' +
                'match the action payload id and flipped payload is set to false',
            () => {
                const action = changeFlippableSide(FLIPPED_FLIPPABLE.id, false);
                const newFlippables: IFlippableState[] = flippablesReducer(SOME_FLIPPABLES, action);

                expect(newFlippables.length).toBe(SOME_FLIPPABLES.length);
                expect(newFlippables.filter(filterById(action.payload.id))[0].flipped).toBe(false);
                expect(newFlippables.filter(filterById(ANOTHER_FLIPPED_FLIPPABLE.id))[0].flipped).toBe(true);
            }
        );
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
            const action = addFlippable('new-flippable');
            const newFlippable = flippableReducer(UNFLIPPED_FLIPPABLE, action);

            expect(newFlippable.id).toBe(action.payload.id);
            expect(newFlippable.flipped).toBe(false);
        });

        it('should return the old state when the action is "CHANGE_FLIPPABLE_SIDE" and the id does not match', () => {
            const action = changeFlippableSide(ANOTHER_UNFLIPPED_FLIPPABLE.id, true);
            const newFlippable = flippableReducer(UNFLIPPED_FLIPPABLE, action);

            expect(newFlippable).toBe(UNFLIPPED_FLIPPABLE);
        });

        it(
            'should return a new state with flipped set to true when the action is "CHANGE_FLIPPABLE_SIDE" ' +
                'and flipped is set to true in the payload',
            () => {
                const action = changeFlippableSide(UNFLIPPED_FLIPPABLE.id, true);
                const newFlippable = flippableReducer(UNFLIPPED_FLIPPABLE, action);

                expect(newFlippable).not.toBe(UNFLIPPED_FLIPPABLE);
                expect(newFlippable.flipped).toBe(action.payload.flipped);
            }
        );

        it(
            'should return a new state with flipped set to false when the action is "CHANGE_FLIPPABLE_SIDE" ' +
                'and flipped is set to false in the payload',
            () => {
                const action = changeFlippableSide(FLIPPED_FLIPPABLE.id, false);
                const newFlippable = flippableReducer(FLIPPED_FLIPPABLE, action);

                expect(newFlippable).not.toBe(FLIPPED_FLIPPABLE);
                expect(newFlippable.flipped).toBe(action.payload.flipped);
            }
        );
    });
});
