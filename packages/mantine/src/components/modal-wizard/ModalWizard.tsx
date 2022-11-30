import {Box, Button, createStyles, Modal, ModalProps, Progress} from '@mantine/core';
import {Children, ReactElement, useMemo, useState} from 'react';
import {StickyFooter} from '../sticky-footer';
import {ModalWizardStep} from './ModalWizardStep';
import {Header} from '../header';

interface ModalWizardProps extends Omit<ModalProps, 'centered' | 'title'> {
    /**
     * The label of the cancel button
     *
     * @default "Cancel"
     */
    cancelButtonLabel?: string;

    /**
     * The label of the next button
     *
     * @default "Next"
     */
    nextButtonLabel?: string;

    /**
     * The label of the previous button
     *
     * @default "Previous"
     */
    previousButtonLabel?: string;

    /**
     * The label of the finish button
     *
     * @default "Finish"
     */
    finishButtonLabel?: string;

    /**
     * A callback function that is executed when the user clicks on the next button
     */
    onNext?: () => unknown;

    /**
     * A callback function that is executed when the user clicks on the previous button
     */
    onPrevious?: () => unknown;

    /**
     * A function that is executed when user completes all the steps.
     *
     * @param close A function that closes the modal when called.
     */
    onFinish?: () => unknown;

    /**
     * Determine if user interacted with any steps in the modal wizard
     */
    isDirty?: () => boolean;

    /**
     * A function to confirm close if the state is dirty before closing
     */
    handleDirtyState?: () => boolean;

    /**
     * Children to display in modal wizard
     * */
    children?: Array<ReturnType<typeof ModalWizardStep>>;
}

interface ModalWizardType {
    (props: ModalWizardProps): ReactElement;

    Step: typeof ModalWizardStep;
}

const useStyles = createStyles(() => ({
    modal: {
        display: 'flex',
        flexDirection: 'column',
    },
    body: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
}));

export const ModalWizard: ModalWizardType = ({
    cancelButtonLabel = 'Cancel',
    nextButtonLabel = 'Next',
    previousButtonLabel = 'Previous',
    finishButtonLabel = 'Finish',
    opened,
    onNext,
    onPrevious,
    onClose,
    onFinish,
    isDirty,
    handleDirtyState,
    classNames,
    children,
    ...modalProps
}) => {
    const {
        classes: {modal, body},
        cx,
    } = useStyles();

    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const modalSteps = (Children.toArray(children) as ReactElement[]).filter((child) => child.type === ModalWizardStep);

    const numberOfSteps = modalSteps.length;
    const numberOfStepsCountAsProgress = modalSteps.filter((step) => step.props.countsAsProgress).length;
    const isFirstStep = currentStepIndex === 0;
    const isLastStep = currentStepIndex === numberOfSteps - 1;
    const currentStep = modalSteps.filter((step: ReactElement, index: number) => index === currentStepIndex)[0];

    const {isValid} = currentStep?.props?.validateStep?.(currentStepIndex, numberOfSteps) ?? {isValid: true};
    const isModalDirty = isDirty && isDirty();

    const closeModalWizard = () => {
        if (isModalDirty && handleDirtyState) {
            handleDirtyState() && onClose?.();
        } else {
            onClose?.();
        }
    };

    const getProgress = (currStepIndex: number) => {
        const validSteps = modalSteps.filter(
            (step, index) => step.props.countsAsProgress && index <= currStepIndex
        ).length;
        return (validSteps / numberOfStepsCountAsProgress) * 100;
    };

    const getProgressMemo = useMemo(() => getProgress(currentStepIndex), [currentStepIndex]);

    return (
        <Modal
            opened={opened}
            classNames={{modal: cx(modal, classNames.modal), body: cx(body, classNames.body)}}
            centered
            title={
                <Header
                    docLink={currentStep.props.docLink}
                    description={
                        typeof currentStep.props.description === 'function'
                            ? currentStep.props.description(currentStepIndex + 1, numberOfSteps)
                            : currentStep.props.description
                    }
                    py={0}
                    px={0}
                >
                    {typeof currentStep.props.title === 'function'
                        ? currentStep.props.title(currentStepIndex + 1, numberOfSteps)
                        : currentStep.props.title}
                </Header>
            }
            onClose={closeModalWizard}
            {...modalProps}
        >
            {currentStep.props.showProgressBar && <Progress color="teal" size="lg" value={getProgressMemo} />}
            {currentStep}
            <Box
                sx={(theme) => ({
                    marginTop: 'auto',
                })}
            >
                <StickyFooter px={0} py="sm" borderTop>
                    <Button
                        name={isFirstStep ? cancelButtonLabel : previousButtonLabel}
                        disabled={false}
                        size="sm"
                        variant="outline"
                        onClick={() => {
                            if (isFirstStep) {
                                closeModalWizard();
                            } else {
                                onPrevious?.();
                                setCurrentStepIndex(currentStepIndex - 1);
                            }
                        }}
                    >
                        {isFirstStep ? cancelButtonLabel : previousButtonLabel}
                    </Button>

                    <Button
                        disabled={!isValid}
                        size="sm"
                        onClick={() => {
                            if (isLastStep) {
                                onFinish ? onFinish() : onClose();
                            } else {
                                onNext?.();
                                setCurrentStepIndex(currentStepIndex + 1);
                            }
                        }}
                    >
                        {isLastStep ? finishButtonLabel : nextButtonLabel}
                    </Button>
                </StickyFooter>
            </Box>
        </Modal>
    );
};

ModalWizard.Step = ModalWizardStep;
