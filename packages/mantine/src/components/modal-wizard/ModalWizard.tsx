import {Box, CloseButton, Modal, ModalProps, Progress} from '@mantine/core';
import {Children, ReactElement, useEffect, useMemo, useState} from 'react';

import {Button} from '../button';
import {Header} from '../header';
import {StickyFooter} from '../sticky-footer';
import ModalWizardClasses from './ModalWizard.module.css';
import {ModalWizardStep, ModalWizardStepProps, ResolveStep} from './ModalWizardStep';

export interface ModalWizardProps extends Omit<ModalProps, 'centered' | 'title'> {
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
    onNext?: (newStep: number, setCurrentStep?: React.Dispatch<number>) => unknown;

    /**
     * A callback function that is executed when the user clicks on the previous button
     */
    onPrevious?: (newStep: number) => unknown;

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

    /**
     * Indicates if step validation should be performed when clicking on to the next step
     * If true, the next step will always be enabled
     *
     * @default false
     */
    isStepValidatedOnNext?: boolean;
}

interface ModalWizardType {
    (props: ModalWizardProps): ReactElement;

    Step: typeof ModalWizardStep;
}

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
    children,
    isStepValidatedOnNext,
    ...modalProps
}) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const modalSteps = (Children.toArray(children) as ReactElement[]).filter((child) => child.type === ModalWizardStep);

    const numberOfSteps = modalSteps.length;
    const isFirstStep = currentStepIndex === 0;
    const isLastStep = currentStepIndex === numberOfSteps - 1;
    const currentStep = modalSteps.filter((step: ReactElement, index: number) => index === currentStepIndex)[0];

    const {isValid} = isStepValidatedOnNext
        ? {isValid: true}
        : currentStep?.props?.validateStep?.(currentStepIndex, numberOfSteps) ?? {isValid: true};

    useEffect(() => {
        if (opened) {
            setCurrentStepIndex(0);
        }
    }, [opened]);

    const handleClose = (confirmDirty: boolean) => {
        if (confirmDirty) {
            const isModalDirty = isDirty?.() ?? false;
            if (isModalDirty) {
                const discardChanges = handleDirtyState?.() ?? true;
                if (!discardChanges) {
                    return;
                }
            }
        }
        onClose?.();
    };

    const resolveStepDependentProp = <P extends keyof ModalWizardStepProps>(
        prop: P,
    ): ResolveStep<ModalWizardStepProps[P]> =>
        typeof currentStep.props[prop] === 'function'
            ? currentStep.props[prop](currentStepIndex + 1, numberOfSteps)
            : currentStep.props[prop];

    const getProgress = useMemo(
        () => (currStepIndex: number) => {
            const totalNumberOfSteps = modalSteps.filter((step) => step.props.countsAsProgress).length;
            const numberOfCompletedSteps = modalSteps.filter(
                (step, index) => step.props.countsAsProgress && index <= currStepIndex,
            ).length;
            return (numberOfCompletedSteps / totalNumberOfSteps) * 100;
        },
        [],
    );

    return (
        <Modal
            opened={opened}
            classNames={{content: ModalWizardClasses.content, body: ModalWizardClasses.body}}
            centered
            onClose={() => handleClose(true)}
            withCloseButton={false}
            padding={0}
            {...modalProps}
        >
            <Header
                p="lg"
                pr="md"
                variant="modal"
                align="flex-start"
                description={resolveStepDependentProp('description')}
                borderBottom={!currentStep.props.showProgressBar}
            >
                {resolveStepDependentProp('title')}
                {resolveStepDependentProp('docLink') ? (
                    <Header.DocAnchor
                        href={resolveStepDependentProp('docLink')}
                        label={resolveStepDependentProp('docLinkTooltipLabel')}
                    />
                ) : null}
                <Header.Actions>
                    <CloseButton aria-label={'close-modal'} onClick={() => handleClose(true)} />
                </Header.Actions>
            </Header>
            {currentStep.props.showProgressBar && (
                <Progress color="navy.5" size="sm" radius={0} value={getProgress(currentStepIndex)} />
            )}
            <Box p="lg">{currentStep}</Box>
            <Box mt={'auto'}>
                <StickyFooter borderTop>
                    <Button
                        name={isFirstStep ? cancelButtonLabel : previousButtonLabel}
                        variant="outline"
                        onClick={() => {
                            if (isFirstStep) {
                                handleClose(true);
                            } else {
                                onPrevious?.(currentStepIndex - 1);
                                setCurrentStepIndex(currentStepIndex - 1);
                            }
                        }}
                    >
                        {isFirstStep ? cancelButtonLabel : previousButtonLabel}
                    </Button>

                    <Button
                        disabledTooltip={currentStep.props.disabledTooltipLabel}
                        disabled={!isValid}
                        onClick={() => {
                            if (isLastStep) {
                                onFinish?.() ?? handleClose(false);
                            } else {
                                onNext?.(currentStepIndex + 1, setCurrentStepIndex);

                                if (!isStepValidatedOnNext) {
                                    setCurrentStepIndex(currentStepIndex + 1);
                                }
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
