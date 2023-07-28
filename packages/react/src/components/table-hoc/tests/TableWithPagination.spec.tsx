import {shallowWithStore} from '@test-utils';
import {ComponentType, PropsWithChildren} from 'react';
import * as _ from 'underscore';

import {withServerSideProcessing} from '../../../hoc/withServerSideProcessing/withServerSideProcessing';
import {getStoreMock, PlasmaMockStore} from '../../../utils/tests/TestUtils';
import {turnOffLoading} from '../../loading/LoadingActions';
import {NavigationConnected} from '../../navigation/NavigationConnected';
import {TableWithPaginationActions} from '../actions/TableWithPaginationActions';
import {ITableHOCProps, TableHOC} from '../TableHOC';
import {ITableWithPaginationProps, tableWithPagination} from '../TableWithPagination';
import {TableHOCUtils} from '../utils/TableHOCUtils';

describe('Table HOC', () => {
    describe('TableWithPagination', () => {
        let store: PlasmaMockStore;

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
                shallowWithStore(<TableWithPagination id="a" data={[]} renderBody={_.identity} />, store).dive(),
            ).not.toThrow();

            expect(() =>
                shallowWithStore(
                    <TableWithPagination id="b" data={[{value: 'a'}]} renderBody={_.identity} />,
                    store,
                ).dive(),
            ).not.toThrow();
        });

        it('should render a TableHOC', () => {
            const wrapper = shallowWithStore(<TableWithPagination {...defaultProps} />, store)
                .dive()
                .dive();

            expect(wrapper.find(TableHOC).exists()).toBe(true);
        });

        it('should render a NavigationConnected', () => {
            const wrapper = shallowWithStore(<TableWithPagination {...defaultProps} />, store)
                .dive()
                .dive();

            expect(wrapper.find(NavigationConnected).exists()).toBe(true);
        });

        it('should dispatch a turnOffLoading on mount', () => {
            const expectedAction = turnOffLoading([`loading-${defaultProps.id}`]);

            shallowWithStore(<TableWithPagination {...defaultProps} />, store)
                .dive()
                .dive();

            expect(store.getActions()).toContainEqual(expectedAction);
        });

        it('should dispatch a TableWithPaginationActions.add on mount', () => {
            const expectedAction = TableWithPaginationActions.add(defaultProps.id);

            shallowWithStore(<TableWithPagination {...defaultProps} />, store)
                .dive()
                .dive();

            expect(store.getActions()).toContainEqual(expectedAction);
        });

        it('should dispatch an TableWithPaginationActions.remove on componentWillUnmount', () => {
            const expectedAction = TableWithPaginationActions.remove(defaultProps.id);

            const wrapper = shallowWithStore(<TableWithPagination {...defaultProps} />, store)
                .dive()
                .dive();
            wrapper.unmount();

            expect(store.getActions()).toContainEqual(expectedAction);
        });

        it('should slice the data according to the perPageNumbers specified in the HOC config', () => {
            const expectedPerPageNumbers = [2, 3, 4];
            const MyTable: ComponentType<PropsWithChildren<ITableWithPaginationProps>> = _.compose(
                tableWithPagination({perPageNumbers: expectedPerPageNumbers}),
            )(TableHOC);
            const table = shallowWithStore(<MyTable {...defaultProps} />, getStoreMock())
                .dive()
                .dive();

            expect(table.find(NavigationConnected).prop('perPageNumbers')).toEqual(expectedPerPageNumbers);
        });

        it('should always have a totalPages count of 1 or more', () => {
            const table = shallowWithStore(<TableWithPagination id="💎" renderBody={_.identity} data={[]} />, store)
                .dive()
                .dive();

            expect(table.find(NavigationConnected).prop('totalPages')).toBe(1);
        });

        describe('with store data', () => {
            const getStoreWithPage = (pageNb: number, perPage: number, count: number = 0) =>
                getStoreMock({
                    tableHOCPagination: [{id: defaultProps.id, count}],
                    paginationComposite: [{id: TableHOCUtils.getPaginationId(defaultProps.id), pageNb}],
                    perPageComposite: [{id: defaultProps.id, perPage}],
                });

            it('should not throw if the data is null', () => {
                store = getStoreWithPage(1, 5);

                expect(() =>
                    shallowWithStore(<TableWithPagination {...defaultProps} data={null} />, store)
                        .dive()
                        .dive(),
                ).not.toThrow();
            });

            it('should return the correct page', () => {
                const perPage = 3;
                const page = 2;

                store = getStoreWithPage(page, perPage);
                const wrapper = shallowWithStore(<TableWithPagination {...defaultProps} />, store)
                    .dive()
                    .dive();
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
                        .dive()
                        .dive();
                    const tableData = wrapper.find(TableHOC).prop('data');

                    expect(tableData).toEqual(defaultProps.data);
                });

                it('should call onUpdate when the pageNb or perPage changes', () => {
                    const updateSpy = jest.fn();
                    const initialPage = 2;
                    const initialPerPage = 2;

                    store = getStoreWithPage(initialPage, initialPerPage);
                    const wrapper = shallowWithStore(
                        <TableWithPaginationServer {...defaultProps} onUpdate={updateSpy} />,
                        store,
                    )
                        .dive()
                        .dive()
                        .dive();

                    wrapper.setProps({pageNb: initialPage + 1} as any);
                    wrapper.update();

                    expect(updateSpy).toHaveBeenCalledTimes(1);

                    wrapper.setProps({perPage: initialPerPage + 1} as any);
                    wrapper.update();

                    expect(updateSpy).toHaveBeenCalledTimes(2);
                });

                it('should not call onUpdate when pageNb & perPage does not changes', () => {
                    const updateSpy = jest.fn();

                    store = getStoreWithPage(1, 10);
                    const wrapper = shallowWithStore(
                        <TableWithPaginationServer {...defaultProps} onUpdate={updateSpy} />,
                        store,
                    )
                        .dive()
                        .dive()
                        .dive();

                    wrapper.setProps({ignore: true} as any);
                    wrapper.update();

                    expect(updateSpy).not.toHaveBeenCalled();
                });
            });
        });
    });
});
