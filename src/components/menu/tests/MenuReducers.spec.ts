import * as _ from 'underscore';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {addMenu, IMenuPayload, removeMenu, toggleMenu, updateListMenu} from '../MenuActions';
import {IMenuState, menuCompositeInitialState, menuCompositeReducer, menuInitialState, menuReducer} from '../MenuReducers';

describe('Menu', () => {
    describe('Menu Reducers', () => {
        const genericAction: IReduxAction<IMenuPayload> = {
            type: 'DO_SOMETHING',
            payload: {
                id: 'menu-id',
            },
        };

        it('should return the default state if the action is not defined and the state is undefined', () => {
            const newState: IMenuState[] = menuCompositeReducer(undefined, genericAction);

            expect(newState).toBe(menuCompositeInitialState);
        });

        it('should return the default state if the action is not defined and the state is undefined for one menu', () => {
            const newState: IMenuState = menuReducer(undefined, genericAction);

            expect(newState).toBe(menuInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: IMenuState[] = [menuInitialState];
            const newState: IMenuState[] = menuCompositeReducer(oldState, genericAction);

            expect(newState).toBe(oldState);
        });

        it('should return the old state when the action is not defined for one menu', () => {
            const oldState: IMenuState = menuInitialState;
            const newState: IMenuState = menuReducer(oldState, genericAction);

            expect(newState).toBe(oldState);
        });

        it('should return the old state when the action is not defined for one menu which is in the state', () => {
            const oldState: IMenuState = {...menuInitialState, id: genericAction.payload.id};
            const newState: IMenuState = menuReducer(oldState, genericAction);

            expect(newState).toBe(oldState);
        });

        describe('ADD_MENU', () => {
            const id = 'added-menu';

            it('should return the old state with one more menu', () => {
                const oldState: IMenuState[] = [menuInitialState];
                const newState: IMenuState[] = menuCompositeReducer(oldState, addMenu(id, []));

                expect(newState.length).toBe(oldState.length + 1);
                expect(newState[1].id).toBe(id);
            });

            it('should not modify the old state', () => {
                const oldState: IMenuState[] = [menuInitialState];
                const oldStateBefore = _.clone(oldState);
                menuCompositeReducer(oldState, addMenu(id, []));

                expect(oldState).toEqual(oldStateBefore);
            });

            it('should return the old state with the list in the menu', () => {
                const list = [{value: 'test'}];

                const oldState: IMenuState[] = [menuInitialState];
                const newState: IMenuState[] = menuCompositeReducer(oldState, addMenu(id, list));

                expect(newState[1].list).toEqual(list);
            });
        });

        describe('REMOVE_MENU', () => {
            const id = 'remove-menu';
            let defaultState: IMenuState[];

            beforeEach(() => {
                defaultState = [_.extend({}, menuInitialState, {id}), menuInitialState];
            });

            it('should return the old state with one less menu', () => {
                const oldState: IMenuState[] = defaultState;
                const newState: IMenuState[] = menuCompositeReducer(oldState, removeMenu(id));

                expect(newState.length).toBe(oldState.length - 1);
                expect(newState[0].id).not.toBe(id);
            });

            it('should not modify the old state', () => {
                const oldState: IMenuState[] = [menuInitialState];
                const oldStateBefore = _.clone(oldState);
                menuCompositeReducer(oldState, removeMenu(id));

                expect(oldState).toEqual(oldStateBefore);
            });
        });

        describe('TOGGLE_MENU', () => {
            const id = 'open-menu';
            let defaultState: IMenuState[];

            beforeEach(() => {
                defaultState = [_.extend({}, menuInitialState, {id}), menuInitialState];
            });

            it('should set the open property to true', () => {
                const oldState: IMenuState[] = defaultState;
                const newState: IMenuState[] = menuCompositeReducer(oldState, toggleMenu(id, true));

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].open).toBe(true);
            });

            it('should set the open property to false if its true before', () => {
                const oldState = _.clone(defaultState);
                oldState[0].open = true;
                const newState: IMenuState[] = menuCompositeReducer(oldState, toggleMenu(id));

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].open).toBe(false);
            });

            it('should set the open property to true if its false before', () => {
                const oldState = _.clone(defaultState);
                oldState[0].open = false;
                const newState: IMenuState[] = menuCompositeReducer(oldState, toggleMenu(id));

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].open).toBe(true);
            });

            it('should not throw if the the open property is already true', () => {
                const state = _.clone(defaultState);
                state[0].open = true;

                const oldState: IMenuState[] = state;
                let newState: IMenuState[] = [];
                expect(() => newState = menuCompositeReducer(oldState, toggleMenu(id, true))).not.toThrow();

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].open).toBe(true);
            });

            it('should not modify the old state', () => {
                const oldState: IMenuState[] = [menuInitialState];
                const oldStateBefore = _.clone(oldState);
                menuCompositeReducer(oldState, toggleMenu(id, true));

                expect(oldState).toEqual(oldStateBefore);
            });
        });

        describe('UPDATE_MENU', () => {
            const id = 'update-menu';
            let defaultState: IMenuState[];

            beforeEach(() => {
                defaultState = [_.extend({}, menuInitialState, {
                    id,
                    open: false,
                    list: [{
                        value: 'test',
                    }],
                }), menuInitialState];
            });

            it('should update the current list in the state', () => {
                const newList = [{
                    value: 'test2',
                    displayValue: 'test22',
                }];

                const oldState: IMenuState[] = defaultState;
                const newState: IMenuState[] = menuCompositeReducer(oldState, updateListMenu(id, newList));

                expect(newState.length).toBe(oldState.length);
                expect(newState[0].id).toBe(id);
                expect(newState[0].list).toEqual(newList);
            });
        });
    });
});
