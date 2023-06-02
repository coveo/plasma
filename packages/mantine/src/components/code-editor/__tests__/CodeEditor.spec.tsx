import {loader} from '@monaco-editor/react';
import {render, screen, waitForElementToBeRemoved} from '@test-utils';
import {useForm} from '../../../form';

import {CodeEditor} from '../CodeEditor';
import {XML} from '../languages/xml';

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

    it('shows validation errors underneath the code editor', async () => {
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
});
