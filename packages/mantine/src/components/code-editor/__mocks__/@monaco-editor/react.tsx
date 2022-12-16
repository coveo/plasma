import {EditorProps} from '@monaco-editor/react';
import {FunctionComponent, useEffect} from 'react';

const editor: any = {
    onDidFocusEditorText: jest.fn(),
    onDidBlurEditorText: jest.fn(),
};

const monaco: any = jest.fn();

const MockedEditor: FunctionComponent<EditorProps> = (props) => {
    useEffect(() => {
        props.onMount(editor, monaco);
    }, []);
    return <div data-testid="monaco-editor" />;
};

export default MockedEditor;

export const loader = {
    config: jest.fn(),
};

export const useMonaco = () => jest.fn();
