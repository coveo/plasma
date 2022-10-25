import {useForm} from '@mantine/form';
import {render, screen, within} from '@test-utils';

import {CodeEditor} from '../CodeEditor';

jest.mock('monaco-editor');
jest.mock('@monaco-editor/react');

describe('CodeEditor', () => {
    it('renders the monaco editor and a copy to clipboard button', async () => {
        render(<CodeEditor label="label" description="description" />);

        expect(screen.getByText(/label/)).toBeInTheDocument();
        expect(screen.getByText(/description/)).toBeInTheDocument();
        expect(screen.getByTestId('monaco-editor')).toBeInTheDocument();
        expect(await screen.findByRole('button', {name: /copy/i})).toBeInTheDocument();
    });

    it('shows validation errors underneath the code editor', () => {
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

        const errors = screen.getByRole('alert');

        expect(within(errors).getByText(/invalid configuration/i)).toBeInTheDocument();
    });
});
