import {shallowWithState} from 'enzyme-redux';
import * as React from 'react';
import * as _ from 'underscore';
import {ITableHOCProps, TableHOC} from '../TableHOC';
import {tableWithFilter} from '../TableWithFilter';

describe('Table HOC', () => {
    describe('TableWithFilter', () => {
        const TableWithFilter = _.compose(
            tableWithFilter(),
        )(TableHOC);

        const defaultProps: ITableHOCProps = {
            id: 'a',
            data: [{value: 'a'}, {value: 'b'}],
            renderBody: _.identity,
        };

        const getStateWithFilter = (filter: string) => ({filters: [{id: defaultProps.id, filterText: filter}]});

        it('should not throw', () => {
            expect(shallowWithState(<TableWithFilter id='a' data={[]} renderBody={_.identity} />, {}));
            expect(shallowWithState(<TableWithFilter id='b' data={[{value: 'a'}]} renderBody={_.identity} />, {}));
        });

        it('should render a TableHOC', () => {
            const wrapper = shallowWithState(<TableWithFilter {...defaultProps} />, {}).dive();
            expect(wrapper.find(TableHOC).exists()).toBe(true);
        });

        it('should filter out elements not matching the filter in the state', () => {
            const filterText = 'b';
            const wrapper = shallowWithState(<TableWithFilter {...defaultProps} />, getStateWithFilter(filterText)).dive();

            const filteredData = _.filter(defaultProps.data, ({value}) => value === filterText);
            const tableData = wrapper.find(TableHOC).prop('data');

            expect(tableData).toEqual(filteredData);
        });

        describe('when server side', () => {
            const TableWithFilterServer = _.compose(
                tableWithFilter({isServer: true}),
            )(TableHOC);

            it('should not filter out elements if the filter is server side', () => {
                const filterText = 'b';
                const wrapper = shallowWithState(<TableWithFilterServer {...defaultProps} />, getStateWithFilter(filterText)).dive();

                const tableData = wrapper.find(TableHOC).prop('data');

                expect(tableData).toEqual(defaultProps.data);
            });

            it('should call onUpdate when the filter changes', () => {
                const updateSpy = jasmine.createSpy('update');
                const filterText = 'b';
                const wrapper = shallowWithState(<TableWithFilterServer {...defaultProps} onUpdate={updateSpy} />, getStateWithFilter(filterText)).dive();

                wrapper.setProps({filter: 'a'});
                wrapper.update();

                expect(updateSpy).toHaveBeenCalledTimes(1);
            });

            it('should not call onUpdate when the filter does not changes', () => {
                const updateSpy = jasmine.createSpy('update');
                const filterText = 'b';
                const wrapper = shallowWithState(<TableWithFilterServer {...defaultProps} onUpdate={updateSpy} />, getStateWithFilter(filterText)).dive();

                wrapper.setProps({ignore: true});
                wrapper.update();

                expect(updateSpy).not.toHaveBeenCalled();
            });
        });
    });
});
