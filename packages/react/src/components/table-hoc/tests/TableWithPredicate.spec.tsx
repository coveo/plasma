import userEvent from '@testing-library/user-event';
import {shallowWithState} from '@test-utils';
import {ReactNode} from 'react';
import {render, screen} from '@test-utils';
import * as _ from 'underscore';

import {withServerSideProcessing} from '../../../hoc/withServerSideProcessing/withServerSideProcessing.js';
import {SingleSelectWithFilter} from '../../select/hoc/SelectComponents.js';
import {ITableHOCProps, TableHOC} from '../TableHOC.js';
import {tableWithPredicate, tableWithPredicateGeneric} from '../TableWithPredicate.js';
import {TableHOCUtils} from '../utils/TableHOCUtils.js';

describe('Table HOC', () => {
    describe('TableWithPredicateGeneric', () => {
        const predicateId = 'predicate-id';
        const predicateValues = [
            {displayValue: 'All', value: '', selected: true},
            {displayValue: 'test', value: 'test'},
        ];

        const TableWithPredicate = _.compose(
            tableWithPredicateGeneric({id: predicateId})((props) => (
                <SingleSelectWithFilter id={props.id} items={predicateValues} />
            ))
        )(TableHOC);

        const defaultProps: ITableHOCProps = {
            id: 'a',
            data: [
                {value: 'a', city: 'not-test'},
                {value: 'b', city: 'test'},
            ],
            renderBody: _.identity,
        };

        const getStateWithPredicate = (predicate: string) => ({
            listBoxes: [{id: TableHOCUtils.getPredicateId(defaultProps.id, predicateId), selected: [predicate]}],
        });

        it('should not throw', () => {
            expect(() => {
                shallowWithState(<TableWithPredicate id="a" data={[]} renderBody={_.identity} />, {});
                shallowWithState(<TableWithPredicate id="b" data={[{value: 'a'}]} renderBody={_.identity} />, {});
            }).not.toThrow();
        });

        it('should render a TableHOC', () => {
            const wrapper = shallowWithState(<TableWithPredicate {...defaultProps} />, {})
                .dive()
                .dive();

            expect(wrapper.find(TableHOC).exists()).toBe(true);
        });

        it('should add an action in the TableHOC props', () => {
            const wrapper = shallowWithState(<TableWithPredicate {...defaultProps} />, {})
                .dive()
                .dive();
            const actions = wrapper.find(TableHOC).prop('actions');

            expect(actions.length).toBe(1);
        });

        it('should filter out elements not matching the predicate in the state', () => {
            const predicate = predicateValues[1].value;
            const wrapper = shallowWithState(<TableWithPredicate {...defaultProps} />, getStateWithPredicate(predicate))
                .dive()
                .dive();

            const filteredData = _.filter(defaultProps.data, ({city}) => city === predicate);
            const tableData = wrapper.find(TableHOC).prop('data');

            expect(tableData).toEqual(filteredData);
        });

        describe('when server side', () => {
            const TableWithPredicateServer = _.compose(
                withServerSideProcessing,
                tableWithPredicate({id: predicateId, values: predicateValues})
            )(TableHOC);

            it('should not filter out elements', () => {
                const predicate = predicateValues[1].value;
                const wrapper = shallowWithState(
                    <TableWithPredicateServer {...defaultProps} />,
                    getStateWithPredicate(predicate)
                )
                    .dive()
                    .dive()
                    .dive();

                const tableData = wrapper.find(TableHOC).prop('data');

                expect(tableData).toEqual(defaultProps.data);
            });

            it('should call onUpdate when the predicate changes', () => {
                const updateSpy = jest.fn();
                const predicate = predicateValues[1].value;
                const wrapper = shallowWithState(
                    <TableWithPredicateServer {...defaultProps} onUpdate={updateSpy} />,
                    getStateWithPredicate(predicate)
                )
                    .dive()
                    .dive()
                    .dive();

                wrapper.setProps({predicate: predicateValues[0].value} as any);
                wrapper.update();

                expect(updateSpy).toHaveBeenCalledTimes(1);
            });

            it('should not call onUpdate when the predicate does not changes', () => {
                const updateSpy = jest.fn();
                const predicate = predicateValues[1].value;
                const wrapper = shallowWithState(
                    <TableWithPredicateServer {...defaultProps} onUpdate={updateSpy} />,
                    getStateWithPredicate(predicate)
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

    describe('TableWithPredicate', () => {
        const predicateId = 'predicate-id';
        const predicateValues = [
            {displayValue: 'All', value: '-1', selected: true},
            {displayValue: 'test', value: 'test'},
        ];

        const TableWithPredicate = _.compose(tableWithPredicate({id: predicateId, values: predicateValues}))(TableHOC);

        const defaultProps: ITableHOCProps = {
            id: 'a',
            data: [
                {value: 'a', city: 'not-test'},
                {value: 'b', city: 'test'},
            ],
            renderBody: (data: any[]): ReactNode =>
                data.map((x) => (
                    <tr>
                        <td>{x.value}</td>
                    </tr>
                )),
        };

        const getStateWithPredicate = (predicate: string) => ({
            listBoxes: [{id: TableHOCUtils.getPredicateId(defaultProps.id, predicateId), selected: [predicate]}],
        });

        it('should not throw', () => {
            expect(() => {
                shallowWithState(<TableWithPredicate id="a" data={[]} renderBody={_.identity} />, {}).dive();
                shallowWithState(
                    <TableWithPredicate id="b" data={[{value: 'a'}]} renderBody={_.identity} />,
                    {}
                ).dive();
            }).not.toThrow();
        });

        it('should render a TableHOC', () => {
            const wrapper = shallowWithState(<TableWithPredicate {...defaultProps} />, {})
                .dive()
                .dive();

            expect(wrapper.find(TableHOC).exists()).toBe(true);
        });

        it('should add an action in the TableHOC props', () => {
            const wrapper = shallowWithState(<TableWithPredicate {...defaultProps} />, {})
                .dive()
                .dive();
            const actions = wrapper.find(TableHOC).prop('actions');

            expect(actions.length).toBe(1);
        });

        it('should filter out elements not matching the predicate in the state', async () => {
            const predicate = predicateValues[1].value;
            const wrapper = shallowWithState(<TableWithPredicate {...defaultProps} />, getStateWithPredicate(predicate))
                .dive()
                .dive();

            const filteredData = _.filter(defaultProps.data, ({city}) => city === predicate);
            const tableData = wrapper.find(TableHOC).prop('data');

            expect(tableData).toEqual(filteredData);
        });

        it('should show values when opened', async () => {
            render(<TableWithPredicate {...defaultProps} />);

            expect(
                screen.queryByRole('option', {
                    name: /all/i,
                })
            ).not.toBeInTheDocument();
            expect(
                screen.queryByRole('option', {
                    name: /test/i,
                })
            ).not.toBeInTheDocument();

            // Click on the dropdown
            await userEvent.click(screen.getByRole('button'));

            expect(
                screen.getByRole('option', {
                    name: /all/i,
                })
            ).toBeInTheDocument();
            expect(
                screen.getByRole('option', {
                    name: /test/i,
                })
            ).toBeInTheDocument();
        });
    });
});
