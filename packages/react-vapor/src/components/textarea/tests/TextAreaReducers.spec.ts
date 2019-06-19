import {IReduxAction} from '../../../utils/ReduxUtils';
import {
    addTextArea,
    changeTextAreaValue,
    ITextAreaActionPayload,
    removeTextArea,
    setDisabledTextArea,
} from '../TextAreaActions';
import {ITextAreaState, textAreaInitialState, textAreasInitialState, textAreasReducer} from '../TextAreaReducers';

describe('Reducers', () => {
    let oldState: ITextAreaState[];

    beforeEach(() => {
        oldState = [
            {
                ...textAreaInitialState,
            },
        ];
    });

    describe('TextAreaReducers', () => {
        const unrelatedAction: IReduxAction<any> = {
            type: 'DO_SOMETHING',
            payload: {id: ''},
        };

        it('should return the default state if the action is not related and the state is undefined ', () => {
            expect(textAreasReducer(undefined, unrelatedAction)).toEqual(textAreasInitialState);
        });

        it('should return the old state when the action is unrelated to textArea containers', () => {
            const newState: ITextAreaState[] = textAreasReducer(oldState, unrelatedAction);

            expect(oldState).toEqual(newState);
        });

        describe('addTextArea', () => {
            const getNewTextArea = (
                state: ITextAreaState[],
                action: IReduxAction<ITextAreaActionPayload>
            ): ITextAreaState[] => state.filter((textArea) => textArea.id === action.payload.id);

            it('should return the old state with one more TextArea', () => {
                const action = addTextArea('new-textArea');
                const newState = textAreasReducer(oldState, action);

                expect(newState.length).toBe(oldState.length + 1);
                expect(getNewTextArea(newState, action).length).toBe(1);
            });

            it('should return a textArea with the default value, valid, and disabled prop if not passed', () => {
                const action = addTextArea('new-textArea');
                const newState = textAreasReducer(oldState, action);
                const newTextArea: ITextAreaState = getNewTextArea(newState, action)[0];

                expect(newTextArea).toEqual(jasmine.objectContaining(action.payload));
            });

            it('should return a textArea with the value in the payload if passed', () => {
                const testValue = 'testValue';
                const action = addTextArea('new-textArea', testValue);
                const newState = textAreasReducer(oldState, action);
                const newTextArea = getNewTextArea(newState, action)[0];

                expect(newTextArea.value).toBe(testValue);
            });

            it('should return a textArea with the disabled value in the payload if passed', () => {
                const disabledValue = true;
                const action = addTextArea('new-textArea', undefined, disabledValue);
                const newState = textAreasReducer(oldState, action);
                const newTextArea = getNewTextArea(newState, action)[0];

                expect(newTextArea.disabled).toBe(disabledValue);
            });
        });

        describe('changeTextAreaValue', () => {
            describe('with a different id', () => {
                it('should not change a textArea not having the id passed in the payload', () => {
                    const action = changeTextAreaValue('a different id', 'a new value');
                    expect(textAreasReducer(oldState, action)[0]).toEqual(oldState[0]);
                });
            });

            describe('with the same id', () => {
                it('should return a textArea with the default value if not passed', () => {
                    oldState[0] = {...oldState[0], value: 'some non default value'};
                    const action = changeTextAreaValue(oldState[0].id);
                    const newState = textAreasReducer(oldState, action);

                    expect(action.payload.value).toBe('');
                    expect(newState[0].value).toBe(action.payload.value);
                });

                it('should return a textArea with the value in the payload if passed', () => {
                    const action = changeTextAreaValue(oldState[0].id, 'some new value');
                    const newState = textAreasReducer(oldState, action);

                    expect(newState[0].value).toBe(action.payload.value);
                });
            });
        });

        it('should return the old state with one less TextArea when the action is TextAreaActions.remove', () => {
            const action = removeTextArea(oldState[0].id);
            const newState = textAreasReducer(oldState, action);

            expect(newState.length).toBe(oldState.length - 1);
            expect(newState.filter((textArea) => textArea.id === oldState[0].id).length).toBe(0);
        });

        it('should modify the disabled state for the TextArea having the same id as in the action payload', () => {
            const setDisabledTrueAction = setDisabledTextArea(oldState[0].id, true);
            const newState = textAreasReducer(oldState, setDisabledTrueAction);

            expect(newState[0].disabled).toBe(true);

            const setDisabledFalseAction = setDisabledTextArea(oldState[0].id, false);
            const secondNewState = textAreasReducer(oldState, setDisabledFalseAction);

            expect(secondNewState[0].disabled).toBe(false);
        });

        it('should not modify the disabled state for the TextArea having a different id as in the action payload', () => {
            const setDisabledTrueAction = setDisabledTextArea('a different id', true);
            const newState = textAreasReducer(oldState, setDisabledTrueAction);

            expect(newState[0].disabled).toBe(oldState[0].disabled);
            expect(oldState).toEqual(oldState);

            const setDisabledFalseAction = setDisabledTextArea('a different id', false);
            const secondNewState = textAreasReducer(oldState, setDisabledFalseAction);

            expect(secondNewState[0].disabled).toBe(oldState[0].disabled);
            expect(oldState).toEqual(oldState);
        });
    });
});
