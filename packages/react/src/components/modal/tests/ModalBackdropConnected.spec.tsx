import {mount, ReactWrapper} from 'enzyme';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {PlasmaState} from '../../../PlasmaState';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/tests/TestUtils';
import {addModal, openModal} from '../ModalActions';
import {IModalBackdropProps, ModalBackdrop} from '../ModalBackdrop';
import {ModalBackdropConnected} from '../ModalBackdropConnected';

describe('ModalBackdrop', () => {
    let modalBackdrop: ReactWrapper<IModalBackdropProps, any>;
    let wrapper: ReactWrapper<any, any>;
    let store: Store<PlasmaState>;
    let modal1Id: string;

    beforeEach(() => {
        modal1Id = 'modal1';

        store = TestUtils.buildStore();
        store.dispatch(addModal(modal1Id));

        wrapper = mount(
            <Provider store={store}>
                <ModalBackdropConnected />
            </Provider>,
            {attachTo: document.getElementById('App')},
        );
        modalBackdrop = wrapper.find(ModalBackdrop).first();
    });

    afterEach(() => {
        store.dispatch(clearState());
        wrapper?.unmount();
    });

    it('should get display false as a prop', () => {
        const displayProp = modalBackdrop.props().display;

        expect(displayProp).toBeDefined();
        expect(displayProp).toBe(false);
    });

    it('should get display true as a prop when modal is opened', () => {
        store.dispatch(openModal(modal1Id));
        wrapper.update();

        expect(wrapper.find(ModalBackdrop).props().display).toBe(true);
    });
});

describe('<ModalBackdropConnected /> with displayFor', () => {
    let modalBackdrop: ReactWrapper<IModalBackdropProps, any>;
    let wrapper: ReactWrapper<any, any>;
    let store: Store<PlasmaState>;
    let modal1Id: string;
    let modal2Id: string;

    beforeEach(() => {
        modal1Id = 'modal1';
        modal2Id = 'modal2';

        store = TestUtils.buildStore();
        store.dispatch(addModal(modal1Id));
        store.dispatch(addModal(modal2Id));

        wrapper = mount(
            <Provider store={store}>
                <ModalBackdropConnected displayFor={[modal1Id]} />
            </Provider>,
            {attachTo: document.getElementById('App')},
        );
        modalBackdrop = wrapper.find(ModalBackdrop).first();
    });

    afterEach(() => {
        store.dispatch(clearState());
        wrapper?.unmount();
    });

    it('should get display false as a prop', () => {
        const displayProp = modalBackdrop.props().display;

        expect(displayProp).toBeDefined();
        expect(displayProp).toBe(false);
    });

    it('should get display true as a prop when modal hidden for is opened', () => {
        store.dispatch(openModal(modal1Id));
        wrapper.update();

        expect(store.getState().modals.filter((modal) => modal.id === modal1Id)[0].isOpened).toBe(true);

        expect(wrapper.find(ModalBackdrop).props().display).toBe(true);
    });

    it('should get display false as a prop when modal not hidden for is opened', () => {
        store.dispatch(openModal(modal2Id));
        wrapper.update();

        expect(store.getState().modals.filter((modal) => modal.id === modal1Id)[0].isOpened).toBe(false);
        expect(store.getState().modals.filter((modal) => modal.id === modal2Id)[0].isOpened).toBe(true);

        expect(wrapper.find(ModalBackdrop).props().display).toBe(false);
    });

    it('should call onClick when clicked', () => {
        store.dispatch(openModal(modal1Id));

        expect(store.getState().modals.filter((modal) => modal.id === modal1Id && modal.isOpened).length).toBe(1);

        modalBackdrop.simulate('click');

        expect(store.getState().modals.filter((modal) => modal.id === modal1Id && modal.isOpened).length).toBe(0);
    });
});
