import { mount, ReactWrapper } from 'enzyme';
import { clearState } from '../../../utils/ReduxUtils';
import { IReactVaporState } from '../../../ReactVapor';
import { TestUtils } from '../../../utils/TestUtils';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { IModalHeaderProps, ModalHeader } from '../ModalHeader';
import { ModalHeaderConnected } from '../ModalHeaderConnected';
import { openModal, closeModal, addModal } from '../ModalActions';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('ModalHeader', () => {
  describe('<ModalHeaderConnected />', () => {
    let modalHeader: ReactWrapper<IModalHeaderProps, any>;
    let id: string;
    let title: string;
    let wrapper: ReactWrapper<any, any>;
    let store: Store<IReactVaporState>;

    beforeEach(() => {
      id = 'modalHeader';
      title = 'Title';

      store = TestUtils.buildStore();

      wrapper = mount(
        <Provider store={store}>
          <ModalHeaderConnected
            id={id}
            title={title}
          />
        </Provider>,
        { attachTo: document.getElementById('App') }
      );
      modalHeader = wrapper.find(ModalHeader).first();
    });

    afterEach(() => {
      store.dispatch(clearState());
      wrapper.unmount();
      wrapper.detach();
    });

    it('should get its id as a prop', () => {
      let idProp = modalHeader.props().id;

      expect(idProp).toBeDefined();
      expect(idProp).toBe(id);
    });

    it('should get its title as a prop', () => {
      let titleProp = modalHeader.props().title;

      expect(titleProp).toBeDefined();
      expect(titleProp).toBe(title);
    });

    it('should get what to do on close as a prop', () => {
      let onCloseProp = modalHeader.props().onClose;

      expect(onCloseProp).toBeDefined();
    });

    it('should close the modalHeader in the store when clicking on modalHeader x', () => {
      store.dispatch(addModal(id));
      expect(store.getState().modals.filter(modal => modal.id === id)[0].isOpened).toBe(false);
      store.dispatch(openModal(id));
      expect(store.getState().modals.filter(modal => modal.id === id)[0].isOpened).toBe(true);

      modalHeader.find('.small-close').simulate('click');
      expect(store.getState().modals.filter(modal => modal.id === id)[0].isOpened).toBe(false);
    });
  });
});
