import {shallowWithState} from 'enzyme-redux';
import * as React from 'react';
import * as _ from 'underscore';
import {ITableHOCProps, TableHOC} from '../TableHOC';
import {tableWithSort} from '../TableWithSort';

describe('Table HOC', () => {
    describe('TableWithSort', () => {
        const TableWithSort = _.compose(
            tableWithSort({sort: (sortKey: string, isAsc: boolean, a: any, b: any) => b.value - a.value}),
        )(TableHOC);

        const defaultProps: ITableHOCProps = {
            id: 'a',
            data: [{value: 10}, {value: 5}],
            renderBody: _.identity,
        };

        const getStateWithSort = (isAsc: boolean, sortKey: string) => ({
            tableHOCHeader: [{tableId: defaultProps.id, sortKey, isAsc}],
        });

        it('should not throw', () => {
            expect(shallowWithState(<TableWithSort id='a' data={[]} renderBody={_.identity} />, {}));
            expect(shallowWithState(<TableWithSort id='b' data={[{value: 'a'}]} renderBody={_.identity} />, {}));
        });

        it('should render a TableHOC', () => {
            const wrapper = shallowWithState(<TableWithSort {...defaultProps} />, {}).dive();
            expect(wrapper.find(TableHOC).exists()).toBe(true);
        });

        it('should sort elements', () => {
            const wrapper = shallowWithState(<TableWithSort {...defaultProps} />, getStateWithSort(true, 'value')).dive();

            const sortedData = [...defaultProps.data].sort((a, b) => b.value - a.value);
            const tableData = wrapper.find(TableHOC).prop('data');

            expect(tableData).toEqual(sortedData);
        });

        it('should not sort if the function is not defined', () => {
            const TableWithDefaultSort = _.compose(
                tableWithSort({}),
            )(TableHOC);

            const wrapper = shallowWithState(<TableWithDefaultSort {...defaultProps} />, getStateWithSort(true, 'value')).dive();
            const tableData = wrapper.find(TableHOC).prop('data');

            expect(tableData).toEqual(defaultProps.data);
        });

        describe('when server side', () => {
            const TableWithPredicateServer = _.compose(
                tableWithSort({isServer: true}),
            )(TableHOC);

            it('should not sort elements', () => {
                const wrapper = shallowWithState(<TableWithPredicateServer {...defaultProps} />, getStateWithSort(true, 'value')).dive();

                const tableData = wrapper.find(TableHOC).prop('data');

                expect(tableData).toEqual(defaultProps.data);
            });

            it('should call onUpdate when the sort changes', () => {
                const updateSpy = jasmine.createSpy('update');
                const wrapper = shallowWithState(<TableWithPredicateServer {...defaultProps} onUpdate={updateSpy} />, getStateWithSort(true, 'value')).dive();

                wrapper.setProps({isAsc: false});
                wrapper.update();

                expect(updateSpy).toHaveBeenCalledTimes(1);
            });

            it('should not call onUpdate when the predicate does not changes', () => {
                const updateSpy = jasmine.createSpy('update');
                const wrapper = shallowWithState(<TableWithPredicateServer {...defaultProps} onUpdate={updateSpy} />, getStateWithSort(true, 'value')).dive();

                wrapper.setProps({ignore: true});
                wrapper.update();

                expect(updateSpy).not.toHaveBeenCalled();
            });
        });
    });
});
