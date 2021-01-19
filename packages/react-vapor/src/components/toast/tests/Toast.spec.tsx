import {mount, shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';

import {IToastProps, Toast, ToastType} from '../Toast';

describe('Toasts', () => {
    let defaultProps: IToastProps = {
        title: '👑',
    };

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

        it('should have class "mod-success" when type is Success', () => {
            const toastComponent = mount(<Toast {...{type: ToastType.Success}} />);

            expect(toastComponent.children().hasClass('mod-success')).toBe(true);
        });

        it('should have class "mod-success" when both type and className props are empty', () => {
            const toastComponent = mount(<Toast />);

            expect(toastComponent.children().hasClass('mod-success')).toBe(true);
        });

        it('should have class "mod-error" when type is Error', () => {
            const toastComponent = mount(<Toast {...{type: ToastType.Error}} />);

            expect(toastComponent.children().hasClass('mod-error')).toBe(true);
        });

        it('should have class "mod-warning" if the type is Warning', () => {
            const toastComponent = mount(<Toast {...{type: ToastType.Warning}} />);

            expect(toastComponent.children().hasClass('mod-warning')).toBe(true);
        });

        it('should have class "mod-animated" if the animate props is true', () => {
            const toastComponent = mount(<Toast {...defaultProps} animate={true} />);

            expect(toastComponent.children().hasClass('mod-animated')).toBe(true);
        });

        it('should have class "mod-animated" if the animate props is undefined', () => {
            const toastComponent = mount(<Toast {...defaultProps} />);

            expect(toastComponent.children().hasClass('mod-animated')).toBe(true);
        });

        it('should have any class specified in the className prop', () => {
            const expectedClass = 'my-awesome-class';

            const toastComponent = mount(<Toast {...defaultProps} className={expectedClass} />);

            expect(toastComponent.hasClass(expectedClass)).toBe(true);
        });

        it('should have a description when the content is set', () => {
            const descriptionContainer = '.toast-description';
            const expectedDescription = 'GameStonks = 📈 💵';

            const toastComponent = mount(
                <Toast {...defaultProps} className={descriptionContainer} content={expectedDescription} />
            );

            expect(toastComponent.find(descriptionContainer).length).toBe(1);
            expect(toastComponent.find(descriptionContainer).text()).toBe(expectedDescription);
        });

        it('should allow JSX in the content', () => {
            const descriptionContainer = '.toast-description';
            const expectedDescription = 'GameStonks = 📈 💵';

            const toastComponent = mount(
                <Toast
                    {...defaultProps}
                    className={descriptionContainer}
                    content={() => <a href="#">{expectedDescription}</a>}
                />
            );

            expect(toastComponent.find(descriptionContainer).length).toBe(1);
            expect(toastComponent.find(descriptionContainer).text()).toBe(expectedDescription);
        });

        it('should render the children node inside the toast', () => {
            const descriptionContainer = '.toast-description';
            const expectedChildren = <div>GameStonks = 📈 💵</div>;

            const toastComponent = mount(<Toast {...defaultProps} children={expectedChildren} />);

            expect(toastComponent.find(descriptionContainer).length).toBe(1);
            expect(toastComponent.find(descriptionContainer).children().equals(expectedChildren)).toBe(true);
        });

        it('should contain a toast-close when the dismissible prop is undefined or true', () => {
            const closeSelector = '.toast-close';

            const toastComponent = mount(<Toast {...defaultProps} dismissible={true} />);

            expect(toastComponent.find(closeSelector).length).toBe(1);
        });

        it('should contain a toast-close when the dismissible prop is undefined', () => {
            const closeSelector = '.toast-close';
            const newToastAttributes = _.extend({}, toastBasicAttributes, {onClose: jest.fn()});

            const toastComponent = mount(<Toast {...defaultProps} />);

            expect(toastComponent.find(closeSelector).length).toBe(1);
        });

        it('should call onClose when the user clicks on .toast-close', () => {
            const closeSelector = '.toast-close';
            const closeSpy = jest.fn();
            const toastComponent = mount(<Toast {...defaultProps} onClose={closeSpy} />);

            toastComponent.find(closeSelector).simulate('click');

            expect(closeSpy).toHaveBeenCalledTimes(1);
        });

        it('should not contain a toast-close when the toast is not dismissible', () => {
            const closeSelector = '.toast-close';

            const toastComponent = mount(<Toast {...defaultProps} dismissible={false} />);

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
            mount(<Toast {...defaultProps} dismissible={false} />);

            expect(onCloseToast).not.toHaveBeenCalled();

            jest.advanceTimersByTime(dismissDelay);

            expect(onCloseToast).not.toHaveBeenCalled();
        });

        it('should clear the timeout on mouseenter', () => {
            const toastComponent = mount(<Toast {...defaultProps} />);

            toastComponent.find('.toast').simulate('mouseEnter');
            jest.advanceTimersByTime(dismissDelay);

            expect(onCloseToast).not.toHaveBeenCalled();
            expect(toastComponent.find('.toast').length).toBe(1);
        });

        it('should reset the timeout on mouseleave', () => {
            const toastComponent = mount(<Toast {...defaultProps} />);

            toastComponent.simulate('mouseEnter');
            jest.advanceTimersByTime(dismissDelay);

            expect(onCloseToast).not.toHaveBeenCalled();

            toastComponent.simulate('mouseLeave');
            jest.advanceTimersByTime(dismissDelay);

            expect(onCloseToast).toHaveBeenCalledTimes(1);
        });

        it('should not dismiss the toast if the dismiss is set to 0', () => {
            const toastComponent = mount(<Toast {...defaultProps} dismiss={0} />);

            toastComponent.simulate('mouseEnter');
            jest.advanceTimersByTime(dismissDelay);

            expect(onCloseToast).not.toHaveBeenCalled();

            toastComponent.simulate('mouseLeave');
            jest.advanceTimersByTime(dismissDelay);

            expect(onCloseToast).not.toHaveBeenCalled();
        });
    });
});
