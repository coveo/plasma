import {StringListActions} from '../../../reusableState/customList/StringListActions';
import * as StringListReducers from '../../../reusableState/customList/StringListReducers';
import {IStringListCompositeState} from '../../../reusableState/customList/StringListReducers';
import {stringListInitialState} from '../../../reusableState/customList/StringListReducers';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {clearListBoxOption, selectListBoxOption, unselectListBoxOption} from '../../listBox/ListBoxActions';
import {ISelectWithFilterCompositeState, ISelectWithFilterPayload, selectWithFilterCompositeState} from '../SelectWithFilterReducers';

describe('Select', () => {
    describe('SelectWithFilter reducers', () => {
        const stateId: string = 'test_id';
        const stateValue: string = 'a';
        const oldState: ISelectWithFilterCompositeState = {
            [stateId]: {
                id: stateId,
                list: [stateValue],
            },
        };

        const genericAction: IReduxAction<ISelectWithFilterPayload> = {
            type: 'pokeball',
        };

        let spyStringListCompositeState: jasmine.Spy;

        beforeEach(() => {
            spyStringListCompositeState = spyOn(StringListReducers, 'stringListCompositeState');
        });

        it('should return the default state if the action has no payload ', () => {
            const newState: IStringListCompositeState = selectWithFilterCompositeState({}, {type: undefined});

            expect(newState).toEqual(stringListInitialState);
        });

        it('should return the default state if the state is undefined', () => {
            const newState: IStringListCompositeState = selectWithFilterCompositeState(undefined, genericAction);

            expect(newState).toEqual(stringListInitialState);
        });

        it('should return the default state if the id is not in the state', () => {
            const newState: IStringListCompositeState = selectWithFilterCompositeState(oldState, genericAction);

            expect(newState).toBe(oldState);
        });

        it('should return the default state if the action type do not exist', () => {
            const newState: IStringListCompositeState = selectWithFilterCompositeState(oldState, {...genericAction, payload: {id: stateId}});

            expect(newState).toBe(oldState);
        });

        it('should call stringListCompositeState if the action type is contains in the StringListActions', () => {
            selectWithFilterCompositeState(oldState, {type: StringListActions.add, payload: {id: stateId}});

            expect(spyStringListCompositeState).toHaveBeenCalledTimes(1);
        });

        describe('SELECT_ITEM_LIST_BOX', () => {
            const newValue: string = 'b';

            it('should add the value in the list if multi and the id exist in the state', () => {
                const newState: IStringListCompositeState = selectWithFilterCompositeState(oldState, selectListBoxOption(stateId, true, newValue));

                expect(newState[stateId].list.length).toBe(2);
                expect(newState[stateId].list[1]).toBe(newValue);
            });

            it('should add only the value in the list if no multi and the id exist in the state', () => {
                const newState: IStringListCompositeState = selectWithFilterCompositeState(oldState, selectListBoxOption(stateId, false, newValue));

                expect(newState[stateId].list.length).toBe(1);
                expect(newState[stateId].list[0]).toBe(newValue);
            });
        });

        describe('UNSELECT_ITEM_LIST_BOX', () => {
            it('should remove the value in the list if the id exist in the state', () => {
                expect(oldState[stateId].list.length).toBe(1);

                const newState: IStringListCompositeState = selectWithFilterCompositeState(oldState, unselectListBoxOption(stateId, stateValue));

                expect(newState[stateId].list.length).toBe(0);
            });
        });

        describe('CLEAR_ITEM_LIST_BOX', () => {
            const oldStateTest: ISelectWithFilterCompositeState = {
                [stateId]: {
                    id: stateId,
                    list: ['a', 'b', 'c'],
                },
            };

            it('should clear the list if the id exist in the state', () => {
                const newState: IStringListCompositeState = selectWithFilterCompositeState(oldStateTest, clearListBoxOption(stateId));

                expect(newState[stateId].list.length).toBe(0);
            });
        });
    });
});
