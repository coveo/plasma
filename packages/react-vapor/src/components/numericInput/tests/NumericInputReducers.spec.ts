import * as _ from 'underscore';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {NumericInputActions} from '../NumericInputActions';
import {
    initialNumericInputsState, initialNumericInputState,
    INumericInputPayload,
    INumericInputsState,
    numericInputReducer,
} from '../NumericInputReducers';

describe('Numeric Input', () => {
    describe('Numeric Input Reducers', () => {
        const genericAction: IReduxAction<INumericInputPayload> = {
            type: 'DO_SOMETHING',
            payload: {
                id: 'numeric-input-id',
            },
        };

        it('should return the default state if the action is not defined and the state is undefined', () => {
            const newState: INumericInputsState = numericInputReducer(undefined, genericAction);

            expect(newState).toBe(initialNumericInputsState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: INumericInputsState = {...initialNumericInputsState};
            const newState: INumericInputsState = numericInputReducer(oldState, genericAction);

            expect(newState).toBe(oldState);
        });

        it('should return the old state when the action is not defined for one select', () => {
            const oldState: INumericInputsState = {[genericAction.payload.id]: initialNumericInputState};
            const newState: INumericInputsState = numericInputReducer(oldState, genericAction);

            expect(newState).toEqual(oldState);
        });

        describe('mount', () => {
            const id = 'added-numeric-input';

            it('should return the old state with one more numeric input', () => {
                const expectedValue = 5;
                const oldState: INumericInputsState = {other: initialNumericInputState};
                const newState: INumericInputsState = numericInputReducer(oldState, NumericInputActions.mount(id, expectedValue));

                expect(_.keys(newState).length).toBe(_.keys(oldState).length + 1);
                expect(newState[id].value).toBe(expectedValue);
            });

            it('should not modify the old state', () => {
                const oldState: INumericInputsState = {};
                const oldStateBefore = _.clone(oldState);
                numericInputReducer(oldState, NumericInputActions.mount(id, 2));

                expect(oldState).toEqual(oldStateBefore);
            });
        });

        describe('unmount', () => {
            const id = 'to-remove-numeric-input';

            it('should return the old state without the numeric input', () => {
                const oldState: INumericInputsState = {other: initialNumericInputState, [id]: initialNumericInputState};
                const newState: INumericInputsState = numericInputReducer(oldState, NumericInputActions.unmount(id));

                expect(_.keys(newState).length).toBe(_.keys(oldState).length - 1);
                expect(newState[id]).toBeUndefined();
            });

            it('should not throw if the numeric input does not exists', () => {
                const oldState: INumericInputsState = {other: initialNumericInputState};
                const newState: INumericInputsState = numericInputReducer(oldState, NumericInputActions.unmount(id));

                expect(_.keys(newState).length).toBe(_.keys(oldState).length);
                expect(newState[id]).toBeUndefined();
            });

            it('should not modify the old state', () => {
                const oldState: INumericInputsState = {[id]: initialNumericInputState};
                const oldStateBefore = _.clone(oldState);
                numericInputReducer(oldState, NumericInputActions.unmount(id));

                expect(oldState).toEqual(oldStateBefore);
            });
        });

        describe('set', () => {
            const id = 'to-change-numeric-input';

            it('should update the numeric input value in the state', () => {
                const expectedValue = 5;
                const oldState: INumericInputsState = {other: initialNumericInputState, [id]: initialNumericInputState};
                const newState: INumericInputsState = numericInputReducer(oldState, NumericInputActions.setValue(id, expectedValue));

                expect(newState[id].value).toBe(expectedValue);
                expect(newState[id].hasError).toBe(false);
            });

            it('should not throw if the numeric input does not exists', () => {
                const oldState: INumericInputsState = {other: initialNumericInputState};
                const newState: INumericInputsState = numericInputReducer(oldState, NumericInputActions.setValue(id, 25));

                expect(newState[id]).toBeUndefined();
            });

            it('should set the input in error but still update the value if the value is not numeric', () => {
                const expectedValue = 'ToBeOrNot2Be';
                const oldState: INumericInputsState = {[id]: initialNumericInputState};
                const newState: INumericInputsState = numericInputReducer(oldState, NumericInputActions.setValue(id, expectedValue));

                expect(newState[id].hasError).toBe(true);
                expect(newState[id].value).toBe(expectedValue);
            });

            it('should set the input in error but still update the value if the value is lower than the min', () => {
                const expectedValue = 200;
                const min = expectedValue + 1;

                const oldState: INumericInputsState = {[id]: initialNumericInputState};
                const newState: INumericInputsState = numericInputReducer(oldState, NumericInputActions.setValue(id, expectedValue, min));

                expect(newState[id].hasError).toBe(true);
                expect(newState[id].value).toBe(expectedValue);
            });

            it('should set the input in error but still update the value if the value is greater than the max', () => {
                const expectedValue = 200;
                const max = expectedValue - 1;

                const oldState: INumericInputsState = {[id]: initialNumericInputState};
                const newState: INumericInputsState = numericInputReducer(oldState, NumericInputActions.setValue(id, expectedValue, undefined, max));

                expect(newState[id].hasError).toBe(true);
                expect(newState[id].value).toBe(expectedValue);
            });

            it('should not set the input in error if the value is not lower than the min', () => {
                const expectedValue = 200;
                const min = 100;

                const oldState: INumericInputsState = {[id]: initialNumericInputState};
                const newState: INumericInputsState = numericInputReducer(oldState, NumericInputActions.setValue(id, expectedValue, min));

                expect(newState[id].hasError).toBe(false);
                expect(newState[id].value).toBe(expectedValue);
            });

            it('should not set the input in error if the value is not greater than the max', () => {
                const expectedValue = 200;
                const max = 9001;

                const oldState: INumericInputsState = {[id]: initialNumericInputState};
                const newState: INumericInputsState = numericInputReducer(oldState, NumericInputActions.setValue(id, expectedValue, undefined, max));

                expect(newState[id].hasError).toBe(false);
                expect(newState[id].value).toBe(expectedValue);
            });

            it('should not modify the old state', () => {
                const oldState: INumericInputsState = {[id]: initialNumericInputState};
                const oldStateBefore = _.clone(oldState);
                numericInputReducer(oldState, NumericInputActions.setValue(id, 10));

                expect(oldState).toEqual(oldStateBefore);
            });
        });
    });
});
