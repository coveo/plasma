import { shallow, mount, ReactWrapper } from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { ModalHeader, IModalHeaderProps } from '../ModalHeader';

describe('ModalHeader', () => {
  let id: string = 'modal';
  let title: string = 'Title';

  describe('<ModalHeader />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <ModalHeader
            title={title}
          />
        );
      }).not.toThrow();
    });
  });

  describe('<ModalHeader />', () => {
    let modal: ReactWrapper<IModalHeaderProps, any>;
    let modalInstance: ModalHeader;

    beforeEach(() => {
      modal = mount(
        <ModalHeader
          title={title}
        />,
        { attachTo: document.getElementById('App') }
      );
      modalInstance = modal.instance() as ModalHeader;
    });

    afterEach(() => {
      modal.unmount();
      modal.detach();
    });

    it('should call prop onClose when modal x clicked and prop is set', () => {
      let closeSpy = jasmine.createSpy('onClose');

      modal.setProps({ id: id, title: title, onClose: closeSpy });
      modal.mount();
      let input = modal.find('.small-close');
      input.simulate('click');
      expect(closeSpy.calls.count()).toBe(1);
    });

    it('should set class when the class is specified', () => {
      let headerClass = 'mod-big';
      let classes = [headerClass];
      let header = modal.find('header').first();
      expect(header.hasClass(headerClass)).toBe(false);

      modal.setProps({ id, title, classes });
      modal.mount();
      expect(header.hasClass(headerClass)).toBe(true);
    });
  });
});
