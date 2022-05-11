import {LockSize16Px} from '@coveord/plasma-react-icons';
import {render, screen, within} from '@test-utils';

import {Badge} from '../Badge';

describe('Badge', () => {
    it('renders a badge', async () => {
        render(<Badge label="label" icon={LockSize16Px} />);

        await screen.findByRole('img', {name: 'lock'});

        const badge = screen.getByLabelText('badge');
        expect(badge).toBeInTheDocument();
        expect(within(badge).getByText('label')).toBeInTheDocument();
        expect(within(badge).getByRole('img', {name: 'lock'})).toBeInTheDocument();
    });
});
