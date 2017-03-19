import { shallow, mount, ReactWrapper } from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { ModalBody, IModalBodyProps } from '../ModalBody';

describe('ModalBody', () => {

  describe('<ModalBody />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <ModalBody />
        );
      }).not.toThrow();
    });
  });

  describe('<Modal />', () => {
    let modalBody: ReactWrapper<IModalBodyProps, any>;

    beforeEach(() => {
      modalBody = mount(
        <ModalBody />,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      modalBody.unmount();
      modalBody.detach();
    });

    it('should set class when the class is specified', () => {
      let containerClass = 'mod-header-padding';
      let classes = [containerClass];
      let container = modalBody.find('div').first();
      expect(container.hasClass(containerClass)).toBe(false);

      modalBody.setProps({ classes });
      modalBody.mount();
      expect(container.hasClass(containerClass)).toBe(true);
    });
  });
});
