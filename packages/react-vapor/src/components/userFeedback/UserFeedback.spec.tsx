import {shallow, ShallowWrapper} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {all, extend} from 'underscore';
import {DisplayClass} from '../../utils/ComponentUtils';
import {IUserFeedbackProps, TextColorClass, UserFeedback, UserFeedbackState} from './UserFeedback';

describe('<UserFeedback>', () => {
    const getShallowOutput = (
        feedbackText: string,
        state: string,
        extraClasses?: string[],
        displayOnShow?: string
    ): ShallowWrapper<IUserFeedbackProps, any> => {
        let props: IUserFeedbackProps = {
            feedbackText,
            state,
        };

        if (extraClasses) {
            props = extend(props, {extraClasses});
        }
        if (displayOnShow) {
            props = extend(props, {displayOnShow});
        }

        return shallow(<UserFeedback {...props} />);
    };

    describe('"Shallow rendered" component', () => {
        describe('rendering', () => {
            it('should render without errors', () => {
                expect(() => getShallowOutput('', '')).not.toThrow();
                expect(() => getShallowOutput('', '', [], DisplayClass.BLOCK)).not.toThrow();
                expect(() => getShallowOutput('', '')).not.toThrow();
                expect(() => getShallowOutput('hello', UserFeedbackState.VALID, ['m1'])).not.toThrow();
                expect(() => getShallowOutput('hello', UserFeedbackState.WARNING, ['m1'])).not.toThrow();
                expect(() => getShallowOutput('hello', UserFeedbackState.ERROR, ['m1'])).not.toThrow();
                expect(() =>
                    getShallowOutput('hello', UserFeedbackState.VALID, ['m1'], DisplayClass.BLOCK)
                ).not.toThrow();
                expect(() =>
                    getShallowOutput('hello', UserFeedbackState.WARNING, ['m1'], DisplayClass.BLOCK)
                ).not.toThrow();
                expect(() =>
                    getShallowOutput('hello', UserFeedbackState.ERROR, ['m1'], DisplayClass.BLOCK)
                ).not.toThrow();
            });
        });

        describe('text content', () => {
            it('should contain the exact text passed to prop feedbackText', () => {
                let testText = 'testing';
                let wrongText: string;

                expect(getShallowOutput(testText, '').text()).toBe(testText);

                testText = 'hello this is a test over here';
                wrongText = 'hello this is the wrong text over here';
                expect(getShallowOutput(testText, '').text()).not.toBe(wrongText);
            });
        });

        describe('style for each state', () => {
            describe('non existent state', () => {
                it('should be invisible if state provided does not exist', () => {
                    const nonExistentState = 'NON_EXISTENT_STATE';
                    const emptyState = '';

                    expect(getShallowOutput('', nonExistentState).hasClass(DisplayClass.HIDDEN)).toBe(true);
                    expect(getShallowOutput('', emptyState).hasClass(DisplayClass.HIDDEN)).toBe(true);
                });
            });

            describe('VALID state', () => {
                it('should be invisible on state VALID without displayOnShow prop', () => {
                    expect(getShallowOutput('', UserFeedbackState.VALID).hasClass(DisplayClass.HIDDEN)).toBe(true);
                });

                it('should be invisible on state VALID, even with prop displayOnShow provided', () => {
                    expect(
                        getShallowOutput('', UserFeedbackState.VALID, [], DisplayClass.BLOCK).hasClass(
                            DisplayClass.HIDDEN
                        )
                    ).toBe(true);
                    expect(
                        getShallowOutput('', UserFeedbackState.VALID, [], DisplayClass.BLOCK).hasClass(
                            DisplayClass.BLOCK
                        )
                    ).toBe(false);
                });
            });

            describe('WARNING state', () => {
                it('should be visible (without prop displayOnShow)', () => {
                    expect(getShallowOutput('', UserFeedbackState.WARNING).hasClass(DisplayClass.BLOCK)).toBe(true);
                    expect(getShallowOutput('', UserFeedbackState.WARNING).hasClass(DisplayClass.HIDDEN)).toBe(false);
                });

                it('should have a display class equal to the value of the displayOnShow prop', () => {
                    expect(
                        getShallowOutput('', UserFeedbackState.WARNING, [], DisplayClass.INLINE_BLOCK).hasClass(
                            DisplayClass.INLINE_BLOCK
                        )
                    ).toBe(true);
                    expect(
                        getShallowOutput('', UserFeedbackState.WARNING, [], DisplayClass.INLINE_BLOCK).hasClass(
                            DisplayClass.HIDDEN
                        )
                    ).toBe(false);
                });

                it('should have the default text color class', () => {
                    const componentOnStateWarning = getShallowOutput('', UserFeedbackState.WARNING);
                    expect(componentOnStateWarning.hasClass(TextColorClass.default));
                });
            });

            describe('ERROR state', () => {
                it('should be visible (without prop displayOnShow)', () => {
                    expect(getShallowOutput('', UserFeedbackState.ERROR).hasClass(DisplayClass.BLOCK)).toBe(true);
                    expect(getShallowOutput('', UserFeedbackState.ERROR).hasClass(DisplayClass.HIDDEN)).toBe(false);
                });

                it('should have a display class equal to the value of the displayOnShow prop', () => {
                    expect(
                        getShallowOutput('', UserFeedbackState.ERROR, [], DisplayClass.INLINE_BLOCK).hasClass(
                            DisplayClass.INLINE_BLOCK
                        )
                    ).toBe(true);
                    expect(
                        getShallowOutput('', UserFeedbackState.ERROR, [], DisplayClass.INLINE_BLOCK).hasClass(
                            DisplayClass.HIDDEN
                        )
                    ).toBe(false);
                });

                it('should have the error text color class', () => {
                    const componentOnStateError = getShallowOutput('', UserFeedbackState.ERROR);
                    expect(componentOnStateError.hasClass(TextColorClass.error));
                });
            });
        });

        describe('constant classes', () => {
            it('should only have the text-[color] and display classes if no extraClasses are passed as prop', () => {
                const testComponentValid = getShallowOutput('', UserFeedbackState.VALID);
                const testComponentWarning = getShallowOutput('', UserFeedbackState.WARNING);
                const testComponentError = getShallowOutput('', UserFeedbackState.ERROR);

                // a trailing space will be left at the end of the class property if no extraClasses are passed as prop
                expect(/class=\"text-dark-grey hidden\"/.test(testComponentValid.html())).toBe(true);
                expect(/class=\"text-dark-grey block\"/.test(testComponentWarning.html())).toBe(true);
                expect(/class=\"text-red block\"/.test(testComponentError.html())).toBe(true);
            });

            it('should contain all classes passed through extraClasses, along with the text-[color] and display classes', () => {
                const extraClass: string[] = ['onlyoneclass'];
                const extraClasses: string[] = ['each', 'word', 'represents', 'a', 'class'];
                const extraClassesRealLife: string[] = ['mt1', 'mb2'];
                let testComponent: ShallowWrapper<IUserFeedbackProps, any> = getShallowOutput('', '', extraClass);

                const areClassesAddedToElement = (
                    currentExtraClasses: string[],
                    shallowWrapper: ShallowWrapper<IUserFeedbackProps, any>
                ): boolean => {
                    const allClasses: string[] = currentExtraClasses;
                    allClasses.unshift(TextColorClass.default, DisplayClass.HIDDEN);

                    return all(allClasses, (className: string) => shallowWrapper.hasClass(className));
                };

                expect(areClassesAddedToElement(extraClass, testComponent)).toBe(true);

                testComponent = getShallowOutput('', '', extraClasses);
                expect(areClassesAddedToElement(extraClasses, testComponent)).toBe(true);

                testComponent = getShallowOutput('', '', extraClassesRealLife);
                expect(areClassesAddedToElement(extraClassesRealLife, testComponent)).toBe(true);
            });
        });
    });
});
