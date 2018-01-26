import { shallow, mount, ReactWrapper } from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { Input, IInputProps } from '../Input';

describe('Input', () => {
  describe('<Input />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <Input />
        );
      }).not.toThrow();
    });
  });

  describe('<Input />', () => {
    let input: ReactWrapper<IInputProps, any>;

    beforeEach(() => {
      input = mount(
        <Input />,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      input.unmount();
      input.detach();
    });

    it('should set inner input classes when specified', () => {
      const innerInputClass = 'valid';
      const classes = [innerInputClass];
      const innerInput = input.find('input').first();
      expect(innerInput.hasClass(innerInputClass)).toBe(false);

      input.setProps({ innerInputClasses: classes }).mount();
      expect(innerInput.hasClass(innerInputClass)).toBe(true);
    });

    it('should set inner input id when specified', () => {
      const id = 'yo';
      const innerInput = input.find('input').first();
      expect(innerInput.prop('id')).toBe(undefined);

      input.setProps({ id }).mount();
      expect(innerInput.prop('id')).toBe(id);
    });

    it('should set inner input name when specified', () => {
      const name = 'yo';
      const innerInput = input.find('input').first();
      expect(innerInput.prop('name')).toBe(undefined);

      input.setProps({ name }).mount();
      expect(innerInput.prop('name')).toBe(name);
    });

    it('should set checked prop when specified', () => {
      const innerInput = input.find('input').first();
      input.setProps({ checked: false }).mount();
      expect(innerInput.prop('checked')).toBe(false);

      input.setProps({ checked: true }).mount();
      expect(innerInput.prop('checked')).toBe(true);
    });

    it('should set disabled prop when specified', () => {
      const innerInput = input.find('input').first();
      input.setProps({ disabled: false }).mount();
      expect(innerInput.prop('disabled')).toBe(false);

      input.setProps({ disabled: true }).mount();
      expect(innerInput.prop('disabled')).toBe(true);
    });

    it('should set readonly prop when specified', () => {
      const innerInput = input.find('input').first();
      input.setProps({ readOnly: false }).mount();
      expect(innerInput.prop('readOnly')).toBe(false);

      input.setProps({ readOnly: true }).mount();
      expect(innerInput.prop('readOnly')).toBe(true);
    });

    it('should set inner input type when specified', () => {
      const type = 'password';
      const innerInput = input.find('input').first();
      expect(innerInput.prop('type')).toBe('text');

      input.setProps({ type }).mount();
      expect(innerInput.prop('type')).toBe(type);
    });


    it('should call prop onBlur on inner input blur', () => {
      const blurSpy = jasmine.createSpy('onBlur');
      const innerInput = input.find('input');

      input.setProps({ onBlur: blurSpy }).mount();
      innerInput.simulate('blur');

      expect(blurSpy.calls.count()).toBe(1);
    });

    it('should call prop onChange on inner input change', () => {
      const changeSpy = jasmine.createSpy('onChange');
      const innerInput = input.find('input');

      input.setProps({ onChange: changeSpy }).mount();
      innerInput.simulate('change');

      expect(changeSpy.calls.count()).toBe(1);
    });

    it('should call prop onClick on inner container click', () => {
      const clickSpy = jasmine.createSpy('onClick');
      const innerContainer = input.find('div');

      input.setProps({ onClick: clickSpy }).mount();
      innerContainer.simulate('click');

      expect(clickSpy.calls.count()).toBe(1);
    });

    it('should call prop onKeyUp on key up', () => {
      const keyUpSpy = jasmine.createSpy('onKeyUp');
      const innerInput = input.find('input');

      input.setProps({ onKeyUp: keyUpSpy }).mount();
      innerInput.simulate('keyUp');

      expect(keyUpSpy.calls.count()).toBe(1);
    });
  });
});
