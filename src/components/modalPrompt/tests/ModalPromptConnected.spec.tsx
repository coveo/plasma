import { mount, ReactWrapper } from 'enzyme';
import { clearState } from '../../../utils/ReduxUtils';
import { IReactVaporState } from '../../../ReactVapor';
import { TestUtils } from '../../../utils/TestUtils';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { IModalPromptProps, ModalPrompt } from '../ModalPrompt';
import { ModalPromptConnected } from '../ModalPromptConnected';
import { openModalPrompt, cancelModalPrompt } from '../ModalPromptActions';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('ModalPrompt', () => {
  describe('<ModalPromptConnected />', () => {
    let modalPrompt: ReactWrapper<IModalPromptProps, any>;
    let wrapper: ReactWrapper<any, any>;
    let store: Store<IReactVaporState>;
    const id: string = 'modalPrompt';
    const title: string = 'Title';
    const confirmLabel: string = 'Confirm';
    const cancelLabel: string = 'Cancel';
    const message: string = 'message';

    beforeEach(() => {
      store = TestUtils.buildStore();

      wrapper = mount(
        <Provider store={store}>
          <ModalPromptConnected
            id={id}
            title={title}
            confirmLabel={confirmLabel}
            cancelLabel={cancelLabel}
            message={message}
          />
        </Provider>,
        { attachTo: document.getElementById('App') }
      );
      modalPrompt = wrapper.find(ModalPrompt).first();
    });

    afterEach(() => {
      store.dispatch(clearState());
      wrapper.unmount();
      wrapper.detach();
    });

    it('should get its id as a prop', () => {
      let idProp = modalPrompt.props().id;

      expect(idProp).toBeDefined();
      expect(idProp).toBe(id);
    });

    it('should get its title as a prop', () => {
      let titleProp = modalPrompt.props().title;

      expect(titleProp).toBeDefined();
      expect(titleProp).toBe(title);
    });

    it('should get its message as a prop', () => {
      let titleProp = modalPrompt.props().message;

      expect(titleProp).toBeDefined();
      expect(titleProp).toBe(message);
    });

    it('should get the cancel label as a prop', () => {
      let titleProp = modalPrompt.props().cancelLabel;

      expect(titleProp).toBeDefined();
      expect(titleProp).toBe(cancelLabel);
    });

    it('should get the confirm label as a prop', () => {
      let titleProp = modalPrompt.props().confirmLabel;

      expect(titleProp).toBeDefined();
      expect(titleProp).toBe(confirmLabel);
    });

    it('should get isOpened false as a prop', () => {
      let isOpened = modalPrompt.props().isOpened;

      expect(isOpened).toBeDefined();
      expect(isOpened).toBe(false);
    });

    it('should get what to do on render as a prop', () => {
      let onRenderProp = modalPrompt.props().onRender;

      expect(onRenderProp).toBeDefined();
    });

    it('should get what to do on destroy as a prop', () => {
      let onDestroyProp = modalPrompt.props().onDestroy;

      expect(onDestroyProp).toBeDefined();
    });

    it('should get what to do on cancel as a prop', () => {
      let onCloseProp = modalPrompt.props().onCancel;

      expect(onCloseProp).toBeDefined();
    });

    it('should add the modalPrompt in the store on render', () => {
      expect(store.getState().modalPrompts.filter(modalPrompt => modalPrompt.id === id).length).toBe(1);
    });

    it('should open the modalPrompt in the store when dispatching a "openModalPrompt" action', () => {
      expect(store.getState().modalPrompts.filter(modalPrompt => modalPrompt.id === id).length).toBe(1);
      expect(store.getState().modalPrompts.filter(modalPrompt => modalPrompt.id === id)[0].isOpened).toBe(false);

      store.dispatch(openModalPrompt(id));
      expect(store.getState().modalPrompts.filter(modalPrompt => modalPrompt.id === id)[0].isOpened).toBe(true);
    });

    it('should close the modalPrompt in the store when dispatching a "cancelModalPrompt" action', () => {
      expect(store.getState().modalPrompts.filter(modalPrompt => modalPrompt.id === id)[0].isOpened).toBe(false);
      store.dispatch(openModalPrompt(id));
      expect(store.getState().modalPrompts.filter(modalPrompt => modalPrompt.id === id)[0].isOpened).toBe(true);

      store.dispatch(cancelModalPrompt(id));
      expect(store.getState().modalPrompts.filter(modalPrompt => modalPrompt.id === id)[0].isOpened).toBe(false);
    });

    it('should close the modalPrompt in the store when clicking on modalPrompt x', () => {
      expect(store.getState().modalPrompts.filter(modalPrompt => modalPrompt.id === id)[0].isOpened).toBe(false);
      store.dispatch(openModalPrompt(id));
      expect(store.getState().modalPrompts.filter(modalPrompt => modalPrompt.id === id)[0].isOpened).toBe(true);

      modalPrompt.find('.small-close').simulate('click');
      expect(store.getState().modalPrompts.filter(modalPrompt => modalPrompt.id === id)[0].isOpened).toBe(false);
    });

    it('should close the modalPrompt in the store when clicking on confirm', () => {
      expect(store.getState().modalPrompts.filter(modalPrompt => modalPrompt.id === id)[0].isOpened).toBe(false);
      store.dispatch(openModalPrompt(id));
      expect(store.getState().modalPrompts.filter(modalPrompt => modalPrompt.id === id)[0].isOpened).toBe(true);

      modalPrompt.find('.mod-primary').simulate('click');
      expect(store.getState().modalPrompts.filter(modalPrompt => modalPrompt.id === id)[0].isOpened).toBe(false);
    });

    it('should set confirmed to true in the store when clicking on confirm', () => {
      expect(store.getState().modalPrompts.filter(modalPrompt => modalPrompt.id === id)[0].confirmed).toBe(false);
      store.dispatch(openModalPrompt(id));
      expect(store.getState().modalPrompts.filter(modalPrompt => modalPrompt.id === id)[0].confirmed).toBe(false);

      modalPrompt.find('.mod-primary').simulate('click');
      expect(store.getState().modalPrompts.filter(modalPrompt => modalPrompt.id === id)[0].confirmed).toBe(true);
    });

    it('should remove the modalPrompt in the store on destroy', () => {
      wrapper.unmount();
      expect(store.getState().modalPrompts.filter(modalPrompts => modalPrompts.id === id).length).toBe(0);
    });
  });
});
