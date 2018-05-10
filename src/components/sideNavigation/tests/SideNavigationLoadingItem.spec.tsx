import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import {ISideNavLoadingItemProps, SideNavigationLoadingItem} from '../SideNavigationLoadingItem';

describe('<SideNavigationLoadingItem />', () => {
    let wrapper: ReactWrapper<ISideNavLoadingItemProps, any>;

    beforeEach(() => {
        wrapper = mount(
            <SideNavigationLoadingItem />,
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
                <SideNavigationLoadingItem />,
            );
        }).not.toThrow();
    });

    it('should render a <SideNavigationLoadingItem /> with classes prop', () => {
        const className = 'mod-width-30';
        const container = wrapper.find('div').first();
        wrapper.setProps({className});
        wrapper.mount();
        expect(container.hasClass(className)).toBe(true);
    });

    it('should render without errors', () => {
        expect(() => {
            shallow(
                <SideNavigationLoadingItem />,
            );
        }).not.toThrow();
    });
});
