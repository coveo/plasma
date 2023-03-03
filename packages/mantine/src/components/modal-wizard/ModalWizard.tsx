import {Box, CloseButton, createStyles, DefaultProps, Modal, ModalProps, Progress, Selectors} from '@mantine/core';
import {Children, ReactElement, useEffect, useMemo, useState} from 'react';

import {Button} from '../button';
import {Header} from '../header';
import {StickyFooter} from '../sticky-footer';
import {ModalWizardStep, ModalWizardStepProps, ResolveStep} from './ModalWizardStep';

const useStyles = createStyles(() => ({
    content: {
        display: 'flex',
        flexDirection: 'column',
    },
    body: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
}));

type ModalWizardStylesNames = Selectors<typeof useStyles>;

export interface ModalWizardProps
    extends Omit<DefaultProps<ModalWizardStylesNames>, 'classNames' | 'styles'>,
        Omit<ModalProps, 'centered' | 'title'> {
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
    styles,
    unstyled,
    children,
    ...modalProps
}) => {
    const {
        classes: {content, body},
        cx,
    } = useStyles(null, {
        name: 'ModalWizard',
        classNames,
        styles,
        unstyled,
    });

    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const modalSteps = (Children.toArray(children) as ReactElement[]).filter((child) => child.type === ModalWizardStep);

    const numberOfSteps = modalSteps.length;
    const numberOfStepsCountAsProgress = modalSteps.filter((step) => step.props.countsAsProgress).length;
    const isFirstStep = currentStepIndex === 0;
    const isLastStep = currentStepIndex === numberOfSteps - 1;
    const currentStep = modalSteps.filter((step: ReactElement, index: number) => index === currentStepIndex)[0];

    const {isValid} = currentStep?.props?.validateStep?.(currentStepIndex, numberOfSteps) ?? {isValid: true};

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

    const getProgress = (currStepIndex: number) => {
        const validSteps = modalSteps.filter(
            (step, index) => step.props.countsAsProgress && index <= currStepIndex
        ).length;
        return (validSteps / numberOfStepsCountAsProgress) * 100;
    };

    const resolveStepDependentProp = <P extends keyof ModalWizardStepProps>(
        prop: P
    ): ResolveStep<ModalWizardStepProps[P]> =>
        typeof currentStep.props[prop] === 'function'
            ? currentStep.props[prop](currentStepIndex + 1, numberOfSteps)
            : currentStep.props[prop];

    const getProgressMemo = useMemo(() => getProgress(currentStepIndex), [currentStepIndex]);
    return (
        <Modal
            opened={opened}
            classNames={{content: cx(content, classNames?.content), body: cx(body, classNames?.body)}}
            centered
            onClose={() => handleClose(true)}
            withCloseButton={false}
            padding={0}
            {...modalProps}
        >
            <Header p="lg" pr="md" variant="modal" description={resolveStepDependentProp('description')}>
                {resolveStepDependentProp('title')}
                {resolveStepDependentProp('docLink') ? (
                    <Header.DocAnchor
                        href={resolveStepDependentProp('docLink')}
                        label={resolveStepDependentProp('docLinkTooltipLabel')}
                    />
                ) : null}
                <Header.Actions>
                    <CloseButton aria-label={modalProps.closeButtonLabel} onClick={() => handleClose(true)} />
                </Header.Actions>
            </Header>
            {currentStep.props.showProgressBar && (
                <Progress color="navy.5" size="sm" radius={0} value={getProgressMemo} />
            )}
            <Box p="lg">{currentStep}</Box>
            <Box
                sx={{
                    marginTop: 'auto',
                }}
            >
                <StickyFooter borderTop>
                    <Button
                        name={isFirstStep ? cancelButtonLabel : previousButtonLabel}
                        variant="outline"
                        onClick={() => {
                            if (isFirstStep) {
                                handleClose(true);
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
                        onClick={() => {
                            if (isLastStep) {
                                onFinish?.() ?? handleClose(false);
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
