import {IReduxAction} from '../../../utils/index.js';
import {CodeEditorActionPayload, CodeEditorActions} from '../CodeEditorActions.js';
import {CodeEditorsInitialState, codeEditorsReducer, CodeEditorsState} from '../CodeEditorReducers.js';

describe('codeEditorReducers', () => {
    const unrelatedAction: IReduxAction<CodeEditorActionPayload> = {
        type: 'DO_SOMETHING',
        payload: {id: ''},
    };

    it('should return the default state if the action is not related and the state is undefined', () => {
        expect(codeEditorsReducer(undefined, unrelatedAction)).toEqual(CodeEditorsInitialState);
    });

    it('should return the old state when the action is unrelated to codeEditor containers', () => {
        const state: any = null;
        const newState: CodeEditorsState = codeEditorsReducer(state, unrelatedAction);

        expect(state).toEqual(newState);
    });

    describe('updateValue', () => {
        it('should return codeEditor with the value in the payload if passed', () => {
            const state = {
                anId: {id: 'anId', value: 'a value'},
                anotherId: {id: 'anotherId', value: 'another value'},
            };

            const action = CodeEditorActions.updateValue(state.anotherId.id, 'a changed value');
            const newState: any = codeEditorsReducer(state, action);

            expect(newState.anId.value).toBe('a value');
            expect(newState.anotherId.value).toBe(action.payload.value);
        });
    });
    describe('remove', () => {
        it('should remove from the store the codeEditor payload id', () => {
            const state = {
                anId: {id: 'anId', value: 'a value'},
                anotherId: {id: 'anotherId', value: 'another value'},
            };

            let action = CodeEditorActions.remove(state.anotherId.id);
            let newState: any = codeEditorsReducer(state, action);

            expect(newState.anId.value).toBe('a value');
            expect(newState.anotherId).toBeUndefined();

            action = CodeEditorActions.remove(state.anId.id);
            newState = codeEditorsReducer(state, action);
        });
    });
});
