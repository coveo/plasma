import { shallow, mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import {
  NavigationPaginationSelect,
  INavigationPaginationSelectProps
} from '../NavigationPaginationSelect';

describe(' navigation', () => {
  let selected: boolean = false;
  let pageNb: number = 2;
  let onPageClick: (pageNb: number) => void = jasmine.createSpy('onPageClick');

  describe('<NavigationPaginationSelect />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <NavigationPaginationSelect
            selected={selected}
            pageNb={pageNb}
            onPageClick={onPageClick}
            />
        );
      }).not.toThrow();
    });
  });

  describe('<NavigationPaginationSelect />', () => {
    let NavigationPaginationSelectView: ReactWrapper<INavigationPaginationSelectProps, any>;

    beforeEach(() => {
      NavigationPaginationSelectView = mount(
        <NavigationPaginationSelect
          selected={selected}
          pageNb={pageNb}
          onPageClick={onPageClick}
          />,
        { attachTo: document.body }
      );
    });

    afterEach(() => {
      NavigationPaginationSelectView.unmount();
      NavigationPaginationSelectView.detach();
    });

    it('should get if it is selected as a prop', () => {
      let selectedProp = NavigationPaginationSelectView.props().selected;

      expect(selectedProp).toBeDefined();
      expect(selectedProp).toBe(selected);
    });

    it('should get the page number as a prop', () => {
      let pageNbProp = NavigationPaginationSelectView.props().pageNb;

      expect(pageNbProp).toBeDefined();
      expect(pageNbProp).toBe(pageNb);
    });

    it('should get what to do on click as a prop', () => {
      let onPageClickProp = NavigationPaginationSelectView.props().onPageClick;

      expect(onPageClickProp).toBeDefined();
    });

    it('should be selectable if not selected', () => {
      expect(NavigationPaginationSelectView.find('.flat-select-option').hasClass('selectable')).toBe(true);

      NavigationPaginationSelectView.setProps({
        selected: true,
        pageNb: pageNb,
        onPageClick: onPageClick
      });

      expect(NavigationPaginationSelectView.find('.flat-select-option').hasClass('selectable')).toBe(false);
    });

    it('should display the page number', () => {
      expect(NavigationPaginationSelectView.html()).toContain((pageNb + 1).toString());
    });

    it('should call onPageClick on page click', () => {
      expect(onPageClick).not.toHaveBeenCalled();

      NavigationPaginationSelectView.find('a').simulate('click');

      expect(onPageClick).toHaveBeenCalled();
    });
  });
});
