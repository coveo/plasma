import {shallow, ShallowWrapper} from 'enzyme';
import * as React from 'react';

import {Collapsible} from '../../collapsible/Collapsible';
import {ISideNavigationSectionProps, SideNavigationMenuSection} from '../SideNavigationMenuSection';

describe('SideNavigationMenuSection', () => {
    let section: ShallowWrapper<ISideNavigationSectionProps>;
    const header = {
        title: 'title is comming from the header prop',
        svgName: 'some-name',
        svgClass: 'some-class',
    };

    afterEach(() => {
        if (section && section.exists()) {
            section.unmount();
        }
    });

    it('should render and unmount without errors', () => {
        expect(() => {
            section = shallow(<SideNavigationMenuSection />);
            section.unmount();
        }).not.toThrow();
    });

    it('should setup the section header using the "header" prop', () => {
        section = shallow(<SideNavigationMenuSection header={header} />);
        expect(section.find('SideNavigationHeader').exists()).toBe(true);

        const sectionHeader = section.find('SideNavigationHeader');
        expect(sectionHeader.children().contains(header.title)).toBe(true);
        expect(sectionHeader.prop('svgName')).toBe(header.svgName);
        expect(sectionHeader.prop('svgClass')).toBe(header.svgClass);
    });

    it('should setup the section header directly using the props', () => {
        section = shallow(<SideNavigationMenuSection {...header} />);
        expect(section.find('SideNavigationHeader').exists()).toBe(true);

        const sectionHeader = section.find('SideNavigationHeader');
        expect(sectionHeader.children().contains(header.title)).toBe(true);
        expect(sectionHeader.prop('svgName')).toBe(header.svgName);
        expect(sectionHeader.prop('svgClass')).toBe(header.svgClass);
    });

    it('should hide children when expandable prop is true and expanded prop is false.', () => {
        section = shallow(<SideNavigationMenuSection {...header} expandable />);

        expect(section.find(Collapsible).prop('expanded')).toBe(false);
    });

    it('should not hide children when expandable prop is true and expanded prop is true.', () => {
        section = shallow(<SideNavigationMenuSection {...header} expandable expanded />);

        expect(section.find(Collapsible).prop('expanded')).toBe(true);
    });

    it('should call onClick prop when clicking on the header', () => {
        const onClickSpy = jasmine.createSpy('click');
        section = shallow(<SideNavigationMenuSection {...header} onClick={onClickSpy} />);
        section.find('SideNavigationHeader').prop('onClick')(null);

        expect(onClickSpy).toHaveBeenCalledTimes(1);
    });

    it('should render the navigation items inside the .navigation-menu-section-items class', () => {
        section = shallow(
            <SideNavigationMenuSection {...header}>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </SideNavigationMenuSection>
        );

        expect(section.find('.navigation-menu-section-items').children().length).toBe(3);
    });
});
