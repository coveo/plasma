import {render, screen} from '@testing-library/react';
import {extendScreen} from '../testing-library';
import MockedIcons from './index';

const extendedScreen = extendScreen(screen);

describe('Mocked Icons Proxy', () => {
    describe('Plasma icons', () => {
        it('renders a regular icon with correct aria-label', () => {
            render(<MockedIcons.ArrowUpSize16Px />);
            const svg = screen.getByRole('img', {name: 'arrowUp'});

            expect(svg).toBeInTheDocument();
            expect(svg).toHaveAttribute('role', 'img');
            expect(svg).toHaveAttribute('aria-label', 'arrowUp');
        });

        it('handles size props correctly', () => {
            render(<MockedIcons.ArrowUpSize16Px height="24" width="32" />);
            const svg = screen.getByRole('img', {name: 'arrowUp'});

            expect(svg).toHaveAttribute('width', '32');
            expect(svg).toHaveAttribute('height', '24');
        });

        it('defaults to 1em when no size is provided', () => {
            render(<MockedIcons.ArrowUpSize16Px />);
            const svg = screen.getByRole('img', {name: 'arrowUp'});

            expect(svg).toHaveAttribute('width', '1em');
            expect(svg).toHaveAttribute('height', '1em');
        });

        it('uses height for width when only height is provided', () => {
            render(<MockedIcons.ArrowDownSize16Px height="24" />);
            const svg = screen.getByRole('img', {name: 'arrowDown'});

            expect(svg).toHaveAttribute('width', '24');
            expect(svg).toHaveAttribute('height', '24');
        });
    });

    describe('Tabler icons', () => {
        it('renders a Tabler icon with correct className', () => {
            render(<MockedIcons.IconChevronDown />);
            const svg = extendedScreen.getByIconName('iconChevronDown');

            expect(svg).toBeInTheDocument();
            expect(svg).toHaveClass('tabler-icon tabler-icon-chevron-down');
        });

        it('handles size props correctly', () => {
            render(<MockedIcons.IconChevronDown height="24" width="32" />);
            const svg = extendedScreen.getByIconName('iconChevronDown');

            expect(svg).toHaveAttribute('width', '32');
            expect(svg).toHaveAttribute('height', '24');
        });

        it('handles className props correctly', () => {
            render(<MockedIcons.IconChevronDown className="my-className" />);
            const svg = extendedScreen.getByIconName('iconChevronDown');

            expect(svg).toHaveClass('tabler-icon tabler-icon-chevron-down my-className');
        });

        it('defaults to 1em when no size is provided', () => {
            render(<MockedIcons.IconChevronDown />);
            const svg = extendedScreen.getByIconName('iconChevronDown');

            expect(svg).toHaveAttribute('width', '1em');
            expect(svg).toHaveAttribute('height', '1em');
        });
    });

    describe('Display names', () => {
        it('sets displayName for regular icons', () => {
            expect(MockedIcons.ArrowUpSize16Px.displayName).toBe('ArrowUpSize16Px');
        });

        it('sets displayName for Tabler icons', () => {
            expect(MockedIcons.IconChevronDown.displayName).toBe('IconChevronDown');
        });
    });
});
