import { shallow, mount, ReactWrapper } from 'enzyme';
import { ItemFilter, IItemFilterProps, ELLIPSIS } from '../ItemFilter';
import * as _ from 'underscore';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('Item filter', () => {
  const ITEM_FILTER_BASIC_PROPS: IItemFilterProps = {
    label: 'Item filter',
    item: '',
    onClear: jasmine.createSpy('onClear')
  };

  describe('<ItemFilter />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <ItemFilter {...ITEM_FILTER_BASIC_PROPS} />
        );
      }).not.toThrow();
    });
  });

  describe('<ItemFilter />', () => {
    let itemFilterComponent: ReactWrapper<IItemFilterProps, any>;

    beforeEach(() => {
      itemFilterComponent = mount(
        <ItemFilter {...ITEM_FILTER_BASIC_PROPS} />,
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
      expect(labelProp).toBe(ITEM_FILTER_BASIC_PROPS.label);
    });

    it('should get the item as a prop', () => {
      let itemProp = itemFilterComponent.props().item;

      expect(itemProp).toBeDefined();
      expect(itemProp).toBe(ITEM_FILTER_BASIC_PROPS.item);
    });

    it('should get what to do onClear as a prop', () => {
      let onClearProp = itemFilterComponent.props().onClear;

      expect(onClearProp).toBeDefined();
      expect(onClearProp).toEqual(ITEM_FILTER_BASIC_PROPS.onClear);
    });

    it('should display the label', () => {
      expect(itemFilterComponent.html()).toContain(ITEM_FILTER_BASIC_PROPS.label);
    });

    it('should display the item', () => {
      let newItemFilterProps: IItemFilterProps = _.extend({}, ITEM_FILTER_BASIC_PROPS, { item: 'an item' });
      itemFilterComponent.setProps(newItemFilterProps);

      expect(itemFilterComponent.html()).toContain(newItemFilterProps.item);
    });

    it('should call onClear when clicking the "item-filter-clear" button', () => {
      itemFilterComponent.find('.item-filter-clear').simulate('click');

      expect(ITEM_FILTER_BASIC_PROPS.onClear).toHaveBeenCalled();
    });

    it('should crop the item to the length of the crop prop', () => {
      let longItem: string = 'longer than 10 characters for sure';
      let cropProps: IItemFilterProps = _.extend({}, ITEM_FILTER_BASIC_PROPS,
        { crop: 10, item: longItem });
      itemFilterComponent.setProps(cropProps);

      expect(itemFilterComponent.find('.item-filter-item').text().length).toBe(ELLIPSIS.length + cropProps.crop);

      cropProps = _.extend({}, ITEM_FILTER_BASIC_PROPS,
        { crop: -12, item: longItem });
      itemFilterComponent.setProps(cropProps);

      expect(itemFilterComponent.find('.item-filter-item').text().length).toBe(ELLIPSIS.length + Math.abs(cropProps.crop));

      cropProps = _.extend({}, ITEM_FILTER_BASIC_PROPS,
        { crop: longItem.length, item: longItem });
      itemFilterComponent.setProps(cropProps);

      expect(itemFilterComponent.find('.item-filter-item').text().length).toBe(longItem.length);

      cropProps = _.extend({}, ITEM_FILTER_BASIC_PROPS,
        { crop: -longItem.length, item: longItem });
      itemFilterComponent.setProps(cropProps);

      expect(itemFilterComponent.find('.item-filter-item').text().length).toBe(longItem.length);
    });
  });
});
