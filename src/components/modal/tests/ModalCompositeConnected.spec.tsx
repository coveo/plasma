import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {ModalBackdropConnected} from '../ModalBackdropConnected';
import {IModalCompositeProps, ModalComposite} from '../ModalComposite';
import {ModalCompositeConnected} from '../ModalCompositeConnected';
import {ModalConnected} from '../ModalConnected';
import {ModalHeaderConnected} from '../ModalHeaderConnected';

// tslint:disable-next-line:no-unused-variable
describe('<ModalCompositeConnected />', () => {
    const basicProps: IModalCompositeProps = {
        id: 'id',
        title: 'Some random title',
    };

    let modalComposite: ReactWrapper<IModalCompositeProps, any>;
    let wrapper: ReactWrapper<any, any>;
    let store: Store<IReactVaporState>;

    beforeEach(() => {

        store = TestUtils.buildStore();

        wrapper = mount(
            <Provider store={store}>
                <ModalCompositeConnected {...basicProps} />
            </Provider>,
            {attachTo: document.getElementById('App')},
        );
        modalComposite = wrapper.find(ModalComposite).first();
    });

    afterEach(() => {
        store.dispatch(clearState());
        wrapper.detach();
    });

    it('should get withReduxState set to true as a prop', () => {
        const withReduxStateProp = modalComposite.props().withReduxState;

        expect(withReduxStateProp).toBeDefined();
        expect(withReduxStateProp).toBe(true);
    });

    it('should display a <ModalConnected /> component', () => {
        expect(modalComposite.find(ModalConnected).length).toBe(1);
    });

    it('should display a <ModalHeaderConnected /> component', () => {
        expect(modalComposite.find(ModalHeaderConnected).length).toBe(1);
    });

    it('should display a <ModalBackdropConnected /> component', () => {
        expect(modalComposite.find(ModalBackdropConnected).length).toBe(1);
    });
});
