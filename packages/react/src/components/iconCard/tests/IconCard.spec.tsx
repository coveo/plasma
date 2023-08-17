/* eslint-disable testing-library/no-container */
import {AddSize16Px, InfoSize16Px, RemoveSize16Px} from '@coveord/plasma-react-icons';
import {fireEvent, render, screen, within} from '@test-utils';
import userEvent from '@testing-library/user-event';
import {BadgeType} from '../../badge';

import {IconCard} from '../IconCard';

describe('IconCard', () => {
    const icon = (
        <div role="img" aria-label="shrug icon">
            🤷
        </div>
    );

    it('renders the specified icon and title', async () => {
        render(<IconCard title="The Title" icon={<InfoSize16Px />} />);

        expect(await screen.findByRole('img', {name: /info/i})).toBeVisible();
        expect(screen.getByRole('heading', {name: /the title/i})).toBeVisible();
    });

    it('renders custom icons', () => {
        render(<IconCard title="The Title" icon={icon} />);

        expect(screen.getByRole('img', {name: /shrug icon/i})).toBeVisible();
    });

    it('renders a description underneath the title when specified', () => {
        render(<IconCard title="Title" description="the description" icon={icon} />);

        expect(screen.getByText(/description/i)).toBeVisible();
    });

    it('renders the badges specified in the "badges" prop', () => {
        render(
            <IconCard
                title="Title"
                icon={icon}
                badges={[
                    {label: 'Badge1', type: BadgeType.Success},
                    {label: 'Badge2', type: BadgeType.Success},
                ]}
            />,
        );

        const badges = screen.getAllByLabelText('badge');
        expect(badges.length).toBe(2);
        expect(within(badges[0]).getByText('Badge1')).toBeInTheDocument();
        expect(within(badges[1]).getByText('Badge2')).toBeInTheDocument();
    });

    it('displays the specified tooltip when hovering over the card', async () => {
        const user = userEvent.setup();
        render(<IconCard title="Title" icon={icon} tooltip={{title: 'the tooltip'}} />);

        await user.hover(screen.getByRole('button', {name: /title/i}));

        expect(await screen.findByText('the tooltip')).toBeVisible();
    });

    it('calls the "onClick" prop when clicking on the card', async () => {
        const user = userEvent.setup();
        const mockOnClick = jest.fn();
        render(<IconCard title="Title" icon={icon} onClick={mockOnClick} />);

        const card = screen.getByRole('button', {name: /title/i});
        await user.click(card);

        expect(card).toHaveClass('cursor-pointer');
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('does not call the "onClick" prop when clicking on the card if it is disabled', async () => {
        const user = userEvent.setup();
        const mockOnClick = jest.fn();
        render(<IconCard title="Title" icon={icon} onClick={mockOnClick} disabled />);

        const card = screen.getByRole('button', {name: /title/i});
        await user.click(card);

        expect(card).not.toHaveClass('cursor-pointer');
        expect(mockOnClick).not.toHaveBeenCalled();
    });

    it('does not have a pointer cursor if no click handler is set', () => {
        render(<IconCard title="Title" icon={icon} />);

        expect(screen.getByRole('button', {name: /title/i})).not.toHaveClass('cursor-pointer');
    });

    it('does not have a pointer cursor if the drawer is opened', async () => {
        const user = userEvent.setup();
        render(
            <IconCard
                title="Title"
                icon={icon}
                choices={[
                    {label: '🍌', value: 'banana'},
                    {label: '🍎', value: 'apple'},
                ]}
                onClick={jest.fn()}
            />,
        );

        const card = screen.getByRole('button', {name: /title/i});
        expect(card).toHaveClass('cursor-pointer');
        await user.click(card);
        expect(card).not.toHaveClass('cursor-pointer');
    });

    it('expands the drawer when clicking on it', async () => {
        const user = userEvent.setup();
        render(
            <IconCard
                title="Title"
                icon={icon}
                choices={[
                    {label: '🍌', value: 'banana'},
                    {label: '🍎', value: 'apple'},
                ]}
            />,
        );

        const card = screen.getByRole('button', {name: /title/i});
        expect(card).toHaveAttribute('aria-expanded', 'false');
        await user.click(card);
        expect(card).toHaveAttribute('aria-expanded', 'true');
    });

    it('shows icons in the drawer when clicking on it', async () => {
        const user = userEvent.setup();
        render(
            <IconCard
                title="Title"
                icon={icon}
                choices={[
                    {label: '🍌', value: 'banana', icon: RemoveSize16Px},
                    {label: '🍎', value: 'apple', icon: AddSize16Px},
                ]}
            />,
        );

        const card = screen.getByRole('button', {name: /title/i});
        await user.click(card);

        expect(await screen.findByRole('img', {name: /add/i})).toBeVisible();
        expect(await screen.findByRole('img', {name: /remove/i})).toBeVisible();
    });

    it('collapses the drawer when the mouse leaves the icon card', async () => {
        const user = userEvent.setup();
        const {container} = render(
            <IconCard
                title="Title"
                icon={icon}
                choices={[
                    {label: '🍌', value: 'banana'},
                    {label: '🍎', value: 'apple'},
                ]}
            />,
        );

        const card = screen.getByRole('button', {name: /title/i});
        await user.click(card);
        expect(card).toHaveAttribute('aria-expanded', 'true');
        fireEvent.mouseLeave(container.querySelector('.icon-card'));
        expect(card).toHaveAttribute('aria-expanded', 'false');
    });

    it('renders all the specified choices in a drawer', async () => {
        const user = userEvent.setup();
        render(
            <IconCard
                title="Title"
                icon={icon}
                choices={[
                    {label: '🍌', value: 'banana'},
                    {label: '🍎', value: 'apple'},
                ]}
            />,
        );

        // Open the drawer
        await user.click(screen.getByRole('button', {name: /title/i}));

        const drawer = screen.getByRole('list');
        expect(drawer).toBeInTheDocument();
        expect(within(drawer).getAllByRole('listitem').length).toBe(2);
        expect(within(drawer).getByRole('button', {name: '🍌'})).toBeInTheDocument();
        expect(within(drawer).getByRole('button', {name: '🍎'})).toBeInTheDocument();
    });

    it('calls the onClick prop with the choice value when clicking on one of them', async () => {
        const user = userEvent.setup();
        const mockOnClick = jest.fn();
        render(
            <IconCard
                title="Title"
                icon={icon}
                onClick={mockOnClick}
                choices={[
                    {label: '🍌', value: 'banana'},
                    {label: '🍎', value: 'apple'},
                ]}
            />,
        );
        // Open the drawer
        await user.click(screen.getByRole('button', {name: /title/i}));

        await user.click(screen.getByRole('button', {name: '🍌'}));
        expect(mockOnClick).toHaveBeenCalledTimes(1);
        expect(mockOnClick).toHaveBeenCalledWith('banana');
    });

    it('renders disabled buttons for disabled choices', async () => {
        const user = userEvent.setup();
        const mockOnClick = jest.fn();
        render(
            <IconCard
                title="Title"
                icon={icon}
                onClick={mockOnClick}
                choices={[
                    {label: '🍌', value: 'banana', disabled: true},
                    {label: '🍎', value: 'apple'},
                ]}
            />,
        );

        // Open the drawer
        await user.click(screen.getByRole('button', {name: /title/i}));

        const button = screen.queryByRole('button', {name: '🍌'});
        expect(button).toBeInTheDocument();
        expect(button).toBeDisabled();

        await user.click(button);

        expect(mockOnClick).not.toHaveBeenCalled();
    });

    it('uses the small layout when small', () => {
        render(
            <IconCard
                title="Title"
                icon={icon}
                small
                choices={[
                    {label: '🍌', value: 'banana', disabled: true},
                    {label: '🍎', value: 'apple'},
                ]}
            />,
        );

        const card = screen.getByRole('button', {name: /title/i});
        const drawer = screen.getByRole('list', {hidden: true});
        expect(drawer).toHaveClass('mod-small');
        expect(card).toHaveClass('mod-small');
    });

    it('renders the children inside the card if specified', () => {
        render(
            <IconCard title="Title" icon={icon} small>
                child
            </IconCard>,
        );

        const card = screen.getByRole('button', {name: /title/i});
        expect(within(card).getByText(/child/i)).toBeInTheDocument();
    });

    it('animates the card on hover if animateOnHover prop is true', () => {
        const {container} = render(<IconCard title="Title" icon={icon} animateOnHover />);

        const card = container.querySelector('.icon-card');
        expect(card).toHaveClass('animateOnHover');
    });

    it('does not animates the card on hover if disabled', () => {
        const {container} = render(<IconCard title="Title" icon={icon} animateOnHover disabled />);

        const card = container.querySelector('.icon-card');
        expect(card).not.toHaveClass('animateOnHover');
    });

    it('does not render the badges within the main content container if placeBadgesAbove is false', () => {
        const badgeLabel = 'Badge1';
        render(<IconCard title="Title" icon={icon} badges={[{label: badgeLabel, type: BadgeType.Success}]} />);

        const contentContainer = screen.getByTestId('main-content');
        expect(within(contentContainer).queryByText(badgeLabel)).not.toBeInTheDocument();
    });

    it('should render the badges within the main content container if placeBadgesAbove is true', () => {
        const badgeLabel = 'Badge1';
        render(
            <IconCard
                title="Title"
                icon={icon}
                badges={[{label: badgeLabel, type: BadgeType.Success}]}
                placeBadgesAbove
            />,
        );

        const contentContainer = screen.getByTestId('main-content');
        expect(within(contentContainer).getByText(badgeLabel)).toBeVisible();
    });

    it('should add the given class to the container button if cardClasses is defined', () => {
        render(<IconCard title="Title" icon={icon} cardClassName={['mod-fixed-size']} />);

        const card = screen.getByRole('button', {name: /title/i});
        expect(card).toHaveClass('mod-fixed-size');
    });

    it('renders the description when its a react node', () => {
        render(
            <IconCard
                title="title"
                cardClassName={['mod-fixed-size']}
                description={
                    <ul>
                        <li>Apple</li>
                        <li>Banana</li>
                    </ul>
                }
            />,
        );

        expect(screen.getAllByRole('listitem')).toHaveLength(2);
    });
});
