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

    it('should render an anchor tag if the "href" and "title" props are specified', () => {
        item = shallow(<SideNavigationItem href="http://www.perdu.com" title="Perdu ?" />);

        expect(item.type()).toBe('a');
    });

    it('should render a div tag if the "href" and "title" props are not specified', () => {
        item = shallow(
            <SideNavigationItem>
                <a href="http://www.perdu.com">Perdu ?</a>
            </SideNavigationItem>
        );

        expect(item.type()).toBe('div');
    });
});
