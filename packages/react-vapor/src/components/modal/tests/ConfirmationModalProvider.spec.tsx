import {mount, shallow, ShallowWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';

import {getStoreMock} from '../../../utils/tests/TestUtils';
import {ModalCompositeConnected} from '../ModalComposite';
import {ConfirmationModalProvider} from '../ConfirmationModalProvider';

describe('<UnsavedChangeModalProvider/>', () => {
    let confirmationModalProvider: ShallowWrapper;
    let heavyConfirmationModalProvider;
    let regularClickActionSpy: jest.Mock<any, any>;
    let promptBeforeClickActionSpy: jest.Mock<any, any>;
    const store = getStoreMock();
    beforeEach(() => {
        regularClickActionSpy = jest.fn();
        promptBeforeClickActionSpy = jest.fn();
    });

    afterEach(() => {
        regularClickActionSpy.mockReset();
        promptBeforeClickActionSpy.mockReset();
        if (confirmationModalProvider?.exists()) {
            confirmationModalProvider.unmount();
        }
    });

    const shallowMountUnsavedModalProvider = (shouldConfirm: boolean = false) =>
        shallow(
            <ConfirmationModalProvider
                shouldConfirm={shouldConfirm}
                modalTitle="Are you sure?"
                modalBodyChildren={<div>some content</div>}
            >
                {({promptBefore}) => (
                    <ModalCompositeConnected
                        id="👾"
                        title="🙄"
                        classes={['mod-slide-in-bottom', 'mod-big', 'mod-stick-bottom']}
                        modalBodyChildren="🙈 🙉 🙊"
                        modalFooterChildren={
                            <button
                                className="btn"
                                onClick={() => promptBefore(promptBeforeClickActionSpy) && regularClickActionSpy()}
                            />
                        }
                        modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                        docLink={{url: 'https://www.coveo.com', tooltip: {title: 'Go to coveo.com'}}}
                    />
                )}
            </ConfirmationModalProvider>
        );

    const heavilyMountUnsavedModalProvider = (shouldConfirm: boolean = false) =>
        mount(
            <ConfirmationModalProvider
                shouldConfirm={shouldConfirm}
                modalTitle="Are you sure?"
                modalBodyChildren={<div>some content</div>}
            >
                {({promptBefore}) => (
                    <Provider store={store}>
                        <ModalCompositeConnected
                            id="👾"
                            title="🙄"
                            classes={['mod-slide-in-bottom', 'mod-big', 'mod-stick-bottom']}
                            modalBodyChildren="🙈 🙉 🙊"
                            modalFooterChildren={
                                <button
                                    className="btn"
                                    onClick={() => promptBefore(promptBeforeClickActionSpy) && regularClickActionSpy()}
                                />
                            }
                            modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                            docLink={{url: 'https://www.coveo.com', tooltip: {title: 'Go to coveo.com'}}}
                        />
                    </Provider>
                )}
            </ConfirmationModalProvider>
        );

    it('should mount and unmount without trowing', () => {
        expect(() => {
            shallowMountUnsavedModalProvider().unmount();
        }).not.toThrow();
    });

    describe('when should confirm changes', () => {
        it('should open the ConfirmationModal to interrupt the leaving action', () => {
            heavyConfirmationModalProvider = heavilyMountUnsavedModalProvider(true);

            expect(heavyConfirmationModalProvider.childAt(1).prop('isOpen')).toBeFalsy();

            const heavyModal: any = heavyConfirmationModalProvider.find(ModalCompositeConnected);
            heavyModal.props().modalFooterChildren.props.onClick();
            heavyConfirmationModalProvider.update();

            expect(heavyConfirmationModalProvider.childAt(1).prop('isOpen')).toBeTruthy();
        });

        describe('PromptBefore function', () => {
            it('should return false', () => {
                confirmationModalProvider = shallowMountUnsavedModalProvider(true);
                confirmationModalProvider.childAt(0).props().modalFooterChildren.props.onClick();

                expect(regularClickActionSpy).not.toHaveBeenCalled();
            });
        });

        it('should use the callback function in the promptBefore function when confirming the exit', () => {
            heavyConfirmationModalProvider = heavilyMountUnsavedModalProvider(true);

            const modal: any = heavyConfirmationModalProvider.find(ModalCompositeConnected);
            modal.props().modalFooterChildren.props.onClick();
            heavyConfirmationModalProvider.update();
            const exitWithoutSavingButton: any = heavyConfirmationModalProvider.childAt(1).find('Button').first();
            exitWithoutSavingButton.prop('onClick')();

            expect(promptBeforeClickActionSpy).toHaveBeenCalled();
        });

        it('should not use the callback function in the promptBefore function when cancelling the exit', () => {
            heavyConfirmationModalProvider = heavilyMountUnsavedModalProvider(true);

            const modal: any = heavyConfirmationModalProvider.find(ModalCompositeConnected);
            modal.props().modalFooterChildren.props.onClick();
            heavyConfirmationModalProvider.update();
            const exitWithoutSavingButton: any = heavyConfirmationModalProvider.childAt(1).find('Button').last();
            exitWithoutSavingButton.prop('onClick')();

            expect(promptBeforeClickActionSpy).not.toHaveBeenCalled();
        });
    });

    describe('when the modal is configured not to confirm changes', () => {
        it('should not open the ConfirmationModal to interrupt the leaving action', () => {
            heavyConfirmationModalProvider = heavilyMountUnsavedModalProvider(false);

            expect(heavyConfirmationModalProvider.childAt(1).prop('isOpen')).toBeFalsy();

            const heavyModal: any = heavyConfirmationModalProvider.find(ModalCompositeConnected);
            heavyModal.props().modalFooterChildren.props.onClick();
            heavyConfirmationModalProvider.update();

            expect(heavyConfirmationModalProvider.childAt(1).prop('isOpen')).toBeFalsy();
        });

        it('promptBefore function should return true', () => {
            confirmationModalProvider = shallowMountUnsavedModalProvider();
            confirmationModalProvider.childAt(0).props().modalFooterChildren.props.onClick();

            expect(regularClickActionSpy).toHaveBeenCalled();
        });
    });
});
