import {render, screen} from '@test-utils';

import {BellSize16Px} from '@coveord/plasma-react-icons';
import {IconBadge, IconBadgeType} from '../IconBadge.js';

describe('IconBadge', () => {
    it('renders the specified icon with the type New, and size Medium by default', async () => {
        render(<IconBadge icon={BellSize16Px} type={IconBadgeType.New} />);

        await screen.findByRole('img', {name: 'bell'});
        const iconBadge = screen.getByRole('img', {name: 'bell'}).parentElement;

        expect(iconBadge).toBeInTheDocument();
        expect(iconBadge).toHaveClass('mod-24');
        expect(iconBadge).toHaveClass('mod-new');
    });

    it('renders the specified icon with the type Information', async () => {
        render(<IconBadge icon={BellSize16Px} type={IconBadgeType.Information} />);

        await screen.findByRole('img', {name: 'bell'});
        const iconBadge = screen.getByRole('img', {name: 'bell'}).parentElement;

        expect(iconBadge).toBeInTheDocument();
        expect(iconBadge).toHaveClass('mod-info');
    });

    it('renders the specified icon with the type Warning', async () => {
        render(<IconBadge icon={BellSize16Px} type={IconBadgeType.Warning} />);

        await screen.findByRole('img', {name: 'bell'});
        const iconBadge = screen.getByRole('img', {name: 'bell'}).parentElement;

        expect(iconBadge).toBeInTheDocument();
        expect(iconBadge).toHaveClass('mod-warning');
    });

    it('renders the specified icon with the type Major', async () => {
        render(<IconBadge icon={BellSize16Px} type={IconBadgeType.Major} />);

        await screen.findByRole('img', {name: 'bell'});
        const iconBadge = screen.getByRole('img', {name: 'bell'}).parentElement;

        expect(iconBadge).toBeInTheDocument();
        expect(iconBadge).toHaveClass('mod-major');
    });
});
