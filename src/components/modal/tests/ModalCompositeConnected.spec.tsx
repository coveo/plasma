import {ShallowWrapper} from 'enzyme';
import {shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import {createMockStore, mockStore} from 'redux-test-utils';

import {IReactVaporState} from '../../../ReactVapor';
import {addModal, closeModal, removeModal} from '../ModalActions';
import {IModalCompositeProps} from '../ModalComposite';
import {ModalCompositeConnected} from '../ModalCompositeConnected';
import {ModalHeaderConnected} from '../ModalHeaderConnected';

// tslint:disable-next-line:no-unused-variable
describe('<ModalCompositeConnected />', () => {
    const basicProps: IModalCompositeProps = {
        id: 'modalo-mc-modal',
        title: 'Some random title',
    };

    let mockstore: mockStore<IReactVaporState>;

    beforeEach(() => {
        mockstore = createMockStore();
    });

    it('should get withReduxState set to true as a prop', () => {
        const modalCompositeConnected = shallowWithStore(<ModalCompositeConnected {...basicProps} />, mockstore);

        expect(modalCompositeConnected.props().withReduxState).toBe(true);
    });

    it('should have isOpened prop to true if the modal is opened in the store', () => {
        mockstore = createMockStore({modals: [{id: 'another-modal', isOpened: false}, {id: basicProps.id, isOpened: true}]});
        const modalCompositeConnected = shallowWithStore(<ModalCompositeConnected {...basicProps} />, mockstore);

        expect(modalCompositeConnected.props().isOpened).toBe(true);
    });

    it('should dispatch an "ADD_MODAL" action when it mounts', () => {
        shallowWithStore(<ModalCompositeConnected {...basicProps} />, mockstore).dive();

        expect(mockstore.isActionDispatched(addModal(basicProps.id))).toBe(true);
    });

    it('should dispatch a "REMOVE_MODAL" action when it unmounts', () => {
        const modalCompositeConnected = shallowWithStore(<ModalCompositeConnected {...basicProps} />, mockstore).dive();

        modalCompositeConnected.unmount();

        expect(mockstore.isActionDispatched(removeModal(basicProps.id))).toBe(true);
    });

    it('should display a <ModalHeaderConnected /> component', () => {
        const modalCompositeConnected = shallowWithStore(<ModalCompositeConnected {...basicProps} />, mockstore).dive();
        expect(modalCompositeConnected.find(ModalHeaderConnected).length).toBe(1);
    });

    it('should dispatch a close modal action when closing the modal', () => {
        const modalCompositeConnected: ShallowWrapper<ReactModal.Props> = shallowWithStore(<ModalCompositeConnected {...basicProps} isOpened />, mockstore).dive();

        modalCompositeConnected.props().onRequestClose(new MouseEvent('fakeEvent'));

        expect(mockstore.isActionDispatched(closeModal(basicProps.id))).toBe(true);
    });
});
