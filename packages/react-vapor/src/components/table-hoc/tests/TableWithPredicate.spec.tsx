import {shallowWithState} from 'enzyme-redux';
import * as React from 'react';
import * as _ from 'underscore';
import {ITableHOCProps, TableHOC} from '../TableHOC';
import {TableHOCUtils} from '../TableHOCUtils';
import {tableWithPredicate} from '../TableWithPredicate';

describe('Table HOC', () => {
    describe('TableWithPredicate', () => {
        const predicateId = 'predicate-id';
        const predicateValues = [
            {displayValue: 'All', value: '', selected: true},
            {displayValue: 'test', value: 'test'},
        ];

        const TableWithPredicate = _.compose(
            tableWithPredicate({id: predicateId, values: predicateValues}),
        )(TableHOC);

        const defaultProps: ITableHOCProps = {
            id: 'a',
            data: [{value: 'a', city: 'not-test'}, {value: 'b', city: 'test'}],
            renderBody: _.identity,
        };

        const getStateWithPredicate = (predicate: string) => ({
            listBoxes: [{id: TableHOCUtils.getPredicateId(defaultProps.id, predicateId), selected: [predicate]}],
        });

        it('should not throw', () => {
            expect(shallowWithState(<TableWithPredicate id='a' data={[]} renderBody={_.identity} />, {}));
            expect(shallowWithState(<TableWithPredicate id='b' data={[{value: 'a'}]} renderBody={_.identity} />, {}));
        });

        it('should render a TableHOC', () => {
            const wrapper = shallowWithState(<TableWithPredicate {...defaultProps} />, {}).dive();
            expect(wrapper.find(TableHOC).exists()).toBe(true);
        });

        it('should add an action in the TableHOC props', () => {
            const wrapper = shallowWithState(<TableWithPredicate {...defaultProps} />, {}).dive();
            const actions = wrapper.find(TableHOC).prop('actions');
            expect(actions.length).toBe(1);
        });

        it('should filter out elements not matching the predicate in the state', () => {
            const predicate = predicateValues[1].value;
            const wrapper = shallowWithState(<TableWithPredicate {...defaultProps} />, getStateWithPredicate(predicate)).dive();

            const filteredData = _.filter(defaultProps.data, ({city}) => city === predicate);
            const tableData = wrapper.find(TableHOC).prop('data');

            expect(tableData).toEqual(filteredData);
        });

        describe('when server side', () => {
            const TableWithPredicateServer = _.compose(
                tableWithPredicate({id: predicateId, isServer: true, values: predicateValues}),
            )(TableHOC);

            it('should not filter out elements', () => {
                const predicate = predicateValues[1].value;
                const wrapper = shallowWithState(<TableWithPredicateServer {...defaultProps} />, getStateWithPredicate(predicate)).dive();

                const tableData = wrapper.find(TableHOC).prop('data');

                expect(tableData).toEqual(defaultProps.data);
            });

            it('should call onUpdate when the predicate changes', () => {
                const updateSpy = jasmine.createSpy('update');
                const predicate = predicateValues[1].value;
                const wrapper = shallowWithState(<TableWithPredicateServer {...defaultProps} onUpdate={updateSpy} />, getStateWithPredicate(predicate)).dive();

                wrapper.setProps({predicate: predicateValues[0].value});
                wrapper.update();

                expect(updateSpy).toHaveBeenCalledTimes(1);
            });

            it('should not call onUpdate when the predicate does not changes', () => {
                const updateSpy = jasmine.createSpy('update');
                const predicate = predicateValues[1].value;
                const wrapper = shallowWithState(<TableWithPredicateServer {...defaultProps} onUpdate={updateSpy} />, getStateWithPredicate(predicate)).dive();

                wrapper.setProps({ignore: true});
                wrapper.update();

                expect(updateSpy).not.toHaveBeenCalled();
            });
        });
    });
});
