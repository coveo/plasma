import { shallow, ShallowWrapper } from 'enzyme';
import { UserFeedback, UserFeedbackState, IUserFeedbackProps, TextColorClasses } from './UserFeedback';

// Until Webpack provided plugins works with TS 2.0
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('<UserFeedback>', () => {
  const generateProps = (feedbackText: string, state: string, extraClasses?: string, displayOnShow?: string): IUserFeedbackProps => {
    return displayOnShow ? { feedbackText, state, extraClasses, displayOnShow } : { feedbackText, state, extraClasses };
  };

  const getShallowOutput = (props: IUserFeedbackProps): ShallowWrapper<IUserFeedbackProps, any> => {
    return shallow(<UserFeedback {...props} />);
  };

  describe('"Shallow rendered" component', () => {
    describe('rendering', () => {
      it('should render without errors', () => {
        expect(() => getShallowOutput(generateProps('', '', ''))).not.toThrow();
        expect(() => getShallowOutput(generateProps('', '', '', 'block'))).not.toThrow();
        expect(() => getShallowOutput(generateProps('', '', ''))).not.toThrow();
        expect(() => getShallowOutput(generateProps('hello', UserFeedbackState.VALID, 'm1'))).not.toThrow();
        expect(() => getShallowOutput(generateProps('hello', UserFeedbackState.WARNING, 'm1'))).not.toThrow();
        expect(() => getShallowOutput(generateProps('hello', UserFeedbackState.ERROR, 'm1'))).not.toThrow();
        expect(() => getShallowOutput(generateProps('hello', UserFeedbackState.VALID, 'm1', 'block'))).not.toThrow();
        expect(() => getShallowOutput(generateProps('hello', UserFeedbackState.WARNING, 'm1', 'block'))).not.toThrow();
        expect(() => getShallowOutput(generateProps('hello', UserFeedbackState.ERROR, 'm1', 'block'))).not.toThrow();
      });
    });

    describe('text content', () => {
      it('should contain the exact text passed to prop feedbackText', () => {
        let testText = 'testing';
        let wrongText: string;

        expect(getShallowOutput(generateProps(testText, '', '')).text()).toBe(testText);

        testText = 'hello this is a test over here';
        wrongText = 'hello this is the wrong text over here';
        expect(getShallowOutput(generateProps(testText, '', '')).text()).not.toBe(wrongText);
      });
    });

    describe('style for each state', () => {
      describe('non existent state', () => {
        it('should be invisible if state provided does not exist', () => {
          let nonExistentState = 'NON_EXISTENT_STATE';
          let emptyState = '';

          expect(getShallowOutput(generateProps('', nonExistentState, '')).hasClass('hidden')).toBe(true);
          expect(getShallowOutput(generateProps('', emptyState, '')).hasClass('hidden')).toBe(true);
        });
      });

      describe('VALID state', () => {
        it('should be invisible on state VALID without displayOnShow prop', () => {
          expect(getShallowOutput(generateProps('', UserFeedbackState.VALID, '')).hasClass('hidden')).toBe(true);
        });

        it('should be invisible on state VALID, even with prop displayOnShow provided', () => {
          expect(getShallowOutput(generateProps('', UserFeedbackState.VALID, '', 'block')).hasClass('hidden')).toBe(true);
          expect(getShallowOutput(generateProps('', UserFeedbackState.VALID, '', 'block')).hasClass('block')).toBe(false);
        });
      });

      describe('WARNING state', () => {
        it('should be visible (without prop displayOnShow)', () => {
          expect(getShallowOutput(generateProps('', UserFeedbackState.WARNING, '')).hasClass('block')).toBe(true);
          expect(getShallowOutput(generateProps('', UserFeedbackState.WARNING, '')).hasClass('hidden')).toBe(false);
        });

        it('should have a display class equal to the value of the displayOnShow prop', () => {
          expect(getShallowOutput(generateProps('', UserFeedbackState.WARNING, 'inline-block')).hasClass('inline-block')).toBe(true);
          expect(getShallowOutput(generateProps('', UserFeedbackState.WARNING, 'inline-block')).hasClass('hidden')).toBe(false);
        });

        it('should have the default text color class', () => {
          let componentOnStateWarning = getShallowOutput(generateProps('', UserFeedbackState.WARNING, ''));
          expect(componentOnStateWarning.hasClass(TextColorClasses.default));
        });
      });

      describe('ERROR state', () => {
        it('should be visible (without prop displayOnShow)', () => {
          expect(getShallowOutput(generateProps('', UserFeedbackState.ERROR, '')).hasClass('block')).toBe(true);
          expect(getShallowOutput(generateProps('', UserFeedbackState.ERROR, '')).hasClass('hidden')).toBe(false);
        });

        it('should have a display class equal to the value of the displayOnShow prop', () => {
          expect(getShallowOutput(generateProps('', UserFeedbackState.ERROR, 'inline-block')).hasClass('inline-block')).toBe(true);
          expect(getShallowOutput(generateProps('', UserFeedbackState.ERROR, 'inline-block')).hasClass('hidden')).toBe(false);
        });

        it('should have the error text color class', () => {
          let componentOnStateError = getShallowOutput(generateProps('', UserFeedbackState.ERROR, ''));
          expect(componentOnStateError.hasClass(TextColorClasses.error));
        });
      });
    });

    describe('constant classes', () => {
      it('should only have the text-[color] and display classes if no extraClasses are passed as prop', () => {
        let testComponentValid = getShallowOutput(generateProps('', UserFeedbackState.VALID, ''));
        let testComponentWarning = getShallowOutput(generateProps('', UserFeedbackState.WARNING, ''));
        let testComponentError = getShallowOutput(generateProps('', UserFeedbackState.ERROR, ''));

        expect(/class=\"text-dark-grey hidden\"/.test(testComponentValid.html())).toBe(true);
        expect(/class=\"text-dark-grey block\"/.test(testComponentWarning.html())).toBe(true);
        expect(/class=\"text-red block\"/.test(testComponentError.html())).toBe(true);
      });

      it('should contain all classes passed through extraClasses, along with the text-[color] and display classes', () => {
        let extraClass: string[] = ['onlyoneclass'];
        let extraClasses: string[] = ['each', 'word', 'represent', 'a', 'class'];
        let extraClassesRealLife: string[] = ['mt1', 'mb2'];
        let testComponent: ShallowWrapper<IUserFeedbackProps, any> = getShallowOutput(generateProps('', '', extraClass.join(' ')));

        const areClassesAddedToElement = (extraClasses: string[], shallowWrapper: ShallowWrapper<IUserFeedbackProps, any>): boolean => {
          return extraClasses.reduce((hasClass: boolean, className: string) => !hasClass ? false : shallowWrapper.hasClass(className), true);
        };

        expect(areClassesAddedToElement(extraClass, testComponent) && testComponent.hasClass(TextColorClasses.default)).toBe(true);

        testComponent = getShallowOutput(generateProps('', '', extraClasses.join(' ')));
        expect(areClassesAddedToElement(extraClasses, testComponent) && testComponent.hasClass(TextColorClasses.default)).toBe(true);

        testComponent = getShallowOutput(generateProps('', '', extraClassesRealLife.join(' ')));
        expect(areClassesAddedToElement(extraClassesRealLife, testComponent) && testComponent.hasClass(TextColorClasses.default)).toBe(true);
      });
    });
  });
});
