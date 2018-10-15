import {IReduxAction} from '../../../utils/ReduxUtils';
import {
    addStringList,
    addValueStringList,
    IStringListPayload,
    removeStringList,
    removeValueStringList,
    StringListActions,
} from '../StringListActions';
import {IStringListCompositeState, stringListCompositeState, stringListInitialState} from '../StringListReducers';

describe('StringList', () => {

    describe('StringList Reducers', () => {

        const stateId: string = 'test';
        const oldState: IStringListCompositeState = {
            [stateId]: {
                id: stateId,
                list: [],
            },
        };

        const genericAction: IReduxAction<IStringListPayload> = {
            type: 'pokeball',
        };

        it('should return the default state if the action has no payload and the state is undefined', () => {
            const newState: IStringListCompositeState = stringListCompositeState(undefined, genericAction);

            expect(newState).toEqual(stringListInitialState);
            expect(newState).not.toBe(stringListInitialState);
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
            const newState: IStringListCompositeState = stringListCompositeState(oldState, {type: 'custom_action', payload: {id: stateId}});

            expect(newState).toEqual(oldState);
            expect(newState).not.toBe(oldState);
        });

        describe(StringListActions.add, () => {
            const newId: string = 'charmeleon';

            it('should return the oldState if the id is already in the state', () => {
                const newState: IStringListCompositeState = stringListCompositeState(oldState, addStringList(stateId));

                expect(newState).toEqual(oldState);
                expect(newState).not.toBe(oldState);
            });

            it('should add the new stringList in the state if the id do not exist', () => {
                const newState: IStringListCompositeState = stringListCompositeState(oldState, addStringList(newId));

                expect(newState[newId]).toBeDefined();
            });

            it('should add the new stringList in the state with an empty array by default', () => {
                const newState: IStringListCompositeState = stringListCompositeState(oldState, addStringList(newId));

                expect(newState[newId].list).toEqual([]);
            });

            it('should add the new list sent as parameter in the state', () => {
                const newList: string[] = ['a', 'b', 'c'];
                const newState: IStringListCompositeState = stringListCompositeState(oldState, addStringList(newId, newList));

                expect(newState[newId].list).toEqual(newList);
            });
        });

        describe(StringListActions.remove, () => {
            const newId: string = 'pidgeot';

            it('should remove nothing if the id is not in the state', () => {
                const newState: IStringListCompositeState = stringListCompositeState(oldState, removeStringList(newId));

                expect(newState).toEqual(oldState);
                expect(newState).not.toBe(oldState);
            });

            it('should remove the list if the id is in the state', () => {
                const newState: IStringListCompositeState = stringListCompositeState(oldState, removeStringList(stateId));

                expect(newState).not.toEqual(oldState);
            });
        });

        describe(StringListActions.addValue, () => {
            const newId: string = 'bulbasaur';
            const newValue: string = 'ivysaur';

            it('should return the oldState if the id where to add the value is not in the state', () => {
                const newState: IStringListCompositeState = stringListCompositeState(oldState, addValueStringList(newId, newValue));

                expect(newState).toEqual(oldState);
                expect(newState).not.toBe(oldState);
            });

            it('should add the value at the end of the list if the id is in the state', () => {
                const newState: IStringListCompositeState = stringListCompositeState(oldState, addValueStringList(stateId, newValue));

                const newStateListLength: number = newState[stateId].list.length;
                expect(newStateListLength).toBeGreaterThan(oldState[stateId].list.length);
                expect(newState[stateId].list[newStateListLength - 1]).toEqual(newValue);
            });
        });

        describe(StringListActions.removeValue, () => {
            const newId: string = 'bulbasaur';
            const newValue: string = 'venusaur';

            it('should return the oldState if the id where to remove the value is not in the state', () => {
                const newState: IStringListCompositeState = stringListCompositeState(oldState, removeValueStringList(newId, newValue));

                expect(newState).toEqual(oldState);
                expect(newState).not.toBe(oldState);
            });

            it('should remove the value in the list if the id is in the state', () => {
                const oldStateWithList: IStringListCompositeState = {[stateId]: {id: stateId, list: [newValue]}};
                const newState: IStringListCompositeState = stringListCompositeState(oldStateWithList, removeValueStringList(stateId, newValue));

                const newStateListLength: number = newState[stateId].list.length;
                expect(newStateListLength).toBeLessThan(oldStateWithList[stateId].list.length);
                expect(newStateListLength).toBe(0);
            });
        });
    });
});
