import {shallowWithStore} from '@test-utils';
import {ShallowWrapper} from 'enzyme';

import {getStoreMock} from '../../../../utils/tests/TestUtils';
import {IInputOwnProps, InputConnected} from '../../../input/Input';
import {ValidationActions} from '../../ValidationActions';
import {ValidationTypes} from '../../ValidationTypes';
import {
    IWithNonEmptyValueInputValidationProps,
    withNonEmptyValueInputValidationHOC,
} from '../WithNonEmptyValueInputValidationHOC';

describe('WithNonEmptyValueInputValidationHOC', () => {
    const InputWithHOC = withNonEmptyValueInputValidationHOC(InputConnected);

    let store: ReturnType<typeof getStoreMock>;
    let inputWrapper: ShallowWrapper<IWithNonEmptyValueInputValidationProps & IInputOwnProps>;

    const INPUT_PROPS: IWithNonEmptyValueInputValidationProps & IInputOwnProps = {
        id: '🥔',
        title: 'ok',
        validationMessage: 'ohno',
    };

    beforeEach(() => {
        store = getStoreMock({
            validation: {},
        });
    });

    afterEach(() => {
        store.clearActions();
    });

    describe('<InputWithHOC />', () => {
        it('should render without error', () => {
            expect(() => shallowWithStore(<InputWithHOC {...INPUT_PROPS} />, store)).not.toThrow();
        });

        it('should mount and unmount/detach without error', () => {
            expect(() => {
                inputWrapper = shallowWithStore(<InputWithHOC {...INPUT_PROPS} />, store);
                inputWrapper.unmount();
            }).not.toThrow();
        });

        describe('after mount', () => {
            let validateSpy: jest.Mock<any, any>;

            beforeEach(() => {
                validateSpy = jest.fn();
                inputWrapper = shallowWithStore(<InputWithHOC {...INPUT_PROPS} validate={validateSpy} />, store).dive();
            });

            [
                {title: 'empty', value: ''},
                {title: 'whitespace', value: ' '},
            ].forEach((test) => {
                it(`should dispatch a set error action when the validation fails (${test.title})`, () => {
                    inputWrapper.prop('validate')(test.value);

                    expect(store.getActions()).toContainEqual(
                        ValidationActions.setError(
                            INPUT_PROPS.id,
                            INPUT_PROPS.validationMessage,
                            ValidationTypes.nonEmpty,
                        ),
                    );
                });
            });

            it('should not dispatch a set error action when the validation succeeds', () => {
                inputWrapper.prop('validate')('some correct value');

                expect(store.getActions()).not.toContain(
                    ValidationActions.setError(INPUT_PROPS.id, INPUT_PROPS.validationMessage, ValidationTypes.nonEmpty),
                );
            });
        });
    });
});
