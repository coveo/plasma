import * as React from 'react';
import { range } from 'underscore';
import * as classNames from 'classnames';

export interface IStepProgressBarProps {
  /**
   * A positive integer above zero
   */
  numberOfSteps: number;
  /**
   * The 0-based index of the step currently in completion by the user
   */
  currentStep: number;
  className?: string[] | string;
}

export const StepProgressBar = (props: IStepProgressBarProps) => {
    const { numberOfSteps, currentStep } = props;
    const stepWidth = Math.floor(100 / numberOfSteps);
    const stepProgressBarSteps = range(numberOfSteps).map((stepNumber: number) => (
      <div
        className={classNames('step-progress-bar', {
          'step-progress-bar-done': stepNumber < currentStep,
          'step-progress-bar-doing': stepNumber === currentStep,
          'step-progress-bar-to-do': stepNumber > currentStep,
        })}
        style={{
          width: stepNumber === (numberOfSteps - 1)
            ? `${stepWidth + (100 % numberOfSteps)}%` // add residual to make sure the total width of all steps is 100%
            : `${stepWidth}%`,
        }}>
      </div>
    ));

    return (
      <div className={classNames('step-progress-bar-container', props.className)}>
        {stepProgressBarSteps}
      </div>
    );
};
