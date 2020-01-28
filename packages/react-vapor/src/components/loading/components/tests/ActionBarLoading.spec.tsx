import {shallow} from 'enzyme';
import * as React from 'react';
import {ActionBarLoading} from '../ActionBarLoading';

describe('ActionBarLoading tests', () => {
    describe('<ActionBarLoading />', () => {
        it('should mount and unmount without errors', () => {
            expect(() => {
                const wrapper = shallow(<ActionBarLoading />, {});
                wrapper.unmount();
            });
        });
    });
});
