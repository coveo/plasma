import {shallow, mount, ReactWrapper} from 'enzyme';
import {FilterBox, IFilterBoxProps} from '../FilterBox';
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

    beforeEach(() => {
      filterBox = mount(
        <FilterBox
          id={id}
        />,
        { attachTo: document.getElementById('App') }
      );
    });

    it('should call prop onRender on mounting if set', () => {
      let renderSpy = jasmine.createSpy('onRender');
      expect(renderSpy.calls.count()).toBe(0);
      filterBox.setProps({ id: id, onRender: renderSpy });
      filterBox.unmount();
      filterBox.mount();
      expect(renderSpy.calls.count()).toBe(1);
    });

    it('should call prop onDestroy on unmounting if set', () => {
      let destroySpy = jasmine.createSpy('onDestroy');
      filterBox.unmount();
      expect(destroySpy.calls.count()).toBe(0);
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
  });
});
