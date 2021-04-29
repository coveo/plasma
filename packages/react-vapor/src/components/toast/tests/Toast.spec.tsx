import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';

import {IToastProps, Toast, ToastType} from '../Toast';

describe('Toasts', () => {
    let toastComponent: ReactWrapper<IToastProps>;
    let toastBasicAttributes: IToastProps;
    let toastInstance: Toast;

    it('should render without errors', () => {
        expect(() => shallow(<Toast title="Hello" />)).not.toThrow();
    });

    describe('<Toast />', () => {
        beforeEach(() => {
            toastBasicAttributes = {
                title: 'some title',
            };

            toastComponent = mount(<Toast {...toastBasicAttributes} />, {attachTo: document.getElementById('App')});
            toastInstance = toastComponent.instance() as Toast;
        });

        it('should call prop onRender on mounting if set', () => {
            const renderSpy = jest.fn();
            const newToastAttributes = _.extend({}, toastBasicAttributes, {onRender: renderSpy});

            toastComponent.unmount();
            toastComponent.setProps(newToastAttributes).mount();

            expect(renderSpy).toHaveBeenCalledTimes(1);
        });

        it('should call prop onDestroy on unmounting if set', () => {
            const destroySpy = jest.fn();
            const newToastAttributes = _.extend({}, toastBasicAttributes, {onDestroy: destroySpy});

            expect(() => toastInstance.componentWillUnmount()).not.toThrow();

            toastComponent.setProps(newToastAttributes).mount();

            toastComponent.unmount();

            expect(destroySpy).toHaveBeenCalledTimes(1);
        });

        it('should have class "mod-small" when isSmall propr is true', () => {
            toastComponent.setProps({isSmall: true});

            expect(toastComponent.children().hasClass('mod-small')).toBe(true);
        });

        it('should have class "mod-info" when type is Info', () => {
            toastComponent.setProps({type: ToastType.Info});

            expect(toastComponent.children().hasClass('mod-info')).toBe(true);
        });

        it('should have class "mod-success" when type is Success', () => {
            toastComponent.setProps({type: ToastType.Success});

            expect(toastComponent.children().hasClass('mod-success')).toBe(true);
        });

        it('should have class "mod-success" when both type and className props are empty', () => {
            expect(toastComponent.children().hasClass('mod-success')).toBe(true);
        });

        it('should have class "mod-warning" if the type is Warning', () => {
            toastComponent.setProps({type: ToastType.Warning});

            expect(toastComponent.children().hasClass('mod-warning')).toBe(true);
        });

        it('should have class "mod-error" if the type is Error', () => {
            toastComponent.setProps({type: ToastType.Error});

            expect(toastComponent.children().hasClass('mod-error')).toBe(true);
        });

        it('should not have class "mod-animated" if the animate props is false', () => {
            toastComponent.setProps({animate: false});

            expect(toastComponent.children().hasClass('mod-animated')).toBe(false);
        });

        it('should have class "mod-animated" if the animate props is true', () => {
            toastComponent.setProps({animate: true});

            expect(toastComponent.children().hasClass('mod-animated')).toBe(true);
        });

        it('should have class "mod-animated" if the animate props is undefined', () => {
            expect(toastComponent.children().hasClass('mod-animated')).toBe(true);
        });

        it('should have any class specified in the className prop', () => {
            const expectedClass = 'my-awesome-class';

            toastComponent.setProps({className: expectedClass});

            expect(toastComponent.hasClass(expectedClass)).toBe(true);
        });

        it('should have a description when the content is set and isSmall is false', () => {
            const descriptionContainer = '.toast-description';
            const expectedDescription = 'description';
            const newToastAttributes = _.extend({}, toastBasicAttributes, {
                isSmall: false,
                content: expectedDescription,
            });

            toastComponent.setProps(newToastAttributes).mount();

            expect(toastComponent.find(descriptionContainer).length).toBe(1);
            expect(toastComponent.find(descriptionContainer).text()).toBe(expectedDescription);
        });

        it('should not have a description when isSmall is true even if content is set', () => {
            const descriptionContainer = '.toast-description';
            const expectedDescription = 'description';
            const newToastAttributes = _.extend({}, toastBasicAttributes, {
                isSmall: true,
                content: expectedDescription,
            });

            toastComponent.setProps(newToastAttributes).mount();

            expect(toastComponent.find(descriptionContainer).length).toBe(0);
        });

        it('should allow JSX in the content', () => {
            const descriptionContainer = '.toast-description';
            const expectedDescription = 'description';
            const newToastAttributes = _.extend({}, toastBasicAttributes, {
                content: () => <a href="#">{expectedDescription}</a>,
            });

            expect(toastComponent.find(descriptionContainer).length).toBe(0);

            toastComponent.setProps(newToastAttributes).mount();

            expect(toastComponent.find(descriptionContainer).length).toBe(1);
            expect(toastComponent.find(descriptionContainer).text()).toBe(expectedDescription);
        });

        it('should render the children node inside the toast', () => {
            const descriptionContainer = '.toast-description';
            const expectedChildren = <div>my toast content</div>;

            toastComponent = mount(<Toast {...toastBasicAttributes}>{expectedChildren}</Toast>, {
                attachTo: document.getElementById('App'),
            });

            expect(toastComponent.find(descriptionContainer).length).toBe(1);
            expect(toastComponent.find(descriptionContainer).children().equals(expectedChildren)).toBe(true);
        });

        it('should contain a toast-close when the prop is undefined or true and isSmall is false', () => {
            const closeSelector = '.toast-close';

            // By default dismisslbe is omitted
            expect(toastComponent.find(closeSelector).length).toBe(1);

            const newToastAttributes = _.extend({}, toastBasicAttributes, {isSmall: false, dismissible: true});
            toastComponent.setProps(newToastAttributes).mount();

            expect(toastComponent.find(closeSelector).length).toBe(1);
        });

        it('should not contain a toast-close when isSmall is true', () => {
            const closeSelector = '.toast-close';
            const newToastAttributes = _.extend({}, toastBasicAttributes, {isSmall: true, dismissible: true});
            toastComponent.setProps(newToastAttributes).mount();

            expect(toastComponent.find(closeSelector).length).toBe(0);
        });

        it('should call onClose when the user clicks on .toast-close', () => {
            const closeSelector = '.toast-close';
            const newToastAttributes = _.extend({}, toastBasicAttributes, {onClose: jest.fn()});

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
        const dismissDelay = 2000;
        let onCloseToast: jest.Mock<any, any>;

        beforeEach(() => {
            onCloseToast = jest.fn();
            toastBasicAttributes = {
                title: 'some title',
                // Subtract 1 so the jasmine.tick work as expected
                dismiss: dismissDelay - 1,
                onClose: onCloseToast,
            };

            onCloseToast.mockReset();
            jest.useFakeTimers();

            toastComponent = mount(<Toast {...toastBasicAttributes} />, {attachTo: document.getElementById('App')});
            toastInstance = toastComponent.instance() as Toast;
        });

        afterEach(() => {
            jest.clearAllTimers();
            toastComponent?.unmount();
            onCloseToast.mockReset();
        });

        it('should call onClose when the timer expires', () => {
            expect(onCloseToast).not.toHaveBeenCalled();

            jest.advanceTimersByTime(dismissDelay);

            expect(onCloseToast).toHaveBeenCalledTimes(1);

            jest.advanceTimersByTime(dismissDelay);

            expect(onCloseToast).toHaveBeenCalledTimes(1);
        });

        it('should not call onClose when the toast is not dimissible even if the timer expires', () => {
            // Needed to clear the timeout since we mounted it in the beforeEach
            toastComponent.simulate('mouseEnter');

            const newToastAttributes = _.extend({}, toastBasicAttributes, {dismissible: false});
            toastComponent.setProps(newToastAttributes).mount();
            toastComponent.simulate('mouseLeave');

            expect(onCloseToast).not.toHaveBeenCalled();

            jest.advanceTimersByTime(dismissDelay);

            expect(onCloseToast).not.toHaveBeenCalled();
        });

        it('should clear the timeout on mouseenter', () => {
            expect(onCloseToast).not.toHaveBeenCalled();

            expect(toastComponent.find('.toast').length).toBe(1);
            toastComponent.find('.toast').simulate('mouseEnter');
            jest.advanceTimersByTime(dismissDelay);

            expect(onCloseToast).not.toHaveBeenCalled();
        });

        it('should reset the timeout on mouseleave', () => {
            expect(onCloseToast).not.toHaveBeenCalled();

            toastComponent.simulate('mouseEnter');
            jest.advanceTimersByTime(dismissDelay);

            expect(onCloseToast).not.toHaveBeenCalled();

            toastComponent.simulate('mouseLeave');
            jest.advanceTimersByTime(dismissDelay);

            expect(onCloseToast).toHaveBeenCalledTimes(1);
        });

        it('should not dismiss the toast if the dismiss is set to 0', () => {
            const newToastAttributes = _.extend({}, toastBasicAttributes, {dismiss: 0});
            toastComponent.setProps(newToastAttributes).mount();

            expect(onCloseToast).not.toHaveBeenCalled();

            toastComponent.simulate('mouseEnter');
            jest.advanceTimersByTime(dismissDelay);

            expect(onCloseToast).not.toHaveBeenCalled();

            toastComponent.simulate('mouseLeave');
            jest.advanceTimersByTime(dismissDelay);

            expect(onCloseToast).not.toHaveBeenCalled();
        });
    });

    describe('<Toast /> with download section', () => {
        it('should have class "toast-download" if the download prop is true', () => {
            const expectedClass = '.toast-download';
            toastComponent = mount(<Toast title="a" isDownload />);
            expect(toastComponent.find(expectedClass).length).toBe(1);
        });

        it('should not have the class "toast-download" if the download prop is false', () => {
            const expectedClass = '.toast-download';
            toastComponent = mount(<Toast title="a" isDownload={false} />);
            expect(toastComponent.find(expectedClass).length).toBe(0);
        });

        it('should load "Preparing file for download..." as a title', () => {
            toastComponent = mount(
                <Toast title="Preparing file for download..." isDownload>
                    <div>Some file.csv</div>
                </Toast>
            );

            expect(toastComponent.find('.toast-title').text()).toBe('Preparing file for download...');
        });

        it('should have a loading icon in the description', () => {
            toastComponent = mount(
                <Toast title="a" isDownload>
                    <div>Some file.csv</div>
                </Toast>
            );
            expect(toastComponent.find('.search-bar-spinner').length).toBe(1);
        });
    });
});
