import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';

import {Svg} from '../../svg/Svg';
import {ISideNavigationHeaderProps, SideNavigationHeader} from '../SideNavigationHeader';

describe('SideNavigationHeader', () => {
    const title = 'hello';
    let wrapper: ReactWrapper<ISideNavigationHeaderProps, any>;

    beforeEach(() => {
        wrapper = mount(<SideNavigationHeader title={title} />, {attachTo: document.getElementById('App')});
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('should render without errors', () => {
        expect(() => {
            shallow(<SideNavigationHeader title={title} />);
        }).not.toThrow();
    });

    it('should render an icon if svgTitle prop is specified.', () => {
        const svgName = 'menu-content';
        wrapper.setProps({svgName, title});
        wrapper.mount();

        const icon = wrapper.find(Svg).first();

        expect(icon).toBeDefined();
    });
});
