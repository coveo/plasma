import { mount, ReactWrapper } from 'enzyme';
import { clearState } from '../../../utils/ReduxUtils';
import { IReactVaporState } from '../../../ReactVapor';
import { TestUtils } from '../../../utils/TestUtils';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { IModalProps, Modal } from '../Modal';
import { ModalConnected } from '../ModalConnected';
import { openModal, closeModal } from '../ModalActions';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('Modal', () => {
  describe('<ModalConnected />', () => {
    let modal: ReactWrapper<IModalProps, any>;
    let id: string;
    let title: string;
    let wrapper: ReactWrapper<any, any>;
    let store: Store<IReactVaporState>;

    beforeEach(() => {
      id = 'modal';
      title = 'Title';

      store = TestUtils.buildStore();

      wrapper = mount(
        <Provider store={store}>
          <ModalConnected
            id={id}
            title={title}
          />
        </Provider>,
        { attachTo: document.getElementById('App') }
      );
      modal = wrapper.find(Modal).first();
    });

    afterEach(() => {
      store.dispatch(clearState());
      wrapper.unmount();
      wrapper.detach();
    });

    it('should get its id as a prop', () => {
      let idProp = modal.props().id;

      expect(idProp).toBeDefined();
      expect(idProp).toBe(id);
    });

    it('should get its title as a prop', () => {
      let titleProp = modal.props().title;

      expect(titleProp).toBeDefined();
      expect(titleProp).toBe(title);
    });

    it('should get isOpened false as a prop', () => {
      let isOpened = modal.props().isOpened;

      expect(isOpened).toBeDefined();
      expect(isOpened).toBe(false);
    });

    it('should get what to do on render as a prop', () => {
      let onRenderProp = modal.props().onRender;

      expect(onRenderProp).toBeDefined();
    });

    it('should get what to do on destroy as a prop', () => {
      let onDestroyProp = modal.props().onDestroy;

      expect(onDestroyProp).toBeDefined();
    });

    it('should get what to do on close as a prop', () => {
      let onCloseProp = modal.props().onClose;

      expect(onCloseProp).toBeDefined();
    });

    it('should add the modal in the store on render', () => {
      expect(store.getState().modals.filter(modal => modal.id === id).length).toBe(1);
    });

    it('should open the modal in the store when dispatching a "openModal" action', () => {
      expect(store.getState().modals.filter(modal => modal.id === id).length).toBe(1);
      expect(store.getState().modals.filter(modal => modal.id === id)[0].isOpened).toBe(false);

      store.dispatch(openModal(id));
      expect(store.getState().modals.filter(modal => modal.id === id)[0].isOpened).toBe(true);
    });

    it('should close the modal in the store when dispatching a "closeModal" action', () => {
      expect(store.getState().modals.filter(modal => modal.id === id)[0].isOpened).toBe(false);
      store.dispatch(openModal(id));
      expect(store.getState().modals.filter(modal => modal.id === id)[0].isOpened).toBe(true);

      store.dispatch(closeModal(id));
      expect(store.getState().modals.filter(modal => modal.id === id)[0].isOpened).toBe(false);
    });

    it('should remove the modal in the store on destroy', () => {
      wrapper.unmount();
      expect(store.getState().modals.filter(modals => modals.id === id).length).toBe(0);
    });
  });
});
