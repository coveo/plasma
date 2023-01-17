import {IReduxAction} from '../../utils/index.js';
import {CodeEditorActionPayload, CodeEditorActionTypes} from './CodeEditorActions.js';

export interface CodeEditorsState {
    [key: string]: CodeEditorState;
}

export interface CodeEditorState {
    id: string;
    value: string;
}

export const CodeEditorsInitialState: CodeEditorsState = null;

export const codeEditorsReducer = (
    state: CodeEditorsState = CodeEditorsInitialState,
    action: IReduxAction<CodeEditorActionPayload>
): CodeEditorsState => {
    switch (action.type) {
        case CodeEditorActionTypes.update:
            return {
                ...state,
                [action.payload.id]: {
                    id: action.payload.id,
                    value: action.payload.value,
                },
            };
        case CodeEditorActionTypes.remove:
            if (state && Object.keys(state).length > 1) {
                delete state[action.payload.id];
            } else {
                state = null;
            }
            return state;
        default:
            return state;
    }
};
