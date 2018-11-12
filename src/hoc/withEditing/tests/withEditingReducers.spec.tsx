import {ComponentId} from '../../../utils/ComponentUtils';
import {toggleDirtyComponent} from '../withEditingActions';
import {dirtyComponentsInitialState, getIsDirty, withEditingReducer} from '../withEditingReducers';

describe('withEditing', () => {
    describe('withEditingReducers', () => {
        const genericAction = {
            type: 'DO_SOMETHING',
            payload: {
                id: 'some-checkbox',
            },
        };

        it('should return the default state if the action is not defined and the state is undefined', () => {
            const oldState: ComponentId[] = undefined;

            expect(withEditingReducer(oldState, genericAction)).toEqual(dirtyComponentsInitialState);
        });

        it('should return the old state when the action is not related', () => {
            const oldState: ComponentId[] = ['someId'];

            expect(withEditingReducer(oldState, genericAction)).toEqual(oldState);
        });

        describe('toggleDirtyComponent with true', () => {
            const payload: [ComponentId, boolean] = ['someId', true];

            it('should return the oldState with the id passed in the payload', () => {
                const oldState: ComponentId[] = [];
                const expectedState: ComponentId[] = [payload[0]];

                expect(withEditingReducer(oldState, toggleDirtyComponent(payload[0], payload[1]))).toEqual(expectedState);
            });

            it('should return the oldState if the id is already in the state', () => {
                const oldState: ComponentId[] = [payload[0]];
                const expectedState: ComponentId[] = [payload[0]];

                expect(withEditingReducer(oldState, toggleDirtyComponent(payload[0], payload[1]))).toEqual(expectedState);
            });
        });

        describe('toggleDirtyComponent with false', () => {
            const payload: [ComponentId, boolean] = ['someId', false];

            it('should return the oldState without the id passed in the payload', () => {
                const oldState: ComponentId[] = [payload[0]];
                const expectedState: ComponentId[] = [];

                expect(withEditingReducer(oldState, toggleDirtyComponent(payload[0], payload[1]))).toEqual(expectedState);
            });

            it('should return the oldState if the id passed in the payload is not in the state', () => {
                const oldState: ComponentId[] = [];
                const expectedState: ComponentId[] = [];

                expect(withEditingReducer(oldState, toggleDirtyComponent(payload[0], payload[1]))).toEqual(expectedState);
            });
        });

        describe('getIsDirty selector', () => {
            const componentId = 'componentId';

            it('should return true if the component id is in the state', () => {
                expect(getIsDirty({dirtyComponents: [componentId]}, componentId)).toBe(true);
            });

            it('should return false if the component id is not in the state', () => {
                expect(getIsDirty({dirtyComponents: []}, componentId)).toBe(false);
            });
        });
    });
});
