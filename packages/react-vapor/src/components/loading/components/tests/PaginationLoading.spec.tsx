import {shallow} from 'enzyme';
import * as React from 'react';
import {PaginationLoading} from '../PaginationLoading';

describe('PaginationLoading tests', () => {
    describe('<PaginationLoading />', () => {
        it('should mount and unmount without errors', () => {
            expect(() => {
                const wrapper = shallow(<PaginationLoading />, {});
                wrapper.unmount();
            });
        });
    });
});
