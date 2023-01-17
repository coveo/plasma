import {mount, ReactWrapper, shallow} from 'enzyme';
import * as _ from 'underscore';

import {Toast} from '../Toast.js';
import {IToastContainerProps, ToastContainer} from '../ToastContainer.js';

describe('Toasts', () => {
    let component: ReactWrapper<IToastContainerProps>;
    let basicProps: IToastContainerProps;
    let instance: ToastContainer;

    it('should render without errors', () => {
        expect(() => shallow(<ToastContainer />)).not.toThrow();
    });

    it('should render without errors with children', () => {
        expect(() =>
            shallow(
                <ToastContainer>
                    <a href="#">Hello</a>
                </ToastContainer>
            )
        ).not.toThrow();

        expect(() =>
            shallow(
                <ToastContainer>
                    <Toast title="test" />
                </ToastContainer>
            )
        ).not.toThrow();
    });

    describe('<ToastContainer />', () => {
        beforeEach(() => {
            basicProps = {};
            component = mount(<ToastContainer {...basicProps} />, {attachTo: document.getElementById('App')});
            instance = component.instance() as ToastContainer;
        });

        it('should call prop onRender on mounting if set', () => {
            const renderSpy = jest.fn();
            const newToastAttributes = _.extend({}, basicProps, {onRender: renderSpy});

            component.unmount();
            component.setProps(newToastAttributes).mount();

            expect(renderSpy).toHaveBeenCalledTimes(1);
        });

        it('should call prop onDestroy on unmounting if set', () => {
            const destroySpy = jest.fn();
            const newToastAttributes = _.extend({}, basicProps, {onDestroy: destroySpy});

            expect(() => instance.componentWillUnmount()).not.toThrow();

            component.setProps(newToastAttributes).mount();

            component.unmount();

            expect(destroySpy).toHaveBeenCalledTimes(1);
        });

        it('should be possible to pass toasts in props', () => {
            const newToastAttributes = _.extend({}, basicProps, {
                toasts: [{id: 'toast-id', title: 'some toast title'}],
            });

            component.setProps(newToastAttributes);

            expect(() => component.mount()).not.toThrow();
            expect(component.find(Toast).length).toBe(1);
        });

        it('should be call prop onCloseToast when a toast is closed', () => {
            const onCloseToast = jest.fn();
            let newToastAttributes = _.extend({}, basicProps, {toasts: [{id: 'toast-id', title: 'some toast title'}]});

            component.setProps(newToastAttributes).mount();

            component.find(Toast).props().onClose();

            expect(onCloseToast).toHaveBeenCalledTimes(0);

            newToastAttributes = _.extend({}, newToastAttributes, {onCloseToast});
            component.setProps(newToastAttributes).mount();

            component.find(Toast).props().onClose();

            expect(onCloseToast).toHaveBeenCalledTimes(1);
            expect(onCloseToast).toHaveBeenCalledWith(newToastAttributes.toasts[0].id);
        });

        it('should not throw if toast method onClose is not defined', () => {
            const newToastAttributes = _.extend({}, basicProps, {
                toasts: [{id: 'toast-id', title: 'some toast title'}],
            });

            component.setProps(newToastAttributes).mount();

            expect(() => component.find(Toast).props().onClose()).not.toThrow();
        });

        it('calls the onClose prop of the toast when closing the toast', () => {
            const onCloseSpy = jest.fn();
            const newToastAttributes = _.extend({}, basicProps, {
                toasts: [
                    {
                        id: 'toast-id',
                        title: 'greatest guitarist',
                        onClose: onCloseSpy,
                    },
                ],
            });

            component.setProps(newToastAttributes).mount();
            component.find(Toast).props().onClose();

            expect(onCloseSpy).toHaveBeenCalledTimes(1);
        });
    });
});
