// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as _ from 'underscore';
import { mount, ReactWrapper, shallow } from 'enzyme';
import { IToastContainerProps, ToastContainer } from '../ToastContainer';
import { Toast } from '../Toast';

describe('Toasts', () => {
  let component: ReactWrapper<IToastContainerProps, void>;
  let basicProps: IToastContainerProps;
  let instance: ToastContainer;

  describe('<ToastContainer />', () => {
    it('should render without errors', () => {
      expect(() => shallow(<ToastContainer />)).not.toThrow();
    });

    it('should render without errors with children', () => {
      expect(() => shallow(<ToastContainer><a href='#'>Hello</a></ToastContainer>)).not.toThrow();
      expect(() => shallow(<ToastContainer><Toast title='test' /></ToastContainer>)).not.toThrow();
    });
  });

  describe('<ToastContainer />', () => {
    beforeEach(() => {
      basicProps = {};
      component = mount(<ToastContainer {...basicProps} />, { attachTo: document.getElementById('App') });
      instance = component.instance() as ToastContainer;
    });

    afterEach(() => {
      component.unmount();
      component.detach();
    });

    it('should call prop onRender on mounting if set', () => {
      const renderSpy = jasmine.createSpy('onRender');
      const newToastAttributes = _.extend({}, basicProps, { onRender: renderSpy });

      expect(() => instance.componentWillMount()).not.toThrow();

      component.unmount();
      component.setProps(newToastAttributes);
      component.mount();
      expect(renderSpy.calls.count()).toBe(1);
    });

    it('should call prop onDestroy on unmounting if set', () => {
      let destroySpy = jasmine.createSpy('onDestroy');
      let newToastAttributes = _.extend({}, basicProps, { onDestroy: destroySpy });

      expect(() => instance.componentWillUnmount()).not.toThrow();

      component.unmount();
      component.setProps(newToastAttributes);
      component.mount();
      component.unmount();
      expect(destroySpy.calls.count()).toBe(1);
    });

    it('should be possible to pass toasts in props', () => {
      let newToastAttributes = _.extend({}, basicProps, { toasts: [{ id: 'toast-id', title: 'some toast title' }] });

      component.setProps(newToastAttributes);

      expect(() => component.mount()).not.toThrow();
      expect(component.find(Toast).length).toBe(1);
    });

    it('should be call prop onCloseToast when a toast is closed', () => {
      const onCloseToast = jasmine.createSpy('onCloseToast');
      let newToastAttributes = _.extend({}, basicProps, { toasts: [{ id: 'toast-id', title: 'some toast title' }] });

      component.setProps(newToastAttributes);
      component.mount();

      component.find(Toast).props().onClose();
      expect(onCloseToast).toHaveBeenCalledTimes(0);

      newToastAttributes = _.extend({}, newToastAttributes, { onCloseToast });
      component.setProps(newToastAttributes);
      component.mount();

      component.find(Toast).props().onClose();
      expect(onCloseToast).toHaveBeenCalledTimes(1);
      expect(onCloseToast).toHaveBeenCalledWith(newToastAttributes.toasts[0].id);
    });
  });
});
