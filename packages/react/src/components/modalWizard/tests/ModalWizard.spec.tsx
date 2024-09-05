import {render, screen, waitForElementToBeRemoved} from '@test-utils';
import userEvent from '@testing-library/user-event';
import {PureComponent} from 'react';

import {Button} from '../../button';
import {ModalWizard} from '../ModalWizard';

describe('ModalWizard', () => {
    it('closes the modal and execute the onCancel prop if passed when clicking on "cancel"', async () => {
        const user = userEvent.setup();
        const cancelSpy = jest.fn();
        render(
            <div>
                <ModalWizard id="🧙‍♂️" onCancel={cancelSpy}>
                    <div>Step 1</div>
                    <div>Step 2</div>
                    <div>Step 3</div>
                </ModalWizard>
            </div>,
            {initialState: {modals: [{id: '🧙‍♂️', isOpened: true}]}},
        );

        expect(screen.getByRole('dialog')).toBeInTheDocument();

        await user.click(screen.getByRole('button', {name: 'Cancel'}));

        await waitForElementToBeRemoved(() => screen.queryByRole('dialog'));
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        expect(cancelSpy).toHaveBeenCalledTimes(1);
    });

    it('navigates properly through the steps when clicking on "next" and "previous" buttons', async () => {
        const user = userEvent.setup();
        const nextSpy = jest.fn();
        const previousSpy = jest.fn();

        const FunctionComponentStep = () => <div>Step 2: FunctionComponent</div>;
        class ClassComponentStep extends PureComponent {
            render() {
                return <div>Step 3: ClassComponent</div>;
            }
        }

        render(
            <ModalWizard id="🧙‍♂️" onNext={nextSpy} onPrevious={previousSpy}>
                <div>Step 1: ReactElement</div>
                <FunctionComponentStep />
                <ClassComponentStep />
            </ModalWizard>,
            {initialState: {modals: [{id: '🧙‍♂️', isOpened: true}]}},
        );

        expect(screen.getByText(/Step 1/)).toBeVisible();
        expect(screen.getByText(/Step 2/)).not.toBeVisible();
        expect(screen.getByText(/Step 3/)).not.toBeVisible();

        await user.click(screen.getByRole('button', {name: 'Next'}));

        expect(screen.getByText(/Step 1/)).not.toBeVisible();
        expect(screen.getByText(/Step 2/)).toBeVisible();
        expect(screen.getByText(/Step 3/)).not.toBeVisible();

        await user.click(screen.getByRole('button', {name: 'Next'}));

        expect(screen.getByText(/Step 1/)).not.toBeVisible();
        expect(screen.getByText(/Step 2/)).not.toBeVisible();
        expect(screen.getByText(/Step 3/)).toBeVisible();

        await user.click(screen.getByRole('button', {name: 'Previous'}));

        expect(screen.getByText(/Step 1/)).not.toBeVisible();
        expect(screen.getByText(/Step 2/)).toBeVisible();
        expect(screen.getByText(/Step 3/)).not.toBeVisible();

        expect(nextSpy).toHaveBeenCalledTimes(2);
        expect(previousSpy).toHaveBeenCalledTimes(1);
    });

    it('disables the next button if the current step is invalid', () => {
        render(
            <ModalWizard id="🧙‍♂️" validateStep={() => ({isValid: false})}>
                <div>Step 1</div>
                <div>Step 2</div>
            </ModalWizard>,
            {initialState: {modals: [{id: '🧙‍♂️', isOpened: true}]}},
        );

        expect(screen.getByRole('button', {name: 'Next'})).toBeDisabled();
    });

    // eslint-disable-next-line jest/no-disabled-tests
    it.skip('prevents from closing the modal accidently if it has pending changes', async () => {
        const user = userEvent.setup();
        render(
            <ModalWizard id="🧙‍♂️" isDirty>
                <div>Step 1</div>
                <div>Step 2</div>
            </ModalWizard>,
            {initialState: {modals: [{id: '🧙‍♂️', isOpened: true}]}},
        );

        expect(screen.queryByText('Unsaved Changes')).not.toBeInTheDocument();

        await user.click(screen.getByRole('dialog'));
        await user.keyboard('{Escape}');

        expect(screen.getByText('Unsaved Changes')).toBeVisible();
        expect(screen.getByText('Step 1')).toBeVisible();
    });

    // eslint-disable-next-line jest/no-disabled-tests
    it.skip('does not prevent from closing the modal accidently if it has no pending changes', async () => {
        const user = userEvent.setup();
        render(
            <ModalWizard id="🧙‍♂️" isDirty={false}>
                <div>Step 1</div>
                <div>Step 2</div>
            </ModalWizard>,
            {initialState: {modals: [{id: '🧙‍♂️', isOpened: true}]}},
        );

        await user.click(screen.getByRole('dialog'));
        await user.keyboard('{Escape}');

        await waitForElementToBeRemoved(() => screen.queryByRole('dialog'));
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('changes the title depending on the step if a function was provided as title', async () => {
        const user = userEvent.setup();
        render(
            <ModalWizard id="🧙‍♂️" title={(currentStep: number) => (currentStep === 0 ? 'Title 1' : 'Title 2')}>
                <div>Step 1</div>
                <div>Step 2</div>
            </ModalWizard>,
            {initialState: {modals: [{id: '🧙‍♂️', isOpened: true}]}},
        );

        expect(screen.getByRole('heading', {name: /title 1/i})).toBeVisible();
        expect(screen.queryByRole('heading', {name: /title 2/i})).not.toBeInTheDocument();

        await user.click(screen.getByRole('button', {name: 'Next'}));

        expect(screen.queryByRole('heading', {name: /title 1/i})).not.toBeInTheDocument();
        expect(screen.getByRole('heading', {name: /title 2/i})).toBeVisible();
    });

    it('changes the footer depending on the step if a function was provided as modalFooterChildren', async () => {
        const user = userEvent.setup();
        render(
            <ModalWizard
                id="🧙‍♂️"
                modalFooterChildren={(currentStep: number) =>
                    currentStep === 0 ? 'Footer Children 1' : 'Footer Children 2'
                }
            >
                <div>Step 1</div>
                <div>Step 2</div>
            </ModalWizard>,
            {initialState: {modals: [{id: '🧙‍♂️', isOpened: true}]}},
        );

        expect(screen.getByText(/footer children 1/i)).toBeVisible();
        expect(screen.queryByText(/footer children 2/i)).not.toBeInTheDocument();

        await user.click(screen.getByRole('button', {name: 'Next'}));

        expect(screen.queryByText(/footer children 1/i)).not.toBeInTheDocument();
        expect(screen.getByText(/footer children 2/i)).toBeVisible();
    });

    it('replaces the finish button on the last step if a function was provided for renderFinishButton', async () => {
        const user = userEvent.setup();
        render(
            <ModalWizard
                id="🧙‍♂️"
                renderFinishButton={(isValid: boolean, close: () => void) => (
                    <Button primary name="We're at the last step!" enabled={isValid} onClick={() => onFinish(close)} />
                )}
            >
                <div>Step 1</div>
                <div>Step 2</div>
            </ModalWizard>,
            {initialState: {modals: [{id: '🧙‍♂️', isOpened: true}]}},
        );

        await user.click(screen.getByRole('button', {name: 'Next'}));

        expect(screen.queryByText(/finish/i)).not.toBeInTheDocument();
        expect(screen.getByText(/we\'re at the last step\!/i)).toBeVisible();
    });
});
