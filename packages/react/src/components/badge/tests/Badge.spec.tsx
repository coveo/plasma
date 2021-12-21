import {render, screen, within} from '@test-utils';
import * as React from 'react';

import {Badge} from '../Badge';

describe('Badge', () => {
    it('renders a badge', () => {
        render(<Badge label="label" icon="lock" />);

        const badge = screen.getByLabelText('badge');
        expect(badge).toBeInTheDocument();
        expect(within(badge).getByText('label')).toBeInTheDocument();
        expect(within(badge).getByRole('img', {name: 'lock icon'})).toBeInTheDocument();
    });

    it('makes the icon smaller in small badges', () => {
        render(<Badge label="label" icon="lock" extraClasses={['mod-small']} />);
        expect(screen.getByRole('img', {name: 'lock icon'})).toHaveClass('mod-12');
    });
});
