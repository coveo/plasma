import { shallow, ReactWrapper, mount } from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { AddInputAction, IAddInputActionProps } from '../AddInputAction';

describe('AddInputAction', () => {

  describe('<AddInputAction />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <AddInputAction />
        );
      }).not.toThrow();
    });
  });

  describe('<AddInputAction />', () => {
    let addInput: ReactWrapper<IAddInputActionProps, any>;

    beforeEach(() => {
      addInput = mount(
        <AddInputAction />,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      addInput.unmount();
      addInput.detach();
    });

    it('should render title prop if prop is set', () => {
      let title = 'a title';
      expect(addInput.find(`[title="${title}"]`).length).toBe(0);

      addInput.setProps({ title });
      addInput.mount();
      expect(addInput.find(`[title="${title}"]`).length).toBe(1);
    });
  });
});
