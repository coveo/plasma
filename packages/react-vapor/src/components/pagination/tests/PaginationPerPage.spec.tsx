import {shallowWithState} from 'enzyme-redux';
import * as React from 'react';
import {FlatSelectWithPrepend} from '../../flatSelect/FlatSelectWithPrepend';
import {PaginationPerPage} from '../PaginationPerPage';

describe('PaginationPerPage', () => {
    describe('<PaginationPerPage /> tests', () => {
        it('should mount and unmount without errors', () => {
            expect(() => {
                const wrapper = shallowWithState(<PaginationPerPage id={'id'} />, {});
                wrapper.unmount();
            });
        });

        it('should add an option for each number in the perPage array', () => {
            const wrapper = shallowWithState(<PaginationPerPage id={'id'} perPage={[1, 2, 3]} />, {});
            expect(wrapper.find(FlatSelectWithPrepend).props().options.length).toBe(3);
        });
    });
});
