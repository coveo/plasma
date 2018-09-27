import * as _ from 'underscore';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {setAutocompleteValue} from '../../autocomplete/AutocompleteActions';
import {
    addListBox,
    clearListBoxOption,
    IListBoxPayload,
    removeListBox,
    reorderListBoxOption,
    selectListBoxOption,
    setActiveListBoxOption,
    unselectListBoxOption,
} from '../ListBoxActions';
import {IListBoxState, listBoxesInitialState, listBoxesReducer, listBoxInitialState, listBoxReducer} from '../ListBoxReducers';

describe('ListBox', () => {
    describe('ListBox Reducers', () => {
        const genericAction: IReduxAction<IListBoxPayload> = {
            type: 'DO_SOMETHING',
            payload: {
                id: 'list-box-id',
            },
        };

        it('should return the default state if the action is not defined and the state is undefined', () => {
            const newState: IListBoxState[] = listBoxesReducer(undefined, genericAction);

            expect(newState).toBe(listBoxesInitialState);
        });

        it('should return the default state if the action is not defined and the state is undefined for one list box', () => {
            const newState: IListBoxState = listBoxReducer(undefined, genericAction);

            expect(newState).toBe(listBoxInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: IListBoxState[] = [listBoxInitialState];
            const newState: IListBoxState[] = listBoxesReducer(oldState, genericAction);

            expect(newState).toBe(oldState);
        });

        it('should return the old state when the action is not defined for one list box', () => {
            const oldState: IListBoxState = listBoxInitialState;
            const newState: IListBoxState = listBoxReducer(oldState, genericAction);

            expect(newState).toBe(oldState);
        });

        it('should return the old state when the action is not defined for one list box which is in the state', () => {
            const oldState: IListBoxState = {...listBoxInitialState, id: genericAction.payload.id};
            const newState: IListBoxState = listBoxReducer(oldState, genericAction);

            expect(newState).toBe(oldState);
        });

        describe('ADD_LIST_BOX', () => {
            const id = 'added-list-box';
            const items = [{value: 'a'}, {value: 'b', selected: true}];
            const selected = _.chain(items).where({selected: true}).pluck('value').value();

            it('should return the old state with one more list box', () => {
                const oldState: IListBoxState[] = [listBoxInitialState];
                const newState: IListBoxState[] = listBoxesReducer(oldState, addListBox(id, []));

                expect(newState.length).toBe(oldState.length + 1);
                expect(newState[1].id).toBe(id);
            });

            it('should set the selected when there is one in the action', () => {
                const oldState: IListBoxState[] = [listBoxInitialState];
                const newState: IListBoxState[] = listBoxesReducer(oldState, addListBox(id, items));

                expect(newState.length).toBe(oldState.length + 1);
                expect(newState[1].id).toBe(id);
                expect(newState[1].selected).toEqual(selected);
            });

            it('should not modify the old state', () => {
                const oldState: IListBoxState[] = [listBoxInitialState];
                const oldStateBefore = _.clone(oldState);
                listBoxesReducer(oldState, addListBox(id, items));

                expect(oldState).toEqual(oldStateBefore);
            });
        });

        describe('REMOVE_LIST_BOX', () => {
            const id = 'exisiting-list-box';
            let defaultState: IListBoxState[];

            beforeEach(() => {
                defaultState = [_.extend({}, listBoxInitialState, {id, selected: []}), listBoxInitialState];
            });

            it('should return the old state with one less list box', () => {
                const oldState: IListBoxState[] = defaultState;
                const newState: IListBoxState[] = listBoxesReducer(oldState, removeListBox(id));

                expect(newState.length).toBe(oldState.length - 1);
                expect(newState[0].id).not.toBe(id);
            });

            it('should not modify the old state', () => {
                const oldState: IListBoxState[] = defaultState;
                const oldStateBefore = _.clone(oldState);
                listBoxesReducer(oldState, removeListBox(id));

                expect(oldState).toEqual(oldStateBefore);
            });
        });

        describe('SELECT_ITEM_LIST_BOX', () => {
            const id = 'list-box-id';
            const items = [{value: 'a'}, {value: 'b', selected: true}];
            const selected = _.chain(items).where({selected: true}).pluck('value').value();
            let defaultState: IListBoxState[];

            beforeEach(() => {
                defaultState = [_.extend({}, listBoxInitialState, {id, selected}), listBoxInitialState];
            });

            it('should select the new item when the list box is not multi', () => {
                const expectedValue = items[0].value;
                const oldState: IListBoxState[] = defaultState;
                const newState: IListBoxState[] = listBoxesReducer(oldState, selectListBoxOption(id, false, expectedValue));

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);

                expect(newState[0].selected.length).toBe(1);
                expect(newState[0].selected[0]).toBe(expectedValue);
            });

            it('should select the new item (and the old one) when the list box is multi', () => {
                const newValue = items[0].value;
                const oldState: IListBoxState[] = defaultState;
                const newState: IListBoxState[] = listBoxesReducer(oldState, selectListBoxOption(id, true, newValue));

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);

                expect(newState[0].selected.length).toBe(2, 'length');
                expect(newState[0].selected).toEqual([items[1].value, newValue]);
            });

            it('should not modify the old state', () => {
                const oldState: IListBoxState[] = _.clone(defaultState);
                listBoxesReducer(oldState, selectListBoxOption(id, false, items[0].value));

                expect(oldState).toEqual(defaultState);
            });
        });

        describe('SET_VALUE_AUTOCOMPLETE', () => {
            const id = 'list-box-id';
            const items = [{value: 'a'}, {value: 'b', selected: true}];
            const selected = _.chain(items).where({selected: true}).pluck('value').value();
            let defaultState: IListBoxState[];

            beforeEach(() => {
                defaultState = [_.extend({}, listBoxInitialState, {id, selected}), listBoxInitialState];
            });

            it('should select the new item', () => {
                const expectedValue = items[0].value;
                const oldState: IListBoxState[] = defaultState;
                const newState: IListBoxState[] = listBoxesReducer(oldState, setAutocompleteValue(id, expectedValue, false));

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);

                expect(newState[0].selected.length).toBe(1);
                expect(newState[0].selected[0]).toBe(expectedValue);
            });

            it('should not modify the old state', () => {
                const oldState: IListBoxState[] = _.clone(defaultState);
                listBoxesReducer(oldState, setAutocompleteValue(id, items[0].value, true));

                expect(oldState).toEqual(defaultState);
            });
        });

        describe('UNSELECT_ITEM_LIST_BOX', () => {
            const id = 'list-box-id';
            const items = [{value: 'a'}, {value: 'b', selected: true}];
            let defaultState: IListBoxState[];
            let selected: any[];

            beforeEach(() => {
                selected = _.chain(items).where({selected: true}).pluck('value').value();
                defaultState = [_.extend({}, listBoxInitialState, {id, selected}), listBoxInitialState];
            });

            it('should unselect the item if selected', () => {
                const oldState: IListBoxState[] = defaultState;
                const newState: IListBoxState[] = listBoxesReducer(oldState, unselectListBoxOption(id, selected[0]));

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].selected.length).toBe(0);
            });

            it('should unselect the correct item when more than one is selected', () => {
                const toUnselect = items[1].value;
                const expected = items[0].value;

                const state = _.clone(defaultState);
                state[0].selected.push(expected);
                const oldState: IListBoxState[] = state;
                const newState: IListBoxState[] = listBoxesReducer(oldState, unselectListBoxOption(id, toUnselect));

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].selected.length).toBe(1);
                expect(newState[0].selected[0]).toBe(expected);
            });

            it('should not unselect the item if its not selected', () => {
                const oldState: IListBoxState[] = defaultState;
                const newState: IListBoxState[] = listBoxesReducer(oldState, unselectListBoxOption(id, items[0].value));

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].selected.length).toBe(1);
                expect(newState[0].selected[0]).toBe(selected[0]);
            });

            it('should not modify the old state', () => {
                const oldState: IListBoxState[] = _.clone(defaultState);
                listBoxesReducer(oldState, unselectListBoxOption(id, selected[0]));

                expect(oldState).toEqual(defaultState);
            });
        });

        describe('REORDER_ITEM_LIST_BOX', () => {
            const id = 'list-box-id';
            const items = [{value: 'a', selected: true}, {value: 'b', selected: true}];
            const selected = _.chain(items).where({selected: true}).pluck('value').value();
            let defaultState: IListBoxState[];

            beforeEach(() => {
                defaultState = [_.extend({}, listBoxInitialState, {id, selected}), listBoxInitialState];
            });

            it('should reorder with the new values', () => {
                const oldState: IListBoxState[] = defaultState;
                const newOrder = [selected[1], selected[0]];
                const newState: IListBoxState[] = listBoxesReducer(oldState, reorderListBoxOption(id, newOrder));

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].selected.length).toBe(2);
                expect(newState[0].selected[0]).toBe(newOrder[0]);
                expect(newState[0].selected[1]).toBe(newOrder[1]);
            });

            it('should not modify the old state', () => {
                const oldState: IListBoxState[] = _.clone(defaultState);
                listBoxesReducer(oldState, reorderListBoxOption(id, selected[0]));

                expect(oldState).toEqual(defaultState);
            });
        });

        describe('SET_ACTIVE_ITEM_LIST_BOX', () => {
            const id = 'list-box-id';
            const items = [{value: 'a', selected: true}, {value: 'b', selected: true}];
            const selected = _.chain(items).where({selected: true}).pluck('value').value();
            let defaultState: IListBoxState[];

            beforeEach(() => {
                defaultState = [_.extend({}, listBoxInitialState, {id, selected}), listBoxInitialState];
            });

            it('should set the active to 0 if the diff is 1 and set the active is undefined in the state', () => {
                const expectedValue = 0;
                defaultState[0].active = undefined;
                const oldState: IListBoxState[] = defaultState;
                const newState: IListBoxState[] = listBoxesReducer(oldState, setActiveListBoxOption(id, 1));

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].active).toBe(expectedValue);
            });

            it('should modify  the active to 0 if the diff is 1 and set the active is undefined in the state', () => {
                const expectedValue = -1;
                defaultState[0].active = undefined;
                const oldState: IListBoxState[] = defaultState;
                const newState: IListBoxState[] = listBoxesReducer(oldState, setActiveListBoxOption(id, -1));

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].active).toBe(expectedValue);
            });

            it('should increment the active from the state by 1 if the diff is 1', () => {
                const initialValue = 5;
                const increment = 1;
                const expectedValue = initialValue + increment;

                defaultState[0].active = initialValue;
                const oldState: IListBoxState[] = defaultState;
                const newState: IListBoxState[] = listBoxesReducer(oldState, setActiveListBoxOption(id, increment));

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].active).toBe(expectedValue);
            });

            it('should not modify the old state', () => {
                const oldState: IListBoxState[] = [listBoxInitialState];
                const oldStateBefore = _.clone(oldState);
                listBoxesReducer(oldState, setActiveListBoxOption(id, 1));

                expect(oldState).toEqual(oldStateBefore);
            });
        });

        describe('CLEAR_ITEM_LIST_BOX', () => {
            const id = 'list-box-id';
            const items = [{value: 'a'}, {value: 'b', selected: true}];

            it('should unselect the selected item', () => {
                const selected = items[1].value;
                const oldState: IListBoxState[] = [_.extend({}, listBoxInitialState, {id, selected: [selected]}), listBoxInitialState];
                const newState: IListBoxState[] = listBoxesReducer(oldState, clearListBoxOption(id));

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].selected.length).toBe(0);
            });

            it('should unselect all items when there is more than one', () => {
                const selected = _.pluck(items, 'value');
                const oldState: IListBoxState[] = [_.extend({}, listBoxInitialState, {id, selected}), listBoxInitialState];
                const newState: IListBoxState[] = listBoxesReducer(oldState, clearListBoxOption(id));

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].selected.length).toBe(0);
            });

            it('should not modify the old state', () => {
                const selected = _.pluck(items, 'value');
                const defaultState = [_.extend({}, listBoxInitialState, {id, selected}), listBoxInitialState];
                const oldState: IListBoxState[] = _.clone(defaultState);
                listBoxesReducer(oldState, clearListBoxOption(id));

                expect(oldState).toEqual(defaultState);
            });
        });
    });
});
