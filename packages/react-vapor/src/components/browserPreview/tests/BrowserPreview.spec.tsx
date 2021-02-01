import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';

import {Tooltip} from '../../tooltip';
import {BrowserPreview, BrowserPreviewProps} from '../BrowserPreview';

describe('BrowserPreview', () => {
    let component: ReactWrapper<BrowserPreviewProps>;
    const mountWithProps = (props: BrowserPreviewProps) => {
        component = mount(<BrowserPreview {...props} />, {
            attachTo: document.getElementById('App'),
        });
    };

    it('renders without errors', () => {
        expect(() => {
            shallow(<BrowserPreview />);
        }).not.toThrow();
    });

    it('renders the specified header description as tooltip title', () => {
        const headerDescription = '🥰';
        mountWithProps({headerDescription});

        expect(component.find(Tooltip).prop('title')).toEqual(headerDescription);
    });
});
