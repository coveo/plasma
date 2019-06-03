import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {DEFAULT_MODAL_PROMPT_CANCEL_LABEL, DEFAULT_MODAL_PROMPT_CONFIRM_LABEL, IModalPromptProps, ModalPrompt} from '../ModalPrompt';

describe('ModalPrompt', () => {
    const id: string = 'modalPrompt';
    const title: string = 'Title';
    const confirmLabel: string = 'Confirm';
    const cancelLabel: string = 'Cancel';
    const message: string = 'message';

    describe('<ModalPrompt />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <ModalPrompt
                        id={id}
                        title={title}
                        confirmLabel={confirmLabel}
                        cancelLabel={cancelLabel}
                        message={message}
                        onConfirm={() => 1}
                    />,
                );
            }).not.toThrow();
        });
    });

    describe('<ModalPrompt />', () => {
        const defaultConfirmLabel: string = DEFAULT_MODAL_PROMPT_CONFIRM_LABEL;
        const defaultCancelLabel: string = DEFAULT_MODAL_PROMPT_CANCEL_LABEL;
        let modalPrompt: ReactWrapper<IModalPromptProps, any>;

        beforeEach(() => {
            modalPrompt = mount(
                <ModalPrompt
                    id={id}
                    title={title}
                    message={message}
                    onConfirm={() => 1}
                />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            modalPrompt.detach();
        });

        it('should set default value for cancel label when not set', () => {
            const cancelButton = modalPrompt.find('.js-cancel');

            expect(cancelButton.text()).toBe(defaultCancelLabel);
        });

        it('should set default value for confirm label when not set', () => {
            const confirmButton = modalPrompt.find('.js-confirm');

            expect(confirmButton.text()).toBe(defaultConfirmLabel);
        });
    });

    describe('<ModalPrompt />', () => {
        let modalPrompt: ReactWrapper<IModalPromptProps, any>;

        beforeEach(() => {
            modalPrompt = mount(
                <ModalPrompt
                    id={id}
                    title={title}
                    confirmLabel={confirmLabel}
                    cancelLabel={cancelLabel}
                    message={message}
                    onConfirm={() => 1}
                />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            modalPrompt.detach();
        });

        it('should set opened class on container when isOpened is true', () => {
            expect(modalPrompt.find('.modal-container').hasClass('opened')).toBe(false);

            modalPrompt.setProps({id, title, isOpened: true}).update();

            expect(modalPrompt.find('.modal-container').hasClass('opened')).toBe(true);
        });

        describe('with a confirm spy', () => {
            let confirmSpy: jasmine.Spy;
            let confirmButton: ReactWrapper<React.HTMLAttributes<HTMLButtonElement>, void>;

            beforeEach(() => {
                confirmSpy = jasmine.createSpy('onConfirm');
                confirmButton = modalPrompt.find('.js-confirm');
            });

            it('should call prop onConfirm when modalPrompt Confirm button is clicked and prop is set', () => {
                confirmButton.simulate('click');

                expect(confirmSpy).not.toHaveBeenCalled();

                modalPrompt.setProps({id, title, onConfirm: confirmSpy});
                confirmButton.simulate('click');

                expect(confirmSpy).toHaveBeenCalledTimes(1);
            });

            it('should call prop onConfirm when modalPrompt Confirm button is clicked and prop is set', () => {
                confirmButton.simulate('click');
                expect(confirmSpy).not.toHaveBeenCalled();

                modalPrompt.setProps({id, title, onConfirm: confirmSpy});
                confirmButton.simulate('click');

                expect(confirmSpy).toHaveBeenCalledTimes(1);
            });
        });

        describe('with a cancel spy', () => {
            let cancelSpy: jasmine.Spy;

            beforeEach(() => {
                cancelSpy = jasmine.createSpy('onCancel');
            });

            it('should call prop onCancel when modalPrompt x is clicked and prop is set', () => {
                jasmine.clock().install();
                const closeButton = modalPrompt.find('.small-close');

                closeButton.simulate('click');
                expect(cancelSpy).not.toHaveBeenCalled();

                modalPrompt.setProps({id, title, onCancel: cancelSpy});
                jasmine.clock().tick(5);

                closeButton.simulate('click');

                expect(cancelSpy).toHaveBeenCalledTimes(1);
                jasmine.clock().uninstall();
            });

            it('should call prop onCancel when modalPrompt cancel button is clicked and prop is set', () => {
                const cancelButton = modalPrompt.find('.js-cancel');

                cancelButton.simulate('click');
                expect(cancelSpy).not.toHaveBeenCalled();

                modalPrompt.setProps({id, title, onCancel: cancelSpy});
                cancelButton.simulate('click');

                expect(cancelSpy).toHaveBeenCalledTimes(1);
            });

            it('should call prop onCancel when concreteModalPrompt cancel button is clicked and prop is set', () => {
                const cancelButton = modalPrompt.find('.js-cancel');

                cancelButton.simulate('click');
                expect(cancelSpy).not.toHaveBeenCalled();

                modalPrompt.setProps({id, title, onCancel: cancelSpy});
                cancelButton.simulate('click');

                expect(cancelSpy).toHaveBeenCalledTimes(1);
            });
        });
    });
});
