import {render, screen} from '@test-utils';

import {LoadingSpinner} from '../LoadingSpinner.js';

describe('LoadingSpinner', () => {
    it('renders a loading of size 24 by default', () => {
        render(<LoadingSpinner />);

        const loading = screen.getByRole('alert');
        expect(loading).toBeInTheDocument();
        expect(loading).toHaveStyle({width: '24px', height: '24px'});
    });

    it('renders a loading of the specified size', () => {
        render(<LoadingSpinner size={16} />);

        const loading = screen.getByRole('alert');
        expect(loading).toBeInTheDocument();
        expect(loading).toHaveStyle({width: '16px', height: '16px'});
    });
});
