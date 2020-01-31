import {shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';

import {ActionBarConnected} from '../../actions/ActionBar';
import {FilterBoxConnected} from '../../filterBox/FilterBoxConnected';
import {TableLoading} from '../../loading/components/TableLoading';
import {ITableHOCOwnProps, TableHOC} from '../TableHOC';

describe('TableHOC', () => {
    describe('<TableHOC/>', () => {
        const defaultProps: Partial<ITableHOCOwnProps> = {
            id: 'table',
            data: [],
            renderBody: _.identity,
        };

        it('should not throw', () => {
            expect(() => shallow(<TableHOC id="table" data={[]} renderBody={_.identity} />)).not.toThrow();
            expect(() => shallow(<TableHOC id="table-2" data={null} renderBody={_.identity} />)).not.toThrow();
        });

        it('should render a table', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} />);
            expect(wrapper.find('table').exists()).toBe(true);
        });

        it('should render the data', () => {
            const data = _.map(_.range(10), (i: number) => ({value: i}));
            const wrapper = shallow(
                <TableHOC
                    id="a"
                    data={data}
                    renderBody={(d: any[]) => _.map(d, ({value}) => <tr className={`row-${value}`}></tr>)}
                />
            );
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

        it('should add the TableLoading.Body Component instead of the tbody if isLoading is true', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} isLoading />);

            expect(wrapper.find(TableLoading.Body).length).toBe(1);
        });

        it('should not render the  TableLoading.Body Component if isLoading is false', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} isLoading={false} />);

            expect(wrapper.find(TableLoading.Body).length).toBe(0);
        });

        it('should not render an ActionBarConnected if the table prop hasActionButtons is false and the table have no actions', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} hasActionButtons={false} actions={[]} />);
            expect(wrapper.find(ActionBarConnected).exists()).toBe(false);
        });

        it('should render an ActionBarConnected if the table prop hasActionButtons is true', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} hasActionButtons />);
            expect(wrapper.find(ActionBarConnected).exists()).toBe(true);
        });

        it('should render an ActionBarConnected with a top border if the "hasBorderTop" is set to true', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} hasActionButtons showBorderTop />);
            expect(wrapper.find(ActionBarConnected).prop('extraContainerClasses')).toContain('mod-border-top');
        });

        it('should render an ActionBarConnected if the table prop hasActionButtons is false but the table have some actions', () => {
            const wrapper = shallow(
                <TableHOC {...defaultProps} actions={[<FilterBoxConnected />]} hasActionButtons={false} />
            );
            expect(wrapper.find(ActionBarConnected).exists()).toBe(true);
        });

        it('should keep the tbody with rows data during the loading', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} isLoading />);
            expect(wrapper.find('tbody').length).toBe(1);
        });

        it('should set the tbody rows data hidden during the loading', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} isLoading />);
            expect(wrapper.find('tbody').hasClass('hidden')).toBe(true);
        });

        it('should disabled actions on loading', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} actions={[<div />]} hasActionButtons isLoading />);
            expect(wrapper.find(ActionBarConnected).props().disabled).toBe(true);
        });

        it('should not disabled actions on loading is off', () => {
            const wrapper = shallow(
                <TableHOC {...defaultProps} actions={[<div />]} hasActionButtons isLoading={false} />
            );
            expect(wrapper.find(ActionBarConnected).props().disabled).toBe(false);
        });
    });
});
