import {ShallowWrapper} from 'enzyme';
import {shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import * as _ from 'underscore';
import {getStoreMock} from '../../../../utils/tests/TestUtils';
import {IInputOwnProps} from '../../../input/Input';
import {InputConnected} from '../../../input/InputConnected';
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
            let validateSpy: jasmine.Spy;

            beforeEach(() => {
                validateSpy = jasmine.createSpy('validate');
                inputWrapper = shallowWithStore(<InputWithHOC {...INPUT_PROPS} validate={validateSpy} />, store).dive();
            });

            it('should dispatch a set error action when the validation fails', () => {
                inputWrapper.prop('validate')('');

                expect(store.getActions()).toContain(
                    ValidationActions.setError(INPUT_PROPS.id, INPUT_PROPS.validationMessage, ValidationTypes.nonEmpty)
                );
            });

            it('should not dispatch a set error action when the validation succeeds', () => {
                inputWrapper.prop('validate')('some correct value');

                expect(store.getActions()).not.toContain(
                    ValidationActions.setError(INPUT_PROPS.id, INPUT_PROPS.validationMessage, ValidationTypes.nonEmpty)
                );
            });
        });
    });
});
