import type {EditorProps} from '@monaco-editor/react';
import {type FunctionComponent, useEffect} from 'react';

const editor: any = {
    onDidFocusEditorText: vi.fn(),
    onDidBlurEditorText: vi.fn(),
    onDidChangeCursorSelection: vi.fn(),
    createDecorationsCollection: vi.fn(() => ({set: vi.fn()})),
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

const definedThemes = new Map<string, unknown>();

const monaco: any = {
    MarkerSeverity: {Hint: 1, Info: 2, Warning: 4, Error: 8},
    editor: {
        defineTheme: vi.fn((name: string, themeData: unknown) => definedThemes.set(name, themeData)),
    },
};

let currentOnValidate: EditorProps['onValidate'];
let currentTheme: EditorProps['theme'];

/**
 * Simulates Monaco reporting validation markers for the current content of the mounted editor.
 */
export const validate = (markers: Array<{severity: number}>) => currentOnValidate?.(markers as any);

/**
 * Returns the definition of the theme applied to the mounted editor, or `undefined` when that theme was never defined
 * (Monaco then falls back to its own `vs` theme).
 */
export const getAppliedTheme = () => (currentTheme ? definedThemes.get(currentTheme) : undefined);

const MockedEditor: FunctionComponent<EditorProps> = (props) => {
    useEffect(() => {
        currentOnValidate = props.onValidate;
        currentTheme = props.theme;
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
