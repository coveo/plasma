import { shallow, ReactWrapper, mount } from 'enzyme';
import {
  NavigationPagination,
  INavigationPaginationProps,
  PREVIOUS_LABEL,
  NEXT_LABEL,
  NUMBER_OF_PAGES_SHOWING
} from '../NavigationPagination';
import * as _ from 'underscore';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('NavigationPagination', () => {
  let basicNavigationPaginationAttributes: INavigationPaginationProps = {
    totalPages: 22
  };

  describe('<NavigationPagination />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <NavigationPagination {...basicNavigationPaginationAttributes} />
        );
      }).not.toThrow();
    });
  });

  describe('<NavigationPagination />', () => {
    let navigationPagination: ReactWrapper<INavigationPaginationProps, any>;
    let navigationPaginationInstance: NavigationPagination;

    beforeEach(() => {
      navigationPagination = mount(
        <NavigationPagination
          {...basicNavigationPaginationAttributes}
          />,
        { attachTo: document.getElementById('App') });
      navigationPaginationInstance = navigationPagination.instance() as NavigationPagination;
    });

    afterEach(() => {
      navigationPagination.unmount();
      navigationPagination.detach();
    });

    it('should call prop onRender on mounting if set', () => {
      let renderSpy = jasmine.createSpy('onRender');

      expect(() => { navigationPaginationInstance.componentWillMount(); }).not.toThrow();

      navigationPagination = mount(
        <NavigationPagination
          {...basicNavigationPaginationAttributes}
          onRender={renderSpy}
          />,
        { attachTo: document.getElementById('App') });
      expect(renderSpy.calls.count()).toBe(1);
    });

    it('should call prop onDestroy on unmounting if set', () => {
      let destroySpy = jasmine.createSpy('onDestroy');

      expect(() => { navigationPaginationInstance.componentWillUnmount(); }).not.toThrow();

      navigationPagination = mount(
        <NavigationPagination
          {...basicNavigationPaginationAttributes}
          onDestroy={destroySpy}
          />,
        { attachTo: document.getElementById('App') });
      navigationPagination.unmount();
      expect(destroySpy.calls.count()).toBe(1);
    });

    it('should call onPageClick prop if set when clicking on next/previous or page number and page number is greater than or is 0', () => {
      let clickSpy = jasmine.createSpy('onClick');
      let newNavigationPaginationAttributes = _.extend({}, basicNavigationPaginationAttributes, { onPageClick: clickSpy });

      expect(() => { navigationPaginationInstance['handlePageClick'].call(navigationPaginationInstance, 3); }).not.toThrow();

      navigationPagination.setProps(newNavigationPaginationAttributes);

      navigationPaginationInstance['handlePageClick'].call(navigationPaginationInstance, -2);
      expect(clickSpy).not.toHaveBeenCalled();

      // Previous button (does not call spy since current page is zero)
      navigationPagination.find('.mod-link').first().simulate('click');
      expect(clickSpy).not.toHaveBeenCalled();

      // Number button
      navigationPagination.find('.selectable').first().simulate('click');
      expect(clickSpy.calls.count()).toBe(1);

      // Next button
      navigationPagination.find('.mod-link').last().simulate('click');
      expect(clickSpy.calls.count()).toBe(2);
    });

    it('should show the previous label sent as a prop else show the default one', () => {
      let expectedLabel = 'Previous page';
      let newNavigationPaginationAttributes = _.extend({}, basicNavigationPaginationAttributes, { previousLabel: expectedLabel });

      expect(navigationPagination.html()).toContain(PREVIOUS_LABEL);

      navigationPagination.setProps(newNavigationPaginationAttributes);
      expect(navigationPagination.html()).toContain(expectedLabel);
    });

    it('should show the next label sent as a prop else show the default one', () => {
      let expectedLabel = 'Next page';
      let newNavigationPaginationAttributes = _.extend({}, basicNavigationPaginationAttributes, { nextLabel: expectedLabel });

      expect(navigationPagination.html()).toContain(NEXT_LABEL);

      navigationPagination.setProps(newNavigationPaginationAttributes);
      expect(navigationPagination.html()).toContain(expectedLabel);
    });

    it('should show as many pages as numberOfPagesToShow prop else show the default number', () => {
      let expectedNbOfPagesToShow = 2;
      let newNavigationPaginationAttributes = _.extend({}, basicNavigationPaginationAttributes, { numberOfPagesToShow: 2 });

      expect(navigationPagination.find('NavigationPaginationSelect').length).toBe(NUMBER_OF_PAGES_SHOWING);

      navigationPagination.setProps(newNavigationPaginationAttributes);
      expect(navigationPagination.find('NavigationPaginationSelect').length).toBe(expectedNbOfPagesToShow);
    });
  });
});
