import {ShallowWrapper} from 'enzyme';
import {shallowWithState, shallowWithStore} from '@test-utils';
import * as _ from 'underscore';

import {TableHOCUtils} from '..';
import {getStoreMock} from '../../../utils/tests/TestUtils';
import {PER_PAGE_NUMBERS} from '../../navigation/perPage';
import {PaginationUtils} from '../../pagination/PaginationUtils';
import {TablePagination} from '../../pagination/TablePagination';
import {TableWithPaginationActions} from '../actions';
import {TableHOC} from '../TableHOC';
import {
    ITableWithNewPaginationConfig,
    ITableWithNewPaginationProps,
    tableWithNewPagination,
} from '../TableWithNewPagination';
import {ITableWithPaginationProps} from '../TableWithPagination';

describe('TableWithNewPagination tests', () => {
    describe('<TableWithNewPagination />', () => {
        it('should mount and unmount without errors', () => {
            const TableWithNewPagination = _.compose(tableWithNewPagination())(TableHOC);

            expect(() => {
                const wrapper = shallowWithState(<TableWithNewPagination />, {}).dive();
                wrapper.unmount();
            }).not.toThrow();
        });

        describe('once mounted', () => {
            let wrapper: ShallowWrapper<ITableWithPaginationProps>;
            const shallowTableWithNewPagination = (
                config: Partial<ITableWithNewPaginationConfig> = {},
                props: Partial<ITableWithNewPaginationProps> = {},
                state = {},
            ) => {
                const TableWithNewPagination = _.compose(tableWithNewPagination(config))(TableHOC);
                return shallowWithState(<TableWithNewPagination {...props} />, state).dive();
            };

            it('should set the defaultPerPageSelected for <TablePagination /> with the second value in the array if defined', () => {
                wrapper = shallowTableWithNewPagination({perPageNumbers: [3, 5, 10]}).dive();

                expect(wrapper.find(TablePagination).props().defaultPerPageSelected).toBe(5);
            });

            it('should set the defaultPerPageSelected for <TablePagination /> with the first value if only 1 value in the array', () => {
                wrapper = shallowTableWithNewPagination({perPageNumbers: [3]}).dive();

                expect(wrapper.find(TablePagination).props().defaultPerPageSelected).toBe(3);
            });

            it('should set the defaultPerPageSelected for <TablePagination /> with the default value in PER_PAGE_NUMBERS if perPageNumbers is empty', () => {
                wrapper = shallowTableWithNewPagination({perPageNumbers: []}).dive();

                expect(wrapper.find(TablePagination).props().defaultPerPageSelected).toBe(PER_PAGE_NUMBERS[1]);
            });

            it('should not call onUpdate if the pageNb dont change', () => {
                const spy = jest.fn();
                wrapper = shallowTableWithNewPagination(
                    {perPageNumbers: []},
                    {onUpdate: spy, id: 'test'},
                    {
                        flatSelect: [{id: PaginationUtils.getPaginationPerPageId('test'), selectedOptionId: 2}],
                        paginationComposite: [{id: TableHOCUtils.getPaginationId('test'), pageNb: 2}],
                    },
                ).dive();

                wrapper.setProps({pageNb: 2, perPage: 2});

                expect(spy).toHaveBeenCalledTimes(0);
            });

            it('should call onUpdate if the pageNb change', () => {
                const spy = jest.fn();
                wrapper = shallowTableWithNewPagination(
                    {perPageNumbers: []},
                    {onUpdate: spy, id: 'test'},
                    {
                        flatSelect: [{id: PaginationUtils.getPaginationPerPageId('test'), selectedOptionId: 2}],
                        paginationComposite: [{id: TableHOCUtils.getPaginationId('test'), pageNb: 2}],
                    },
                ).dive();

                wrapper.setProps({pageNb: 3, perPage: 2});

                expect(spy).toHaveBeenCalledTimes(1);
            });

            it('should not call onUpdate if the perPage dont change', () => {
                const spy = jest.fn();
                wrapper = shallowTableWithNewPagination(
                    {perPageNumbers: []},
                    {onUpdate: spy, id: 'test'},
                    {
                        flatSelect: [{id: PaginationUtils.getPaginationPerPageId('test'), selectedOptionId: 2}],
                        paginationComposite: [{id: TableHOCUtils.getPaginationId('test'), pageNb: 2}],
                    },
                ).dive();

                wrapper.setProps({pageNb: 2, perPage: 2});

                expect(spy).toHaveBeenCalledTimes(0);
            });

            it('should call onUpdate if the perPage change', () => {
                const spy = jest.fn();
                wrapper = shallowTableWithNewPagination(
                    {perPageNumbers: []},
                    {onUpdate: spy, id: 'test'},
                    {
                        flatSelect: [{id: PaginationUtils.getPaginationPerPageId('test'), selectedOptionId: 2}],
                        paginationComposite: [{id: TableHOCUtils.getPaginationId('test'), pageNb: 2}],
                    },
                ).dive();

                wrapper.setProps({pageNb: 2, perPage: 3});

                expect(spy).toHaveBeenCalledTimes(1);
            });
        });

        describe('dispatch', () => {
            const shallowTableWithNewPaginationWithStore = (
                store: ReturnType<typeof getStoreMock>,
                config: Partial<ITableWithNewPaginationConfig> = {},
                props: Partial<ITableWithNewPaginationProps> = {},
            ) => {
                const TableWithNewPagination = _.compose(tableWithNewPagination(config))(TableHOC);
                return shallowWithStore(<TableWithNewPagination {...props} />, store).dive();
            };

            it('should add the table pagination in the store on mount', () => {
                const store = getStoreMock();
                shallowTableWithNewPaginationWithStore(store, {perPageNumbers: []}, {id: 'test'}).dive();

                expect(store.getActions()).toContainEqual(TableWithPaginationActions.add('test'));
            });

            it('should remove the table pagination in the store on unmount', () => {
                const store = getStoreMock();
                const wrapper = shallowTableWithNewPaginationWithStore(
                    store,
                    {perPageNumbers: []},
                    {id: 'test'},
                ).dive();
                wrapper.unmount();

                expect(store.getActions()).toContainEqual(TableWithPaginationActions.remove('test'));
            });
        });
    });
});
