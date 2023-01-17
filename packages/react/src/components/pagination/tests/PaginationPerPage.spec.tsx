import {shallow} from 'enzyme';

import {FlatSelectWithPrepend} from '../../flatSelect/FlatSelectWithPrepend.js';
import {PaginationPerPage} from '../PaginationPerPage.js';

describe('PaginationPerPage', () => {
    describe('<PaginationPerPage /> tests', () => {
        it('should mount and unmount without errors', () => {
            expect(() => {
                const wrapper = shallow(<PaginationPerPage id={'id'} />, {});
                wrapper.unmount();
            }).not.toThrow();
        });

        it('should add an option for each number in the perPage array', () => {
            const wrapper = shallow(<PaginationPerPage id={'id'} perPage={[1, 2, 3]} />, {});

            expect(wrapper.find(FlatSelectWithPrepend).props().options.length).toBe(3);
        });
    });
});
