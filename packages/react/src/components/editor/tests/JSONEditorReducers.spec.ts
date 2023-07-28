import {IReduxAction} from '../../../utils';
import {JSONEditorActionPayload, JSONEditorActions} from '../JSONEditorActions';
import {
    jsonEditorInitialState,
    jsonEditorsInitialState,
    jsonEditorsReducer,
    JSONEditorState,
} from '../JSONEditorReducers';
import {JSONEditorUtils} from '../JSONEditorUtils';

describe('JSONEditorReducers', () => {
    let oldState: JSONEditorState[];

    beforeEach(() => {
        oldState = [
            {
                ...jsonEditorInitialState,
            },
        ];
    });

    const unrelatedAction: IReduxAction<JSONEditorActionPayload> = {
        type: 'DO_SOMETHING',
        payload: {id: ''},
    };

    it('should return the default state if the action is not related and the state is undefined', () => {
        expect(jsonEditorsReducer(undefined, unrelatedAction)).toEqual(jsonEditorsInitialState);
    });

    it('should return the old state when the action is unrelated to jsonEditor containers', () => {
        const newState: JSONEditorState[] = jsonEditorsReducer(oldState, unrelatedAction);

        expect(oldState).toEqual(newState);
    });

    describe('addJSONEditor', () => {
        const getNewJSONEditor = (
            state: JSONEditorState[],
            action: IReduxAction<JSONEditorActionPayload>,
        ): JSONEditorState[] => state.filter((jsonEditor) => jsonEditor.id === action.payload.id);

        it('should return the old state with one more jsonEditor', () => {
            const action = JSONEditorActions.addJSONEditor('new-json-editor');
            const newState = jsonEditorsReducer(oldState, action);

            expect(newState.length).toBe(oldState.length + 1);
            expect(getNewJSONEditor(newState, action).length).toBe(1);
        });

        it('should return a jsonEditor with the default value, valid prop if not passed', () => {
            const action = JSONEditorActions.addJSONEditor('new-json-editor');
            const newState = jsonEditorsReducer(oldState, action);
            const newJSONEditor: JSONEditorState = getNewJSONEditor(newState, action)[0];

            expect(newJSONEditor).toEqual(expect.objectContaining(action.payload));
        });

        it('should return a jsonEditor with the value in the payload if passed', () => {
            const testValue = '{}';
            const action = JSONEditorActions.addJSONEditor('new-json-editor', testValue);
            const newState = jsonEditorsReducer(oldState, action);
            const newJSONEditor = getNewJSONEditor(newState, action)[0];

            expect(newJSONEditor.value).toBe(testValue);
        });

        it('should return a jsonEditor with the valid status if passed', () => {
            jest.spyOn(JSONEditorUtils, 'validateValue').mockReturnValue(true);
            const action = JSONEditorActions.addJSONEditor('new-json-editor', '{}');
            const newState = jsonEditorsReducer(oldState, action);
            const newJSONEditor = getNewJSONEditor(newState, action)[0];

            expect(newJSONEditor.valid).toBe(true);
        });
    });

    describe('updateJSONEditorValue', () => {
        describe('with a different id', () => {
            it('should not update a jsonEditor not having the id passed in the payload', () => {
                const action = JSONEditorActions.updateJSONEditorValue('a-different-id', '{}');

                expect(jsonEditorsReducer(oldState, action)[0]).toEqual(oldState[0]);
            });
        });

        describe('with the same id', () => {
            it('should return a jsonEditor with the default value if not passed', () => {
                oldState[0] = {...oldState[0], value: '{}'};
                const action = JSONEditorActions.updateJSONEditorValue(oldState[0].id);
                const newState = jsonEditorsReducer(oldState, action);

                expect(action.payload.value).toBe('');
                expect(newState[0].value).toBe(action.payload.value);
            });

            it('should return a jsonEditor with the value in the payload if passed', () => {
                const action = JSONEditorActions.updateJSONEditorValue(oldState[0].id, '{}');
                const newState = jsonEditorsReducer(oldState, action);

                expect(newState[0].value).toBe(action.payload.value);
            });

            it('should return a jsonEditor with the valid status if passed', () => {
                jest.spyOn(JSONEditorUtils, 'validateValue').mockReturnValue(true);
                const action = JSONEditorActions.updateJSONEditorValue(oldState[0].id, '{}');
                const newState = jsonEditorsReducer(oldState, action);

                expect(newState[0].valid).toBe(true);
            });
        });
    });

    describe('removeJSONEditor', () => {
        it('should return the old state with one less jsonEditor', () => {
            const action = JSONEditorActions.removeJSONEditor(oldState[0].id);
            const newState = jsonEditorsReducer(oldState, action);

            expect(newState.length).toBe(oldState.length - 1);
            expect(newState.filter((jsonEditor) => jsonEditor.id === oldState[0].id).length).toBe(0);
        });
    });
});
