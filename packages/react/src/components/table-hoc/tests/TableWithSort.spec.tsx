import {shallowWithState} from '@test-utils';
import * as _ from 'underscore';

import {withServerSideProcessing} from '../../../hoc/withServerSideProcessing/withServerSideProcessing.js';
import {ITableHOCProps, TableHOC} from '../TableHOC.js';
import {tableWithSort} from '../TableWithSort.js';

describe('Table HOC', () => {
    describe('TableWithSort', () => {
        const TableWithSort = _.compose(
            tableWithSort({sort: (sortKey: string, isAsc: boolean, a: any, b: any) => b.value - a.value})
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
            expect(() => {
                shallowWithState(<TableWithSort id="a" data={[]} renderBody={_.identity} />, {})
                    .dive()
                    .dive();
                shallowWithState(<TableWithSort id="b" data={[{value: 'a'}]} renderBody={_.identity} />, {})
                    .dive()
                    .dive();
            }).not.toThrow();
        });

        it('should render a TableHOC', () => {
            const wrapper = shallowWithState(<TableWithSort {...defaultProps} />, {})
                .dive()
                .dive();

            expect(wrapper.find(TableHOC).exists()).toBe(true);
        });

        it('should not throw if the ownProps data is null', () => {
            expect(() => {
                shallowWithState(<TableWithSort {...defaultProps} data={null} />, {})
                    .dive()
                    .dive();
            }).not.toThrow();
        });

        it('should sort elements', () => {
            const wrapper = shallowWithState(<TableWithSort {...defaultProps} />, getStateWithSort(true, 'value'))
                .dive()
                .dive();

            const sortedData = [...defaultProps.data].sort((a, b) => b.value - a.value);
            const tableData = wrapper.find(TableHOC).prop('data');

            expect(tableData).toEqual(sortedData);
        });

        it('should not sort if the function is not defined', () => {
            const TableWithDefaultSort = _.compose(tableWithSort({}))(TableHOC);

            const wrapper = shallowWithState(
                <TableWithDefaultSort {...defaultProps} />,
                getStateWithSort(true, 'value')
            )
                .dive()
                .dive();
            const tableData = wrapper.find(TableHOC).prop('data');

            expect(tableData).toEqual(defaultProps.data);
        });

        describe('when server side', () => {
            const TableWithPredicateServer = _.compose(withServerSideProcessing, tableWithSort())(TableHOC);

            it('should not sort elements', () => {
                const wrapper = shallowWithState(
                    <TableWithPredicateServer {...defaultProps} />,
                    getStateWithSort(true, 'value')
                )
                    .dive()
                    .dive()
                    .dive();

                const tableData = wrapper.find(TableHOC).prop('data');

                expect(tableData).toEqual(defaultProps.data);
            });

            it('should call onUpdate when the sort changes', () => {
                const updateSpy = jest.fn();
                const wrapper = shallowWithState(
                    <TableWithPredicateServer {...defaultProps} onUpdate={updateSpy} />,
                    getStateWithSort(true, 'value')
                )
                    .dive()
                    .dive()
                    .dive();

                wrapper.setProps({isAsc: false} as any);
                wrapper.update();

                expect(updateSpy).toHaveBeenCalledTimes(1);
            });

            it('should not call onUpdate when the predicate does not changes', () => {
                const updateSpy = jest.fn();
                const wrapper = shallowWithState(
                    <TableWithPredicateServer {...defaultProps} onUpdate={updateSpy} />,
                    getStateWithSort(true, 'value')
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
