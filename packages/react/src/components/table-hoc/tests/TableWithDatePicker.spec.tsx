import {shallowWithState} from '@test-utils';
import moment from 'moment';
import * as _ from 'underscore';

import {withServerSideProcessing} from '../../../hoc/withServerSideProcessing/withServerSideProcessing.js';
import {ITableHOCProps, TableHOC} from '../TableHOC.js';
import {FilterableTableComponent, tableWithDatePicker} from '../TableWithDatePicker.js';

describe('Table HOC', () => {
    describe('TableWithDatePicker', () => {
        const TableWithDatePicker = _.compose(tableWithDatePicker())(TableHOC);

        const defaultProps: ITableHOCProps = {
            id: 'a',
            data: _.map(_.range(10), (i) => moment().subtract(i, 'm').toDate()),
            renderBody: _.identity,
        };

        const getStateWithDatePicker = (lowerLimit: Date = null, upperLimit: Date = null) => ({
            datePickers: [
                {id: 'not-this-one'},
                {id: defaultProps.id, appliedLowerLimit: lowerLimit, appliedUpperLimit: upperLimit},
            ],
        });

        it('should not throw', () => {
            expect(() => {
                shallowWithState(<TableWithDatePicker id="a" data={[]} renderBody={_.identity} />, {})
                    .dive()
                    .dive();
                shallowWithState(<TableWithDatePicker id="b" data={[{value: 'a'}]} renderBody={_.identity} />, {})
                    .dive()
                    .dive();
            }).not.toThrow();
        });

        it('should render a TableHOC', () => {
            const wrapper = shallowWithState(<TableWithDatePicker {...defaultProps} />, {})
                .dive()
                .dive();

            expect(wrapper.find(TableHOC).exists()).toBe(true);
        });

        it('renders without throwing errors when no dates are initially selected and the table updates', () => {
            expect(() => {
                const table = shallowWithState(<TableWithDatePicker {...defaultProps} />, {})
                    .dive()
                    .dive();
                table.setProps({}); // triggering an update
            }).not.toThrow();
        });

        it('should not filter the rows if no function is sent in the config', () => {
            const wrapper = shallowWithState(
                <TableWithDatePicker {...defaultProps} />,
                getStateWithDatePicker(new Date())
            )
                .dive()
                .dive();
            const tableData = wrapper.find(TableHOC).prop('data');

            expect(tableData).toEqual(defaultProps.data);
        });

        describe('with a matchDates function', () => {
            let matchDatesSpy: jest.Mock<any, any>;
            let TableWithDatePickerAndMatch: FilterableTableComponent;

            beforeEach(() => {
                matchDatesSpy = jest.fn(() => true);

                TableWithDatePickerAndMatch = _.compose(tableWithDatePicker({matchDates: matchDatesSpy}))(TableHOC);
            });

            it('should filter call the matchDates function for every rows', () => {
                const lowerLimit = moment().subtract(10, 'm').toDate();

                shallowWithState(<TableWithDatePickerAndMatch {...defaultProps} />, getStateWithDatePicker(lowerLimit))
                    .dive()
                    .dive();

                expect(matchDatesSpy).toHaveBeenCalledTimes(defaultProps.data.length);
                _.forEach(defaultProps.data, (value: Date) => {
                    expect(matchDatesSpy).toHaveBeenCalledWith(value, lowerLimit, null);
                });
            });

            it('should filter call the matchDates function with lower & upper for every rows', () => {
                const lowerLimit = moment().subtract(10, 'm').toDate();
                const upperLimit = moment().subtract(5, 'm').toDate();

                shallowWithState(
                    <TableWithDatePickerAndMatch {...defaultProps} />,
                    getStateWithDatePicker(lowerLimit, upperLimit)
                )
                    .dive()
                    .dive();

                expect(matchDatesSpy).toHaveBeenCalledTimes(defaultProps.data.length);
                _.forEach(defaultProps.data, (value: Date) => {
                    expect(matchDatesSpy).toHaveBeenCalledWith(value, lowerLimit, upperLimit);
                });
            });
        });

        describe('when server side', () => {
            const TableWithDatePickerServer = _.compose(withServerSideProcessing, tableWithDatePicker())(TableHOC);

            it('should not filter out elements if the date picker is server side', () => {
                const wrapper = shallowWithState(
                    <TableWithDatePickerServer {...defaultProps} />,
                    getStateWithDatePicker(new Date())
                )
                    .dive()
                    .dive()
                    .dive();

                const tableData = wrapper.find(TableHOC).prop('data');

                expect(tableData).toEqual(defaultProps.data);
            });

            it('should call onUpdate when the lowerLimit changes', () => {
                const updateSpy = jest.fn();
                const lowerLimit = moment().subtract(5, 'm').toDate();
                const wrapper = shallowWithState(
                    <TableWithDatePickerServer {...defaultProps} onUpdate={updateSpy} />,
                    getStateWithDatePicker(lowerLimit)
                )
                    .dive()
                    .dive()
                    .dive();

                wrapper.setProps({lowerLimit: new Date()} as any);
                wrapper.update();

                expect(updateSpy).toHaveBeenCalledTimes(1);
            });

            it('should call onUpdate when the upperLimit changes', () => {
                const updateSpy = jest.fn();
                const lowerLimit = moment().subtract(15, 'm').toDate();
                const upperLimit = moment().subtract(5, 'm').toDate();
                const wrapper = shallowWithState(
                    <TableWithDatePickerServer {...defaultProps} onUpdate={updateSpy} />,
                    getStateWithDatePicker(lowerLimit, upperLimit)
                )
                    .dive()
                    .dive()
                    .dive();

                wrapper.setProps({upperLimit: new Date()} as any);
                wrapper.update();

                expect(updateSpy).toHaveBeenCalledTimes(1);
            });

            it('should not call onUpdate when the date picker does not changes', () => {
                const updateSpy = jest.fn();
                const lowerLimit = moment().subtract(5, 'm').toDate();
                const wrapper = shallowWithState(
                    <TableWithDatePickerServer {...defaultProps} onUpdate={updateSpy} />,
                    getStateWithDatePicker(lowerLimit, new Date())
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
