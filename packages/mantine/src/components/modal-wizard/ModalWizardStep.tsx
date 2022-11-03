import {FunctionComponent, ReactElement} from 'react';

type DependsOnStep<T> = (currentStep: number, numberOfSteps: number) => T;

export interface ModalWizardStepProps {
    /**
     * The title of the current step. The title can be dependent on the current step if needed
     */
    title?: string | ReactElement | DependsOnStep<string | ReactElement>;

    /**
     * The description of the current step. The description can be dependent on the current step if needed
     */
    description?: string | ReactElement | DependsOnStep<string | ReactElement>;

    /**
     * A link to the documentation for the current step
     */
    docLink: string;

    /**
     * A tooltip label for the docLink
     */
    docLinkTooltipLabel?: string | ReactElement | DependsOnStep<string | ReactElement>;

    /**
     * A function to validate the current step, it determines if the next step should be enabled or not.
     */
    validateStep: (currentStep: any, numberOfSteps: any) => {isValid: boolean; messsage?: unknown};

    /**
     * Show progress bar at this step
     *
     * @default true
     */
    showProgressBar?: boolean;

    /**
     * Does completion of current step count moves the progress bar
     *
     * @default true
     */
    countsAsProgress?: boolean;
}

const ModalWizardStep: FunctionComponent<ModalWizardStepProps> = ({children}) => <div>{children}</div>;

ModalWizardStep.defaultProps = {
    showProgressBar: true,
    countsAsProgress: true,
};

export {ModalWizardStep};