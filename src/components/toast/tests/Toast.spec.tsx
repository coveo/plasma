// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as _ from 'underscore';
import { mount, shallow, ReactWrapper } from 'enzyme';
import { IToastProps, Toast, ToastType } from '../Toast';


describe('Toasts', () => {
  let toastComponent: ReactWrapper<IToastProps, void>;
  let toastBasicAttributes: IToastProps;
  let toastInstance: Toast;

  describe('<Toast />', () => {
    it('should render without errors', () => {
      expect(() => shallow(<Toast title='Hello' />)).not.toThrow();
    });
  });

  describe('<Toast />', () => {
    beforeEach(() => {
      toastBasicAttributes = {
        title: 'some title',
      };

      toastComponent = mount(<Toast {...toastBasicAttributes} />, { attachTo: document.getElementById('App') });
      toastInstance = toastComponent.instance() as Toast;
    });

    afterEach(() => {
      toastComponent.unmount();
      toastComponent.detach();
    });

    it('should call prop onRender on mounting if set', () => {
      const renderSpy = jasmine.createSpy('onRender');
      const newToastAttributes = _.extend({}, toastBasicAttributes, { onRender: renderSpy });

      expect(() => toastInstance.componentWillMount()).not.toThrow();

      toastComponent.unmount();
      toastComponent.setProps(newToastAttributes);
      toastComponent.mount();
      expect(renderSpy.calls.count()).toBe(1);
    });

    it('should call prop onDestroy on unmounting if set', () => {
      let destroySpy = jasmine.createSpy('onDestroy');
      let newToastAttributes = _.extend({}, toastBasicAttributes, { onDestroy: destroySpy });

      expect(() => toastInstance.componentWillUnmount()).not.toThrow();

      toastComponent.unmount();
      toastComponent.setProps(newToastAttributes);
      toastComponent.mount();
      toastComponent.unmount();
      expect(destroySpy.calls.count()).toBe(1);
    });

    it('should have class "mod-success" when no type is defined or type is Success', () => {
      let expectedClass = '.mod-success';
      let newToastAttributes = _.extend({}, toastBasicAttributes, { type: ToastType.Success });

      expect(toastComponent.find(expectedClass).length).toBe(1);

      toastComponent.setProps(newToastAttributes);
      toastComponent.mount();
      expect(toastComponent.find(expectedClass).length).toBe(1);
    });

    it('should have class "mod-warning" if the type is Warning', () => {
      let expectedClass = '.mod-warning';
      let newToastAttributes = _.extend({}, toastBasicAttributes, { type: ToastType.Warning });

      expect(toastComponent.find(expectedClass).length).toBe(0);

      toastComponent.setProps(newToastAttributes);
      toastComponent.mount();
      expect(toastComponent.find(expectedClass).length).toBe(1);
    });

    it('should have class "mod-warning" if the type is Error', () => {
      let expectedClass = '.mod-error';
      let newToastAttributes = _.extend({}, toastBasicAttributes, { type: ToastType.Error });

      expect(toastComponent.find(expectedClass).length).toBe(0);

      toastComponent.setProps(newToastAttributes);
      toastComponent.mount();
      expect(toastComponent.find(expectedClass).length).toBe(1);
    });

    it('should have class "mod-animated" if the animate props is undefined or true', () => {
      let expectedClass = '.mod-animated';
      let newToastAttributes = _.extend({}, toastBasicAttributes, { animate: true });

      expect(toastComponent.find(expectedClass).length).toBe(1);

      toastComponent.setProps(newToastAttributes);
      toastComponent.mount();
      expect(toastComponent.find(expectedClass).length).toBe(1);

      newToastAttributes = _.extend({}, toastBasicAttributes, { animate: false });
      toastComponent.setProps(newToastAttributes);
      toastComponent.mount();
      expect(toastComponent.find(expectedClass).length).toBe(0);
    });

    it('should have a description when the content is set', () => {
      const descriptionContainer = '.toast-description';
      const expectedDescription = 'description';
      let newToastAttributes = _.extend({}, toastBasicAttributes, { content: expectedDescription });

      expect(toastComponent.find(descriptionContainer).length).toBe(0);

      toastComponent.setProps(newToastAttributes);
      toastComponent.mount();
      expect(toastComponent.find(descriptionContainer).length).toBe(1);
      expect(toastComponent.find(descriptionContainer).text()).toBe(expectedDescription);
    });

    it('should allow JSX in the content', () => {
      const descriptionContainer = '.toast-description';
      const expectedDescription = 'description';
      let newToastAttributes = _.extend({}, toastBasicAttributes, { content: () => <a href='#'>{expectedDescription}</a> });

      expect(toastComponent.find(descriptionContainer).length).toBe(0);

      toastComponent.setProps(newToastAttributes);
      toastComponent.mount();
      expect(toastComponent.find(descriptionContainer).length).toBe(1);
      expect(toastComponent.find(descriptionContainer).text()).toBe(expectedDescription);
    });

    it('should call onClose when the user clicks on .toast-close', () => {
      const closeSpy = jasmine.createSpy('onClose');
      const closeSelector = '.toast-close';
      let newToastAttributes = _.extend({}, toastBasicAttributes, { onClose: closeSpy });

      toastComponent.find(closeSelector).simulate('click');
      expect(closeSpy).toHaveBeenCalledTimes(0);

      toastComponent.setProps(newToastAttributes);
      toastComponent.mount();

      toastComponent.find(closeSelector).simulate('click');
      expect(closeSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('<Toast /> with a dismiss timer', () => {
    const onCloseToast = jasmine.createSpy('onClose');
    const dimissDelay = 2000;

    beforeEach(() => {
      toastBasicAttributes = {
        title: 'some title',
        dismiss: dimissDelay,
        onClose: onCloseToast,
      };

      onCloseToast.calls.reset();
      jasmine.clock().install();

      toastComponent = mount(<Toast {...toastBasicAttributes} />, { attachTo: document.getElementById('App') });
      toastInstance = toastComponent.instance() as Toast;
    });

    afterEach(() => {
      jasmine.clock().uninstall();

      toastComponent.unmount();
      toastComponent.detach();
    });

    it('should call onClose when the timer expires', () => {
      expect(onCloseToast).toHaveBeenCalledTimes(0);

      jasmine.clock().tick(dimissDelay + 1);
      expect(onCloseToast).toHaveBeenCalledTimes(1);

      jasmine.clock().tick(dimissDelay + 1);
      expect(onCloseToast).toHaveBeenCalledTimes(1);
    });

    it('should clear the timeout on mouseenter', () => {
      expect(onCloseToast).toHaveBeenCalledTimes(0);

      expect(toastComponent.hasClass('toast')).toBe(true);
      toastComponent.simulate('mouseEnter');
      jasmine.clock().tick(dimissDelay + 1);

      expect(onCloseToast).toHaveBeenCalledTimes(0);
    });

    it('should reset the timeout on mouseleave', () => {
      expect(onCloseToast).toHaveBeenCalledTimes(0);

      toastComponent.simulate('mouseEnter');
      jasmine.clock().tick(dimissDelay + 1);

      expect(onCloseToast).toHaveBeenCalledTimes(0);

      toastComponent.simulate('mouseLeave');
      jasmine.clock().tick(dimissDelay + 1);

      expect(onCloseToast).toHaveBeenCalledTimes(1);
    });

    it('should not dismiss the toast if the dismiss is set to 0', () => {
      let newToastAttributes = _.extend({}, toastBasicAttributes, { dismiss: 0 });
      toastComponent.setProps(newToastAttributes);
      toastComponent.mount();

      expect(onCloseToast).toHaveBeenCalledTimes(0);

      toastComponent.simulate('mouseEnter');
      jasmine.clock().tick(dimissDelay + 1);

      expect(onCloseToast).toHaveBeenCalledTimes(0);

      toastComponent.simulate('mouseLeave');
      jasmine.clock().tick(dimissDelay + 1);

      expect(onCloseToast).toHaveBeenCalledTimes(0);
    });
  });
});
