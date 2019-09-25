import {mount, shallow} from 'enzyme';
import * as React from 'react';
import {ChromePicker} from 'react-color';
import {Provider} from 'react-redux';
import {getStoreMock, TestUtils} from '../../utils/tests/TestUtils';
import {removeInput} from '../input/InputActions';
import {InputConnected} from '../input/InputConnected';
import {InputSelectors} from '../input/InputSelectors';
import {ColorPicker, ColorPickerConnected} from './ColorPicker';

describe('ColorPicker', () => {
    it('should mount and unmount without error', () => {
        expect(() => {
            const picker = mount(
                <Provider store={getStoreMock()}>
                    <ColorPicker />
                </Provider>
            );
            picker.unmount();
        }).not.toThrow();
    });

    it('should render a ChromeColorPicker ', () => {
        const picker = shallow(<ColorPicker />);
        expect(picker.find(ChromePicker).length).toBe(1);
    });

    it('should pass down props to ChromePicker', () => {
        const picker = shallow(<ColorPicker disableAlpha={true} />);
        expect(picker.find(ChromePicker).props().disableAlpha).toBe(true);
    });

    it('should render an InputConnected', () => {
        const picker = shallow(<ColorPicker />);
        expect(picker.find(InputConnected).length).toBe(1);
    });

    it('should sync the InputConnected and ChromePicker with color props', () => {
        const picker = shallow(<ColorPicker color="#fff" />);
        expect(picker.find(ChromePicker).prop('color')).toBe('#fff');
        expect(picker.find(InputConnected).prop('defaultValue')).toBe('#fff');
    });

    it('should make the color available from state', () => {
        const store = TestUtils.buildStore();
        mount(
            <Provider store={store}>
                <ColorPickerConnected defaultColor="#47FF21" id="color-picker-test" />
            </Provider>
        );
        expect(InputSelectors.getValue(store.getState(), {id: 'color-picker-test'})).toBe('#47FF21');
    });

    it('should remove state input on destroy', () => {
        const store = getStoreMock();
        spyOn(store, 'dispatch');
        const picker = mount(
            <Provider store={store}>
                <ColorPicker id="foo" />
            </Provider>
        );
        picker.unmount();
        expect(store.dispatch).toHaveBeenCalledWith(removeInput('foo'));
    });
});
