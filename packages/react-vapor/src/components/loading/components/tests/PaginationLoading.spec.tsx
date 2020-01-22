import {shallowWithState} from 'enzyme-redux';
import * as React from 'react';
import {PaginationLoading} from '../PaginationLoading';

describe('PaginationLoading tests', () => {
    describe('<PaginationLoading />', () => {
        it('should mount and unmount without errors', () => {
            expect(() => {
                const wrapper = shallowWithState(<PaginationLoading />, {});
                wrapper.unmount();
            });
        });
    });
});
