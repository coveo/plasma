import { shallow, mount, ReactWrapper } from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { DeleteInput } from '../DeleteInput';
import { IInputProps } from '../../input/Input';

describe('DeleteInput', () => {

  describe('<DeleteInput />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <DeleteInput />
        );
      }).not.toThrow();
    });
  });

  describe('<DeleteInput />', () => {
    let deleteInput: ReactWrapper<IInputProps, any>;

    beforeEach(() => {
      deleteInput = mount(
        <DeleteInput />,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      deleteInput.unmount();
      deleteInput.detach();
    });

    it('should call property onChange when delete button is clicked and prop is specified', () => {
      let changeSpy = jasmine.createSpy('onChange');
      let deleteButton = deleteInput.find('.input-actions');

      deleteButton.simulate('click');
      expect(changeSpy.calls.count()).toBe(0);

      deleteInput.setProps({ onChange: changeSpy });
      deleteInput.mount();

      deleteButton.simulate('click');
      expect(changeSpy.calls.count()).toBe(1);
    });
  });
});
