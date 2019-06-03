import {shallow} from 'enzyme';
import * as React from 'react';
import {IStepProgressBarProps, StepProgressBar} from '../StepProgressBar';

describe('StepProgressBar', () => {
    const stepProgressBarContainerSelector = '.step-progress-bar-container';
    const stepProgressBarSelector = '.step-progress-bar';
    const stepProgressBarDoneSelector = '.step-progress-bar-done';
    const stepProgressBarDoingSelector = '.step-progress-bar-doing';
    const stepProgressBarToDoSelector = '.step-progress-bar-to-do';
    const testProps = {numberOfSteps: 10, currentStep: 5};

    it('should render without error with multiple scenarios of number of steps and current step', () => {
        [
            {numberOfSteps: 1, currentStep: 0},
            {numberOfSteps: 10, currentStep: 5},
            {numberOfSteps: 4, currentStep: 4},
            {numberOfSteps: 5, currentStep: 4},
        ].forEach((props: IStepProgressBarProps) => {
            expect(() => shallow(<StepProgressBar {...props} />)).not.toThrow();
        });
    });

    it('should render without error with mandatory props and className as array of string', () => {
        expect(() => shallow(<StepProgressBar {...testProps} className={['some', 'classes']} />)).not.toThrow();
    });

    it('should render without error with mandatory props and className as string', () => {
        expect(() => shallow(<StepProgressBar {...testProps} className='some classes' />)).not.toThrow();
    });

    describe('StepProgressBar Content', () => {
        const stepProgressBar = shallow(<StepProgressBar {...testProps} />);

        it('should render with steps done below the current step', () => {
            expect(stepProgressBar.find(stepProgressBarDoneSelector).length).toBe(testProps.currentStep);
        });

        it('should render the current step after the last done step', () => {
            expect(stepProgressBar.find(`${stepProgressBarDoneSelector} + ${stepProgressBarDoingSelector}`).length).toBe(1);
        });

        it('should render with steps to-do above the current step', () => {
            expect(stepProgressBar.find(`${stepProgressBarDoingSelector} + ${stepProgressBarToDoSelector}`).length).toBe(1);
            const currentStepAndDoneStepsCombined = stepProgressBar.find(stepProgressBarDoneSelector).length + stepProgressBar.find(stepProgressBarDoingSelector).length;
            expect(stepProgressBar.find(stepProgressBarToDoSelector).length).toBe(testProps.numberOfSteps - currentStepAndDoneStepsCombined);
        });

        it('should have as many div.progress-bar as there are number of steps', () => {
            expect(stepProgressBar.find(stepProgressBarSelector).length).toBe(testProps.numberOfSteps);
        });

        it('should render with extra classes on the container if passed in props as array', () => {
            const testClasses = ['container', 'classes', 'wonderful'];
            const stepProgressBarWithClasses = shallow(<StepProgressBar {...testProps} className={testClasses} />);

            testClasses.forEach((testClass: string) => {
                expect(stepProgressBarWithClasses.find(stepProgressBarContainerSelector).hasClass(testClass)).toBe(true);
            });
        });

        it('should render with extra classes on the container if passed in props as string', () => {
            const testClasses = 'container classes wonderful';
            const stepProgressBarWithClasses = shallow(<StepProgressBar {...testProps} className={testClasses} />);

            testClasses.split(' ').forEach((testClass: string) => {
                expect(stepProgressBarWithClasses.find(stepProgressBarContainerSelector).hasClass(testClass)).toBe(true);
            });
        });
    });
});
