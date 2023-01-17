import {shallow} from 'enzyme';

import {PaginationLoading} from '../PaginationLoading.js';

describe('PaginationLoading tests', () => {
    describe('<PaginationLoading />', () => {
        it('should mount and unmount without errors', () => {
            expect(() => {
                const wrapper = shallow(<PaginationLoading />, {});
                wrapper.unmount();
            }).not.toThrow();
        });
    });
});
