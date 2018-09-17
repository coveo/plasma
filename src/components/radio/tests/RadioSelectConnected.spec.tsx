import {mount} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {IRadioSelectAllProps, RadioSelect} from '../RadioSelect';
import {RadioSelectConnected} from '../RadioSelectConnected';

describe('RadioSelectConnected', () => {
    let store: Store<IReactVaporState>;

    beforeEach(() => {
        store = TestUtils.buildStore();
    });

    afterEach(() => {
        store.dispatch(clearState());
    });

    const mountComponentWithProps = (props: IRadioSelectAllProps = {id: 'someid'}) => mount(
        <Provider store={store}>
            <RadioSelectConnected {...props} />
        </Provider>,
        {attachTo: document.getElementById('App')},
    );

    const radioSelectProps = {
        id: 'radioSelectId',
    };
    const fullRadioSelectProps = {...radioSelectProps, valueOnMount: 'valueonmount', disabledValuesOnMount: ['disabledvalue']};

    describe('dispatch props', () => {
        it('should not throw when calling onRender with basic props', () => {
            expect(() => mountComponentWithProps(radioSelectProps).find(RadioSelect).prop('onMount')(radioSelectProps.id, 'somevalue', [])).not.toThrow();
        });

        it('should not throw when calling onUnmount', () => {
            expect(() => mountComponentWithProps(radioSelectProps).find(RadioSelect).prop('onUnmount')(radioSelectProps.id)).not.toThrow();
        });

        it('should not throw when calling onChange with basic props', () => {
            expect(() => mountComponentWithProps(radioSelectProps).find(RadioSelect).prop('onChange')('somevalue', radioSelectProps.id)).not.toThrow();
        });
    });

    describe('onMount', () => {
        it('should add a radioSelect in the store with proper values', () => {
            mountComponentWithProps(fullRadioSelectProps);

            const radioSelect = _.findWhere(store.getState().radioSelects, {id: fullRadioSelectProps.id});
            expect(radioSelect).toBeDefined();
            expect(_.values(radioSelect)).toEqual(_.values(fullRadioSelectProps));
        });
    });

    describe('onUnmount', () => {
        it('should remove the radioSelect from the store', () => {
            const radioSelect = mountComponentWithProps(fullRadioSelectProps);
            expect(_.findWhere(store.getState().radioSelects, {id: fullRadioSelectProps.id})).toBeDefined();

            radioSelect.unmount();
            expect(_.findWhere(store.getState().radioSelects, {id: fullRadioSelectProps.id})).toBeUndefined();
        });
    });

    describe('onChange', () => {
        it('should change the value in the store to the new value', () => {
            const radioSelect = mountComponentWithProps(fullRadioSelectProps);
            const oldRadioSelectState = _.findWhere(store.getState().radioSelects, {id: fullRadioSelectProps.id});
            expect(oldRadioSelectState.value).toBe(fullRadioSelectProps.valueOnMount);

            radioSelect.find(RadioSelect).prop('onChange')('new value', radioSelectProps.id);

            const newRadioSelectState = _.findWhere(store.getState().radioSelects, {id: fullRadioSelectProps.id});
            expect(newRadioSelectState.value).toBe('new value');
        });
    });
});
