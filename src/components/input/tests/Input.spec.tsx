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

    it('should call prop onChange on inner input blur', () => {
      const changeSpy = jasmine.createSpy('onChange');
      const innerInput = input.find('input');

      input.setProps({ onChange: changeSpy });
      input.mount();
      innerInput.simulate('blur');

      expect(changeSpy.calls.count()).toBe(1);
    });

    it('should call prop onKeyUp on key up', () => {
      const keyUpSpy = jasmine.createSpy('onKeyUp');
      const innerInput = input.find('input');

      input.setProps({ onKeyUp: keyUpSpy });
      input.mount();
      innerInput.simulate('keyUp');

      expect(keyUpSpy.calls.count()).toBe(1);
    });
  });
});
