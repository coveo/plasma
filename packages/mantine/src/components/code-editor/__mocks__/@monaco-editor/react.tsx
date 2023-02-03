import {EditorProps} from '@monaco-editor/react';
import {FunctionComponent, useEffect} from 'react';

const editor: any = {
    onDidFocusEditorText: vi.fn(),
    onDidBlurEditorText: vi.fn(),
};

const monaco: any = vi.fn();

const MockedEditor: FunctionComponent<EditorProps> = (props) => {
    useEffect(() => {
        props.onMount(editor, monaco);
    }, []);
    return <div data-testid="monaco-editor" />;
};

export default MockedEditor;

export const loader: any = {
    config: vi.fn(),
};
