import {ShallowWrapper} from 'enzyme';
import {shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import * as _ from 'underscore';
import {getStoreMock} from '../../../../utils/tests/TestUtils';
import {IInputOwnProps} from '../../../input/Input';
import {InputConnected} from '../../../input/InputConnected';
import {ValidationActions} from '../../ValidationActions';
import {ValidationTypes} from '../../ValidationTypes';
import {withDirtyInputHOC} from '../WithDirtyInputHOC';

describe('WithDirtyInputHOC', () => {
    const InputWithHOC = withDirtyInputHOC(InputConnected);

    let store: ReturnType<typeof getStoreMock>;
    let inputWrapper: ShallowWrapper<IInputOwnProps>;

    const INPUT_PROPS: IInputOwnProps = {
        id: '🥔',
        title: 'ok',
        defaultValue: '🧀',
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
                inputWrapper = shallowWithStore<typeof InputWithHOC>(
                    <InputWithHOC {...INPUT_PROPS} validate={validateSpy} />,
                    store
                ).dive();
            });

            it('should dispatch a set dirty action with true when the value is different from the initial value', () => {
                inputWrapper.prop('validate')('🍕');

                expect(store.getActions()).toContain(
                    ValidationActions.setDirty(INPUT_PROPS.id, true, ValidationTypes.wrongInitialValue)
                );
            });

            it('should dispatch a set dirty action with false when the value is the same as the initial value', () => {
                inputWrapper.prop('validate')(INPUT_PROPS.defaultValue);

                expect(store.getActions()).toContain(
                    ValidationActions.setDirty(INPUT_PROPS.id, false, ValidationTypes.wrongInitialValue)
                );
            });

            it('should call the original validate function and return the same value', () => {
                validateSpy.and.returnValue(true);

                const result = inputWrapper.prop('validate')('🧀');

                expect(validateSpy).toHaveBeenCalledWith('🧀');
                expect(result).toBe(true);
            });
        });
    });
});
