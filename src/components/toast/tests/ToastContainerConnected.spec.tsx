// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { IReactVaporState } from '../../../ReactVapor';
import { TestUtils } from '../../../utils/TestUtils';
import { IToastContainerProps, ToastContainer } from '../ToastContainer';
import { Toast, ToastType } from '../Toast';
import { ToastContainerConnected } from '../ToastContainerConnected';
import { IToastState } from '../ToastReducers';
import { addToast } from '../ToastActions';

describe('Toasts', () => {
  describe('<ToastContainerConnected />', () => {
    let wrapper: ReactWrapper<any, any>;
    let component: ReactWrapper<IToastContainerProps, void>;
    let store: Store<IReactVaporState>;
    let toasts: IToastState[];
    const containerId = 'toast-container-id';

    beforeEach(() => {
      toasts = [
        { id: '1', title: 'toast success' },
        { id: '2', title: 'toast warning', type: ToastType.Warning },
        { id: '3', title: 'toast error', type: ToastType.Error },
      ];
      store = TestUtils.buildStore();

      wrapper = mount(
        <Provider store={store}>
          <ToastContainerConnected id={containerId} />
        </Provider>,
        { attachTo: document.getElementById('App') }
      );
      component = wrapper.find(ToastContainer);
    });

    afterEach(() => {
      wrapper.unmount();
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
      expect(component.find(Toast).length).toBe(0);

      store.dispatch(addToast(containerId, 'toast title', { type: ToastType.Error }));

      expect(component.props().toasts.length).toBe(1);
      expect(component.find(Toast).length).toBe(1);
    });

    it('should call onCloseToast when the user close a Toast', () => {
      store.dispatch(addToast(containerId, 'toast title'));

      const toast = component.find(Toast).first();
      toast.props().onClose();

      expect(component.props().toasts.length).toBe(0);
      expect(component.find(Toast).length).toBe(0);
    });
  });
});
