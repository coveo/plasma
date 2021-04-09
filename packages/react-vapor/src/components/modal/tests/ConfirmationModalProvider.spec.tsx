import {screen} from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import {renderModal} from 'react-vapor-test-utils';
import {ConfirmationModalProvider} from '../ConfirmationModalProvider';
import {ModalCompositeConnected} from '../ModalComposite';

describe('<UnsavedChangeModalProvider/>', () => {
    describe('when shouldConfirm prop is true:', () => {
        it('should open the ConfirmationModal to interrupt the leaving action if isDirty is true', () => {
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
                            modalFooterChildren={
                                <button className="btn" onClick={() => promptBefore(jest.fn())}>
                                    here
                                </button>
                            }
                            modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                        />
                    )}
                </ConfirmationModalProvider>,
                {initialState: {modals: [{id: '👾', isOpened: true}]}}
            );
            expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
            userEvent.click(screen.getByRole('button', {name: 'here'}));
            expect(screen.getByText('Are you sure?')).toBeVisible();
        });

        it('should open the ConfirmationModal to interrupt the leaving action if isDirty is false', () => {
            renderModal(
                <ConfirmationModalProvider
                    shouldConfirm
                    confirmationModalId="👾-unsaved-modal"
                    modalTitle="Are you sure?"
                    modalBodyChildren="Big bada boom"
                >
                    {({promptBefore}) => (
                        <ModalCompositeConnected
                            id="👾"
                            title="🙄"
                            classes={['mod-slide-in-bottom', 'mod-big', 'mod-stick-bottom']}
                            modalBodyChildren="Hakuna matata"
                            modalFooterChildren={
                                <button className="btn" onClick={() => promptBefore(jest.fn())}>
                                    here
                                </button>
                            }
                            modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                        />
                    )}
                </ConfirmationModalProvider>,
                {initialState: {modals: [{id: '👾', isOpened: true}]}}
            );
            expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
            userEvent.click(screen.getByRole('button', {name: 'here'}));
            expect(screen.getByText('Are you sure?')).toBeVisible();
        });
    });

    describe('when shouldConfirm prop is false:', () => {
        it('should not open the ConfirmationModal to interrupt the leaving action if isDirty is true', () => {
            renderModal(
                <ConfirmationModalProvider
                    shouldConfirm={false}
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
                            modalFooterChildren={
                                <button className="btn" onClick={() => promptBefore(jest.fn())}>
                                    here
                                </button>
                            }
                            modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                        />
                    )}
                </ConfirmationModalProvider>,
                {initialState: {modals: [{id: '👾', isOpened: true}]}}
            );
            expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
            userEvent.click(screen.getByRole('button', {name: 'here'}));
            expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
        });

        it('should not open the ConfirmationModal to interrupt the leaving action if isDirty is false', () => {
            renderModal(
                <ConfirmationModalProvider
                    shouldConfirm={false}
                    confirmationModalId="👾-unsaved-modal"
                    modalTitle="Are you sure?"
                    modalBodyChildren="Big bada boom"
                >
                    {({promptBefore}) => (
                        <ModalCompositeConnected
                            id="👾"
                            title="🙄"
                            classes={['mod-slide-in-bottom', 'mod-big', 'mod-stick-bottom']}
                            modalBodyChildren="Hakuna matata"
                            modalFooterChildren={
                                <button className="btn" onClick={() => promptBefore(jest.fn())}>
                                    here
                                </button>
                            }
                            modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                        />
                    )}
                </ConfirmationModalProvider>,
                {initialState: {modals: [{id: '👾', isOpened: true}]}}
            );
            expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
            userEvent.click(screen.getByRole('button', {name: 'here'}));
            expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
        });
    });
});
