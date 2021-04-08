import {screen, fireEvent} from '@testing-library/dom';
import userEvent, {specialChars} from '@testing-library/user-event';
import * as React from 'react';
import {renderModal} from 'react-vapor-test-utils';
import {Store} from 'redux';

import {IReactVaporState} from '../../../ReactVapor';
// import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/tests/TestUtils';
import {ConfirmationModalProvider} from '../ConfirmationModalProvider';
import {ModalCompositeConnected} from '../ModalComposite';

describe('<UnsavedChangeModalProvider/>', () => {
    let store: Store<IReactVaporState>;

    // const mockChildren = jest.fn(); // lol

    // const defaultProps: IConfirmationModalProviderProps = {
    //     confirmationModalId: '👾-unsaved-modal',
    //     shouldConfirm: true,
    //     modalTitle: 'Unsaved Changes',
    //     modalBodyChildren: <div>some content</div>,
    //     className: ['potato'],
    //     children: mockChildren,
    //     confirmButtonText: 'Confirm',
    // };

    beforeEach(() => {
        store = TestUtils.buildStore();
    });

    // afterEach(() => {
    // store.dispatch(clearState());
    // mockChildren.mockReset();
    // });

    // const shallowMountUnsavedModalProvider = (shouldConfirm: boolean = false) =>
    //     shallow(
    //         <Provider store={store}>
    //             <ConfirmationModalProvider
    //                 shouldConfirm={shouldConfirm}
    //                 modalTitle="Are you sure?"
    //                 modalBodyChildren={<div>some content</div>}
    //             >
    //                 {({promptBefore}) => (
    //                     <ModalCompositeConnected
    //                         id="👾"
    //                         title="🙄"
    //                         classes={['mod-slide-in-bottom', 'mod-big', 'mod-stick-bottom']}
    //                         modalBodyChildren="🙈 🙉 🙊"
    //                         modalFooterChildren={
    //                             <button
    //                                 className="btn"
    //                                 onClick={() => promptBefore(promptBeforeClickActionSpy) && regularClickActionSpy()}
    //                             />
    //                         }
    //                         modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
    //                         docLink={{url: 'https://www.coveo.com', tooltip: {title: 'Go to coveo.com'}}}
    //                     />
    //                 )}
    //             </ConfirmationModalProvider>
    //         </Provider>
    //     );

    // const heavilyMountUnsavedModalProvider = (shouldConfirm: boolean = false) =>
    //     mount(
    //         <Provider store={store}>
    //             <ConfirmationModalProvider
    //                 shouldConfirm={shouldConfirm}
    //                 modalTitle="Are you sure?"
    //                 modalBodyChildren={<div>some content</div>}
    //             >
    //                 {({promptBefore}) => (
    //                     <Provider store={store}>
    //                         <ModalCompositeConnected
    //                             id="👾"
    //                             title="🙄"
    //                             classes={['mod-slide-in-bottom', 'mod-big', 'mod-stick-bottom']}
    //                             modalBodyChildren="🙈 🙉 🙊"
    //                             modalFooterChildren={
    //                                 <button
    //                                     className="btn"
    //                                     onClick={() =>
    //                                         promptBefore(promptBeforeClickActionSpy) && regularClickActionSpy()
    //                                     }
    //                                 />
    //                             }
    //                             modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
    //                             docLink={{url: 'https://www.coveo.com', tooltip: {title: 'Go to coveo.com'}}}
    //                         />
    //                     </Provider>
    //                 )}
    //             </ConfirmationModalProvider>
    //         </Provider>
    //     );

    describe('SHOULDCONFIRM: when shouldConfirm prop is true:', () => {
        it('should open the ConfirmationModal to interrupt the leaving action', () => {
            renderModal(
                <ConfirmationModalProvider
                    shouldConfirm
                    confirmationModalId="👾-unsaved-modal"
                    modalTitle="Are you sure?"
                    modalBodyChildren="Big bada boom"
                >
                    {({promptBefore}) => (
                        <ModalCompositeConnected
                            isDirty
                            id="👾"
                            title="🙄"
                            classes={['mod-slide-in-bottom', 'mod-big', 'mod-stick-bottom']}
                            modalBodyChildren="Hakuna matata"
                            modalFooterChildren={<button className="btn" onClick={() => promptBefore(jest.fn())} />}
                            modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                        />
                    )}
                </ConfirmationModalProvider>,
                {initialState: {modals: [{id: '👾', isOpened: true}]}}
            );

            expect(screen.queryByText('Unsaved Changes')).not.toBeInTheDocument();

            // fireEvent.click(document);

            // userEvent.click(document.body);
            userEvent.type(screen.getByRole('dialog'), specialChars.escape);

            expect(screen.getByText('Unsaved Changes')).toBeVisible();
        });

        it('PromptBefore function should return false', () => {});

        it('should use the callback function in the promptBefore function when confirming the exit', () => {});

        it('should not use the callback function in the promptBefore function when cancelling the exit', () => {});
    });

    describe('when the modal is configured not to confirm changes', () => {
        it('should not open the ConfirmationModal to interrupt the leaving action', () => {});

        it('promptBefore function should return true', () => {});
    });
});
