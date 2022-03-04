import {render, screen} from '@test-utils';
import * as React from 'react';

import {CollapsibleToggle} from '../CollapsibleToggle';

describe('CollapsibleToggle', () => {
    it('should render a Svg component with the icon "arrowHeadDown" when expanded is false', () => {
        render(<CollapsibleToggle expanded={false} />);
        expect(screen.getByRole('img', {name: 'arrowHeadDown'})).toBeInTheDocument();
    });

    it('should render a Svg component with the icon "arrowTopRounded" when expanded is false', () => {
        render(<CollapsibleToggle expanded />);
        expect(screen.getByRole('img', {name: 'arrowHeadUp'})).toBeInTheDocument();
    });
});
