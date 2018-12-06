import {ShallowWrapper} from 'enzyme';
import {mountWithStore, shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import {createMockStore, mockStore} from 'redux-test-utils';

import {IReactVaporState} from '../../../ReactVapor';
import {addActionsToActionBar} from '../../actions/ActionBarActions';
import {CollapsibleToggle} from '../../collapsible/CollapsibleToggle';
import {TableRowActions} from '../actions/TableRowActions';
import {ITableRowConnectedProps, TableRowConnected} from '../TableRowConnected';

describe('Table HOC', () => {
    describe('TableRowConnected', () => {
        let store: mockStore<IReactVaporState>;
        const defaultProps = {
            id: 'a',
            tableId: 'b',
        };

        beforeEach(() => {
            store = createMockStore({
                tableHOCRow: [{
                    id: defaultProps.id,
                    tableId: defaultProps.tableId,
                }],
            });
        });

        it('should not throw', () => {
            expect(() => shallowWithStore(<TableRowConnected id='a' tableId='b' />, store)).not.toThrow();
            expect(() => shallowWithStore(<TableRowConnected id='b' tableId='c' actions={[{enabled: false, name: 'test'}]} />, store)).not.toThrow();
        });

        it('should render a tr', () => {
            const wrapper = shallowWithStore(<TableRowConnected id='a' tableId='b' />, store).dive();
            expect(wrapper.find('tr').exists()).toBe(true);
        });

        it('should have the class selected if the row is selected in the state', () => {
            store = createMockStore({
                tableHOCRow: [{
                    id: defaultProps.id,
                    tableId: defaultProps.tableId,
                    selected: true,
                }],
            });
            const wrapper = shallowWithStore(<TableRowConnected id='a' tableId='b' />, store).dive();
            expect(wrapper.find('tr').hasClass('selected')).toBe(true);
        });

        it('should not have the class selected if the row is not selected in the state', () => {
            store = createMockStore({
                tableHOCRow: [{
                    id: defaultProps.id,
                    tableId: defaultProps.tableId,
                    selected: false,
                }],
            });
            const wrapper = shallowWithStore(<TableRowConnected id='a' tableId='b' />, store).dive();
            expect(wrapper.find('tr').hasClass('selected')).toBe(false);
        });

        it('should dispatch a TableRowActions.add on componentDidMount', () => {
            const expectedAction = TableRowActions.add(defaultProps.id, defaultProps.tableId);

            shallowWithStore(<TableRowConnected {...defaultProps} />, store).dive();

            expect(store.isActionDispatched(expectedAction)).toBe(true);
        });

        it('should dispatch an TableRowActions.remove on componentWillUnmount', () => {
            const expectedAction = TableRowActions.remove(defaultProps.id);

            const wrapper = shallowWithStore(<TableRowConnected {...defaultProps} />, store).dive();
            wrapper.unmount();

            expect(store.isActionDispatched(expectedAction)).toBe(true);
        });

        it('should dispatch an addActionsToActionBar on click', () => {
            const actions = [{name: 'name', enabled: false}];
            const expectedAction = addActionsToActionBar(defaultProps.tableId, actions);

            const wrapper = shallowWithStore(<TableRowConnected {...defaultProps} actions={actions} />, store).dive();
            wrapper.find('tr').simulate('click', {});

            expect(store.isActionDispatched(expectedAction)).toBe(true);
        });

        it('should dispatch a TableRowActions.select action on click when actions is not empty', () => {
            const expectedAction = TableRowActions.select(defaultProps.id, false);

            const wrapper = shallowWithStore(<TableRowConnected {...defaultProps} actions={[{enabled: true, name: 'action'}]} />, store).dive();
            wrapper.find('tr').simulate('click', {});

            expect(store.isActionDispatched(expectedAction)).toBe(true);
        });

        it('should not dispatch a TableRowActions.select action on click when actions is empty', () => {
            const actionNotExpected = TableRowActions.select(defaultProps.id, false);

            const wrapper = shallowWithStore(<TableRowConnected {...defaultProps} />, store).dive();
            wrapper.find('tr').simulate('click', {});

            expect(store.isActionDispatched(actionNotExpected)).toBe(false);
        });

        it('should not dispatch a TableRowActions.select action on click when clicking inside an underlying dropdown', () => {
            const actionNotExpected = TableRowActions.select(defaultProps.id, false);

            // We must mount the component here because simulated events don't propagate throughout ShallowWrappers
            const wrapper = mountWithStore(
                <TableRowConnected
                    {...defaultProps}
                    actions={[{enabled: true, name: 'action'}]} >
                    <td><div className='dropdown'></div></td>
                </TableRowConnected>,
                store,
            );

            wrapper.find('.dropdown').simulate('click');

            expect(store.isActionDispatched(actionNotExpected)).toBe(false);
        });

        it('should dispatch an TableRowActions.select on click and handle multi-select', () => {
            const expectedActionWithMulti = TableRowActions.select(defaultProps.id, true);
            const expectedActionWithoutMulti = TableRowActions.select(defaultProps.id, false);

            const wrapper = shallowWithStore(
                <TableRowConnected
                    {...defaultProps}
                    actions={[{enabled: true, name: 'action'}]}
                    isMultiselect />,
                store,
            ).dive();

            wrapper.find('tr').simulate('click', {ctrlKey: true});
            expect(store.isActionDispatched(expectedActionWithMulti)).toBe(true);

            wrapper.find('tr').simulate('click', {ctrlKey: false});
            expect(store.isActionDispatched(expectedActionWithoutMulti)).toBe(true);
        });

        describe('when the row is collapsible', () => {
            let wrapper: ShallowWrapper<ITableRowConnectedProps>;
            const collapsibleContent = <div>Collapsible content</div>;

            beforeEach(() => {
                store = createMockStore({
                    tableHOCRow: [{
                        id: defaultProps.id,
                        tableId: defaultProps.tableId,
                        selected: false,
                        opened: true,
                    }],
                });

                wrapper = shallowWithStore(
                    <TableRowConnected
                        id={defaultProps.id}
                        tableId={defaultProps.tableId}
                        collapsible={{
                            content: collapsibleContent,
                        }}
                    >
                        <td>Column 1</td>
                        <td>Column 2</td>
                        <td>Column 3</td>
                    </TableRowConnected>,
                    store,
                ).dive();
            });

            it('should render an additional row for the collapsible content', () => {
                expect(wrapper.find('tr').length).toBe(2);
                expect(wrapper.find('tr').at(0).hasClass('heading-row')).toBe(true);
                expect(wrapper.find('tr').at(1).hasClass('collapsible-row')).toBe(true);
            });

            it('should render a single cell in the collapsible row that spans accross all the columns +1 for the toggle', () => {
                expect(wrapper.find('tr.collapsible-row td').props().colSpan).toBe(3 + 1);
            });

            it('should render the collapsible content node inside the collapsible row', () => {
                expect(wrapper.find('tr.collapsible-row td').contains(collapsibleContent)).toBe(true);
            });

            it('should have the class opened if the row is opened in the state', () => {
                expect(wrapper.find('tr.heading-row').hasClass('opened')).toBe(true);
            });

            it('should render a CollapsibleToggle as collapsed state indicator if no customToggle is specified', () => {
                expect(wrapper.find(CollapsibleToggle).exists()).toBe(true);
                expect(wrapper.find(CollapsibleToggle).props().expanded).toBe(true);
            });

            it('should render a collapsible row custom toggle when specified using the prop renderCustomToggleCell', () => {
                const expectedToggle = <td>Opened</td>;
                wrapper.setProps({
                    collapsible: {
                        content: collapsibleContent,
                        renderCustomToggleCell: (opened: boolean) => expectedToggle,
                    },
                });

                expect(wrapper.find('tr.heading-row td').last().equals(expectedToggle)).toBe(true);
            });

            it('should dispatch a toggleCollapsible action when clicking on a collapsible heading-row', () => {
                const expectedAction = TableRowActions.toggleCollapsible(defaultProps.id);

                wrapper.find('tr.heading-row').simulate('click', {});

                expect(store.isActionDispatched(expectedAction)).toBe(true);
            });

        });

        it('should dispatch a toggleCollapsible action with opened:true on mount when expandOnMount is set to true', () => {
            const expectedAction = TableRowActions.toggleCollapsible(defaultProps.id, true);

            store = createMockStore({
                tableHOCRow: [{
                    id: defaultProps.id,
                    tableId: defaultProps.tableId,
                    selected: false,
                    opened: false,
                }],
            });

            shallowWithStore(
                <TableRowConnected
                    id={defaultProps.id}
                    tableId={defaultProps.tableId}
                    collapsible={{
                        content: <div>Whatever</div>,
                        expandOnMount: true,
                    }}
                />,
                store,
            ).dive();

            expect(store.isActionDispatched(expectedAction)).toBe(true);
        });

        it('should dispatch a toggleCollapsible action with opened:true when changing from a non-collapsible to a collapsible row', () => {
            const expectedAction = TableRowActions.toggleCollapsible(defaultProps.id, true);

            store = createMockStore({
                tableHOCRow: [{
                    id: defaultProps.id,
                    tableId: defaultProps.tableId,
                    selected: false,
                    opened: false,
                }],
            });

            const row = shallowWithStore(
                <TableRowConnected
                    id={defaultProps.id}
                    tableId={defaultProps.tableId}
                    collapsible={{expandOnMount: true}}
                />,
                store,
            ).dive();
            expect(store.isActionDispatched(expectedAction)).toBe(false);

            row.setProps({
                collapsible: {
                    expandOnMount: true,
                    content: <div>Whatever</div>,
                },
            });
            expect(store.isActionDispatched(expectedAction)).toBe(true);
        });

        it('should not dispatch a toggleCollapsible action when changing from a non-collapsible to a collapsible row if expandOnMount is false', () => {
            const actionNotExpected = TableRowActions.toggleCollapsible(defaultProps.id, true);

            store = createMockStore({
                tableHOCRow: [{
                    id: defaultProps.id,
                    tableId: defaultProps.tableId,
                    selected: false,
                    opened: false,
                }],
            });

            const row = shallowWithStore(
                <TableRowConnected
                    id={defaultProps.id}
                    tableId={defaultProps.tableId}
                />,
                store,
            ).dive();
            expect(store.isActionDispatched(actionNotExpected)).toBe(false);

            row.setProps({
                collapsible: {
                    content: <div>Whatever</div>,
                },
            });
            expect(store.isActionDispatched(actionNotExpected)).toBe(false);
        });
    });
});
