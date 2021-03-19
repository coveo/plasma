import classNames from 'classnames';
import * as React from 'react';
import {connect} from 'react-redux';

import {ConnectedProps, IDispatch, TooltipPlacement} from '../../utils';
import {Button} from '../button';
import {ModalActions} from '../modal/ModalActions';
import {IModalCompositeOwnProps, ModalCompositeConnected} from '../modal/ModalComposite';
import {UnsavedChangesModalProvider} from '../modal/UnsavedChangesModalProvider';
import {StepProgressBar} from '../stepProgressBar';

type DependsOnStep<T> = (currentStep: number, numberOfSteps: number) => T;

export interface ModalWizardProps
    extends Omit<
        IModalCompositeOwnProps,
        'modalBodyChildren' | 'validateShouldNavigate' | 'modalFooterChildren' | 'title'
    > {
    id: string;
    onFinish?: (close: () => void) => unknown;
    validateStep?: DependsOnStep<{isValid: boolean; message?: string}>;
    modalFooterChildren?: React.ReactNode | DependsOnStep<React.ReactNode>;
    title?: string | DependsOnStep<string>;
    isDirty?: boolean;
    cancelButtonLabel?: string;
    nextButtonLabel?: string;
    previousButtonLabel?: string;
    finishButtonLabel?: string;
}

const enhance = connect(null, (dispatch: IDispatch, {id}: ModalWizardProps) => ({
    close: () => dispatch(ModalActions.closeModal(id)),
}));

const ModalWizardDisconneted: React.FunctionComponent<ModalWizardProps & ConnectedProps<typeof enhance>> = ({
    id,
    title,
    close,
    onFinish,
    children,
    modalFooterChildren,
    validateStep,
    isDirty,
    cancelButtonLabel = 'Cancel',
    nextButtonLabel = 'Next',
    previousButtonLabel = 'Previous',
    finishButtonLabel = 'Finish',
    ...modalProps
}) => {
    const [currentStep, setCurrentStep] = React.useState(0);
    const steps = React.Children.toArray(children).filter(React.isValidElement) as React.ReactElement[];
    const numberOfSteps = steps.length;
    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === numberOfSteps - 1;
    const {isValid, message} = validateStep?.(currentStep, numberOfSteps) ?? {isValid: true};

    return (
        <UnsavedChangesModalProvider isDirty={isDirty}>
            {({promptBefore}) => (
                <ModalCompositeConnected
                    id={id}
                    modalBodyChildren={
                        <>
                            <StepProgressBar numberOfSteps={numberOfSteps} currentStep={currentStep} />
                            {steps.map((step: React.ReactElement, index: number) => {
                                const hidden = index !== currentStep;
                                return (
                                    <div className={classNames({hidden})} hidden={hidden} key={index}>
                                        {step}
                                    </div>
                                );
                            })}
                        </>
                    }
                    modalFooterChildren={
                        <>
                            {typeof modalFooterChildren === 'function'
                                ? modalFooterChildren(currentStep, numberOfSteps)
                                : modalFooterChildren}
                            <Button
                                name={isFirstStep ? cancelButtonLabel : previousButtonLabel}
                                onClick={() => {
                                    if (isFirstStep) {
                                        close();
                                    } else {
                                        setCurrentStep(currentStep - 1);
                                    }
                                }}
                                enabled
                            />
                            <Button
                                primary
                                name={isLastStep ? finishButtonLabel : nextButtonLabel}
                                enabled={isValid}
                                onClick={() => {
                                    if (isLastStep) {
                                        onFinish?.(close);
                                    } else {
                                        setCurrentStep(currentStep + 1);
                                    }
                                }}
                                tooltip={message}
                                tooltipPlacement={TooltipPlacement.Top}
                            />
                        </>
                    }
                    onAfterOpen={() => setCurrentStep(0)}
                    validateShouldNavigate={() => promptBefore(close)}
                    title={typeof title === 'function' ? title(currentStep, numberOfSteps) : title}
                    {...modalProps}
                />
            )}
        </UnsavedChangesModalProvider>
    );
};

export const ModalWizard = enhance(ModalWizardDisconneted);
