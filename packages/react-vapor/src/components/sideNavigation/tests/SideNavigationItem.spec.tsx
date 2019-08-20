import {shallow, ShallowWrapper} from 'enzyme';
import * as React from 'react';

import {SideNavigationItem, SideNavigationItemProps} from '../SideNavigationItem';

describe('SideNavigationItem', () => {
    let item: ShallowWrapper<SideNavigationItemProps>;

    afterEach(() => {
        if (item && item.exists()) {
            item.unmount();
        }
    });

    it('should render and unmount without errors', () => {
        expect(() => {
            item = shallow(<SideNavigationItem />);
            item.unmount();
        }).not.toThrow();
    });

    it('should have the .state-active class when "isActive" prop is set to true', () => {
        item = shallow(<SideNavigationItem isActive />);
        expect(item.hasClass('state-active')).toBe(true);
    });
});
