import {LockSize16Px} from '@coveord/plasma-react-icons';
import {render, screen, within} from '@test-utils';

import {Badge} from '../Badge.js';

describe('Badge', () => {
    it('renders a badge', async () => {
        render(<Badge label="label" icon={LockSize16Px} />);

        const badge = screen.getByLabelText('badge');
        expect(badge).toBeInTheDocument();
        expect(within(badge).getByText('label')).toBeInTheDocument();
        expect(await within(badge).findByRole('img', {name: 'lock'})).toBeInTheDocument();
    });
});
