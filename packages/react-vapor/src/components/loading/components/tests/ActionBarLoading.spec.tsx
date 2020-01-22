import {shallowWithState} from 'enzyme-redux';
import * as React from 'react';
import {ActionBarLoading} from '../ActionBarLoading';

describe('ActionBarLoading tests', () => {
    describe('<ActionBarLoading />', () => {
        it('should mount and unmount without errors', () => {
            expect(() => {
                const wrapper = shallowWithState(<ActionBarLoading />, {});
                wrapper.unmount();
            });
        });
    });
});
