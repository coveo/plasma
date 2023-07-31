import {mount, ReactWrapper, shallow} from 'enzyme';

import {
    DEFAULT_MODAL_PROMPT_CANCEL_LABEL,
    DEFAULT_MODAL_PROMPT_CONFIRM_LABEL,
    IModalPromptProps,
    ModalPrompt,
} from '../ModalPrompt';

describe('ModalPrompt', () => {
    const id: string = 'modalPrompt';
    const title: string = 'Title';
    const confirmLabel: string = 'Confirm';
    const cancelLabel: string = 'Cancel';
    const message: string = 'message';

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

    describe('ModalPrompt no labels', () => {
        const defaultConfirmLabel: string = DEFAULT_MODAL_PROMPT_CONFIRM_LABEL;
        const defaultCancelLabel: string = DEFAULT_MODAL_PROMPT_CANCEL_LABEL;
        let modalPrompt: ReactWrapper<IModalPromptProps, any>;

        beforeEach(() => {
            modalPrompt = mount(<ModalPrompt id={id} title={title} message={message} onConfirm={() => 1} />, {
                attachTo: document.getElementById('App'),
            });
        });

        afterEach(() => {
            modalPrompt?.unmount();
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
            modalPrompt?.unmount();
        });

        it('should set opened class on container when isOpened is true', () => {
            expect(modalPrompt.find('.modal-container').hasClass('opened')).toBe(false);

            modalPrompt.setProps({id, title, isOpened: true}).update();

            expect(modalPrompt.find('.modal-container').hasClass('opened')).toBe(true);
        });

        describe('with a confirm spy', () => {
            it('should call prop onConfirm when modalPrompt Confirm button is clicked and prop is set', () => {
                const confirmSpy = jest.fn();
                const confirmButton = modalPrompt.find('.js-confirm');

                confirmButton.simulate('click');

                expect(confirmSpy).not.toHaveBeenCalled();

                modalPrompt.setProps({id, title, onConfirm: confirmSpy});
                confirmButton.simulate('click');

                expect(confirmSpy).toHaveBeenCalledTimes(1);
            });
        });

        describe('with a cancel spy', () => {
            let cancelSpy: jest.Mock<any, any>;

            beforeEach(() => {
                cancelSpy = jest.fn();
            });

            it('should call prop onCancel when modalPrompt x is clicked and prop is set', () => {
                jest.useFakeTimers();
                const closeButton = modalPrompt.find('.small-close');

                closeButton.simulate('click');

                expect(cancelSpy).not.toHaveBeenCalled();

                modalPrompt.setProps({id, title, onCancel: cancelSpy});
                jest.advanceTimersByTime(5);

                closeButton.simulate('click');

                expect(cancelSpy).toHaveBeenCalledTimes(1);
                jest.clearAllTimers();
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
