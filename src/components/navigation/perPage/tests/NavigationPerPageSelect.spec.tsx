import { shallow, mount, ReactWrapper } from 'enzyme';
import {NavigationPerPageSelect, INavigationPerPageSelectProps} from '../NavigationPerPageSelect';
import * as _ from 'underscore';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('NavigationPerPageSelect', () => {
  let basicNavigationPerPageSelectProps: INavigationPerPageSelectProps = {
    perPageNb: 20,
    selected: false,
    onPerPageClick: jasmine.createSpy('onPerPageClick')
  };

  describe('<NavigationPerPageSelect />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <NavigationPerPageSelect {...basicNavigationPerPageSelectProps} />
        );
      }).not.toThrow();
    });
  });

  describe('NavigationPerPageSelectView', () => {
    let navigationPerPageSelect: ReactWrapper<INavigationPerPageSelectProps, any>;

    beforeEach(() => {
      navigationPerPageSelect = mount(
          <NavigationPerPageSelect {...basicNavigationPerPageSelectProps} />,
        { attachTo: document.body }
      );
    });

    afterEach(() => {
      navigationPerPageSelect.unmount();
      navigationPerPageSelect.detach();
    });

    it('should get the per page number as a prop', () => {
      let perPageNumberProp = navigationPerPageSelect.props().perPageNb;

      expect(perPageNumberProp).toBeDefined();
      expect(perPageNumberProp).toBe(basicNavigationPerPageSelectProps.perPageNb);
    });

    it('should get if it is selected  as a prop', () => {
      let selectedProp = navigationPerPageSelect.props().selected;

      expect(selectedProp).toBeDefined();
      expect(selectedProp).toBe(basicNavigationPerPageSelectProps.selected);
    });

    it('should get what to do on click as a prop', () => {
      let onPerPageClickProp = navigationPerPageSelect.props().onPerPageClick;

      expect(onPerPageClickProp).toBeDefined();
    });

    it('should have "selectable" class if it is not selected', () => {
      let newNavigationPerPageSelectProps = _.extend({}, basicNavigationPerPageSelectProps, {selected: true});
      let option = navigationPerPageSelect.find('.flat-select-option');

      expect(option.hasClass('selectable')).toBe(true);

      navigationPerPageSelect.setProps(newNavigationPerPageSelectProps);

      expect(option.hasClass('selectable')).toBe(false);
    });

    it('should have "selected-value" "state-selected" classes when selected', () => {
      let newNavigationPerPageSelectProps = _.extend({}, basicNavigationPerPageSelectProps, {selected: true});
      let option = navigationPerPageSelect.find('.flat-select-option');
      let optionSpan = option.find('.enabled');

      expect(optionSpan.hasClass('selected-value')).toBe(false);
      expect(optionSpan.hasClass('state-selected')).toBe(false);

      navigationPerPageSelect.setProps(newNavigationPerPageSelectProps);

      expect(optionSpan.hasClass('selected-value')).toBe(true);
      expect(optionSpan.hasClass('state-selected')).toBe(true);
    });

    it('should call onPerPageClick when clicking link', () => {
      expect(basicNavigationPerPageSelectProps.onPerPageClick).not.toHaveBeenCalled();

      navigationPerPageSelect.find('a').simulate('click');
      expect(basicNavigationPerPageSelectProps.onPerPageClick).toHaveBeenCalled();
    });
  });
});
