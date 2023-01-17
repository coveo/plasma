import classNames from 'classnames';
import {range, uniqueId} from 'underscore';

import {IClassName} from '../../utils/ClassNameUtils.js';

export interface IStepProgressBarProps {
    /**
     * The total number of steps. A positive integer above 0.
     */
    numberOfSteps: number;
    /**
     * The 0-based index of the step currently in completion by the user.
     */
    currentStep: number;
    /**
     * Additional CSS classes that are added to the progress bar element
     */
    className?: IClassName;
}

/**
 * @deprecated Use Mantine Stepper instead: https://mantine.dev/core/stepper/
 */
export const StepProgressBar = (props: IStepProgressBarProps) => {
    const {numberOfSteps, currentStep} = props;
    const stepProgressBarSteps = range(numberOfSteps).map((stepNumber: number) => (
        <div
            key={`step-progress-bar-${uniqueId()}`}
            className={classNames('step-progress-bar', {
                'step-progress-bar-done': stepNumber < currentStep,
                'step-progress-bar-doing': stepNumber === currentStep,
                'step-progress-bar-to-do': stepNumber > currentStep,
            })}
        ></div>
    ));

    return <div className={classNames('step-progress-bar-container', props.className)}>{stepProgressBarSteps}</div>;
};
