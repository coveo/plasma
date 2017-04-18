import { shallow, mount, ReactWrapper } from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { ModalPrompt, IModalPromptProps } from '../ModalPrompt';

describe('ModalPrompt', () => {
  const id: string = 'modalPrompt';
  const title: string = 'Title';
  const confirmLabel: string = 'Confirm';
  const cancelLabel: string = 'Cancel';
  const message: string = 'message';

  describe('<ModalPrompt />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <ModalPrompt
            id={id}
            title={title}
            confirmLabel={confirmLabel}
            cancelLabel={cancelLabel}
            message={message}
          />
        );
      }).not.toThrow();
    });
  });

  describe('<ModalPrompt />', () => {
    const defaultConfirmLabel: string = 'Confirm';
    const defaultCancelLabel: string = 'Cancel';
    let modalPrompt: ReactWrapper<IModalPromptProps, any>;
    let modalPromptInstance: ModalPrompt;

    beforeEach(() => {
      modalPrompt = mount(
        <ModalPrompt
          id={id}
          title={title}
          message={message}
        />,
        {attachTo: document.getElementById('App')}
      );
      modalPromptInstance = modalPrompt.instance() as ModalPrompt;
    });

    afterEach(() => {
      modalPrompt.unmount();
      modalPrompt.detach();
    });

    it('should set default value for cancel label when not set', () => {
      const cancelButton = modalPrompt.find('.js-cancel');

      expect(cancelButton.text()).toBe(defaultCancelLabel);
    });

    it('should set default value for confirm label when not set', () => {
      const confirmButton = modalPrompt.find('.js-confirm');

      expect(confirmButton.text()).toBe(defaultConfirmLabel);
    });
  });

  describe('<ModalPrompt />', () => {
    let modalPrompt: ReactWrapper<IModalPromptProps, any>;
    let modalPromptInstance: ModalPrompt;

    beforeEach(() => {
      modalPrompt = mount(
        <ModalPrompt
          id={id}
          title={title}
          confirmLabel={confirmLabel}
          cancelLabel={cancelLabel}
          message={message}
        />,
        { attachTo: document.getElementById('App') }
      );
      modalPromptInstance = modalPrompt.instance() as ModalPrompt;
    });

    afterEach(() => {
      modalPrompt.unmount();
      modalPrompt.detach();
    });

    it('should call prop onCancel when modalPrompt x is clicked and prop is set', () => {
      const cancelSpy = jasmine.createSpy('onCancel');
      const closeButton = modalPrompt.find('.small-close');

      closeButton.simulate('click');
      expect(cancelSpy).not.toHaveBeenCalled();

      modalPrompt.setProps({ id, title, onCancel: cancelSpy });
      modalPrompt.mount();
      closeButton.simulate('click');

      expect(cancelSpy).toHaveBeenCalledTimes(1);
    });

    it('should call prop onCancel when modalPrompt cancel button is clicked and prop is set', () => {
      const cancelSpy = jasmine.createSpy('onCancel');
      const cancelButton = modalPrompt.find('.js-cancel');

      cancelButton.simulate('click');
      expect(cancelSpy).not.toHaveBeenCalled();

      modalPrompt.setProps({ id, title, onCancel: cancelSpy });
      modalPrompt.mount();
      cancelButton.simulate('click');

      expect(cancelSpy).toHaveBeenCalledTimes(1);
    });

    it('should call prop onConfirm when modalPrompt Confirm button is clicked and prop is set', () => {
      const confirmSpy = jasmine.createSpy('onConfirm');
      const confirmButton = modalPrompt.find('.js-confirm');

      confirmButton.simulate('click');

      expect(confirmSpy).not.toHaveBeenCalled();

      modalPrompt.setProps({ id, title, onConfirm: confirmSpy });
      modalPrompt.mount();
      confirmButton.simulate('click');

      expect(confirmSpy).toHaveBeenCalledTimes(1);
    });

    it('should set opened class on container when isOpened is true', () => {
      const container = modalPrompt.find('.modal-container');
      expect(container.hasClass('opened')).toBe(false);

      modalPrompt.setProps({ id, title, isOpened: true });
      modalPrompt.mount();

      expect(container.hasClass('opened')).toBe(true);
    });

    it('should call prop onCancel when concreteModalPrompt cancel button is clicked and prop is set', () => {
      const cancelSpy = jasmine.createSpy('onCancel');
      const cancelButton = modalPrompt.find('.js-cancel');

      cancelButton.simulate('click');
      expect(cancelSpy).not.toHaveBeenCalled();

      modalPrompt.setProps({ id, title, onCancel: cancelSpy });
      modalPrompt.mount();
      cancelButton.simulate('click');

      expect(cancelSpy).toHaveBeenCalledTimes(1);
    });

    it('should call prop onConfirm when modalPrompt Confirm button is clicked and prop is set', () => {
      const confirmSpy = jasmine.createSpy('onConfirm');
      const confirmButton = modalPrompt.find('.js-confirm');

      confirmButton.simulate('click');
      expect(confirmSpy).not.toHaveBeenCalled();

      modalPrompt.setProps({ id, title, onConfirm: confirmSpy });
      modalPrompt.mount();
      confirmButton.simulate('click');

      expect(confirmSpy).toHaveBeenCalledTimes(1);
    });
  });
});
