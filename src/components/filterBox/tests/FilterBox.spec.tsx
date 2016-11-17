import { shallow, mount, ReactWrapper } from 'enzyme';
import { FilterBox, IFilterBoxProps, FILTER_PLACEHOLDER } from '../FilterBox';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('FilterBox', () => {
  let id: string = 'filter-box';

  describe('<FilterBox />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <FilterBox
            id={id}
            />
        );
      }).not.toThrow();
    });
  });

  describe('<FilterBox />', () => {
    let filterBox: ReactWrapper<IFilterBoxProps, any>;
    let filterBoxInstance: FilterBox;

    beforeEach(() => {
      filterBox = mount(
        <FilterBox
          id={id}
          />,
        { attachTo: document.getElementById('App') }
      );
      filterBoxInstance = filterBox.instance() as FilterBox;
    });

    afterEach(() => {
      filterBox.unmount();
      filterBox.detach();
    });

    it('should call prop onRender on mounting if set', () => {
      let renderSpy = jasmine.createSpy('onRender');

      expect(() => filterBoxInstance.componentWillMount()).not.toThrow();

      filterBox.setProps({ id: id, onRender: renderSpy });
      filterBox.unmount();
      filterBox.mount();
      expect(renderSpy.calls.count()).toBe(1);
    });

    it('should call prop onDestroy on unmounting if set', () => {
      let destroySpy = jasmine.createSpy('onDestroy');

      expect(() => filterBoxInstance.componentWillUnmount()).not.toThrow();

      filterBox.setProps({ id: id, onDestroy: destroySpy });
      filterBox.mount();
      filterBox.unmount();
      expect(destroySpy.calls.count()).toBe(1);
    });

    it('should call prop onFilter when filter input input value changes and prop is set', () => {
      let filterSpy = jasmine.createSpy('onFilter');
      let input = filterBox.find('input');

      input.simulate('change');
      expect(filterSpy.calls.count()).toBe(0);

      filterBox.setProps({ id: id, onFilter: filterSpy });
      filterBox.mount();
      input.simulate('change');
      expect(filterSpy.calls.count()).toBe(1);
    });

    it('should display the filterPlaceholder if set as a prop else, display the default one', () => {
      let expectedPlaceholder = 'Filter through rows';

      expect(filterBox.html()).toContain(FILTER_PLACEHOLDER);

      filterBox.setProps({ id: id, filterPlaceholder: expectedPlaceholder });
      filterBox.mount();
      expect(filterBox.html()).not.toContain(FILTER_PLACEHOLDER);
      expect(filterBox.html()).toContain(expectedPlaceholder);
    });
  });
});
