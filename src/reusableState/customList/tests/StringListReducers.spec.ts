import * as _ from 'underscore';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {addStringList, IStringListPayload, StringListActions} from '../StringListActions';
import {IStringListCompositeState, stringListCompositeState, stringListInitialState} from '../StringListReducers';

describe('StringList', () => {

    describe('StringList Reducers', () => {

        const firstStateId: string = 'test';
        const oldState: IStringListCompositeState = {
            [firstStateId]: {
                id: firstStateId,
                list: [],
            },
        };

        const genericAction: IReduxAction<IStringListPayload> = {
            type: 'pokeball',
        };

        it('should return the default state if the action has no payload and the state is undefined', () => {
            const newState: IStringListCompositeState = stringListCompositeState(undefined, genericAction);

            expect(newState).toBe(stringListInitialState);
        });

        it(`should return the default state if the payload id is not in the state, the action type is not ${StringListActions.add} and the state is undefined`, () => {
            const newState: IStringListCompositeState = stringListCompositeState(undefined, {...genericAction, payload: {id: 'pokemon'}});

            expect(newState).toEqual(stringListInitialState);
        });

        it(`should return the oldState state if the payload id is not in the state and the action type is not ${StringListActions.add}`, () => {
            const newState: IStringListCompositeState = stringListCompositeState(oldState, {...genericAction, payload: {id: 'pokemon'}});

            expect(newState).toEqual(oldState);
        });

        it(`should return the oldState state if the id is in the state but the action type do not exist in the StringListActions`, () => {
            const newState: IStringListCompositeState = stringListCompositeState(oldState, {type: 'custom_action', payload: {id: firstStateId}});

            expect(newState).not.toBe(oldState);
            expect(newState).toEqual(oldState);
        });

        describe(StringListActions.add, () => {
            const newId: string = 'charmeleon';

            it('should return the oldState if the id is already in the state', () => {
                const newState: IStringListCompositeState = stringListCompositeState(oldState, addStringList(firstStateId));

                expect(newState).toEqual(oldState);
            });

            it('should add the new stringList in the state if the id do not exist', () => {
                const newState: IStringListCompositeState = stringListCompositeState(oldState, addStringList(newId));

                expect(newState[newId]).toBeDefined();
            });

            it('should add the new stringList in the state with an empty array by default', () => {
                const newState: IStringListCompositeState = stringListCompositeState(oldState, addStringList(newId));

                expect(newState[newId].list).toBe([]);
            });
        });
    });
});
