// tslint:disable-next-line:no-unused-variable
import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';

import {IToastProps, Toast, ToastType} from '../Toast';

fdescribe('Toasts', () => {
    let toastComponent: ReactWrapper<IToastProps, {}>;
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

            toastComponent = mount(<Toast {...toastBasicAttributes} />, {attachTo: document.getElementById('App')});
            toastInstance = toastComponent.instance() as Toast;
        });

        afterEach(() => {
            toastComponent.detach();
        });

        it('should call prop onRender on mounting if set', () => {
            const renderSpy = jasmine.createSpy('onRender');
            const newToastAttributes = _.extend({}, toastBasicAttributes, {onRender: renderSpy});

            expect(() => toastInstance.componentWillMount()).not.toThrow();

            toastComponent.unmount();
            toastComponent.setProps(newToastAttributes).mount();

            expect(renderSpy).toHaveBeenCalledTimes(1);
        });

        it('should call prop onDestroy on unmounting if set', () => {
            const destroySpy = jasmine.createSpy('onDestroy');
            const newToastAttributes = _.extend({}, toastBasicAttributes, {onDestroy: destroySpy});

            expect(() => toastInstance.componentWillUnmount()).not.toThrow();

            toastComponent.setProps(newToastAttributes).mount();

            toastComponent.unmount();
            expect(destroySpy).toHaveBeenCalledTimes(1);
        });

        it('should have class "mod-success" when type is Success', () => {
            toastComponent.setProps({type: ToastType.Success});

            expect(toastComponent.children().hasClass('mod-success')).toBe(true);
        });

        it('should have class "mod-warning" if the type is Warning', () => {
            const expectedClass = '.mod-warning';
            const newToastAttributes = _.extend({}, toastBasicAttributes, {type: ToastType.Warning});

            expect(toastComponent.find(expectedClass).length).toBe(0);

            toastComponent.setProps(newToastAttributes).mount();

            expect(toastComponent.find(expectedClass).length).toBe(1);
        });

        it('should have class "mod-warning" if the type is Error', () => {
            const expectedClass = '.mod-error';
            const newToastAttributes = _.extend({}, toastBasicAttributes, {type: ToastType.Error});

            expect(toastComponent.find(expectedClass).length).toBe(0);

            toastComponent.setProps(newToastAttributes).mount();

            expect(toastComponent.find(expectedClass).length).toBe(1);
        });

        it('should have class "mod-animated" if the animate props is undefined or true', () => {
            const expectedClass = '.mod-animated';
            let newToastAttributes = _.extend({}, toastBasicAttributes, {animate: true});

            expect(toastComponent.find(expectedClass).length).toBe(1);

            toastComponent.setProps(newToastAttributes).mount();

            expect(toastComponent.find(expectedClass).length).toBe(1);

            newToastAttributes = _.extend({}, toastBasicAttributes, {animate: false});
            toastComponent.setProps(newToastAttributes).mount();

            expect(toastComponent.find(expectedClass).length).toBe(0);
        });

        it('should have any class specified in the className prop', () => {
            const expectedClass = 'my-awesome-class';

            toastComponent.setProps({className: expectedClass});

            expect(toastComponent.hasClass(expectedClass));
        });

        it('should have a description when the content is set', () => {
            const descriptionContainer = '.toast-description';
            const expectedDescription = 'description';
            const newToastAttributes = _.extend({}, toastBasicAttributes, {content: expectedDescription});

            expect(toastComponent.find(descriptionContainer).length).toBe(0);

            toastComponent.setProps(newToastAttributes).mount();

            expect(toastComponent.find(descriptionContainer).length).toBe(1);
            expect(toastComponent.find(descriptionContainer).text()).toBe(expectedDescription);
        });

        it('should allow JSX in the content', () => {
            const descriptionContainer = '.toast-description';
            const expectedDescription = 'description';
            const newToastAttributes = _.extend({}, toastBasicAttributes, {content: <a href='#'>{expectedDescription}</a>});

            expect(toastComponent.find(descriptionContainer).length).toBe(0);

            toastComponent.setProps(newToastAttributes).mount();

            expect(toastComponent.find(descriptionContainer).length).toBe(1);
            expect(toastComponent.find(descriptionContainer).text()).toBe(expectedDescription);
        });

        it('should render the children node inside the toast', () => {
            const descriptionContainer = '.toast-description';
            const expectedChildren = <div>my toast content</div>;

            toastComponent = mount(
                <Toast {...toastBasicAttributes}>
                    {expectedChildren}
                </Toast>,
                {attachTo: document.getElementById('App')},
            );

            expect(toastComponent.find(descriptionContainer).length).toBe(1);
            expect(toastComponent.find(descriptionContainer).children().equals(expectedChildren)).toBe(true);
        });

        it('should contain a toast-close when the prop is undefined or true', () => {
            const closeSelector = '.toast-close';

            // By default dismisslbe is omitted
            expect(toastComponent.find(closeSelector).length).toBe(1);

            const newToastAttributes = _.extend({}, toastBasicAttributes, {dismissible: true});
            toastComponent.setProps(newToastAttributes).mount();

            expect(toastComponent.find(closeSelector).length).toBe(1);
        });

        it('should call onClose when the user clicks on .toast-close', () => {
            const closeSelector = '.toast-close';
            const newToastAttributes = _.extend({}, toastBasicAttributes, {onClose: jasmine.createSpy('onClose')});

            toastComponent.find(closeSelector).simulate('click');
            expect(newToastAttributes.onClose).not.toHaveBeenCalled();

            toastComponent.setProps(newToastAttributes).mount();

            toastComponent.find(closeSelector).simulate('click');
            expect(newToastAttributes.onClose).toHaveBeenCalledTimes(1);
        });

        it('should not contain a toast-close when the toast is not dismissible', () => {
            const closeSelector = '.toast-close';
            const newToastAttributes = _.extend({}, toastBasicAttributes, {dismissible: false});

            toastComponent.setProps(newToastAttributes).mount();
            expect(toastComponent.find(closeSelector).length).toBe(0);
        });
    });

    describe('<Toast /> with a dismiss timer', () => {
        const onCloseToast = jasmine.createSpy('onClose');
        const dismissDelay = 2000;

        beforeEach(() => {
            toastBasicAttributes = {
                title: 'some title',
                // Subtract 1 so the jasmine.tick work as expected
                dismiss: dismissDelay - 1,
                onClose: onCloseToast,
            };

            onCloseToast.calls.reset();
            jasmine.clock().install();

            toastComponent = mount(<Toast {...toastBasicAttributes} />, {attachTo: document.getElementById('App')});
            toastInstance = toastComponent.instance() as Toast;
        });

        afterEach(() => {
            jasmine.clock().uninstall();
            toastComponent.detach();
        });

        it('should call onClose when the timer expires', () => {
            expect(onCloseToast).not.toHaveBeenCalled();

            jasmine.clock().tick(dismissDelay);
            expect(onCloseToast).toHaveBeenCalledTimes(1);

            jasmine.clock().tick(dismissDelay);
            expect(onCloseToast).toHaveBeenCalledTimes(1);
        });

        it('should not call onClose when the toast is not dimissible even if the timer expires', () => {
            // Needed to clear the timeout since we mounted it in the beforeEach
            toastComponent.simulate('mouseEnter');

            const newToastAttributes = _.extend({}, toastBasicAttributes, {dismissible: false});
            toastComponent.setProps(newToastAttributes).mount();
            toastComponent.simulate('mouseLeave');

            expect(onCloseToast).not.toHaveBeenCalled();

            jasmine.clock().tick(dismissDelay);
            expect(onCloseToast).not.toHaveBeenCalled();
        });

        it('should clear the timeout on mouseenter', () => {
            expect(onCloseToast).not.toHaveBeenCalled();

            expect(toastComponent.find('.toast').length).toBe(1);
            toastComponent.find('.toast').simulate('mouseEnter');
            jasmine.clock().tick(dismissDelay);

            expect(onCloseToast).not.toHaveBeenCalled();
        });

        it('should reset the timeout on mouseleave', () => {
            expect(onCloseToast).not.toHaveBeenCalled();

            toastComponent.simulate('mouseEnter');
            jasmine.clock().tick(dismissDelay);

            expect(onCloseToast).not.toHaveBeenCalled();

            toastComponent.simulate('mouseLeave');
            jasmine.clock().tick(dismissDelay);

            expect(onCloseToast).toHaveBeenCalledTimes(1);
        });

        it('should not dismiss the toast if the dismiss is set to 0', () => {
            const newToastAttributes = _.extend({}, toastBasicAttributes, {dismiss: 0});
            toastComponent.setProps(newToastAttributes).mount();

            expect(onCloseToast).not.toHaveBeenCalled();

            toastComponent.simulate('mouseEnter');
            jasmine.clock().tick(dismissDelay);

            expect(onCloseToast).not.toHaveBeenCalled();

            toastComponent.simulate('mouseLeave');
            jasmine.clock().tick(dismissDelay);

            expect(onCloseToast).not.toHaveBeenCalled();
        });
    });
});
