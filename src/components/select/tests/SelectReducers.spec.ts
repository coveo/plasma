import * as _ from 'underscore';
import {addValueStringList} from '../../../reusableState/customList/StringListActions';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {selectListBoxOption, setActiveListBoxOption} from '../../listBox/ListBoxActions';
import {addSelect, ISelectPayload, removeSelect, toggleSelect} from '../SelectActions';
import {ISelectState, selectCompositeInitialState, selectCompositeReducer, selectInitialState, selectReducer} from '../SelectReducers';

describe('Select', () => {
    describe('Select Reducers', () => {
        const genericAction: IReduxAction<ISelectPayload> = {
            type: 'DO_SOMETHING',
            payload: {
                id: 'select-id',
            },
        };

        it('should return the default state if the action is not defined and the state is undefined', () => {
            const newState: ISelectState[] = selectCompositeReducer(undefined, genericAction);

            expect(newState).toBe(selectCompositeInitialState);
        });

        it('should return the default state if the action is not defined and the state is undefined for one select', () => {
            const newState: ISelectState = selectReducer(undefined, genericAction);

            expect(newState).toBe(selectInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: ISelectState[] = [selectInitialState];
            const newState: ISelectState[] = selectCompositeReducer(oldState, genericAction);

            expect(newState).toBe(oldState);
        });

        it('should return the old state when the action is not defined for one select', () => {
            const oldState: ISelectState = selectInitialState;
            const newState: ISelectState = selectReducer(oldState, genericAction);

            expect(newState).toBe(oldState);
        });

        it('should return the old state when the action is not defined for one select which is in the state', () => {
            const oldState: ISelectState = {...selectInitialState, id: genericAction.payload.id};
            const newState: ISelectState = selectReducer(oldState, genericAction);

            expect(newState).toBe(oldState);
        });

        describe('ADD_SELECT', () => {
            const id = 'added-select';

            it('should return the old state with one more select', () => {
                const oldState: ISelectState[] = [selectInitialState];
                const newState: ISelectState[] = selectCompositeReducer(oldState, addSelect(id));

                expect(newState.length).toBe(oldState.length + 1);
                expect(newState[1].id).toBe(id);
            });

            it('should not modify the old state', () => {
                const oldState: ISelectState[] = [selectInitialState];
                const oldStateBefore = _.clone(oldState);
                selectCompositeReducer(oldState, addSelect(id));

                expect(oldState).toEqual(oldStateBefore);
            });
        });

        describe('REMOVE_SELECT', () => {
            const id = 'to-remove-select';
            let defaultState: ISelectState[];

            beforeEach(() => {
                defaultState = [_.extend({}, selectInitialState, {id}), selectInitialState];
            });

            it('should return the old state with one less select', () => {
                const oldState: ISelectState[] = defaultState;
                const newState: ISelectState[] = selectCompositeReducer(oldState, removeSelect(id));

                expect(newState.length).toBe(oldState.length - 1);
                expect(newState[0].id).not.toBe(id);
            });

            it('should not modify the old state', () => {
                const oldState: ISelectState[] = [selectInitialState];
                const oldStateBefore = _.clone(oldState);
                selectCompositeReducer(oldState, removeSelect(id));

                expect(oldState).toEqual(oldStateBefore);
            });
        });

        describe('OPEN_SELECT', () => {
            const id = 'to-open-select';
            let defaultState: ISelectState[];

            beforeEach(() => {
                defaultState = [_.extend({}, selectInitialState, {id}), selectInitialState];
            });

            it('should set the open property to true', () => {
                const oldState: ISelectState[] = defaultState;
                const newState: ISelectState[] = selectCompositeReducer(oldState, toggleSelect(id, true));

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].open).toBe(true);
            });

            it('should not throw if the the open property is already true', () => {
                const state = _.clone(defaultState);
                state[0].open = true;

                const oldState: ISelectState[] = state;
                let newState: ISelectState[] = [];
                expect(() => newState = selectCompositeReducer(oldState, toggleSelect(id, true))).not.toThrow();

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].open).toBe(true);
            });

            it('should not modify the old state', () => {
                const oldState: ISelectState[] = [selectInitialState];
                const oldStateBefore = _.clone(oldState);
                selectCompositeReducer(oldState, toggleSelect(id, true));

                expect(oldState).toEqual(oldStateBefore);
            });
        });

        describe('CLOSE_SELECT', () => {
            const id = 'to-close-select';
            let defaultState: ISelectState[];

            beforeEach(() => {
                defaultState = [_.extend({}, selectInitialState, {id, open: true}), selectInitialState];
            });

            it('should set the open property to true', () => {
                const oldState: ISelectState[] = defaultState;
                const newState: ISelectState[] = selectCompositeReducer(oldState, toggleSelect(id, false));

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].open).toBe(false);
            });

            it('should not throw if the the open property is already false', () => {
                const state = _.clone(defaultState);
                state[0].open = false;

                const oldState: ISelectState[] = state;
                let newState: ISelectState[] = [];
                expect(() => newState = selectCompositeReducer(oldState, toggleSelect(id, false))).not.toThrow();

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].open).toBe(false);
            });

            it('should not modify the old state', () => {
                const oldState: ISelectState[] = [selectInitialState];
                const oldStateBefore = _.clone(oldState);
                selectCompositeReducer(oldState, toggleSelect(id, false));

                expect(oldState).toEqual(oldStateBefore);
            });
        });

        describe('TOGGLE_SELECT', () => {
            const id = 'to-toggle-select';
            let defaultState: ISelectState[];

            beforeEach(() => {
                defaultState = [_.extend({}, selectInitialState, {id, open: false}), selectInitialState];
            });

            it('should set the open property to true', () => {
                const oldState: ISelectState[] = defaultState;
                const newState: ISelectState[] = selectCompositeReducer(oldState, toggleSelect(id));

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].open).toBe(true);

                const newerState: ISelectState[] = selectCompositeReducer(newState, toggleSelect(id));

                expect(newerState.length).toBe(oldState.length);
                expect(newerState[0].id).toBe(id);
                expect(newerState[0].open).toBe(false);
            });

            it('should not modify the old state', () => {
                const oldState: ISelectState[] = [selectInitialState];
                const oldStateBefore = _.clone(oldState);
                selectCompositeReducer(oldState, toggleSelect(id));

                expect(oldState).toEqual(oldStateBefore);
            });
        });

        // The Select Reducer closes itself when a list box item is selected
        describe('SELECT_ITEM_LIST_BOX', () => {
            const id = 'list-box-id';
            let defaultState: ISelectState[];

            beforeEach(() => {
                defaultState = [_.extend({}, selectInitialState, {id, open: true}), selectInitialState];
            });

            it('should set the open property to true', () => {
                const oldState: ISelectState[] = defaultState;
                const newState: ISelectState[] = selectCompositeReducer(oldState, selectListBoxOption(id, false, 'anything'));

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].open).toBe(false);
            });

            it('should not throw if the the open property is already false', () => {
                const state = _.clone(defaultState);
                state[0].open = false;

                const oldState: ISelectState[] = state;
                let newState: ISelectState[] = [];
                expect(() => newState = selectCompositeReducer(oldState, selectListBoxOption(id, false, 'value'))).not.toThrow();

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].open).toBe(false);
            });

            it('should not modify the old state', () => {
                const oldState: ISelectState[] = [selectInitialState];
                const oldStateBefore = _.clone(oldState);
                selectCompositeReducer(oldState, selectListBoxOption(id, false, 'abc'));

                expect(oldState).toEqual(oldStateBefore);
            });

            describe('ADD_VALUE_STRING_LIST', () => {
                it('should set the open property to true like SELECT_ITEM_LIST_BOX', () => {
                    const oldState: ISelectState[] = defaultState;
                    const newState: ISelectState[] = selectCompositeReducer(oldState, addValueStringList(id, 'anything'));

                    expect(newState.length).toBe(oldState.length);
                    expect(newState[0].id).toBe(id);
                    expect(newState[0].open).toBe(false);
                });
            });
        });

        // The Select Reducer open itself when a list box item is set to active
        describe('SET_ACTIVE_ITEM_LIST_BOX', () => {
            const id = 'list-box-id';
            let defaultState: ISelectState[];

            beforeEach(() => {
                defaultState = [_.extend({}, selectInitialState, {id, open: false}), selectInitialState];
            });

            it('should set the open property to true', () => {
                const oldState: ISelectState[] = defaultState;
                const newState: ISelectState[] = selectCompositeReducer(oldState, setActiveListBoxOption(id, 1));

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].open).toBe(true);
            });

            it('should not throw if the the open property is already true', () => {
                const state = _.clone(defaultState);
                state[0].open = true;

                const oldState: ISelectState[] = state;
                let newState: ISelectState[] = [];
                expect(() => newState = selectCompositeReducer(oldState, setActiveListBoxOption(id, 1))).not.toThrow();

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].open).toBe(true);
            });

            it('should not modify the old state', () => {
                const oldState: ISelectState[] = [selectInitialState];
                const oldStateBefore = _.clone(oldState);
                selectCompositeReducer(oldState, setActiveListBoxOption(id, 1));

                expect(oldState).toEqual(oldStateBefore);
            });
        });
    });
});
