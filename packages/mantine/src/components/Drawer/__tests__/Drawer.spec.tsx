import {render, screen} from '@test-utils';

import {Drawer} from '../Drawer.js';

describe('Drawer', () => {
    it('renders its content', () => {
        render(
            <Drawer opened onClose={vi.fn()}>
                Drawer content
            </Drawer>,
        );

        expect(screen.getByText('Drawer content')).toBeInTheDocument();
    });

    it('renders its title, description, and help link', () => {
        render(
            <Drawer
                opened
                onClose={vi.fn()}
                title="Drawer title"
                description="Drawer description"
                help={{href: 'https://example.com/help'}}
            />,
        );

        expect(screen.getByText('Drawer title')).toBeInTheDocument();
        expect(screen.getByText('Drawer description')).toBeInTheDocument();
        expect(screen.getByRole('link', {name: 'external'})).toHaveAttribute('href', 'https://example.com/help');
    });

    it('renders a React node title as provided', () => {
        render(
            <Drawer
                opened
                onClose={vi.fn()}
                title={<span>Custom title</span>}
                description="Drawer description"
                help={{href: 'https://example.com/help'}}
            />,
        );

        expect(screen.getByText('Custom title')).toBeInTheDocument();
        expect(screen.queryByText('Drawer description')).not.toBeInTheDocument();
        expect(screen.queryByRole('link', {name: 'external'})).not.toBeInTheDocument();
    });

    it('renders its footer when used', () => {
        render(
            <Drawer opened onClose={vi.fn()}>
                Drawer content
                <Drawer.Footer>Drawer footer</Drawer.Footer>
            </Drawer>,
        );

        expect(screen.getByText('Drawer footer')).toBeInTheDocument();
    });
});
