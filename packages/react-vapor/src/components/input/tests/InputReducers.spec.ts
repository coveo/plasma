import {IReduxAction} from '../../../utils/ReduxUtils';
import {
    addInput,
    changeInputValue,
    IInputActionPayload,
    removeInput,
    setDisabledInput,
    validateInputValue,
} from '../InputActions';
import {IInputState, inputInitialState, inputReducer, inputsInitialState, inputsReducer} from '../InputReducers';

describe('Reducers', () => {
    let oldState: IInputState[];

    beforeEach(() => {
        oldState = [
            {
                ...inputInitialState,
            },
        ];
    });

    describe('InputReducers', () => {
        const unrelatedAction: IReduxAction<any> = {
            type: 'DO_SOMETHING',
            payload: {id: ''},
        };

        it('should return the default state if the action is not related and the state is undefined ', () => {
            expect(inputsReducer(undefined, unrelatedAction)).toEqual(inputsInitialState);
        });

        it('should return the default state if the action is not related and the state is undefined for one input state', () => {
            expect(inputReducer(undefined, unrelatedAction)).toEqual(inputInitialState);
        });

        it('should return the old state when the action is unrelated to input containers', () => {
            const newState: IInputState[] = inputsReducer(oldState, unrelatedAction);

            expect(oldState).toEqual(newState);
        });

        it('should return the old state when the action is unrelated for one container', () => {
            const newState: IInputState = inputReducer(oldState[0], unrelatedAction);

            expect(oldState[0]).toEqual(newState);
        });

        describe('addInput', () => {
            const getNewInput = (state: IInputState[], action: IReduxAction<IInputActionPayload>): IInputState[] =>
                state.filter((input) => input.id === action.payload.id);

            it('should return the old state with one more Input', () => {
                const action = addInput('new-input');
                const newState = inputsReducer(oldState, action);

                expect(newState.length).toBe(oldState.length + 1);
                expect(getNewInput(newState, action).length).toBe(1);
            });

            it('should return an input with the default value, valid, and disabled prop if not passed', () => {
                const action = addInput('new-input');
                const newState = inputsReducer(oldState, action);
                const newInput: IInputState = getNewInput(newState, action)[0];

                expect(newInput).toEqual(jasmine.objectContaining(action.payload));
            });

            it('should return an input with the value in the payload if passed', () => {
                const testValue = 'testValue';
                const action = addInput('new-input', testValue);
                const newState = inputsReducer(oldState, action);
                const newInput = getNewInput(newState, action)[0];

                expect(newInput.value).toBe(testValue);
            });

            it('should return an input with the valid value in the payload if passed', () => {
                const validValue = false;
                const action = addInput('new-input', undefined, validValue);
                const newState = inputsReducer(oldState, action);
                const newInput = getNewInput(newState, action)[0];

                expect(newInput.valid).toBe(validValue);
            });

            it('should return an input with the disabled value in the payload if passed', () => {
                const disabledValue = true;
                const action = addInput('new-input', undefined, undefined, disabledValue);
                const newState = inputsReducer(oldState, action);
                const newInput = getNewInput(newState, action)[0];

                expect(newInput.disabled).toBe(disabledValue);
            });
        });

        describe('changeInputValue', () => {
            describe('with a different id', () => {
                it('should not change an input not having the id passed in the payload', () => {
                    const action = changeInputValue('a different id', 'a new value');
                    expect(inputsReducer(oldState, action)[0]).toEqual(oldState[0]);
                });
            });

            describe('with the same id', () => {
                it('should return an input with the default value and valid props if only id is passed', () => {
                    oldState[0] = {...oldState[0], value: 'some non default value', valid: false};
                    const action = changeInputValue(oldState[0].id);
                    const newState = inputsReducer(oldState, action);

                    expect(action.payload.value).toBe('');
                    expect(action.payload.valid).toBe(true);
                    expect(newState[0].value).toBe(action.payload.value);
                    expect(newState[0].valid).toBe(action.payload.valid);
                });

                it('should return an input with the value in the payload if passed', () => {
                    const action = changeInputValue(oldState[0].id, 'some new value');
                    const newState = inputsReducer(oldState, action);

                    expect(newState[0].value).toBe(action.payload.value);
                });

                it('should return an input with the valid value in the payload if passed', () => {
                    const action = changeInputValue(oldState[0].id, undefined, false);
                    const newState = inputsReducer(oldState, action);

                    expect(newState[0].valid).toBe(action.payload.valid);
                });
            });
        });

        it('should return the old state with one less Input when the action is InputActions.remove', () => {
            const action = removeInput(oldState[0].id);
            const newState = inputsReducer(oldState, action);

            expect(newState.length).toBe(oldState.length - 1);
            expect(newState.filter((input) => input.id === oldState[0].id).length).toBe(0);
        });

        it('should modify the disabled state for the Input having the same id as in the action payload', () => {
            const setDisabledTrueAction = setDisabledInput(oldState[0].id, true);
            const newState = inputsReducer(oldState, setDisabledTrueAction);

            expect(newState[0].disabled).toBe(true);

            const setDisabledFalseAction = setDisabledInput(oldState[0].id, false);
            const secondNewState = inputsReducer(oldState, setDisabledFalseAction);

            expect(secondNewState[0].disabled).toBe(false);
        });

        it('should not modify the disabled state for the Input having a different id as in the action payload', () => {
            const setDisabledTrueAction = setDisabledInput('a different id', true);
            const newState = inputsReducer(oldState, setDisabledTrueAction);

            expect(newState[0].disabled).toBe(oldState[0].disabled);
            expect(oldState).toEqual(oldState);

            const setDisabledFalseAction = setDisabledInput('a different id', false);
            const secondNewState = inputsReducer(oldState, setDisabledFalseAction);

            expect(secondNewState[0].disabled).toBe(oldState[0].disabled);
            expect(oldState).toEqual(oldState);
        });

        it('should modify the valid state for the Input having the same id as in the action payload', () => {
            const setValidToFalseAction = validateInputValue(oldState[0].id, false);
            const newState = inputsReducer(oldState, setValidToFalseAction);

            expect(newState[0].valid).toBe(false);

            const setValidToTrueAction = validateInputValue(oldState[0].id, true);
            const secondNewState = inputsReducer(oldState, setValidToTrueAction);

            expect(secondNewState[0].valid).toBe(true);
        });

        it('should not modify the valid state for the Input having a different id as in the action payload', () => {
            const setValidToFalseAction = validateInputValue('different id', false);
            const newState = inputsReducer(oldState, setValidToFalseAction);

            expect(newState[0].valid).toBe(oldState[0].valid);
            expect(oldState).toEqual(oldState);

            const setDisabledFalseAction = setDisabledInput('a different id', false);
            const secondNewState = inputsReducer(oldState, setDisabledFalseAction);

            expect(secondNewState[0].valid).toBe(oldState[0].valid);
            expect(oldState).toEqual(oldState);
        });
    });
});
