import {ReactWrapper} from 'enzyme';
import {mountWithStore} from 'enzyme-redux';
import * as React from 'react';
import {act} from 'react-dom/test-utils';
import {MockStoreEnhanced} from 'redux-mock-store';
import * as _ from 'underscore';

import {IReactVaporState} from '../../../ReactVaporState';
import {IDispatch} from '../../../utils';
import {getStoreMock} from '../../../utils/tests/TestUtils';
import {CodeEditor} from '../CodeEditor';
import {JSONEditor, JSONEditorProps} from '../JSONEditor';
import {JSONEditorActions} from '../JSONEditorActions';
import {JSONEditorConnected} from '../JSONEditorConnected';
import {JSONEditorUtils} from '../JSONEditorUtils';

describe('<JSONEditorConnected />', () => {
    let store: MockStoreEnhanced<Partial<IReactVaporState>, IDispatch<IReactVaporState>>;
    let wrapper: ReactWrapper;
    const basicProps: JSONEditorProps = {
        id: '💙',
        value: '{}',
    };

    const mountComponent = (state: IReactVaporState = {}, props = basicProps) => {
        if (wrapper?.length) {
            wrapper.unmount();
        }
        store = getStoreMock(state);
        wrapper = mountWithStore(<JSONEditorConnected {...props} />, store);
    };

    it('should mount and unmount without errors', () => {
        expect(() => {
            mountComponent();
            wrapper.unmount();
        }).not.toThrow();
    });

    it('should not throw when calling onMount', () => {
        mountComponent();

        expect(() => wrapper.find(JSONEditor).prop('onMount')()).not.toThrow();
    });

    it('should not throw when calling onUnmount', () => {
        mountComponent();

        expect(() => wrapper.find(JSONEditor).prop('onUnmount')()).not.toThrow();
    });

    it('should not throw when calling onChange', () => {
        mountComponent();

        expect(() => wrapper.find(JSONEditor).prop('onChange')('{}', false)).not.toThrow();
    });

    it('should render value from store', () => {
        const expectedValue = '{"test": "asdf"}';
        mountComponent({jsonEditors: [{id: basicProps.id, value: expectedValue, valid: true}]});

        expect(wrapper.find(JSONEditor).prop('value')).toEqual(expectedValue);
    });

    it('should dispatch addJSONEditor action on mount', () => {
        act(mountComponent);

        expect(store.getActions()).toContainEqual(JSONEditorActions.addJSONEditor(basicProps.id, basicProps.value));
    });

    it('should dispatch removeJSONEditor action on unmount', () => {
        act(mountComponent);
        wrapper.unmount();

        expect(store.getActions()).toContainEqual(JSONEditorActions.removeJSONEditor(basicProps.id));
    });

    it('should dispatch updateJSONEditorValue action on change', () => {
        const expectedValue = '{"new-value": "fdsa"}';
        act(mountComponent);
        wrapper.find(CodeEditor).prop('onChange')(expectedValue);

        expect(store.getActions()).toContainEqual(
            JSONEditorActions.updateJSONEditorValue(basicProps.id, expectedValue)
        );
    });

    it('should call the onChange function from props if it is provided', () => {
        const expectedValue = '{"new-value": "fdsa"}';
        const onChangeSpy = jest.fn();

        act(() => mountComponent({}, {...basicProps, onChange: onChangeSpy}));
        wrapper.find(CodeEditor).prop('onChange')(expectedValue);

        expect(onChangeSpy).toHaveBeenCalled();
        expect(onChangeSpy).toHaveBeenCalledTimes(1);
        expect(onChangeSpy).toHaveBeenCalledWith(expectedValue, !JSONEditorUtils.validateValue(expectedValue));
    });
});
