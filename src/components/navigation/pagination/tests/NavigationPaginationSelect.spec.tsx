import { shallow, mount, ReactWrapper } from 'enzyme';
import {
  NavigationPaginationSelect,
  INavigationPaginationSelectProps
} from '../NavigationPaginationSelect';
import * as _ from 'underscore';

/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('NavigationPaginationSelect', () => {
  let basicNavigationPaginationSelectProps: INavigationPaginationSelectProps = {
    selected: false,
    pageNb: 2,
    onPageClick: jasmine.createSpy('onPageClick')
  };

  describe('<NavigationPaginationSelect />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <NavigationPaginationSelect {...basicNavigationPaginationSelectProps} />
        );
      }).not.toThrow();
    });
  });

  describe('<NavigationPaginationSelect />', () => {
    let navigationPaginationSelect: ReactWrapper<INavigationPaginationSelectProps, any>;

    beforeEach(() => {
      navigationPaginationSelect = mount(
        <NavigationPaginationSelect {...basicNavigationPaginationSelectProps} />,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      navigationPaginationSelect.unmount();
      navigationPaginationSelect.detach();
    });

    it('should get if it is selected as a prop', () => {
      let selectedProp = navigationPaginationSelect.props().selected;

      expect(selectedProp).toBeDefined();
      expect(selectedProp).toBe(basicNavigationPaginationSelectProps.selected);
    });

    it('should get the page number as a prop', () => {
      let pageNbProp = navigationPaginationSelect.props().pageNb;

      expect(pageNbProp).toBeDefined();
      expect(pageNbProp).toBe(basicNavigationPaginationSelectProps.pageNb);
    });

    it('should get what to do on click as a prop', () => {
      let onPageClickProp = navigationPaginationSelect.props().onPageClick;

      expect(onPageClickProp).toBeDefined();
    });

    it('should be selectable if not selected', () => {
      let newNavigationPaginationSelectProps = _.extend(basicNavigationPaginationSelectProps, { selected: true });
      expect(navigationPaginationSelect.find('.flat-select-option').hasClass('selectable')).toBe(true);

      navigationPaginationSelect.setProps(newNavigationPaginationSelectProps);

      expect(navigationPaginationSelect.find('.flat-select-option').hasClass('selectable')).toBe(false);
    });

    it('should display the page number', () => {
      expect(navigationPaginationSelect.html()).toContain((basicNavigationPaginationSelectProps.pageNb + 1).toString());
    });

    it('should call onPageClick on page click', () => {
      expect(basicNavigationPaginationSelectProps.onPageClick).not.toHaveBeenCalled();

      navigationPaginationSelect.find('a').simulate('click');

      expect(basicNavigationPaginationSelectProps.onPageClick).toHaveBeenCalled();
    });
  });
});
