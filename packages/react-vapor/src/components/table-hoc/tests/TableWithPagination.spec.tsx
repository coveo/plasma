import {shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import * as _ from 'underscore';

import {withServerSideProcessing} from '../../../hoc/withServerSideProcessing/withServerSideProcessing';
import {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';
import {turnOffLoading} from '../../loading/LoadingActions';
import {NavigationConnected} from '../../navigation/NavigationConnected';
import {TableWithPaginationActions} from '../actions/TableWithPaginationActions';
import {ITableHOCProps, TableHOC} from '../TableHOC';
import {ITableWithPaginationProps, tableWithPagination} from '../TableWithPagination';
import {TableHOCUtils} from '../utils/TableHOCUtils';

describe('Table HOC', () => {
    describe('TableWithPagination', () => {
        let store: ReactVaporMockStore;

        const TableWithPagination = _.compose(tableWithPagination())(TableHOC);

        const defaultProps: ITableHOCProps = {
            id: 'a',
            data: _.map(_.range(10), (i: number) => ({value: i})),
            renderBody: _.identity,
        };

        beforeEach(() => {
            store = getStoreMock({
                tableHOCPagination: [],
                paginationComposite: [],
                perPageComposite: [],
            });
        });

        it('should not throw', () => {
            expect(() =>
                shallowWithStore(<TableWithPagination id="a" data={[]} renderBody={_.identity} />, store)
            ).not.toThrow();
            expect(() =>
                shallowWithStore(<TableWithPagination id="b" data={[{value: 'a'}]} renderBody={_.identity} />, store)
            ).not.toThrow();
        });

        it('should render a TableHOC', () => {
            const wrapper = shallowWithStore(<TableWithPagination {...defaultProps} />, store).dive();
            expect(wrapper.find(TableHOC).exists()).toBe(true);
        });

        it('should render a NavigationConnected', () => {
            const wrapper = shallowWithStore(<TableWithPagination {...defaultProps} />, store).dive();
            expect(wrapper.find(NavigationConnected).exists()).toBe(true);
        });

        it('should dispatch a turnOffLoading on mount', () => {
            const expectedAction = turnOffLoading([`loading-${defaultProps.id}`]);

            shallowWithStore(<TableWithPagination {...defaultProps} />, store).dive();

            expect(store.getActions()).toContain(expectedAction);
        });

        it('should dispatch a TableWithPaginationActions.add on mount', () => {
            const expectedAction = TableWithPaginationActions.add(defaultProps.id);

            shallowWithStore(<TableWithPagination {...defaultProps} />, store).dive();

            expect(store.getActions()).toContain(expectedAction);
        });

        it('should dispatch an TableWithPaginationActions.remove on componentWillUnmount', () => {
            const expectedAction = TableWithPaginationActions.remove(defaultProps.id);

            const wrapper = shallowWithStore(<TableWithPagination {...defaultProps} />, store).dive();
            wrapper.unmount();

            expect(store.getActions()).toContain(expectedAction);
        });

        it('should slice the data according to the perPageNumbers specified in the HOC config', () => {
            const expectedPerPageNumbers = [2, 3, 4];
            const MyTable: React.ComponentType<ITableWithPaginationProps> = _.compose(
                tableWithPagination({perPageNumbers: expectedPerPageNumbers})
            )(TableHOC);
            const table = shallowWithStore(<MyTable {...defaultProps} />, getStoreMock()).dive();

            expect(table.find(NavigationConnected).prop('perPageNumbers')).toEqual(expectedPerPageNumbers);
        });

        it('should always have a totalPages count of 1 or more', () => {
            const table = shallowWithStore(
                <TableWithPagination id="💎" renderBody={_.identity} data={[]} />,
                store
            ).dive();

            expect(table.find(NavigationConnected).prop('totalPages')).toBe(1);
        });

        describe('with store data', () => {
            const getStoreWithPage = (pageNb: number, perPage: number, count: number = 0) => {
                return getStoreMock({
                    tableHOCPagination: [{id: defaultProps.id, count}],
                    paginationComposite: [{id: TableHOCUtils.getPaginationId(defaultProps.id), pageNb}],
                    perPageComposite: [{id: defaultProps.id, perPage}],
                });
            };

            it('should not throw if the data is null', () => {
                store = getStoreWithPage(1, 5);
                expect(() =>
                    shallowWithStore(<TableWithPagination {...defaultProps} data={null} />, store).dive()
                ).not.toThrow();
            });

            it('should return the correct page', () => {
                const perPage = 3;
                const page = 2;

                store = getStoreWithPage(page, perPage);
                const wrapper = shallowWithStore(<TableWithPagination {...defaultProps} />, store).dive();
                const tableData = wrapper.find(TableHOC).prop('data');
                expect(tableData).toEqual(defaultProps.data.slice(page * perPage, (page + 1) * perPage));
            });

            describe('when server side', () => {
                const TableWithPaginationServer = _.compose(withServerSideProcessing, tableWithPagination())(TableHOC);

                it('should not slice data', () => {
                    const perPage = 3;
                    const page = 2;

                    store = getStoreWithPage(page, perPage);
                    const wrapper = shallowWithStore(<TableWithPaginationServer {...defaultProps} />, store)
                        .dive()
                        .dive();
                    const tableData = wrapper.find(TableHOC).prop('data');
                    expect(tableData).toEqual(defaultProps.data);
                });

                it('should call onUpdate when the pageNb or perPage changes', () => {
                    const updateSpy = jasmine.createSpy('update');
                    const initialPage = 2;
                    const initialPerPage = 2;

                    store = getStoreWithPage(initialPage, initialPerPage);
                    const wrapper = shallowWithStore(
                        <TableWithPaginationServer {...defaultProps} onUpdate={updateSpy} />,
                        store
                    )
                        .dive()
                        .dive();

                    wrapper.setProps({pageNb: initialPage + 1});
                    wrapper.update();

                    expect(updateSpy).toHaveBeenCalledTimes(1);

                    wrapper.setProps({perPage: initialPerPage + 1});
                    wrapper.update();

                    expect(updateSpy).toHaveBeenCalledTimes(2);
                });

                it('should not call onUpdate when pageNb & perPage does not changes', () => {
                    const updateSpy = jasmine.createSpy('update');

                    store = getStoreWithPage(1, 10);
                    const wrapper = shallowWithStore(
                        <TableWithPaginationServer {...defaultProps} onUpdate={updateSpy} />,
                        store
                    )
                        .dive()
                        .dive();

                    wrapper.setProps({ignore: true});
                    wrapper.update();

                    expect(updateSpy).not.toHaveBeenCalled();
                });
            });
        });
    });
});
