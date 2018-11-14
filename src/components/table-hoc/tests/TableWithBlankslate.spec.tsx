import {shallowWithState} from 'enzyme-redux';
import * as React from 'react';
import * as _ from 'underscore';
import {BlankSlate} from '../../blankSlate/BlankSlate';
import {ITableHOCProps, TableHOC} from '../TableHOC';
import {tableWithBlankSlate} from '../TableWithBlankslate';

describe('Table HOC', () => {
    describe('TableWithBlankSlate', () => {
        const TableWithBlankSlate = _.compose(
            tableWithBlankSlate(),
        )(TableHOC);

        const defaultProps: ITableHOCProps = {
            id: 'a',
            data: [],
            renderData: _.identity,
        };

        it('should not throw', () => {
            expect(shallowWithState(<TableWithBlankSlate {...defaultProps} />, {}));
            expect(shallowWithState(<TableWithBlankSlate {...defaultProps} data={[{value: 'a'}]} />, {}));
        });

        describe('props and content', () => {

            const shallowWithProps = (props: Partial<ITableHOCProps> = {}) => {
                return shallowWithState(<TableWithBlankSlate {...defaultProps} {...props} />, {});
            };

            let renderSpy: jasmine.Spy;
            beforeEach(() => {
                renderSpy = jasmine.createSpy('render');
            });

            it('should render a TableHOC', () => {
                const wrapper = shallowWithProps().dive();
                expect(wrapper.find(TableHOC).exists()).toBe(true);
            });

            it('should override the TableHOC renderData method when the data is empty', () => {
                const wrapper = shallowWithProps({renderData: renderSpy}).dive();
                const tableRenderData = wrapper.find(TableHOC).prop('renderData') as () => any;
                tableRenderData();

                expect(renderSpy).not.toHaveBeenCalled();
            });

            it('should override the TableHOC renderData method to return null when the data is empty', () => {
                const wrapper = shallowWithProps().dive();
                const tableRenderData = wrapper.find(TableHOC).prop('renderData') as () => any;

                expect(tableRenderData()).toBe(null);
            });

            it('should not override the TableHOC renderData method when there is data', () => {
                const wrapper = shallowWithProps({data: [{value: 'a'}], renderData: renderSpy}).dive();
                const tableRenderData = wrapper.find(TableHOC).prop('renderData') as () => any;
                tableRenderData();

                expect(renderSpy).toHaveBeenCalledTimes(1);
            });

            it('should render a BlankSlate when the data is empty', () => {
                const wrapper = shallowWithProps().dive();
                expect(wrapper.find(BlankSlate).exists()).toBe(true);
            });

            it('should not render a BlankSlate when the data is null', () => {
                const wrapper = shallowWithProps({data: null}).dive();
                expect(wrapper.find(BlankSlate).exists()).toBe(false);
            });

            it('should render the first BlankSlate when the data is empty', () => {
                const expectedTitle = 'First';
                const TableWithDoubleBlankSlate = _.compose(
                    tableWithBlankSlate({title: expectedTitle}),
                    tableWithBlankSlate({title: 'Second'}),
                )(TableHOC);

                const wrapper = shallowWithState(<TableWithDoubleBlankSlate {...defaultProps} />, {}).dive();
                expect(wrapper.find(BlankSlate).prop('title')).toBe(expectedTitle);
            });
        });
    });
});
