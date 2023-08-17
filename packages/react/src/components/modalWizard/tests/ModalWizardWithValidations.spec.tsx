import userEvent from '@testing-library/user-event';
import {render, screen, waitFor, waitForElementToBeRemoved} from '@test-utils';

import {ModalWizardWithValidations} from '../ModalWizardWithValidations';

describe('ModalWizardWithValidations', () => {
    it('validates each steps using validation ids', async () => {
        const user = userEvent.setup();
        render(
            <ModalWizardWithValidations id="🌶🧙‍♂️" validationIdsByStep={[['step-1'], ['step-2-a', 'step-2-b']]}>
                <div>Step 1</div>
                <div>Step 2</div>
            </ModalWizardWithValidations>,
            {
                initialState: {
                    modals: [{id: '🌶🧙‍♂️', isOpened: true}],
                    validation: {
                        'step-1': {
                            error: [],
                            isDirty: [],
                            warning: [{validationType: 'default', value: 'A warning should not block next button.'}],
                        },
                        'step-2-b': {
                            error: [{validationType: 'default', value: 'Error with "b", cannot finish.'}],
                            isDirty: [],
                            warning: [],
                        },
                    },
                },
            },
        );

        expect(screen.getByRole('button', {name: 'Next'})).toBeEnabled();
        await user.click(screen.getByRole('button', {name: 'Next'}));
        expect(screen.getByText('Step 2')).toBeVisible();
        expect(screen.getByRole('button', {name: 'Finish'})).toBeDisabled();
    });

    // eslint-disable-next-line jest/no-disabled-tests
    it.skip('prevents from closing the modal accidently if any step is dirty', async () => {
        const user = userEvent.setup();
        render(
            <ModalWizardWithValidations id="🌶🧙‍♂️" validationIdsByStep={[['step-1'], ['step-2']]}>
                <div>Step 1</div>
                <div>Step 2</div>
            </ModalWizardWithValidations>,
            {
                initialState: {
                    modals: [{id: '🌶🧙‍♂️', isOpened: true}],
                    validation: {
                        'step-2': {
                            error: [],
                            isDirty: [{validationType: 'default', value: true}],
                            warning: [],
                        },
                    },
                },
            },
        );

        expect(screen.queryByText('Unsaved Changes')).not.toBeInTheDocument();

        await user.click(screen.getByRole('dialog'));
        await user.keyboard('{Escape}');

        await waitFor(() => expect(screen.getByText('Unsaved Changes')).toBeVisible());
        expect(screen.getByText('Step 1')).toBeVisible();
    });

    // eslint-disable-next-line jest/no-disabled-tests
    it.skip('does not prevent from closing the modal accidently if it has no pending changes', async () => {
        const user = userEvent.setup();
        render(
            <ModalWizardWithValidations id="🌶🧙‍♂️" validationIdsByStep={[['step-1'], ['step-2']]}>
                <div>Step 1</div>
                <div>Step 2</div>
            </ModalWizardWithValidations>,
            {initialState: {modals: [{id: '🌶🧙‍♂️', isOpened: true}]}},
        );

        await user.click(screen.getByRole('dialog'));
        await user.keyboard('{Escape}');

        await waitForElementToBeRemoved(() => screen.queryByRole('dialog'));
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
});
