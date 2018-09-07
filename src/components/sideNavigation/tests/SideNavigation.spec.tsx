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
        wrapper.unmount();
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
        const container = wrapper.find('nav').first();
        wrapper.setProps({className});
        wrapper.mount();
        expect(container.hasClass(className)).toBe(true);
    });

    it('should not have class navigation-opened if opened prop is true and withReduxState prop is false.', () => {
        const container = wrapper.find('nav').first();
        expect(container.hasClass('navigation-opened')).toBe(true);

        wrapper.setProps({opened: true});
        wrapper.mount();
        expect(container.hasClass('navigation-opened')).toBe(true);
    });

    it('should have class navigation-opened if opened prop is true and withReduxState prop is true.', () => {
        const container = wrapper.find('nav').first();
        wrapper.setProps({opened: false, withReduxState: true});
        wrapper.mount();
        expect(container.hasClass('navigation-opened')).toBe(false);

        wrapper.setProps({opened: true, withReduxState: true});
        wrapper.mount();
        expect(container.hasClass('navigation-opened')).toBe(true);
    });
});
