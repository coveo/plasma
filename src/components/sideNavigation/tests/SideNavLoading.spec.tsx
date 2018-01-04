import { shallow } from 'enzyme';
import * as React from 'react';
import { SideNavLoading } from '../SideNavLoading';
import { SideNavLoadingHeader } from '../SideNavLoadingHeader';
import { SideNavLoadingItem } from '../SideNavLoadingItem';
import { SideNavMenuSection } from '../SideNavMenuSection';

describe('SideNavLoading', () => {
  describe('SideNavMenuSection', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <SideNavLoading />
        );
      }).not.toThrow();
    });
  });

  describe('<SideNavLoadingHeader />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <SideNavLoadingHeader />
        );
      }).not.toThrow();
    });
  });

  describe('<SideNavLoadingItem />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <SideNavLoadingItem />
        );
      }).not.toThrow();
    });
  });

  describe('SideNavMenuSection', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <SideNavMenuSection />
        );
      }).not.toThrow();
    });
  });
});
