import {mount, shallow} from 'enzyme';
import * as React from 'react';
import {ChromePicker} from 'react-color';
import {Provider} from 'react-redux';
import {getStoreMock} from '../../utils/tests/TestUtils';
import {InputConnected} from '../input/InputConnected';
import {ColorPicker} from './ColorPicker';

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

    it('should sync the InputConnected and ChromePicker color props', () => {
        const picker = shallow(<ColorPicker color="#fff" />);
        expect(picker.find(ChromePicker).prop('color')).toBe('#fff');
        expect(picker.find(InputConnected).prop('defaultValue')).toBe('#fff');
    });
});
