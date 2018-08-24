import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import {ISideNavProps, SideNavigation} from '../SideNavigation';

describe('<SideNavigation />', () => {
    let wrapper: ReactWrapper<ISideNavProps, any>;

    beforeEach(() => {
        wrapper = mount(
            <SideNavigation />,
            {attachTo: document.getElementById('App')},
        );
    });

    afterEach(() => {
        wrapper.detach();
    });

    it('should render without errors', () => {
        expect(() => {
            shallow(
                <SideNavigation />,
            );
        }).not.toThrow();
    });

    it('should render a <SideNavigation /> with classes prop', () => {
        const className = 'foo';
        wrapper.setProps({className}).mount().update();
        expect(wrapper.find('nav').first().hasClass(className)).toBe(true);
    });
});
