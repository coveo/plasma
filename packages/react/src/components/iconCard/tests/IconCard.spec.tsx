/* eslint-disable testing-library/no-container */
import {fireEvent, render, screen, within} from '@test-utils';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import {BadgeType} from '../../badge';

import {IconCard} from '../IconCard';

describe('IconCard', () => {
    const svgChild = (
        <div role="img" aria-label="shrug icon">
            🤷
        </div>
    );

    it('renders the specified icon and title', () => {
        render(<IconCard title="The Title" svgName="home" />);

        expect(screen.getByRole('img', {name: /home icon/i})).toBeVisible();
        expect(screen.getByRole('heading', {name: /the title/i})).toBeVisible();
    });

    it('accepts and renders a node as title', () => {
        const testId = 'test-id';
        render(<IconCard title={<div data-testid={testId}>Title</div>} svgName="home" />);

        expect(screen.getByTestId(testId)).toBeVisible();
    });

    it('renders custom icons', () => {
        render(<IconCard title="The Title" svgChild={svgChild} />);

        expect(screen.getByRole('img', {name: /shrug icon/i})).toBeVisible();
    });

    it('renders a description underneath the title when specified', () => {
        render(<IconCard title="Title" svgName="home" description="the description" />);

        expect(screen.getByText(/description/i)).toBeVisible();
    });

    it('renders the badges specified in the "badges" prop', () => {
        render(
            <IconCard
                title="Title"
                svgName="home"
                badges={[
                    {label: 'Badge1', type: BadgeType.Success},
                    {label: 'Badge2', type: BadgeType.Success},
                ]}
            />
        );

        const badges = screen.getAllByLabelText('badge');
        expect(badges.length).toBe(2);
        expect(within(badges[0]).getByText('Badge1')).toBeInTheDocument();
        expect(within(badges[1]).getByText('Badge2')).toBeInTheDocument();
    });

    it('displays the specified tooltip when hovering over the card', async () => {
        render(<IconCard title="Title" svgName="home" tooltip={{title: 'the tooltip'}} />);

        userEvent.hover(screen.getByRole('button', {name: /title/i}));

        expect(await screen.findByText('the tooltip')).toBeVisible();
    });

    it('calls the "onClick" prop when clicking on the card', () => {
        const mockOnClick = jest.fn();
        render(<IconCard title="Title" svgName="home" onClick={mockOnClick} />);

        const card = screen.getByRole('button', {name: /title/i});
        userEvent.click(card);

        expect(card).toHaveClass('cursor-pointer');
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('does not call the "onClick" prop when clicking on the card if it is disabled', () => {
        const mockOnClick = jest.fn();
        render(<IconCard title="Title" svgName="home" onClick={mockOnClick} disabled />);

        const card = screen.getByRole('button', {name: /title/i});
        userEvent.click(card);

        expect(card).not.toHaveClass('cursor-pointer');
        expect(mockOnClick).not.toHaveBeenCalled();
    });

    it('does not have a pointer cursor if no click handler is set', () => {
        render(<IconCard title="Title" svgName="home" />);

        expect(screen.getByRole('button', {name: /title/i})).not.toHaveClass('cursor-pointer');
    });

    it('does not have a pointer cursor if the drawer is opened', () => {
        render(
            <IconCard
                title="Title"
                svgName="home"
                choices={[
                    {label: '🍌', value: 'banana'},
                    {label: '🍎', value: 'apple'},
                ]}
                onClick={jest.fn()}
            />
        );

        const card = screen.getByRole('button', {name: /home icon title/i});
        expect(card).toHaveClass('cursor-pointer');
        userEvent.click(card);
        expect(card).not.toHaveClass('cursor-pointer');
    });

    it('expands the drawer when clicking on it', () => {
        render(
            <IconCard
                title="Title"
                svgName="home"
                choices={[
                    {label: '🍌', value: 'banana'},
                    {label: '🍎', value: 'apple'},
                ]}
            />
        );

        const card = screen.getByRole('button', {name: /title/i});
        expect(card).toHaveAttribute('aria-expanded', 'false');
        userEvent.click(card);
        expect(card).toHaveAttribute('aria-expanded', 'true');
    });

    it('shows icons in the drawer when clicking on it', () => {
        render(
            <IconCard
                title="Title"
                svgName="home"
                choices={[
                    {label: '🍌', value: 'banana', svgChild},
                    {label: '🍎', value: 'apple', icon: 'add'},
                ]}
            />
        );

        const card = screen.getByRole('button', {name: /title/i});
        userEvent.click(card);

        expect(screen.getByRole('img', {name: /add icon/i})).toBeVisible();
        expect(screen.getByRole('img', {name: /shrug icon/i})).toBeVisible();
    });

    it('collapses the drawer when the mouse leaves the icon card', () => {
        const {container} = render(
            <IconCard
                title="Title"
                svgName="home"
                choices={[
                    {label: '🍌', value: 'banana'},
                    {label: '🍎', value: 'apple'},
                ]}
            />
        );

        const card = screen.getByRole('button', {name: /title/i});
        userEvent.click(card);
        expect(card).toHaveAttribute('aria-expanded', 'true');
        fireEvent.mouseLeave(container.querySelector('.icon-card'));
        expect(card).toHaveAttribute('aria-expanded', 'false');
    });

    it('renders all the specified choices in a drawer', () => {
        render(
            <IconCard
                title="Title"
                svgName="home"
                choices={[
                    {label: '🍌', value: 'banana'},
                    {label: '🍎', value: 'apple'},
                ]}
            />
        );

        // Open the drawer
        userEvent.click(screen.getByRole('button', {name: /title/i}));

        const drawer = screen.getByRole('list');
        expect(drawer).toBeInTheDocument();
        expect(within(drawer).getAllByRole('listitem').length).toBe(2);
        expect(within(drawer).getByRole('button', {name: '🍌'})).toBeInTheDocument();
        expect(within(drawer).getByRole('button', {name: '🍎'})).toBeInTheDocument();
    });

    it('calls the onClick prop with the choice value when clicking on one of them', () => {
        const mockOnClick = jest.fn();
        render(
            <IconCard
                title="Title"
                svgName="home"
                onClick={mockOnClick}
                choices={[
                    {label: '🍌', value: 'banana'},
                    {label: '🍎', value: 'apple'},
                ]}
            />
        );
        // Open the drawer
        userEvent.click(screen.getByRole('button', {name: /title/i}));

        userEvent.click(screen.getByRole('button', {name: '🍌'}));
        expect(mockOnClick).toHaveBeenCalledTimes(1);
        expect(mockOnClick).toHaveBeenCalledWith('banana');
    });

    it('renders disabled buttons for disabled choices', () => {
        const mockOnClick = jest.fn();
        render(
            <IconCard
                title="Title"
                svgName="home"
                onClick={mockOnClick}
                choices={[
                    {label: '🍌', value: 'banana', disabled: true},
                    {label: '🍎', value: 'apple'},
                ]}
            />
        );

        // Open the drawer
        userEvent.click(screen.getByRole('button', {name: /title/i}));

        const button = screen.queryByRole('button', {name: '🍌'});
        expect(button).toBeInTheDocument();
        expect(button).toBeDisabled();

        userEvent.click(button);

        expect(mockOnClick).not.toHaveBeenCalled();
    });

    it('uses the small layout when small', () => {
        render(
            <IconCard
                title="Title"
                svgName="home"
                small
                choices={[
                    {label: '🍌', value: 'banana', disabled: true},
                    {label: '🍎', value: 'apple'},
                ]}
            />
        );

        const card = screen.getByRole('button', {name: /title/i});
        const drawer = screen.getByRole('list', {hidden: true});
        expect(drawer).toHaveClass('mod-small');
        expect(card).toHaveClass('mod-small');
    });

    it('renders the children inside the card if specified', () => {
        render(
            <IconCard title="Title" svgName="home" small>
                child
            </IconCard>
        );

        const card = screen.getByRole('button', {name: /title/i});
        expect(within(card).getByText(/child/i)).toBeInTheDocument();
    });

    it('animates the card on hover if animateOnHover prop is true', () => {
        const {container} = render(<IconCard title="Title" svgName="home" animateOnHover />);

        const card = container.querySelector('.icon-card');
        expect(card).toHaveClass('animateOnHover');
    });

    it('does not animates the card on hover if disabled', () => {
        const {container} = render(<IconCard title="Title" svgName="home" animateOnHover disabled />);

        const card = container.querySelector('.icon-card');
        expect(card).not.toHaveClass('animateOnHover');
    });

    it('does not render the badges within the main content container if placeBadgesAbove is false', () => {
        const badgeLabel = 'Badge1';
        render(<IconCard title="Title" svgChild={svgChild} badges={[{label: badgeLabel, type: BadgeType.Success}]} />);

        const contentContainer = screen.getByTestId('main-content');
        expect(within(contentContainer).queryByText(badgeLabel)).not.toBeInTheDocument();
    });

    it('should render the badges within the main content container if placeBadgesAbove is true', () => {
        const badgeLabel = 'Badge1';
        render(
            <IconCard
                title="Title"
                svgChild={svgChild}
                badges={[{label: badgeLabel, type: BadgeType.Success}]}
                placeBadgesAbove
            />
        );

        const contentContainer = screen.getByTestId('main-content');
        expect(within(contentContainer).getByText(badgeLabel)).toBeVisible();
    });

    it('should add the given class to the container button if cardClasses is defined', () => {
        render(<IconCard title="Title" svgChild={svgChild} cardClassName={['mod-fixed-size']} />);

        const card = screen.getByRole('button', {name: /title/i});
        expect(card).toHaveClass('mod-fixed-size');
    });
});
