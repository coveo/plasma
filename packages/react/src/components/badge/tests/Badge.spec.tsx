import {LockSize16Px} from '@coveord/plasma-react-icons';
import {render, screen, waitFor, within} from '@test-utils';

import {Badge} from '../Badge';

describe('Badge', () => {
    it('renders a badge', async () => {
        render(<Badge label="label" icon={LockSize16Px} />);

        await waitFor(() => screen.findByRole('img', {name: 'lock'}));

        const badge = screen.getByLabelText('badge');
        expect(badge).toBeInTheDocument();
        expect(within(badge).getByText('label')).toBeInTheDocument();
        expect(within(badge).getByRole('img', {name: 'lock'})).toBeInTheDocument();
    });

    it('makes the icon smaller in small badges', async () => {
        render(<Badge label="label" icon={LockSize16Px} extraClasses={['mod-small']} />);

        await waitFor(() => screen.findByRole('img', {name: 'lock'}));

        expect(screen.getByRole('img', {name: 'lock'})).toHaveAttribute('height', '14');
    });
});
