import {shallow} from 'enzyme';
import * as React from 'react';
import {PaginationPerPage} from '../PaginationPerPage';
import {TablePagination} from '../TablePagination';

describe('TablePagination', () => {
    describe('<TablePagination /> tests', () => {
        it('should mount and unmount without errors', () => {
            expect(() => {
                const wrapper = shallow(
                    <TablePagination
                        id={'id'}
                        totalPages={1}
                        perPageNumbers={[1, 3, 5]}
                        defaultPerPageSelected={1}
                        totalEntries={1}
                    />,
                    {}
                );

                wrapper.unmount();
            }).not.toThrow();
        });

        describe('<PaginationPerPage /> child', () => {
            it('should set <PaginationPerPage/> hidden if the perPageNumbers is empty', () => {
                const wrapper = shallow(
                    <TablePagination
                        id={'id'}
                        totalPages={1}
                        perPageNumbers={[5]}
                        defaultPerPageSelected={1}
                        totalEntries={1}
                    />,
                    {}
                );

                expect(wrapper.find(PaginationPerPage).props().hidden).toBe(true);
            });

            it('should set <PaginationPerPage/> hidden if the first value of perPageNumber is greater than the totalEntries', () => {
                const wrapper = shallow(
                    <TablePagination
                        id={'id'}
                        totalPages={1}
                        perPageNumbers={[5]}
                        defaultPerPageSelected={1}
                        totalEntries={1}
                    />,
                    {}
                );

                expect(wrapper.find(PaginationPerPage).props().hidden).toBe(true);
            });
        });
    });
});
