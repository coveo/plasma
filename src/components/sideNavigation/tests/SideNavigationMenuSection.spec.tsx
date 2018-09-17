import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import {SlideY} from '../../../animations/SlideY';
import {SideNavigationHeader} from '../SideNavigationHeader';
import {SideNavigationLoadingHeader} from '../SideNavigationLoadingHeader';
import {ISideNavigationSectionProps, SideNavigationMenuSection} from '../SideNavigationMenuSection';

describe('<SideNavigationMenuSection />', () => {
    it('should render without errors', () => {
        expect(() => {
            shallow(
                <SideNavigationMenuSection />,
            );
        }).not.toThrow();
    });
});

describe('<SideNavigationMenuSection />', () => {
    const title = 'qwerty';
    let wrapper: ReactWrapper<ISideNavigationSectionProps, any>;

    beforeEach(() => {
        wrapper = mount(
            <SideNavigationMenuSection />,
            {attachTo: document.getElementById('App')},
        );
    });

    afterEach(() => {
        wrapper.detach();
    });

    it('should render loading header when no header is specified.', () => {
        const header = wrapper.find(SideNavigationLoadingHeader).first();

        expect(header).toBeDefined();
    });

    it('should render normal header when header prop is specified.', () => {
        wrapper.setProps({header: {title}});
        wrapper.mount();

        const header = wrapper.find(SideNavigationHeader).first();

        expect(header).toBeDefined();
    });

    it('should hide children when expandable prop is true and expanded prop is false.', () => {
        wrapper.setProps({header: {title}, expandable: true});
        wrapper.mount();

        expect(wrapper.find(SlideY).prop('in')).toBeDefined(false);
    });

    it('should not hide children when expandable prop is true and expanded prop is true.', () => {
        wrapper.setProps({header: {title}, expandable: true, expanded: true});
        wrapper.mount();

        expect(wrapper.find(SlideY).prop('in')).toBeDefined(true);
    });

    it('should call onClick prop when header clicked and onClick prop is specified', () => {
        const onClickSpy = jasmine.createSpy('click');
        wrapper.setProps({header: {title}, onClick: onClickSpy});
        wrapper.mount();
        wrapper.find(SideNavigationHeader).first().simulate('click');

        expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
});
