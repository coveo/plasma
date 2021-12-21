import {IReactVaporState} from '../../../ReactVaporState';
import {CodeEditorState} from '../CodeEditorReducers';
import {CodeEditorSelectors} from '../CodeEditorSelectors';

describe('CodeEditorSelectors', () => {
    describe('getValue', () => {
        it('should not throw and return an empty string when passing a falsy id', () => {
            expect(CodeEditorSelectors.getValue({} as IReactVaporState, undefined)).toBe('');
            expect(CodeEditorSelectors.getValue({} as IReactVaporState, null)).toBe('');
            expect(CodeEditorSelectors.getValue({} as IReactVaporState, '')).toBe('');
        });

        it('should return the value at the specified id', () => {
            const id = '🥔';
            const expectedValue = '{}';
            const expectedCodeEditor: CodeEditorState = {id, value: expectedValue};

            expect(CodeEditorSelectors.getValue({codeEditors: [expectedCodeEditor]}, '🥔')).toBe(expectedValue);
        });
    });
});
