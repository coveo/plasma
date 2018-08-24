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
        wrapper.setProps({className}).mount().update();
        expect(wrapper.find('div').first().hasClass(className)).toBe(true);
    });

    it('should render without errors', () => {
        expect(() => {
            shallow(
                <SideNavigationLoadingItem />,
            );
        }).not.toThrow();
    });
});
