import { shallow, mount, ReactWrapper } from 'enzyme';
import {ItemFilter, IItemFilterProps} from '../ItemFilter';
import * as _ from 'underscore';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('Item filter', () => {
  const itemFilterBasicProps: IItemFilterProps = {
    label: 'Item filter',
    item: '',
    onClear: jasmine.createSpy('onClear')
  };

  describe('<ItemFilter />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <ItemFilter {...itemFilterBasicProps} />
        );
      }).not.toThrow();
    });
  });

  describe('<ItemFilter />', () => {
    let itemFilterComponent: ReactWrapper<IItemFilterProps, any>;

    beforeEach(() => {
      itemFilterComponent = mount(
        <ItemFilter {...itemFilterBasicProps} />,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      itemFilterComponent.unmount();
      itemFilterComponent.detach();
    });

    it('should get the label as a prop', () => {
      let labelProp = itemFilterComponent.props().label;

      expect(labelProp).toBeDefined();
      expect(labelProp).toBe(itemFilterBasicProps.label);
    });

    it('should get the item as a prop', () => {
      let itemProp = itemFilterComponent.props().item;

      expect(itemProp).toBeDefined();
      expect(itemProp).toBe(itemFilterBasicProps.item);
    });

    it('should get what to do onClear as a prop', () => {
      let onClearProp = itemFilterComponent.props().onClear;

      expect(onClearProp).toBeDefined();
      expect(onClearProp).toEqual(itemFilterBasicProps.onClear);
    });

    it('should display the label', () => {
      expect(itemFilterComponent.html()).toContain(itemFilterBasicProps.label);
    });

    it('should display the item', () => {
      let newItemFilterProps = _.extend({}, itemFilterBasicProps, {item: 'an item'});
      itemFilterComponent.setProps(newItemFilterProps);

      expect(itemFilterComponent.html()).toContain(newItemFilterProps.item);
    });

    it('should call onClear when clicking the "coveo-item-filter-clear" button', () => {
      itemFilterComponent.find('.coveo-item-filter-clear').simulate('click');

      expect(itemFilterBasicProps.onClear).toHaveBeenCalled();
    });
  });
});
