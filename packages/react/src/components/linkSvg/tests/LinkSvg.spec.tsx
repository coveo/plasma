import {ExternalSize16Px} from '@coveord/plasma-react-icons';
import {render, screen} from '@test-utils';
import userEvent from '@testing-library/user-event';

import {LinkSvg} from '../LinkSvg';

describe('LinkSvg', () => {
    it('renders the specified children and a question icon next to it', async () => {
        render(<LinkSvg url="some-link">Some text</LinkSvg>);
        expect(screen.getByRole('link', {name: /some text/i})).toBeInTheDocument();
        expect(await screen.findByRole('img', {name: 'question'})).toBeInTheDocument();
    });

    it('has some space between the text and the icon', async () => {
        render(<LinkSvg url="some-link">Some text</LinkSvg>);
        expect(await screen.findByRole('img', {name: 'question'})).toHaveClass('ml1');
    });

    it('does not add a space left of the icon if there is only an icon', async () => {
        render(<LinkSvg url="some-link" />);
        expect(await screen.findByRole('img', {name: 'question'})).not.toHaveClass('ml1');
    });

    it('displays the specified tooltip when hovering over the link', async () => {
        const user = userEvent.setup();
        render(<LinkSvg url="some-link" tooltip={{title: 'more info'}} />);
        await user.hover(await screen.findByRole('img', {name: 'question'}));
        expect(await screen.findByText(/more info/i)).toBeInTheDocument();
    });

    it('renders the specified icon', async () => {
        render(<LinkSvg url="some-link" icon={ExternalSize16Px} />);
        expect(await screen.findByRole('img', {name: 'external'})).toBeInTheDocument();
    });
});
