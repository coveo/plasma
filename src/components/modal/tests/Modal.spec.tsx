import { shallow, mount, ReactWrapper } from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { Modal, IModalProps } from '../Modal';

describe('Modal', () => {
  let id: string = 'modal';
  let title: string = 'Title';

  describe('<Modal />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <Modal
            id={id}
            title={title}
          />
        );
      }).not.toThrow();
    });
  });

  describe('<Modal />', () => {
    let modal: ReactWrapper<IModalProps, any>;
    let modalInstance: Modal;

    beforeEach(() => {
      modal = mount(
        <Modal
          id={id}
          title={title}
        />,
        { attachTo: document.getElementById('App') }
      );
      modalInstance = modal.instance() as Modal;
    });

    afterEach(() => {
      modal.unmount();
      modal.detach();
    });

    it('should call prop onRender on mounting if set', () => {
      let renderSpy = jasmine.createSpy('onRender');

      expect(() => modalInstance.componentWillMount()).not.toThrow();

      modal.setProps({ id: id, title: title, onRender: renderSpy });
      modal.unmount();
      modal.mount();
      expect(renderSpy.calls.count()).toBe(1);
    });

    it('should call prop onDestroy on unmounting if set', () => {
      let destroySpy = jasmine.createSpy('onDestroy');

      expect(() => modalInstance.componentWillUnmount()).not.toThrow();

      modal.setProps({ id: id, title: title, onDestroy: destroySpy });
      modal.mount();
      modal.unmount();
      expect(destroySpy.calls.count()).toBe(1);
    });

    it('should call prop onClose when modal x clicked and prop is set', () => {
      let closeSpy = jasmine.createSpy('onClose');
      let input = modal.find('.small-close');

      input.simulate('click');
      expect(closeSpy.calls.count()).toBe(0);

      modal.setProps({ id: id, title: title, onClose: closeSpy });
      modal.mount();
      input.simulate('click');
      expect(closeSpy.calls.count()).toBe(1);
    });

    it('should set container class when the container class is specified', () => {
      let containerClass = 'mod-small';
      let classes = [containerClass];
      let container = modal.find('div').first();
      expect(container.hasClass(containerClass)).toBe(false);

      modal.setProps({ id, title, classes });
      modal.mount();
      expect(container.hasClass(containerClass)).toBe(true);
    });

    it('should set header class when the header class is specified', () => {
      let headerClass = 'mod-big';
      let headerClasses = [headerClass];
      let header = modal.find('header').first();
      expect(header.hasClass(headerClass)).toBe(false);

      modal.setProps({ id, title, headerClasses });
      modal.mount();
      expect(header.hasClass(headerClass)).toBe(true);
    });

    it('should set opened class on container when isOpened is true', () => {
      let container = modal.find('div').first();
      expect(container.hasClass('opened')).toBe(false);

      modal.setProps({ id, title, isOpened: true });
      modal.mount();
      expect(container.hasClass('opened')).toBe(true);
    });
  });
});
