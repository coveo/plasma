import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';

import {Defaults} from '../../../Defaults';
import {IModalProps, Modal} from '../Modal';

describe('Modal', () => {
    const id: string = 'modal';

    it('should render without errors', () => {
        expect(() => {
            shallow(<Modal id={id} />);
        }).not.toThrow();
    });

    describe('<Modal />', () => {
        let modal: ReactWrapper<IModalProps, any>;
        let modalInstance: Modal;

        beforeEach(() => {
            modal = mount(<Modal id={id} />, {attachTo: document.getElementById('App')});
            modalInstance = modal.instance() as Modal;
        });

        it('should call prop onRender on mounting if set', () => {
            const renderSpy = jest.fn();

            modal.setProps({id: id, onRender: renderSpy});
            modal.unmount();
            modal.mount();

            expect(renderSpy.mock.calls.length).toBe(1);
        });

        it('should call prop onDestroy on unmounting if set', () => {
            const destroySpy = jest.fn();

            expect(() => modalInstance.componentWillUnmount()).not.toThrow();

            modal.setProps({id: id, onDestroy: destroySpy});
            modal.mount();
            modal.unmount();

            expect(destroySpy.mock.calls.length).toBe(1);
        });

        it('should call the prop closeCallback if it exists when closing the modal', () => {
            jest.useFakeTimers();

            const closeCallbackSpy: jest.Mock<any, any> = jest.fn();
            modal.setProps({isOpened: true, closeCallback: closeCallbackSpy});
            modal.update();
            modal.setProps({isOpened: false});
            modal.update();

            jest.advanceTimersByTime(Defaults.MODAL_TIMEOUT);

            expect(closeCallbackSpy).toHaveBeenCalledTimes(1);
            jest.clearAllTimers();
        });

        it('should call the prop closeCallback with a timeout if specified when closing the modal', () => {
            jest.useFakeTimers();

            const closeCallbackSpy: jest.Mock<any, any> = jest.fn();
            modal.setProps({isOpened: true, closeCallback: closeCallbackSpy, closeTimeout: 5});
            modal.update();
            modal.setProps({isOpened: false});
            modal.update();

            expect(closeCallbackSpy).toHaveBeenCalledTimes(0);

            jest.advanceTimersByTime(5);

            expect(closeCallbackSpy).toHaveBeenCalledTimes(1);

            jest.clearAllTimers();
        });

        it('should set container class when the container class is specified', () => {
            const containerClass = 'mod-small';
            const classes = [containerClass];

            expect(modal.find('div').first().html()).not.toContain(containerClass);

            modal.setProps({id, classes});
            modal.mount();

            expect(modal.find('div').first().html()).toContain(containerClass);
        });
    });
});
