import {render, screen, userEvent, waitFor} from '@test-utils';

import {ModalWizard} from '../ModalWizard';

describe('ModalWizard', () => {
    it('navigate modal steps using footer buttons', async () => {
        const user = userEvent.setup();

        const modelSteps = [
            {
                id: 'step1',
                docLink: 'https://google.com',
                title: (currentStep: string) => 'Current Step is: ' + currentStep,
                validateStep: () => ({isValid: true}),
                element: <div> Slide 1</div>,
            },
            {
                id: 'step2',
                docLink: 'https://google.com',
                title: (currentStep: string) => 'Current Step is: ' + currentStep,
                validateStep: () => ({isValid: true}),
                element: <div> Slide 2</div>,
            },
            {
                id: 'step3',
                docLink: 'https://google.com',
                title: (currentStep: string) => 'Current Step is: ' + currentStep,
                validateStep: () => ({isValid: false}),
                element: <div> Slide 3</div>,
            },
            {
                id: 'step4',
                docLink: 'https://google.com',
                title: (currentStep: string) => 'Current Step is: ' + currentStep,
                validateStep: () => ({isValid: false}),
                element: <div> Unreachable slide</div>,
            },
        ];

        const isDirty = () => false;
        const onNextSpy = vi.fn();
        const onPreviousSpy = vi.fn();

        render(
            <ModalWizard
                isDirty={isDirty}
                handleDirtyState={() => confirm('Are you sure you want to close?')}
                opened={true}
                onClose={undefined}
                onNext={onNextSpy}
                onPrevious={onPreviousSpy}
            >
                {modelSteps.map((step) => (
                    <ModalWizard.Step
                        key={step.id}
                        docLink={step.docLink}
                        title={(currentStep) => 'Current Step is: ' + currentStep}
                        validateStep={step.validateStep}
                    >
                        {step.element}
                    </ModalWizard.Step>
                ))}
            </ModalWizard>,
        );

        expect(
            screen.getByRole('heading', {
                name: /current step is: 1/i,
            }),
        ).toBeInTheDocument();

        expect(screen.getByText(/slide 1/i)).toBeInTheDocument();

        expect(
            screen.getByRole('button', {
                name: /close-modal/i,
            }),
        ).toBeInTheDocument();

        let nextButton = screen.getByRole('button', {
            name: /next/i,
        });
        expect(nextButton).toBeInTheDocument();

        await user.click(nextButton);

        expect(
            screen.getByRole('heading', {
                name: /current step is: 2/i,
            }),
        ).toBeInTheDocument();

        expect(
            screen.getByRole('button', {
                name: /close-modal/i,
            }),
        ).toBeInTheDocument();

        expect(screen.getByText(/slide 2/i)).toBeInTheDocument();

        expect(
            screen.getByRole('button', {
                name: /previous/i,
            }),
        ).toBeInTheDocument();

        nextButton = screen.getByRole('button', {
            name: /next/i,
        });
        expect(nextButton).toBeInTheDocument();

        await user.click(nextButton);

        expect(
            screen.getByRole('heading', {
                name: /current step is: 3/i,
            }),
        ).toBeInTheDocument();

        expect(
            screen.getByRole('button', {
                name: /close-modal/i,
            }),
        ).toBeInTheDocument();

        expect(screen.getByText(/slide 3/i)).toBeInTheDocument();

        expect(
            screen.getByRole('button', {
                name: /previous/i,
            }),
        ).toBeInTheDocument();

        nextButton = screen.getByRole('button', {
            name: /next/i,
        });

        expect(nextButton).toBeInTheDocument();
        expect(nextButton).toBeDisabled();

        await user.click(
            screen.getByRole('button', {
                name: /previous/i,
            }),
        );

        expect(
            screen.getByRole('heading', {
                name: /current step is: 2/i,
            }),
        ).toBeInTheDocument();

        expect(
            screen.getByRole('button', {
                name: /close-modal/i,
            }),
        ).toBeInTheDocument();

        expect(screen.getByText(/slide 2/i)).toBeInTheDocument();

        expect(
            screen.getByRole('button', {
                name: /previous/i,
            }),
        ).toBeInTheDocument();
    });

    it('calls the onClose prop when closing the modal', async () => {
        const user = userEvent.setup();

        const modelSteps = [
            {
                id: 'step1',
                docLink: 'https://google.com',
                title: (currentStep: string) => 'Current Step is: ' + currentStep,
                validateStep: () => ({isValid: true}),
                element: <div> Slide 1</div>,
            },
        ];

        const isDirty = () => false;
        const onClose = vi.fn();

        render(
            <ModalWizard isDirty={isDirty} onClose={onClose} opened={true}>
                {modelSteps.map((model_item) => (
                    <ModalWizard.Step
                        key={model_item.id}
                        docLink={model_item.docLink}
                        title={(currentStep) => 'Current Step is: ' + currentStep}
                        validateStep={model_item.validateStep}
                    >
                        {model_item.element}
                    </ModalWizard.Step>
                ))}
            </ModalWizard>,
        );

        const closeButton = screen.getByRole('button', {
            name: /close-modal/i,
        });
        await user.click(closeButton);

        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('closes the modal when clicking on cancel', async () => {
        const user = userEvent.setup();
        const modelSteps = [
            {
                id: 'step1',
                docLink: 'https://google.com',
                title: (currentStep: string) => 'Current Step is: ' + currentStep,
                validateStep: () => ({isValid: true}),
                element: <div> Slide 1</div>,
            },
        ];

        const isDirty = () => false;
        const onClose = vi.fn();

        render(
            <ModalWizard isDirty={isDirty} onClose={onClose} opened={true}>
                {modelSteps.map((model_item) => (
                    <ModalWizard.Step
                        key={model_item.id}
                        docLink={model_item.docLink}
                        title={(currentStep) => 'Current Step is: ' + currentStep}
                        validateStep={model_item.validateStep}
                    >
                        {model_item.element}
                    </ModalWizard.Step>
                ))}
            </ModalWizard>,
        );

        const cancelButton = screen.getByRole('button', {
            name: /cancel/i,
        });
        await user.click(cancelButton);

        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('calls onFinish prop when clicking on finish button', async () => {
        const user = userEvent.setup();
        const modelSteps = [
            {
                id: 'step1',
                docLink: 'https://google.com',
                title: (currentStep: string) => 'Current Step is: ' + currentStep,
                validateStep: () => ({isValid: true}),
                element: <div> Slide 1</div>,
            },
        ];

        const isDirty = () => false;
        const onClose = vi.fn();
        const onFinish = vi.fn();

        render(
            <ModalWizard isDirty={isDirty} onClose={onClose} onFinish={onFinish} opened={true}>
                {modelSteps.map((model_item) => (
                    <ModalWizard.Step
                        key={model_item.id}
                        docLink={model_item.docLink}
                        title={(currentStep) => 'Current Step is: ' + currentStep}
                        validateStep={model_item.validateStep}
                    >
                        {model_item.element}
                    </ModalWizard.Step>
                ))}
            </ModalWizard>,
        );

        const finishButton = screen.getByRole('button', {
            name: /finish/i,
        });

        await user.click(finishButton);
        expect(onFinish).toHaveBeenCalledTimes(1);
    });

    it('triggers handleDirty callback when the modal wizard has dirty state', async () => {
        const user = userEvent.setup();
        const modelSteps = [
            {
                id: 'step1',
                docLink: 'https://google.com',
                title: (currentStep: string) => 'Current Step is: ' + currentStep,
                validateStep: () => ({isValid: true}),
                element: <div> Slide 1</div>,
            },
        ];

        const isDirty = () => true;
        const onClose = vi.fn();
        const handleDirtyState = vi.fn();

        render(
            <ModalWizard isDirty={isDirty} onClose={onClose} handleDirtyState={handleDirtyState} opened={true}>
                {modelSteps.map((model_item) => (
                    <ModalWizard.Step
                        key={model_item.id}
                        docLink={model_item.docLink}
                        title={(currentStep) => 'Current Step is: ' + currentStep}
                        validateStep={model_item.validateStep}
                    >
                        {model_item.element}
                    </ModalWizard.Step>
                ))}
            </ModalWizard>,
        );
        const closeButton = screen.getByRole('button', {
            name: /close-modal/i,
        });

        handleDirtyState.mockReturnValueOnce(true);
        await user.click(closeButton);

        expect(handleDirtyState).toHaveBeenCalledTimes(1);
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('close the modal if user confirms close when the modal wizard has dirty state', async () => {
        const user = userEvent.setup();
        const modelSteps = [
            {
                id: 'step1',
                docLink: 'https://google.com',
                title: (currentStep: string) => 'Current Step is: ' + currentStep,
                validateStep: () => ({isValid: true}),
                element: <div> Slide 1</div>,
            },
        ];

        const isDirty = () => true;
        const onClose = vi.fn();
        const handleDirtyState = vi.fn();

        render(
            <ModalWizard isDirty={isDirty} onClose={onClose} handleDirtyState={handleDirtyState} opened={true}>
                {modelSteps.map((model_item) => (
                    <ModalWizard.Step
                        key={model_item.id}
                        docLink={model_item.docLink}
                        title={(currentStep) => 'Current Step is: ' + currentStep}
                        validateStep={model_item.validateStep}
                    >
                        {model_item.element}
                    </ModalWizard.Step>
                ))}
            </ModalWizard>,
        );
        const closeButton = screen.getByRole('button', {
            name: /close-modal/i,
        });

        handleDirtyState.mockReturnValueOnce(false);
        await user.click(closeButton);
        expect(handleDirtyState).toHaveBeenCalledTimes(1);
        expect(onClose).toHaveBeenCalledTimes(0);
    });

    it('hides the progress bar when showProgressBar is false for a given step', async () => {
        const user = userEvent.setup();
        render(
            <ModalWizard opened={true} onClose={vi.fn()}>
                <ModalWizard.Step title="Step 1" validateStep={() => ({isValid: true})} showProgressBar={false}>
                    Content step 1
                </ModalWizard.Step>
                <ModalWizard.Step title="Step 2" validateStep={() => ({isValid: true})}>
                    Content step 2
                </ModalWizard.Step>
            </ModalWizard>,
        );

        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();

        await user.click(screen.getByRole('button', {name: /next/i}));

        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    it('enables the next step button if isStepValidatedOnNext is provided', async () => {
        render(
            <ModalWizard opened={true} onClose={vi.fn()} isStepValidatedOnNext>
                <ModalWizard.Step title="Step 1" showProgressBar={false} validateStep={() => ({isValid: false})}>
                    Content step 1
                </ModalWizard.Step>
                <ModalWizard.Step title="Step 2" validateStep={() => ({isValid: false})}>
                    Content step 2
                </ModalWizard.Step>
            </ModalWizard>,
        );

        expect(screen.getByRole('button', {name: /next/i})).toBeEnabled();
    });

    it('enables the next step button in accordance to validateStep if isStepValidatedOnNext is not provided', async () => {
        const user = userEvent.setup();

        render(
            <ModalWizard opened={true} onClose={vi.fn()}>
                <ModalWizard.Step title="Step 1" showProgressBar={false} validateStep={() => ({isValid: true})}>
                    Content step 1
                </ModalWizard.Step>
                <ModalWizard.Step title="Step 2" validateStep={() => ({isValid: false})}>
                    Content step 2
                </ModalWizard.Step>
            </ModalWizard>,
        );

        expect(screen.getByRole('button', {name: /next/i})).toBeEnabled();
        await user.click(screen.getByRole('button', {name: /next/i}));
        expect(screen.getByRole('button', {name: /finish/i})).toBeDisabled();
    });

    describe('disabledTooltipLabel props', () => {
        it('display a tooltip when a step is invalid and a label is passed', async () => {
            const user = userEvent.setup();

            render(
                <ModalWizard opened={true} onClose={vi.fn()}>
                    <ModalWizard.Step title="Step 1" showProgressBar={false} validateStep={() => ({isValid: true})}>
                        Content step 1
                    </ModalWizard.Step>
                    <ModalWizard.Step
                        title="Step 2"
                        validateStep={() => ({isValid: false})}
                        disabledTooltipLabel="test tooltip label"
                    >
                        Content step 2
                    </ModalWizard.Step>
                </ModalWizard>,
            );

            expect(screen.getByRole('button', {name: /next/i})).toBeEnabled();
            await user.click(screen.getByRole('button', {name: /next/i}));
            const finishButton = screen.getByRole('button', {name: /finish/i});
            expect(finishButton).toBeDisabled();
            await user.hover(finishButton.parentElement);
            await waitFor(() => expect(screen.getByText('test tooltip label')).toBeVisible());
        });

        it('does not display the tooltip if the step is validated even if the props is passed', async () => {
            const user = userEvent.setup();
            render(
                <ModalWizard opened={true} onClose={vi.fn()}>
                    <ModalWizard.Step title="Step 1" showProgressBar={false} validateStep={() => ({isValid: true})}>
                        Content step 1
                    </ModalWizard.Step>
                    <ModalWizard.Step
                        title="Step 2"
                        validateStep={() => ({isValid: true})}
                        disabledTooltipLabel="test tooltip label"
                    >
                        Content step 2
                    </ModalWizard.Step>
                </ModalWizard>,
            );

            expect(screen.getByRole('button', {name: /next/i})).toBeEnabled();
            await user.click(screen.getByRole('button', {name: /next/i}));
            const finishButton = screen.getByRole('button', {name: /finish/i});
            expect(finishButton).toBeEnabled();
            await user.hover(finishButton.parentElement);
            expect(screen.queryByText('test tooltip label')).not.toBeInTheDocument();
        });
    });
});
