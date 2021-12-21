import {shallowWithStore} from '@helpers/enzyme-redux';
import * as React from 'react';
import {ChromePicker} from 'react-color';

import {getStoreMock, ReactVaporMockStore} from '../../utils/tests/TestUtils';
import {InputConnected} from '../input/Input';
import {ColorPicker} from './ColorPicker';

describe('ColorPicker', () => {
    let store: ReactVaporMockStore;

    beforeEach(() => {
        store = getStoreMock();
    });

    it('should mount and unmount without error', () => {
        expect(() => {
            const picker = shallowWithStore(<ColorPicker id="🆔" />, store)
                .dive()
                .dive();
            picker.unmount();
        }).not.toThrow();
    });

    it('should render a ChromeColorPicker', () => {
        const picker = shallowWithStore(<ColorPicker id="🆔" />, store)
            .dive()
            .dive();

        expect(picker.find(ChromePicker).length).toBe(1);
    });

    it('should pass down props to ChromePicker', () => {
        const picker = shallowWithStore(<ColorPicker id="🆔" disableAlpha={true} />, store)
            .dive()
            .dive();

        expect(picker.find(ChromePicker).props().disableAlpha).toBe(true);
    });

    it('should contain an InputConnected with the same id', () => {
        const component = shallowWithStore(<ColorPicker id="foo" />, store)
            .dive()
            .dive();

        const input = component.find(InputConnected);
        expect(input.exists()).toBe(true);
        expect(input.prop('id')).toBe('foo');
    });

    it('should sync the InputConnected and ChromePicker with color props', () => {
        const picker = shallowWithStore(<ColorPicker id="🆔" defaultColor="#fff" />, store)
            .dive()
            .dive();

        expect(picker.find(ChromePicker).prop('color')).toBe('#fff');
        expect(picker.find(InputConnected).prop('defaultValue')).toBe('#fff');
    });
});
