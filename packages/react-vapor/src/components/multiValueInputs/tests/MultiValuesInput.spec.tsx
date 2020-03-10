import {shallowWithState} from 'enzyme-redux';
import * as React from 'react';

import {InputConnected} from '../../input/InputConnected';
import {MultiValuesInput} from '../MultiValuesInput';

describe('MultiValuesInput', () => {
    it('should render and unmount without throwing errors', () => {
        expect(() => {
            const component = shallowWithState(<MultiValuesInput id="🚗" data={['🚕', '🚌', '🚒']} />, {}).dive();
            component.unmount();
        }).not.toThrow();
    });

    it('should create an input for every value in data', () => {
        const values = ['🚕', '🚌', '🚒'];
        const component = shallowWithState(<MultiValuesInput id="🚗" data={values} />, {}).dive();

        const body = shallowWithState(<div>{(component.prop('renderBody') as any)(values)}</div>, {});
        expect(body.find(InputConnected).length).toBe(values.length);
    });
});
