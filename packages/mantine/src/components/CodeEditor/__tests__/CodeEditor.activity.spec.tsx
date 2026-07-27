import {Tabs} from '@mantine/core';
import {render, screen, userEvent, waitFor} from '@test-utils';
import {CodeEditor} from '../CodeEditor.js';

// Use case: a CodeEditor inside Tabs. Switching to another tab and back used to crash the editor because
// React's `<Activity>` (how Tabs hides inactive panels) disposes the Monaco editor and it was never recreated.
//
// To reproduce it we use the real `@monaco-editor/react` (not mocked) and only fake the Monaco engine via
// `window.monaco`, which the real loader honors instead of loading the jsdom-incompatible engine. Rendering
// with `env="default"` keeps `<Activity>` active (Mantine disables it when `env === 'test'`).
vi.mock('monaco-editor');

interface FakeEditor {
    dispose: () => void;
    onDidDispose: (cb: () => void) => {dispose: () => void};
}

const createFakeEditor = (): FakeEditor => {
    const disposeListeners = new Set<() => void>();
    const fakeModel = {
        getFullModelRange: vi.fn(() => ({})),
        dispose: vi.fn(),
        uri: {path: ''},
    };
    return {
        getModel: vi.fn(() => fakeModel),
        getOption: vi.fn(() => false),
        getValue: vi.fn(() => ''),
        setValue: vi.fn(),
        executeEdits: vi.fn(),
        pushUndoStop: vi.fn(),
        updateOptions: vi.fn(),
        setModel: vi.fn(),
        saveViewState: vi.fn(() => ({})),
        restoreViewState: vi.fn(),
        revealLine: vi.fn(),
        focus: vi.fn(),
        trigger: vi.fn(),
        getAction: vi.fn(() => ({run: vi.fn(() => Promise.resolve())})),
        onDidChangeModelContent: vi.fn(() => ({dispose: vi.fn()})),
        onDidFocusEditorText: vi.fn(() => ({dispose: vi.fn()})),
        onDidBlurEditorText: vi.fn(() => ({dispose: vi.fn()})),
        onDidDispose: vi.fn((cb: () => void) => {
            disposeListeners.add(cb);
            return {dispose: () => disposeListeners.delete(cb)};
        }),
        dispose: vi.fn(() => {
            disposeListeners.forEach((cb) => cb());
        }),
    } as unknown as FakeEditor;
};

const createMock = vi.fn(() => createFakeEditor());

const fakeMonaco = {
    Uri: {parse: (path: string) => ({path, toString: () => path})},
    editor: {
        create: createMock,
        getModel: vi.fn(() => undefined),
        createModel: vi.fn(() => ({getFullModelRange: vi.fn(() => ({})), dispose: vi.fn(), uri: {path: ''}})),
        defineTheme: vi.fn(),
        setTheme: vi.fn(),
        setModelLanguage: vi.fn(),
        onDidChangeMarkers: vi.fn(() => ({dispose: vi.fn()})),
        getModelMarkers: vi.fn(() => []),
        EditorOption: {readOnly: 'readOnly'},
    },
};

describe('CodeEditor with React Activity', () => {
    beforeEach(() => {
        createMock.mockClear();
        // `@monaco-editor/react`'s real loader resolves the Monaco instance from `window.monaco` when present,
        // so it never hits the network or loads the real (jsdom-incompatible) engine.
        (window as unknown as {monaco: typeof fakeMonaco}).monaco = fakeMonaco;
    });

    afterEach(() => {
        delete (window as unknown as {monaco?: typeof fakeMonaco}).monaco;
    });

    it('recreates the editor after being hidden and shown again by Activity', async () => {
        const user = userEvent.setup();

        render(
            <Tabs defaultValue="editor" keepMountedMode="activity">
                <Tabs.List>
                    <Tabs.Tab value="editor">Editor</Tabs.Tab>
                    <Tabs.Tab value="other">Other</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="editor">
                    <CodeEditor monacoLoader="cdn" aria-label="code" />
                </Tabs.Panel>
                <Tabs.Panel value="other">Other content</Tabs.Panel>
            </Tabs>,
            {env: 'default'},
        );

        // The editor is shown and created once on the initially active tab.
        expect(await screen.findByTestId('editor-wrapper')).toBeVisible();
        await waitFor(() => expect(createMock).toHaveBeenCalledTimes(1));

        // Switch away (Activity hides the panel and disposes the editor) then back.
        await user.click(screen.getByRole('tab', {name: 'Other'}));
        await user.click(screen.getByRole('tab', {name: 'Editor'}));

        // The editor is visible again and a fresh instance was created. Before the fix, coming back reused the
        // disposed editor, which crashed, leaving no editor on the tab.
        expect(await screen.findByTestId('editor-wrapper')).toBeVisible();
        await waitFor(() => expect(createMock).toHaveBeenCalledTimes(2));
    });
});
