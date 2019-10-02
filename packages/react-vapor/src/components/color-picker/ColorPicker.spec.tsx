import {mountWithStore, shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import {ChromePicker} from 'react-color';
import {getStoreMock, ReactVaporMockStore, TestUtils} from '../../utils/tests/TestUtils';
import {addInput, removeInput} from '../input/InputActions';
import {InputConnected} from '../input/InputConnected';
import {InputSelectors} from '../input/InputSelectors';
import {ColorPicker} from './ColorPicker';

describe('ColorPicker', () => {
    let store: ReactVaporMockStore;

    beforeEach(() => {
        store = getStoreMock();
    });

    it('should mount and unmount without error', () => {
        expect(() => {
            const picker = shallowWithStore(<ColorPicker />, store);
            picker.unmount();
        }).not.toThrow();
    });

    it('should render a ChromeColorPicker ', () => {
        const picker = shallowWithStore(<ColorPicker />, store).dive();
        expect(picker.find(ChromePicker).length).toBe(1);
    });

    it('should pass down props to ChromePicker', () => {
        const picker = shallowWithStore(<ColorPicker disableAlpha={true} />, store).dive();
        expect(picker.find(ChromePicker).props().disableAlpha).toBe(true);
    });

    it('should render an InputConnected', () => {
        const picker = shallowWithStore(<ColorPicker />, store).dive();
        expect(picker.find(InputConnected).length).toBe(1);
    });

    it('should sync the InputConnected and ChromePicker with color props', () => {
        const picker = shallowWithStore(<ColorPicker defaultColor="#fff" />, store).dive();
        expect(picker.find(ChromePicker).prop('color')).toBe('#fff');
        expect(picker.find(InputConnected).prop('defaultValue')).toBe('#fff');
    });

    it('should make the color available from state', () => {
        const nonMockStore = TestUtils.buildStore();
        mountWithStore(<ColorPicker defaultColor="#47FF21" id="color-picker-test" />, nonMockStore);
        expect(InputSelectors.getValue(nonMockStore.getState(), {id: 'color-picker-test'})).toBe('#47FF21');
    });

    it('should add state input on mount', () => {
        mountWithStore(<ColorPicker id="foo" />, store);
        expect(store.getActions()).toContain(addInput('foo'));
    });

    it('should remove state input on destroy', () => {
        const picker = mountWithStore(<ColorPicker id="foo" />, store);
        picker.unmount();
        expect(store.getActions()).toContain(removeInput('foo'));
    });
});
