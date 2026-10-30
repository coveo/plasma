import type {EditorProps} from '@monaco-editor/react';
import {type FunctionComponent, useEffect} from 'react';

const editor: any = {
    onDidFocusEditorText: vi.fn(),
    onDidBlurEditorText: vi.fn(),
    onDidDispose: vi.fn(() => ({dispose: vi.fn()})),
    focus: vi
        .fn()
        .mockImplementation(() =>
            document.querySelector('[data-testid="monaco-editor"]')!.setAttribute('focus', 'true'),
        ),
    trigger: vi
        .fn()
        .mockImplementation(() =>
            document.querySelector('[data-testid="monaco-editor"]')!.setAttribute('trigger', 'true'),
        ),
};

const monaco: any = {
    MarkerSeverity: {Hint: 1, Info: 2, Warning: 4, Error: 8},
    editor: {
        defineTheme: vi.fn(),
    },
};

let currentOnValidate: EditorProps['onValidate'];

/**
 * Simulates Monaco reporting validation markers for the current content of the mounted editor.
 */
export const validate = (markers: Array<{severity: number}>) => currentOnValidate?.(markers as any);

const MockedEditor: FunctionComponent<EditorProps> = (props) => {
    useEffect(() => {
        currentOnValidate = props.onValidate;
    });
    useEffect(() => {
        props.beforeMount?.(monaco);
        props.onMount!(editor, monaco);
    }, []);
    return <div data-testid="monaco-editor" />;
};

export default MockedEditor;

export const loader: any = {
    config: vi.fn(),
};
