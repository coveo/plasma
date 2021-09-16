import classNames from 'classnames';
import * as React from 'react';
import {connect} from 'react-redux';

import {ConnectedProps, IDispatch, TooltipPlacement} from '../../utils';
import {useMountedState} from '../../utils/useMountedState';
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
    onNext?: () => unknown;
    onPrevious?: () => unknown;
    onCancel?: () => unknown;
}

const enhance = connect<null, {close: () => void}, React.PropsWithChildren<ModalWizardProps>>(
    null,
    (dispatch: IDispatch, {id}: ModalWizardProps) => ({
        close: () => dispatch(ModalActions.closeModal(id)),
    })
);

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
    onNext,
    onPrevious,
    onCancel,
    ...modalProps
}) => {
    const [currentStep, setCurrentStep] = React.useState(0);
    const steps = React.Children.toArray(children).filter(React.isValidElement) as React.ReactElement[];
    const numberOfSteps = steps.length;
    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === numberOfSteps - 1;
    const {isValid, message} = validateStep?.(currentStep, numberOfSteps) ?? {isValid: true};
    const isMounted = useMountedState();

    return (
        <UnsavedChangesModalProvider isDirty={isDirty} confirmationModalId={`${id}-unsaved-modal`}>
            {({promptBefore}) => (
                <ModalCompositeConnected
                    id={id}
                    modalHeaderChildren={<StepProgressBar numberOfSteps={numberOfSteps} currentStep={currentStep} />}
                    modalHeaderClasses={['p0 flex flex-column flex-start space-between full-content-x']}
                    modalBodyChildren={
                        <>
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
                                        onCancel?.();
                                        close();
                                    } else {
                                        onPrevious?.();
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
                                        onNext?.();
                                        setCurrentStep(currentStep + 1);
                                    }
                                }}
                                tooltip={message}
                                tooltipPlacement={TooltipPlacement.Top}
                            />
                        </>
                    }
                    onAfterOpen={() => {
                        if (isMounted()) {
                            setCurrentStep(0);
                        }
                    }}
                    validateShouldNavigate={() => promptBefore(close)}
                    title={typeof title === 'function' ? title(currentStep, numberOfSteps) : title}
                    {...modalProps}
                />
            )}
        </UnsavedChangesModalProvider>
    );
};

export const ModalWizard = enhance(ModalWizardDisconneted);
