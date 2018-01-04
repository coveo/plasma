import { shallow, mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { SideNavigation } from '../SideNavigation';
import { SideNavigationLoadingHeader } from '../SideNavigationLoadingHeader';
import { SideNavigationLoadingItem, ISideNavLoadingItemProps } from '../SideNavigationLoadingItem';
import { SideNavigationMenuSection } from '../SideNavigationMenuSection';

describe('SideNavigation', () => {

  describe('<SideNavigation />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <SideNavigation />
        );
      }).not.toThrow();
    });

    it('when passed a className, should contain css class', () => {
      expect(() => {
        shallow(
          <SideNavigation />
        );
      }).not.toThrow();
    });

  });

  describe('<SideNavigationMenuSection />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <SideNavigationMenuSection />
        );
      }).not.toThrow();
    });
  });

  describe('<SideNavigationLoadingHeader />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <SideNavigationLoadingHeader />
        );
      }).not.toThrow();
    });
  });

  describe('<SideNavigationLoadingItem />', () => {
    let wrapper: ReactWrapper<ISideNavLoadingItemProps, any>;

    beforeEach(() => {
      wrapper = mount(
        <SideNavigationLoadingItem />,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      wrapper.unmount();
      wrapper.detach();
    });

    it('should render a <SideNavigationLoadingItem /> with mod-sub-navigation-left-margin', () => {
      let container = wrapper.find('div').first();
      expect(container.hasClass('mod-sub-navigation-left-margin')).toBe(true);
    });

    it('should render a <SideNavigationLoadingItem /> with navigation-loading-item-grey', () => {
      let container = wrapper.find('div').first();
      expect(container.hasClass('navigation-loading-item-grey')).toBe(true);
    });

    it('should render a <SideNavigationLoadingItem /> with classes prop', () => {
      const classes = 'mod-width-30';
      let container = wrapper.find('div').first();
      wrapper.setProps({classes: classes});
      wrapper.mount();
      expect(container.hasClass(classes)).toBe(true);
    });

    it('should render without errors', () => {
      expect(() => {
        shallow(
          <SideNavigationLoadingItem />
        );
      }).not.toThrow();
    });
  });

  describe('SideNavigationMenuSection', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <SideNavigationMenuSection />
        );
      }).not.toThrow();
    });
  });
});
