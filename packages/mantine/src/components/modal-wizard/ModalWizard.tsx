import {Button, Modal, Progress} from '@mantine/core';
import {Children, ReactElement, useMemo, useState} from 'react';
import {StickyFooter} from '../sticky-footer';
import {ModalWizardStep} from './ModalWizardStep';
import {Header} from '../header';

interface ModalWizardProps {
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
     * A callback function that is executed when the user clicks on the cancel button
     */

    onClose?: () => unknown;

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
     * Props to pass to each modal
     */
    modalProps?: any;

    /**
     * Classname for modal
     */
    modalClassName?: any;

    /**
     * Label for close button
     */
    closeButtonLabel?: string;

    /**
     * Props for progress bar
     */
    progressBarProps?: any;

    /**
     * Props for action buttons
     */
    buttonProps?: any;

    /**
     * Children to display in modal wizard
     * */
    children?: Array<ReturnType<typeof ModalWizardStep>>;
}

interface ModalWizardType {
    <T>(props: ModalWizardProps): ReactElement;

    Step: typeof ModalWizardStep;
}

export const ModalWizard: ModalWizardType = ({
    cancelButtonLabel = 'Cancel',
    nextButtonLabel = 'Next',
    previousButtonLabel = 'Previous',
    finishButtonLabel = 'Finish',
    onNext,
    onPrevious,
    onClose,
    onFinish,
    isDirty,
    modalProps,
    handleDirtyState,
    modalClassName,
    progressBarProps,
    buttonProps,
    closeButtonLabel,
    children,
}) => {
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
            opened
            classNames={modalClassName}
            centered
            closeButtonLabel={closeButtonLabel}
            title={
                <Header
                    docLink={currentStep.props.docLink}
                    description={
                        typeof currentStep.props.description === 'function'
                            ? currentStep.props.description(currentStepIndex + 1, numberOfSteps)
                            : currentStep.props.description
                    }
                    py={null}
                    px={null}
                >
                    {typeof currentStep.props.title === 'function'
                        ? currentStep.props.title(currentStepIndex + 1, numberOfSteps)
                        : currentStep.props.title}
                </Header>
            }
            onClose={closeModalWizard}
            {...modalProps}
        >
            {currentStep.props.showProgressBar && <Progress value={getProgressMemo} {...progressBarProps} />}
            {currentStep}
            <StickyFooter borderTop py={null} px={null} pt="md">
                <Button
                    name={isFirstStep ? cancelButtonLabel : previousButtonLabel}
                    disabled={false}
                    size="md"
                    variant="outline"
                    onClick={() => {
                        if (isFirstStep) {
                            closeModalWizard();
                        } else {
                            onPrevious?.();
                            setCurrentStepIndex(currentStepIndex - 1);
                        }
                    }}
                    {...buttonProps}
                >
                    {isFirstStep ? cancelButtonLabel : previousButtonLabel}
                </Button>

                <Button
                    disabled={!isValid}
                    size="md"
                    onClick={() => {
                        if (isLastStep) {
                            onFinish ? onFinish() : onClose();
                        } else {
                            onNext?.();
                            setCurrentStepIndex(currentStepIndex + 1);
                        }
                    }}
                    {...buttonProps}
                >
                    {isLastStep ? finishButtonLabel : nextButtonLabel}
                </Button>
            </StickyFooter>
        </Modal>
    );
};

ModalWizard.Step = ModalWizardStep;
