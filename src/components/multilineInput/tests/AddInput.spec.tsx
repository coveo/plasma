import { shallow, mount, ReactWrapper } from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { AddInput } from '../AddInput';
import { IInputProps } from '../../input/Input';

describe('AddInput', () => {

  describe('<AddInput />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <AddInput />
        );
      }).not.toThrow();
    });
  });

  describe('<AddInput />', () => {
    let addInput: ReactWrapper<IInputProps, any>;

    beforeEach(() => {
      addInput = mount(
        <AddInput />,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      addInput.unmount();
      addInput.detach();
    });

    it('should call property onChange when input loses focus and prop is specified', () => {
      let blurSpy = jasmine.createSpy('onBlur');
      let innerInput = addInput.find('input');

      innerInput.simulate('blur');
      expect(blurSpy.calls.count()).toBe(0);

      addInput.setProps({ onChange: blurSpy });
      addInput.mount();

      innerInput.simulate('blur');
      expect(blurSpy.calls.count()).toBe(1);
    });

    it('should call property onChange when inner input has focus and Enter key is released', () => {
      let changeSpy = jasmine.createSpy('onChange');
      let innerInput = addInput.find('input');

      innerInput.simulate('keyUp', {
        key: 'Enter'
      });
      expect(changeSpy.calls.count()).toBe(0);

      addInput.setProps({ onChange: changeSpy });
      addInput.mount();

      innerInput.simulate('keyUp', {
        key: 'Enter'
      });
      expect(changeSpy.calls.count()).toBe(1);
    });
  });
});
