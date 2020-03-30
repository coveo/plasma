import classNames from 'classnames';
import * as React from 'react';
import {range, uniqueId} from 'underscore';
import {IClassName} from '../../utils/ClassNameUtils';

export interface IStepProgressBarProps {
    /**
     * A positive integer above zero
     */
    numberOfSteps: number;
    /**
     * The 0-based index of the step currently in completion by the user
     */
    currentStep: number;
    className?: IClassName;
}

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
