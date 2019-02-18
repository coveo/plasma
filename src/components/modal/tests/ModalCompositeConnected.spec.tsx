import {ReactWrapper} from 'enzyme';
import {mountWithStore} from 'enzyme-redux';
import * as React from 'react';
import {Store} from 'redux';

import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {openModal} from '../ModalActions';
import {IModalCompositeProps, ModalComposite} from '../ModalComposite';
import {ModalCompositeConnected} from '../ModalCompositeConnected';
import {ModalHeaderConnected} from '../ModalHeaderConnected';

// tslint:disable-next-line:no-unused-variable
describe('<ModalCompositeConnected />', () => {
    const basicProps: IModalCompositeProps = {
        id: 'id',
        title: 'Some random title',
    };

    let wrapper: ReactWrapper<any, any>;
    let store: Store<IReactVaporState>;

    beforeEach(() => {
        store = TestUtils.buildStore();

        wrapper = mountWithStore(
            <ModalCompositeConnected {...basicProps} />,
            store,
        );
    });

    afterEach(() => {
        store.dispatch(clearState());
    });

    it('should get withReduxState set to true as a prop', () => {
        const withReduxStateProp = wrapper.find(ModalComposite).first().props().withReduxState;

        expect(withReduxStateProp).toBeDefined();
        expect(withReduxStateProp).toBe(true);
    });

    describe('when the modal is opened', () => {
        beforeEach(() => {
            store.dispatch(openModal(basicProps.id));
            wrapper.update();
        });

        it('should display a <ModalHeaderConnected /> component', () => {
            expect(wrapper.find(ModalHeaderConnected).length).toBe(1);
        });
    });
});
