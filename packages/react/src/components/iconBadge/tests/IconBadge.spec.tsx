import {render, screen} from '@test-utils';
import {svg} from '@coveord/plasma-style';

import {IconBadgeType} from '../IconBadge';

describe('IconBadge', () => {
    it('renders the specified icon with the type New, and size Medium by default', () => {
        render(<IconBadge svgName={svg.bellStrokedMedium.name} type={IconBadgeType.New} />);

        const iconBadge = screen.getByRole('img', {name: 'bellStrokedMedium icon'}).parentElement;
        expect(iconBadge).toBeInTheDocument();
        expect(iconBadge).toHaveClass('mod-24');
        expect(iconBadge).toHaveClass('mod-new');
    });

    it('renders the specified icon with the type Information', () => {
        render(<IconBadge svgName={svg.bellStrokedMedium.name} type={IconBadgeType.Information} />);

        const iconBadge = screen.getByRole('img', {name: 'bellStrokedMedium icon'}).parentElement;
        expect(iconBadge).toBeInTheDocument();
        expect(iconBadge).toHaveClass('mod-info');
    });

    it('renders the specified icon with the type Warning', () => {
        render(<IconBadge svgName={svg.bellStrokedMedium.name} type={IconBadgeType.Warning} />);

        const iconBadge = screen.getByRole('img', {name: 'bellStrokedMedium icon'}).parentElement;
        expect(iconBadge).toBeInTheDocument();
        expect(iconBadge).toHaveClass('mod-warning');
    });

    it('renders the specified icon with the type Major', () => {
        render(<IconBadge svgName={svg.bellStrokedMedium.name} type={IconBadgeType.Major} />);

        const iconBadge = screen.getByRole('img', {name: 'bellStrokedMedium icon'}).parentElement;
        expect(iconBadge).toBeInTheDocument();
        expect(iconBadge).toHaveClass('mod-major');
    });
});
