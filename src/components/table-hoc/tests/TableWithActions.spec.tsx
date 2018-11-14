import {shallow} from 'enzyme';
import {shallowWithState} from 'enzyme-redux';
import * as React from 'react';
import * as _ from 'underscore';
import {TableHOC} from '../TableHOC';
import {tableWithActions} from '../TableWithActions';

describe('Table HOC', () => {
    describe('TableWithActions', () => {
        const TableWithActions = _.compose(
            tableWithActions(),
        )(TableHOC);

        it('should not throw', () => {
            expect(shallow(<TableWithActions id='a' data={[]} renderBody={_.identity} />));
            expect(shallow(<TableWithActions id='b' data={[{value: 'a'}]} renderBody={(allData: any[]) => _.map(allData, (data: any) => <tr><td>{data.value}</td></tr>)} />));
        });

        it('should render a TableHOC', () => {
            const wrapper = shallowWithState(<TableWithActions id='a' data={[]} renderBody={_.identity} />, {});
            expect(wrapper.find(TableHOC).exists()).toBe(true);
        });

        it('should add the hasActionButtons prop on the table', () => {
            const wrapper = shallowWithState(<TableWithActions id='a' data={[]} renderBody={_.identity} />, {});
            expect(wrapper.find(TableHOC).prop('hasActionButtons')).toBe(true);
        });
    });
});
