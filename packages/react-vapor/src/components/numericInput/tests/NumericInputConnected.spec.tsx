import {shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import {MockStoreEnhanced} from 'redux-mock-store';
import {IReactVaporState} from '../../../ReactVapor';
import {IDispatch} from '../../../utils/ReduxUtils';
import {getStoreMock} from '../../../utils/tests/TestUtils';
import {Button} from '../../button/Button';
import {NumericInputActions} from '../NumericInputActions';
import {NumericInputConnected} from '../NumericInputConnected';
import {initialNumericInputState} from '../NumericInputReducers';

describe('Numeric Input', () => {
    describe('<NumericInputConnected />', () => {
        let store: MockStoreEnhanced<IReactVaporState, IDispatch<IReactVaporState>>;
        const id = 'numeric-input';
        const initialValue = 50;

        beforeEach(() => {
            store = getStoreMock({
                numericInputs: {
                    [id]: {value: initialValue, hasError: false},
                },
            });
        });

        it('should not throw', () => {
            expect(() => {
                store = getStoreMock({numericInputs: {}});

                const component = shallowWithStore(<NumericInputConnected id={id} />, store).dive();
                component.unmount();
            }).not.toThrow();
        });

        it('should mount with the initial value when passed as a prop', () => {
            const expectedInitialValue = 1000;
            const expectedAction = NumericInputActions.mount(id, expectedInitialValue);

            shallowWithStore(<NumericInputConnected id={id} initialValue={expectedInitialValue} />, store).dive();

            expect(store.getActions()).toContain(expectedAction);
        });

        it('should disable the decrement button when the value is lower than the min', () => {
            const component = shallowWithStore(
                <NumericInputConnected id={id} initialValue={initialValue} min={initialValue} />,
                store
            ).dive();

            expect(
                component
                    .find(Button)
                    .at(0)
                    .prop('enabled')
            ).toBe(false);
        });

        it('should trigger a setValue onClick on the decrement button', () => {
            const component = shallowWithStore(
                <NumericInputConnected id={id} initialValue={initialValue} />,
                store
            ).dive();

            component
                .find(Button)
                .at(0)
                .prop('onClick')();
            expect(store.getActions()).toContain(NumericInputActions.setValue(id, initialValue - 1));
        });

        it('should decrement by the step prop value onClick on the increment button', () => {
            const step = 10;
            const component = shallowWithStore(
                <NumericInputConnected id={id} initialValue={initialValue} step={step} />,
                store
            ).dive();

            component
                .find(Button)
                .at(0)
                .prop('onClick')();
            expect(store.getActions()).toContain(NumericInputActions.setValue(id, initialValue - step));
        });

        it('should disable the increment button when the value is greater than the max', () => {
            const component = shallowWithStore(
                <NumericInputConnected id={id} initialValue={initialValue} max={initialValue} />,
                store
            ).dive();

            expect(
                component
                    .find(Button)
                    .at(1)
                    .prop('enabled')
            ).toBe(false);
        });

        it('should not overflow the min onClick on the decrement button', () => {
            const step = 10;
            const min = initialValue - 1;
            const component = shallowWithStore(
                <NumericInputConnected id={id} initialValue={initialValue} step={step} min={min} />,
                store
            ).dive();

            component
                .find(Button)
                .at(0)
                .prop('onClick')();
            expect(store.getActions()).toContain(NumericInputActions.setValue(id, min, min));
        });

        it('should trigger a setValue onClick on the increment button', () => {
            const component = shallowWithStore(
                <NumericInputConnected id={id} initialValue={initialValue} />,
                store
            ).dive();

            component
                .find(Button)
                .at(1)
                .prop('onClick')();
            expect(store.getActions()).toContain(NumericInputActions.setValue(id, initialValue + 1));
        });

        it('should increment by the step prop value onClick on the increment button', () => {
            const step = 10;
            const component = shallowWithStore(
                <NumericInputConnected id={id} initialValue={initialValue} step={step} />,
                store
            ).dive();

            component
                .find(Button)
                .at(1)
                .prop('onClick')();
            expect(store.getActions()).toContain(NumericInputActions.setValue(id, initialValue + step));
        });

        it('should not overflow the max onClick on the increment button', () => {
            const step = 10;
            const max = initialValue + 1;
            const component = shallowWithStore(
                <NumericInputConnected id={id} initialValue={initialValue} step={step} max={max} />,
                store
            ).dive();

            component
                .find(Button)
                .at(1)
                .prop('onClick')();
            expect(store.getActions()).toContain(NumericInputActions.setValue(id, max, undefined, max));
        });

        it('should display the error if the input is in error', () => {
            const expectedMessage = 'why?!?';
            store = getStoreMock({
                numericInputs: {
                    [id]: {value: 20, hasError: true},
                },
            });
            const component = shallowWithStore(
                <NumericInputConnected id={id} invalidMessage={expectedMessage} />,
                store
            ).dive();
            expect(component.find('.generic-form-error').text()).toBe(expectedMessage);
        });

        it('should trigger a setValue when the input change', () => {
            const newValue = '125';
            const component = shallowWithStore(<NumericInputConnected id={id} />, store).dive();

            component.find('.js-numeric-input').simulate('change', {target: {value: newValue}});
            expect(store.getActions()).toContain(NumericInputActions.setValue(id, newValue));
        });

        describe('when the value is a string', () => {
            beforeEach(() => {
                store = getStoreMock({
                    numericInputs: {
                        [id]: {value: 'not over 9000', hasError: false},
                    },
                });
            });

            it('should decrement to the default value if initialValue is not defined', () => {
                const component = shallowWithStore(<NumericInputConnected id={id} />, store).dive();

                component
                    .find(Button)
                    .at(0)
                    .prop('onClick')();
                expect(store.getActions()).toContain(NumericInputActions.setValue(id, initialNumericInputState.value));
            });

            it('should increment to the default value if initialValue is not defined', () => {
                const component = shallowWithStore(<NumericInputConnected id={id} />, store).dive();

                component
                    .find(Button)
                    .at(1)
                    .prop('onClick')();
                expect(store.getActions()).toContain(NumericInputActions.setValue(id, initialNumericInputState.value));
            });

            it('should decrement to the initialValue if initialValue is defined', () => {
                const component = shallowWithStore(
                    <NumericInputConnected id={id} initialValue={initialValue} />,
                    store
                ).dive();

                component
                    .find(Button)
                    .at(0)
                    .prop('onClick')();
                expect(store.getActions()).toContain(NumericInputActions.setValue(id, initialValue));
            });

            it('should increment to the default value if initialValue is not defined', () => {
                const component = shallowWithStore(
                    <NumericInputConnected id={id} initialValue={initialValue} />,
                    store
                ).dive();

                component
                    .find(Button)
                    .at(1)
                    .prop('onClick')();
                expect(store.getActions()).toContain(NumericInputActions.setValue(id, initialValue));
            });
        });
    });
});
