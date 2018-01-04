import { shallow } from 'enzyme';
import * as React from 'react';
import { SideNavigation } from '../SideNavigation';
import { SideNavigationLoadingHeader } from '../SideNavigationLoadingHeader';
import { SideNavigationLoadingItem } from '../SideNavigationLoadingItem';
import { SideNavigationMenuSection } from '../SideNavigationMenuSection';

describe('SideNavigation', () => {
  describe('SideNavigationMenuSection', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <SideNavigation />
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
