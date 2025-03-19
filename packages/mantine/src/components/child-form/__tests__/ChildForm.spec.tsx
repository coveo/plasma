import {TextInput} from '@mantine/core';
import {render, screen} from '../../../__tests__/Utils';
import {ChildForm} from '../ChildForm';

describe('ChildForm', () => {
    it('renders the provided title and description', async () => {
        render(<ChildForm in={true} title="This is a title" description="This is a description" />);

        expect(screen.getByText(/this is a title/i)).toBeInTheDocument();
        expect(screen.getByText(/this is a description/i)).toBeInTheDocument();
    });
    it('renders the content', () => {
        render(
            <ChildForm in={true}>
                <TextInput label="Text input" />
            </ChildForm>,
        );

        expect(screen.getByRole('textbox', {name: /text input/i})).toBeInTheDocument();
    });
    it('hides the container', () => {
        render(
            <ChildForm in={false}>
                <TextInput label="Text input" />
            </ChildForm>,
        );

        expect(screen.queryByRole('textbox', {name: /text input/i})).not.toBeInTheDocument();
    });
});
