import {mount, shallow, ShallowWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';

import {getStoreMock} from '../../../utils/tests/TestUtils';
import {ModalCompositeConnected} from '../ModalComposite';
import {UnsavedChangesModalProvider} from '../UnsavedChangeModalProvider';

describe('<UnsavedChangeModalProvider/>', () => {
    let unsavedChangesModalProvider: ShallowWrapper;
    let heavyUnsavedChangesModalProvider;
    let regularClickActionSpy: jasmine.Spy;
    let promptBeforeClickActionSpy: jasmine.Spy;
    const store = getStoreMock();
    beforeEach(() => {
        regularClickActionSpy = jasmine.createSpy('🥔');
        promptBeforeClickActionSpy = jasmine.createSpy('🍟');
    });

    afterEach(() => {
        regularClickActionSpy.calls.reset();
        promptBeforeClickActionSpy.calls.reset();
        if (unsavedChangesModalProvider?.exists()) {
            unsavedChangesModalProvider.unmount();
        }
    });

    const shallowMountUnsavedModalProvider = (isDirty: boolean = false) =>
        shallow(
            <UnsavedChangesModalProvider isDirty={isDirty}>
                {({promptBefore}) => {
                    return (
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
                    );
                }}
            </UnsavedChangesModalProvider>
        );

    const heavilyMountUnsavedModalProvider = (isDirty: boolean = false) =>
        mount(
            <UnsavedChangesModalProvider isDirty={isDirty}>
                {({promptBefore}) => {
                    return (
                        <Provider store={store}>
                            <ModalCompositeConnected
                                id="👾"
                                title="🙄"
                                classes={['mod-slide-in-bottom', 'mod-big', 'mod-stick-bottom']}
                                modalBodyChildren="🙈 🙉 🙊"
                                modalFooterChildren={
                                    <button
                                        className="btn"
                                        onClick={() =>
                                            promptBefore(promptBeforeClickActionSpy) && regularClickActionSpy()
                                        }
                                    />
                                }
                                modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                                docLink={{url: 'https://www.coveo.com', tooltip: {title: 'Go to coveo.com'}}}
                            />
                        </Provider>
                    );
                }}
            </UnsavedChangesModalProvider>
        );

    it('should mount and unmount without trowing', () => {
        expect(() => {
            shallowMountUnsavedModalProvider().unmount();
        }).not.toThrow();
    });

    describe('when dirty changes', () => {
        it('should open the UnsavedChangesModal to interrupt the leaving action', () => {
            heavyUnsavedChangesModalProvider = heavilyMountUnsavedModalProvider(true);
            expect(heavyUnsavedChangesModalProvider.childAt(1).prop('isOpen')).toBeFalsy();

            const heavyModal: any = heavyUnsavedChangesModalProvider.find(ModalCompositeConnected);
            heavyModal.props().modalFooterChildren.props.onClick();
            heavyUnsavedChangesModalProvider.update();
            expect(heavyUnsavedChangesModalProvider.childAt(1).prop('isOpen')).toBeTruthy();
        });
        describe('PromptBefore function', () => {
            it('should return false', () => {
                unsavedChangesModalProvider = shallowMountUnsavedModalProvider(true);
                unsavedChangesModalProvider
                    .childAt(0)
                    .props()
                    .modalFooterChildren.props.onClick();
                expect(regularClickActionSpy).not.toHaveBeenCalled();
            });
        });
        it('should use the callback function in the promptBefore function when confirming the exit', () => {
            heavyUnsavedChangesModalProvider = heavilyMountUnsavedModalProvider(true);

            const modal: any = heavyUnsavedChangesModalProvider.find(ModalCompositeConnected);
            modal.props().modalFooterChildren.props.onClick();
            heavyUnsavedChangesModalProvider.update();
            const exitWithoutSavingButton: any = heavyUnsavedChangesModalProvider
                .childAt(1)
                .find('Button')
                .first();
            exitWithoutSavingButton.prop('onClick')();

            expect(promptBeforeClickActionSpy).toHaveBeenCalled();
        });
        it('should not use the callback function in the promptBefore function when cancelling the exit', () => {
            heavyUnsavedChangesModalProvider = heavilyMountUnsavedModalProvider(true);

            const modal: any = heavyUnsavedChangesModalProvider.find(ModalCompositeConnected);
            modal.props().modalFooterChildren.props.onClick();
            heavyUnsavedChangesModalProvider.update();
            const exitWithoutSavingButton: any = heavyUnsavedChangesModalProvider
                .childAt(1)
                .find('Button')
                .last();
            exitWithoutSavingButton.prop('onClick')();

            expect(promptBeforeClickActionSpy).not.toHaveBeenCalled();
        });
    });

    describe('when the modal is not dirty', () => {
        it('should not open the UnsavedChangesModal to interrupt the leaving action', () => {
            heavyUnsavedChangesModalProvider = heavilyMountUnsavedModalProvider(false);
            expect(heavyUnsavedChangesModalProvider.childAt(1).prop('isOpen')).toBeFalsy();

            const heavyModal: any = heavyUnsavedChangesModalProvider.find(ModalCompositeConnected);
            heavyModal.props().modalFooterChildren.props.onClick();
            heavyUnsavedChangesModalProvider.update();
            expect(heavyUnsavedChangesModalProvider.childAt(1).prop('isOpen')).toBeFalsy();
        });
        it('promptBefore function should return true', () => {
            unsavedChangesModalProvider = shallowMountUnsavedModalProvider();
            unsavedChangesModalProvider
                .childAt(0)
                .props()
                .modalFooterChildren.props.onClick();
            expect(regularClickActionSpy).toHaveBeenCalled();
        });
    });
});
