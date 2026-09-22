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
});
