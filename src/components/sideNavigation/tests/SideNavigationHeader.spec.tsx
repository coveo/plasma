import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import {Svg} from '../../svg/Svg';
import {ISideNavigationHeaderProps, SideNavigationHeader} from '../SideNavigationHeader';

describe('<SideNavigationHeader />', () => {
    const title = 'hello';
    it('should render without errors', () => {
        expect(() => {
            shallow(
                <SideNavigationHeader title={title} />,
            );
        }).not.toThrow();
    });
});

describe('<SideNavigationHeader />', () => {
    let wrapper: ReactWrapper<ISideNavigationHeaderProps, any>;
    const title = 'hello';

    beforeEach(() => {
        wrapper = mount(
            <SideNavigationHeader title={title} />,
            {attachTo: document.getElementById('App')},
        );
    });

    afterEach(() => {
        wrapper.detach();
    });

    it('should render an icon if svgTitle prop is specified.', () => {
        const svgName = 'menu-content';
        wrapper.setProps({svgName, title});
        wrapper.mount();

        const icon = wrapper.find(Svg).first();
        expect(icon).toBeDefined();
    });
});
