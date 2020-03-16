import {ShallowWrapper} from 'enzyme';
import {mountWithStore, shallowWithStore} from 'enzyme-redux';
import * as React from 'react';

import {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';
import {addActionsToActionBar} from '../../actions/ActionBarActions';
import {CollapsibleToggle} from '../../collapsible/CollapsibleToggle';
import {TableHOCRowActions} from '../actions/TableHOCRowActions';
import {ITableRowConnectedProps, TableRowConnected} from '../TableRowConnected';
import {TableSelectors} from '../TableSelectors';

describe('Table HOC', () => {
    describe('TableRowConnected', () => {
        let store: ReactVaporMockStore;
        const defaultProps = {
            id: 'a',
            tableId: 'b',
        };

        beforeEach(() => {
            store = getStoreMock({
                tableHOCRow: [
                    {
                        id: defaultProps.id,
                        tableId: defaultProps.tableId,
                        selected: false,
                    },
                ],
            });
        });

        it('should not throw', () => {
            expect(() => shallowWithStore(<TableRowConnected id="a" tableId="b" />, store)).not.toThrow();
            expect(() =>
                shallowWithStore(
                    <TableRowConnected id="b" tableId="c" actions={[{enabled: false, name: 'test'}]} />,
                    store
                )
            ).not.toThrow();
        });

        it('should render a tr', () => {
            const wrapper = shallowWithStore(<TableRowConnected id="a" tableId="b" />, store).dive();
            expect(wrapper.find('tr').exists()).toBe(true);
        });

        it('should have the class selected if the row is selected in the state', () => {
            store = getStoreMock({
                tableHOCRow: [
                    {
                        id: defaultProps.id,
                        tableId: defaultProps.tableId,
                        selected: true,
                    },
                ],
            });
            const wrapper = shallowWithStore(<TableRowConnected id="a" tableId="b" />, store).dive();
            expect(wrapper.find('tr').hasClass('selected')).toBe(true);
        });

        it('should have the class "row-disabled" if the row has disabled prop to true', () => {
            const wrapper = shallowWithStore(<TableRowConnected id="a" tableId="b" disabled />, store).dive();
            expect(wrapper.find('tr').hasClass('row-disabled')).toBe(true);
        });

        it('should have the class "no-hover" if the row has actions prop empty', () => {
            const wrapper = shallowWithStore(<TableRowConnected id="a" tableId="b" />, store).dive();
            expect(wrapper.find('tr').hasClass('no-hover')).toBe(true);
        });

        it('should not have the class "no-hover" if the row has actions prop', () => {
            const actions = [{name: 'name', enabled: true}];
            const wrapper = shallowWithStore(<TableRowConnected id="a" tableId="b" actions={actions} />, store).dive();
            expect(wrapper.find('tr').hasClass('no-hover')).not.toBe(true);
        });

        it('should not have the class selected if the row is not selected in the state', () => {
            store = getStoreMock({
                tableHOCRow: [
                    {
                        id: defaultProps.id,
                        tableId: defaultProps.tableId,
                        selected: false,
                    },
                ],
            });
            const wrapper = shallowWithStore(<TableRowConnected id="a" tableId="b" />, store).dive();
            expect(wrapper.find('tr').hasClass('selected')).toBe(false);
        });

        it('should dispatch a TableHOCRowActions.add on componentDidMount', () => {
            const expectedAction = TableHOCRowActions.add(defaultProps.id, defaultProps.tableId);

            shallowWithStore(<TableRowConnected {...defaultProps} />, store).dive();

            expect(store.getActions()).toContain(expectedAction);
        });

        it('should dispatch an TableHOCRowActions.remove on componentWillUnmount', () => {
            const expectedAction = TableHOCRowActions.remove(defaultProps.id, defaultProps.tableId, true);
            spyOn(TableSelectors, 'getTableRow').and.returnValue({selected: true, opened: false});

            const wrapper = shallowWithStore(<TableRowConnected {...defaultProps} />, store).dive();
            wrapper.unmount();

            expect(store.getActions()).toContain(expectedAction);
        });

        it('should dispatch an addActionsToActionBar on click', () => {
            const actions = [{name: 'name', enabled: false}];
            const expectedAction = addActionsToActionBar(defaultProps.tableId, actions);

            const wrapper = shallowWithStore(<TableRowConnected {...defaultProps} actions={actions} />, store).dive();
            wrapper.find('tr').simulate('click', {});

            expect(store.getActions()).toContain(expectedAction);
        });

        it('should dispatch a TableHOCRowActions.select action on click when actions is not empty', () => {
            const expectedAction = TableHOCRowActions.select(defaultProps.id, false);

            const wrapper = shallowWithStore(
                <TableRowConnected {...defaultProps} actions={[{enabled: true, name: 'action'}]} />,
                store
            ).dive();
            wrapper.find('tr').simulate('click', {});

            expect(store.getActions()).toContain(expectedAction);
        });

        it('should dispatch an addActionsToActionBar when the actions change and the row was selected', () => {
            const actions = [{name: 'name', enabled: false}];
            const newActions = [{name: 'name', enabled: true}];
            const expectedAction = addActionsToActionBar(defaultProps.tableId, actions);
            spyOn(TableSelectors, 'getTableRow').and.returnValue({selected: true, opened: false});

            const wrapper = shallowWithStore(<TableRowConnected {...defaultProps} actions={actions} />, store).dive();
            wrapper.setProps({actions: newActions});

            expect(store.getActions()).toContain(expectedAction);
        });

        it('should dispatch a TableHOCRowActions.select action when the action change and the row was selected', () => {
            const actions = [{name: 'name', enabled: false}];
            const newActions = [{name: 'name', enabled: true}];
            const expectedAction = TableHOCRowActions.select(defaultProps.id, false);
            spyOn(TableSelectors, 'getTableRow').and.returnValue({selected: true, opened: false});

            const wrapper = shallowWithStore(<TableRowConnected {...defaultProps} actions={actions} />, store).dive();
            wrapper.setProps({actions: newActions});

            expect(store.getActions()).toContain(expectedAction);
        });

        it('should not dispatch a TableHOCRowActions.select action on click when actions is empty', () => {
            const actionNotExpected = TableHOCRowActions.select(defaultProps.id, false);

            const wrapper = shallowWithStore(<TableRowConnected {...defaultProps} />, store).dive();
            wrapper.find('tr').simulate('click', {});

            expect(store.getActions()).not.toContain(actionNotExpected);
        });

        it('should not dispatch a TableHOCRowActions.select action on click when clicking inside an underlying dropdown', () => {
            const actionNotExpected = TableHOCRowActions.select(defaultProps.id, false);

            // We must mount the component here because simulated events don't propagate throughout ShallowWrappers
            const wrapper = mountWithStore(
                <TableRowConnected {...defaultProps} actions={[{enabled: true, name: 'action'}]}>
                    <td>
                        <div className="dropdown"></div>
                    </td>
                </TableRowConnected>,
                store
            );

            wrapper.find('.dropdown').simulate('click');

            expect(store.getActions()).not.toContain(actionNotExpected);
        });

        it('should dispatch an TableHOCRowActions.select on click and handle multi-select', () => {
            const expectedActionWithMulti = TableHOCRowActions.select(defaultProps.id, true);
            const expectedActionWithoutMulti = TableHOCRowActions.select(defaultProps.id, false);

            const wrapper = shallowWithStore(
                <TableRowConnected {...defaultProps} actions={[{enabled: true, name: 'action'}]} isMultiselect />,
                store
            ).dive();

            wrapper.find('tr').simulate('click', {ctrlKey: true});
            expect(store.getActions()).toContain(expectedActionWithMulti);

            wrapper.find('tr').simulate('click', {ctrlKey: false});
            expect(store.getActions()).toContain(expectedActionWithoutMulti);
        });

        it('should dispatch trigger actions with callOnDoubleClick=true when double clicking the row', () => {
            const triggerActionSpy = jasmine.createSpy('triggerAction');

            const wrapper = shallowWithStore(
                <TableRowConnected
                    {...defaultProps}
                    actions={[{enabled: true, name: 'action', callOnDoubleClick: true, trigger: triggerActionSpy}]}
                />,
                store
            ).dive();

            wrapper.find('tr').simulate('doubleclick');
            expect(triggerActionSpy).toHaveBeenCalledTimes(1);
        });

        describe('when the row is collapsible', () => {
            let wrapper: ShallowWrapper<ITableRowConnectedProps>;
            const collapsibleContent = <div>Collapsible content</div>;

            const shallowComponent = (props: Partial<ITableRowConnectedProps> = {}) => {
                store = getStoreMock({
                    tableHOCRow: [
                        {
                            id: defaultProps.id,
                            tableId: defaultProps.tableId,
                            selected: false,
                            opened: true,
                        },
                    ],
                });

                wrapper = shallowWithStore(
                    <TableRowConnected
                        id={defaultProps.id}
                        tableId={defaultProps.tableId}
                        collapsible={{
                            content: collapsibleContent,
                        }}
                        {...props}
                    >
                        <td>Column 1</td>
                        <td>Column 2</td>
                        <td>Column 3</td>
                        {null}
                        {[]}
                        {false}
                    </TableRowConnected>,
                    store
                ).dive();
            };

            it('should render an additional row for the collapsible content', () => {
                shallowComponent();
                expect(wrapper.find('tr').length).toBe(2);
                expect(
                    wrapper
                        .find('tr')
                        .at(0)
                        .hasClass('heading-row')
                ).toBe(true);
                expect(
                    wrapper
                        .find('tr')
                        .at(1)
                        .hasClass('collapsible-row')
                ).toBe(true);
            });

            it('should render a single cell in the collapsible row that spans accross all the columns +1 for the toggle', () => {
                shallowComponent();
                expect(wrapper.find('tr.collapsible-row td').props().colSpan).toBe(3 + 1);
            });

            it('should render the collapsible content node inside the collapsible row', () => {
                shallowComponent();
                expect(wrapper.find('tr.collapsible-row td').contains(collapsibleContent)).toBe(true);
            });

            it('should have the class opened if the row is opened in the state', () => {
                shallowComponent();
                expect(wrapper.find('tr.heading-row').hasClass('opened')).toBe(true);
            });

            it('should render a CollapsibleToggle as collapsed state indicator if no customToggle is specified', () => {
                shallowComponent();
                expect(wrapper.find(CollapsibleToggle).exists()).toBe(true);
                expect(wrapper.find(CollapsibleToggle).props().expanded).toBe(true);
            });

            it('should render a collapsible row custom toggle when specified using the prop renderCustomToggleCell', () => {
                shallowComponent();
                const expectedToggle = <td>Opened</td>;
                wrapper.setProps({
                    collapsible: {
                        content: collapsibleContent,
                        renderCustomToggleCell: (opened: boolean) => expectedToggle,
                    },
                });

                expect(
                    wrapper
                        .find('tr.heading-row td')
                        .last()
                        .equals(expectedToggle)
                ).toBe(true);
            });

            it('should dispatch a toggleCollapsible action when clicking on the collapsible button', () => {
                shallowComponent();
                const expectedAction = TableHOCRowActions.toggleCollapsible(defaultProps.id);

                wrapper
                    .find(CollapsibleToggle)
                    .simulate('click', jasmine.createSpyObj('event', ['preventDefault', 'stopPropagation']));

                expect(store.getActions()).toContain(expectedAction);
            });

            it('should set the collapsibleToggle null if the content is null', () => {
                shallowComponent({collapsible: {content: null}});
                expect(wrapper.find(CollapsibleToggle).length).toBe(0);
            });
        });

        it('should dispatch a toggleCollapsible action with opened:true on mount when expandOnMount is set to true', () => {
            const expectedAction = TableHOCRowActions.toggleCollapsible(defaultProps.id, true);

            store = getStoreMock({
                tableHOCRow: [
                    {
                        id: defaultProps.id,
                        tableId: defaultProps.tableId,
                        selected: false,
                        opened: false,
                    },
                ],
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
                store
            ).dive();

            expect(store.getActions()).toContain(expectedAction);
        });

        it('should dispatch a toggleCollapsible action with opened:true when changing from a non-collapsible to a collapsible row', () => {
            const expectedAction = TableHOCRowActions.toggleCollapsible(defaultProps.id, true);

            store = getStoreMock({
                tableHOCRow: [
                    {
                        id: defaultProps.id,
                        tableId: defaultProps.tableId,
                        selected: false,
                        opened: false,
                    },
                ],
            });

            const row = shallowWithStore(
                <TableRowConnected
                    id={defaultProps.id}
                    tableId={defaultProps.tableId}
                    collapsible={{expandOnMount: true}}
                />,
                store
            ).dive();
            expect(store.getActions()).not.toContain(expectedAction);

            row.setProps({
                collapsible: {
                    expandOnMount: true,
                    content: <div>Whatever</div>,
                },
            });
            expect(store.getActions()).toContain(expectedAction);
        });

        it('should not dispatch a toggleCollapsible action when changing from a non-collapsible to a collapsible row if expandOnMount is false', () => {
            const actionNotExpected = TableHOCRowActions.toggleCollapsible(defaultProps.id, true);

            store = getStoreMock({
                tableHOCRow: [
                    {
                        id: defaultProps.id,
                        tableId: defaultProps.tableId,
                        selected: false,
                        opened: false,
                    },
                ],
            });

            const row = shallowWithStore(
                <TableRowConnected id={defaultProps.id} tableId={defaultProps.tableId} />,
                store
            ).dive();
            expect(store.getActions()).not.toContain(actionNotExpected);

            row.setProps({
                collapsible: {
                    content: <div>Whatever</div>,
                },
            });
            expect(store.getActions()).not.toContain(actionNotExpected);
        });

        it('should call the onToggleCollapsible props with true the row is opened', () => {
            const spy = jasmine.createSpy('onToggle');
            store = getStoreMock({
                tableHOCRow: [
                    {
                        id: defaultProps.id,
                        tableId: defaultProps.tableId,
                        selected: false,
                        opened: false,
                    },
                ],
            });

            const row = shallowWithStore(
                <TableRowConnected
                    id={defaultProps.id}
                    tableId={defaultProps.tableId}
                    collapsible={{
                        content: <div>Whatever</div>,
                        onToggleCollapsible: spy,
                    }}
                />,
                store
            ).dive();

            row.find(CollapsibleToggle).simulate(
                'click',
                jasmine.createSpyObj('event', ['preventDefault', 'stopPropagation'])
            );
            expect(spy).toHaveBeenCalledWith(true);
        });

        it('should call the onToggleCollapsible props with false the row is closed', () => {
            const spy = jasmine.createSpy('onToggle');
            store = getStoreMock({
                tableHOCRow: [
                    {
                        id: defaultProps.id,
                        tableId: defaultProps.tableId,
                        selected: false,
                        opened: true,
                    },
                ],
            });

            const row = shallowWithStore(
                <TableRowConnected
                    id={defaultProps.id}
                    tableId={defaultProps.tableId}
                    collapsible={{
                        content: <div>Whatever</div>,
                        onToggleCollapsible: spy,
                    }}
                />,
                store
            ).dive();

            row.find(CollapsibleToggle).simulate(
                'click',
                jasmine.createSpyObj('event', ['preventDefault', 'stopPropagation'])
            );
            expect(spy).toHaveBeenCalledWith(false);
        });
    });
});
