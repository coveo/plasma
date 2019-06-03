import {shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';
import {ActionBarConnected} from '../../actions/ActionBarConnected';
import {FilterBoxConnected} from '../../filterBox/FilterBoxConnected';
import {ITableHOCOwnProps, TableHOC} from '../TableHOC';

describe('TableHOC', () => {
    describe('<TableHOC/>', () => {
        const defaultProps: Partial<ITableHOCOwnProps> = {
            id: 'table',
            data: [],
            renderBody: _.identity,
        };

        it('should not throw', () => {
            expect(() => shallow(<TableHOC id='table' data={[]} renderBody={_.identity} />)).not.toThrow();
            expect(() => shallow(<TableHOC id='table-2' data={null} renderBody={_.identity} />)).not.toThrow();
        });

        it('should render a table', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} />);
            expect(wrapper.find('table').exists()).toBe(true);
        });

        it('should render the data', () => {
            const data = _.map(_.range(10), (i: number) => ({value: i}));
            const wrapper = shallow(<TableHOC id='a' data={data} renderBody={(d: any[]) => _.map(d, ({value}) => <tr className={`row-${value}`}></tr>)} />);
            _.each(data, ({value}) => {
                expect(wrapper.find(`tr.row-${value}`).exists()).toBe(true);
            });
        });

        it('should allow custom classes on the table', () => {
            const expectedClass = 'some-class';
            const wrapper = shallow(<TableHOC {...defaultProps} className={expectedClass} />);
            expect(wrapper.find('table').hasClass(expectedClass)).toBe(true);
        });

        it('should render a .table-container', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} />);
            expect(wrapper.find('.table-container').exists()).toBe(true);
        });

        it('should allow custom classes on the .table-container', () => {
            const expectedClass = 'some-class';
            const wrapper = shallow(<TableHOC {...defaultProps} containerClassName={expectedClass} />);
            expect(wrapper.find('.table-container').hasClass(expectedClass)).toBe(true);
        });

        it('should add the loading-component class on the table if isLoading is true', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} />);
            expect(wrapper.find('.table-container').hasClass('loading-component')).toBe(false);

            wrapper.setProps({isLoading: true});
            wrapper.update();

            expect(wrapper.find('.table-container').hasClass('loading-component')).toBe(true);
        });

        it('should not render an ActionBarConnected if the table prop hasActionButtons is false and the table have no actions', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} hasActionButtons={false} actions={[]} />);
            expect(wrapper.find(ActionBarConnected).exists()).toBe(false);
        });

        it('should render an ActionBarConnected if the table prop hasActionButtons is true', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} hasActionButtons />);
            expect(wrapper.find(ActionBarConnected).exists()).toBe(true);
        });

        it('should render an ActionBarConnected if the table prop hasActionButtons is false but the table have some actions', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} actions={[<FilterBoxConnected />]} hasActionButtons={false} />);
            expect(wrapper.find(ActionBarConnected).exists()).toBe(true);
        });
    });
});
