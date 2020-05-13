import {ShallowWrapper} from 'enzyme';
import {shallowWithState, shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import ReactModal from 'react-modal';

import {getStoreMock} from '../../../utils/tests/TestUtils';
import {addModal, closeModal, removeModal} from '../ModalActions';
import {IModalCompositeProps, ModalCompositeConnected} from '../ModalComposite';
import {ModalHeader} from '../ModalHeader';
import {ModalHeaderConnected} from '../ModalHeaderConnected';

// tslint:disable-next-line:no-unused-variable
describe('<ModalCompositeConnected />', () => {
    const basicProps: IModalCompositeProps = {
        id: 'modalo-mc-modal',
        title: 'Some random title',
    };

    it('should get withReduxState set to true as a prop', () => {
        const modalCompositeConnected = shallowWithStore(<ModalCompositeConnected {...basicProps} />, getStoreMock());

        expect(modalCompositeConnected.props().withReduxState).toBe(true);
    });

    it('should have isOpened prop to true if the modal is opened in the store', () => {
        const store = getStoreMock({
            modals: [
                {id: 'another-modal', isOpened: false},
                {id: basicProps.id, isOpened: true},
            ],
        });
        const modalCompositeConnected = shallowWithStore(<ModalCompositeConnected {...basicProps} />, store);

        expect(modalCompositeConnected.props().isOpened).toBe(true);
    });

    it('should have the layer prop set to the position of the current modal in opened modal stack + 1', () => {
        const store = getStoreMock({openModals: ['meeeeehhh-I-m-a-sheep', basicProps.id, 'mooooohhh-I-m-a-cow']});
        const modalCompositeConnected = shallowWithStore(<ModalCompositeConnected {...basicProps} />, store);

        expect(modalCompositeConnected.props().layer).toBe(2);
    });

    it('should dispatch an "ADD_MODAL" action when it mounts', () => {
        const store = getStoreMock();
        shallowWithStore(<ModalCompositeConnected {...basicProps} />, store).dive();

        expect(store.getActions()).toContain(addModal(basicProps.id));
    });

    it('should dispatch a "REMOVE_MODAL" action when it unmounts', () => {
        const store = getStoreMock();
        const modalCompositeConnected = shallowWithStore(<ModalCompositeConnected {...basicProps} />, store).dive();

        modalCompositeConnected.unmount();

        expect(store.getActions()).toContain(removeModal(basicProps.id));
    });

    it('should display a <ModalHeaderConnected /> component', () => {
        const store = getStoreMock();
        const modalCompositeConnected = shallowWithStore(<ModalCompositeConnected {...basicProps} />, store).dive();
        expect(modalCompositeConnected.find(ModalHeaderConnected).length).toBe(1);
    });

    it('should dispatch a close modal action when closing the modal', () => {
        const store = getStoreMock();
        const modalCompositeConnected: ShallowWrapper<ReactModal.Props> = shallowWithStore(
            <ModalCompositeConnected {...basicProps} isOpened />,
            store
        ).dive();

        modalCompositeConnected.props().onRequestClose(new MouseEvent('fakeevent') as any);

        expect(store.getActions()).toContain(closeModal(basicProps.id));
    });

    it('should not render a <ModalHeader /> or <ModalHeaderConnected /> if the title is not defined', () => {
        const modalCompositeConnected: ShallowWrapper<ReactModal.Props> = shallowWithState(
            <ModalCompositeConnected id="id" isOpened />,
            {}
        ).dive();

        expect(modalCompositeConnected.find(ModalHeaderConnected).length).toBe(0, 'has modalHeaderConnected');
        expect(modalCompositeConnected.find(ModalHeader).length).toBe(0, 'has modalHeader');
    });
});
