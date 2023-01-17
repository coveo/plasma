import {shallow, ShallowWrapper} from 'enzyme';
import {shallowWithState} from '@test-utils';
import * as _ from 'underscore';

import {withServerSideProcessing} from '../../../hoc/withServerSideProcessing/withServerSideProcessing.js';
import {IBlankSlateProps} from '../../blankSlate.js';
import {ITableHOCProps, TableHOC} from '../TableHOC.js';
import {TableSelectors} from '../TableSelectors.js';
import {tableWithFilter} from '../TableWithFilter.js';

describe('Table HOC', () => {
    describe('TableWithFilter', () => {
        const TableWithFilter = _.compose(tableWithFilter())(TableHOC);

        const defaultProps: ITableHOCProps = {
            id: 'a',
            data: [{value: 'a'}, {value: 'b'}],
            renderBody: _.identity,
        };

        const getStateWithFilter = (filter: string) => ({filters: [{id: defaultProps.id, filterText: filter}]});

        it('should not throw', () => {
            expect(() => {
                shallowWithState(<TableWithFilter id="a" data={[]} renderBody={_.identity} />, {})
                    .dive()
                    .dive()
                    .dive();
                shallowWithState(<TableWithFilter id="b" data={[{value: 'a'}]} renderBody={_.identity} />, {})
                    .dive()
                    .dive()
                    .dive();
            }).not.toThrow();
        });

        it('should filter out elements not matching the filter in the state', () => {
            const filterText = 'b';
            const wrapper = shallowWithState(<TableWithFilter {...defaultProps} />, getStateWithFilter(filterText))
                .dive()
                .dive();

            const filteredData = _.filter(defaultProps.data, ({value}) => value === filterText);
            const tableData = wrapper.find(TableHOC).prop('data');

            expect(tableData).toEqual(filteredData);
        });

        describe('when server side', () => {
            const TableWithFilterServer = _.compose(withServerSideProcessing, tableWithFilter())(TableHOC);

            it('should not filter out elements if the filter is server side', () => {
                const filterText = 'b';
                const wrapper = shallowWithState(
                    <TableWithFilterServer {...defaultProps} />,
                    getStateWithFilter(filterText)
                )
                    .dive()
                    .dive()
                    .dive();

                const tableData = wrapper.find(TableHOC).prop('data');

                expect(tableData).toEqual(defaultProps.data);
            });

            it('should call onUpdate when the filter changes', () => {
                const updateSpy = jest.fn();
                const filterText = 'b';
                const wrapper = shallowWithState(
                    <TableWithFilterServer {...defaultProps} onUpdate={updateSpy} />,
                    getStateWithFilter(filterText)
                )
                    .dive()
                    .dive()
                    .dive();

                wrapper.setProps({filter: 'a'} as any);
                wrapper.update();

                expect(updateSpy).toHaveBeenCalledTimes(1);
            });

            it('should not call onUpdate when the filter does not changes', () => {
                const updateSpy = jest.fn();
                const filterText = 'b';
                const wrapper = shallowWithState(
                    <TableWithFilterServer {...defaultProps} onUpdate={updateSpy} />,
                    getStateWithFilter(filterText)
                )
                    .dive()
                    .dive()
                    .dive();

                wrapper.setProps({ignore: true} as any);
                wrapper.update();

                expect(updateSpy).not.toHaveBeenCalled();
            });

            it('should render a blankSlate as renderBody if the data is empty and the filter is not empty', () => {
                jest.spyOn(TableSelectors, 'getIsTrulyEmpty').mockReturnValueOnce(true);
                const wrapper = shallowWithState(
                    <TableWithFilterServer {...defaultProps} data={null} />,
                    getStateWithFilter('filterText')
                );

                const wrapperRenderBody: ShallowWrapper<IBlankSlateProps> = shallow(
                    (wrapper as any).dive().dive().dive().props().renderBody()
                );

                expect((wrapperRenderBody.instance().props as IBlankSlateProps).title).toBeDefined();
            });
        });
    });
});
