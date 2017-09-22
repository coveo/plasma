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
    let inputInstance: Input;

    beforeEach(() => {
      input = mount(
        <Input />,
        { attachTo: document.getElementById('App') }
      );
      inputInstance = input.instance() as Input;
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

    it('should set inner input type when specified', () => {
      const type = 'password';
      const innerInput = input.find('input').first();
      expect(innerInput.prop('type')).toBe('text');

      input.setProps({ type }).mount();
      expect(innerInput.prop('type')).toBe(type);
    });

    it('should set inner label valid message when specified', () => {
      const message = 'salut';
      const innerLabel = input.find('label').first();
      expect(innerLabel.prop('data-valid-message')).toBe(undefined);

      input.setProps({ validMessage: message }).mount();
      expect(innerLabel.prop('data-valid-message')).toBe(message);
    });

    it('should set inner label invalid message when specified', () => {
      const message = 'salut';
      const innerLabel = input.find('label').first();
      expect(innerLabel.prop('data-invalid-message')).toBe(undefined);

      input.setProps({ invalidMessage: message }).mount();
      expect(innerLabel.prop('data-invalid-message')).toBe(message);
    });

    it('should call prop onChange on inner input blur', () => {
      const changeSpy = jasmine.createSpy('onChange');
      const innerInput = input.find('input');

      input.setProps({ onChange: changeSpy }).mount();
      innerInput.simulate('blur');

      expect(changeSpy.calls.count()).toBe(1);
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
