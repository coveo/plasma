import {toggleCheckbox} from '../../checkbox/CheckboxActions';
import {DropActions} from '../redux/DropActions';
import {dropInitialState, dropReducer, DropSelectors} from '../redux/DropReducers';

describe('dropReducer', () => {
    describe('DROP_TOGGLE', () => {
        const id = 'petit pied';
        const groupId = 'groupTest';
        const initialState = {[groupId]: {id, isOpen: false}};

        it('should have the initial state by default if its not a drop action', () => {
            expect(dropReducer(undefined, toggleCheckbox('a', true))).toBe(dropInitialState);
        });

        it('should create a new group if the groupId do not exist yet', () => {
            const newGroup = 'el Dinosaure';
            const newState = dropReducer(initialState, DropActions.toggle('big foot', newGroup, false));
            expect(newState[newGroup]).toBeDefined();
        });

        it('should update the id in the group if the current id in the state is different from the id in the payload', () => {
            const newId = 'Rox&Rouky';
            expect(dropReducer(initialState, DropActions.toggle(newId, groupId))[groupId].id).toBe(newId);
        });

        it('should toggle the isOpen if the payload id is the same than the id in the group sent as argument', () => {
            expect(dropReducer(initialState, DropActions.toggle(id, groupId))[groupId].isOpen).toBe(true);
        });
    });

    describe('DropSelectors', () => {
        const id = 'id';
        const groupId = 'tomatos';
        const mockState = {drop: {[groupId]: {id, isOpen: false}}};

        describe('getDropByGroup', () => {
            it('should return undefined if the the group do not exist', () => {
                expect(DropSelectors.getByGroup(mockState, {groupId: 'notAGroupId'})).toBeUndefined();
            });

            it('should return the group if it exist', () => {
                expect(DropSelectors.getByGroup(mockState, {groupId: groupId}).id).toEqual(id);
            });
        });

        describe('isDropOpen', () => {
            it('should return false if the group do not exist', () => {
                expect(DropSelectors.isOpen(mockState, {id: 'test', groupId: 'notAGroupId'})).toBe(false);
            });

            it('should return false if the group exist but the element has a different id', () => {
                expect(DropSelectors.isOpen(mockState, {id: 'test', groupId})).toBe(false);
            });

            it('should return the current isOpen boolean if the group exist and the payload id is the same than the group drop id', () => {
                expect(DropSelectors.isOpen(mockState, {id, groupId})).toBe(false);
            });
        });
    });
});
