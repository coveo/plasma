import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {TableSortingOrder} from '../TableConstants';
import {ITableHeaderCellProps, TableHeaderCell} from '../TableHeaderCell';
import {TableHeaderCellConnected} from '../TableHeaderCellConnected';

describe('Tables', () => {
    describe('<TableHeaderCellConnected />', () => {
        let wrapper: ReactWrapper<any, any>;
        let store: Store<IReactVaporState>;
        let basicTableHeaderCellConnectedProps;
        let tableHeaderCell: ReactWrapper<ITableHeaderCellProps, any>;

        beforeEach(() => {
            basicTableHeaderCellConnectedProps = {
                title: 'awesome attribute title',
                id: 'header-cell',
                attributeToSort: 'awesomeAttribute',
                tableId: 'table-id',
            };

            store = TestUtils.buildStore();

            wrapper = mount(
                <Provider store={store}>
                    <table>
                        <thead>
                            <tr>
                                <TableHeaderCellConnected {...basicTableHeaderCellConnectedProps} />
                                <TableHeaderCellConnected {...basicTableHeaderCellConnectedProps} id='header-cell-2' />
                            </tr>
                        </thead>
                    </table>
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            tableHeaderCell = wrapper.find(TableHeaderCell).first();
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper.detach();
        });

        it('should get its sorted prop from the state', () => {
            const sortedProp = tableHeaderCell.props().sorted;

            expect(sortedProp).toBeDefined();
            expect(sortedProp).toBe(TableSortingOrder.UNSORTED);
        });

        it('should get what to do onMount', () => {
            const onMount = tableHeaderCell.props().onMount;

            expect(onMount).toBeDefined();
        });

        it('should get what to do onUnmount', () => {
            const onUnmount = tableHeaderCell.props().onUnmount;

            expect(onUnmount).toBeDefined();
        });

        it('should get what to do onSort', () => {
            const onSort = tableHeaderCell.props().onSort;

            expect(onSort).toBeDefined();
        });

        it('should change the sorted attribute to ASCENDING after one click', () => {
            tableHeaderCell.simulate('click');
            wrapper.update();
            expect(wrapper.find(TableHeaderCell).first().props().sorted).toBe(TableSortingOrder.ASCENDING);
        });

        it('should change the sorted attribute to DESCENDING after two clicks', () => {
            tableHeaderCell.simulate('click').simulate('click');
            wrapper.update();
            expect(wrapper.find(TableHeaderCell).first().props().sorted).toBe(TableSortingOrder.DESCENDING);
        });

        it('should change the sorted attribute to ASCENDING after three clicks', () => {
            tableHeaderCell.simulate('click').simulate('click').simulate('click');
            wrapper.update();
            expect(wrapper.find(TableHeaderCell).first().props().sorted).toBe(TableSortingOrder.ASCENDING);
        });

        it('should sort the clicked header cell and unsort the others with the same tableId', () => {
            const tableHeaderCell2 = wrapper.find(TableHeaderCell).last();

            tableHeaderCell.simulate('click');
            wrapper.update();
            expect(wrapper.find(TableHeaderCell).first().props().sorted).toBe(TableSortingOrder.ASCENDING);

            tableHeaderCell2.simulate('click');
            expect(wrapper.find(TableHeaderCell).first().props().sorted).toBe(TableSortingOrder.UNSORTED);
            expect(wrapper.find(TableHeaderCell).last().props().sorted).toBe(TableSortingOrder.ASCENDING);
        });
    });
});
