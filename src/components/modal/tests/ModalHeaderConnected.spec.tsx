import {mount, ReactWrapper} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {addModal, openModal} from '../ModalActions';
import {IModalHeaderProps, ModalHeader} from '../ModalHeader';
import {ModalHeaderConnected} from '../ModalHeaderConnected';
import {IModalState} from '../ModalReducers';

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
                        lastOpened
                    />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            modalHeader = wrapper.find(ModalHeader).first();
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper.detach();
        });

        it('should get its id as a prop', () => {
            const idProp = modalHeader.props().id;

            expect(idProp).toBeDefined();
            expect(idProp).toBe(id);
        });

        it('should get its title as a prop', () => {
            const titleProp = modalHeader.props().title;

            expect(titleProp).toBeDefined();
            expect(titleProp).toBe(title);
        });

        it('should get what to do on close as a prop', () => {
            const onCloseProp = modalHeader.props().onClose;

            expect(onCloseProp).toBeDefined();
        });

        it('should close the modalHeader in the store when clicking on modalHeader x', () => {
            store.dispatch(addModal(id));
            expect(_.findWhere(store.getState().modals, ((modal: IModalState) => modal.id === id)).isOpened).toBe(false);
            store.dispatch(openModal(id));
            expect(_.findWhere(store.getState().modals, ((modal: IModalState) => modal.id === id)).isOpened).toBe(true);

            modalHeader.find('.small-close').simulate('click');
            expect(_.findWhere(store.getState().modals, ((modal: IModalState) => modal.id === id)).isOpened).toBe(false);
        });
    });
});
