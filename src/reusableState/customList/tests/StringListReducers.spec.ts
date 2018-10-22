import {IItemBoxProps} from '../../../components/itemBox/ItemBox';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {
    addStringList,
    addValueStringList,
    IStringListPayload,
    removeStringList,
    removeValueStringList,
} from '../StringListActions';
import {
    convertItemsBoxToStringList,
    convertStringListToItemsBox,
    IStringListCompositeState,
    stringListCompositeState,
    stringListInitialState,
} from '../StringListReducers';

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

            expect(newState).toBe(stringListInitialState);
        });

        it('should return the default state if the payload id is not in the state, the action type is not ADD_STRING_LIST and the state is undefined', () => {
            const newState: IStringListCompositeState = stringListCompositeState(undefined, {...genericAction, payload: {id: 'pokemon'}});

            expect(newState).toEqual(stringListInitialState);
        });

        it('should return the oldState state if the payload id is not in the state and the action type is not ADD_STRING_LIST', () => {
            const newState: IStringListCompositeState = stringListCompositeState(oldState, {...genericAction, payload: {id: 'pokemon'}});

            expect(newState).toBe(oldState);
        });

        it('should return the oldState state if the id is in the state but the action type do not exist in the StringListActions', () => {
            const newState: IStringListCompositeState = stringListCompositeState(oldState, {type: 'custom_action', payload: {id: stateId}});

            expect(newState).toBe(oldState);
        });

        describe('ADD_STRING_LIST', () => {
            const newId: string = 'charmeleon';

            it('should return the oldState if the id is already in the state', () => {
                const newState: IStringListCompositeState = stringListCompositeState(oldState, addStringList(stateId));

                expect(newState).toBe(oldState);
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

        describe('REMOVE_STRING_LIST', () => {
            const newId: string = 'pidgeot';

            it('should remove nothing if the id is not in the state', () => {
                const newState: IStringListCompositeState = stringListCompositeState(oldState, removeStringList(newId));

                expect(newState).toBe(oldState);
            });

            it('should remove the list if the id is in the state', () => {
                const newState: IStringListCompositeState = stringListCompositeState(oldState, removeStringList(stateId));

                expect(newState).not.toEqual(oldState);
            });
        });

        describe('ADD_VALUE_STRING_LIST', () => {
            const newId: string = 'bulbasaur';
            const newValue: string = 'ivysaur';

            it('should return the oldState if the id where to add the value is not in the state', () => {
                const newState: IStringListCompositeState = stringListCompositeState(oldState, addValueStringList(newId, newValue));

                expect(newState).toBe(oldState);
            });

            it('should add the value at the end of the list if the id is in the state', () => {
                const newState: IStringListCompositeState = stringListCompositeState(oldState, addValueStringList(stateId, newValue));

                const newStateListLength: number = newState[stateId].list.length;
                expect(newStateListLength).toBeGreaterThan(oldState[stateId].list.length);
                expect(newState[stateId].list[newStateListLength - 1]).toEqual(newValue);
            });

            it('should reset the list before and add the new list', () => {
                const oldStateWithValues = {
                    [stateId]: {
                        id: stateId,
                        list: ['a', 'b', 'c'],
                    },
                };

                const newState: IStringListCompositeState = stringListCompositeState(oldStateWithValues, addValueStringList(stateId, newValue, true));

                expect(newState[stateId].list.length).toBe(1);
                expect(newState[stateId].list[0]).toBe(newValue);
            });
        });

        describe('REMOVE_VALUE_STRING_LIST', () => {
            const newId: string = 'bulbasaur';
            const newValue: string = 'venusaur';

            it('should return the oldState if the id where to remove the value is not in the state', () => {
                const newState: IStringListCompositeState = stringListCompositeState(oldState, removeValueStringList(newId, newValue));

                expect(newState).toBe(oldState);
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

    describe('utils', () => {
        describe('convertStringListToItemsBox', () => {
            const list: string[] = ['a', 'b'];

            it('should return an empty list if the list as argument is empty', () => {
                expect(convertStringListToItemsBox([])).toEqual([]);
            });

            it('should return a list of ItemBox with each value in the array as value', () => {
                const newList: IItemBoxProps[] = convertStringListToItemsBox(list);

                expect(newList.length).toBe(2);

                expect(newList[0].value).toEqual(list[0]);
                expect(newList[1].value).toEqual(list[1]);
            });

            it('should add itemBox props for each itemBox from the list', () => {
                const newList: IItemBoxProps[] = convertStringListToItemsBox(list, {disabled: true, hidden: false});

                expect(newList[0].disabled).toBe(true);
                expect(newList[1].disabled).toBe(true);

                expect(newList[0].hidden).toBe(false);
                expect(newList[1].hidden).toBe(false);
            });
        });

        describe('convertItemsBoxToStringList', () => {
            const itemBox: IItemBoxProps[] = [{value: 'a'}, {value: 'b'}];

            it('should return an empty array if the itemBox list is empty', () => {
                expect(convertItemsBoxToStringList([])).toEqual([]);
            });

            it('should return the list of each value in the itemBox list', () => {
                expect(convertItemsBoxToStringList(itemBox)).toEqual(['a', 'b']);
            });
        });
    });
});
