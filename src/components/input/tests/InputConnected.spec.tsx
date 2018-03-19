import {mount} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {Provider, Store} from 'react-redux';
import {findWhere} from 'underscore';
import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {IInputProps, Input} from '../Input';
import {InputConnected} from '../InputConnected';
import {inputPossibleProps, inputProps} from './InputTestCommons.spec';

describe('<InputConnected />', () => {
    let store: Store<IReactVaporState>;

    beforeEach(() => {
        store = TestUtils.buildStore();
    });

    afterEach(() => {
        store.dispatch(clearState());
    });

    const mountComponentWithProps = (props: IInputProps = {}) => mount(
        <Provider store={store}>
            <InputConnected {...props} />
        </Provider>,
        {attachTo: document.getElementById('App')},
    );

    it('should mount without errors in various props scenarios', () => {
        expect(() => {
            mountComponentWithProps();
        }).not.toThrow();

        inputPossibleProps.forEach((props) => {
            expect(() => {
                mountComponentWithProps(props);
            }).not.toThrow();
        });
    });

    describe('dispatch props', () => {
        it('should not throw when calling onRender with basic props', () => {
            expect(() => mountComponentWithProps(inputProps).find(Input).prop('onRender')()).not.toThrow();
        });

        it('should not throw when calling onRender with validateOnMount set as a prop', () => {
            expect(() => mountComponentWithProps({...inputProps, validateOnMount: true}).find(Input).prop('onRender')()).not.toThrow();
        });

        it('should not throw when calling onDestroy', () => {
            expect(() => mountComponentWithProps(inputProps).find(Input).prop('onDestroy')()).not.toThrow();
        });

        it('should not throw when calling onChange with basic props', () => {
            expect(() => mountComponentWithProps(inputProps).find(Input).prop('onChange')()).not.toThrow();
        });

        it('should not throw when calling onChange when validateOnChange is set as a prop but not validate', () => {
            const props = {...inputProps, validateOnChange: true};
            expect(() => mountComponentWithProps(props).find(Input).prop('onChange')()).not.toThrow();
        });

        it('should not throw when calling onChange when validateOnChange and validate are set as props', () => {
            const props = {...inputProps, validateOnChange: true, validate: (value: string) => !!value};
            expect(() => mountComponentWithProps(props).find(Input).prop('onChange')()).not.toThrow();
        });
    });

    describe('onMount', () => {
        it('should add an input in the store with default values if no default value, disabledOnMount, validateOnMount, and validate function are provided', () => {
            mountComponentWithProps(inputProps);

            const input = findWhere(store.getState().inputs, {id: inputProps.id});
            expect(input.value).toBe('');
            expect(input.valid).toBe(true);
            expect(input.disabled).toBe(false);
        });

        it('should add an input in the store with the defaultValue if there is one in the props', () => {
            const defaultValue = 'defaultValue';
            mountComponentWithProps({...inputProps, defaultValue});

            const input = findWhere(store.getState().inputs, {id: inputProps.id});
            expect(input.value).toBe(defaultValue);
        });

        it('should add an input in the store with the disabled value set as the disabledOnMount prop if present in the props', () => {
            const disabledOnMount = true;
            mountComponentWithProps({...inputProps, disabledOnMount});

            const input = findWhere(store.getState().inputs, {id: inputProps.id});
            expect(input.disabled).toBe(disabledOnMount);
        });

        it('should add an input in the store with the validate value set to the result of the validate function if validateOnMount and validate are passed as props', () => {
            const validateOnMount = true;
            const validate = (value: string) => !!value;
            let defaultValue = '';
            mountComponentWithProps({...inputProps, defaultValue, validateOnMount, validate});
            let input = findWhere(store.getState().inputs, {id: inputProps.id});

            expect(validate(defaultValue)).toBe(false);
            expect(input.valid).toBe(validate(defaultValue));

            store.dispatch(clearState());

            defaultValue = 'valid value';
            mountComponentWithProps({...inputProps, defaultValue, validateOnMount, validate});
            input = findWhere(store.getState().inputs, {id: inputProps.id});

            expect(validate(defaultValue)).toBe(true);
            expect(input.valid).toBe(validate(defaultValue));
        });
    });

    describe('onUnmount', () => {
        it('should remove the input from the store', () => {
            const input = mountComponentWithProps(inputProps);

            expect(findWhere(store.getState().inputs, {id: inputProps.id})).toBeDefined();

            input.unmount();

            expect(findWhere(store.getState().inputs, {id: inputProps.id})).toBeUndefined();
        });
    });

    describe('onChange', () => {
        it('should change the value in the store to the new value and leave the valid value unchanged', () => {
            const input = mountComponentWithProps(inputProps);
            const oldInputState = findWhere(store.getState().inputs, {id: inputProps.id});
            expect(oldInputState.value).toBe('');

            (document.querySelector(`#${inputProps.id}`) as HTMLInputElement).value = 'new value';
            input.find('input').simulate('change');

            const newInputState = findWhere(store.getState().inputs, {id: inputProps.id});
            expect(newInputState.value).toBe('new value');
            expect(newInputState.valid).toBe(oldInputState.valid);
        });

        it('should send the proper valid value to the input state if validateOnChange and validate are set as props', () => {
            const validateOnChange = true;
            const validate = (value: string) => !!value;
            const input = mountComponentWithProps({...inputProps, validate, validateOnChange});

            (document.querySelector(`#${inputProps.id}`) as HTMLInputElement).value = 'new value';
            input.find('input').simulate('change');

            let newInputState = findWhere(store.getState().inputs, {id: inputProps.id});
            expect(validate(newInputState.value)).toBe(true);
            expect(newInputState.valid).toBe(validate(newInputState.value));

            (document.querySelector(`#${inputProps.id}`) as HTMLInputElement).value = '';
            input.find('input').simulate('change');

            newInputState = findWhere(store.getState().inputs, {id: inputProps.id});
            expect(validate(newInputState.value)).toBe(false);
            expect(newInputState.valid).toBe(validate(newInputState.value));
        });
    });
});
