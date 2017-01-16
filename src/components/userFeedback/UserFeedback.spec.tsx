import { shallow, ShallowWrapper } from 'enzyme';
import { UserFeedback, UserFeedbackState, IUserFeedbackProps, TextColorClasses } from './UserFeedback';

// Until Webpack provided plugins works with TS 2.0
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('<UserFeedback>', () => {
  const defaultTextColorClass: string = TextColorClasses.default;
  const errorTextColorClass: string = TextColorClasses.error;

  const generateProps = (feedbackText: string, state: string, constantClasses?: string, displayOnShow?: string): IUserFeedbackProps => {
    return displayOnShow ? { feedbackText, state, constantClasses, displayOnShow } : { feedbackText, state, constantClasses };
  };

  const defaultProps: IUserFeedbackProps = generateProps('', '', '');
  const defaultPropsWithDisplay: IUserFeedbackProps = generateProps('', '', '', 'block');

  const getShallowOutput = (props: IUserFeedbackProps): ShallowWrapper<IUserFeedbackProps, any> => {
    return shallow(<UserFeedback {...props} />);
  };

  describe('"Shallow rendered" component', () => {
    describe('rendering', () => {
      it('should render without errors', () => {
        expect(() => getShallowOutput(defaultProps)).not.toThrow();
        expect(() => getShallowOutput(defaultPropsWithDisplay)).not.toThrow();
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

        testText = 'hello this is a longer test string over here';
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

          expect(/display:none/.test(getShallowOutput(generateProps('', nonExistentState, '')).html())).toBe(true);
          expect(/display:none/.test(getShallowOutput(generateProps('', emptyState, '')).html())).toBe(true);
        });
      });

      describe('VALID state', () => {
        it('should be invisible on state VALID without displayOnShow prop', () => {
          expect(/display:none/.test(getShallowOutput(generateProps('', UserFeedbackState.VALID, '')).html())).toBe(true);
        });

        it('should be invisible on state VALID, even with prop displayOnShow provided', () => {
          expect(/display:none/.test(getShallowOutput(generateProps('', UserFeedbackState.VALID, '', 'block')).html())).toBe(true);
        });
      });

      describe('WARNING state', () => {
        it('should be visible (without prop displayOnShow)', () => {
          let componentOnStateWarning = getShallowOutput(generateProps('', UserFeedbackState.WARNING, ''));
          expect(/display:block/.test(componentOnStateWarning.html()))
            .toBe(true);
        });

        it('the display value should be the value of the displayOnShow prop', () => {
          let componentOnStateWarning = getShallowOutput(generateProps('', UserFeedbackState.WARNING, '', 'inline-block'));
          expect(/display:inline\-block/.test(componentOnStateWarning.html()))
            .toBe(true);
        });

        it('the text should be dark-grey', () => {
          let componentOnStateWarning = getShallowOutput(generateProps('', UserFeedbackState.WARNING, ''));
          expect(componentOnStateWarning.hasClass(defaultTextColorClass));
        });
      });

      describe('ERROR state', () => {
        it('should be visible (without prop displayOnShow)', () => {
          let componentOnStateError = getShallowOutput(generateProps('', UserFeedbackState.ERROR, ''));
          expect(/display:block/.test(componentOnStateError.html()))
            .toBe(true);
        });

        it('the display value should be the value of the displayOnShow prop', () => {
          let componentOnStateError = getShallowOutput(generateProps('', UserFeedbackState.ERROR, '', 'inline-block'));
          expect(/display:inline-block/.test(componentOnStateError.html()))
            .toBe(true);
        });

        it('the text should be red', () => {
          let componentOnStateError = getShallowOutput(generateProps('', UserFeedbackState.ERROR, ''));
          expect(componentOnStateError.hasClass(errorTextColorClass));
        });
      });
    });

    describe('constant classes', () => {
      it('should only have the text-[color] class if no constantClasses are passed as prop', () => {
        let testComponentValid = getShallowOutput(generateProps('', UserFeedbackState.VALID, ''));
        let testComponentWarning = getShallowOutput(generateProps('', UserFeedbackState.WARNING, ''));
        let testComponentError = getShallowOutput(generateProps('', UserFeedbackState.ERROR, ''));

        expect(/class=\"text-dark-grey\"/.test(testComponentValid.html())).toBe(true);
        expect(/class=\"text-dark-grey\"/.test(testComponentWarning.html())).toBe(true);
        expect(/class=\"text-red\"/.test(testComponentError.html())).toBe(true);
      });

      it('should contain all classes passed through constantClasses, along with the text-[color] class', () => {
        let constantClass: string[] = ['onlyoneclass'];
        let constantClasses: string[] = ['each', 'word', 'represent', 'a', 'class'];
        let constantClassesRealLife: string[] = ['mt1', 'mb2'];
        let testComponent: ShallowWrapper<IUserFeedbackProps, any> = getShallowOutput(generateProps('', '', constantClass.join(' ')));

        const areClassesAddedToElement = (constClasses: string[], shallowWrapper: ShallowWrapper<IUserFeedbackProps, any>): boolean => {
          return constClasses.reduce((hasClass: boolean, className: string) => !hasClass ? false : shallowWrapper.hasClass(className), true);
        };

        expect(areClassesAddedToElement(constantClass, testComponent) && testComponent.hasClass(defaultTextColorClass)).toBe(true);

        testComponent = getShallowOutput(generateProps('', '', constantClasses.join(' ')));
        expect(areClassesAddedToElement(constantClasses, testComponent) && testComponent.hasClass(defaultTextColorClass)).toBe(true);

        testComponent = getShallowOutput(generateProps('', '', constantClassesRealLife.join(' ')));
        expect(areClassesAddedToElement(constantClassesRealLife, testComponent) && testComponent.hasClass(defaultTextColorClass)).toBe(true);
      });
    });
  });
});
