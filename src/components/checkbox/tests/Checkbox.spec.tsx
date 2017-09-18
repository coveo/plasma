import { shallow, mount, ReactWrapper } from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { Checkbox, ICheckboxProps } from '../Checkbox';

describe('Checkbox', () => {
  describe('<Checkbox />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <Checkbox />
        );
      }).not.toThrow();
    });
  });

  describe('<Checkbox />', () => {
    let checkbox: ReactWrapper<ICheckboxProps, any>;
    let checkboxInstance: Checkbox;

    beforeEach(() => {
      checkbox = mount(
        <Checkbox />,
        { attachTo: document.getElementById('App') }
      );
      checkboxInstance = checkbox.instance() as Checkbox;
    });

    afterEach(() => {
      checkbox.unmount();
      checkbox.detach();
    });

    it('should set label when specified', () => {
      const label = 'salut';
      const innerLabel = checkbox.find('.label').first();
      expect(innerLabel.text()).toBe('');

      checkbox.setProps({ label }).mount();
      expect(innerLabel.text()).toBe(label);
    });

    it('should set not disable inner input when disabled prop is not specified', () => {
      const innerInput = checkbox.find('input').first();
      expect(innerInput.prop('disabled')).toBe(false);
    });

    it('should set not check inner input when checked prop is not specified', () => {
      const innerInput = checkbox.find('input').first();
      expect(innerInput.prop('checked')).toBe(false);
    });

    it('should set disabled prop when specified', () => {
      const innerInput = checkbox.find('input').first();
      checkbox.setProps({ disabled: false }).mount();
      expect(innerInput.prop('disabled')).toBe(false);

      checkbox.setProps({ disabled: true }).mount();
      expect(innerInput.prop('disabled')).toBe(true);
    });

    it('should set checked prop when specified', () => {
      const innerInput = checkbox.find('input').first();
      checkbox.setProps({ checked: false }).mount();
      expect(innerInput.prop('checked')).toBe(false);

      checkbox.setProps({ checked: true }).mount();
      expect(innerInput.prop('checked')).toBe(true);
    });

    it('should set classes when specified', () => {
      const innerClass = 'salut';
      const classes = [innerClass];
      const innerLabel = checkbox.find('label').first();
      expect(innerLabel.hasClass(innerClass)).toBe(false);

      checkbox.setProps({ classes }).mount();
      expect(innerLabel.hasClass(innerClass)).toBe(true);
    });

    it('should call prop onChange when specified on click', () => {
      const changeSpy = jasmine.createSpy('onChange');
      const innerLabel = checkbox.find('label');

      checkbox.setProps({ onChange: changeSpy }).mount();
      innerLabel.simulate('click');

      expect(changeSpy.calls.count()).toBe(1);
    });
  });
});
