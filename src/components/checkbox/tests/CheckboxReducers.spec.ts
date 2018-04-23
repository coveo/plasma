import {IReduxAction} from '../../../utils/ReduxUtils';
import {CheckboxActions, ICheckboxActionPayload} from '../CheckboxActions';
import {checkboxesInitialState, checkboxesReducer, checkboxInitialState, checkboxReducer, ICheckboxState} from '../CheckboxReducers';

describe('Checkbox', () => {
    describe('CheckboxReducers', () => {
        const genericAction: IReduxAction<ICheckboxActionPayload> = {
            type: 'DO_SOMETHING',
            payload: {
                id: 'some-checkbox',
            },
        };

        it('should return the default state if the action is not defined and the state is undefined', () => {
            const oldState: ICheckboxState[] = undefined;
            const checkboxsState: ICheckboxState[] = checkboxesReducer(oldState, genericAction);

            expect(checkboxsState).toBe(checkboxesInitialState);
        });

        it('should return the default state if the action is not defined and the state is undefined for one checkbox', () => {
            const oldState: ICheckboxState = undefined;
            const checkboxState: ICheckboxState = checkboxReducer(oldState, genericAction);

            expect(checkboxState).toBe(checkboxInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: ICheckboxState[] = [checkboxInitialState];
            const checkboxsState: ICheckboxState[] = checkboxesReducer(oldState, genericAction);

            expect(checkboxsState).toBe(oldState);
        });

        it('should return the old state when the action is not defined for one checkbox', () => {
            const oldState: ICheckboxState = checkboxInitialState;
            const checkboxState: ICheckboxState = checkboxReducer(oldState, genericAction);

            expect(checkboxState).toBe(oldState);
        });

        it('should return the old state with one more ICheckboxState when the action is "CheckboxAction.add"', () => {
            let oldState: ICheckboxState[] = checkboxesInitialState;
            const action: IReduxAction<ICheckboxActionPayload> = {
                type: CheckboxActions.add,
                payload: {
                    id: 'some-checkbox',
                    checked: true,
                },
            };
            let checkboxesState: ICheckboxState[] = checkboxesReducer(oldState, action);

            expect(checkboxesState.length).toBe(oldState.length + 1);
            expect(checkboxesState.filter((checkbox) => checkbox.id === action.payload.id).length).toBe(1);

            oldState = checkboxesState;
            action.payload.id = 'some-checkbox2';
            checkboxesState = checkboxesReducer(oldState, action);

            expect(checkboxesState.length).toBe(oldState.length + 1);
            expect(checkboxesState.filter((checkbox) => checkbox.id === action.payload.id).length).toBe(1);
        });

        it('should return the old state without the ICheckboxState when the action is "CheckboxAction.remove"', () => {
            let oldState: ICheckboxState[] = [
                {
                    id: 'some-checkbox2',
                    checked: false,
                    disabled: false,
                }, {
                    id: 'some-checkbox1',
                    checked: false,
                    disabled: false,
                }, {
                    id: 'some-checkbox3',
                    checked: false,
                    disabled: false,
                },
            ];
            const action: IReduxAction<ICheckboxActionPayload> = {
                type: CheckboxActions.remove,
                payload: {
                    id: 'some-checkbox1',
                },
            };
            let checkboxsState: ICheckboxState[] = checkboxesReducer(oldState, action);

            expect(checkboxsState.length).toBe(oldState.length - 1);
            expect(checkboxsState.filter((checkbox) => checkbox.id === action.payload.id).length).toBe(0);

            oldState = checkboxsState;
            action.payload.id = 'some-checkbox2';
            checkboxsState = checkboxesReducer(oldState, action);

            expect(checkboxsState.length).toBe(oldState.length - 1);
            expect(checkboxsState.filter((checkbox) => checkbox.id === action.payload.id).length).toBe(0);
        });

        it('should toggle a checkbox when the action is "CheckboxAction.toggle"', () => {
            const oldState: ICheckboxState[] = [
                {
                    id: 'some-checkbox1',
                    checked: false,
                    disabled: false,
                },
                {
                    id: 'some-checkbox2',
                    checked: false,
                    disabled: false,
                },
                {
                    id: 'some-checkbox3',
                    checked: true,
                    disabled: false,
                },
            ];

            const action: IReduxAction<ICheckboxActionPayload> = {
                type: CheckboxActions.toggle,
                payload: {
                    id: 'some-checkbox1',
                },
            };
            const checkboxesState: ICheckboxState[] = checkboxesReducer(oldState, action);

            expect(checkboxesState.length).toBe(oldState.length);
            expect(checkboxesState.filter((checkbox) => checkbox.id === action.payload.id)[0].checked).toBe(true);
            expect(checkboxesState.filter((checkbox) => checkbox.id === 'some-checkbox2')[0].checked).toBe(false);
            expect(checkboxesState.filter((checkbox) => checkbox.id === 'some-checkbox3')[0].checked).toBe(true);
        });

        it('should toggle a checkbox to the checked state passed in the payload if there is one when the action is "CheckboxAction.toggle"', () => {
            const oldState: ICheckboxState[] = [
                {
                    id: 'some-checkbox1',
                    checked: false,
                    disabled: false,
                },
                {
                    id: 'some-checkbox2',
                    checked: false,
                    disabled: false,
                },
                {
                    id: 'some-checkbox3',
                    checked: true,
                    disabled: false,
                },
            ];

            const action: IReduxAction<ICheckboxActionPayload> = {
                type: CheckboxActions.toggle,
                payload: {
                    id: 'some-checkbox1',
                    checked: false,
                },
            };
            const action2: IReduxAction<ICheckboxActionPayload> = {
                type: CheckboxActions.toggle,
                payload: {
                    id: 'some-checkbox1',
                    checked: true,
                },
            };
            const checkboxesState: ICheckboxState[] = checkboxesReducer(oldState, action);
            const checkboxesState2: ICheckboxState[] = checkboxesReducer(oldState, action2);

            expect(checkboxesState.length).toBe(oldState.length);
            expect(checkboxesState2.length).toBe(oldState.length);
            expect(checkboxesState.filter((checkbox) => checkbox.id === action.payload.id)[0].checked).toBe(false);
            expect(checkboxesState2.filter((checkbox) => checkbox.id === action.payload.id)[0].checked).toBe(true);
        });
    });
});
