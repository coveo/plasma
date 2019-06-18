import * as _ from 'underscore';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {selectListBoxOption} from '../../listBox/ListBoxActions';
import {
    addAutocomplete,
    IAutocompletePayload,
    removeAutocomplete,
    setAutocompleteActive,
    setAutocompleteValue,
    toggleAutocomplete,
} from '../AutocompleteActions';
import {
    autocompleteCompositeInitialState,
    autocompleteInitialState,
    autocompleteReducer,
    autocompletesReducer,
    IAutocompleteState,
} from '../AutocompleteReducers';

describe('Autocomplete', () => {
    describe('Autocomplete Reducers', () => {
        const genericAction: IReduxAction<IAutocompletePayload> = {
            type: 'DO_SOMETHING',
            payload: {
                id: 'autocomplete-id',
            },
        };

        it('should return the default state if the action is not defined and the state is undefined', () => {
            const newState: IAutocompleteState[] = autocompletesReducer(undefined, genericAction);

            expect(newState).toBe(autocompleteCompositeInitialState);
        });

        it('should return the default state if the action is not defined and the state is undefined for one autocomplete', () => {
            const newState: IAutocompleteState = autocompleteReducer(undefined, genericAction);

            expect(newState).toBe(autocompleteInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: IAutocompleteState[] = [autocompleteInitialState];
            const newState: IAutocompleteState[] = autocompletesReducer(oldState, genericAction);

            expect(newState).toBe(oldState);
        });

        it('should return the old state when the action is not defined for one autocomplete', () => {
            const oldState: IAutocompleteState = autocompleteInitialState;
            const newState: IAutocompleteState = autocompleteReducer(oldState, genericAction);

            expect(newState).toBe(oldState);
        });

        it('should return the old state when the action is not defined for one autocomplete which is in the state', () => {
            const oldState: IAutocompleteState = {...autocompleteInitialState, id: genericAction.payload.id};
            const newState: IAutocompleteState = autocompleteReducer(oldState, genericAction);

            expect(newState).toBe(oldState);
        });

        describe('ADD_AUTOCOMPLETE', () => {
            const id = 'added-autocomplete';

            it('should return the old state with one more autocomplete', () => {
                const oldState: IAutocompleteState[] = [autocompleteInitialState];
                const newState: IAutocompleteState[] = autocompletesReducer(oldState, addAutocomplete(id));

                expect(newState.length).toBe(oldState.length + 1);
                expect(newState[1].id).toBe(id);
            });

            it('should not modify the old state', () => {
                const oldState: IAutocompleteState[] = [autocompleteInitialState];
                const oldStateBefore = _.clone(oldState);
                autocompletesReducer(oldState, addAutocomplete(id));

                expect(oldState).toEqual(oldStateBefore);
            });
        });

        describe('REMOVE_AUTOCOMPLETE', () => {
            const id = 'to-remove-autocomplete';
            let defaultState: IAutocompleteState[];

            beforeEach(() => {
                defaultState = [_.extend({}, autocompleteInitialState, {id}), autocompleteInitialState];
            });

            it('should return the old state with one less autocomplete', () => {
                const oldState: IAutocompleteState[] = defaultState;
                const newState: IAutocompleteState[] = autocompletesReducer(oldState, removeAutocomplete(id));

                expect(newState.length).toBe(oldState.length - 1);
                expect(newState[0].id).not.toBe(id);
            });

            it('should not modify the old state', () => {
                const oldState: IAutocompleteState[] = [autocompleteInitialState];
                const oldStateBefore = _.clone(oldState);
                autocompletesReducer(oldState, removeAutocomplete(id));

                expect(oldState).toEqual(oldStateBefore);
            });
        });

        describe('TOGGLE_AUTOCOMPLETE', () => {
            const id = 'to-toggle-autocomplete';
            let defaultState: IAutocompleteState[];

            beforeEach(() => {
                defaultState = [_.extend({}, autocompleteInitialState, {id, open: false}), autocompleteInitialState];
            });

            it('should toggle the open property if not specified', () => {
                const oldState: IAutocompleteState[] = defaultState;
                const newState: IAutocompleteState[] = autocompletesReducer(oldState, toggleAutocomplete(id));

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].open).toBe(true);

                const newerState: IAutocompleteState[] = autocompletesReducer(newState, toggleAutocomplete(id));

                expect(newerState.length).toBe(oldState.length);
                expect(newerState[0].id).toBe(id);
                expect(newerState[0].open).toBe(false);
            });

            it('should set the open property to specified value', () => {
                const oldState: IAutocompleteState[] = defaultState;
                const newState: IAutocompleteState[] = autocompletesReducer(oldState, toggleAutocomplete(id, false));

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].open).toBe(false);

                const newerState: IAutocompleteState[] = autocompletesReducer(newState, toggleAutocomplete(id, true));

                expect(newerState.length).toBe(oldState.length);
                expect(newerState[0].id).toBe(id);
                expect(newerState[0].open).toBe(true);
            });

            it('should not modify the old state', () => {
                const oldState: IAutocompleteState[] = [autocompleteInitialState];
                const oldStateBefore = _.clone(oldState);
                autocompletesReducer(oldState, toggleAutocomplete(id));

                expect(oldState).toEqual(oldStateBefore);
            });
        });

        describe('SET_VALUE_AUTOCOMPLETE', () => {
            const id = 'to-set-value-autocomplete';
            let defaultState: IAutocompleteState[];

            beforeEach(() => {
                defaultState = [_.extend({}, autocompleteInitialState, {id, open: false}), autocompleteInitialState];
            });

            it('should set the value and set the open property to open', () => {
                const expectedValue = 'new-value';
                const oldState: IAutocompleteState[] = defaultState;
                const newState: IAutocompleteState[] = autocompletesReducer(
                    oldState,
                    setAutocompleteValue(id, expectedValue, true)
                );

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].open).toBe(true);
                expect(newState[0].value).toBe(expectedValue);

                const newerState: IAutocompleteState[] = autocompletesReducer(
                    oldState,
                    setAutocompleteValue(id, expectedValue, false)
                );
                expect(newerState.length).toBe(oldState.length);
                expect(newerState[0].id).toBe(id);
                expect(newerState[0].open).toBe(false);
                expect(newerState[0].value).toBe(expectedValue);
            });

            it('should not modify the old state', () => {
                const oldState: IAutocompleteState[] = [autocompleteInitialState];
                const oldStateBefore = _.clone(oldState);
                autocompletesReducer(oldState, setAutocompleteValue(id, '¯_(ツ)_/¯', true));

                expect(oldState).toEqual(oldStateBefore);
            });
        });

        describe('SET_ACTIVE_AUTOCOMPLETE', () => {
            const id = 'to-set-active-autocomplete';
            let defaultState: IAutocompleteState[];

            beforeEach(() => {
                defaultState = [_.extend({}, autocompleteInitialState, {id, open: false}), autocompleteInitialState];
            });

            it('should set the active and set the open property to true', () => {
                const expectedValue = -1;
                defaultState[0].active = 0;
                const oldState: IAutocompleteState[] = defaultState;
                const newState: IAutocompleteState[] = autocompletesReducer(
                    oldState,
                    setAutocompleteActive(id, expectedValue)
                );

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].open).toBe(true);
                expect(newState[0].active).toBe(expectedValue);
            });

            it('should set the active to 0 if the diff is 1 and set the active is undefined in the state', () => {
                const expectedValue = 0;
                defaultState[0].active = undefined;
                const oldState: IAutocompleteState[] = defaultState;
                const newState: IAutocompleteState[] = autocompletesReducer(oldState, setAutocompleteActive(id, 1));

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].open).toBe(true);
                expect(newState[0].active).toBe(expectedValue);
            });

            it('should modify  the active to 0 if the diff is 1 and set the active is undefined in the state', () => {
                const expectedValue = -1;
                defaultState[0].active = undefined;
                const oldState: IAutocompleteState[] = defaultState;
                const newState: IAutocompleteState[] = autocompletesReducer(oldState, setAutocompleteActive(id, -1));

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].open).toBe(true);
                expect(newState[0].active).toBe(expectedValue);
            });

            it('should not modify the old state', () => {
                const oldState: IAutocompleteState[] = [autocompleteInitialState];
                const oldStateBefore = _.clone(oldState);
                autocompletesReducer(oldState, setAutocompleteActive(id, 1));

                expect(oldState).toEqual(oldStateBefore);
            });
        });

        // The Autocomplete Reducer closes itself when a list box item is selected
        describe('SELECT_ITEM_LIST_BOX', () => {
            const id = 'list-box-id';
            let defaultState: IAutocompleteState[];

            beforeEach(() => {
                defaultState = [_.extend({}, autocompleteInitialState, {id, open: true}), autocompleteInitialState];
            });

            it('should set the open property to true', () => {
                const oldState: IAutocompleteState[] = defaultState;
                const newState: IAutocompleteState[] = autocompletesReducer(
                    oldState,
                    selectListBoxOption(id, false, 'anything')
                );

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].open).toBe(false);
            });

            it('should not throw if the the open property is already false', () => {
                const state = _.clone(defaultState);
                state[0].open = false;

                const oldState: IAutocompleteState[] = state;
                let newState: IAutocompleteState[] = [];
                expect(
                    () => (newState = autocompletesReducer(oldState, selectListBoxOption(id, false, 'value')))
                ).not.toThrow();

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].open).toBe(false);
            });

            it('should not modify the old state', () => {
                const oldState: IAutocompleteState[] = [autocompleteInitialState];
                const oldStateBefore = _.clone(oldState);
                autocompletesReducer(oldState, selectListBoxOption(id, false, 'abc'));

                expect(oldState).toEqual(oldStateBefore);
            });
        });
    });
});
