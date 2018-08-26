import {mount, ReactWrapper} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {IModalProps, Modal} from '../Modal';
import {closeModal, openModal} from '../ModalActions';
import {ModalConnected} from '../ModalConnected';

describe('Modal', () => {
    describe('<ModalConnected />', () => {
        let modal: ReactWrapper<IModalProps, any>;
        let id: string;
        let wrapper: ReactWrapper<any, any>;
        let store: Store<IReactVaporState>;

        beforeEach(() => {
            id = 'modal';

            store = TestUtils.buildStore();

            wrapper = mount(
                <Provider store={store}>
                    <ModalConnected
                        id={id}
                    />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            modal = wrapper.find(Modal).first();
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper.unmount();
            wrapper.detach();
        });

        it('should get its id as a prop', () => {
            const idProp = modal.props().id;

            expect(idProp).toBeDefined();
            expect(idProp).toBe(id);
        });

        it('should get isOpened false as a prop', () => {
            const isOpened = modal.props().isOpened;

            expect(isOpened).toBeDefined();
            expect(isOpened).toBe(false);
        });

        it('should get what to do on render as a prop', () => {
            const onRenderProp = modal.props().onRender;

            expect(onRenderProp).toBeDefined();
        });

        it('should get what to do on destroy as a prop', () => {
            const onDestroyProp = modal.props().onDestroy;

            expect(onDestroyProp).toBeDefined();
        });

        it('should add the modal not opened by default in the store on render', () => {
            const modalInState = store.getState().modals.filter((currentModal) => currentModal.id === id);
            expect(modalInState.length).toBe(1);
            expect(modalInState[0].isOpened).toBe(false);
        });

        it('should add the modal opened in the store on render if openOnMount is passed as prop', () => {
            mount(
                <Provider store={store}>
                    <ModalConnected
                        id={id}
                        openOnMount
                    />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );

            const modalInState = store.getState().modals.filter((currentModal) => currentModal.id === id);
            expect(modalInState.length).toBe(1);
            expect(modalInState[0].isOpened).toBe(true);
        });

        it('should open the modal in the store when dispatching a "openModal" action', () => {
            expect(store.getState().modals.filter((currentModal) => currentModal.id === id).length).toBe(1);
            expect(store.getState().modals.filter((currentModal) => currentModal.id === id)[0].isOpened).toBe(false);

            store.dispatch(openModal(id));
            expect(store.getState().modals.filter((currentModal) => currentModal.id === id)[0].isOpened).toBe(true);
        });

        it('should close the modal in the store when dispatching a "closeModal" action', () => {
            expect(store.getState().modals.filter((currentModal) => currentModal.id === id)[0].isOpened).toBe(false);
            store.dispatch(openModal(id));
            expect(store.getState().modals.filter((currentModal) => currentModal.id === id)[0].isOpened).toBe(true);

            store.dispatch(closeModal(id));
            expect(store.getState().modals.filter((currentModal) => currentModal.id === id)[0].isOpened).toBe(false);
        });

        it('should remove the modal in the store on destroy', () => {
            wrapper.unmount();
            expect(store.getState().modals.filter((currentModal) => currentModal.id === id).length).toBe(0);
        });
    });
});
