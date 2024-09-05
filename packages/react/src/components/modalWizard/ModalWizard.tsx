import classNames from 'clsx';
import {Children, FunctionComponent, isValidElement, ReactElement, ReactNode, useState} from 'react';
import {useDispatch} from 'react-redux';

import {IDispatch, TooltipPlacement} from '../../utils';
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
    /**
     * A unique identifier that will be used to identify the modal in the PlasmaState. Among other things this is the identifer that will be used to open the wizard.
     */
    id: string;
    /**
     * A function that is executed when user completes all the steps.
     *
     * @param close A function that closes the modal when called.
     */
    onFinish?: (close: () => void) => unknown;
    /**
     * A function that determines whether the current step is valid or not
     *
     * @param currentStep The step at is currently displayed in the wizard
     * @param numberOfSteps The total number of steps to reach completion of the wizard. Useful to know if the current step is the last step.
     * @default () => ({isValid: true})
     */
    validateStep?: DependsOnStep<{isValid: boolean; message?: string}>;
    /**
     * The title of the modal. The title can be dependent on the current step if needed, to do so pass in a function that accepts the same params as the validateStep prop.
     */
    title?: string | DependsOnStep<string>;
    /**
     * Determines what needs to be rendered in the modal footer. The content of the footer can be dependent on the current step by using a render function
     */
    modalFooterChildren?: ReactNode | DependsOnStep<ReactNode>;
    /**
     * Whether the wizard should warn about unsaved changes when the user unexpectedly closes the modal
     */
    isDirty?: boolean;
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
    onCancel?: () => unknown;
    /**
     * Finish button to display on the last step
     */
    renderFinishButton?: (isValid: boolean, close: () => void) => React.ReactElement;
    children?: ReactNode;
}

/**
 * @deprecated Use Mantine Modal instead: https://mantine.dev/core/modal/
 */
export const ModalWizard: FunctionComponent<ModalWizardProps> = ({
    id,
    title,
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
    renderFinishButton,
    ...modalProps
}) => {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = Children.toArray(children).filter(isValidElement) as ReactElement[];
    const numberOfSteps = steps.length;
    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === numberOfSteps - 1;
    const {isValid, message} = validateStep?.(currentStep, numberOfSteps) ?? {isValid: true};
    const isMounted = useMountedState();
    const dispatch: IDispatch = useDispatch();
    const close = () => dispatch(ModalActions.closeModal(id));

    return (
        <UnsavedChangesModalProvider isDirty={isDirty} confirmationModalId={`${id}-unsaved-modal`}>
            {({promptBefore}) => (
                <ModalCompositeConnected
                    id={id}
                    modalHeaderChildren={<StepProgressBar numberOfSteps={numberOfSteps} currentStep={currentStep} />}
                    modalHeaderClasses={['p0 flex flex-column flex-start space-between full-content-x modal-wizard']}
                    modalBodyChildren={
                        <>
                            {steps.map((step: ReactElement, index: number) => {
                                const hidden = index !== currentStep;
                                return (
                                    <div className={classNames({hidden}, 'full-content-y')} hidden={hidden} key={index}>
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
                            {!!renderFinishButton && isLastStep ? (
                                renderFinishButton?.(isValid, close)
                            ) : (
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
                            )}
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
