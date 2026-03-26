import {TextInput} from '@mantine/core';
import {render, screen} from '../../../__tests__/Utils.js';
import {ChildForm} from '../ChildForm.js';

describe('ChildForm', () => {
    it('renders the provided title and description', () => {
        render(<ChildForm in={true} title="This is a title" description="This is a description" />);

        expect(screen.getByText(/this is a title/i)).toBeVisible();
        expect(screen.getByText(/this is a description/i)).toBeVisible();
    });

    it('renders a rich description node', () => {
        render(
            <ChildForm
                in={true}
                title="This is a title"
                description={
                    <div>
                        <span>Rich description</span>
                        <a href="https://example.com">Learn more</a>
                    </div>
                }
            />,
        );

        expect(screen.getByText('Rich description')).toBeVisible();
        expect(screen.getByRole('link', {name: 'Learn more'})).toBeVisible();
    });

    it('renders a numeric description', () => {
        render(<ChildForm in={true} description={0} />);

        expect(screen.getByText('0')).toBeInTheDocument();
    });

    it('renders the content', () => {
        render(
            <ChildForm in={true}>
                <TextInput label="Text input" />
            </ChildForm>,
        );

        expect(screen.getByRole('textbox', {name: /text input/i})).toBeVisible();
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
