// tslint:disable-next-line:no-unused-variable
import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import {IReactVaporState} from '../../../ReactVapor';
import {TestUtils} from '../../../utils/TestUtils';
import {Toast, ToastType} from '../Toast';
import {addToast} from '../ToastActions';
import {IToastContainerProps, ToastContainer} from '../ToastContainer';
import {ToastContainerConnected} from '../ToastContainerConnected';

describe('Toasts', () => {
    describe('<ToastContainerConnected />', () => {
        let wrapper: ReactWrapper<any, any>;
        let component: ReactWrapper<IToastContainerProps, void>;
        let store: Store<IReactVaporState>;
        const containerId = 'toast-container-id';

        beforeEach(() => {
            store = TestUtils.buildStore();

            wrapper = mount(
                <Provider store={store}>
                    <ToastContainerConnected id={containerId} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            component = wrapper.find(ToastContainer).first();
        });

        afterEach(() => {
            wrapper.detach();
        });

        it('should get the toasts as a prop', () => {
            const toastsProp = component.props().toasts;
            expect(toastsProp).toBeDefined();
        });

        it('should get onRender as a prop', () => {
            const onRenderProp = component.props().onRender;
            expect(onRenderProp).toBeDefined();
        });

        it('should get onDestroy as a prop', () => {
            const onDestroyProp = component.props().onDestroy;
            expect(onDestroyProp).toBeDefined();
        });

        it('should get onCloseToast as a prop', () => {
            const onCloseToastProp = component.props().onCloseToast;
            expect(onCloseToastProp).toBeDefined();
        });

        it('should contain Toasts when a addToast is dispatched', () => {
            expect(component.props().toasts.length).toBe(0);
            expect(wrapper.find(Toast).length).toBe(0);

            store.dispatch(addToast(containerId, 'toast title', {type: ToastType.Error}));
            wrapper.update();

            expect(wrapper.find(ToastContainer).props().toasts.length).toBe(1);
            expect(wrapper.find(Toast).length).toBe(1);
        });

        it('should call onCloseToast when the user close a Toast', () => {
            store.dispatch(addToast(containerId, 'toast title'));
            wrapper.update();

            const toast = wrapper.find(Toast).first();
            toast.props().onClose();

            expect(component.props().toasts.length).toBe(0);
            expect(component.find(Toast).length).toBe(0);
        });
    });
});
