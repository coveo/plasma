import {type EditorProps} from '@monaco-editor/react';
import {FunctionComponent} from 'react';

const MockedEditor: FunctionComponent<EditorProps> = (props) => <div data-testid="monaco-editor" />;

export default MockedEditor;

export const loader = {
    config: jest.fn(),
};
