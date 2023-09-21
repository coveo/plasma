import {type EditorProps} from '@monaco-editor/react';
import {FunctionComponent, useEffect} from 'react';

const editor: any = {
    onDidFocusEditorText: vi.fn(),
    onDidBlurEditorText: vi.fn(),
    focus: vi
        .fn()
        .mockImplementation(() =>
            document.querySelector('[data-testid="monaco-editor"]').setAttribute('focus', 'true'),
        ),
    trigger: vi
        .fn()
        .mockImplementation(() =>
            document.querySelector('[data-testid="monaco-editor"]').setAttribute('trigger', 'true'),
        ),
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
