import {shallow} from 'enzyme';
import * as React from 'react';
import {IMultiStepBarProps, IStep, MultiStepBar, MultiStepState} from '../MultiStepBar';

describe('<MultiStepBar />', () => {
    const multiStepBarBackgroundContainerSelector = '.multi-step-bar-backdrop-container';
    const multiStepBarContainerSelector = '.multi-step-bar-container';
    const multiStepBarDoneSelector = '.multi-step-bar-done';
    const multiStepBarWarningSelector = '.multi-step-bar-warning';
    const multiStepBarErrorSelector = '.multi-step-bar-error';
    const multiStepBarDoingSelector = '.multi-step-bar-doing';
    const multiStepBarToDoSelector = '.multi-step-bar-to-do';
    const eachPossibleStepSelectors = [
        multiStepBarDoingSelector,
        multiStepBarWarningSelector,
        multiStepBarErrorSelector,
        multiStepBarDoingSelector,
        multiStepBarToDoSelector,
    ];
    const defaultSteps: IStep[] = [
        {state: MultiStepState.Done},
        {state: MultiStepState.Warning},
        {state: MultiStepState.Error},
        {state: MultiStepState.Doing},
        {state: MultiStepState.ToDo},
    ];
    const stepsWithText: IStep[] = defaultSteps.map((step, i) => ({...step, text: `Step ${i}`}));
    const testProps: IMultiStepBarProps = {steps: defaultSteps};

    it('should render without error with mandatory props', () => {
        expect(() => shallow(<MultiStepBar {...testProps} />)).not.toThrow();
    });

    it('should render without error with mandatory props and className as array of string', () => {
        expect(() => shallow(<MultiStepBar {...testProps} className={['some', 'classes']} />)).not.toThrow();
    });

    it('should render without error with mandatory props and className as string', () => {
        expect(() => shallow(<MultiStepBar {...testProps} className='some classes' />)).not.toThrow();
    });

    it('should render without error with a steps with a tooltip', () => {
        expect(() => shallow(<MultiStepBar steps={[{state: MultiStepState.Doing, tooltip: {title: 'Some Tooltip'}}]} />)).not.toThrow();
    });

    describe('MultiStepBar Content', () => {
        describe('with simple states', () => {
            const multiStepBar = shallow(<MultiStepBar {...testProps} />);

            it('should render one step per state in the backdrop', () => {
                eachPossibleStepSelectors.forEach((state) => {
                    expect(multiStepBar.find(`${multiStepBarBackgroundContainerSelector} ${multiStepBarDoneSelector}`).length).toBe(1);
                });
            });

            it('should render with extra classes on the container if passed in props as array', () => {
                const testClasses = ['container', 'classes', 'wonderful'];
                const multiStepBarWithClasses = shallow(<MultiStepBar {...testProps} className={testClasses} />);

                testClasses.forEach((testClass: string) => {
                    expect(multiStepBarWithClasses.find(multiStepBarContainerSelector).hasClass(testClass)).toBe(true);
                });
            });

            it('should render with extra classes on the container if passed in props as string', () => {
                const testClasses = 'container classes wonderful';
                const multiStepBarWithClasses = shallow(<MultiStepBar {...testProps} className={testClasses} />);

                testClasses.split(' ').forEach((testClass: string) => {
                    expect(multiStepBarWithClasses.find(multiStepBarContainerSelector).hasClass(testClass)).toBe(true);
                });
            });
        });

        describe('with states with the text attribute', () => {
            const multiStepBar = shallow(<MultiStepBar {...testProps} steps={stepsWithText} />);

            it('should render one step per state in the backdrop and in the content container', () => {
                eachPossibleStepSelectors.forEach((state) => {
                    expect(multiStepBar.find(`${multiStepBarBackgroundContainerSelector} ${multiStepBarDoneSelector}`).length).toBe(1);
                    expect(multiStepBar.find(`${multiStepBarContainerSelector} ${multiStepBarDoneSelector}`).length).toBe(1);
                });
            });
        });
    });
});
