import userEvent from '@testing-library/user-event';
import {render, screen} from '@test-utils';

import {ConfirmationModalProvider} from '../ConfirmationModalProvider';
import {ModalCompositeConnected} from '../ModalComposite';

describe('ConfirmationModalProvider', () => {
    describe('when shouldConfirm prop is true:', () => {
        it('should open the ConfirmationModal to interrupt the leaving action if isDirty is true', async () => {
            render(
                <ConfirmationModalProvider
                    shouldConfirm
                    confirmationModalId="👾-unsaved-changes"
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
                                    prompt confirmation modal
                                </button>
                            }
                            modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                        />
                    )}
                </ConfirmationModalProvider>,
                {initialState: {modals: [{id: '👾', isOpened: true}]}},
            );
            expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
            await userEvent.click(screen.getByRole('button', {name: 'prompt confirmation modal'}));
            expect(screen.getByText('Are you sure?')).toBeVisible();
        });
    });

    describe('when shouldConfirm prop is false:', () => {
        it('should not open the ConfirmationModal to interrupt the leaving action if isDirty is true', async () => {
            render(
                <ConfirmationModalProvider
                    shouldConfirm={false}
                    confirmationModalId="👾-unsaved-changes"
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
                                    prompt confirmation modal
                                </button>
                            }
                            modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                        />
                    )}
                </ConfirmationModalProvider>,
                {initialState: {modals: [{id: '👾', isOpened: true}]}},
            );
            expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
            await userEvent.click(screen.getByRole('button', {name: 'prompt confirmation modal'}));
            expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
        });
    });
});
