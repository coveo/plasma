import {shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import {createMockStore, mockStore} from 'redux-test-utils';
import * as _ from 'underscore';
import {IReactVaporState} from '../../../ReactVapor';
import {turnOffLoading} from '../../loading/LoadingActions';
import {NavigationConnected} from '../../navigation/NavigationConnected';
import {TableWithPaginationActions} from '../actions/TableWithPaginationActions';
import {ITableHOCProps, TableHOC} from '../TableHOC';
import {TableHOCUtils} from '../TableHOCUtils';
import {tableWithPagination} from '../TableWithPagination';

describe('Table HOC', () => {
    describe('TableWithPagination', () => {
        let store: mockStore<IReactVaporState>;

        const TableWithPagination = _.compose(
            tableWithPagination(),
        )(TableHOC);

        const defaultProps: ITableHOCProps = {
            id: 'a',
            data: _.map(_.range(10), (i: number) => ({value: i})),
            renderBody: _.identity,
        };

        beforeEach(() => {
            store = createMockStore({
                tableHOCPagination: [],
                paginationComposite: [],
                perPageComposite: [],
            });
        });

        it('should not throw', () => {
            expect(() => shallowWithStore(<TableWithPagination id='a' data={[]} renderBody={_.identity} />, store)).not.toThrow();
            expect(() => shallowWithStore(<TableWithPagination id='b' data={[{value: 'a'}]} renderBody={_.identity} />, store)).not.toThrow();
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

            expect(store.isActionDispatched(expectedAction)).toBe(true);
        });

        it('should dispatch a TableWithPaginationActions.add on mount', () => {
            const expectedAction = TableWithPaginationActions.add(defaultProps.id);

            shallowWithStore(<TableWithPagination {...defaultProps} />, store).dive();

            expect(store.isActionDispatched(expectedAction)).toBe(true);
        });

        it('should dispatch an TableWithPaginationActions.remove on componentWillUnmount', () => {
            const expectedAction = TableWithPaginationActions.remove(defaultProps.id);

            const wrapper = shallowWithStore(<TableWithPagination {...defaultProps} />, store).dive();
            wrapper.unmount();

            expect(store.isActionDispatched(expectedAction)).toBe(true);
        });

        describe('with store data', () => {
            const getStoreWithPage = (pageNb: number, perPage: number, count: number = 0) => {
                return createMockStore({
                    tableHOCPagination: [{id: defaultProps.id, count}],
                    paginationComposite: [{id: TableHOCUtils.getPaginationId(defaultProps.id), pageNb}],
                    perPageComposite: [{id: defaultProps.id, perPage}],
                });
            };

            it('should not throw if the data is null', () => {
                store = getStoreWithPage(1, 5);
                expect(() => shallowWithStore(<TableWithPagination {...defaultProps} data={null} />, store).dive()).not.toThrow();
            });

            it('should return the correct page', () => {
                const perPage = 3;
                const page = 2;

                store = getStoreWithPage(page, perPage);
                const wrapper = shallowWithStore(<TableWithPagination {...defaultProps} />, store).dive();
                const tableData = wrapper.find(TableHOC).prop('data');
                expect(tableData).toEqual(defaultProps.data.slice((page * perPage), (page + 1) * perPage));
            });

            describe('when server side', () => {
                const TableWithPaginationServer = _.compose(
                    tableWithPagination({isServer: true}),
                )(TableHOC);

                it('should not slice data', () => {
                    const perPage = 3;
                    const page = 2;

                    store = getStoreWithPage(page, perPage);
                    const wrapper = shallowWithStore(<TableWithPaginationServer {...defaultProps} />, store).dive();
                    const tableData = wrapper.find(TableHOC).prop('data');
                    expect(tableData).toEqual(defaultProps.data);
                });

                it('should call onUpdate when the pageNb or perPage changes', () => {
                    const updateSpy = jasmine.createSpy('update');
                    const initialPage = 2;
                    const initialPerPage = 2;

                    store = getStoreWithPage(initialPage, initialPerPage);
                    const wrapper = shallowWithStore(<TableWithPaginationServer {...defaultProps} onUpdate={updateSpy} />, store).dive();

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
                    const wrapper = shallowWithStore(<TableWithPaginationServer {...defaultProps} onUpdate={updateSpy} />, store).dive();

                    wrapper.setProps({ignore: true});
                    wrapper.update();

                    expect(updateSpy).not.toHaveBeenCalled();
                });
            });
        });
    });
});
