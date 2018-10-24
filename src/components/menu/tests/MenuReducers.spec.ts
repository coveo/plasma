import * as _ from 'underscore';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {addMenu, IMenuPayload, removeMenu, toggleMenu} from '../MenuActions';
import {IMenusState, IMenuState, menuCompositeInitialState, menuCompositeReducer, menuInitialState, menuReducer} from '../MenuReducers';

describe('Menu', () => {
    describe('Menu Reducers', () => {
        const genericAction: IReduxAction<IMenuPayload> = {
            type: 'DO_SOMETHING',
            payload: {
                id: 'menu-id',
            },
        };

        it('should return the default state if the action is not defined and the state is undefined', () => {
            const newState: IMenusState = menuCompositeReducer(undefined, genericAction);

            expect(newState).toBe(menuCompositeInitialState);
        });

        it('should return the default state if the action is not defined and the state is undefined for one menu', () => {
            const newState: IMenuState = menuReducer(undefined, genericAction);

            expect(newState).toBe(menuInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: IMenusState = {'test': menuInitialState};
            const newState: IMenusState = menuCompositeReducer(oldState, genericAction);

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
                const oldState: IMenusState = {[id]: {...menuInitialState, id}};
                const newState: IMenusState = menuCompositeReducer(oldState, addMenu(id));

                expect(newState[id].id).toBe(id);
            });

            it('should not modify the old state', () => {
                const oldState: IMenusState = {[id]: {...menuInitialState, id}};
                const oldStateBefore = _.clone(oldState);
                menuCompositeReducer(oldState, addMenu(id));

                expect(oldState).toEqual(oldStateBefore);
            });
        });

        describe('REMOVE_MENU', () => {
            const id = 'remove-menu';
            let defaultState: IMenusState;

            beforeEach(() => {
                defaultState = {[id]: menuInitialState};
            });

            it('should return the old state with one less menu', () => {
                const oldState: IMenusState = defaultState;
                const newState: IMenusState = menuCompositeReducer(oldState, removeMenu(id));

                expect(newState[id]).not.toBeDefined();
            });

            it('should not modify the old state', () => {
                const oldState: IMenusState = {[id]: {...menuInitialState, id}};
                const oldStateBefore = _.clone(oldState);
                menuCompositeReducer(oldState, removeMenu(id));

                expect(oldState).toEqual(oldStateBefore);
            });
        });

        describe('TOGGLE_MENU', () => {
            const id = 'open-menu';
            let defaultState: IMenusState;

            beforeEach(() => {
                defaultState = {[id]: {...menuInitialState, id}};
            });

            it('should set the open property to true', () => {
                const oldState: IMenusState = defaultState;
                const newState: IMenusState = menuCompositeReducer(oldState, toggleMenu(id, true));

                expect(newState[id].id).toBe(id);
                expect(newState[id].open).toBe(true);
            });

            it('should set the open property to false if its true before', () => {
                const oldState = _.clone(defaultState);
                oldState[id].open = true;
                const newState: IMenusState = menuCompositeReducer(oldState, toggleMenu(id));

                expect(newState[id].id).toBe(id);
                expect(newState[id].open).toBe(false);
            });

            it('should set the open property to true if its false before', () => {
                const oldState = _.clone(defaultState);
                oldState[id].open = false;
                const newState: IMenusState = menuCompositeReducer(oldState, toggleMenu(id));

                expect(newState[id].id).toBe(id);
                expect(newState[id].open).toBe(true);
            });

            it('should not throw if the the open property is already true', () => {
                const state = _.clone(defaultState);
                state[id].open = true;

                const oldState: IMenusState = state;
                let newState: IMenusState = {};
                expect(() => newState = menuCompositeReducer(oldState, toggleMenu(id, true))).not.toThrow();

                expect(newState[id].id).toBe(id);
                expect(newState[id].open).toBe(true);
            });

            it('should not modify the old state', () => {
                const oldState: IMenusState = {[id]: {...menuInitialState, id}};
                const oldStateBefore = _.clone(oldState);
                menuCompositeReducer(oldState, toggleMenu(id, true));

                expect(oldState).toEqual(oldStateBefore);
            });
        });
    });
});
