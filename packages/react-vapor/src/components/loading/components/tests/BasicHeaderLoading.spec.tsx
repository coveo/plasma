import {shallowWithState} from 'enzyme-redux';
import * as React from 'react';
import {BasicHeaderLoading} from '../BasicHeaderLoading';

describe('BasicHeaderLoading tests', () => {
    describe('<BasicHeaderLoading />', () => {
        it('should mount and unmount without errors', () => {
            expect(() => {
                const wrapper = shallowWithState(<BasicHeaderLoading />, {});
                wrapper.unmount();
            });
        });
    });
});
