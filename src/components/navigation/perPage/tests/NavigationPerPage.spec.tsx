import { shallow, mount, ReactWrapper } from 'enzyme';
import { NavigationPerPage, INavigationPerPageProps, PER_PAGE_LABEL, PER_PAGE_NUMBERS } from '../NavigationPerPage';
import { NavigationPerPageSelect } from '../NavigationPerPageSelect';
import * as _ from 'underscore';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('NavigationPerPage', () => {
  let basicNavigationPerPageProps: INavigationPerPageProps = {
    totalEntries: 50
  };

  describe('<NavigationPerPage />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <NavigationPerPage {...basicNavigationPerPageProps} />
        );
      }).not.toThrow();
    });
  });

  describe('NavigationPerPageView', () => {
    let navigationPerPage: ReactWrapper<INavigationPerPageProps, any>;

    beforeEach(() => {

      navigationPerPage = mount(
        <NavigationPerPage {...basicNavigationPerPageProps} />,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      navigationPerPage.unmount();
      navigationPerPage.detach();
    });

    it('should get the number of entries as a prop', () => {
      let totalEntriesProp = navigationPerPage.props().totalEntries;

      expect(totalEntriesProp).toBeDefined();
      expect(totalEntriesProp).toBe(basicNavigationPerPageProps.totalEntries);
    });

    it('should render the <NavigationPerPageSelect /> where there are at least 1 element more than the previous <NavigationPerPageSelect />', () => {

      // [10, 20, 30]
      expect(navigationPerPage.find(NavigationPerPageSelect).length).toBe(3);

      navigationPerPage = mount(
        <NavigationPerPage totalEntries={11} />,
        { attachTo: document.getElementById('App') }
      );

      // [10, 20]
      expect(navigationPerPage.find(NavigationPerPageSelect).length).toBe(2);
    });

    it('should call onRender if prop is set on mount', () => {
      let onRenderSpy = jasmine.createSpy('onRender');
      let newNavigationPerPageProps = _.extend({}, basicNavigationPerPageProps, { onRender: onRenderSpy });

      navigationPerPage.unmount();
      navigationPerPage.setProps(newNavigationPerPageProps);
      navigationPerPage.mount();
      expect(onRenderSpy).toHaveBeenCalled();
    });

    it('should call onDestroy if prop is set when unmounting', () => {
      let onDestroySpy = jasmine.createSpy('onDestroy');
      let newNavigationPerPageProps = _.extend({}, basicNavigationPerPageProps, { onDestroy: onDestroySpy });

      navigationPerPage.unmount();
      navigationPerPage.setProps(newNavigationPerPageProps);
      navigationPerPage.mount();
      navigationPerPage.unmount();
      expect(onDestroySpy).toHaveBeenCalled();
    });

    it('should display the per page label if prop is set else it should show the default one', () => {
      let expectedLabel = 'Show this many items per page';
      let newNavigationPerPageProps = _.extend({}, basicNavigationPerPageProps, { label: expectedLabel });

      expect(navigationPerPage.html()).toContain(PER_PAGE_LABEL);

      navigationPerPage.setProps(newNavigationPerPageProps);
      expect(navigationPerPage.html()).not.toContain(PER_PAGE_LABEL);
      expect(navigationPerPage.html()).toContain(expectedLabel);
    });

    it('should show the custom per page numbers if set as a prop or show the default ones', () => {
      let expectedPerPageNumbers = [2, 3, 4, 5, 10, 30];
      let newNavigationPerPageProps = _.extend({}, basicNavigationPerPageProps, { perPageNumbers: expectedPerPageNumbers });

      expect(navigationPerPage.find('NavigationPerPageSelect').length).toBe(PER_PAGE_NUMBERS.length);

      navigationPerPage.setProps(newNavigationPerPageProps);
      expect(navigationPerPage.find('NavigationPerPageSelect').length).toBe(expectedPerPageNumbers.length);
    });
  });
});
