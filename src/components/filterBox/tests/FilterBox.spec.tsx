import { mount, ReactWrapper, shallow } from 'enzyme';
import { FILTER_PLACEHOLDER, FilterBox, IFilterBoxProps } from '../FilterBox';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('FilterBox', () => {
  let id: string = 'filter-box';

  describe('<FilterBox />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <FilterBox
            id={id}
          />,
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
        { attachTo: document.getElementById('App') },
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
      let expectedPlaceholder = 'new placeholder';

      expect(filterBox.html()).toContain(FILTER_PLACEHOLDER);

      filterBox.setProps({ id: id, filterPlaceholder: expectedPlaceholder });
      filterBox.mount();
      expect(filterBox.html()).not.toContain(FILTER_PLACEHOLDER);
      expect(filterBox.html()).toContain(expectedPlaceholder);
    });

    it('should toggle the hidden class of the clear icon if there is a value or not in the filter input', () => {
      let filterInput = filterBox.find('input');
      let clearIcon = filterBox.find('span').first();

      expect(clearIcon.hasClass('hidden')).toBe(true);

      filterBoxInstance.filterInput.value = 'something';
      filterInput.simulate('change');
      expect(clearIcon.hasClass('hidden')).toBe(false);

      filterBoxInstance.filterInput.value = '';
      filterInput.simulate('change');
      expect(clearIcon.hasClass('hidden')).toBe(true);
    });

    it('should clear the filter input when clicking the clear icon', () => {
      let clearIcon = filterBox.find('span').first();

      filterBoxInstance.filterInput.value = 'something';

      clearIcon.simulate('click');
      expect(filterBoxInstance.filterInput.value).toBe('');
    });

    it('should focus the filter box input when clicking the clear icon', () => {
      let clearIcon = filterBox.find('span').first();

      expect(filterBoxInstance.filterInput).not.toBe(document.activeElement as HTMLInputElement);

      clearIcon.simulate('click');
      expect(filterBoxInstance.filterInput).toBe(document.activeElement as HTMLInputElement);
    });

    it('should set container class when the container class is specified', () => {
      let containerClass = 'mod-small';
      let containerClasses = [containerClass];
      let container = filterBox.find('div').first();
      expect(container.hasClass(containerClass)).toBe(false);

      filterBox.setProps({ id: id, containerClasses });
      filterBox.mount();
      expect(container.hasClass(containerClass)).toBe(true);
    });

    it('should call onBlur when the input loose focus', () => {
      const onBlur = jasmine.createSpy('onBlur');
      filterBox.setProps({ onBlur });

      const element = filterBox.find('.filter-box');
      element.simulate('focus');
      element.simulate('blur');

      expect(onBlur).toHaveBeenCalled();
    });

    it('should call onKeyDown when the input get a key down event', () => {
      const onKeyDown = jasmine.createSpy('onKeyDown');
      filterBox.setProps({ onKeyDown });

      const element = filterBox.find('.filter-box');
      element.simulate('keydown');

      expect(onKeyDown).toHaveBeenCalled();
    });

    it('should call placeCursorAtEndOfInputValue when a focus event is triggered on the filter box', () => {
      const placeCursorAtEndOfInputValueSpy = spyOn(FilterBox.prototype, 'placeCursorAtEndOfInputValue');

      const element = filterBox.find('.filter-box');
      element.simulate('focus');

      expect(placeCursorAtEndOfInputValueSpy).toHaveBeenCalledTimes(1);
    });
  });
});
