import {mount, shallow} from 'enzyme';
import * as React from 'react';

import {Tooltip} from '../../tooltip';
import {BrowserPreview} from '../BrowserPreview';

describe('BrowserPreview', () => {
    it('renders without errors', () => {
        expect(() => {
            shallow(<BrowserPreview />);
        }).not.toThrow();
    });

    it('renders the specified header description as tooltip title', () => {
        const headerDescription = '🥰';
        const component = mount(<BrowserPreview headerDescription={headerDescription} />);

        expect(component.find(Tooltip).prop('title')).toEqual(headerDescription);
    });
});
