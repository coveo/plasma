import {useForm} from '@mantine/form';
import {loader} from '@monaco-editor/react';
import {render, screen, userEvent, waitForElementToBeRemoved} from '@test-utils';
import type {editor} from 'monaco-editor';
import {useRef} from 'react';
import {CodeEditor} from '../CodeEditor.js';
import {XML} from '../languages/xml.js';

vi.mock('monaco-editor');
vi.mock('@monaco-editor/react');

describe('CodeEditor', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders the monaco editor, a copy to clipboard button and a search button', async () => {
        render(<CodeEditor label="label" description="description" />);

        await waitForElementToBeRemoved(screen.queryByRole('presentation'));

        expect(screen.getByText(/label/)).toBeInTheDocument();
        expect(screen.getByText(/description/)).toBeInTheDocument();
        expect(await screen.findByTestId('monaco-editor')).toBeInTheDocument();
        expect(await screen.findByRole('button', {name: /copy/i})).toBeInTheDocument();
        expect(await screen.findByRole('button', {name: /search/i})).toBeInTheDocument();
    });

    it.skip('shows validation errors underneath the code editor', async () => {
        const Fixture = () => {
            const form = useForm({
                initialValues: {
                    myJsonCode: '{}',
                },
                initialErrors: {
                    myJsonCode: 'Invalid configuration',
                },
            });
            return <CodeEditor {...form.getInputProps('myJsonCode')} />;
        };
        render(<Fixture />);
        await waitForElementToBeRemoved(screen.queryByRole('presentation'));

        expect(screen.getByText(/invalid configuration/i)).toBeInTheDocument();
        expect(screen.getByTestId('editor-wrapper')).toHaveStyle('border-color: #cd2113');
    });

    it('loads the monaco editor files from node_modules when monacoLoader prop is "local"', async () => {
        render(<CodeEditor label="label" description="description" monacoLoader="local" />);
        await waitForElementToBeRemoved(screen.queryByRole('presentation'));
        expect(loader.config).toHaveBeenCalledTimes(1);
        expect(screen.getByTestId('monaco-editor')).toBeInTheDocument();
    });

    it('loads the monaco editor files via CDN when monacoLoader prop is "cnd"', async () => {
        render(<CodeEditor label="label" description="description" monacoLoader="cdn" />);
        expect(loader.config).not.toHaveBeenCalled();
        expect(screen.getByTestId('monaco-editor')).toBeInTheDocument();
    });

    it('loads the xml language in the monaco instance if the editor language is xml', async () => {
        const xmlLanguageSpy = vi.spyOn(XML, 'register').mockImplementation(vi.fn());
        render(<CodeEditor label="label" description="description" monacoLoader="cdn" language="xml" />);
        expect(xmlLanguageSpy).toHaveBeenCalledTimes(1);
    });

    it('focus and triggers search on the Monaco editor when handleSearch is called', async () => {
        const user = userEvent.setup();
        render(<CodeEditor />);
        expect(await screen.findByTestId('monaco-editor')).toBeInTheDocument();
        await user.click(screen.getByRole('button', {name: /search/i}));
        expect(screen.getByTestId('monaco-editor')).toHaveAttribute('focus');
        expect(screen.getByTestId('monaco-editor')).toHaveAttribute('trigger');
    });

    it('calls the onCopy callback when clicking on the copy button', async () => {
        const user = userEvent.setup();
        const onCopySpy = vi.fn();
        render(<CodeEditor onCopy={onCopySpy} />);
        await user.click(screen.getByRole('button', {name: /copy/i}));

        expect(onCopySpy).toHaveBeenCalledTimes(1);
    });

    it('calls the onSearch callback when clicking on the search button', async () => {
        const user = userEvent.setup();
        const onSearchSpy = vi.fn();
        render(<CodeEditor onSearch={onSearchSpy} />);
        // Wait for editor to mount to ensure editorRef.current is defined so handleSearch invokes onSearch
        await screen.findByTestId('monaco-editor');
        await user.click(screen.getByRole('button', {name: /search/i}));
        expect(onSearchSpy).toHaveBeenCalledTimes(1);
    });

    it('defines editorHandle on mount', async () => {
        let editorHandle: React.MutableRefObject<editor.IStandaloneCodeEditor> = null;
        const EditorWrapper = () => {
            editorHandle = useRef<editor.IStandaloneCodeEditor | null>(null);
            return <CodeEditor editorHandle={editorHandle} />;
        };

        render(<EditorWrapper />);

        await waitForElementToBeRemoved(screen.queryByRole('presentation'));

        expect(editorHandle.current).not.toBeNull();
    });
});
