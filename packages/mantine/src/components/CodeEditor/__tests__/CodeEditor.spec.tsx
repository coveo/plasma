import {useForm} from '@mantine/form';
import {loader} from '@monaco-editor/react';
import {act, render, screen, userEvent, waitForElementToBeRemoved} from '@test-utils';
import type {editor} from 'monaco-editor';
import {useRef} from 'react';
import {CodeEditor} from '../CodeEditor.js';
import CodeEditorClasses from '../CodeEditor.module.css';
import {XML} from '../languages/xml.js';

let mockedParentHeight = 600;

vi.mock('monaco-editor');
vi.mock('@monaco-editor/react');
vi.mock('../../hooks/useParentHeight.js', () => ({
    useParentHeight: vi.fn().mockReturnValue([mockedParentHeight, {current: null}]),
}));

describe('CodeEditor', () => {
    beforeEach(() => {
        mockedParentHeight = 600;
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

    describe('validation markers', () => {
        const renderAndValidate = async (...markerLists: Array<Array<{severity: number}>>) => {
            const {validate} =
                await vi.importMock<typeof import('../../../../__mocks__/@monaco-editor/react.js')>(
                    '@monaco-editor/react',
                );
            render(<CodeEditor />);
            await waitForElementToBeRemoved(screen.queryByRole('presentation'));
            markerLists.forEach((markers) => act(() => validate(markers)));
        };

        it('shows the error state when monaco reports an error marker', async () => {
            await renderAndValidate([{severity: 4}, {severity: 8}]);

            expect(screen.getByTestId('editor-wrapper')).toHaveClass(CodeEditorClasses.error);
        });

        it('does not show the error state when monaco only reports warning markers', async () => {
            await renderAndValidate([{severity: 4}]);

            expect(screen.getByTestId('editor-wrapper')).not.toHaveClass(CodeEditorClasses.error);
        });

        it('clears the error state when monaco no longer reports markers', async () => {
            await renderAndValidate([{severity: 8}], []);

            expect(screen.getByTestId('editor-wrapper')).not.toHaveClass(CodeEditorClasses.error);
        });
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
        await waitForElementToBeRemoved(screen.queryByRole('presentation'));
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

    describe('upload', () => {
        const getFileInput = () => document.querySelector<HTMLInputElement>('input[type="file"]');

        it('does not render an upload button when the upload prop is not defined', async () => {
            render(<CodeEditor />);
            await waitForElementToBeRemoved(screen.queryByRole('presentation'));

            expect(screen.queryByRole('button', {name: /upload file/i})).not.toBeInTheDocument();
        });

        it('renders an upload button when the upload prop is defined', async () => {
            render(<CodeEditor upload={{}} />);
            await waitForElementToBeRemoved(screen.queryByRole('presentation'));

            expect(screen.getByRole('button', {name: /upload file/i})).toBeInTheDocument();
        });

        it('uses the custom label as accessible name', async () => {
            render(<CodeEditor upload={{label: 'Import JSON'}} />);
            await waitForElementToBeRemoved(screen.queryByRole('presentation'));

            expect(screen.getByRole('button', {name: 'Import JSON'})).toBeInTheDocument();
        });

        it('accepts the file types matching the language by default', async () => {
            render(<CodeEditor language="json" upload={{}} />);
            await waitForElementToBeRemoved(screen.queryByRole('presentation'));

            expect(getFileInput()).toHaveAttribute('accept', '.json,application/json');
        });

        it('accepts any file for an unknown language', async () => {
            render(<CodeEditor language="yaml" upload={{}} />);
            await waitForElementToBeRemoved(screen.queryByRole('presentation'));

            expect(getFileInput()).not.toHaveAttribute('accept');
        });

        it('uses the accept option over the language default', async () => {
            render(<CodeEditor language="json" upload={{accept: '.jsonc'}} />);
            await waitForElementToBeRemoved(screen.queryByRole('presentation'));

            expect(getFileInput()).toHaveAttribute('accept', '.jsonc');
        });

        it('sets the uploaded file content as the editor value', async () => {
            const user = userEvent.setup();
            const onChange = vi.fn();
            const onUpload = vi.fn();
            const file = new File(['{"hello": "world"}'], 'config.json', {type: 'application/json'});
            render(<CodeEditor language="json" onChange={onChange} upload={{onUpload}} />);
            await waitForElementToBeRemoved(screen.queryByRole('presentation'));

            await user.upload(getFileInput()!, file);

            await vi.waitFor(() => expect(onChange).toHaveBeenCalledWith('{"hello": "world"}'));
            expect(onUpload).toHaveBeenCalledWith(file, '{"hello": "world"}');
        });

        it('disables the upload button when the editor is read only', async () => {
            render(<CodeEditor readOnly upload={{}} />);
            await waitForElementToBeRemoved(screen.queryByRole('presentation'));

            expect(screen.getByRole('button', {name: /upload file/i})).toBeDisabled();
        });
    });

    it('defines editorHandle on mount', async () => {
        let editorHandle: React.MutableRefObject<editor.IStandaloneCodeEditor | null> = null!;
        const EditorWrapper = () => {
            editorHandle = useRef<editor.IStandaloneCodeEditor | null>(
                null,
            ) as React.MutableRefObject<editor.IStandaloneCodeEditor | null>;
            return <CodeEditor editorHandle={editorHandle} />;
        };

        render(<EditorWrapper />);

        await waitForElementToBeRemoved(screen.queryByRole('presentation'));

        expect(editorHandle.current).not.toBeNull();
    });

    it('defaults to minimum height when useParentHeight returns NaN', async () => {
        mockedParentHeight = NaN;

        const minHeight = 400;
        render(<CodeEditor minHeight={minHeight} />);

        await waitForElementToBeRemoved(screen.queryByRole('presentation'));

        const editorContainer = screen.getByTestId('editor-wrapper').parentElement;
        expect(editorContainer).toHaveStyle({height: `calc(${minHeight / 16}rem * var(--mantine-scale))`});
    });
});
