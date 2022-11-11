import {render, screen, userEvent} from '@test-utils';
import {ModalWizard} from '../ModalWizard';

describe('ModalWizard', () => {
    it('navigate slides using footer buttons', async () => {
        const user = userEvent.setup({delay: null});
        const modelSteps = [
            {
                docLink: 'https://google.com',
                title: (currentStep, numberOfSteps) => 'Current Step is: ' + currentStep,
                validateStep: (currentStep, numberOfSteps) => ({isValid: true}),
                element: <div> Slide 1</div>,
            },
            {
                docLink: 'https://google.com',
                title: (currentStep, numberOfSteps) => 'Current Step is: ' + currentStep,
                validateStep: (currentStep, numberOfSteps) => ({isValid: true}),
                element: <div> Slide 2</div>,
            },
            {
                docLink: 'https://google.com',
                title: (currentStep, numberOfSteps) => 'Current Step is: ' + currentStep,
                validateStep: (currentStep, numberOfSteps) => ({isValid: false}),
                element: <div> Slide 3</div>,
            },
            {
                docLink: 'https://google.com',
                title: (currentStep, numberOfSteps) => 'Current Step is: ' + currentStep,
                validateStep: (currentStep, numberOfSteps) => ({isValid: false}),
                element: <div> Unreachable slide</div>,
            },
        ];

        const isDirty = () => false;

        render(
            <ModalWizard
                closeButtonLabel="closebuttonlabel"
                isDirty={isDirty}
                handleDirtyState={() => confirm('Are you sure you want to close?')}
            >
                {modelSteps.map((model_item) => (
                    <ModalWizard.Step
                        docLink={model_item.docLink}
                        title={(currentStep, numberOfSteps) => 'Current Step is: ' + currentStep}
                        validateStep={model_item.validateStep}
                    >
                        {model_item.element}
                    </ModalWizard.Step>
                ))}
            </ModalWizard>
        );

        expect(
            screen.getByRole('heading', {
                name: /current step is: 1/i,
            })
        ).toBeInTheDocument();

        expect(screen.getByText(/slide 1/i)).toBeInTheDocument();

        expect(
            screen.getByRole('button', {
                name: /closebuttonlabel/i,
            })
        ).toBeInTheDocument();

        let nextButton = screen.getByRole('button', {
            name: /next/i,
        });
        expect(nextButton).toBeInTheDocument();

        await user.click(nextButton);

        expect(
            screen.getByRole('heading', {
                name: /current step is: 2/i,
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole('button', {
                name: /closebuttonlabel/i,
            })
        ).toBeInTheDocument();

        expect(screen.getByText(/slide 2/i)).toBeInTheDocument();

        expect(
            screen.getByRole('button', {
                name: /previous/i,
            })
        ).toBeInTheDocument();

        nextButton = screen.getByRole('button', {
            name: /next/i,
        });
        expect(nextButton).toBeInTheDocument();

        await user.click(nextButton);

        expect(
            screen.getByRole('heading', {
                name: /current step is: 3/i,
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole('button', {
                name: /closebuttonlabel/i,
            })
        ).toBeInTheDocument();

        expect(screen.getByText(/slide 3/i)).toBeInTheDocument();

        expect(
            screen.getByRole('button', {
                name: /previous/i,
            })
        ).toBeInTheDocument();

        nextButton = screen.getByRole('button', {
            name: /next/i,
        });

        expect(nextButton).toBeInTheDocument();
        expect(nextButton).toBeDisabled();

        await user.click(
            screen.getByRole('button', {
                name: /previous/i,
            })
        );

        expect(
            screen.getByRole('heading', {
                name: /current step is: 2/i,
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole('button', {
                name: /closebuttonlabel/i,
            })
        ).toBeInTheDocument();

        expect(screen.getByText(/slide 2/i)).toBeInTheDocument();

        expect(
            screen.getByRole('button', {
                name: /previous/i,
            })
        ).toBeInTheDocument();
    });

    it('modal wizard onClose', async () => {
        const user = userEvent.setup({delay: null});
        const modelSteps = [
            {
                docLink: 'https://google.com',
                title: (currentStep, numberOfSteps) => 'Current Step is: ' + currentStep,
                validateStep: (currentStep, numberOfSteps) => ({isValid: true}),
                element: <div> Slide 1</div>,
            },
        ];

        const isDirty = () => false;
        const onClose = jest.fn();

        render(
            <ModalWizard isDirty={isDirty} onClose={onClose} closeButtonLabel="closebuttonlabel">
                {modelSteps.map((model_item) => (
                    <ModalWizard.Step
                        docLink={model_item.docLink}
                        title={(currentStep, numberOfSteps) => 'Current Step is: ' + currentStep}
                        validateStep={model_item.validateStep}
                    >
                        {model_item.element}
                    </ModalWizard.Step>
                ))}
            </ModalWizard>
        );

        const closeButton = screen.getByRole('button', {
            name: /closebuttonlabel/i,
        });
        await user.click(closeButton);

        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('modal wizard onCancel', async () => {
        const user = userEvent.setup({delay: null});
        const modelSteps = [
            {
                docLink: 'https://google.com',
                title: (currentStep, numberOfSteps) => 'Current Step is: ' + currentStep,
                validateStep: (currentStep, numberOfSteps) => ({isValid: true}),
                element: <div> Slide 1</div>,
            },
        ];

        const isDirty = () => false;
        const onClose = jest.fn();

        render(
            <ModalWizard isDirty={isDirty} onClose={onClose}>
                {modelSteps.map((model_item) => (
                    <ModalWizard.Step
                        docLink={model_item.docLink}
                        title={(currentStep, numberOfSteps) => 'Current Step is: ' + currentStep}
                        validateStep={model_item.validateStep}
                    >
                        {model_item.element}
                    </ModalWizard.Step>
                ))}
            </ModalWizard>
        );

        const cancelButton = screen.getByRole('button', {
            name: /cancel/i,
        });
        await user.click(cancelButton);

        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('modal wizard onFinish', async () => {
        const user = userEvent.setup({delay: null});
        const modelSteps = [
            {
                docLink: 'https://google.com',
                title: (currentStep, numberOfSteps) => 'Current Step is: ' + currentStep,
                validateStep: (currentStep, numberOfSteps) => ({isValid: true}),
                element: <div> Slide 1</div>,
            },
        ];

        const isDirty = () => false;
        const onClose = jest.fn();
        const onFinish = jest.fn();

        render(
            <ModalWizard isDirty={isDirty} onClose={onClose} onFinish={onFinish}>
                {modelSteps.map((model_item) => (
                    <ModalWizard.Step
                        docLink={model_item.docLink}
                        title={(currentStep, numberOfSteps) => 'Current Step is: ' + currentStep}
                        validateStep={model_item.validateStep}
                    >
                        {model_item.element}
                    </ModalWizard.Step>
                ))}
            </ModalWizard>
        );

        const finishButton = screen.getByRole('button', {
            name: /finish/i,
        });

        await user.click(finishButton);
        expect(onFinish).toHaveBeenCalledTimes(1);
    });

    it('handle dirty state if user confirms close', async () => {
        const user = userEvent.setup({delay: null});
        const modelSteps = [
            {
                docLink: 'https://google.com',
                title: (currentStep, numberOfSteps) => 'Current Step is: ' + currentStep,
                validateStep: (currentStep, numberOfSteps) => ({isValid: true}),
                element: <div> Slide 1</div>,
            },
        ];

        const isDirty = () => true;
        const onClose = jest.fn();
        const handleDirtyState = jest.fn();

        render(
            <ModalWizard
                isDirty={isDirty}
                onClose={onClose}
                handleDirtyState={handleDirtyState}
                closeButtonLabel="closebuttonlabel"
            >
                {modelSteps.map((model_item) => (
                    <ModalWizard.Step
                        docLink={model_item.docLink}
                        title={(currentStep, numberOfSteps) => 'Current Step is: ' + currentStep}
                        validateStep={model_item.validateStep}
                    >
                        {model_item.element}
                    </ModalWizard.Step>
                ))}
            </ModalWizard>
        );
        const closeButton = screen.getByRole('button', {
            name: /closebuttonlabel/i,
        });

        handleDirtyState.mockReturnValueOnce(true);
        await user.click(closeButton);

        expect(handleDirtyState).toHaveBeenCalledTimes(1);
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('handle dirty state if user confirms cancel', async () => {
        const user = userEvent.setup({delay: null});
        const modelSteps = [
            {
                docLink: 'https://google.com',
                title: (currentStep, numberOfSteps) => 'Current Step is: ' + currentStep,
                validateStep: (currentStep, numberOfSteps) => ({isValid: true}),
                element: <div> Slide 1</div>,
            },
        ];

        const isDirty = () => true;
        const onClose = jest.fn();
        const handleDirtyState = jest.fn();

        render(
            <ModalWizard
                isDirty={isDirty}
                onClose={onClose}
                handleDirtyState={handleDirtyState}
                closeButtonLabel="closebuttonlabel"
            >
                {modelSteps.map((model_item) => (
                    <ModalWizard.Step
                        docLink={model_item.docLink}
                        title={(currentStep, numberOfSteps) => 'Current Step is: ' + currentStep}
                        validateStep={model_item.validateStep}
                    >
                        {model_item.element}
                    </ModalWizard.Step>
                ))}
            </ModalWizard>
        );
        const closeButton = screen.getByRole('button', {
            name: /closebuttonlabel/i,
        });

        handleDirtyState.mockReturnValueOnce(false);
        await user.click(closeButton);
        expect(handleDirtyState).toHaveBeenCalledTimes(1);
        expect(onClose).toHaveBeenCalledTimes(0);
    });
});
