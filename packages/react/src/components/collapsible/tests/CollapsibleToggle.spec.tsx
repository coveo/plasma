import {render, screen, waitFor} from '@test-utils';
import * as React from 'react';

import {CollapsibleToggle} from '../CollapsibleToggle';

describe('CollapsibleToggle', () => {
    it('should render a Svg component with the icon "arrowHeadDown" when expanded is false', async () => {
        render(<CollapsibleToggle expanded={false} />);

        await waitFor(() => screen.findByRole('img', {name: 'arrowHeadDown'}));

        expect(screen.getByRole('img', {name: 'arrowHeadDown'})).toBeInTheDocument();
    });

    it('should render a Svg component with the icon "arrowTopRounded" when expanded is false', async () => {
        render(<CollapsibleToggle expanded />);

        await waitFor(() => screen.findByRole('img', {name: 'arrowHeadUp'}));

        expect(screen.getByRole('img', {name: 'arrowHeadUp'})).toBeInTheDocument();
    });
});
