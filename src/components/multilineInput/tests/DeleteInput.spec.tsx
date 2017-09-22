import { shallow, mount, ReactWrapper } from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { DeletableInput } from '../DeletableInput';
import { IInputProps } from '../../input/Input';

describe('DeletableInput', () => {

  describe('<DeletableInput />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <DeletableInput />
        );
      }).not.toThrow();
    });
  });

  describe('<DeletableInput />', () => {
    let deleteInput: ReactWrapper<IInputProps, any>;

    beforeEach(() => {
      deleteInput = mount(
        <DeletableInput />,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      deleteInput.unmount();
      deleteInput.detach();
    });

    it('should call property onBlur when delete button is clicked and prop is specified', () => {
      let blurSpy = jasmine.createSpy('onBlur');
      let deleteButton = deleteInput.find('.input-actions');

      deleteButton.simulate('click');
      expect(blurSpy).not.toHaveBeenCalled();

      deleteInput.setProps({ onBlur: blurSpy });
      deleteInput.mount();

      deleteButton.simulate('click');
      expect(blurSpy).toHaveBeenCalledTimes(1);
    });
  });
});
